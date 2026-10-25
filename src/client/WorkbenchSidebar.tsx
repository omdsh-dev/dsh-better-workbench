import { useEffect, useMemo, useRef, useState, useSyncExternalStore, type DragEvent } from 'react'
import {
  Button,
  IconCloseFillRegular,
  IconEditOutlineRegular,
  IconEllipsisOutlineRegular,
  IconPersonalizationOutlineRegular,
  IconProjectAddOutlineRegular,
  IconSearchOutlineRegular,
  IconSettingsOutlineRegular,
  IconTrashOutlineRegular,
  Menu,
  Modal,
  Tooltip,
} from '@deepseek-ai/dsh-client-ui-primitives'
import type { WorkbenchAppDefinition, WorkbenchInstance, WorkbenchService } from './types.ts'
import { WorkbenchAppIcon } from './WorkbenchIcon.tsx'
import { openWorkbench } from './open-workbench.ts'
import { WebsiteSettings } from './WebsiteSettings.tsx'
import { WEBSITE_APP_ID } from './website.ts'

export interface WorkbenchSidebarProps {
  service: WorkbenchService
}

type OrderBy = 'manual' | 'updated'

function useWorkbenchSnapshot(service: WorkbenchService) {
  return useSyncExternalStore(
    listener => service.subscribe(listener),
    () => service.getSnapshot(),
    () => service.getSnapshot(),
  )
}

function normalize(value: string): string {
  return value.trim().toLocaleLowerCase()
}

function requestSidebarExpand(): void {
  const button = [...document.querySelectorAll('button')].find(item => item.getAttribute('aria-label') === '展开侧边栏')
  if (button instanceof HTMLButtonElement) button.click()
}

const COLLAPSED_KEY = 'dsh-better-workbench:sidebar-collapsed'

function readCollapsed(): boolean {
  try { return typeof localStorage !== 'undefined' && localStorage.getItem(COLLAPSED_KEY) === '1' } catch { return false }
}

function writeCollapsed(value: boolean): void {
  try { if (typeof localStorage !== 'undefined') localStorage.setItem(COLLAPSED_KEY, value ? '1' : '0') } catch { /* view preference only */ }
}

function WorkbenchHomeIcon({ className }: { className?: string }): JSX.Element {
  return (
    <svg
      width="16"
      height="16"
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M1.5 7.25 8 1.75l6.5 5.5" />
      <path d="M2.75 6.5v8h10.5v-8" />
      <path d="M6 14.5V9.25h4v5.25" />
    </svg>
  )
}

function WorkbenchHomeRow({ active, onOpen }: { active: boolean; onOpen: () => void }): JSX.Element {
  return (
    <button
      type="button"
      className="dsh-better-workbench-sidebar-row dsh-better-workbench-sidebar-home"
      data-active={active}
      onClick={onOpen}
    >
      <WorkbenchHomeIcon className="dsh-better-workbench-sidebar-home-icon" />
      <span className="dsh-better-workbench-sidebar-row-label">首页</span>
    </button>
  )
}

function ViewOptionsMenu({ orderBy, onOrderPick }: {
  orderBy: OrderBy
  onOrderPick: (value: OrderBy) => void
}): JSX.Element {
  const [open, setOpen] = useState(false)
  return (
    <Menu
      open={open}
      onClose={() => { setOpen(false) }}
      items={[
        { type: 'label', id: 'order-by', text: '排序方式' },
        { id: 'manual', label: '手动排序' },
        { id: 'updated', label: '最近使用' },
      ]}
      selectedId={orderBy}
      onSelect={id => {
        if (id === 'manual' || id === 'updated') onOrderPick(id)
        setOpen(false)
      }}
      align="end"
      dense
      portal
      anchor={(
        <Tooltip label="视图选项" side="bottom" delayMs={500}>
          <button
            type="button"
            className="dsh-better-workbench-sidebar-icon-button dsh-better-workbench-sidebar-wide-only"
            aria-label="视图选项"
            onClick={() => { setOpen(value => !value) }}
          >
            <IconPersonalizationOutlineRegular />
          </button>
        </Tooltip>
      )}
    />
  )
}

function WorkbenchRow({
  instance,
  appIcon,
  compact,
  active,
  draggable,
  dropPosition,
  busy,
  canMoveUp,
  canMoveDown,
  onMove,
  onOpen,
  onRename,
  onSettings,
  onDelete,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
}: {
  instance: WorkbenchInstance
  appIcon?: WorkbenchAppDefinition['renderIcon']
  compact: boolean
  active: boolean
  draggable: boolean
  dropPosition: 'before' | 'after' | null
  busy: boolean
  canMoveUp: boolean
  canMoveDown: boolean
  onMove: (direction: -1 | 1) => void
  onOpen: () => void
  onRename: () => void
  onSettings?: () => void
  onDelete: () => void
  onDragStart: (event: DragEvent<HTMLDivElement>) => void
  onDragOver: (event: DragEvent<HTMLDivElement>) => void
  onDrop: (event: DragEvent<HTMLDivElement>) => void
  onDragEnd: () => void
}): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      className="dsh-better-workbench-sidebar-row"
      data-active={active}
      data-menu-open={menuOpen}
      data-drop-position={dropPosition ?? undefined}
      role="button"
      tabIndex={compact ? -1 : 0}
      draggable={draggable}
      onClick={onOpen}
      onKeyDown={event => {
        if (event.target === event.currentTarget && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault()
          onOpen()
        }
      }}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
    >
      {compact ? <IconPersonalizationOutlineRegular className="dsh-better-workbench-sidebar-rail-icon" /> : <WorkbenchAppIcon renderer={appIcon} instance={instance} className="dsh-better-workbench-sidebar-app-icon" />}
      <span className="dsh-better-workbench-sidebar-row-label">{instance.title}</span>
      {!compact && (
        <span className="dsh-better-workbench-sidebar-row-actions">
          <Menu
            open={menuOpen}
            onClose={() => { setMenuOpen(false) }}
            items={[
              ...(onSettings ? [{ id: 'website-settings', label: '网页设置', icon: <IconSettingsOutlineRegular />, disabled: busy }] : []),
              { id: 'rename', label: '重命名', icon: <IconEditOutlineRegular />, disabled: busy },
              { id: 'move-up', label: '上移', disabled: !canMoveUp },
              { id: 'move-down', label: '下移', disabled: !canMoveDown },
              { id: 'delete', label: '删除', icon: <IconTrashOutlineRegular />, danger: true, disabled: busy },
            ]}
            onSelect={id => {
              setMenuOpen(false)
              if (id === 'website-settings') onSettings?.()
              if (id === 'rename') onRename()
              if (id === 'delete') onDelete()
              if (id === 'move-up' && canMoveUp) onMove(-1)
              if (id === 'move-down' && canMoveDown) onMove(1)
            }}
            dense
            portal
            closeOnPointerLeave
            anchor={(
              <button
                type="button"
                className="dsh-better-workbench-sidebar-row-action"
                aria-label={`工作台“${instance.title}”的操作`}
                title="更多操作"
                disabled={busy}
                onClick={event => { event.stopPropagation(); setMenuOpen(value => !value) }}
              >
                <IconEllipsisOutlineRegular />
              </button>
            )}
          />
        </span>
      )}
    </div>
  )
}

/** Launcher inserted above DSH's workspace/session browser. */
export function WorkbenchSidebar({ service }: WorkbenchSidebarProps): JSX.Element {
  const snapshot = useWorkbenchSnapshot(service)
  const section = useRef<HTMLElement>(null)
  const searchRoot = useRef<HTMLDivElement>(null)
  const searchInput = useRef<HTMLInputElement>(null)
  const composingRef = useRef(false)
  const [compact, setCompact] = useState(false)
  const [searchExpanded, setSearchExpanded] = useState(false)
  const [collapsed, setCollapsedState] = useState(readCollapsed)
  const [query, setQuery] = useState('')
  const [orderBy, setOrderBy] = useState<OrderBy>('manual')
  const [draggedId, setDraggedId] = useState<string | null>(null)
  const [dropTarget, setDropTarget] = useState<{ id: string; position: 'before' | 'after' } | null>(null)
  const [renameTarget, setRenameTarget] = useState<{ instanceId: string; currentTitle: string } | null>(null)
  const [websiteTarget, setWebsiteTarget] = useState<{ id: string; generation: number } | null>(null)
  const websiteInstance = snapshot.instances.find(instance => instance.instanceId === websiteTarget?.id && instance.appId === WEBSITE_APP_ID)
  const [renameDraft, setRenameDraft] = useState('')
  const [renaming, setRenaming] = useState(false)
  const [renameError, setRenameError] = useState<string | null>(null)
  const [deleteTarget, setDeleteTarget] = useState<{ instanceId: string; title: string } | null>(null)
  const [deleting, setDeleting] = useState(false)
  const [deleteError, setDeleteError] = useState<string | null>(null)
  const [reordering, setReordering] = useState(false)
  const [reorderError, setReorderError] = useState<string | null>(null)
  const mutation = useRef(false)
  const lifecycle = useRef({ active: true })
  useEffect(() => {
    const current = { active: true }
    lifecycle.current = current
    mutation.current = false
    setRenaming(false)
    setDeleting(false)
    setReordering(false)
    return () => { current.active = false }
  }, [service])
  const busy = snapshot.loading || snapshot.creation.status === 'creating' || renaming || deleting || reordering
  const renameTrimmed = renameDraft.trim()
  const renameBlocked = busy || renameTrimmed === '' || renameTarget === null
  const normalizedQuery = normalize(query)
  const listHidden = collapsed && !searchExpanded && normalizedQuery === ''
  const setCollapsed = (value: boolean): void => { setCollapsedState(value); writeCollapsed(value) }
  const canReorder = orderBy === 'manual' && normalizedQuery === '' && !busy

  useEffect(() => {
    const element = section.current
    if (element === null) return
    const update = (): void => { setCompact(element.clientWidth <= 170) }
    update()
    const observer = new ResizeObserver(update)
    observer.observe(element)
    return () => { observer.disconnect() }
  }, [])

  useEffect(() => {
    if (!compact && searchExpanded) searchInput.current?.focus({ preventScroll: true })
  }, [compact, searchExpanded])

  useEffect(() => {
    if (compact || !searchExpanded) return
    const onClick = (event: MouseEvent): void => {
      if (!(event.target instanceof Node) || searchRoot.current?.contains(event.target) === true) return
      searchInput.current?.blur()
      if (normalizedQuery === '') setSearchExpanded(false)
    }
    document.addEventListener('click', onClick)
    return () => { document.removeEventListener('click', onClick) }
  }, [compact, normalizedQuery, searchExpanded])

  const instances = useMemo(() => {
    const filtered = snapshot.instances.filter(instance => normalizedQuery === '' || normalize(instance.title).includes(normalizedQuery))
    return [...filtered].sort((a, b) => orderBy === 'updated' ? b.updatedAt - a.updatedAt : a.order - b.order)
  }, [normalizedQuery, orderBy, snapshot.instances])

  const persistOrder = async (ids: string[]): Promise<void> => {
    if (!canReorder || mutation.current) return
    const current = lifecycle.current
    mutation.current = true
    setReordering(true)
    setReorderError(null)
    try {
      await service.reorderInstances(ids)
    } catch (reason: unknown) {
      if (current.active) setReorderError(reason instanceof Error ? reason.message : String(reason))
    } finally {
      if (current.active) {
        mutation.current = false
        setReordering(false)
      }
    }
  }

  const moveInstance = (instanceId: string, direction: -1 | 1): void => {
    if (!canReorder) return
    const ids = instances.map(instance => instance.instanceId)
    const index = ids.indexOf(instanceId)
    const nextIndex = index + direction
    if (index < 0 || nextIndex < 0 || nextIndex >= ids.length) return
    ids.splice(index, 1)
    ids.splice(nextIndex, 0, instanceId)
    void persistOrder(ids)
  }

  const handleDrop = (targetId: string, event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault()
    if (!canReorder) {
      setDraggedId(null)
      setDropTarget(null)
      return
    }
    const sourceId = draggedId ?? event.dataTransfer.getData('text/plain')
    if (sourceId === '' || sourceId === targetId) {
      setDropTarget(null)
      return
    }
    const target = instances.findIndex(instance => instance.instanceId === targetId)
    const source = instances.findIndex(instance => instance.instanceId === sourceId)
    if (target < 0 || source < 0) return
    const position = event.clientY < event.currentTarget.getBoundingClientRect().top + event.currentTarget.getBoundingClientRect().height / 2 ? 'before' : 'after'
    const nextVisible = instances.map(instance => instance.instanceId).filter(id => id !== sourceId)
    const insertAt = nextVisible.indexOf(targetId) + (position === 'after' ? 1 : 0)
    nextVisible.splice(insertAt, 0, sourceId)
    void persistOrder(nextVisible)
    setDraggedId(null)
    setDropTarget(null)
  }

  const closeRename = (): void => {
    if (renaming || mutation.current) return
    setRenameTarget(null)
    setRenameError(null)
  }

  const confirmRename = async (): Promise<void> => {
    if (renameBlocked || renameTarget === null || mutation.current) return
    const current = lifecycle.current
    mutation.current = true
    setRenaming(true)
    setRenameError(null)
    try {
      await service.renameInstance(renameTarget.instanceId, renameTrimmed)
      if (current.active) setRenameTarget(null)
    } catch (reason: unknown) {
      if (current.active) setRenameError(reason instanceof Error ? reason.message : String(reason))
    } finally {
      if (current.active) {
        mutation.current = false
        setRenaming(false)
      }
    }
  }

  const requestRename = (instance: WorkbenchInstance): void => {
    if (busy || mutation.current) return
    setRenameTarget({ instanceId: instance.instanceId, currentTitle: instance.title })
    setRenameDraft(instance.title)
    setRenameError(null)
  }

  const closeDelete = (): void => {
    if (deleting || mutation.current) return
    setDeleteTarget(null)
    setDeleteError(null)
  }

  const confirmDelete = async (): Promise<void> => {
    if (busy || deleteTarget === null || mutation.current) return
    const current = lifecycle.current
    mutation.current = true
    setDeleting(true)
    setDeleteError(null)
    try {
      await service.deleteInstance(deleteTarget.instanceId)
      if (current.active) setDeleteTarget(null)
    } catch (reason: unknown) {
      if (current.active) setDeleteError(reason instanceof Error ? reason.message : String(reason))
    } finally {
      if (current.active) {
        mutation.current = false
        setDeleting(false)
      }
    }
  }

  const requestDelete = (instance: WorkbenchInstance): void => {
    if (busy || mutation.current) return
    setDeleteTarget({ instanceId: instance.instanceId, title: instance.title })
    setDeleteError(null)
  }

  const renameDialog = (
    <Modal
      open={renameTarget !== null}
      onClose={closeRename}
      closeLabel="关闭"
      title="重命名工作台"
      footer={(
        <>
          <Button variant="outline" disabled={renaming} onClick={closeRename}>取消</Button>
          <Button variant="primary" disabled={renameBlocked} onClick={confirmRename}>重命名</Button>
        </>
      )}
    >
      <input
        className="dsh-better-workbench-rename-input"
        value={renameDraft}
        aria-label="工作台名称"
        autoFocus
        disabled={renaming}
        onFocus={event => { event.target.select() }}
        onChange={event => { setRenameDraft(event.target.value); setRenameError(null) }}
        onCompositionStart={() => { composingRef.current = true }}
        onCompositionEnd={() => { composingRef.current = false }}
        onKeyDown={event => {
          if (event.key === 'Enter' && !composingRef.current) {
            event.preventDefault()
            event.stopPropagation()
            confirmRename()
          }
        }}
      />
      {renaming && <div role="status">正在重命名...</div>}
      {renameError !== null && <div className="dsh-better-workbench-rename-error" role="alert">{renameError}</div>}
    </Modal>
  )

  const deleteDialog = (
    <Modal
      open={deleteTarget !== null}
      onClose={closeDelete}
      closeLabel="关闭"
      title="删除工作台？"
      {...deleteTarget === null
        ? {}
        : { description: '删除“' + deleteTarget.title + '”？只移除工作台入口和配置，不会删除应用源码或项目文件。' }}
      footer={(
        <>
          <Button variant="outline" disabled={deleting} onClick={closeDelete}>取消</Button>
          <Button variant="outline" className="dsh-better-workbench-delete-action" disabled={deleting} onClick={confirmDelete}>
            <IconTrashOutlineRegular size={16} />删除
          </Button>
        </>
      )}
    >
      {deleting && <div role="status">正在删除...</div>}
      {deleteError !== null && <div className="dsh-better-workbench-delete-error" role="alert">{deleteError}</div>}
    </Modal>
  )

  if (compact) {
    return (
      <section ref={section} className="dsh-better-workbench-sidebar-section" aria-label="工作台" data-compact="true">
        {renameDialog}
        {deleteDialog}
      </section>
    )
  }

  return (
    <section ref={section} className="dsh-better-workbench-sidebar-section" aria-label="工作台" aria-busy={busy}>
      <div className="dsh-better-workbench-sidebar-heading">
        <span className={`dsh-better-workbench-sidebar-heading-label${searchExpanded && !compact ? ' is-hidden' : ''}`}>工作台</span>
        {!searchExpanded && (
          <button
            type="button"
            className="dsh-better-workbench-sidebar-collapse-zone"
            aria-label={collapsed ? '展开工作台列表' : '折叠工作台列表'}
            aria-expanded={!collapsed}
            title={collapsed ? '展开工作台列表' : '折叠工作台列表'}
            onClick={() => { setCollapsed(!collapsed) }}
          >
            <svg className="dsh-better-workbench-sidebar-collapse-chevron" data-collapsed={collapsed} width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="m4 6 4 4 4-4" />
            </svg>
          </button>
        )}
        <div ref={searchRoot} className={`dsh-better-workbench-sidebar-search-slot${searchExpanded ? ' is-expanded' : ''}`}>
          <div className="dsh-better-workbench-sidebar-search">
            <Tooltip label="搜索工作台" side="bottom" delayMs={500} disabled={searchExpanded}>
              <button
                type="button"
                className="dsh-better-workbench-sidebar-search-button"
                aria-label="搜索工作台"
                aria-expanded={searchExpanded}
                onClick={() => {
                  setSearchExpanded(true)
                  setCollapsed(false)
                  if (compact) requestSidebarExpand()
                }}
              >
                <IconSearchOutlineRegular size={searchExpanded ? 11 : 14} />
              </button>
            </Tooltip>
            <input
              ref={searchInput}
              className="dsh-better-workbench-sidebar-search-input"
              type="text"
              placeholder="搜索工作台…"
              value={query}
              tabIndex={searchExpanded && !compact ? 0 : -1}
              onChange={event => { setQuery(event.target.value) }}
              onKeyDown={event => {
                if (event.key === 'Escape') {
                  setQuery('')
                  setSearchExpanded(false)
                }
              }}
            />
            {searchExpanded && (
              <button
                type="button"
                className="dsh-better-workbench-sidebar-search-clear"
                aria-label="清除搜索"
                onClick={event => {
                  event.stopPropagation()
                  setQuery('')
                  setSearchExpanded(false)
                }}
              >
                <IconCloseFillRegular size={14} />
              </button>
            )}
          </div>
        </div>
        <div className={`dsh-better-workbench-sidebar-heading-actions${searchExpanded && !compact ? ' is-hidden' : ''}`}>
          <ViewOptionsMenu orderBy={orderBy} onOrderPick={setOrderBy} />
          <Tooltip label="创建工作台" side="bottom" delayMs={500}>
            <button
              type="button"
              className="dsh-better-workbench-sidebar-icon-button dsh-better-workbench-sidebar-add"
              aria-label="创建工作台"
              disabled={busy}
              onClick={() => {
                setSearchExpanded(false)
                service.openHome(true)
              }}
            >
              <IconProjectAddOutlineRegular size={16} />
            </button>
          </Tooltip>
        </div>
      </div>

      {compact && (
        <div className="dsh-better-workbench-sidebar-rail-search">
          <Tooltip label="搜索工作台" side="right" delayMs={500}>
            <button
              type="button"
              className="dsh-better-workbench-sidebar-search-button"
              aria-label="搜索工作台"
              aria-expanded={searchExpanded}
              onClick={() => {
                setSearchExpanded(true)
                requestSidebarExpand()
              }}
            >
              <IconSearchOutlineRegular size={18} />
            </button>
          </Tooltip>
        </div>
      )}

      <div className="dsh-better-workbench-sidebar-list" aria-label="工作台列表" hidden={listHidden}>
        <WorkbenchHomeRow active={snapshot.route.kind === 'workbench-home'} onOpen={() => { service.openHome() }} />
        {instances.map((instance, index) => (
          <WorkbenchRow
            key={instance.instanceId}
            instance={instance}
            appIcon={service.getApp(instance.appId)?.renderIcon}
            compact={compact}
            active={snapshot.route.kind === 'workbench-instance' && snapshot.route.instanceId === instance.instanceId}
            draggable={canReorder}
            busy={busy}
            canMoveUp={canReorder && index > 0}
            canMoveDown={canReorder && index < instances.length - 1}
            onMove={direction => { moveInstance(instance.instanceId, direction) }}
            dropPosition={dropTarget?.id === instance.instanceId ? dropTarget.position : null}
            onOpen={() => { openWorkbench(service, instance.instanceId) }}
            onSettings={instance.appId === WEBSITE_APP_ID && instance.available ? () => { setWebsiteTarget({ id: instance.instanceId, generation: snapshot.apps.find(app => app.appId === instance.appId)!.generation }) } : undefined}
            onRename={() => { requestRename(instance) }}
            onDelete={() => { requestDelete(instance) }}
            onDragStart={event => {
              if (!canReorder) { event.preventDefault(); return }
              setDraggedId(instance.instanceId)
              event.dataTransfer.effectAllowed = 'move'
              event.dataTransfer.setData('text/plain', instance.instanceId)
            }}
            onDragOver={event => {
              if (!canReorder || draggedId === null || draggedId === instance.instanceId) return
              event.preventDefault()
              const rect = event.currentTarget.getBoundingClientRect()
              setDropTarget({ id: instance.instanceId, position: event.clientY < rect.top + rect.height / 2 ? 'before' : 'after' })
            }}
            onDrop={event => { handleDrop(instance.instanceId, event) }}
            onDragEnd={() => { setDraggedId(null); setDropTarget(null) }}
          />
        ))}
      </div>
      {!listHidden && snapshot.loading && <div className="dsh-better-workbench-sidebar-empty" role="status">正在加载工作台...</div>}
      {reordering && <div className="dsh-better-workbench-sidebar-empty" role="status">正在保存排序...</div>}
      {(reorderError ?? snapshot.error) && <div className="dsh-better-workbench-rename-error" role="alert">{reorderError ?? snapshot.error}</div>}
      {!listHidden && !snapshot.loading && instances.length === 0 && (
        <div className="dsh-better-workbench-sidebar-empty">{normalizedQuery === '' ? '从首页创建实例。' : '无匹配工作台'}</div>
      )}
      {websiteTarget && websiteInstance && <WebsiteSettings key={websiteTarget.id} open instance={websiteInstance} onClose={() => setWebsiteTarget(null)} updateConfig={(patch, revision) => service.updateInstanceConfig(websiteTarget.id, patch, revision, websiteTarget.generation)} />}
      {renameDialog}
      {deleteDialog}
    </section>
  )
}
