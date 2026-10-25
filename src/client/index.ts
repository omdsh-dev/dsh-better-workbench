import { Component, createElement, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import type { Context as ClientContext } from '@deepseek-ai/cordis'
import { WorkbenchController } from './service.ts'
import { WorkbenchSidebar } from './WorkbenchSidebar.tsx'
import { WorkbenchSurface } from './WorkbenchSurface.tsx'
import { mountWorkbenchDom } from './dom-adapter.ts'
import { WORKBENCH_STYLE } from './styles.ts'
import { websiteApp, websiteTemplate } from './website-app.tsx'
import { WEBSITE_VIEW_STYLE } from './website-view-styles.ts'
import { CREATION_STYLE } from './creation-styles.ts'
import { registerWorkbenchReference } from './workbench-reference.ts'
import { bindPanelNavigation } from './panel-navigation.ts'
import type { WorkbenchService } from './types.ts'

export type * from './types.ts'
export { createWorkbenchReferenceSource, WORKBENCH_REFERENCE_SOURCE } from './workbench-reference.ts'
export { resolveActivePresentation, resolvePresentationLayout } from './presentation.ts'
export type { WorkbenchPresentationLayout } from './presentation.ts'

/** Client service supplied to all workbench application plugins. */
declare module '@deepseek-ai/cordis' {
  interface Context {
    workbench: WorkbenchService
  }
}

interface MountBoundaryProps {
  children: ReactNode
  ready: (ready: boolean) => void
}

class MountBoundary extends Component<MountBoundaryProps, { failed: boolean }> {
  override state = { failed: false }

  static getDerivedStateFromError(): { failed: boolean } { return { failed: true } }

  override componentDidMount(): void { this.props.ready(!this.state.failed) }

  override componentDidCatch(error: unknown): void {
    this.props.ready(false)
    console.error('Workbench surface failed:', error)
  }

  override render(): ReactNode { return this.state.failed ? null : this.props.children }
}

function renderSurface(host: HTMLElement, content: ReactNode, ready: (ready: boolean) => void): () => void {
  const root = createRoot(host)
  try {
    root.render(createElement(MountBoundary, { ready, children: content }))
  } catch (error) {
    root.unmount()
    throw error
  }
  return () => root.unmount()
}

/** Mount the service and reversible compatibility surfaces in this Cordis lifetime. */
export function apply(ctx: ClientContext): void {
  const service = new WorkbenchController()
  ctx.effect(() => () => service.dispose(), 'dsh-better-workbench: controller lifetime')
  ctx.effect(() => {
    const beforeUnload = (event: BeforeUnloadEvent): void => {
      if (service.getSnapshot().dirtyInstanceIds.length === 0) return
      event.preventDefault()
      event.returnValue = ''
    }
    window.addEventListener('beforeunload', beforeUnload)
    return () => { window.removeEventListener('beforeunload', beforeUnload) }
  }, 'dsh-better-workbench: unsaved changes warning')
  ctx.inject(['inputTriggers'], scope => {
    scope.effect(() => registerWorkbenchReference(scope, service), 'dsh-better-workbench: @ reference source')
  })
  ctx.inject(['layout'], scope => {
    scope.effect(() => bindPanelNavigation(service, scope.get('layout')), 'dsh-better-workbench: global panel navigation')
  })
  ctx.effect(() => service.registerApp(websiteApp()), 'dsh-better-workbench: webpage application')
  ctx.effect(() => service.registerTemplate(websiteTemplate()), 'dsh-better-workbench: webpage template')
  ctx.effect(() => ctx.reflect.provide('workbench', service), 'dsh-better-workbench: service')
  ctx.effect(() => mountWorkbenchDom(service, {
    style: WORKBENCH_STYLE + CREATION_STYLE + WEBSITE_VIEW_STYLE,
    getSessions: () => ctx.get('sessions'),
    renderSidebar: (host, ready) => renderSurface(host, createElement(WorkbenchSidebar, { service }), ready),
    renderCenter: (host, ready) => renderSurface(host, createElement(WorkbenchSurface, { service }), ready),
  }), 'dsh-better-workbench: DOM surfaces')
}
