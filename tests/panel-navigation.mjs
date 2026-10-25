import assert from 'node:assert/strict'
import { test } from 'node:test'
import { bindPanelNavigation } from '../src/client/panel-navigation.ts'

function fixture({ refuseClose = false } = {}) {
  let route = { kind: 'workbench-instance', instanceId: 'one', presentation: 'page' }
  let panel = null
  const serviceListeners = new Set(), panelListeners = new Set()
  const service = {
    getSnapshot: () => ({ route }),
    subscribe: l => { serviceListeners.add(l); return () => serviceListeners.delete(l) },
    close: () => { if (refuseClose) return; route = { kind: 'conversation' }; for (const l of serviceListeners) l() },
  }
  const layout = {
    panelInfo: { getSnapshot: () => ({ activePanelId: panel }), subscribe: l => { panelListeners.add(l); return () => panelListeners.delete(l) } },
    selectPanel: id => { panel = id; for (const l of panelListeners) l() },
  }
  return {
    service, layout, serviceListeners, panelListeners,
    get route() { return route }, get panel() { return panel },
    pickPanel: id => layout.selectPanel(id),
    openWorkbench: () => { route = { kind: 'workbench-instance', instanceId: 'one', presentation: 'page' }; for (const l of serviceListeners) l() },
  }
}

test('selecting a global panel closes the open workbench', t => {
  const f = fixture()
  t.after(bindPanelNavigation(f.service, f.layout))
  f.pickPanel('plugins')
  assert.equal(f.route.kind, 'conversation')
  assert.equal(f.panel, 'plugins')
})

test('opening a workbench clears the panel selection so it can be selected again', t => {
  const f = fixture()
  t.after(bindPanelNavigation(f.service, f.layout))
  f.pickPanel('schedules')
  f.openWorkbench()
  assert.equal(f.panel, null)
  f.pickPanel('schedules')
  assert.equal(f.route.kind, 'conversation')
  assert.equal(f.panel, 'schedules')
})

test('a refused close keeps panel and workbench consistent', t => {
  const f = fixture({ refuseClose: true })
  t.after(bindPanelNavigation(f.service, f.layout))
  f.pickPanel('plugins')
  assert.equal(f.route.kind, 'workbench-instance')
  assert.equal(f.panel, null)
})

test('dispose removes both subscriptions and a missing layout is a no-op', () => {
  const f = fixture()
  bindPanelNavigation(f.service, f.layout)()
  assert.equal(f.serviceListeners.size, 0)
  assert.equal(f.panelListeners.size, 0)
  assert.doesNotThrow(() => bindPanelNavigation(f.service, undefined)())
})
