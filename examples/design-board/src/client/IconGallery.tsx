import { useState, type ComponentType } from 'react'
import { Button, Input, IconSearchOutlineRegular, IconCopyOutlineRegular, IconCheckOutlineRegular } from '@deepseek-ai/dsh-client-ui-primitives'
import { ICON_GALLERY_STYLE } from './icon-gallery-styles.js'

type IconItem = { label: string; name: string; icon: ComponentType<{ size?: number; className?: string }>; size: number; usage: string }
type IconGroup = { title: string; icons: readonly IconItem[] }

export function IconGallery({ groups }: { groups: readonly IconGroup[] }): JSX.Element {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [selectedName, setSelectedName] = useState('IconAgentPresetOutlineRegular')
  const [copyState, setCopyState] = useState('')
  const all = groups.flatMap(group => group.icons)
  const selected = all.find(item => item.name === selectedName) ?? all[0]!
  const SelectedIcon = selected.icon
  const visible = groups.filter(group => category === 'all' || category === group.title).map(group => ({ ...group, icons: group.icons.filter(item => [item.name, item.label, item.usage].some(value => value.toLowerCase().includes(query.trim().toLowerCase()))) })).filter(group => group.icons.length)
  const count = visible.reduce((total, group) => total + group.icons.length, 0)
  const snippet = `import { ${selected.name} } from '@deepseek-ai/dsh-client-ui-primitives'\n\n<${selected.name} size={${selected.size}} />`
  const copy = async () => {
    try { await navigator.clipboard.writeText(snippet); setCopyState('已复制') }
    catch { setCopyState('复制失败，请检查剪贴板权限') }
  }
  return <div className="dsh-specimen-content dsh-icon-library">
    <style>{ICON_GALLERY_STYLE}</style>
    <header className="dsh-specimen-intro"><span>基础资源 / Icons</span><h1>图标</h1><div className="dsh-icon-meta"><span>{all.length} 个图标</span><code>@deepseek-ai/dsh-client-ui-primitives</code></div></header>
    <div className="dsh-icon-library-toolbar">
      <Input icon={<IconSearchOutlineRegular />} aria-label="搜索图标" placeholder="搜索名称、用途或组件名" value={query} onChange={event => setQuery(event.target.value)} />
      <select aria-label="图标分类" value={category} onChange={event => setCategory(event.target.value)}><option value="all">全部分类</option>{groups.map(group => <option key={group.title}>{group.title}</option>)}</select>
      <span role="status">{count} / {all.length}</span>
    </div>
    <div className="dsh-icon-library-layout">
      <div className="dsh-icon-library-results">
        {visible.map(group => <section key={group.title} className="dsh-icon-library-group"><h2>{group.title}<span>{group.icons.length}</span></h2><div className="dsh-icon-library-grid">{group.icons.map(item => { const Icon = item.icon; return <button type="button" className="dsh-icon-tile" key={item.name} aria-pressed={selectedName === item.name} title={item.name} onClick={() => { setSelectedName(item.name); setCopyState('') }}><span className="dsh-icon-tile-glyph"><Icon size={item.size} /></span><strong>{item.label}</strong><small>{item.name === 'IconTreeCornerRegular' ? '8 × 10' : item.size}px</small></button> })}</div></section>)}
        {!count && <div className="dsh-icon-empty"><IconSearchOutlineRegular /><strong>没有匹配的图标</strong><Button variant="outline" size="sm" onClick={() => { setQuery(''); setCategory('all') }}>清除筛选</Button></div>}
      </div>
      <aside className="dsh-icon-inspector" aria-label="图标详情">
        <header><h2>{selected.label}</h2><code>{selected.name}</code></header>
        <div className="dsh-icon-inspector-preview"><SelectedIcon size={selected.size * 4} /></div>
        <div className="dsh-icon-specimens"><div><SelectedIcon size={selected.size} /><span>原尺寸 {selected.name === 'IconTreeCornerRegular' ? '8 × 10' : selected.size}px</span></div><div className="dsh-icon-inverse"><SelectedIcon size={selected.size} /><span>反色</span></div></div>
        <dl><div><dt>导出名称</dt><dd>{selected.name}</dd></div><div><dt>产品用途</dt><dd>{selected.usage}</dd></div><div><dt>颜色</dt><dd>currentColor</dd></div>{selected.name === 'IconAgentPresetOutlineRegular' && <div><dt>实际尺寸</dt><dd>会话标签 14px / 设置导航 16px</dd></div>}</dl>
        {selected.name === 'IconAgentPresetOutlineRegular' && <div className="dsh-icon-contexts"><div><SelectedIcon size={14} /><span>DeepSeek Harness</span><small>会话标签</small></div><div><SelectedIcon size={16} /><span>Agent 预设</span><small>设置导航</small></div></div>}
        <pre>{snippet}</pre>
        <Button variant="outline" size="sm" icon={copyState === '已复制' ? <IconCheckOutlineRegular /> : <IconCopyOutlineRegular />} onClick={() => { void copy() }}>复制调用</Button><span className="dsh-icon-copy-status" role="status">{copyState}</span>
      </aside>
    </div>
  </div>
}
