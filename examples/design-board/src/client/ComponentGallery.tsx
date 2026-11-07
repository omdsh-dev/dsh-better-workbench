import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import type { ButtonHTMLAttributes, ComponentType, ReactNode } from 'react'
import * as Primitives from '@deepseek-ai/dsh-client-ui-primitives'
import { Specimen, IconAction } from './GallerySpecimen.js'
import { CollectionActionSpecimen, PresetCardSpecimen } from './NativeSpecimens.js'
import {
  Button, CodeBlock, ConnectionIndicator, DiffBlock, DisclosureRow, HoverCard, Input,
  JsonTree, Menu, Modal, Pill, ReadBlock, RiskConfirmation, StateDot, TerminalBlock, Toast, Tooltip,
  IconCheckOutlineRegular, IconChevronDownOutlineRegular, IconCodeOutlineRegular, IconCopyOutlineRegular,
  IconEditOutlineRegular, IconEllipsisOutlineRegular, IconFolderOpenRegular, IconLoadingOutlineRegular,
  IconPlusOutlineRegular, IconRefreshOutlineRegular, IconSearchOutlineRegular, IconTrashOutlineRegular,
  IconWarningOutlineRegular, writeClipboard,
} from '@deepseek-ai/dsh-client-ui-primitives'
import type {
  ButtonVariant, ConnectionIndicatorState, JsonTreeLabels, MenuEntry, StateDotState, TerminalBlockLabels,
} from '@deepseek-ai/dsh-client-ui-primitives'

type Group = 'all' | 'actions' | 'entities' | 'inputs' | 'overlays' | 'feedback' | 'content'
type Notice = (text: string, error?: boolean) => void
const GROUPS: readonly [Group, string][] = [
  ['actions', '按钮与入口'], ['entities', '选择与实体'], ['inputs', '输入与表单'],
  ['overlays', '菜单与浮层'], ['feedback', '状态与反馈'], ['content', '结构化内容'], ['all', '全部组件'],
]
const VARIANTS: readonly ButtonVariant[] = ['primary', 'ghost', 'outline', 'toolbar']
const STATES: readonly [StateDotState, string][] = [
  ['done', '已完成'], ['warning', '待确认'], ['ongoing', '进行中'], ['error', '失败'],
]
const FOLD_LABELS = {
  codeLabel: '代码', wrapLabel: '自动换行', unwrapLabel: '取消换行',
  copy: '复制', copied: '已复制', collapse: '收起', collapseAria: '收起内容',
  expand: (count: number) => '展开 ' + count + ' 行',
  expandAria: (count: number) => '展开隐藏的 ' + count + ' 行',
}
const TERMINAL_LABELS: TerminalBlockLabels = {
  ...FOLD_LABELS, signal: signal => '信号 ' + signal, exitCode: code => '退出码 ' + code,
  commandLine: line => '第 ' + line + ' 行命令', noExitCode: '无退出码',
  running: '运行中', failed: '失败', done: '已完成', noOutput: '无输出',
}
const JSON_LABELS: JsonTreeLabels = {
  copyValue: '复制值', copyJson: '复制 JSON', copyPath: '复制属性路径',
  copyPrettyJson: '复制格式化 JSON', copyCompactJson: '复制紧凑 JSON',
  copied: '已复制', copyFailed: '复制失败', collapseNode: '收起节点', expandNode: '展开节点',
  copyButtonTitle: action => action,
}


function ButtonSpecimen({ notify }: { notify: Notice }) {
  const [busy, setBusy] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>()
  useEffect(() => () => { clearTimeout(timer.current) }, [])
  const save = () => {
    setBusy(true)
    timer.current = setTimeout(() => { setBusy(false); notify('本地草稿已保存') }, 1200)
  }
  return <Specimen name="Button" title="通用命令按钮" metrics={['4 variants', 'md 36px / sm 28px', 'icon 16px', 'native disabled']} notify={notify}
    sample={'<Button variant="primary" size="md" icon={<IconPlusOutlineRegular />} onClick={onCreate}>新建项目</Button>\n<Button variant="outline" size="sm" disabled>新建项目</Button>'}>
    <div className="dsh-cg-table-scroll" tabIndex={0} role="region" aria-label="按钮变体尺寸矩阵">
      <table className="dsh-cg-matrix"><thead><tr><th scope="col">Variant</th><th scope="col">md / 36</th><th scope="col">sm / 28</th><th scope="col">md / disabled</th><th scope="col">sm / disabled</th></tr></thead>
        <tbody>{VARIANTS.map(variant => <tr key={variant}><th scope="row"><code>{variant}</code></th>
          <td><Button variant={variant} icon={<IconPlusOutlineRegular />} onClick={() => notify(variant + ' · md')}>新建项目</Button></td>
          <td><Button variant={variant} size="sm" icon={<IconPlusOutlineRegular />} onClick={() => notify(variant + ' · sm')}>新建项目</Button></td>
          <td><Button variant={variant} disabled icon={<IconPlusOutlineRegular />}>新建项目</Button></td>
          <td><Button variant={variant} size="sm" disabled icon={<IconPlusOutlineRegular />}>新建项目</Button></td>
        </tr>)}</tbody>
      </table>
    </div>
    <div className="dsh-cg-inline-samples">
      <div><small>纯文本</small><Button variant="outline" onClick={() => notify('已取消')}>取消</Button></div>
      <div><small>图标操作</small><IconAction label="复制项目名称" onClick={() => { void writeClipboard('Design system').then(ok => notify(ok ? '项目名称已复制' : '复制失败', !ok)) }}><IconCopyOutlineRegular /></IconAction></div>
      <div><small>异步组合 / disabled + icon</small><Button variant="primary" disabled={busy} aria-busy={busy} icon={busy ? <IconLoadingOutlineRegular className="dsh-cg-spin" /> : <IconCheckOutlineRegular />} onClick={save}>{busy ? '保存中' : '保存草稿'}</Button></div>
    </div>
  </Specimen>
}

function PillSpecimen({ notify }: { notify: Notice }) {
  const [selected, setSelected] = useState('全部')
  const [pinned, setPinned] = useState(true)
  return <Specimen name="Pill" title="选项与标签" metrics={['24px', 'active', 'onClick → button', '无 onClick → span']} notify={notify}
    sample={'<Pill active={selected === "all"} aria-pressed={selected === "all"} onClick={() => setSelected("all")}>全部</Pill>\n<Pill>只读标签</Pill>'}>
    <div className="dsh-cg-inline-samples">
      <div><small>单选筛选</small><div className="dsh-cg-options" role="group" aria-label="项目筛选">{['全部', '进行中', '已完成'].map(label => <Pill key={label} active={selected === label} aria-pressed={selected === label} onClick={() => setSelected(label)}>{label}</Pill>)}</div></div>
      <div><small>独立选中</small><Pill active={pinned} aria-pressed={pinned} onClick={() => setPinned(value => !value)}>已收藏</Pill></div>
      <div><small>静态标签</small><Pill>只读</Pill></div>
      <div><small>禁用交互</small><Pill disabled onClick={() => notify('不可达')}>已归档</Pill></div>
    </div>
  </Specimen>
}

function InputSpecimen({ notify }: { notify: Notice }) {
  const id = useId()
  const [name, setName] = useState('Design system')
  const [slug, setSlug] = useState('design board')
  const valid = /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
  return <Specimen name="Input" title="单行输入" metrics={['32px', 'icon 16px', 'native input attributes', '校验反馈由表单持有']} notify={notify}
    sample={'<label htmlFor="project-name">项目名称</label>\n<Input id="project-name" value={name} onChange={e => setName(e.currentTarget.value)} />\n<Input aria-invalid={!valid} aria-describedby="validation" value={slug} onChange={e => setSlug(e.currentTarget.value)} />'}>
    <div className="dsh-cg-fields">
      <label className="dsh-cg-field"><span>空值 / placeholder</span><Input placeholder="输入项目名称" /><small>默认状态</small></label>
      <label className="dsh-cg-field"><span>已填写 / controlled</span><Input value={name} onChange={event => setName(event.currentTarget.value)} /><small>{name.length} 个字符</small></label>
      <label className="dsh-cg-field"><span>前置图标 / search</span><Input type="search" icon={<IconSearchOutlineRegular />} placeholder="搜索模型" /><small>icon slot 16px</small></label>
      <label className="dsh-cg-field"><span>只读 / readOnly</span><Input readOnly value="workspace/design-system" /><small>可选择与复制</small></label>
      <label className="dsh-cg-field"><span>禁用 / disabled</span><Input disabled value="已归档项目" /><small>原生禁用</small></label>
      <label className="dsh-cg-field"><span>项目标识 / validation</span><Input value={slug} aria-invalid={!valid} aria-describedby={id + '-validation'} onChange={event => setSlug(event.currentTarget.value)} /><small id={id + '-validation'} className={valid ? 'dsh-cg-success' : 'dsh-cg-error'}>{valid ? <IconCheckOutlineRegular /> : <IconWarningOutlineRegular />}{valid ? '标识可用' : '仅限小写字母、数字和单连字符'}</small></label>
    </div>
  </Specimen>
}

const MENU_ITEMS: readonly MenuEntry[] = [
  { type: 'label', id: 'heading', text: '项目操作' },
  { id: 'rename', label: '重命名', icon: <IconEditOutlineRegular /> },
  { id: 'duplicate', label: '复制项目', icon: <IconCopyOutlineRegular /> },
  { id: 'move', label: '移动到', icon: <IconFolderOpenRegular />, submenu: [{ id: 'personal', label: '个人工作区' }, { id: 'team', label: '团队工作区' }] },
  { id: 'archive', label: '归档', disabled: true },
  { type: 'separator', id: 'separator' },
  { id: 'remove', label: '移除项目', danger: true, icon: <IconTrashOutlineRegular /> },
]

function MenuSpecimen({ notify }: { notify: Notice }) {
  const [open, setOpen] = useState<string | null>(null)
  const [selection, setSelection] = useState('rename')
  const [result, setResult] = useState('尚未选择')
  const choices = [['default', '标准'], ['dense', 'Dense'], ['compact', 'Compact']] as const
  return <Specimen name="Menu" title="操作菜单" metrics={['portal', 'label / separator / danger', 'selectedId / disabled / submenu']} notify={notify}
    sample={'<Menu open={open} portal selectedId={selectedId} items={items}\n  anchor={<Button aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(!open)}>项目操作</Button>}\n  onSelect={id => { setSelectedId(id); setOpen(false) }} onClose={() => setOpen(false)} />'}>
    <div className="dsh-cg-inline-samples">{choices.map(([key, label]) => <div key={key}><small>{label}</small><Menu open={open === key} portal dense={key === 'dense'} compact={key === 'compact'} items={MENU_ITEMS} selectedId={selection}
      anchor={<Button variant="outline" icon={<IconEllipsisOutlineRegular />} aria-haspopup="menu" aria-expanded={open === key} onClick={() => setOpen(value => value === key ? null : key)}>项目操作<IconChevronDownOutlineRegular /></Button>}
      onSelect={id => { setSelection(id); setResult(id); setOpen(null); notify('已选择：' + id) }} onClose={() => setOpen(null)} /></div>)}
    </div><output className="dsh-cg-result">onSelect <code>{result}</code></output>
  </Specimen>
}

// Modal owns its portal and dismissal; the gallery owner supplies focus containment.
function useDialogFocus(open: boolean, title: string) {
  useLayoutEffect(() => {
    if (!open) return
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const dialog = [...document.querySelectorAll<HTMLElement>('[role="dialog"]')].find(element => element.getAttribute('aria-label') === title)
    if (!dialog) return
    const controls = () => [...dialog.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled), [tabindex="0"]')].filter(element => element.getClientRects().length > 0)
    const initial = dialog.querySelector<HTMLElement>('input:not(:disabled)') ?? controls()[0]
    initial?.focus()
    const containFocus = (event: FocusEvent) => { if (event.target instanceof Node && !dialog.contains(event.target)) (controls()[0] ?? dialog).focus() }
    const trapTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      const items = controls()
      const first = items[0]
      const last = items[items.length - 1]
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('focusin', containFocus)
    dialog.addEventListener('keydown', trapTab)
    return () => {
      document.removeEventListener('focusin', containFocus)
      dialog.removeEventListener('keydown', trapTab)
      if (previous?.isConnected) previous.focus()
    }
  }, [open, title])
}

function OverlaySpecimen({ notify }: { notify: Notice }) {
  const [dialog, setDialog] = useState<'edit' | 'risk' | null>(null)
  const [name, setName] = useState('Design system')
  const [draft, setDraft] = useState(name)
  const [acknowledged, setAcknowledged] = useState(false)
  const unique = useId()
  const editTitle = '编辑项目'
  const riskTitle = '移除示例项目？'
  useDialogFocus(dialog === 'edit', editTitle)
  useDialogFocus(dialog === 'risk', riskTitle)
  return <Specimen name="Modal / RiskConfirmation / Tooltip / HoverCard" title="浮层与确认" metrics={['受控 open', 'body portal', '显式确认', 'hover / focus']} notify={notify}
    sample={'<Modal open={open} onClose={() => setOpen(false)} title="编辑项目" closeLabel="关闭"\n  footer={<Button variant="primary" onClick={save}>保存</Button>}>\n  <Input aria-label="项目名称" value={name} onChange={e => setName(e.currentTarget.value)} />\n</Modal>'}>
    <div className="dsh-cg-inline-samples">
      <div><small>编辑 / Modal</small><Button variant="outline" icon={<IconEditOutlineRegular />} onClick={() => { setDraft(name); setDialog('edit') }}>编辑项目</Button></div>
      <div><small>风险确认 / checkbox</small><Button variant="outline" icon={<IconTrashOutlineRegular />} onClick={() => { setAcknowledged(false); setDialog('risk') }}>移除示例项目</Button></div>
      <div><small>Tooltip / top</small><IconAction label="刷新项目" onClick={() => notify('项目已刷新')}><IconRefreshOutlineRegular /></IconAction></div>
      <div><small>HoverCard / copyText</small><HoverCard copyLabel="复制路径" copiedLabel="路径已复制" copyText="/workspace/design-system" anchor={<Button size="sm" variant="ghost" icon={<IconFolderOpenRegular />}>项目路径</Button>} content={<div className="dsh-cg-hover-content"><strong>{name}</strong><code>/workspace/design-system</code></div>} /></div>
    </div><output className="dsh-cg-result">项目名称 <strong>{name}</strong></output>
    <Modal open={dialog === 'edit'} title={editTitle} closeLabel="关闭编辑" onClose={() => setDialog(null)} footer={<><Button variant="outline" onClick={() => setDialog(null)}>取消</Button><Button variant="primary" disabled={!draft.trim()} onClick={() => { setName(draft.trim()); setDialog(null); notify('项目名称已更新') }}>保存</Button></>}>
      <label className="dsh-cg-field" htmlFor={unique}><span>项目名称</span><Input id={unique} value={draft} maxLength={64} onChange={event => setDraft(event.currentTarget.value)} /></label>
    </Modal>
    <RiskConfirmation open={dialog === 'risk'} title={riskTitle} description="此操作仅重置当前陈列的示例项目名称，不会删除工作区或文件。" acknowledgeLabel="我确认重置示例项目" cancelLabel="取消" closeLabel="关闭确认" confirmLabel="确认移除" acknowledged={acknowledged} onAcknowledgedChange={setAcknowledged} onCancel={() => setDialog(null)} onConfirm={() => { setName('未命名项目'); setDialog(null); notify('示例项目已重置') }} />
  </Specimen>
}

function FeedbackSpecimen({ notify }: { notify: Notice }) {
  const [open, setOpen] = useState(true)
  const [state, setState] = useState<StateDotState>('ongoing')
  const [connection, setConnection] = useState<ConnectionIndicatorState>('disconnected')
  const timer = useRef<ReturnType<typeof setTimeout>>()
  useEffect(() => () => { clearTimeout(timer.current) }, [])
  const reconnect = () => {
    clearTimeout(timer.current)
    setConnection('connecting')
    timer.current = setTimeout(() => { setConnection('recovered') }, 1400)
  }
  return <Specimen name="StateDot / DisclosureRow / ConnectionIndicator / Toast" title="状态与反馈" metrics={['4 states', 'StateDot 10px', 'DisclosureRow 24px', '持久反馈 / 短暂反馈']} notify={notify}
    sample={'<DisclosureRow icon={<StateDot state="ongoing" />} title="检查项目" open={open}\n  expandable expandOnRowClick onToggle={() => setOpen(!open)} collapsedContent="3 个文件">\n  <p>正在检查组件属性。</p>\n</DisclosureRow>'}>
    <div className="dsh-cg-status-matrix">{STATES.map(([value, label]) => <div key={value}><StateDot state={value} /><span>{label}</span><code>{value}</code></div>)}</div>
    <div className="dsh-cg-two-col">
      <div className="dsh-cg-subsection"><h3>DisclosureRow</h3><div className="dsh-cg-options" role="group" aria-label="任务状态">{STATES.map(([value, label]) => <Pill key={value} active={state === value} aria-pressed={state === value} onClick={() => setState(value)}>{label}</Pill>)}</div>
        <div className="dsh-cg-disclosure"><DisclosureRow icon={<StateDot state={state} />} title="检查项目" open={open} expandable expandOnRowClick keepContentWhenOpen onToggle={() => setOpen(value => !value)} collapsedContent={<span className="dsh-cg-muted">3 个文件</span>}><div className="dsh-cg-disclosure-body"><StateDot state={state} /><span>{STATES.find(([value]) => value === state)?.[1]} · Button.tsx / Input.tsx / Menu.tsx</span></div></DisclosureRow></div>
        <DisclosureRow icon={<StateDot state="done" />} title="资源已就绪" open={false} expandable={false} onToggle={() => {}} collapsedContent={<span className="dsh-cg-muted">不可展开</span>} />
      </div>
      <div className="dsh-cg-subsection"><h3>ConnectionIndicator</h3><div className="dsh-cg-options" role="group" aria-label="连接状态">{(['disconnected', 'connecting', 'recovered'] as const).map((value, index) => <Pill key={value} active={connection === value} aria-pressed={connection === value} onClick={() => { clearTimeout(timer.current); setConnection(value) }}>{['已断开', '连接中', '已恢复'][index]}</Pill>)}</div>
        <div className="dsh-cg-connection"><ConnectionIndicator state={connection} disconnectedLabel="连接已断开" connectingLabel="正在重连" recoveredLabel="连接已恢复" reconnectActionLabel="重新连接示例" restartActionLabel="重新开始连接示例" onReconnect={reconnect} /></div>
        <div className="dsh-cg-actions"><Button size="sm" icon={<IconCheckOutlineRegular />} onClick={() => notify('所有更改已保存')}>成功反馈</Button><Button size="sm" icon={<IconWarningOutlineRegular />} onClick={() => notify('示例请求未完成，请重试', true)}>失败反馈</Button></div>
      </div>
    </div>
  </Specimen>
}

function ContentSpecimen({ notify }: { notify: Notice }) {
  const [terminalState, setTerminalState] = useState<'done' | 'running' | 'error' | 'empty'>('done')
  const output = terminalState === 'error' ? 'Error: Missing project name\nValidation failed.' : terminalState === 'empty' ? '' : 'Resolving project...\nReading Button.tsx\nReading Input.tsx\nReading Menu.tsx\nChecking semantic tokens\nChecking component props\nChecking keyboard actions\nChecking disabled states\nChecking responsive layout\n12 checks passed'
  return <Specimen name="TerminalBlock / ReadBlock / DiffBlock / JsonTree / CodeBlock" title="结构化内容" metrics={['原生复制', '折叠 / 展开', '行号 / 差异 / 树', 'maxLines = 6']} notify={notify}
    sample={'<TerminalBlock command="pnpm check" output={output} exitCode={0} maxLines={6} labels={labels} />\n<ReadBlock label="Button.tsx" lines={lines} totalLines={12} lang="tsx" labels={labels} />\n<JsonTree data={data} label="项目配置" labels={jsonLabels} />'}>
    <div className="dsh-cg-two-col dsh-cg-content-grid">
      <div className="dsh-cg-subsection"><h3>TerminalBlock</h3><div className="dsh-cg-options" role="group" aria-label="终端状态">{(['done', 'running', 'error', 'empty'] as const).map((value, index) => <Pill key={value} active={terminalState === value} aria-pressed={terminalState === value} onClick={() => setTerminalState(value)}>{['完成', '运行中', '失败', '无输出'][index]}</Pill>)}</div><TerminalBlock command="pnpm check" cwd="/workspace/design-system" output={output} running={terminalState === 'running'} exitCode={terminalState === 'error' ? 1 : 0} maxLines={6} labels={TERMINAL_LABELS} /></div>
      <div className="dsh-cg-subsection"><h3>ReadBlock</h3><ReadBlock label="src/actions.tsx" lang="tsx" maxLines={6} totalLines={12} lines={['import { Button } from "@deepseek-ai/dsh-client-ui-primitives"', '', 'export function Actions() {', '  return (', '    <Button', '      variant="primary"', '      size="sm"', '      onClick={save}', '    >', '      保存', '    </Button>', '  )}'].map((text, index) => ({ number: index + 1, text }))} labels={{ ...FOLD_LABELS, window: (shown, total) => shown + ' / ' + total + ' 行' }} /></div>
      <div className="dsh-cg-subsection"><h3>DiffBlock</h3><DiffBlock maxLines={6} diffs={[{ path: 'src/actions.tsx', oldText: '<Button variant="ghost">保存</Button>', newText: '<Button variant="primary">保存</Button>' }]} labels={FOLD_LABELS} /></div>
      <div className="dsh-cg-subsection"><h3>JsonTree</h3><JsonTree label="项目配置" data={{ project: 'Design system', theme: { mode: 'system', density: 'compact' }, components: ['Button', 'Input', 'Menu'], published: false, revision: 12 }} labels={JSON_LABELS} /></div>
    </div>
  </Specimen>
}

// Older hosts predate this extracted product pattern; never substitute a clone.
const AddButton = (Primitives as typeof Primitives & { AddButton?: ComponentType<ButtonHTMLAttributes<HTMLButtonElement>> }).AddButton

function AddActionSpecimen({ notify }: { notify: Notice }) {
  const [count, setCount] = useState(0)
  return <Specimen name="AddButton" title="列表内添加命令" metrics={['模型设置 / 两处原生消费', '28px', 'disabled / focus-visible', AddButton ? '已公共化' : '宿主未提供']} notify={notify}
    sample={'import { AddButton, IconPlusOutlineRegular } from "@deepseek-ai/dsh-client-ui-primitives"\n\n<AddButton onClick={onAdd}>添加模型</AddButton>\n<AddButton disabled={busy} onClick={onAdd}><IconPlusOutlineRegular size={14} />添加模型</AddButton>'}>
    {AddButton ? <>
      <div className="dsh-cg-inline-samples">
        <div><small>模型列表 / 纯文字</small><AddButton onClick={() => setCount(value => value + 1)}>添加模型</AddButton></div>
        <div><small>DeepSeek 模型 / 图标 14px</small><AddButton onClick={() => setCount(value => value + 1)}><IconPlusOutlineRegular size={14} />添加模型</AddButton></div>
        <div><small>禁用</small><AddButton disabled>添加模型</AddButton></div>
      </div>
      <div className="dsh-cg-result" role="status"><span>本地新增</span><strong>{count}</strong></div>
    </> : <div className="dsh-cg-result"><span>需要包含 AddButton 导出的 DSH 版本</span></div>}
  </Specimen>
}

const SECTIONS = [
  { key: 'collection-add', group: 'actions', terms: 'CollectionAddButton 添加提供方 添加自定义提供方 虚线 集合 扩展 按钮', component: CollectionActionSpecimen },
  { key: 'preset-card', group: 'entities', terms: 'SelectableCard Agent 预设 卡片 选择 实体 默认 不可用 区块', component: PresetCardSpecimen },
  { key: 'buttons', group: 'actions', terms: 'Button 按钮 尺寸 变体 禁用 loading', component: ButtonSpecimen },
  { key: 'add-action', group: 'actions', terms: 'AddButton 添加模型 列表 添加入口 产品模式', component: AddActionSpecimen },
  { key: 'pills', group: 'entities', terms: 'Pill 标签 选择 筛选', component: PillSpecimen },
  { key: 'inputs', group: 'inputs', terms: 'Input 输入 搜索 校验 表单 只读 禁用', component: InputSpecimen },
  { key: 'menus', group: 'overlays', terms: 'Menu 菜单 选择 子菜单', component: MenuSpecimen },
  { key: 'overlays', group: 'overlays', terms: 'Modal RiskConfirmation Tooltip HoverCard 弹窗 浮层 对话框 确认 dialog', component: OverlaySpecimen },
  { key: 'feedback', group: 'feedback', terms: 'StateDot DisclosureRow ConnectionIndicator Toast 状态 反馈 展开 连接', component: FeedbackSpecimen },
  { key: 'content', group: 'content', terms: 'TerminalBlock ReadBlock DiffBlock JsonTree CodeBlock 终端 内容 代码 JSON 差异', component: ContentSpecimen },
] as const

export function ComponentGallery(): JSX.Element {
  const [group, setGroup] = useState<Group>('actions')
  const [query, setQuery] = useState('')
  const [resetKey, setResetKey] = useState(0)
  const [toast, setToast] = useState<{ id: number; text: string; error: boolean } | null>(null)
  const sequence = useRef(0)
  const notify = useCallback<Notice>((text, error = false) => { setToast({ id: ++sequence.current, text, error }) }, [])
  const clearToast = useCallback(() => setToast(null), [])
  const search = query.trim().toLowerCase()
  const visible = SECTIONS.filter(section => search ? section.terms.toLowerCase().includes(search) : group === 'all' || section.group === group)
  const activeLabel = search ? '搜索结果' : GROUPS.find(([key]) => key === group)?.[1]
  return <div className="dsh-cg">
    <header className="dsh-cg-heading"><div><span className="dsh-cg-eyebrow">DSH / COMPONENT LIBRARY</span><h1>基础组件</h1><code>@deepseek-ai/dsh-client-ui-primitives</code></div><span className="dsh-cg-scope">原生组件与组合模式</span></header>
    <nav className="dsh-cg-families" aria-label="组件族">{GROUPS.map(([value, label]) => <button type="button" key={value} aria-pressed={!search && group === value} onClick={() => { setGroup(value); setQuery('') }}><span>{label}</span><small>{SECTIONS.filter(section => value === 'all' || section.group === value).length}</small></button>)}</nav>
    <div className="dsh-cg-toolbar">
      <Input className="dsh-cg-search" icon={<IconSearchOutlineRegular />} type="search" aria-label="搜索基础组件" placeholder="搜索组件" value={query} onChange={event => setQuery(event.currentTarget.value)} />
      <span className="dsh-cg-result-count" role="status">{activeLabel} · {visible.length} 组</span>
      <IconAction label="重置全部示例" onClick={() => { setResetKey(value => value + 1); setGroup('actions'); setQuery(''); clearToast() }}><IconRefreshOutlineRegular /></IconAction>
    </div>
    <div className="dsh-cg-list" key={resetKey}>{visible.map(({ key, component: Component }) => <Component key={key} notify={notify} />)}</div>
    {visible.length === 0 && <div className="dsh-cg-empty"><IconSearchOutlineRegular /><strong>没有匹配的组件</strong><Button size="sm" variant="outline" onClick={() => { setQuery(''); setGroup('all') }}>清除筛选</Button></div>}
    {toast && <Toast key={toast.id} text={toast.text} icon={toast.error ? <IconWarningOutlineRegular /> : <IconCheckOutlineRegular />} onDone={clearToast} />}
  </div>
}
