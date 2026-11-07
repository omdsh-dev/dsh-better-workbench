import { useId, useState } from 'react'
import { Button, IconChevronDownOutlineRegular, Input, Menu, Switch } from '@deepseek-ai/dsh-client-ui-primitives'
import type { WorkbenchCreateProps } from './types.ts'
import { normalizeWebsiteUrl, websiteName } from './website.ts'
import { WebsiteIcon } from './WebsiteIcon.tsx'

export function WebsiteCreate({ config, disabled, onChange }: WorkbenchCreateProps): JSX.Element {
  const [input, setInput] = useState(String(config.url ?? ''))
  const [touched, setTouched] = useState(false)
  const [previewUrl, setPreviewUrl] = useState('')
  const [modeOpen, setModeOpen] = useState(false)
  const errorId = useId()
  let normalized = '', error = ''
  try { normalized = normalizeWebsiteUrl(input) }
  catch (reason) { error = (reason as Error).message }
  const origin = normalized ? new URL(normalized).origin : ''
  const trusted = !!origin && config.trustedOrigin === origin
  const external = config.openMode === 'external'
  return <div className="dsh-better-workbench-website-create">
    <label className="dsh-better-workbench-create-field">
      <span>网页地址</span>
      <Input autoFocus type="text" inputMode="url" autoComplete="url" spellCheck={false}
        className="dsh-better-workbench-create-input" icon={<WebsiteIcon url={previewUrl || undefined} />}
        placeholder="https://example.com" aria-label="网页地址" aria-invalid={touched && !!error}
        aria-describedby={touched && error ? errorId : undefined}
        value={input} disabled={disabled}
        onChange={event => {
          const value = event.target.value
          setInput(value)
          setPreviewUrl('')
          let url = value, nextOrigin = '', title: string | undefined
          try { url = normalizeWebsiteUrl(value); nextOrigin = new URL(url).origin; title = websiteName(url) } catch {}
          // Trust belongs to the confirmed origin, never to a subsequently entered site.
          onChange({ ...config, url, trustedOrigin: nextOrigin === config.trustedOrigin ? nextOrigin : '' }, title)
        }}
        onBlur={() => {
          setTouched(true)
          if (normalized) { setInput(normalized); setPreviewUrl(normalized) }
        }} />
      {touched && error && <span id={errorId} role="alert" className="dsh-better-workbench-create-error">{error}</span>}
    </label>
    <div className="dsh-better-workbench-create-options">
      <div className="dsh-better-workbench-create-setting-row">
        <span className="dsh-better-workbench-create-setting-label">打开方式</span>
        <Menu open={modeOpen && !disabled} onClose={() => setModeOpen(false)} portal dense align="end"
          selectedId={external ? 'external' : 'embedded'}
          items={[{ id: 'embedded', label: '工作台内' }, { id: 'external', label: '浏览器新标签页' }]}
          onSelect={mode => {
            if (disabled || (mode !== 'external' && mode !== 'embedded')) return
            onChange({ ...config, openMode: mode, trustedOrigin: mode === 'external' ? '' : config.trustedOrigin ?? '' })
            setModeOpen(false)
          }}
          anchor={<Button type="button" variant="ghost" size="sm" className="dsh-better-workbench-create-select"
            aria-label="打开方式" aria-haspopup="menu" aria-expanded={modeOpen && !disabled} disabled={disabled}
            onClick={() => setModeOpen(value => !value)}>
            <span>{external ? '浏览器新标签页' : '工作台内'}</span><IconChevronDownOutlineRegular />
          </Button>} />
      </div>
      {!external && <div className="dsh-better-workbench-create-setting-row dsh-better-workbench-create-trust">
        <div className="dsh-better-workbench-create-setting-copy">
          <span className="dsh-better-workbench-create-setting-label">信任此站点</span>
          <p className="dsh-better-workbench-website-permission">兼容模式允许站点使用自身 Cookie 和存储，可改善字体、样式和交互异常，但会降低隔离，仅用于可信站点。</p>
        </div>
        <Switch label="信任此站点并启用兼容模式" checked={trusted} disabled={disabled || !origin}
          title={!origin ? '请先填写有效的网页地址' : '启用兼容模式'}
          onChange={checked => onChange({ ...config, trustedOrigin: checked ? origin : '' })} />
      </div>}
    </div>
  </div>
}
