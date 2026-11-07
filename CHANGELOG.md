# Changelog

All notable user-facing changes to dsh-better-workbench and its bundled examples are documented in this file. The project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and uses semantic version tags.

## [Unreleased]

### Fixed

- Re-align the Workbench sidebar with DSH Web 0.2.2's sidebar geometry: consume `--dsh-sidebar-row-padding`, `--dsh-sidebar-label-gap` and `--dsh-sidebar-paint-inset` (with pre-0.2.2 fallbacks), so the section heading, row icons and labels sit on the same x-axis as the workspace/session list.

## [0.4.0] - 2026-09-22

### Added

- Built-in **网页** Workbench application and its **从网页地址创建** template: strict HTTP(S) URL configuration, an embedded view with explicit origin-bound trust, an external-browser fallback, favicon-derived instance icons and per-instance settings.
- A creation dialog that edits the name and configuration of a draft before committing it, backed by an optional `renderCreate` application hook and `startCreation(templateId, { title, config })` options.
- A unified `@` input-trigger source that references any available Workbench instance, serializing only its instance ID, application ID and title (XML-escaped) into the ordinary user message.

### Changed

- Require `@deepseek-ai/dsh-client-ui-input-trigger` and raise `@deepseek-ai/dsh-client-ui-primitives` to `0.1.5-alpha.2`.
- Support the DSH 0.1.7 size-neutral product icons: the workbench, the built-in **网页** application, the design board and the Skills + MCP panels example now import the `Icon*Regular` exports and pass an explicit `size` where the old name implied 14px. Raise `@deepseek-ai/dsh-client-ui-primitives` to `^0.1.7-alpha.1` and `@deepseek-ai/cordis` to `^4.0.3`.
- Adapt to the 0.1.7 component contracts: `TerminalBlockLabels` now requires `noExitCode`, and `ConnectionIndicator` no longer accepts `reconnectLabel`.
- Declare the `create()` schema factory that DSH 0.1.7 requires on every strict typert codec of the Skills + MCP panels example.
- Show each size-neutral icon once in the design-board icon library instead of a duplicated compact entry.

## [0.3.2] - 2026-09-10

### Fixed

- Mount the centre surface on the `main` slot. DSH Web replaced the root-scoped `conversation` slot with the keyed `main` panel slot (`conversation` became an entry key inside it), so `[data-slot="conversation"]` no longer exists and the workbench silently failed to mount: the home and instance routes changed without any surface appearing. This requires a DSH Web that exposes the `main` slot; older hosts that still render `conversation` are no longer supported.

## [0.3.0] - 2026-09-09

### Changed

- Redesign the single `protocolVersion: 1` application contract without a parallel protocol or legacy synchronous API: mandatory config version/defaults/validation, optional async migration, and async instance mutations.
- Store full repository state atomically in IndexedDB, with revision compare-and-swap, migration backups, generation checks and cross-tab invalidation. Keep routes and presentation preferences in per-tab sessionStorage; retain original localStorage keys during initial legacy-data import.
- Allocate UUIDs for ordinary instances while preserving explicit default IDs and imported IDs. Treat source package/version/repository as self-reported metadata, not authenticated identity.
- Share effective, container-bounded panel geometry between Surface and conversation insets; downgrade push to overlay on small containers. Support floating capsules only.
- Use independent repository-local builds and a public `dsh-better-workbench/build/client-bundle` helper. Add a standalone starter distinct from the design-board reference. Build tooling requires Node ^22.18 or >=24.11; published runtime compatibility remains separate.

### Added

- Loading/error/retry and instance readiness states, dirty-state navigation confirmation, asynchronous creator status and cooperative AbortSignal cancellation.
- JSON instance/config-backup export and a validated, revision-checked `restoreBackup` service API that backs up the current configuration before replacement.
- Source-based storage/service/DOM/UI tests, isolated build verification, standalone-layout build coverage, and bilingual current-contract authoring examples.

### Fixed

- Isolate DOM mounting/unmounting, restore original styles and React roots, avoid self-generated observer rescans, and retry sidebar/center independently. Failed mounts do not hide Conversation.
- Ignore nested session menus/controls in the bubbling navigation fallback and remove localized-label matching; observe only the verified optional sessions list contract.

### Limitations And Release Work

- Conversation remains mounted behind exclusive pages. The DOM adapter depends on DSH slot topology; New Session reusing the selected blank session may not close Workbench.
- Configuration backups are not business-file hosting. Backup restoration is API-only, requires a matching active config version, and does not automatically downgrade schemas. There is no JSON import or restore UI.
- Creator cancellation does not guarantee remote Agent termination or rollback of committed work. Source metadata is not permission or authenticated provenance.
- Standalone-layout checks do not establish fresh registry-install readiness. Publish the redesigned helper/contracts before using the starter against registry dependencies.
- Rebuild and commit base and design-board artifacts with `pnpm run build` and `pnpm run build:example` before release. Temporary verification does not update installed GUI artifacts.

## [0.2.0] - 2026-09-04

### Added

- Always-available Workbench home with application, instance, template, and Agent Creator registries.
- Explicit `conversation`, `workbench-home`, and `workbench-instance` routes.
- `page`, `panel`, and `capsule` presentation contracts with explicit Conversation coexistence.
- Versioned JSON persistence, v1 migration, unavailable-instance recovery, ordering, renaming, and configuration updates.
- Cordis fiber-owned registration and disposal for applications, templates, creators, styles, and UI integration.
- Responsive Workbench instance and creation-card grids based on DSH Agent-preset card semantics.
- `docs/application-authoring/SKILL.md` plus complete English and Chinese application-authoring references.
- `examples/design-board`, the first protocol-compliant reference application, with the fixed `总览 → 基础资源 → 规范 → 产品页面` information architecture and specimens derived from current DSH source.

### Known limitations

- DSH 0.1.x does not expose a formal center-page Slot. The current page adapter covers the center and suppresses Conversation interaction, but it does not unmount the Conversation React tree.
