import { useId, useState, type ButtonHTMLAttributes, type ComponentType, type ReactNode } from 'react'
import * as Primitives from '@deepseek-ai/dsh-client-ui-primitives'
import { Button, Input, Pill, Tooltip, IconCopyOutlineRegular, IconBrowseOutlineRegular, IconPlusOutlineRegular } from '@deepseek-ai/dsh-client-ui-primitives'
import { Specimen, type Notice } from './GallerySpecimen.js'

// Optional exports keep the board usable on older hosts without cloning their UI.
type SelectableCardProps = { title: ReactNode; description?: ReactNode; metadata?: ReactNode; badges?: ReactNode; footer?: ReactNode; children?: ReactNode; pressed?: boolean; disabled?: boolean; broken?: boolean; mainButtonProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'disabled' | 'aria-disabled' | 'aria-pressed' | 'type'>; className?: string; as?: 'div' | 'li' }
const SelectableCard = (Primitives as typeof Primitives & { SelectableCard?: ComponentType<SelectableCardProps> }).SelectableCard
const CollectionAddButton = (Primitives as typeof Primitives & { CollectionAddButton?: ComponentType<ButtonHTMLAttributes<HTMLButtonElement>> }).CollectionAddButton

export function PresetCardSpecimen({ notify }: { notify: Notice }) {
  const [selected, setSelected] = useState('general')
  const entries = [
    { id: 'general', title: '通用助手', description: '通用任务与日常问答。', badge: '内置' },
    { id: 'coding', title: '编码助手', description: '代码分析、实现与验证。', badge: '内置' },
    { id: 'review', title: '代码审阅', description: '检查行为回归、接口约束和测试覆盖。', badge: '自定义' },
  ]
  const footer = (title: string) => <><Tooltip label={'查看 ' + title}><span><Button size="sm" aria-label={'查看 ' + title} onClick={() => notify(title + ' · 查看示例')}><IconBrowseOutlineRegular /></Button></span></Tooltip><Tooltip label={'复制 ' + title}><span><Button size="sm" aria-label={'复制 ' + title} onClick={() => notify(title + ' · 复制示例')}><IconCopyOutlineRegular /></Button></span></Tooltip></>
  return <Specimen title="实体选择卡片" name="SelectableCard" metrics={['AgentPresetSection', '主区选择 / 底部独立操作', 'pressed / disabled / broken', 'r20 · 原生规格']} notify={notify}
    sample={`import { SelectableCard, Button } from "@deepseek-ai/dsh-client-ui-primitives"

<SelectableCard title={name} description={description} metadata={id}
  pressed={isDefault} disabled={isDefault} broken={Boolean(error)}
  mainButtonProps={{ "aria-label": "设为默认: " + name, onClick: makeDefault }}
  footer={<Button onClick={copyPreset}>复制</Button>} />`}> 
    {!SelectableCard ? <div className="dsh-cg-unavailable" role="status">宿主未提供 SelectableCard</div> : <>
      <div className="dsh-native-label"><strong>单项选择</strong><span>已选主区禁用 · 底部操作独立</span></div>
      <div className="dsh-native-card-grid">{entries.map(item => <SelectableCard key={item.id} title={item.title} description={item.description} metadata={item.id} badges={<Pill>{item.badge}</Pill>} pressed={selected === item.id} disabled={selected === item.id} mainButtonProps={{ 'aria-label': (selected === item.id ? '当前预设: ' : '设为默认: ') + item.title, onClick: () => setSelected(item.id) }} footer={footer(item.title)} />)}</div>
      <div className="dsh-cg-result" role="status"><span>当前示例</span><strong>{entries.find(item => item.id === selected)?.title}</strong></div>
      <div className="dsh-native-card-grid dsh-native-card-states">
        <div><small>不可用 / 保持键盘可达</small><SelectableCard title="配置不可用" description="配置文件缺少必要字段。" metadata="preset.invalid" broken mainButtonProps={{ 'aria-label': '不可用预设: 配置不可用', onClick: () => notify('不应触发不可用主区', true) }} footer={footer('配置不可用')}><span className="dsh-native-owner-error" role="alert">缺少模型配置</span></SelectableCard></div>
        <div><small>只读 / 主区禁用</small><SelectableCard title="只读预设" description="当前环境不允许修改默认预设。" metadata="preset.readonly" disabled mainButtonProps={{ 'aria-label': '只读预设' }} footer={footer('只读预设')} /></div>
        <div><small>长内容 / 描述截断</small><SelectableCard title="多阶段研究与实现" description={'分析需求、核对来源、形成计划、执行验证，并整理可追溯的交付结果。'.repeat(8)} metadata="preset.research.with-a-long-identifier" mainButtonProps={{ 'aria-label': '长内容预设', onClick: () => notify('长内容主区已触发') }} footer={footer('长内容预设')} /></div>
      </div>
    </>}
    <dl className="dsh-native-contract"><div><dt>语义</dt><dd>选择一个实体，不是导航卡片</dd></div><div><dt>结构</dt><dd>标题 / 标记 / 描述 / 标识 / 独立 footer</dd></div><div><dt>组件负责</dt><dd>边界、截断、选择态、禁用与不可用主区</dd></div><div><dt>页面负责</dt><dd>默认项、业务标记、错误原因、复制与查看</dd></div></dl>
  </Specimen>
}

export function CollectionActionSpecimen({ notify }: { notify: Notice }) {
  const [adding, setAdding] = useState<'known' | 'custom' | null>(null)
  const [name, setName] = useState('')
  const [items, setItems] = useState<string[]>([])
  const field = useId()
  const source = 'ui-settings-models / ModelsSection'
  return <Specimen title="集合扩展入口" name="CollectionAddButton" metrics={['44px · r16', '虚线边框', '图标 + 标签', source]} notify={notify} sample={'import { CollectionAddButton, IconPlusOutlineRegular } from "@deepseek-ai/dsh-client-ui-primitives"\n\n<CollectionAddButton disabled={!writable} onClick={openProviderForm}>\n  <IconPlusOutlineRegular size={14} />添加提供方\n</CollectionAddButton>'}>
    {!CollectionAddButton ? <div className="dsh-cg-unavailable" role="status">宿主未提供 CollectionAddButton</div> : <>
      <div className="dsh-native-label"><strong>提供方列表末尾</strong><span>并列入口 · 等宽 · 空间不足时换行</span></div>
      <div className="dsh-native-provider-actions">
        <CollectionAddButton onClick={() => { setAdding('known'); setName('') }}><IconPlusOutlineRegular size={14} />添加提供方</CollectionAddButton>
        <CollectionAddButton onClick={() => { setAdding('custom'); setName('') }}><IconPlusOutlineRegular size={14} />添加自定义提供方</CollectionAddButton>
      </div>
      {adding && <form className="dsh-native-inline-form" onSubmit={event => { event.preventDefault(); if (!name.trim()) return; setItems(value => [...value, name.trim()]); setAdding(null); notify('示例提供方已添加') }}>
        <label htmlFor={field}>{adding === 'known' ? '提供方名称' : '自定义提供方名称'}</label><Input id={field} value={name} onChange={event => setName(event.target.value)} autoFocus required maxLength={64} />
        <div className="dsh-cg-actions"><Button size="sm" variant="outline" onClick={() => setAdding(null)}>取消</Button><Button type="submit" size="sm" variant="primary" disabled={!name.trim()}>添加</Button></div>
      </form>}
      <div className="dsh-cg-result" role="status"><span>本地示例</span><strong>{items.length ? items.join(' / ') : '尚未添加'}</strong></div>
      <div className="dsh-native-state-grid">
        <div><small>默认</small><CollectionAddButton onClick={() => notify('默认入口已触发')}><IconPlusOutlineRegular size={14} />添加提供方</CollectionAddButton></div>
        <div><small>禁用 / 无可用提供方</small><CollectionAddButton disabled><IconPlusOutlineRegular size={14} />添加提供方</CollectionAddButton></div>
        <div><small>长标签</small><CollectionAddButton onClick={() => notify('长标签入口已触发')}><IconPlusOutlineRegular size={14} />添加兼容 OpenAI 协议的提供方</CollectionAddButton></div>
      </div>
    </>}
    <dl className="dsh-native-contract"><div><dt>语义</dt><dd>向集合新增一个实体的占位入口</dd></div><div><dt>结构</dt><dd>原生 button / 可选图标 / 标签</dd></div><div><dt>组件负责</dt><dd>边界、尺寸、hover、focus、disabled</dd></div><div><dt>页面负责</dt><dd>等宽分组、换行、新增表单与业务校验</dd></div></dl>
  </Specimen>
}
