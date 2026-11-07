import { useEffect, useRef, useState } from 'react'
import { Button, IconChevronLeftOutlineRegular, IconChevronRightOutlineRegular, IconPersonalizationOutlineRegular, IconLoadingOutlineRegular, Input, Modal, Tooltip } from '@deepseek-ai/dsh-client-ui-primitives'
import { WorkbenchAppIcon } from './WorkbenchIcon.tsx'
import { openWorkbench } from './open-workbench.ts'
import { WEBSITE_APP_ID } from './website.ts'
import { WorkbenchErrorBoundary } from './WorkbenchErrorBoundary.tsx'
import type { WorkbenchAppDefinition, WorkbenchConfig, WorkbenchCreationResult, WorkbenchService, WorkbenchSnapshot, WorkbenchTemplateSummary } from './types.ts'

interface Choice { key: string; title: string; appId?: string; template?: WorkbenchTemplateSummary; available: boolean }
interface Draft { choice: Choice; app?: WorkbenchAppDefinition; generation?: number; title: string; customTitle: boolean; config: WorkbenchConfig }

export function uniqueWorkbenchTitle(base: string, snapshot: WorkbenchSnapshot): string {
  if (!base) return ''
  const names = new Set(snapshot.instances.map(instance => instance.title))
  if (!names.has(base)) return base
  let number = 2
  while (names.has(base + ' ' + number)) number++
  return base + ' ' + number
}

export function WorkbenchCreateDialog({ service, snapshot }: { service: WorkbenchService; snapshot: WorkbenchSnapshot }): JSX.Element {
  const [draft, setDraft] = useState<Draft | null>(null)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [handoff, setHandoff] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const inFlight = useRef(false)
  const operation = useRef(0)
  const owner = useRef({ active: true })
  useEffect(() => {
    const current = { active: true }
    owner.current = current
    // Native Modal restores focus on close; hidden conversation focus must not scroll the shell.
    const positions: Array<{ element: HTMLElement; left: number; top: number }> = []
    let element = document.querySelector<HTMLElement>('[data-dsh-better-workbench-center]')?.parentElement
    while (element) { positions.push({ element, left: element.scrollLeft, top: element.scrollTop }); element = element.parentElement }
    return () => {
      current.active = false
      queueMicrotask(() => { for (const saved of positions) if (saved.element.isConnected) { saved.element.scrollLeft = saved.left; saved.element.scrollTop = saved.top } })
    }
  }, [service])
  const busy = pending || snapshot.loading || snapshot.creation.status === 'creating'
  const templatedApps = new Set(snapshot.templates.flatMap(template => template.kind === 'instance' ? [template.appId] : []))
  const choices: Choice[] = [
    ...snapshot.templates.map(template => ({ key: 'template:' + template.templateId, title: template.title, template, available: template.available, appId: template.kind === 'instance' ? template.appId : undefined })),
    ...snapshot.apps.filter(app => !templatedApps.has(app.appId)).map(app => ({ key: 'app:' + app.appId, title: app.title, appId: app.appId, available: true })),
  ]
  const existingFor = (choice: Choice) => snapshot.apps.find(app => app.appId === choice.appId)?.allowMultiple === false
    ? snapshot.instances.find(instance => instance.appId === choice.appId) : undefined
  const isCurrent = draft === null || (draft.app === undefined || snapshot.apps.find(app => app.appId === draft.choice.appId)?.generation === draft.generation)
    && (draft.choice.template === undefined || snapshot.templates.some(template => template.available && JSON.stringify(template) === JSON.stringify(draft.choice.template)))
  let validation: string | null = null
  if (draft && draft.app) {
    try {
      draft.app.config.validate(draft.config)
      draft.app.config.validateCreation?.(draft.config)
    } catch (reason) { validation = reason instanceof Error ? reason.message : String(reason) }
  }
  const choose = (choice: Choice): void => {
    if (busy || !choice.available) return
    const existing = existingFor(choice)
    if (existing) { openWorkbench(service, existing.instanceId); return }
    try {
      const app = choice.appId ? service.getApp(choice.appId) : undefined
      if (choice.appId && !app) throw new Error('应用暂不可用')
      const template = choice.template?.kind === 'instance' ? choice.template : undefined
      const config = structuredClone(template?.defaultConfig ?? app?.config.defaults() ?? {})
      const base = template?.defaultTitle ?? app?.title ?? choice.title
      setDraft({ choice, app, generation: snapshot.apps.find(item => item.appId === choice.appId)?.generation, title: uniqueWorkbenchTitle(base, snapshot), customTitle: false, config })
      setError(null)
      setHandoff(null)
    } catch (reason) { setError(reason instanceof Error ? reason.message : String(reason)) }
  }
  const close = (): void => { if (!busy) service.openHome(false) }
  const submit = async (): Promise<void> => {
    if (!draft || busy || inFlight.current || !isCurrent) return
    const latest = service.getSnapshot()
    if ((draft.app && latest.apps.find(app => app.appId === draft.choice.appId)?.generation !== draft.generation)
      || (draft.choice.template && !latest.templates.some(template => template.available && JSON.stringify(template) === JSON.stringify(draft.choice.template)))) {
      setError('应用或模板已更新，请返回重新选择。')
      return
    }
    if (draft.app && (!draft.title.trim() || validation)) { setError(validation ?? '请输入工作台名称'); return }
    const current = owner.current, token = ++operation.current
    inFlight.current = true
    setPending(true)
    setError(null)
    try {
      let result: WorkbenchCreationResult
      if (draft.choice.template) {
        result = await service.startCreation(draft.choice.template.templateId, draft.app ? { title: draft.title.trim(), config: draft.config } : undefined)
      } else {
        result = await service.createInstance(draft.choice.appId!, draft.title.trim(), draft.config)
      }
      if (!current.active || token !== operation.current) return
      if ('instanceId' in result) openWorkbench(service, result.instanceId, draft.app?.defaultPresentation)
      else setHandoff(result.sessionId)
    } catch (reason) {
      if (current.active && token === operation.current) setError(reason instanceof Error ? reason.message : String(reason))
    } finally {
      if (current.active && token === operation.current) { inFlight.current = false; setPending(false) }
    }
  }
  const cancelWaiting = (): void => {
    operation.current++
    inFlight.current = false
    setPending(false)
    service.cancelCreation()
  }
  const Editor = draft?.app?.renderCreate
  const website = draft?.app?.appId === WEBSITE_APP_ID
  const filtered = choices.filter(choice => choice.title.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()))
  return <Modal open title={draft ? draft.choice.title : '创建工作台'} closeLabel="关闭" onClose={close}
    className="dsh-better-workbench-create-dialog" contentClassName="dsh-better-workbench-create-content"
    footer={<>
      {draft && <Tooltip label="返回模板"><button type="button" className="dsh-better-workbench-frame-button" aria-label="返回模板" disabled={busy} onClick={() => { setDraft(null); setError(null); setHandoff(null) }}><IconChevronLeftOutlineRegular /></button></Tooltip>}
      <span className="dsh-better-workbench-create-spacer" />
      {snapshot.creation.status === 'creating' ? <Button variant="outline" onClick={cancelWaiting}>取消等待</Button> : <Button variant="outline" disabled={busy} onClick={close}>{handoff ? '完成' : '取消'}</Button>}
      {draft && !handoff && <Button variant="primary" disabled={busy || !isCurrent || (draft.app !== undefined && (!draft.title.trim() || validation !== null))} onClick={() => { void submit() }} icon={pending ? <IconLoadingOutlineRegular /> : undefined}>{pending ? '正在创建...' : draft.app ? '创建并打开' : '开始创建'}</Button>}
    </>}>
    {draft === null ? <>
      <input type="search" className="dsh-better-workbench-create-search" placeholder="搜索模板或应用" aria-label="搜索模板或应用" value={query} onChange={event => setQuery(event.target.value)} />
      <div className="dsh-better-workbench-create-choices">
        {filtered.map(choice => {
          const existing = existingFor(choice)
          const app = choice.appId ? service.getApp(choice.appId) : undefined
          return <button type="button" key={choice.key} className="dsh-better-workbench-create-choice" disabled={busy || !choice.available} onClick={() => choose(choice)}>
            {app?.renderIcon ? <WorkbenchAppIcon renderer={app.renderIcon} instance={existing} className="dsh-better-workbench-create-choice-icon" /> : <IconPersonalizationOutlineRegular />}
            <span className="dsh-better-workbench-create-choice-label">{choice.title}</span>
            <span className="dsh-better-workbench-create-choice-kind">{!choice.available ? '暂不可用' : existing ? '打开已有' : choice.template?.kind === 'agent' ? 'Agent' : choice.template ? '模板' : '应用'}</span>
            <IconChevronRightOutlineRegular />
          </button>
        })}
      </div>
      {filtered.length === 0 && <div className="dsh-better-workbench-create-empty">{query ? '没有匹配的模板或应用' : '暂无可用模板或应用'}</div>}
    </> : handoff ? <div role="status">创建已交接，会话：<code>{handoff}</code></div> : <form className={website ? "dsh-better-workbench-create-form" : undefined} onSubmit={event => { event.preventDefault(); void submit() }}>
      {!website && <div className="dsh-better-workbench-create-step">工作台配置</div>}
      {website && draft.app && <label className="dsh-better-workbench-create-field">
        <span>工作台名称</span>
        <Input className="dsh-better-workbench-create-input" autoFocus={!Editor} type="text" aria-label="工作台名称" placeholder="工作台名称" maxLength={120} value={draft.title} disabled={busy} onChange={event => { setDraft({ ...draft, title: event.target.value, customTitle: true }); setError(null) }} />
      </label>}
      {Editor && <WorkbenchErrorBoundary key={draft.choice.key} onRetry={() => choose(draft.choice)}><Editor config={draft.config} disabled={busy || !isCurrent} onChange={(config, suggestedTitle) => {
        if (!owner.current.active || busy) return
        setDraft(previous => previous ? { ...previous, config, title: !previous.customTitle && suggestedTitle ? uniqueWorkbenchTitle(suggestedTitle, snapshot) : previous.title } : null)
        setError(null)
      }} /></WorkbenchErrorBoundary>}
      {!website && draft.app && <label className="dsh-better-workbench-create-field">
        <span>工作台名称</span>
        <input autoFocus={!Editor} type="text" aria-label="工作台名称" maxLength={120} value={draft.title} disabled={busy} onChange={event => { setDraft({ ...draft, title: event.target.value, customTitle: true }); setError(null) }} />
      </label>}
      {!isCurrent && <div role="alert" className="dsh-better-workbench-create-error">应用或模板已更新，请返回重新选择。</div>}
    </form>}
    {error && <div role="alert" className="dsh-better-workbench-create-error">{error}</div>}
  </Modal>
}
