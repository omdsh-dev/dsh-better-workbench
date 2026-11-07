import { useId, useState, type ReactNode } from 'react'
import { Button, CodeBlock, Tooltip, IconCopyOutlineRegular, IconCodeOutlineRegular, writeClipboard } from '@deepseek-ai/dsh-client-ui-primitives'

export type Notice = (text: string, error?: boolean) => void

export function IconAction({ label, children, onClick }: { label: string; children: ReactNode; onClick: () => void }) {
  // Button is not ref-forwarding; Tooltip needs a DOM anchor for measurement.
  return <Tooltip label={label} side="top"><span className="dsh-cg-icon-anchor"><Button size="sm" aria-label={label} onClick={onClick}>{children}</Button></span></Tooltip>
}

export function Specimen({ name, title, metrics, sample, children, notify }: {
  name: string; title: string; metrics: string[]; sample: string; children: ReactNode; notify: Notice
}) {
  const [codeOpen, setCodeOpen] = useState(false)
  const id = useId()
  return <section className="dsh-cg-section" aria-labelledby={id}>
    <header className="dsh-cg-section-head">
      <div><h2 id={id}>{title} <code>{name}</code></h2><div className="dsh-cg-metrics">{metrics.map(metric => <span key={metric}>{metric}</span>)}</div></div>
      <div className="dsh-cg-actions">
        <IconAction label={'复制 ' + name + ' 实例'} onClick={() => { void writeClipboard(sample).then(ok => notify(ok ? '实例已复制' : '无法访问剪贴板', !ok)) }}><IconCopyOutlineRegular /></IconAction>
        <Tooltip label="实例代码" side="top"><span className="dsh-cg-icon-anchor"><Button size="sm" aria-label={name + ' 实例代码'} aria-expanded={codeOpen} aria-controls={id + '-code'} onClick={() => setCodeOpen(value => !value)}><IconCodeOutlineRegular /></Button></span></Tooltip>
      </div>
    </header>
    {children}
    {codeOpen && <div className="dsh-cg-code" id={id + '-code'}><CodeBlock code={sample} lang="tsx" copyLabel="复制代码" copiedLabel="已复制" /></div>}
  </section>
}
