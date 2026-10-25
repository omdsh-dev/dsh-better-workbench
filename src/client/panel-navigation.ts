import type { WorkbenchService } from './types.ts'

/** The slice of DSH's layout service used to keep global panels and workbenches mutually exclusive. */
export interface PanelLayout {
  readonly panelInfo: {
    getSnapshot(): { readonly activePanelId: string | null }
    subscribe(listener: () => void): () => void
  }
  selectPanel(panelId: null): void
}

function isPanelLayout(value: unknown): value is PanelLayout {
  if (typeof value !== 'object' || value === null) return false
  const layout = value as Partial<PanelLayout>
  const info = layout.panelInfo as Partial<PanelLayout['panelInfo']> | undefined
  return typeof layout.selectPanel === 'function'
    && typeof info?.getSnapshot === 'function' && typeof info.subscribe === 'function'
}

/**
 * A workbench is drawn over the main column, so a global panel (Plugins, Schedules, ...)
 * selected underneath it stays hidden. Keep the two exclusive in both directions:
 * selecting a panel closes the workbench, and opening a workbench clears the panel
 * selection so selecting the same panel again is a real change.
 * @returns a disposer for both subscriptions.
 */
export function bindPanelNavigation(service: WorkbenchService, layout: unknown): () => void {
  if (!isPanelLayout(layout)) return () => {}
  let active = true
  const open = (): boolean => service.getSnapshot().route.kind !== 'conversation'
  const unsubscribePanel = layout.panelInfo.subscribe(() => {
    if (!active || layout.panelInfo.getSnapshot().activePanelId === null || !open()) return
    service.close()
    // Closing can be refused (unsaved changes); keep the visible workbench and the selection consistent.
    if (open()) layout.selectPanel(null)
  })
  const unsubscribeService = service.subscribe(() => {
    if (!active || !open() || layout.panelInfo.getSnapshot().activePanelId === null) return
    layout.selectPanel(null)
  })
  return () => {
    active = false
    unsubscribePanel()
    unsubscribeService()
  }
}
