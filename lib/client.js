window.__ModuleLoader__.load({
	id: "dsh-better-workbench",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		let react_dom_client = require("react-dom/client");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		let react_jsx_runtime = require("react/jsx-runtime");
		// src/client/storage.ts
		const LEGACY_KEYS = [
			"dsh-better-workbench.state.v3",
			"dsh-better-workbench.state.v2",
			"dsh-better-workbench.instances.v1"
		];
		const peers = /* @__PURE__ */ new Set();
		const origin = Math.random().toString(36).slice(2);
		function emptyState() {
			return {
				instances: [],
				dismissedDefaultAppIds: [],
				backups: []
			};
		}
		function isRecord(value) {
			return typeof value === "object" && value !== null && !Array.isArray(value);
		}
		function assertSynchronous(value) {
			if ((typeof value === "object" && value !== null || typeof value === "function") && typeof value.then === "function") {
				Promise.resolve(value).catch(() => {});
				throw new TypeError("Repository transaction callbacks must be synchronous");
			}
		}
		function assertState(value) {
			if (!isRecord(value) || !Array.isArray(value.instances) || !Array.isArray(value.dismissedDefaultAppIds) || !Array.isArray(value.backups) || !value.dismissedDefaultAppIds.every((id) => typeof id === "string")) throw new Error("Invalid workbench repository state");
			const ids = /* @__PURE__ */ new Set();
			for (const item of value.instances) {
				if (!isRecord(item) || typeof item.instanceId !== "string" || !item.instanceId.trim() || typeof item.appId !== "string" || !item.appId.trim() || typeof item.title !== "string" || !isRecord(item.config) || !Number.isSafeInteger(item.configVersion) || Number(item.configVersion) < 1 || !Number.isSafeInteger(item.revision) || Number(item.revision) < 0 || ![
					"order",
					"createdAt",
					"updatedAt",
					"lastOpenedAt"
				].every((key) => typeof item[key] === "number" && Number.isFinite(item[key])) || ids.has(item.instanceId)) throw new Error("Invalid workbench repository instance");
				ids.add(item.instanceId);
			}
			for (const item of value.backups) if (!isRecord(item) || typeof item.instanceId !== "string" || !isRecord(item.config) || !Number.isSafeInteger(item.configVersion) || Number(item.configVersion) < 1 || !Number.isSafeInteger(item.revision) || Number(item.revision) < 0 || typeof item.createdAt !== "number" || !Number.isFinite(item.createdAt)) throw new Error("Invalid workbench configuration backup");
		}
		function notify(listeners) {
			for (const listener of [...listeners]) try {
				listener();
			} catch {}
		}
		function importLegacy(storage) {
			const sources = [];
			for (const key of LEGACY_KEYS) {
				const raw = storage?.getItem(key);
				if (raw !== null && raw !== void 0) sources.push({
					key,
					raw
				});
			}
			if (!sources.length) return {
				state: emptyState(),
				sources
			};
			const source = sources[0];
			let parsed;
			try {
				parsed = JSON.parse(source.raw);
			} catch {
				return {
					state: {
						...emptyState(),
						recovery: {
							sources,
							errors: ["Invalid JSON in " + source.key]
						}
					},
					sources
				};
			}
			const expectedVersion = source.key === LEGACY_KEYS[0] ? 3 : source.key === LEGACY_KEYS[1] ? 2 : 1;
			const legacy = Array.isArray(parsed) && expectedVersion === 1 ? {
				instances: parsed,
				version: 1
			} : parsed;
			if (!isRecord(legacy) || legacy.version !== expectedVersion || !Array.isArray(legacy.instances)) return {
				state: {
					...emptyState(),
					recovery: {
						sources,
						errors: ["Invalid legacy workbench state: " + source.key]
					}
				},
				sources
			};
			const now = Date.now();
			const errors = [];
			const instances = [];
			for (const [index, item] of legacy.instances.entries()) try {
				if (!isRecord(item)) throw new Error("Invalid legacy workbench instance");
				const updatedAt = item.updatedAt ?? now;
				const candidate = {
					instanceId: item.instanceId,
					appId: item.appId,
					title: item.title,
					config: structuredClone(item.config),
					configVersion: item.configVersion ?? 1,
					revision: item.revision ?? 1,
					order: item.order ?? 0,
					createdAt: item.createdAt ?? updatedAt,
					updatedAt,
					lastOpenedAt: item.lastOpenedAt ?? 0
				};
				assertState({
					...emptyState(),
					instances: [...instances, candidate]
				});
				instances.push(candidate);
			} catch (error) {
				errors.push("Record " + (index + 1) + ": " + (error instanceof Error ? error.message : String(error)));
			}
			const dismissed = legacy.dismissedDefaultAppIds ?? [];
			if (!Array.isArray(dismissed) || !dismissed.every((id) => typeof id === "string")) errors.push("Invalid dismissed default application identifiers");
			const state = {
				instances,
				dismissedDefaultAppIds: Array.isArray(dismissed) ? dismissed.filter((id) => typeof id === "string") : [],
				...errors.length ? { recovery: {
					sources,
					errors
				} } : {},
				backups: instances.map((item) => ({
					instanceId: item.instanceId,
					config: structuredClone(item.config),
					configVersion: item.configVersion,
					revision: item.revision,
					createdAt: now
				}))
			};
			assertState(state);
			return {
				state,
				sources
			};
		}
		var IndexedDbRepository = class {
			options;
			dbName;
			listeners = /* @__PURE__ */ new Set();
			database;
			factory;
			channel;
			disposed = false;
			transactions = /* @__PURE__ */ new Set();
			constructor(options = {}) {
				this.options = options;
				this.dbName = options.dbName ?? "dsh-better-workbench";
				peers.add(this);
			}
			async open() {
				if (this.disposed) throw new Error("Workbench repository is disposed");
				if (!this.database) {
					const factory = this.options.indexedDB === void 0 ? globalThis.indexedDB : this.options.indexedDB;
					if (!factory) throw new Error("IndexedDB is unavailable");
					this.factory = factory;
					this.database = new Promise((resolve, reject) => {
						const request = factory.open(this.dbName, 1);
						let failed = false;
						request.onupgradeneeded = () => {
							if (!request.result.objectStoreNames.contains("state")) request.result.createObjectStore("state");
						};
						request.onerror = () => {
							failed = true;
							reject(request.error ?? /* @__PURE__ */ new Error("IndexedDB open failed"));
						};
						request.onblocked = () => {
							failed = true;
							reject(/* @__PURE__ */ new Error("IndexedDB open is blocked"));
						};
						request.onsuccess = () => {
							const db = request.result;
							if (failed || this.disposed) {
								db.close();
								reject(/* @__PURE__ */ new Error("Workbench repository is disposed or database opening failed"));
								return;
							}
							db.onversionchange = () => {
								db.close();
								this.database = void 0;
							};
							resolve(db);
						};
					});
					try {
						await this.database;
						const Channel = this.options.broadcastChannel === void 0 ? globalThis.BroadcastChannel : this.options.broadcastChannel;
						if (Channel && !this.disposed && !this.channel) {
							this.channel = new Channel("dsh-better-workbench:" + this.dbName);
							this.channel.onmessage = (event) => {
								if (isRecord(event.data) && event.data.type === "invalidate" && event.data.origin !== origin) notify(this.listeners);
							};
						}
					} catch (error) {
						const database = this.database;
						this.database = void 0;
						database?.then((db) => db.close(), () => {});
						throw error;
					}
				}
				if (this.disposed) throw new Error("Workbench repository is disposed");
				return this.database;
			}
			invalidate() {
				for (const peer of peers) if (peer.dbName === this.dbName && !peer.disposed && (peer.factory ?? peer.options.indexedDB ?? globalThis.indexedDB) === this.factory) notify(peer.listeners);
				try {
					this.channel?.postMessage({
						type: "invalidate",
						origin
					});
				} catch {}
			}
			async execute(update) {
				const db = await this.open();
				if (this.disposed) throw new Error("Workbench repository is disposed");
				return new Promise((resolve, reject) => {
					const transaction = db.transaction("state", "readwrite");
					this.transactions.add(transaction);
					const store = transaction.objectStore("state");
					let result;
					let failure;
					let changed = false;
					transaction.oncomplete = () => {
						this.transactions.delete(transaction);
						if (changed) this.invalidate();
						resolve(result);
					};
					transaction.onabort = () => {
						this.transactions.delete(transaction);
						reject(failure ?? transaction.error ?? /* @__PURE__ */ new Error("IndexedDB transaction aborted"));
					};
					transaction.onerror = (event) => {
						failure ??= event.target?.error ?? transaction.error ?? /* @__PURE__ */ new Error("IndexedDB transaction failed");
					};
					const request = store.get("main");
					request.onerror = () => {
						failure = request.error ?? /* @__PURE__ */ new Error("IndexedDB read failed");
					};
					request.onsuccess = () => {
						try {
							let state = request.result;
							if (state === void 0) {
								const imported = importLegacy(this.options.localStorage === void 0 ? globalThis.localStorage : this.options.localStorage);
								state = imported.state;
								store.put({
									sources: imported.sources,
									createdAt: Date.now()
								}, "legacy-backup");
								store.put({
									completedAt: Date.now(),
									sourceKeys: imported.sources.map((source) => source.key)
								}, "legacy-import");
								changed = true;
							}
							assertState(state);
							if (update) {
								result = update(state);
								assertSynchronous(result);
								assertState(state);
								changed = true;
							} else result = structuredClone(state);
							if (changed) store.put(state, "main");
						} catch (error) {
							failure = error;
							transaction.abort();
						}
					};
				});
			}
			async read() {
				return await this.execute();
			}
			async transact(update) {
				return await this.execute(update);
			}
			subscribe(listener) {
				if (this.disposed) throw new Error("Workbench repository is disposed");
				this.listeners.add(listener);
				return () => {
					this.listeners.delete(listener);
				};
			}
			dispose() {
				if (this.disposed) return;
				this.disposed = true;
				peers.delete(this);
				this.listeners.clear();
				this.channel?.close();
				for (const transaction of this.transactions) try {
					transaction.abort();
				} catch {}
				this.database?.then((db) => db.close(), () => {});
			}
		};
		// src/client/service.ts
		const ID_PATTERN = /* @__PURE__ */ new RegExp("^(?:@[a-zA-Z0-9][a-zA-Z0-9._-]*/)?[a-zA-Z0-9][a-zA-Z0-9._:@/-]{0,159}$");
		const ROUTE_KEY = "dsh-better-workbench.navigation.v1";
		const PRESENTATIONS_KEY = "dsh-better-workbench.presentations.v1";
		const message = (error) => error instanceof Error ? error.message : String(error);
		const validId = (id) => {
			if (typeof id !== "string" || !ID_PATTERN.test(id)) throw new Error("Invalid workbench identifier: " + String(id));
		};
		function cloneConfig(value) {
			const seen = /* @__PURE__ */ new Set();
			const copy = (item) => {
				if (item === null || typeof item === "string" || typeof item === "boolean") return item;
				if (typeof item === "number" && Number.isFinite(item)) return item;
				if (typeof item !== "object") throw new Error("Configuration must contain JSON values only");
				if (seen.has(item)) throw new Error("Configuration cannot contain cycles");
				if (!Array.isArray(item) && Object.getPrototypeOf(item) !== Object.prototype && Object.getPrototypeOf(item) !== null) throw new Error("Configuration must contain plain JSON objects");
				seen.add(item);
				try {
					if (Array.isArray(item)) return Array.from(item, copy);
					return Object.fromEntries(Object.entries(item).map(([key, entry]) => [key, copy(entry)]));
				} finally {
					seen.delete(item);
				}
			};
			if (value === null || typeof value !== "object" || Array.isArray(value)) throw new Error("Configuration must be a JSON object");
			return copy(value);
		}
		function freezeConfig(config) {
			const freeze = (value) => {
				if (value && typeof value === "object") {
					for (const item of Object.values(value)) freeze(item);
					Object.freeze(value);
				}
			};
			const owned = cloneConfig(config);
			freeze(owned);
			return owned;
		}
		function ownApp(definition) {
			return Object.freeze({
				...definition,
				config: Object.freeze({ ...definition.config }),
				presentations: Object.freeze(definition.presentations.map((item) => Object.freeze({ ...item }))),
				source: definition.source ? Object.freeze({ ...definition.source }) : void 0,
				defaultInstance: definition.defaultInstance ? Object.freeze({
					...definition.defaultInstance,
					config: definition.defaultInstance.config ? freezeConfig(definition.defaultInstance.config) : void 0
				}) : void 0
			});
		}
		function ownTemplate(definition) {
			return Object.freeze(definition.kind === "instance" ? {
				...definition,
				defaultConfig: definition.defaultConfig ? freezeConfig(definition.defaultConfig) : void 0
			} : { ...definition });
		}
		function validateApp(app) {
			validId(app.appId);
			if (app.protocolVersion !== 1 || !app.title?.trim()) throw new Error("Invalid workbench application definition");
			if (!Number.isSafeInteger(app.config?.version) || app.config.version < 1 || typeof app.config.defaults !== "function" || typeof app.config.validate !== "function") throw new Error("Application requires a versioned configuration contract");
			const config = cloneConfig(app.config.defaults());
			app.config.validate(cloneConfig(config));
			const kinds = /* @__PURE__ */ new Set();
			for (const p of app.presentations) {
				if (kinds.has(p.kind)) throw new Error("Duplicate presentation: " + p.kind);
				kinds.add(p.kind);
				if (p.kind === "page") {
					if (p.conversation !== "exclusive" || !app.renderMain) throw new Error("Page requires renderMain and exclusive conversation");
				} else if (p.kind === "panel") {
					if (!["right", "bottom"].includes(p.placement) || !["push", "overlay"].includes(p.behavior) || p.conversation !== "resident" || !app.renderPanel) throw new Error("Invalid panel presentation");
				} else if (p.kind === "capsule") {
					if (p.placement !== "floating" || p.conversation !== "resident" || !app.renderCapsule) throw new Error("Only floating capsules are supported");
				} else throw new Error("Unknown presentation");
			}
			if (!kinds.has(app.defaultPresentation)) throw new Error("Default presentation must be supported");
			if (app.source) {
				if (typeof app.source.packageName !== "string" || !app.source.packageName.trim() || typeof app.source.version !== "string" || !app.source.version.trim()) throw new Error("Invalid application source");
				if (app.source.repository !== void 0) {
					const url = new URL(app.source.repository);
					if (url.protocol !== "https:" && url.protocol !== "http:") throw new Error("Invalid application repository URL");
				}
			}
			if (app.defaultInstance?.instanceId) validId(app.defaultInstance.instanceId);
			if (app.defaultInstance?.config) app.config.validate(cloneConfig(app.defaultInstance.config));
		}
		/** Durable transactions and activation-owned registries; no renderer lives in storage. */
		var WorkbenchController = class {
			readiness;
			ownsRepository;
			get ready() {
				return this.readiness;
			}
			repository;
			navigationStorage;
			confirmDiscard;
			apps = /* @__PURE__ */ new Map();
			templates = /* @__PURE__ */ new Map();
			creators = /* @__PURE__ */ new Map();
			state = {
				instances: [],
				dismissedDefaultAppIds: [],
				backups: []
			};
			route = { kind: "conversation" };
			presentations = /* @__PURE__ */ new Map();
			statuses = /* @__PURE__ */ new Map();
			pending = /* @__PURE__ */ new Map();
			dirty = /* @__PURE__ */ new Set();
			listeners = /* @__PURE__ */ new Set();
			loading = true;
			error = null;
			generation = 0;
			active = true;
			tasks = /* @__PURE__ */ new Map();
			teardownTimeoutMs;
			disposal;
			refreshTail = Promise.resolve();
			creation = { status: "idle" };
			creationAbort;
			snapshot;
			unsubscribe;
			constructor(options = {}) {
				this.teardownTimeoutMs = options.teardownTimeoutMs ?? 5e3;
				this.ownsRepository = options.repository === void 0;
				this.repository = options.repository ?? new IndexedDbRepository();
				try {
					this.navigationStorage = options.navigationStorage === null ? void 0 : options.navigationStorage ?? (typeof sessionStorage === "undefined" ? void 0 : sessionStorage);
				} catch {
					this.navigationStorage = void 0;
				}
				this.confirmDiscard = options.confirmDiscard ?? (() => typeof window !== "undefined" && window.confirm("当前工作台有未保存内容，仍要离开吗？"));
				try {
					const raw = this.navigationStorage?.getItem(ROUTE_KEY);
					const saved = raw ? JSON.parse(raw) : void 0;
					if (saved?.kind === "conversation" || saved?.kind === "workbench-home" || saved?.kind === "workbench-instance" && typeof saved.instanceId === "string" && [
						"page",
						"panel",
						"capsule"
					].includes(saved.presentation)) this.route = saved;
					const preferences = this.navigationStorage?.getItem(PRESENTATIONS_KEY);
					const parsed = preferences ? JSON.parse(preferences) : void 0;
					if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
						for (const [id, kind] of Object.entries(parsed)) if (kind === "page" || kind === "panel" || kind === "capsule") this.presentations.set(id, kind);
					}
				} catch {
					this.error = "无法恢复此标签页的导航状态";
				}
				this.publish();
				this.unsubscribe = this.repository.subscribe(() => {
					this.refresh().catch((error) => this.fail(error));
				});
				this.readiness = this.refresh().finally(() => {
					this.loading = false;
					this.publish();
				});
				this.ready.catch((error) => this.fail(error));
			}
			getSnapshot() {
				return this.snapshot;
			}
			subscribe(listener) {
				this.listeners.add(listener);
				return () => {
					this.listeners.delete(listener);
				};
			}
			getApp(id) {
				const app = this.apps.get(id)?.definition;
				return app ? ownApp(app) : void 0;
			}
			getTemplate(id) {
				const template = this.templates.get(id);
				return template ? ownTemplate(template) : void 0;
			}
			track(owner, task) {
				const tasks = this.tasks.get(owner) ?? /* @__PURE__ */ new Set();
				this.tasks.set(owner, tasks);
				tasks.add(task);
				const remove = () => {
					tasks.delete(task);
					if (!tasks.size) this.tasks.delete(owner);
				};
				task.then(remove, remove);
				return task;
			}
			drain(tasks, label) {
				if (!tasks.length) return Promise.resolve();
				let timer;
				const result = Promise.race([Promise.allSettled(tasks).then(() => {}), new Promise((_, reject) => {
					timer = setTimeout(() => reject(/* @__PURE__ */ new Error(label + ": asynchronous teardown timed out")), this.teardownTimeoutMs);
				})]).finally(() => clearTimeout(timer));
				result.catch((error) => console.error("[dsh-better-workbench]", error));
				return result;
			}
			assertActive() {
				if (!this.active) throw new Error("Workbench has been disposed");
			}
			assertGeneration(id, generation) {
				this.assertActive();
				const app = this.apps.get(id);
				if (app?.generation !== generation) throw new Error("Application activation changed; retry using the current application");
				return app.definition;
			}
			require(id, state = this.state) {
				const instance = state.instances.find((item) => item.instanceId === id);
				if (!instance) throw new Error("Unknown workbench instance: " + id);
				return instance;
			}
			fail(error) {
				if (this.active) {
					this.error = message(error);
					this.publish();
				}
			}
			refresh() {
				const task = this.refreshTail.then(() => this.readAndPublish());
				this.refreshTail = task.catch(() => {});
				return task;
			}
			async readAndPublish() {
				if (!this.active) return;
				const state = await this.repository.read();
				if (!this.active) return;
				this.applyState(state);
			}
			applyState(state) {
				this.state = state;
				if (!this.active) return;
				for (const instance of state.instances) {
					const entry = this.apps.get(instance.appId);
					const status = this.statuses.get(instance.instanceId);
					if (!entry || instance.configVersion !== entry.definition.config.version || status?.revision === instance.revision && status.generation === entry.generation) continue;
					try {
						entry.definition.config.validate(cloneConfig(instance.config));
						this.statuses.set(instance.instanceId, {
							status: "ready",
							revision: instance.revision,
							generation: entry.generation
						});
					} catch (error) {
						this.statuses.set(instance.instanceId, {
							status: "migration-error",
							error: message(error),
							revision: instance.revision,
							generation: entry.generation
						});
					}
				}
				if (this.route.kind === "workbench-instance" && !state.instances.some((i) => i.instanceId === this.route.instanceId)) this.route = { kind: "workbench-home" };
				for (const id of this.dirty) if (!state.instances.some((i) => i.instanceId === id)) this.dirty.delete(id);
				this.publish();
				if (this.route.kind === "workbench-instance") this.prepareInstance(this.route.instanceId).catch((error) => this.fail(error));
			}
			async retry() {
				this.assertActive();
				this.error = null;
				this.loading = true;
				for (const [id, status] of this.statuses) if (status.status === "migration-error") this.statuses.delete(id);
				this.publish();
				this.readiness = (async () => {
					try {
						await this.refresh();
						for (const id of this.apps.keys()) await this.ensureDefault(id);
						if (this.route.kind === "workbench-instance") await this.prepareInstance(this.route.instanceId);
					} catch (error) {
						this.fail(error);
						throw error;
					} finally {
						this.loading = false;
						this.publish();
					}
				})();
				return this.readiness;
			}
			mutate(operation) {
				const task = this.refreshTail.then(async () => {
					this.assertActive();
					const committed = await this.repository.transact((state) => {
						this.assertActive();
						return {
							result: operation(state),
							state: structuredClone(state)
						};
					});
					this.error = null;
					this.applyState(committed.state);
					return committed.result;
				});
				this.refreshTail = task.then(() => {}, () => {});
				return task.catch((error) => {
					this.fail(error);
					throw error;
				});
			}
			registerApp(definition) {
				this.assertActive();
				validateApp(definition);
				if (this.apps.has(definition.appId)) throw new Error("Application already registered: " + definition.appId);
				const id = definition.appId;
				const entry = {
					definition: ownApp(definition),
					generation: ++this.generation,
					abort: new AbortController()
				};
				this.apps.set(id, entry);
				this.publish();
				this.ready.then(() => this.ensureDefault(id, entry.generation)).then(() => {
					if (this.route.kind === "workbench-instance") return this.prepareInstance(this.route.instanceId);
				}).catch((error) => {
					if (this.apps.get(id) === entry) this.fail(error);
				});
				let unloading;
				return () => {
					if (this.apps.get(id) !== entry) return unloading ?? Promise.resolve();
					this.apps.delete(id);
					entry.abort.abort();
					for (const instance of this.state.instances.filter((i) => i.appId === id)) {
						this.statuses.delete(instance.instanceId);
						this.pending.delete(instance.instanceId);
						this.dirty.delete(instance.instanceId);
					}
					this.publish();
					return unloading = this.drain([...this.tasks.get(entry) ?? []], "Application " + id);
				};
			}
			async ensureDefault(appId, expectedGeneration) {
				const entry = this.apps.get(appId);
				if (!entry || expectedGeneration !== void 0 && entry.generation !== expectedGeneration) return;
				const app = entry.definition;
				if (!app.defaultInstance) return;
				await this.mutate((state) => {
					this.assertGeneration(appId, entry.generation);
					if (state.dismissedDefaultAppIds.includes(appId) || state.instances.some((i) => i.appId === appId)) return;
					const id = app.defaultInstance.instanceId ?? crypto.randomUUID();
					if (state.instances.some((i) => i.instanceId === id)) throw new Error("Default instance identifier collision");
					state.instances.push(this.newInstance(app, id, app.defaultInstance.title, app.defaultInstance.config, state.instances.length));
				});
			}
			newInstance(app, id, title, config, order) {
				const owned = cloneConfig(config ?? app.config.defaults());
				app.config.validate(cloneConfig(owned));
				app.config.validateCreation?.(cloneConfig(owned));
				const now = Date.now();
				return {
					instanceId: id,
					appId: app.appId,
					title: title?.trim() || app.title,
					config: owned,
					configVersion: app.config.version,
					revision: 1,
					order,
					createdAt: now,
					updatedAt: now,
					lastOpenedAt: 0
				};
			}
			registerTemplate(definition) {
				this.assertActive();
				validId(definition.templateId);
				if (!definition.title?.trim() || this.templates.has(definition.templateId)) throw new Error("Invalid or duplicate template");
				if (definition.kind === "instance") {
					validId(definition.appId);
					if (definition.defaultConfig) cloneConfig(definition.defaultConfig);
				} else if (definition.kind === "agent") validId(definition.creatorId);
				else throw new Error("Unknown template kind");
				const id = definition.templateId;
				const owned = ownTemplate(definition);
				this.templates.set(id, owned);
				this.publish();
				return () => {
					if (this.templates.get(id) === owned) {
						this.templates.delete(id);
						if (this.creation.templateId === id) this.cancelCreation();
						this.publish();
					}
				};
			}
			registerCreator(definition) {
				this.assertActive();
				validId(definition.creatorId);
				if (typeof definition.start !== "function" || this.creators.has(definition.creatorId)) throw new Error("Invalid or duplicate creator");
				const id = definition.creatorId;
				const owned = Object.freeze({ ...definition });
				this.creators.set(id, owned);
				this.publish();
				let unloading;
				return () => {
					if (this.creators.get(id) === owned) {
						this.creators.delete(id);
						const template = this.creation.templateId ? this.templates.get(this.creation.templateId) : void 0;
						if (template?.kind === "agent" && template.creatorId === id) this.cancelCreation();
						this.publish();
						unloading = this.drain([...this.tasks.get(owned) ?? []], "Creator " + id);
					}
					return unloading ?? Promise.resolve();
				};
			}
			async createInstance(appId, title, config) {
				return this.createCheckedInstance(appId, title, config);
			}
			async createCheckedInstance(appId, title, config, check) {
				await this.ready;
				this.assertActive();
				check?.();
				const entry = this.apps.get(appId);
				if (!entry) throw new Error("Application unavailable: " + appId);
				const id = await this.mutate((state) => {
					check?.();
					const app = this.assertGeneration(appId, entry.generation);
					const existing = state.instances.find((i) => i.appId === appId);
					if (!app.allowMultiple && existing) return existing.instanceId;
					const instance = this.newInstance(app, crypto.randomUUID(), title, config, state.instances.length);
					state.instances.push(instance);
					return instance.instanceId;
				});
				await this.prepareInstance(id);
				return this.publicInstance(this.require(id));
			}
			async startCreation(templateId, options) {
				this.assertActive();
				if (this.creation.status === "creating") throw new Error("A creation is already in progress");
				const template = this.templates.get(templateId);
				if (!template) throw new Error("Template unavailable");
				if (template.kind === "agent" && options !== void 0) throw new Error("Agent templates do not accept instance configuration");
				const draft = options ? {
					title: options.title,
					config: options.config === void 0 ? void 0 : cloneConfig(options.config)
				} : void 0;
				const abort = new AbortController();
				this.creationAbort = abort;
				this.creation = {
					status: "creating",
					templateId
				};
				this.publish();
				try {
					let result;
					if (template.kind === "instance") result = { instanceId: (await this.createCheckedInstance(template.appId, draft?.title ?? template.defaultTitle, draft?.config ?? template.defaultConfig, () => {
						if (abort.signal.aborted || this.creationAbort !== abort || this.templates.get(templateId) !== template) throw new Error("Creation cancelled");
					})).instanceId };
					else {
						const creator = this.creators.get(template.creatorId);
						if (!creator) throw new Error("Creator unavailable");
						result = await this.track(creator, creator.start({ ...template }, {
							signal: abort.signal,
							requestId: crypto.randomUUID()
						}));
						if (this.creators.get(template.creatorId) !== creator) throw new Error("Creator activation changed");
					}
					this.assertActive();
					if (abort.signal.aborted || this.creationAbort !== abort) throw new Error("Creation cancelled");
					if (!result || ("instanceId" in result ? typeof result.instanceId !== "string" || !result.instanceId : !("sessionId" in result) || typeof result.sessionId !== "string" || !result.sessionId)) throw new Error("Creator returned an invalid result");
					await this.refresh();
					this.assertActive();
					if (abort.signal.aborted || this.creationAbort !== abort) throw new Error("Creation cancelled");
					if ("instanceId" in result) this.require(result.instanceId);
					this.creation = {
						status: "complete",
						templateId,
						result
					};
					this.publish();
					return result;
				} catch (error) {
					if (this.creationAbort === abort) {
						this.creation = {
							status: abort.signal.aborted ? "cancelled" : "failed",
							templateId,
							error: message(error)
						};
						this.publish();
					}
					throw error;
				}
			}
			cancelCreation() {
				this.creationAbort?.abort();
				this.creationAbort = void 0;
				if (this.creation.status === "creating") {
					this.creation = {
						status: "cancelled",
						templateId: this.creation.templateId
					};
					this.publish();
				}
			}
			async prepareInstance(id) {
				const instance = this.state.instances.find((i) => i.instanceId === id);
				const entry = instance ? this.apps.get(instance.appId) : void 0;
				if (!instance || !entry) return;
				const status = this.statuses.get(id);
				if (status?.revision === instance.revision && status.generation === entry.generation && status.status !== "preparing") return;
				const pending = this.pending.get(id);
				if (pending) return pending;
				const generation = entry.generation, revision = instance.revision;
				const work = async () => {
					this.statuses.set(id, {
						status: "preparing",
						revision,
						generation
					});
					this.publish();
					try {
						const app = this.assertGeneration(instance.appId, generation);
						if (instance.configVersion > app.config.version) throw new Error("Configuration belongs to a newer application version");
						let config = cloneConfig(instance.config);
						if (instance.configVersion < app.config.version) {
							if (!app.config.migrate) throw new Error("Application does not provide a configuration migration");
							config = cloneConfig(await this.track(entry, Promise.resolve().then(() => {
								entry.abort.signal.throwIfAborted();
								return app.config.migrate(config, instance.configVersion, { signal: entry.abort.signal });
							})));
						}
						this.assertGeneration(instance.appId, generation);
						app.config.validate(cloneConfig(config));
						if (instance.configVersion !== app.config.version) await this.mutate((state) => {
							this.assertGeneration(instance.appId, generation);
							const current = this.require(id, state);
							if (current.revision !== revision) throw new Error("Configuration changed during migration; retry");
							state.backups.push({
								instanceId: id,
								config: cloneConfig(current.config),
								configVersion: current.configVersion,
								revision,
								createdAt: Date.now()
							});
							current.config = config;
							current.configVersion = app.config.version;
							current.revision++;
							current.updatedAt = Date.now();
						});
						this.assertGeneration(instance.appId, generation);
						const validatedRevision = revision + (instance.configVersion !== app.config.version ? 1 : 0);
						if (this.require(id).revision === validatedRevision) this.statuses.set(id, {
							status: "ready",
							revision: validatedRevision,
							generation
						});
					} catch (error) {
						if (this.apps.get(instance.appId)?.generation === generation) this.statuses.set(id, {
							status: instance.configVersion > entry.definition.config.version ? "incompatible" : "migration-error",
							error: message(error),
							revision,
							generation
						});
					} finally {
						this.publish();
					}
				};
				const task = Promise.resolve().then(work);
				this.pending.set(id, task);
				try {
					await task;
				} finally {
					if (this.pending.get(id) === task) {
						this.pending.delete(id);
						const current = this.state.instances.find((item) => item.instanceId === id);
						if (this.active && current && this.apps.get(current.appId)?.generation === generation && this.statuses.get(id)?.revision !== current.revision) await this.prepareInstance(id);
					}
				}
			}
			async renameInstance(id, title) {
				if (!title.trim()) throw new Error("Title cannot be empty");
				const revision = this.require(id).revision;
				await this.mutate((state) => {
					const i = this.require(id, state);
					if (i.revision !== revision) throw new Error("Instance changed in another tab");
					i.title = title.trim();
					i.revision++;
					i.updatedAt = Date.now();
				});
			}
			async deleteInstance(id) {
				const revision = this.require(id).revision;
				await this.mutate((state) => {
					const i = this.require(id, state);
					if (i.revision !== revision) throw new Error("Instance changed in another tab");
					state.instances = state.instances.filter((item) => item.instanceId !== id);
					if (!state.instances.some((item) => item.appId === i.appId) && !state.dismissedDefaultAppIds.includes(i.appId)) state.dismissedDefaultAppIds.push(i.appId);
					state.instances.forEach((item, index) => {
						item.order = index;
					});
				});
			}
			async updateInstanceConfig(id, patch, expectedRevision = this.require(id).revision, generation = this.apps.get(this.require(id).appId)?.generation) {
				const instance = this.require(id);
				if (generation === void 0) throw new Error("Application unavailable");
				const app = this.assertGeneration(instance.appId, generation);
				if (instance.configVersion !== app.config.version) throw new Error("Configuration must be migrated before editing");
				const owned = cloneConfig(patch);
				return this.mutate((state) => {
					this.assertGeneration(instance.appId, generation);
					const i = this.require(id, state);
					if (i.revision !== expectedRevision) throw new Error("Configuration conflict: another editor saved changes. Reload before retrying.");
					const config = {
						...i.config,
						...owned
					};
					app.config.validate(cloneConfig(config));
					i.config = config;
					i.revision++;
					i.updatedAt = Date.now();
					return i.revision;
				});
			}
			async exportInstance(id) {
				this.assertActive();
				const state = await this.repository.read();
				this.assertActive();
				const instance = this.require(id, state);
				return {
					instance: {
						...instance,
						config: cloneConfig(instance.config)
					},
					backups: state.backups.filter((backup) => backup.instanceId === id).map((backup) => ({
						...backup,
						config: cloneConfig(backup.config)
					}))
				};
			}
			async restoreBackup(id, backupRevision, expectedRevision) {
				this.assertActive();
				const instance = this.require(id);
				const entry = this.apps.get(instance.appId);
				if (!entry) throw new Error("Application unavailable");
				await this.mutate((state) => {
					const app = this.assertGeneration(instance.appId, entry.generation);
					const current = this.require(id, state);
					if (current.revision !== expectedRevision) throw new Error("Configuration conflict: instance changed before restore");
					const backup = state.backups.find((item) => item.instanceId === id && item.revision === backupRevision);
					if (!backup) throw new Error("Configuration backup not found");
					if (backup.configVersion !== app.config.version) throw new Error("Backup requires a matching application configuration version; install that version before restoring");
					const config = cloneConfig(backup.config);
					app.config.validate(cloneConfig(config));
					state.backups.push({
						instanceId: id,
						config: cloneConfig(current.config),
						configVersion: current.configVersion,
						revision: current.revision,
						createdAt: Date.now()
					});
					current.config = config;
					current.configVersion = backup.configVersion;
					current.revision++;
					current.updatedAt = Date.now();
				});
				this.dirty.delete(id);
				this.publish();
			}
			async reorderInstances(ids) {
				await this.mutate((state) => {
					const map = new Map(state.instances.map((i) => [i.instanceId, i]));
					const next = [];
					for (const id of ids) {
						const i = map.get(id);
						if (i) {
							next.push(i);
							map.delete(id);
						}
					}
					next.push(...map.values());
					next.forEach((i, index) => {
						i.order = index;
					});
					state.instances = next;
				});
			}
			setDirty(id, dirty) {
				if (dirty) this.dirty.add(id);
				else this.dirty.delete(id);
				this.publish();
			}
			navigate(route) {
				if (this.route.kind === "workbench-instance" && (route.kind !== "workbench-instance" || route.instanceId !== this.route.instanceId || route.presentation !== this.route.presentation) && this.dirty.has(this.route.instanceId)) {
					if (!this.confirmDiscard()) return false;
					this.dirty.delete(this.route.instanceId);
				}
				this.route = route;
				try {
					this.navigationStorage?.setItem(ROUTE_KEY, JSON.stringify(route));
				} catch {
					this.error = "无法保存此标签页的导航状态";
				}
				this.publish();
				return true;
			}
			open(id, presentation) {
				this.assertActive();
				const i = this.require(id);
				const app = this.getApp(i.appId);
				const saved = this.presentations.get(id);
				const remembered = saved && (!app || app.presentations.some((item) => item.kind === saved)) ? saved : void 0;
				const kind = presentation ?? remembered ?? app?.defaultPresentation ?? "page";
				if (app && !app.presentations.some((p) => p.kind === kind)) throw new Error("Unsupported presentation");
				if (!this.navigate({
					kind: "workbench-instance",
					instanceId: id,
					presentation: kind
				})) return;
				this.presentations.set(id, kind);
				try {
					this.navigationStorage?.setItem(PRESENTATIONS_KEY, JSON.stringify(Object.fromEntries(this.presentations)));
				} catch {
					this.error = "无法保存此标签页的显示偏好";
					this.publish();
				}
				this.prepareInstance(id).catch((error) => this.fail(error));
				this.mutate((state) => {
					this.require(id, state).lastOpenedAt = Date.now();
				}).catch((error) => this.fail(error));
			}
			openHome(creating = false) {
				this.navigate({
					kind: "workbench-home",
					creating
				});
			}
			openConversation() {
				this.navigate({ kind: "conversation" });
			}
			close() {
				this.openConversation();
			}
			publicInstance(i) {
				const app = this.apps.get(i.appId), state = this.statuses.get(i.instanceId);
				const status = !app ? { status: "unavailable" } : state?.generation === app.generation && state.revision === i.revision ? state : { status: "preparing" };
				return {
					...i,
					config: cloneConfig(i.config),
					available: !!app,
					status: status.status,
					error: "error" in status ? status.error : void 0
				};
			}
			publish() {
				if (!this.active) return;
				this.snapshot = {
					apps: [...this.apps.values()].map(({ definition: a, generation }) => ({
						appId: a.appId,
						title: a.title,
						description: a.description,
						icon: a.icon,
						source: a.source ? { ...a.source } : void 0,
						allowMultiple: a.allowMultiple === true,
						presentations: a.presentations.map((p) => ({ ...p })),
						defaultPresentation: a.defaultPresentation,
						generation
					})),
					instances: [...this.state.instances].sort((a, b) => a.order - b.order).map((i) => this.publicInstance(i)),
					templates: [...this.templates.values()].map((t) => ({
						...ownTemplate(t),
						available: t.kind === "instance" ? this.apps.has(t.appId) : this.creators.has(t.creatorId)
					})),
					route: { ...this.route },
					currentInstanceId: this.route.kind === "workbench-instance" ? this.route.instanceId : null,
					loading: this.loading,
					error: this.error,
					dirtyInstanceIds: [...this.dirty],
					recovery: this.state.recovery ? structuredClone(this.state.recovery) : void 0,
					creation: { ...this.creation }
				};
				for (const listener of [...this.listeners]) try {
					listener();
				} catch (error) {
					console.error("[dsh-better-workbench] subscriber failed", error);
				}
			}
			dispose() {
				if (this.disposal) return this.disposal;
				this.cancelCreation();
				this.active = false;
				this.unsubscribe();
				for (const entry of this.apps.values()) entry.abort.abort();
				if (this.ownsRepository) this.repository.dispose();
				const tasks = [...this.tasks.values()].flatMap((tasks) => [...tasks]);
				tasks.push(this.refreshTail);
				this.listeners.clear();
				this.apps.clear();
				this.templates.clear();
				this.creators.clear();
				return this.disposal = this.drain(tasks, "Workbench");
			}
		};
		// src/client/WorkbenchIcon.tsx
		var IconBoundary = class extends react.Component {
			state = { failed: false };
			static getDerivedStateFromError() {
				return { failed: true };
			}
			componentDidUpdate(previousProps) {
				if (this.state.failed && previousProps.renderer !== this.props.renderer) this.setState({ failed: false });
			}
			componentDidCatch(error) {
				console.error("Workbench app icon failed:", error);
			}
			render() {
				return this.state.failed ? null : this.props.children;
			}
		};
		/** Fixed, decorative application icon slot. A bad contribution only blanks this icon. */
		function WorkbenchAppIcon({ renderer: Renderer, className, instance }) {
			if (!Renderer) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className,
				"aria-hidden": "true"
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className,
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconBoundary, {
					renderer: Renderer,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Renderer, {
						size: 16,
						className: "dsh-better-workbench-rendered-icon",
						instance
					})
				})
			});
		}
		// src/client/website.ts
		const WEBSITE_APP_ID = "workbench.website";
		const WEBSITE_TEMPLATE_ID = "workbench.website:from-url";
		function normalizeWebsiteUrl(value) {
			const input = value.trim();
			if (!input || input.startsWith("//") || /[\s\u0000-\u001f\u007f]/u.test(input)) throw new Error("请输入有效的网页地址");
			const hasScheme = /^[a-z][a-z\d+.-]*:/i.test(input) && !/^[^/:]+:\d+(?:[/?#]|$)/.test(input);
			let url;
			try {
				url = new URL(hasScheme ? input : "https://" + input);
			} catch {
				throw new Error("请输入有效的网页地址");
			}
			if (!["http:", "https:"].includes(url.protocol)) throw new Error("仅支持 HTTP 或 HTTPS 网页地址");
			if (url.username || url.password) throw new Error("网页地址不能包含用户名或密码");
			const host = url.hostname.toLowerCase().replace(/\.$/, "");
			if (host === "localhost" || host.endsWith(".localhost") || host === "[::1]" || host === "[::]" || host.startsWith("[::ffff:") || host === "0.0.0.0" || /^127\.\d+\.\d+\.\d+$/.test(host)) throw new Error("网页工作台暂不支持本机地址");
			if (!url.hostname || !url.hostname.includes(".") && !url.hostname.includes(":") && url.hostname !== "localhost") throw new Error("请输入完整域名");
			return url.href;
		}
		function websiteName(url) {
			return new URL(normalizeWebsiteUrl(url)).hostname.replace(/^www\./, "");
		}
		function validateWebsiteConfig(config) {
			if (typeof config.url !== "string") throw new Error("网页地址必须是文本");
			if (config.url !== "" && normalizeWebsiteUrl(config.url) !== config.url) throw new Error("请输入规范的完整网页地址");
			if (config.openMode !== "embedded" && config.openMode !== "external") throw new Error("无效的网页打开方式");
			if (config.trustedOrigin !== void 0 && (typeof config.trustedOrigin !== "string" || config.trustedOrigin !== "" && config.trustedOrigin !== new URL(normalizeWebsiteUrl(config.url)).origin)) throw new Error("可信站点必须与当前网址来源一致");
			if (config.faviconUrl !== void 0 && (typeof config.faviconUrl !== "string" || normalizeWebsiteUrl(config.faviconUrl) !== config.faviconUrl)) throw new Error("无效的网页图标地址");
		}
		function validateWebsiteCreation(config) {
			validateWebsiteConfig(config);
			normalizeWebsiteUrl(config.url);
		}
		// src/client/open-workbench.ts
		function openWorkbench(service, id, presentation) {
			const instance = service.getSnapshot().instances.find((item) => item.instanceId === id);
			if (instance?.available && instance.appId === "workbench.website" && instance.config.openMode === "external" && typeof window !== "undefined") {
				let url;
				try {
					url = normalizeWebsiteUrl(String(instance.config.url));
				} catch {}
				if (url) window.open(url, "_blank", "noopener,noreferrer");
			}
			service.open(id, presentation);
		}
		// src/client/WebsiteSettings.tsx
		function WebsiteSettings({ open, instance, updateConfig, onClose }) {
			let origin = "";
			try {
				origin = new URL(String(instance.config.url)).origin;
			} catch {}
			const sameOrigin = !origin || typeof window === "undefined" || origin === window.location.origin;
			const [base, setBase] = (0, react.useState)({
				origin,
				revision: instance.revision
			});
			const [trusted, setTrusted] = (0, react.useState)(instance.config.trustedOrigin === origin && !!origin);
			const [external, setExternal] = (0, react.useState)(instance.config.openMode === "external");
			const [saving, setSaving] = (0, react.useState)(false);
			const [error, setError] = (0, react.useState)(null);
			const inFlight = (0, react.useRef)(false);
			const owner = (0, react.useRef)({ active: true });
			(0, react.useEffect)(() => {
				const current = { active: true };
				owner.current = current;
				return () => {
					current.active = false;
				};
			}, []);
			(0, react.useEffect)(() => {
				if (open) {
					setBase({
						origin,
						revision: instance.revision
					});
					setTrusted(instance.config.trustedOrigin === origin && !!origin);
					setExternal(instance.config.openMode === "external");
					setError(null);
				}
			}, [open]);
			const save = async () => {
				if (inFlight.current || !origin) return;
				if (origin !== base.origin || instance.revision !== base.revision) {
					setError("网页配置已更新，请关闭后重新打开设置。");
					return;
				}
				const current = owner.current;
				inFlight.current = true;
				setSaving(true);
				setError(null);
				try {
					await updateConfig({
						trustedOrigin: trusted ? base.origin : "",
						openMode: external ? "external" : "embedded"
					}, base.revision);
					if (current.active) onClose();
				} catch (reason) {
					if (current.active) setError(reason instanceof Error ? reason.message : String(reason));
				} finally {
					inFlight.current = false;
					if (current.active) setSaving(false);
				}
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
				open,
				title: "网页设置",
				closeLabel: "关闭",
				onClose: () => {
					if (!saving) onClose();
				},
				className: "dsh-better-workbench-create-dialog",
				footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
					variant: "outline",
					disabled: saving,
					onClick: onClose,
					children: "取消"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
					variant: "primary",
					disabled: saving || !origin,
					onClick: () => {
						save();
					},
					children: saving ? "正在保存..." : "保存"
				})] }),
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "dsh-better-workbench-website-permission",
						children: base.origin
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
						className: "dsh-better-workbench-website-setting",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: external,
							disabled: saving,
							onChange: (event) => setExternal(event.target.checked)
						}), "在浏览器新标签页打开"]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
						className: "dsh-better-workbench-website-setting",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: trusted,
							disabled: saving || sameOrigin || external,
							onChange: (event) => setTrusted(event.target.checked)
						}), "信任此站点并启用兼容模式"]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "dsh-better-workbench-website-permission",
						children: "兼容模式允许此站点访问自身 Cookie 和存储，降低 iframe 隔离。仅用于可信站点；恶意页面或重定向可能危及 DSH 数据。"
					}),
					error && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						role: "alert",
						className: "dsh-better-workbench-create-error",
						children: error
					})
				]
			});
		}
		// src/client/WorkbenchSidebar.tsx
		function useWorkbenchSnapshot(service) {
			return (0, react.useSyncExternalStore)((listener) => service.subscribe(listener), () => service.getSnapshot(), () => service.getSnapshot());
		}
		function normalize(value) {
			return value.trim().toLocaleLowerCase();
		}
		function requestSidebarExpand() {
			const button = [...document.querySelectorAll("button")].find((item) => item.getAttribute("aria-label") === "展开侧边栏");
			if (button instanceof HTMLButtonElement) button.click();
		}
		const COLLAPSED_KEY = "dsh-better-workbench:sidebar-collapsed";
		function readCollapsed() {
			try {
				return typeof localStorage !== "undefined" && localStorage.getItem(COLLAPSED_KEY) === "1";
			} catch {
				return false;
			}
		}
		function writeCollapsed(value) {
			try {
				if (typeof localStorage !== "undefined") localStorage.setItem(COLLAPSED_KEY, value ? "1" : "0");
			} catch {}
		}
		function WorkbenchHomeIcon({ className }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
				width: "16",
				height: "16",
				className,
				viewBox: "0 0 16 16",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				"aria-hidden": "true",
				focusable: "false",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M1.5 7.25 8 1.75l6.5 5.5" }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M2.75 6.5v8h10.5v-8" }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M6 14.5V9.25h4v5.25" })
				]
			});
		}
		function WorkbenchHomeRow({ active, onOpen }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "dsh-better-workbench-sidebar-row dsh-better-workbench-sidebar-home",
				"data-active": active,
				onClick: onOpen,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(WorkbenchHomeIcon, { className: "dsh-better-workbench-sidebar-home-icon" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: "dsh-better-workbench-sidebar-row-label",
					children: "首页"
				})]
			});
		}
		function ViewOptionsMenu({ orderBy, onOrderPick }) {
			const [open, setOpen] = (0, react.useState)(false);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Menu, {
				open,
				onClose: () => {
					setOpen(false);
				},
				items: [
					{
						type: "label",
						id: "order-by",
						text: "排序方式"
					},
					{
						id: "manual",
						label: "手动排序"
					},
					{
						id: "updated",
						label: "最近使用"
					}
				],
				selectedId: orderBy,
				onSelect: (id) => {
					if (id === "manual" || id === "updated") onOrderPick(id);
					setOpen(false);
				},
				align: "end",
				dense: true,
				portal: true,
				anchor: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
					label: "视图选项",
					side: "bottom",
					delayMs: 500,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: "dsh-better-workbench-sidebar-icon-button dsh-better-workbench-sidebar-wide-only",
						"aria-label": "视图选项",
						onClick: () => {
							setOpen((value) => !value);
						},
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPersonalizationOutlineRegular, {})
					})
				})
			});
		}
		function WorkbenchRow({ instance, appIcon, compact, active, draggable, dropPosition, busy, canMoveUp, canMoveDown, onMove, onOpen, onRename, onSettings, onDelete, onDragStart, onDragOver, onDrop, onDragEnd }) {
			const [menuOpen, setMenuOpen] = (0, react.useState)(false);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-better-workbench-sidebar-row",
				"data-active": active,
				"data-menu-open": menuOpen,
				"data-drop-position": dropPosition ?? void 0,
				role: "button",
				tabIndex: compact ? -1 : 0,
				draggable,
				onClick: onOpen,
				onKeyDown: (event) => {
					if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) {
						event.preventDefault();
						onOpen();
					}
				},
				onDragStart,
				onDragOver,
				onDrop,
				onDragEnd,
				children: [
					compact ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPersonalizationOutlineRegular, { className: "dsh-better-workbench-sidebar-rail-icon" }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(WorkbenchAppIcon, {
						renderer: appIcon,
						instance,
						className: "dsh-better-workbench-sidebar-app-icon"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "dsh-better-workbench-sidebar-row-label",
						children: instance.title
					}),
					!compact && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "dsh-better-workbench-sidebar-row-actions",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Menu, {
							open: menuOpen,
							onClose: () => {
								setMenuOpen(false);
							},
							items: [
								...onSettings ? [{
									id: "website-settings",
									label: "网页设置",
									icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSettingsOutlineRegular, {}),
									disabled: busy
								}] : [],
								{
									id: "rename",
									label: "重命名",
									icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconEditOutlineRegular, {}),
									disabled: busy
								},
								{
									id: "move-up",
									label: "上移",
									disabled: !canMoveUp
								},
								{
									id: "move-down",
									label: "下移",
									disabled: !canMoveDown
								},
								{
									id: "delete",
									label: "删除",
									icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconTrashOutlineRegular, {}),
									danger: true,
									disabled: busy
								}
							],
							onSelect: (id) => {
								setMenuOpen(false);
								if (id === "website-settings") onSettings?.();
								if (id === "rename") onRename();
								if (id === "delete") onDelete();
								if (id === "move-up" && canMoveUp) onMove(-1);
								if (id === "move-down" && canMoveDown) onMove(1);
							},
							dense: true,
							portal: true,
							closeOnPointerLeave: true,
							anchor: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: "dsh-better-workbench-sidebar-row-action",
								"aria-label": `工作台“${instance.title}”的操作`,
								title: "更多操作",
								disabled: busy,
								onClick: (event) => {
									event.stopPropagation();
									setMenuOpen((value) => !value);
								},
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconEllipsisOutlineRegular, {})
							})
						})
					})
				]
			});
		}
		/** Launcher inserted above DSH's workspace/session browser. */
		function WorkbenchSidebar({ service }) {
			const snapshot = useWorkbenchSnapshot(service);
			const section = (0, react.useRef)(null);
			const searchRoot = (0, react.useRef)(null);
			const searchInput = (0, react.useRef)(null);
			const composingRef = (0, react.useRef)(false);
			const [compact, setCompact] = (0, react.useState)(false);
			const [searchExpanded, setSearchExpanded] = (0, react.useState)(false);
			const [collapsed, setCollapsedState] = (0, react.useState)(readCollapsed);
			const [query, setQuery] = (0, react.useState)("");
			const [orderBy, setOrderBy] = (0, react.useState)("manual");
			const [draggedId, setDraggedId] = (0, react.useState)(null);
			const [dropTarget, setDropTarget] = (0, react.useState)(null);
			const [renameTarget, setRenameTarget] = (0, react.useState)(null);
			const [websiteTarget, setWebsiteTarget] = (0, react.useState)(null);
			const websiteInstance = snapshot.instances.find((instance) => instance.instanceId === websiteTarget?.id && instance.appId === "workbench.website");
			const [renameDraft, setRenameDraft] = (0, react.useState)("");
			const [renaming, setRenaming] = (0, react.useState)(false);
			const [renameError, setRenameError] = (0, react.useState)(null);
			const [deleteTarget, setDeleteTarget] = (0, react.useState)(null);
			const [deleting, setDeleting] = (0, react.useState)(false);
			const [deleteError, setDeleteError] = (0, react.useState)(null);
			const [reordering, setReordering] = (0, react.useState)(false);
			const [reorderError, setReorderError] = (0, react.useState)(null);
			const mutation = (0, react.useRef)(false);
			const lifecycle = (0, react.useRef)({ active: true });
			(0, react.useEffect)(() => {
				const current = { active: true };
				lifecycle.current = current;
				mutation.current = false;
				setRenaming(false);
				setDeleting(false);
				setReordering(false);
				return () => {
					current.active = false;
				};
			}, [service]);
			const busy = snapshot.loading || snapshot.creation.status === "creating" || renaming || deleting || reordering;
			const renameTrimmed = renameDraft.trim();
			const renameBlocked = busy || renameTrimmed === "" || renameTarget === null;
			const normalizedQuery = normalize(query);
			const listHidden = collapsed && !searchExpanded && normalizedQuery === "";
			const setCollapsed = (value) => {
				setCollapsedState(value);
				writeCollapsed(value);
			};
			const canReorder = orderBy === "manual" && normalizedQuery === "" && !busy;
			(0, react.useEffect)(() => {
				const element = section.current;
				if (element === null) return;
				const update = () => {
					setCompact(element.clientWidth <= 170);
				};
				update();
				const observer = new ResizeObserver(update);
				observer.observe(element);
				return () => {
					observer.disconnect();
				};
			}, []);
			(0, react.useEffect)(() => {
				if (!compact && searchExpanded) searchInput.current?.focus({ preventScroll: true });
			}, [compact, searchExpanded]);
			(0, react.useEffect)(() => {
				if (compact || !searchExpanded) return;
				const onClick = (event) => {
					if (!(event.target instanceof Node) || searchRoot.current?.contains(event.target) === true) return;
					searchInput.current?.blur();
					if (normalizedQuery === "") setSearchExpanded(false);
				};
				document.addEventListener("click", onClick);
				return () => {
					document.removeEventListener("click", onClick);
				};
			}, [
				compact,
				normalizedQuery,
				searchExpanded
			]);
			const instances = (0, react.useMemo)(() => {
				return [...snapshot.instances.filter((instance) => normalizedQuery === "" || normalize(instance.title).includes(normalizedQuery))].sort((a, b) => orderBy === "updated" ? b.updatedAt - a.updatedAt : a.order - b.order);
			}, [
				normalizedQuery,
				orderBy,
				snapshot.instances
			]);
			const persistOrder = async (ids) => {
				if (!canReorder || mutation.current) return;
				const current = lifecycle.current;
				mutation.current = true;
				setReordering(true);
				setReorderError(null);
				try {
					await service.reorderInstances(ids);
				} catch (reason) {
					if (current.active) setReorderError(reason instanceof Error ? reason.message : String(reason));
				} finally {
					if (current.active) {
						mutation.current = false;
						setReordering(false);
					}
				}
			};
			const moveInstance = (instanceId, direction) => {
				if (!canReorder) return;
				const ids = instances.map((instance) => instance.instanceId);
				const index = ids.indexOf(instanceId);
				const nextIndex = index + direction;
				if (index < 0 || nextIndex < 0 || nextIndex >= ids.length) return;
				ids.splice(index, 1);
				ids.splice(nextIndex, 0, instanceId);
				persistOrder(ids);
			};
			const handleDrop = (targetId, event) => {
				event.preventDefault();
				if (!canReorder) {
					setDraggedId(null);
					setDropTarget(null);
					return;
				}
				const sourceId = draggedId ?? event.dataTransfer.getData("text/plain");
				if (sourceId === "" || sourceId === targetId) {
					setDropTarget(null);
					return;
				}
				const target = instances.findIndex((instance) => instance.instanceId === targetId);
				const source = instances.findIndex((instance) => instance.instanceId === sourceId);
				if (target < 0 || source < 0) return;
				const position = event.clientY < event.currentTarget.getBoundingClientRect().top + event.currentTarget.getBoundingClientRect().height / 2 ? "before" : "after";
				const nextVisible = instances.map((instance) => instance.instanceId).filter((id) => id !== sourceId);
				const insertAt = nextVisible.indexOf(targetId) + (position === "after" ? 1 : 0);
				nextVisible.splice(insertAt, 0, sourceId);
				persistOrder(nextVisible);
				setDraggedId(null);
				setDropTarget(null);
			};
			const closeRename = () => {
				if (renaming || mutation.current) return;
				setRenameTarget(null);
				setRenameError(null);
			};
			const confirmRename = async () => {
				if (renameBlocked || renameTarget === null || mutation.current) return;
				const current = lifecycle.current;
				mutation.current = true;
				setRenaming(true);
				setRenameError(null);
				try {
					await service.renameInstance(renameTarget.instanceId, renameTrimmed);
					if (current.active) setRenameTarget(null);
				} catch (reason) {
					if (current.active) setRenameError(reason instanceof Error ? reason.message : String(reason));
				} finally {
					if (current.active) {
						mutation.current = false;
						setRenaming(false);
					}
				}
			};
			const requestRename = (instance) => {
				if (busy || mutation.current) return;
				setRenameTarget({
					instanceId: instance.instanceId,
					currentTitle: instance.title
				});
				setRenameDraft(instance.title);
				setRenameError(null);
			};
			const closeDelete = () => {
				if (deleting || mutation.current) return;
				setDeleteTarget(null);
				setDeleteError(null);
			};
			const confirmDelete = async () => {
				if (busy || deleteTarget === null || mutation.current) return;
				const current = lifecycle.current;
				mutation.current = true;
				setDeleting(true);
				setDeleteError(null);
				try {
					await service.deleteInstance(deleteTarget.instanceId);
					if (current.active) setDeleteTarget(null);
				} catch (reason) {
					if (current.active) setDeleteError(reason instanceof Error ? reason.message : String(reason));
				} finally {
					if (current.active) {
						mutation.current = false;
						setDeleting(false);
					}
				}
			};
			const requestDelete = (instance) => {
				if (busy || mutation.current) return;
				setDeleteTarget({
					instanceId: instance.instanceId,
					title: instance.title
				});
				setDeleteError(null);
			};
			const renameDialog = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
				open: renameTarget !== null,
				onClose: closeRename,
				closeLabel: "关闭",
				title: "重命名工作台",
				footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
					variant: "outline",
					disabled: renaming,
					onClick: closeRename,
					children: "取消"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
					variant: "primary",
					disabled: renameBlocked,
					onClick: confirmRename,
					children: "重命名"
				})] }),
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						className: "dsh-better-workbench-rename-input",
						value: renameDraft,
						"aria-label": "工作台名称",
						autoFocus: true,
						disabled: renaming,
						onFocus: (event) => {
							event.target.select();
						},
						onChange: (event) => {
							setRenameDraft(event.target.value);
							setRenameError(null);
						},
						onCompositionStart: () => {
							composingRef.current = true;
						},
						onCompositionEnd: () => {
							composingRef.current = false;
						},
						onKeyDown: (event) => {
							if (event.key === "Enter" && !composingRef.current) {
								event.preventDefault();
								event.stopPropagation();
								confirmRename();
							}
						}
					}),
					renaming && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						role: "status",
						children: "正在重命名..."
					}),
					renameError !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "dsh-better-workbench-rename-error",
						role: "alert",
						children: renameError
					})
				]
			});
			const deleteDialog = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
				open: deleteTarget !== null,
				onClose: closeDelete,
				closeLabel: "关闭",
				title: "删除工作台？",
				...deleteTarget === null ? {} : { description: "删除“" + deleteTarget.title + "”？只移除工作台入口和配置，不会删除应用源码或项目文件。" },
				footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
					variant: "outline",
					disabled: deleting,
					onClick: closeDelete,
					children: "取消"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Button, {
					variant: "outline",
					className: "dsh-better-workbench-delete-action",
					disabled: deleting,
					onClick: confirmDelete,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconTrashOutlineRegular, { size: 16 }), "删除"]
				})] }),
				children: [deleting && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					role: "status",
					children: "正在删除..."
				}), deleteError !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "dsh-better-workbench-delete-error",
					role: "alert",
					children: deleteError
				})]
			});
			if (compact) return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				ref: section,
				className: "dsh-better-workbench-sidebar-section",
				"aria-label": "工作台",
				"data-compact": "true",
				children: [renameDialog, deleteDialog]
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				ref: section,
				className: "dsh-better-workbench-sidebar-section",
				"aria-label": "工作台",
				"aria-busy": busy,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-better-workbench-sidebar-heading",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: `dsh-better-workbench-sidebar-heading-label${searchExpanded && !compact ? " is-hidden" : ""}`,
								children: "工作台"
							}),
							!searchExpanded && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: "dsh-better-workbench-sidebar-collapse-zone",
								"aria-label": collapsed ? "展开工作台列表" : "折叠工作台列表",
								"aria-expanded": !collapsed,
								title: collapsed ? "展开工作台列表" : "折叠工作台列表",
								onClick: () => {
									setCollapsed(!collapsed);
								},
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
									className: "dsh-better-workbench-sidebar-collapse-chevron",
									"data-collapsed": collapsed,
									width: "12",
									height: "12",
									viewBox: "0 0 16 16",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "1.5",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									"aria-hidden": "true",
									focusable: "false",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "m4 6 4 4 4-4" })
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								ref: searchRoot,
								className: `dsh-better-workbench-sidebar-search-slot${searchExpanded ? " is-expanded" : ""}`,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-better-workbench-sidebar-search",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
											label: "搜索工作台",
											side: "bottom",
											delayMs: 500,
											disabled: searchExpanded,
											children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												className: "dsh-better-workbench-sidebar-search-button",
												"aria-label": "搜索工作台",
												"aria-expanded": searchExpanded,
												onClick: () => {
													setSearchExpanded(true);
													setCollapsed(false);
													if (compact) requestSidebarExpand();
												},
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSearchOutlineRegular, { size: searchExpanded ? 11 : 14 })
											})
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
											ref: searchInput,
											className: "dsh-better-workbench-sidebar-search-input",
											type: "text",
											placeholder: "搜索工作台…",
											value: query,
											tabIndex: searchExpanded && !compact ? 0 : -1,
											onChange: (event) => {
												setQuery(event.target.value);
											},
											onKeyDown: (event) => {
												if (event.key === "Escape") {
													setQuery("");
													setSearchExpanded(false);
												}
											}
										}),
										searchExpanded && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											className: "dsh-better-workbench-sidebar-search-clear",
											"aria-label": "清除搜索",
											onClick: (event) => {
												event.stopPropagation();
												setQuery("");
												setSearchExpanded(false);
											},
											children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCloseFillRegular, { size: 14 })
										})
									]
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: `dsh-better-workbench-sidebar-heading-actions${searchExpanded && !compact ? " is-hidden" : ""}`,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ViewOptionsMenu, {
									orderBy,
									onOrderPick: setOrderBy
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
									label: "创建工作台",
									side: "bottom",
									delayMs: 500,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: "dsh-better-workbench-sidebar-icon-button dsh-better-workbench-sidebar-add",
										"aria-label": "创建工作台",
										disabled: busy,
										onClick: () => {
											setSearchExpanded(false);
											service.openHome(true);
										},
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconProjectAddOutlineRegular, { size: 16 })
									})
								})]
							})
						]
					}),
					compact && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "dsh-better-workbench-sidebar-rail-search",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
							label: "搜索工作台",
							side: "right",
							delayMs: 500,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: "dsh-better-workbench-sidebar-search-button",
								"aria-label": "搜索工作台",
								"aria-expanded": searchExpanded,
								onClick: () => {
									setSearchExpanded(true);
									requestSidebarExpand();
								},
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSearchOutlineRegular, { size: 18 })
							})
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-better-workbench-sidebar-list",
						"aria-label": "工作台列表",
						hidden: listHidden,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(WorkbenchHomeRow, {
							active: snapshot.route.kind === "workbench-home",
							onOpen: () => {
								service.openHome();
							}
						}), instances.map((instance, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(WorkbenchRow, {
							instance,
							appIcon: service.getApp(instance.appId)?.renderIcon,
							compact,
							active: snapshot.route.kind === "workbench-instance" && snapshot.route.instanceId === instance.instanceId,
							draggable: canReorder,
							busy,
							canMoveUp: canReorder && index > 0,
							canMoveDown: canReorder && index < instances.length - 1,
							onMove: (direction) => {
								moveInstance(instance.instanceId, direction);
							},
							dropPosition: dropTarget?.id === instance.instanceId ? dropTarget.position : null,
							onOpen: () => {
								openWorkbench(service, instance.instanceId);
							},
							onSettings: instance.appId === "workbench.website" && instance.available ? () => {
								setWebsiteTarget({
									id: instance.instanceId,
									generation: snapshot.apps.find((app) => app.appId === instance.appId).generation
								});
							} : void 0,
							onRename: () => {
								requestRename(instance);
							},
							onDelete: () => {
								requestDelete(instance);
							},
							onDragStart: (event) => {
								if (!canReorder) {
									event.preventDefault();
									return;
								}
								setDraggedId(instance.instanceId);
								event.dataTransfer.effectAllowed = "move";
								event.dataTransfer.setData("text/plain", instance.instanceId);
							},
							onDragOver: (event) => {
								if (!canReorder || draggedId === null || draggedId === instance.instanceId) return;
								event.preventDefault();
								const rect = event.currentTarget.getBoundingClientRect();
								setDropTarget({
									id: instance.instanceId,
									position: event.clientY < rect.top + rect.height / 2 ? "before" : "after"
								});
							},
							onDrop: (event) => {
								handleDrop(instance.instanceId, event);
							},
							onDragEnd: () => {
								setDraggedId(null);
								setDropTarget(null);
							}
						}, instance.instanceId))]
					}),
					!listHidden && snapshot.loading && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "dsh-better-workbench-sidebar-empty",
						role: "status",
						children: "正在加载工作台..."
					}),
					reordering && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "dsh-better-workbench-sidebar-empty",
						role: "status",
						children: "正在保存排序..."
					}),
					(reorderError ?? snapshot.error) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "dsh-better-workbench-rename-error",
						role: "alert",
						children: reorderError ?? snapshot.error
					}),
					!listHidden && !snapshot.loading && instances.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "dsh-better-workbench-sidebar-empty",
						children: normalizedQuery === "" ? "从首页创建实例。" : "无匹配工作台"
					}),
					websiteTarget && websiteInstance && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(WebsiteSettings, {
						open: true,
						instance: websiteInstance,
						onClose: () => setWebsiteTarget(null),
						updateConfig: (patch, revision) => service.updateInstanceConfig(websiteTarget.id, patch, revision, websiteTarget.generation)
					}, websiteTarget.id),
					renameDialog,
					deleteDialog
				]
			});
		}
		// src/client/WorkbenchErrorBoundary.tsx
		/** Keep application failures below the host navigation and recovery controls. */
		var WorkbenchErrorBoundary = class extends react.Component {
			state = { error: null };
			static getDerivedStateFromError(error) {
				return { error: error instanceof Error ? error.message : String(error) };
			}
			componentDidCatch(error, info) {
				console.error("[dsh-better-workbench] application render failed", error, info.componentStack);
			}
			render() {
				if (this.state.error !== null) return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "dsh-better-workbench-unavailable",
					role: "alert",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "工作台显示失败" }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: this.state.error }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "outline",
							size: "sm",
							onClick: this.props.onRetry,
							children: "重新加载视图"
						})
					]
				});
				return this.props.children;
			}
		};
		// src/client/WorkbenchCreateDialog.tsx
		function uniqueWorkbenchTitle(base, snapshot) {
			if (!base) return "";
			const names = new Set(snapshot.instances.map((instance) => instance.title));
			if (!names.has(base)) return base;
			let number = 2;
			while (names.has(base + " " + number)) number++;
			return base + " " + number;
		}
		function WorkbenchCreateDialog({ service, snapshot }) {
			const [draft, setDraft] = (0, react.useState)(null);
			const [pending, setPending] = (0, react.useState)(false);
			const [error, setError] = (0, react.useState)(null);
			const [handoff, setHandoff] = (0, react.useState)(null);
			const [query, setQuery] = (0, react.useState)("");
			const inFlight = (0, react.useRef)(false);
			const operation = (0, react.useRef)(0);
			const owner = (0, react.useRef)({ active: true });
			(0, react.useEffect)(() => {
				const current = { active: true };
				owner.current = current;
				const positions = [];
				let element = document.querySelector("[data-dsh-better-workbench-center]")?.parentElement;
				while (element) {
					positions.push({
						element,
						left: element.scrollLeft,
						top: element.scrollTop
					});
					element = element.parentElement;
				}
				return () => {
					current.active = false;
					queueMicrotask(() => {
						for (const saved of positions) if (saved.element.isConnected) {
							saved.element.scrollLeft = saved.left;
							saved.element.scrollTop = saved.top;
						}
					});
				};
			}, [service]);
			const busy = pending || snapshot.loading || snapshot.creation.status === "creating";
			const templatedApps = new Set(snapshot.templates.flatMap((template) => template.kind === "instance" ? [template.appId] : []));
			const choices = [...snapshot.templates.map((template) => ({
				key: "template:" + template.templateId,
				title: template.title,
				template,
				available: template.available,
				appId: template.kind === "instance" ? template.appId : void 0
			})), ...snapshot.apps.filter((app) => !templatedApps.has(app.appId)).map((app) => ({
				key: "app:" + app.appId,
				title: app.title,
				appId: app.appId,
				available: true
			}))];
			const existingFor = (choice) => snapshot.apps.find((app) => app.appId === choice.appId)?.allowMultiple === false ? snapshot.instances.find((instance) => instance.appId === choice.appId) : void 0;
			const isCurrent = draft === null || (draft.app === void 0 || snapshot.apps.find((app) => app.appId === draft.choice.appId)?.generation === draft.generation) && (draft.choice.template === void 0 || snapshot.templates.some((template) => template.available && JSON.stringify(template) === JSON.stringify(draft.choice.template)));
			let validation = null;
			if (draft && draft.app) try {
				draft.app.config.validate(draft.config);
				draft.app.config.validateCreation?.(draft.config);
			} catch (reason) {
				validation = reason instanceof Error ? reason.message : String(reason);
			}
			const choose = (choice) => {
				if (busy || !choice.available) return;
				const existing = existingFor(choice);
				if (existing) {
					openWorkbench(service, existing.instanceId);
					return;
				}
				try {
					const app = choice.appId ? service.getApp(choice.appId) : void 0;
					if (choice.appId && !app) throw new Error("应用暂不可用");
					const template = choice.template?.kind === "instance" ? choice.template : void 0;
					const config = structuredClone(template?.defaultConfig ?? app?.config.defaults() ?? {});
					const base = template?.defaultTitle ?? app?.title ?? choice.title;
					setDraft({
						choice,
						app,
						generation: snapshot.apps.find((item) => item.appId === choice.appId)?.generation,
						title: uniqueWorkbenchTitle(base, snapshot),
						customTitle: false,
						config
					});
					setError(null);
					setHandoff(null);
				} catch (reason) {
					setError(reason instanceof Error ? reason.message : String(reason));
				}
			};
			const close = () => {
				if (!busy) service.openHome(false);
			};
			const submit = async () => {
				if (!draft || busy || inFlight.current || !isCurrent) return;
				const latest = service.getSnapshot();
				if (draft.app && latest.apps.find((app) => app.appId === draft.choice.appId)?.generation !== draft.generation || draft.choice.template && !latest.templates.some((template) => template.available && JSON.stringify(template) === JSON.stringify(draft.choice.template))) {
					setError("应用或模板已更新，请返回重新选择。");
					return;
				}
				if (draft.app && (!draft.title.trim() || validation)) {
					setError(validation ?? "请输入工作台名称");
					return;
				}
				const current = owner.current, token = ++operation.current;
				inFlight.current = true;
				setPending(true);
				setError(null);
				try {
					let result;
					if (draft.choice.template) result = await service.startCreation(draft.choice.template.templateId, draft.app ? {
						title: draft.title.trim(),
						config: draft.config
					} : void 0);
					else result = await service.createInstance(draft.choice.appId, draft.title.trim(), draft.config);
					if (!current.active || token !== operation.current) return;
					if ("instanceId" in result) openWorkbench(service, result.instanceId, draft.app?.defaultPresentation);
					else setHandoff(result.sessionId);
				} catch (reason) {
					if (current.active && token === operation.current) setError(reason instanceof Error ? reason.message : String(reason));
				} finally {
					if (current.active && token === operation.current) {
						inFlight.current = false;
						setPending(false);
					}
				}
			};
			const cancelWaiting = () => {
				operation.current++;
				inFlight.current = false;
				setPending(false);
				service.cancelCreation();
			};
			const Editor = draft?.app?.renderCreate;
			const website = draft?.app?.appId === WEBSITE_APP_ID;
			const filtered = choices.filter((choice) => choice.title.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()));
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
				open: true,
				title: draft ? draft.choice.title : "创建工作台",
				closeLabel: "关闭",
				onClose: close,
				className: "dsh-better-workbench-create-dialog",
				contentClassName: "dsh-better-workbench-create-content",
				footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					draft && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
						label: "返回模板",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: "dsh-better-workbench-frame-button",
							"aria-label": "返回模板",
							disabled: busy,
							onClick: () => {
								setDraft(null);
								setError(null);
								setHandoff(null);
							},
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronLeftOutlineRegular, { size: 14 })
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: "dsh-better-workbench-create-spacer" }),
					snapshot.creation.status === "creating" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
						variant: "outline",
						onClick: cancelWaiting,
						children: "取消等待"
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
						variant: "outline",
						disabled: busy,
						onClick: close,
						children: handoff ? "完成" : "取消"
					}),
					draft && !handoff && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
						variant: "primary",
						disabled: busy || !isCurrent || draft.app !== void 0 && (!draft.title.trim() || validation !== null),
						onClick: () => {
							submit();
						},
						icon: pending ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconLoadingOutlineRegular, {}) : void 0,
						children: pending ? "正在创建..." : draft.app ? "创建并打开" : "开始创建"
					})
				] }),
				children: [draft === null ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						type: "search",
						className: "dsh-better-workbench-create-search",
						placeholder: "搜索模板或应用",
						"aria-label": "搜索模板或应用",
						value: query,
						onChange: (event) => setQuery(event.target.value)
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "dsh-better-workbench-create-choices",
						children: filtered.map((choice) => {
							const existing = existingFor(choice);
							const app = choice.appId ? service.getApp(choice.appId) : void 0;
							return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "dsh-better-workbench-create-choice",
								disabled: busy || !choice.available,
								onClick: () => choose(choice),
								children: [
									app?.renderIcon ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(WorkbenchAppIcon, {
										renderer: app.renderIcon,
										instance: existing,
										className: "dsh-better-workbench-create-choice-icon"
									}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPersonalizationOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "dsh-better-workbench-create-choice-label",
										children: choice.title
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "dsh-better-workbench-create-choice-kind",
										children: !choice.available ? "暂不可用" : existing ? "打开已有" : choice.template?.kind === "agent" ? "Agent" : choice.template ? "模板" : "应用"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronRightOutlineRegular, { size: 14 })
								]
							}, choice.key);
						})
					}),
					filtered.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "dsh-better-workbench-create-empty",
						children: query ? "没有匹配的模板或应用" : "暂无可用模板或应用"
					})
				] }) : handoff ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					role: "status",
					children: ["创建已交接，会话：", /* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: handoff })]
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("form", {
					className: website ? "dsh-better-workbench-create-form" : void 0,
					onSubmit: (event) => {
						event.preventDefault();
						submit();
					},
					children: [
						!website && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-better-workbench-create-step",
							children: "工作台配置"
						}),
						website && draft.app && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: "dsh-better-workbench-create-field",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "工作台名称" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
								className: "dsh-better-workbench-create-input",
								autoFocus: !Editor,
								type: "text",
								"aria-label": "工作台名称",
								placeholder: "工作台名称",
								maxLength: 120,
								value: draft.title,
								disabled: busy,
								onChange: (event) => {
									setDraft({
										...draft,
										title: event.target.value,
										customTitle: true
									});
									setError(null);
								}
							})]
						}),
						Editor && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(WorkbenchErrorBoundary, {
							onRetry: () => choose(draft.choice),
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Editor, {
								config: draft.config,
								disabled: busy || !isCurrent,
								onChange: (config, suggestedTitle) => {
									if (!owner.current.active || busy) return;
									setDraft((previous) => previous ? {
										...previous,
										config,
										title: !previous.customTitle && suggestedTitle ? uniqueWorkbenchTitle(suggestedTitle, snapshot) : previous.title
									} : null);
									setError(null);
								}
							})
						}, draft.choice.key),
						!website && draft.app && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: "dsh-better-workbench-create-field",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "工作台名称" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								autoFocus: !Editor,
								type: "text",
								"aria-label": "工作台名称",
								maxLength: 120,
								value: draft.title,
								disabled: busy,
								onChange: (event) => {
									setDraft({
										...draft,
										title: event.target.value,
										customTitle: true
									});
									setError(null);
								}
							})]
						}),
						!isCurrent && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							role: "alert",
							className: "dsh-better-workbench-create-error",
							children: "应用或模板已更新，请返回重新选择。"
						})
					]
				}), error && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					role: "alert",
					className: "dsh-better-workbench-create-error",
					children: error
				})]
			});
		}
		// src/client/WorkbenchHome.tsx
		const statusLabel = (instance) => instance.status === "preparing" ? "准备中" : instance.status === "migration-error" ? "升级失败" : instance.status === "incompatible" ? "版本不兼容" : instance.available && instance.status === "ready" ? "可用" : "不可用";
		/** Existing instances stay in place while creation owns a separate transient dialog. */
		function WorkbenchHome({ service, snapshot }) {
			const creating = snapshot.route.kind === "workbench-home" && snapshot.route.creating === true;
			const [retrying, setRetrying] = (0, react.useState)(false);
			const [error, setError] = (0, react.useState)(null);
			const owner = (0, react.useRef)({ active: true });
			(0, react.useEffect)(() => {
				const current = { active: true };
				owner.current = current;
				return () => {
					current.active = false;
				};
			}, [service]);
			const retry = async () => {
				if (retrying) return;
				const current = owner.current;
				setRetrying(true);
				setError(null);
				try {
					await service.retry();
				} catch (reason) {
					if (current.active) setError(reason instanceof Error ? reason.message : String(reason));
				} finally {
					if (current.active) setRetrying(false);
				}
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("main", {
				className: "dsh-better-workbench-home",
				"aria-busy": snapshot.loading || retrying,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", {
						className: "dsh-better-workbench-home-header",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "Workbench" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h1", { children: "工作台" })] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-better-workbench-home-actions",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "dsh-better-workbench-home-add-button",
								"aria-haspopup": "dialog",
								"aria-expanded": creating,
								disabled: snapshot.loading,
								onClick: () => service.openHome(true),
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular, { size: 14 }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "创建工作台" })]
							})
						})]
					}),
					snapshot.recovery && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						role: "alert",
						className: "dsh-better-workbench-frame-error",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "部分旧数据无法导入，原始内容已保留" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", { children: snapshot.recovery.errors.map((message, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", { children: message }, index)) }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
								download: "workbench-legacy-backup.json",
								href: "data:application/json;charset=utf-8," + encodeURIComponent(JSON.stringify(snapshot.recovery, null, 2)),
								children: "导出原始备份"
							})
						]
					}),
					snapshot.loading && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						role: "status",
						children: "正在加载工作台..."
					}),
					(error ?? snapshot.error) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						role: "alert",
						className: "dsh-better-workbench-create-error",
						children: error ?? snapshot.error
					}),
					snapshot.error && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
						variant: "outline",
						disabled: retrying,
						onClick: () => {
							retry();
						},
						children: retrying ? "正在重新加载..." : "重新加载"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-better-workbench-home-section",
						"aria-label": "已有工作台",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-better-workbench-home-section-heading",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", { children: "已有工作台" }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [snapshot.instances.length, " 个工作台"] })]
						}), !snapshot.loading && snapshot.instances.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-better-workbench-home-empty",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "还没有工作台" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								variant: "outline",
								icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular, {}),
								onClick: () => service.openHome(true),
								children: "创建工作台"
							})]
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-better-workbench-home-grid dsh-better-workbench-home-instance-grid",
							children: snapshot.instances.map((instance) => {
								const app = service.getApp(instance.appId);
								const url = typeof instance.config.url === "string" ? instance.config.url : void 0;
								return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("article", {
									className: "dsh-better-workbench-home-card",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "dsh-better-workbench-home-card-main",
										"aria-label": instance.title,
										onClick: () => openWorkbench(service, instance.instanceId),
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
											className: "dsh-better-workbench-home-card-head",
											children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)(WorkbenchAppIcon, {
													renderer: app?.renderIcon,
													instance,
													className: "dsh-better-workbench-home-instance-icon"
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: "dsh-better-workbench-home-card-name",
													children: instance.title
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: "dsh-better-workbench-home-card-badge",
													children: statusLabel(instance)
												})
											]
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "dsh-better-workbench-home-card-description",
											children: url || app?.title || instance.appId
										})]
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: "dsh-better-workbench-home-card-foot",
										onClick: () => openWorkbench(service, instance.instanceId),
										children: !instance.available ? "查看状态" : instance.appId === "workbench.website" && instance.config.openMode === "external" ? "在浏览器打开" : "打开工作台"
									})]
								}, instance.instanceId);
							})
						})]
					}),
					creating && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(WorkbenchCreateDialog, {
						service,
						snapshot
					})
				]
			});
		}
		// src/client/presentation.ts
		function fallbackPresentation(kind) {
			if (kind === "panel") return {
				kind: "panel",
				placement: "right",
				behavior: "overlay",
				conversation: "resident"
			};
			if (kind === "capsule") return {
				kind: "capsule",
				placement: "floating",
				conversation: "resident"
			};
			return {
				kind: "page",
				conversation: "exclusive"
			};
		}
		/** Resolve geometry once for both the conversation inset and the app surface. */
		function resolvePresentationLayout(presentation, width, height) {
			const availableWidth = Number.isFinite(width) ? Math.max(0, width) : 0;
			const availableHeight = Number.isFinite(height) ? Math.max(0, height) : 0;
			if (presentation?.kind !== "panel") return {
				presentation,
				panelSize: 0,
				rightInset: 0,
				bottomInset: 0
			};
			const right = presentation.placement === "right";
			const panelSize = right ? Math.min(360, availableWidth) : Math.min(280, availableHeight * .55);
			const canPush = right ? availableWidth >= 720 : availableHeight >= 560;
			const effective = presentation.behavior === "push" && !canPush ? {
				...presentation,
				behavior: "overlay"
			} : presentation;
			const push = effective.behavior === "push";
			return {
				presentation: effective,
				panelSize,
				rightInset: push && right ? panelSize : 0,
				bottomInset: push && !right ? panelSize : 0
			};
		}
		/** Resolve a durable route against the currently available runtime definition. */
		function resolveActivePresentation(snapshot, service) {
			if (snapshot.route.kind === "conversation") return void 0;
			if (snapshot.route.kind === "workbench-home") return fallbackPresentation("page");
			const route = snapshot.route;
			const instance = snapshot.instances.find((item) => item.instanceId === route.instanceId);
			const app = instance === void 0 ? void 0 : service.getApp(instance.appId);
			if (app === void 0) return fallbackPresentation(route.presentation);
			return app.presentations.find((item) => item.kind === route.presentation) ?? app.presentations.find((item) => item.kind === app.defaultPresentation) ?? fallbackPresentation("page");
		}
		// src/client/WorkbenchSurface.tsx
		const modes = {
			page: {
				label: "页面",
				Icon: _deepseek_ai_dsh_client_ui_primitives.IconFullscreenOutlineRegular
			},
			panel: {
				label: "面板",
				Icon: _deepseek_ai_dsh_client_ui_primitives.IconPanelLeftOutlineRegular
			},
			capsule: {
				label: "胶囊",
				Icon: _deepseek_ai_dsh_client_ui_primitives.IconEllipsisOutlineRegular
			}
		};
		function SurfaceToolbar({ service, title, presentation, app, onMode, exporting, onExport }) {
			const [menuOpen, setMenuOpen] = (0, react.useState)(false);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", {
				className: "dsh-better-workbench-frame-toolbar",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
						label: "工作台首页",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: "dsh-better-workbench-frame-button",
							"aria-label": "工作台首页",
							onClick: () => {
								service.openHome();
							},
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPersonalizationOutlineRegular, {})
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "dsh-better-workbench-frame-title",
						title,
						children: title
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "dsh-better-workbench-frame-modes",
						role: "group",
						"aria-label": "显示模式",
						children: [...new Set(app?.presentations.map((item) => item.kind) ?? [])].map((kind) => {
							const { label, Icon } = modes[kind];
							return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
								label,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									className: "dsh-better-workbench-frame-button",
									"aria-label": label,
									"aria-pressed": presentation?.kind === kind,
									onClick: () => {
										onMode?.(kind);
									},
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {})
								})
							}, kind);
						})
					}),
					onExport !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Menu, {
						open: menuOpen,
						onClose: () => {
							setMenuOpen(false);
						},
						portal: true,
						dense: true,
						items: [{
							id: "export",
							label: "导出配置",
							icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconDownloadOutlineRegular, {}),
							disabled: exporting
						}],
						onSelect: () => {
							setMenuOpen(false);
							onExport();
						},
						anchor: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: "dsh-better-workbench-frame-button",
							"aria-label": "工作台操作",
							title: "工作台操作",
							onClick: () => {
								setMenuOpen((value) => !value);
							},
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconEllipsisOutlineRegular, {})
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
						label: "关闭工作台",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: "dsh-better-workbench-frame-button",
							"aria-label": "关闭工作台",
							onClick: () => {
								service.close();
							},
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCloseOutlineRegular, {})
						})
					})
				]
			});
		}
		function repositoryUrl(value) {
			if (value === void 0) return void 0;
			try {
				const url = new URL(value);
				return url.protocol === "https:" || url.protocol === "http:" ? url.href : void 0;
			} catch {
				return;
			}
		}
		function InstanceFrame({ service, instance, app, generation, presentation }) {
			const [error, setError] = (0, react.useState)(null);
			const [saving, setSaving] = (0, react.useState)(0);
			const [exporting, setExporting] = (0, react.useState)(false);
			const exportingRef = (0, react.useRef)(false);
			const download = (0, react.useRef)(null);
			const clearDownload = () => {
				if (download.current === null) return;
				clearTimeout(download.current.timer);
				URL.revokeObjectURL(download.current.url);
				download.current = null;
			};
			(0, react.useEffect)(() => clearDownload, []);
			const [preparing, setPreparing] = (0, react.useState)(false);
			const [retry, setRetry] = (0, react.useState)(0);
			const owner = (0, react.useMemo)(() => ({
				active: true,
				draftRevision: void 0
			}), [service, retry]);
			(0, react.useEffect)(() => {
				const current = owner;
				current.active = true;
				setError(null);
				setSaving(0);
				setPreparing(false);
				setExporting(false);
				if (instance !== void 0 && app !== void 0 && instance.status !== "ready") {
					setPreparing(true);
					service.prepareInstance(instance.instanceId).catch((reason) => {
						if (current.active) setError(reason instanceof Error ? reason.message : String(reason));
					}).finally(() => {
						if (current.active) setPreparing(false);
					});
				}
				return () => {
					current.active = false;
				};
			}, [service, owner]);
			const retryView = () => {
				owner.active = false;
				setRetry((value) => value + 1);
			};
			const retryPreparation = async () => {
				if (preparing || !owner.active) return;
				setPreparing(true);
				setError(null);
				try {
					await service.retry();
					if (owner.active) retryView();
				} catch (reason) {
					if (owner.active) setError(reason instanceof Error ? reason.message : String(reason));
				} finally {
					if (owner.active) setPreparing(false);
				}
			};
			const exportConfig = async () => {
				if (instance === void 0 || !owner.active || exportingRef.current) return;
				exportingRef.current = true;
				setExporting(true);
				try {
					const data = await service.exportInstance(instance.instanceId);
					if (!owner.active) return;
					clearDownload();
					const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }));
					download.current = {
						url,
						timer: setTimeout(clearDownload, 1e3)
					};
					const anchor = document.createElement("a");
					anchor.href = url;
					anchor.download = `${instance.instanceId.replace(/[^a-zA-Z0-9_-]/g, "_")}.json`;
					anchor.click();
				} catch (reason) {
					if (owner.active) setError(reason instanceof Error ? reason.message : String(reason));
				} finally {
					exportingRef.current = false;
					if (owner.active) setExporting(false);
				}
			};
			const setPresentation = (kind) => {
				if (owner.active && instance !== void 0) service.open(instance.instanceId, kind);
			};
			const renderProps = instance === void 0 ? void 0 : {
				instance,
				presentation,
				updateConfig: async (patch, expectedRevision) => {
					const current = owner;
					if (!current.active) throw new Error("工作台视图已失效");
					setSaving((value) => value + 1);
					setError(null);
					try {
						const revision = await service.updateInstanceConfig(instance.instanceId, patch, expectedRevision ?? current.draftRevision ?? instance.revision, generation);
						if (current.active && current.draftRevision !== void 0) current.draftRevision = revision;
						return revision;
					} catch (reason) {
						if (current.active) setError(reason instanceof Error ? reason.message : String(reason));
						throw reason;
					} finally {
						if (current.active) setSaving((value) => value - 1);
					}
				},
				setDirty: (dirty) => {
					if (!owner.active) return;
					if (dirty) owner.draftRevision ??= instance.revision;
					else owner.draftRevision = void 0;
					service.setDirty(instance.instanceId, dirty);
				},
				reportError: (reason) => {
					if (owner.active) setError(reason);
				},
				setPresentation,
				close: () => {
					if (owner.active) service.close();
				},
				openHome: () => {
					if (owner.active) service.openHome();
				},
				openConversation: () => {
					if (owner.active) service.openConversation();
				}
			};
			const ready = instance?.status === "ready" && instance.available && !preparing;
			const Renderer = presentation.kind === "panel" ? app?.renderPanel : presentation.kind === "capsule" ? app?.renderCapsule : app?.renderMain;
			const Secondary = presentation.kind === "page" ? app?.renderSecondary : void 0;
			let content = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-better-workbench-unavailable",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: preparing || instance?.status === "preparing" ? "正在准备工作台..." : "工作台应用暂不可用" }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: instance === void 0 ? "实例不存在" : instance.error ?? `应用标识：${instance.appId}` }),
					app !== void 0 && !preparing && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
						variant: "outline",
						size: "sm",
						onClick: () => {
							retryPreparation();
						},
						children: "重试"
					})
				]
			});
			if (ready && Renderer !== void 0 && renderProps !== void 0) content = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-better-workbench-center-body",
				children: [Secondary !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("aside", {
					className: "dsh-better-workbench-center-secondary",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Secondary, { ...renderProps })
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("main", {
					className: "dsh-better-workbench-center-main",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Renderer, { ...renderProps })
				})]
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-better-workbench-frame",
				children: [
					presentation.kind !== "page" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SurfaceToolbar, {
						service,
						title: instance?.title ?? "工作台",
						app,
						presentation,
						onMode: setPresentation,
						exporting,
						onExport: instance === void 0 ? void 0 : () => {
							exportConfig();
						}
					}),
					presentation.kind !== "page" && app?.source !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("details", {
						className: "dsh-better-workbench-frame-source",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("summary", { children: "开发者声明" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [
								app.source.packageName,
								" · ",
								app.source.version
							] }),
							repositoryUrl(app.source.repository) !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
								href: repositoryUrl(app.source.repository),
								target: "_blank",
								rel: "noopener noreferrer",
								children: "项目仓库"
							})
						]
					}),
					exporting && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "dsh-better-workbench-frame-status",
						role: "status",
						children: "正在导出..."
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "dsh-better-workbench-save-status",
						role: "status",
						"aria-live": "polite",
						"aria-atomic": "true",
						children: saving > 0 ? "正在保存..." : ""
					}),
					(preparing || instance?.status === "preparing") && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "dsh-better-workbench-frame-status",
						role: "status",
						children: "正在准备工作台..."
					}),
					(error ?? instance?.error) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "dsh-better-workbench-frame-error",
						role: "alert",
						children: error ?? instance?.error
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(WorkbenchErrorBoundary, {
						onRetry: retryView,
						children: content
					}, retry)
				]
			});
		}
		/** Keep host controls outside application failure and instance state boundaries. */
		function WorkbenchSurface({ service }) {
			const snapshot = (0, react.useSyncExternalStore)((listener) => service.subscribe(listener), () => service.getSnapshot(), () => service.getSnapshot());
			const root = (0, react.useRef)(null);
			const [size, setSize] = (0, react.useState)({
				width: 0,
				height: 0
			});
			(0, react.useEffect)(() => {
				const mount = root.current?.parentElement;
				const host = mount?.hasAttribute("data-dsh-better-workbench-center") ? mount.parentElement : mount;
				if (host === void 0 || host === null) return;
				const update = () => {
					setSize({
						width: host.clientWidth,
						height: host.clientHeight
					});
				};
				update();
				const observer = new ResizeObserver(update);
				observer.observe(host);
				return () => {
					observer.disconnect();
				};
			}, []);
			const route = snapshot.route;
			const layout = resolvePresentationLayout(resolveActivePresentation(snapshot, service), size.width, size.height);
			if (route.kind === "conversation") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				ref: root,
				className: "dsh-better-workbench-center",
				"data-open": "false",
				"aria-hidden": "true"
			});
			if (route.kind === "workbench-home") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				ref: root,
				className: "dsh-better-workbench-center",
				"data-open": "true",
				"data-kind": "page",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "dsh-better-workbench-frame",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(WorkbenchHome, {
						service,
						snapshot
					})
				})
			});
			const instance = snapshot.instances.find((item) => item.instanceId === route.instanceId);
			const app = instance === void 0 ? void 0 : service.getApp(instance.appId);
			const generation = snapshot.apps.find((item) => item.appId === instance?.appId)?.generation;
			const presentation = layout.presentation ?? {
				kind: "page",
				conversation: "exclusive"
			};
			const frame = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(InstanceFrame, {
				service,
				instance,
				app,
				generation,
				presentation
			}, JSON.stringify([
				instance?.appId,
				route.instanceId,
				generation
			]));
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				ref: root,
				className: "dsh-better-workbench-center",
				"data-open": "true",
				"data-kind": presentation.kind,
				"data-placement": presentation.kind === "page" ? void 0 : presentation.placement,
				"data-behavior": presentation.kind === "panel" ? presentation.behavior : void 0,
				style: { "--workbench-panel-size": `${layout.panelSize}px` },
				children: presentation.kind === "page" ? frame : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("aside", {
					className: presentation.kind === "panel" ? "dsh-better-workbench-panel" : "dsh-better-workbench-capsule",
					"aria-label": instance?.title ?? "工作台",
					children: frame
				})
			});
		}
		// src/client/dom-adapter.ts
		const SIDEBAR_SLOT = "[data-slot=\"sidebar.workspaces\"]";
		const CONVERSATION_SLOT = "[data-slot=\"main\"]";
		const OWNED = "[data-dsh-better-workbench-sidebar], [data-dsh-better-workbench-center]";
		const PANEL_SIZE = "--workbench-panel-size";
		const CONVERSATION_PROPERTIES = [
			"visibility",
			"pointer-events",
			"margin-right",
			"margin-bottom"
		];
		function saveStyle(element, properties) {
			return new Map(properties.map((property) => [property, {
				value: element.style.getPropertyValue(property),
				priority: element.style.getPropertyPriority(property)
			}]));
		}
		function setStyle(element, property, value, priority = "") {
			if (element.style.getPropertyValue(property) === value && element.style.getPropertyPriority(property) === priority) return;
			if (value === "") element.style.removeProperty(property);
			else element.style.setProperty(property, value, priority);
		}
		function restoreStyle(element, saved) {
			for (const [property, { value, priority }] of saved) setStyle(element, property, value, priority);
		}
		/** Narrow fallback for reselecting a leaf Session. No localized labels or CSS-module names. */
		function isSessionNavigationClick(event) {
			if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
			const target = event.target;
			if (target === null || typeof target.closest !== "function" || target.closest(OWNED)) return false;
			const row = target.closest(SIDEBAR_SLOT + " [role=\"treeitem\"][aria-selected]");
			if (row === null || row.hasAttribute("aria-expanded")) return false;
			const control = target.closest("button, a, input, textarea, select, [role=\"button\"], [role=\"menu\"], [role=\"menuitem\"], [contenteditable=\"true\"]");
			return control === null || control === row;
		}
		function sessionList(value) {
			if (typeof value !== "object" || value === null || !("list" in value)) return void 0;
			const list = value.list;
			if (typeof list !== "object" || list === null || !("getSnapshot" in list) || !("subscribe" in list)) return void 0;
			if (typeof list.getSnapshot !== "function" || typeof list.subscribe !== "function") return void 0;
			return list;
		}
		/** Own the compatibility DOM without replacing DSH slots, methods, or React roots. */
		function mountWorkbenchDom(service, options) {
			const doc = options.document ?? document;
			const view = doc.defaultView;
			if (view === null || doc.body === null) return () => {};
			const report = options.onError ?? ((error) => console.error("Workbench DOM adapter:", error));
			let active = true;
			let sidebar;
			let center;
			let queued = false;
			let navigation;
			let unsubscribeNavigation;
			const style = doc.createElement("style");
			style.setAttribute("data-dsh-better-workbench-style", "");
			style.textContent = options.style;
			doc.head.appendChild(style);
			const restoreConversation = (surface) => {
				for (const [element, saved] of surface.originals) restoreStyle(element, saved);
				surface.originals.clear();
			};
			const sync = () => {
				if (!active || center === void 0) return;
				const surface = center;
				const layout = resolvePresentationLayout(resolveActivePresentation(service.getSnapshot(), service), surface.parent.clientWidth, surface.parent.clientHeight);
				const effective = layout.presentation;
				setStyle(surface.host, PANEL_SIZE, layout.panelSize + "px");
				setStyle(surface.parent, PANEL_SIZE, layout.panelSize + "px");
				surface.host.dataset.workbenchPresentation = effective?.kind ?? "conversation";
				surface.host.dataset.workbenchBehavior = effective?.kind === "panel" ? effective.behavior : "";
				surface.host.dataset.workbenchPlacement = effective !== void 0 && "placement" in effective ? effective.placement : "";
				if (!surface.ready || !surface.host.isConnected) {
					restoreConversation(surface);
					return;
				}
				for (const [element, saved] of surface.originals) if (element.parentElement !== surface.anchor) {
					restoreStyle(element, saved);
					surface.originals.delete(element);
				}
				for (const child of Array.from(surface.anchor.children)) {
					if (!(child instanceof view.HTMLElement)) continue;
					if (!surface.originals.has(child)) surface.originals.set(child, saveStyle(child, CONVERSATION_PROPERTIES));
					const saved = surface.originals.get(child);
					const overrides = {
						visibility: effective?.conversation === "exclusive" ? "hidden" : void 0,
						"pointer-events": effective?.conversation === "exclusive" ? "none" : void 0,
						"margin-right": layout.rightInset > 0 ? layout.rightInset + "px" : void 0,
						"margin-bottom": layout.bottomInset > 0 ? layout.bottomInset + "px" : void 0
					};
					for (const [property, original] of saved) {
						const override = overrides[property];
						setStyle(child, property, override ?? original.value, override === void 0 ? original.priority : "");
					}
				}
			};
			const disposeSurface = (surface) => {
				surface.resize?.disconnect();
				surface.children?.disconnect();
				restoreConversation(surface);
				try {
					surface.dispose();
				} catch (error) {
					report(error);
				}
				surface.host.remove();
				restoreStyle(surface.parent, surface.parentStyle);
			};
			const insert = (kind) => {
				const anchor = doc.querySelector(kind === "sidebar" ? SIDEBAR_SLOT : CONVERSATION_SLOT);
				if (!(anchor instanceof view.HTMLElement) || anchor.parentElement === null) return void 0;
				const parent = anchor.parentElement;
				const host = doc.createElement("div");
				host.setAttribute("data-dsh-better-workbench-" + kind, "");
				const surface = {
					host,
					anchor,
					parent,
					dispose: () => {},
					ready: false,
					failed: false,
					originals: /* @__PURE__ */ new Map(),
					parentStyle: saveStyle(parent, kind === "center" ? ["position", PANEL_SIZE] : [])
				};
				try {
					if (kind === "center") {
						setStyle(parent, "position", "relative");
						parent.appendChild(host);
					} else parent.insertBefore(host, anchor);
					const ready = (value) => {
						surface.ready = value;
						surface.failed = !value;
						if (active) sync();
					};
					surface.dispose = (kind === "center" ? options.renderCenter : options.renderSidebar)(host, ready);
					if (surface.failed) throw new Error("Workbench surface failed to render");
					if (kind === "center") {
						surface.children = new view.MutationObserver(sync);
						surface.children.observe(anchor, { childList: true });
						if (typeof view.ResizeObserver === "function") {
							surface.resize = new view.ResizeObserver(sync);
							surface.resize.observe(parent);
						}
					}
					return surface;
				} catch (error) {
					disposeSurface(surface);
					report(error);
					return;
				}
			};
			const connected = (surface) => surface.host.isConnected && surface.anchor.isConnected && surface.anchor.parentElement === surface.parent && surface.host.parentElement === surface.parent;
			const valid = (surface) => !surface.failed && connected(surface);
			const close = () => {
				if (active && service.getSnapshot().route.kind !== "conversation") service.close();
			};
			const bindNavigation = () => {
				const next = sessionList(options.getSessions?.());
				if (next === navigation) return;
				unsubscribeNavigation?.();
				unsubscribeNavigation = void 0;
				navigation = next;
				if (next === void 0) return;
				let current = next.getSnapshot().current;
				unsubscribeNavigation = next.subscribe(() => {
					const selected = next.getSnapshot().current;
					if (selected === void 0) return;
					const changed = selected !== current;
					current = selected;
					if (changed) close();
				});
			};
			const reconcile = () => {
				if (!active) return;
				if (sidebar !== void 0 && !valid(sidebar)) {
					disposeSurface(sidebar);
					sidebar = void 0;
				}
				if (center !== void 0 && !valid(center)) {
					disposeSurface(center);
					center = void 0;
				}
				sidebar ??= insert("sidebar");
				center ??= insert("center");
				try {
					bindNavigation();
				} catch (error) {
					report(error);
				}
				sync();
			};
			const schedule = () => {
				if (queued || !active) return;
				queued = true;
				view.queueMicrotask(() => {
					queued = false;
					if (active) reconcile();
				});
			};
			const bodyObserver = new view.MutationObserver((records) => {
				if (!active) return;
				if (sidebar !== void 0 && !connected(sidebar) || center !== void 0 && !connected(center)) {
					schedule();
					return;
				}
				for (const record of records) {
					if ((record.target instanceof view.Element ? record.target : record.target.parentElement)?.closest(OWNED)) continue;
					if ([...Array.from(record.addedNodes), ...Array.from(record.removedNodes)].some((node) => node instanceof view.Element && !node.matches(OWNED) && (node.matches(SIDEBAR_SLOT + ", " + CONVERSATION_SLOT) || node.querySelector(SIDEBAR_SLOT + ", " + CONVERSATION_SLOT)))) {
						schedule();
						return;
					}
				}
			});
			const click = (event) => {
				if (isSessionNavigationClick(event)) close();
			};
			const headObserver = new view.MutationObserver(() => {
				if (active && !style.isConnected) doc.head.appendChild(style);
			});
			let unsubscribe = () => {};
			let retry;
			const dispose = () => {
				if (!active) return;
				active = false;
				bodyObserver.disconnect();
				headObserver.disconnect();
				if (retry !== void 0) view.clearInterval(retry);
				view.removeEventListener("resize", sync);
				doc.removeEventListener("click", click);
				unsubscribe();
				unsubscribeNavigation?.();
				if (sidebar !== void 0) disposeSurface(sidebar);
				if (center !== void 0) disposeSurface(center);
				style.remove();
			};
			try {
				bodyObserver.observe(doc.body, {
					childList: true,
					subtree: true
				});
				headObserver.observe(doc.head, { childList: true });
				doc.addEventListener("click", click);
				view.addEventListener("resize", sync);
				unsubscribe = service.subscribe(sync);
				reconcile();
				retry = view.setInterval(() => {
					if (sidebar === void 0 || center === void 0 || sidebar.failed || center.failed) reconcile();
					else try {
						bindNavigation();
					} catch (error) {
						report(error);
					}
				}, 250);
			} catch (error) {
				dispose();
				throw error;
			}
			return dispose;
		}
		// src/client/styles.ts
		const WORKBENCH_STYLE = `
[data-dsh-better-workbench-sidebar] {
  flex: none;
  width: 100%;
  min-height: 0;
  container-type: inline-size;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-14);
}
[data-dsh-better-workbench-sidebar] *, [data-dsh-better-workbench-center] * { box-sizing: border-box; }
.dsh-better-workbench-sidebar-section {
  display: flex;
  min-height: 0;
  flex-direction: column;
  padding-right: var(--dsh-sidebar-inline-padding);
}
.dsh-better-workbench-sidebar-heading {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  height: 36px;
  padding-left: 4px;
  margin: 2px -4px 4px 0;
  border-radius: 12px;
  overflow: hidden;
  color: var(--dsw-alias-label-tertiary);
  font: var(--dsw-font-s-14);
  font-weight: 400;
  line-height: 20px;
}
.dsh-better-workbench-sidebar-heading-label {
  flex: none;
  max-width: 45%;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  line-height: 20px;
  opacity: 1;
  visibility: visible;
  transition: max-width 180ms var(--ds-ease-in-out), margin-right 180ms var(--ds-ease-in-out), opacity 120ms var(--ds-ease-in-out), transform 180ms var(--ds-ease-in-out), visibility 0s linear;
}
.dsh-better-workbench-sidebar-heading-label.is-hidden {
  max-width: 0;
  margin-right: -4px;
  opacity: 0;
  transform: translateX(-4px);
  visibility: hidden;
  transition-delay: 0s, 0s, 0s, 180ms;
}
.dsh-better-workbench-sidebar-icon-button,
.dsh-better-workbench-sidebar-search-button,
.dsh-better-workbench-sidebar-row-action {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 0;
  cursor: pointer;
  color: var(--dsw-alias-label-secondary);
  background: transparent;
}
.dsh-better-workbench-sidebar-icon-button,
.dsh-better-workbench-sidebar-search-button {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}
.dsh-better-workbench-sidebar-icon-button:hover,
.dsh-better-workbench-sidebar-search-button:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}
.dsh-better-workbench-sidebar-search-slot {
  flex: 1;
  max-width: 28px;
  min-width: 0;
  display: flex;
  align-items: center;
  margin-left: auto;
  transition: max-width 180ms var(--ds-ease-in-out), padding-left 180ms var(--ds-ease-in-out);
}
.dsh-better-workbench-sidebar-search-slot.is-expanded {
  max-width: 100%;
  padding-left: 0;
}
.dsh-better-workbench-sidebar-search {
  flex: none;
  display: flex;
  align-items: center;
  gap: 0;
  width: 100%;
  height: 28px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 50%;
  overflow: hidden;
  cursor: text;
  color: var(--dsw-alias-label-secondary);
  background: transparent;
  transition: width 180ms var(--ds-ease-in-out), padding 180ms var(--ds-ease-in-out), border-color 180ms var(--ds-ease-in-out), background-color 180ms var(--ds-ease-in-out);
}
.dsh-better-workbench-sidebar-search-slot.is-expanded .dsh-better-workbench-sidebar-search {
  width: calc(100% + 4px);
  height: 30px;
  margin-inline: -2px;
  padding: 0 4px 0 0;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 10px;
  background: transparent;
  color: var(--dsw-alias-label-caption);
}
.dsh-better-workbench-sidebar-search-button { color: inherit; }
.dsh-better-workbench-sidebar-search-slot.is-expanded .dsh-better-workbench-sidebar-search-button { width: 28px; height: 30px; }
.dsh-better-workbench-sidebar-search-slot.is-expanded .dsh-better-workbench-sidebar-search-button:hover { background: transparent; }
.dsh-better-workbench-sidebar-search-input {
  flex: 1;
  width: 0;
  min-width: 0;
  border: none;
  outline: none;
  opacity: 0;
  pointer-events: none;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-xs-13);
  transition: opacity 120ms var(--ds-ease-in-out);
}
.dsh-better-workbench-sidebar-search-slot.is-expanded .dsh-better-workbench-sidebar-search-input {
  margin-left: -2px;
  opacity: 1;
  pointer-events: auto;
}
.dsh-better-workbench-sidebar-search-input::placeholder { color: var(--dsw-alias-label-tertiary); }
.dsh-better-workbench-sidebar-search-clear {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 0;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
  color: var(--dsw-alias-label-secondary);
  background: transparent;
}
.dsh-better-workbench-sidebar-search-clear:hover { background: var(--dsw-alias-interactive-bg-hover); }
.dsh-better-workbench-sidebar-heading-actions {
  flex: none;
  display: flex;
  align-items: center;
  gap: 4px;
  max-width: 60px;
  margin-right: 4px;
  opacity: 1;
  overflow: hidden;
  visibility: visible;
  transition: max-width 180ms var(--ds-ease-in-out), opacity 120ms var(--ds-ease-in-out), transform 180ms var(--ds-ease-in-out), visibility 0s linear;
}
.dsh-better-workbench-sidebar-heading-actions.is-hidden {
  max-width: 0;
  opacity: 0;
  transform: translateX(4px);
  visibility: hidden;
  pointer-events: none;
  transition-delay: 0s, 0s, 0s, 180ms;
}
.dsh-better-workbench-sidebar-collapse-zone {
  flex: 1;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 8px;
  padding: 0 4px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  color: var(--dsw-alias-label-tertiary);
  background: transparent;
}
.dsh-better-workbench-sidebar-collapse-zone:hover { color: var(--dsw-alias-label-secondary); }
.dsh-better-workbench-sidebar-collapse-zone:focus-visible {
  outline: 2px solid var(--dsw-alias-state-business-primary);
  outline-offset: -2px;
}
.dsh-better-workbench-sidebar-collapse-chevron { flex: none; opacity: 0; transition: opacity 120ms var(--ds-ease-in-out), transform 180ms var(--ds-ease-in-out); }
.dsh-better-workbench-sidebar-collapse-chevron[data-collapsed="true"] { transform: rotate(-90deg); }
.dsh-better-workbench-sidebar-heading:hover .dsh-better-workbench-sidebar-collapse-chevron,
.dsh-better-workbench-sidebar-collapse-zone:focus-visible .dsh-better-workbench-sidebar-collapse-chevron,
.dsh-better-workbench-sidebar-collapse-chevron[data-collapsed="true"] { opacity: 1; }
.dsh-better-workbench-sidebar-rail-search { display: none; }
.dsh-better-workbench-sidebar-list {
  display: grid;
  gap: 2px;
  min-height: 0;
}
.dsh-better-workbench-sidebar-list[hidden] { display: none; }
.dsh-better-workbench-sidebar-row {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0;
  min-width: 0;
  height: 32px;
  border-radius: 8px;
  padding: 0 8px;
  cursor: pointer;
  user-select: none;
  color: var(--dsw-alias-label-primary);
  background: transparent;
  text-align: left;
  font: var(--dsw-font-s-14);
  line-height: 20px;
}
.dsh-better-workbench-sidebar-row:hover,
.dsh-better-workbench-sidebar-row[data-active="true"],
.dsh-better-workbench-sidebar-row[data-menu-open="true"] {
  background: var(--dsw-alias-interactive-bg-hover);
}
.dsh-better-workbench-sidebar-row[data-drop-position="before"]::before,
.dsh-better-workbench-sidebar-row[data-drop-position="after"]::after {
  content: '';
  position: absolute;
  left: 0;
  right: 4px;
  height: 2px;
  background: var(--dsw-alias-state-business-primary);
  pointer-events: none;
}
.dsh-better-workbench-sidebar-row[data-drop-position="before"]::before { top: -1px; }
.dsh-better-workbench-sidebar-row[data-drop-position="after"]::after { bottom: -1px; }
.dsh-better-workbench-sidebar-home {
  width: 100%;
  border: 0;
}
.dsh-better-workbench-sidebar-app-icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  color: var(--dsw-alias-label-secondary);
}
.dsh-better-workbench-sidebar-app-icon > * { width: 16px; height: 16px; }
.dsh-better-workbench-sidebar-home-icon {
  flex: none;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  color: var(--dsw-alias-label-secondary);
}
.dsh-better-workbench-sidebar-row-label {
  flex: 1;
  min-width: 0;
  margin: 0 6px 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font: var(--dsw-font-s-14);
  font-weight: 400;
  line-height: 20px;
}
.dsh-better-workbench-sidebar-row-actions {
  flex: none;
  display: none;
  align-items: center;
  gap: 12px;
  height: 20px;
}
.dsh-better-workbench-sidebar-row:focus-within .dsh-better-workbench-sidebar-row-actions,
.dsh-better-workbench-sidebar-row:hover .dsh-better-workbench-sidebar-row-actions,
.dsh-better-workbench-sidebar-row[data-menu-open="true"] .dsh-better-workbench-sidebar-row-actions { display: inline-flex; }
.dsh-better-workbench-sidebar-row-action {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  color: var(--dsw-alias-label-tertiary);
}
.dsh-better-workbench-sidebar-row-action:hover { color: var(--dsw-alias-label-primary); }
.dsh-better-workbench-rename-input {
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  padding: 7px 14px;
  border: 0.5px solid var(--dsw-alias-border-l4);
  border-radius: 22px;
  outline: none;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-14);
  line-height: 22px;
}
.dsh-better-workbench-rename-input:disabled { color: var(--dsw-alias-label-dimmed); }
.dsh-better-workbench-rename-error {
  margin-top: 8px;
  color: var(--dsw-alias-state-error-primary);
  font: var(--dsw-font-xs-13);
  line-height: 18px;
}
.dsh-better-workbench-delete-action:not(:disabled) { color: var(--dsw-alias-state-error-primary); }
.dsh-better-workbench-delete-error {
  margin-top: 8px;
  color: var(--dsw-alias-state-error-primary);
  font: var(--dsw-font-xs-13);
  line-height: 18px;
}
.dsh-better-workbench-sidebar-empty {
  padding: 10px 12px;
  color: var(--dsw-alias-label-tertiary);
  font: var(--dsw-font-xs-13);
}
/* A hidden-overflow shell can still scroll on iframe/modal focus. Clip only during exclusive pages. */
div:has(> div > [data-dsh-better-workbench-center][data-workbench-presentation="page"]) { overflow: clip; }
.dsh-better-workbench-center {
  position: absolute;
  inset: 0;
  z-index: 10;
  isolation: isolate;
  display: flex;
  container-type: inline-size;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-bg-base);
}
.dsh-better-workbench-center[data-open="false"] { display: none; }
.dsh-better-workbench-frame {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.dsh-better-workbench-frame-toolbar {
  display: flex;
  flex: none;
  align-items: center;
  gap: 4px;
  min-height: 40px;
  padding: 4px 8px;
  border-bottom: 1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-base);
}
.dsh-better-workbench-frame-title {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font: var(--dsw-font-xs-13);
}
.dsh-better-workbench-frame-modes { display: flex; flex: none; gap: 2px; }
.dsh-better-workbench-frame-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 28px;
  height: 28px;
  border: 0;
  border-radius: 4px;
  padding: 0;
  color: var(--dsw-alias-label-secondary);
  background: transparent;
  cursor: pointer;
}
.dsh-better-workbench-frame-button:hover,
.dsh-better-workbench-frame-button[aria-pressed="true"] { background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary); }
.dsh-better-workbench-frame-button:focus-visible,
.dsh-better-workbench-sidebar-row:focus-visible,
.dsh-better-workbench-sidebar-row-action:focus-visible {
  outline: 2px solid var(--dsw-alias-state-business-primary);
  outline-offset: -2px;
}
.dsh-better-workbench-frame-status,
.dsh-better-workbench-frame-error {
  flex: none;
  padding: 6px 12px;
  font: var(--dsw-font-xs-13);
  overflow-wrap: anywhere;
}
.dsh-better-workbench-frame-source { flex: none; padding: 6px 12px; font: var(--dsw-font-xs-13); overflow-wrap: anywhere; }
.dsh-better-workbench-frame-source summary { cursor: pointer; color: var(--dsw-alias-label-tertiary); }
.dsh-better-workbench-frame-source span, .dsh-better-workbench-frame-source a { display: block; margin-top: 4px; }
.dsh-better-workbench-frame-status { color: var(--dsw-alias-label-secondary); }
/* Background config writes must not resize or cover the application surface. */
.dsh-better-workbench-save-status { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0; }
.dsh-better-workbench-frame-error { color: var(--dsw-alias-state-error-primary); }
.dsh-better-workbench-frame > .dsh-better-workbench-home { flex: 1; min-height: 0; }
.dsh-better-workbench-capsule > .dsh-better-workbench-frame { max-height: inherit; }
.dsh-better-workbench-home-add-button:disabled,
.dsh-better-workbench-sidebar-icon-button:disabled,
.dsh-better-workbench-sidebar-row-action:disabled { cursor: default; opacity: .5; }
@media (hover: none), (pointer: coarse) {
  .dsh-better-workbench-sidebar-row-actions { display: inline-flex; }
  .dsh-better-workbench-sidebar-row-action { width: 28px; height: 28px; }
}

.dsh-better-workbench-center-body {
  display: flex;
  flex: 1;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
}
.dsh-better-workbench-center-secondary {
  flex: none;
  width: 224px;
  min-height: 0;
  overflow: auto;
  border-right: 1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-specific-sidebar-fill);
}
.dsh-better-workbench-center-main {
  flex: 1;
  min-width: 0;
  min-height: 0;
  overflow: auto;
}
/* Keep both Workbench scroll surfaces usable without permanent visual rails. */
.dsh-better-workbench-center-secondary,
.dsh-better-workbench-center-main { scrollbar-width: thin; scrollbar-gutter: stable; scrollbar-color: transparent transparent; }
.dsh-better-workbench-center-secondary::-webkit-scrollbar,
.dsh-better-workbench-center-main::-webkit-scrollbar { width: 6px; height: 6px; }
.dsh-better-workbench-center-secondary::-webkit-scrollbar-thumb,
.dsh-better-workbench-center-main::-webkit-scrollbar-thumb { background: transparent; }
.dsh-better-workbench-center-secondary:hover,
.dsh-better-workbench-center-secondary:focus-within,
.dsh-better-workbench-center-main:hover,
.dsh-better-workbench-center-main:focus-within { scrollbar-width: thin; scrollbar-color: var(--dsw-alias-border-l3) transparent; }
.dsh-better-workbench-center-secondary:hover::-webkit-scrollbar,
.dsh-better-workbench-center-secondary:focus-within::-webkit-scrollbar,
.dsh-better-workbench-center-main:hover::-webkit-scrollbar,
.dsh-better-workbench-center-main:focus-within::-webkit-scrollbar { width: 6px; height: 6px; }
.dsh-better-workbench-center-secondary:hover::-webkit-scrollbar-thumb,
.dsh-better-workbench-center-secondary:focus-within::-webkit-scrollbar-thumb,
.dsh-better-workbench-center-main:hover::-webkit-scrollbar-thumb,
.dsh-better-workbench-center-main:focus-within::-webkit-scrollbar-thumb { border-radius: 6px; background: var(--dsw-alias-border-l3); }
.dsh-better-workbench-center-secondary::-webkit-scrollbar-track,
.dsh-better-workbench-center-main::-webkit-scrollbar-track { background: transparent; }
.dsh-better-workbench-unavailable {
  display: grid;
  justify-items: center;
  gap: 8px;
  max-width: 430px;
  margin: auto;
  padding: 28px;
  color: var(--dsw-alias-label-secondary);
  text-align: center;
}
.dsh-better-workbench-unavailable strong { color: var(--dsw-alias-label-primary); }
.dsh-better-workbench-unavailable > button { margin-top: 8px; }
.dsh-better-workbench-home {
  width: 100%;
  min-height: 100%;
  overflow: auto;
  padding: 40px clamp(24px, 6cqw, 72px) 64px;
  color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-bg-base);
}
.dsh-better-workbench-home-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  max-width: 1040px;
  margin: 0 auto 36px;
}
.dsh-better-workbench-home-header > div:first-child { min-width: 0; }
.dsh-better-workbench-home-header span:first-child {
  display: block;
  margin-bottom: 4px;
  color: var(--dsw-alias-label-tertiary);
  font: var(--dsw-font-xs-13);
}
.dsh-better-workbench-home-header h1 {
  margin: 0;
  font-size: 28px;
  line-height: 36px;
  font-weight: 650;
  letter-spacing: 0;
}
.dsh-better-workbench-home-actions { flex: none; display: flex; align-items: center; }
.dsh-better-workbench-home-add-button {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 44px;
  border: 1px dashed var(--dsw-alias-border-l3);
  border-radius: 12px;
  padding: 0 14px;
  cursor: pointer;
  color: var(--dsw-alias-label-primary);
  background: transparent;
  font: var(--dsw-font-s-14);
}
.dsh-better-workbench-home-add-button:hover { background: var(--dsw-alias-interactive-bg-hover); }
.dsh-better-workbench-home-add-button:focus-visible {
  outline: 2px solid var(--dsw-alias-state-business-primary);
  outline-offset: 2px;
}
.dsh-better-workbench-home-add-button[aria-expanded="true"] { background: var(--dsw-alias-interactive-bg-hover); }
.dsh-better-workbench-home-section {
  max-width: 1040px;
  margin: 0 auto 36px;
}
.dsh-better-workbench-home-section-heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
}
.dsh-better-workbench-home-section-heading h2 {
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  letter-spacing: 0;
}
.dsh-better-workbench-home-section-heading span { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xs-13); }
.dsh-better-workbench-home-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(268px, 1fr));
  grid-auto-rows: 1fr;
  gap: 12px;
}
.dsh-better-workbench-home-grid + .dsh-better-workbench-home-grid { margin-top: 12px; }
.dsh-better-workbench-home-card {
  display: flex;
  min-width: 0;
  min-height: 184px;
  flex-direction: column;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 12px;
  overflow: hidden;
  background: var(--dsw-alias-bg-layer-3);
  transition: border-color .16s, background .16s;
}
.dsh-better-workbench-home-card:hover:not([data-disabled="true"]) {
  border-color: var(--dsw-alias-label-dimmed);
}
.dsh-better-workbench-home-card[data-disabled="true"] {
  border-color: var(--dsw-alias-state-error-primary);
}
.dsh-better-workbench-home-card-main {
  flex: 1;
  appearance: none;
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 8px;
  border: 0;
  border-radius: 12px 12px 0 0;
  padding: 14px 16px 12px;
  color: inherit;
  background: transparent;
  text-align: left;
  font: inherit;
  cursor: pointer;
}
.dsh-better-workbench-home-card-main:hover:not(:disabled) { background: var(--dsw-alias-bg-layer-2); }
.dsh-better-workbench-home-card-main:disabled { cursor: default; }
.dsh-better-workbench-home-card-main:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary);
  outline-offset: -2px;
}
.dsh-better-workbench-home-card-head {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 8px;
}
.dsh-better-workbench-home-card-name {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
}
.dsh-better-workbench-home-card-badge {
  flex: none;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 999px;
  padding: 1px 8px;
  color: var(--dsw-alias-label-tertiary);
  font-size: 11px;
  font-weight: 500;
  line-height: 17px;
  white-space: nowrap;
}
.dsh-better-workbench-home-card-description {
  display: -webkit-box;
  min-height: 42px;
  overflow: hidden;
  color: var(--dsw-alias-label-secondary);
  font-size: 13px;
  line-height: 1.55;
  overflow-wrap: anywhere;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
.dsh-better-workbench-home-card-id {
  min-width: 0;
  margin-top: auto;
  overflow: hidden;
  color: var(--dsw-alias-label-dimmed);
  font-family: var(--dsw-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
  font-size: 11px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dsh-better-workbench-home-card-foot {
  display: flex;
  min-height: 34px;
  align-items: center;
  justify-content: flex-end;
  padding: 6px 12px;
  border-top: 1px solid var(--dsw-alias-border-l2);
  color: var(--dsw-alias-label-tertiary);
  font-size: 12px;
  line-height: 18px;
}
.dsh-better-workbench-home-card[data-disabled="true"] .dsh-better-workbench-home-card-foot { color: var(--dsw-alias-state-error-primary); }
.dsh-better-workbench-home-empty {
  display: grid;
  justify-items: start;
  gap: 6px;
  width: 100%;
  min-height: 136px;
  align-content: center;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 8px;
  padding: 16px;
  color: var(--dsw-alias-label-tertiary);
  background: var(--dsw-alias-bg-base);
  text-align: left;
}
.dsh-better-workbench-home-empty strong { color: var(--dsw-alias-label-primary); font: var(--dsw-font-s-strong-14); }
.dsh-better-workbench-home-empty span { font: var(--dsw-font-xs-13); }
.dsh-better-workbench-home-empty > button { margin-top: 4px; }
.dsh-better-workbench-center[data-kind="panel"],
.dsh-better-workbench-center[data-kind="capsule"] {
  pointer-events: none;
  background: transparent;
}
.dsh-better-workbench-panel,
.dsh-better-workbench-capsule {
  position: absolute;
  pointer-events: auto;
  color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-bg-layer-2);
  box-shadow: var(--dsw-shadow-lv3);
}
.dsh-better-workbench-center[data-kind="panel"][data-placement="right"] .dsh-better-workbench-panel {
  top: 0;
  right: 0;
  bottom: 0;
  width: var(--workbench-panel-size, min(360px, 100%));
  border-left: 1px solid var(--dsw-alias-border-l2);
  overflow: auto;
}
.dsh-better-workbench-center[data-kind="panel"][data-placement="bottom"] .dsh-better-workbench-panel {
  right: 0;
  bottom: 0;
  left: 0;
  height: var(--workbench-panel-size, min(280px, 55%));
  border-top: 1px solid var(--dsw-alias-border-l2);
  overflow: auto;
}
.dsh-better-workbench-capsule {
  right: 16px;
  bottom: 16px;
  max-width: min(420px, calc(100% - 32px));
  max-height: min(320px, calc(100% - 32px));
  overflow: auto;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
}
@container (max-width: 170px) {
  .dsh-better-workbench-sidebar-section { padding-right: 0; }
  .dsh-better-workbench-sidebar-heading { justify-content: flex-start; gap: 0; padding-left: 0; margin-right: 0; margin-bottom: 12px; }
  .dsh-better-workbench-sidebar-heading-label,
  .dsh-better-workbench-sidebar-search-slot,
  .dsh-better-workbench-sidebar-wide-only,
  .dsh-better-workbench-sidebar-empty { display: none; }
  .dsh-better-workbench-sidebar-heading-actions { max-width: none; }
  .dsh-better-workbench-sidebar-add { width: 36px; height: 36px; }
  .dsh-better-workbench-sidebar-rail-search { display: block; width: 36px; height: 36px; margin-bottom: 12px; }
  .dsh-better-workbench-sidebar-rail-search .dsh-better-workbench-sidebar-search-button { width: 36px; height: 36px; color: var(--dsw-alias-label-primary); }
  .dsh-better-workbench-sidebar-list { justify-items: center; }
  .dsh-better-workbench-sidebar-row { width: 36px; justify-content: center; padding: 0; }
  .dsh-better-workbench-sidebar-row-label,
  .dsh-better-workbench-sidebar-row-actions { display: none; }
  .dsh-better-workbench-sidebar-rail-icon { display: block; color: var(--dsw-alias-label-primary); }
}
@container (max-width: 720px) {
  .dsh-better-workbench-home { padding: 24px 16px 48px; }
  .dsh-better-workbench-home-header { align-items: center; margin-bottom: 28px; }
  .dsh-better-workbench-home-header h1 { font-size: 22px; line-height: 30px; }
  .dsh-better-workbench-home-section-heading { align-items: flex-start; flex-direction: column; gap: 2px; }
  .dsh-better-workbench-home-grid { grid-template-columns: minmax(0, 1fr); gap: 10px; }
  .dsh-better-workbench-home-card { min-height: 128px; }
  .dsh-better-workbench-center-body { flex-direction: column; overflow: auto; scrollbar-width: none; }
  .dsh-better-workbench-center-body::-webkit-scrollbar { width: 0; height: 0; }
  .dsh-better-workbench-center-secondary { width: 100%; min-height: auto; overflow: visible; border-right: 0; border-bottom: 1px solid var(--dsw-alias-border-l2); }
  .dsh-better-workbench-center-main { flex: none; overflow: visible; }
}
@media (prefers-reduced-motion: reduce) {
  .dsh-better-workbench-sidebar-heading-label,
  .dsh-better-workbench-sidebar-search-slot,
  .dsh-better-workbench-sidebar-search,
  .dsh-better-workbench-sidebar-search-input,
  .dsh-better-workbench-sidebar-heading-actions { transition: none; }
}
`;
		// src/client/WebsiteIcon.tsx
		function imageUrl(value) {
			if (!value) return void 0;
			try {
				const parsed = new URL(value);
				if ((parsed.protocol === "https:" || parsed.protocol === "http:") && !parsed.username && !parsed.password) return parsed;
			} catch {
				return;
			}
		}
		function Favicon({ src, size }) {
			const filterId = `dsh-website-favicon-${(0, react.useId)()}`;
			const [state, setState] = (0, react.useState)("loading");
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [state !== "ready" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconGlobeOutlineRegular, { size }), state !== "error" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				width: "0",
				height: "0",
				"aria-hidden": "true",
				focusable: "false",
				style: {
					position: "absolute",
					pointerEvents: "none"
				},
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("filter", {
					id: filterId,
					x: "0",
					y: "0",
					width: "100%",
					height: "100%",
					colorInterpolationFilters: "sRGB",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("feColorMatrix", {
							in: "SourceGraphic",
							type: "saturate",
							values: "0",
							result: "gray"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("feColorMatrix", {
							in: "gray",
							type: "matrix",
							values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -0.65 0 0 0 1",
							result: "tone"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("feComposite", {
							in: "tone",
							in2: "SourceAlpha",
							operator: "in",
							result: "mask"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("feFlood", {
							floodColor: "currentColor",
							result: "ink"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("feComposite", {
							in: "ink",
							in2: "mask",
							operator: "in"
						})
					]
				}) })
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
				src,
				alt: "",
				width: size,
				height: size,
				draggable: false,
				referrerPolicy: "no-referrer",
				onLoad: () => {
					setState("ready");
				},
				onError: () => {
					setState("error");
				},
				style: {
					position: "absolute",
					inset: 0,
					display: "block",
					width: "100%",
					height: "100%",
					objectFit: "contain",
					filter: `url("#${filterId}")`,
					opacity: state === "ready" ? 1 : 0
				}
			})] })] });
		}
		function WebsiteIcon({ url, faviconUrl, size = 16, className }) {
			const website = imageUrl(url);
			const src = imageUrl(faviconUrl)?.href ?? (website ? new URL("/favicon.ico", website.origin).href : void 0);
			const edge = Number.isFinite(size) && size > 0 ? size : 16;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className,
				"aria-hidden": "true",
				"data-dsh-website-icon": "",
				style: {
					position: "relative",
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					flex: "none",
					width: edge,
					height: edge,
					lineHeight: 0,
					verticalAlign: "middle"
				},
				children: src ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Favicon, {
					src,
					size: edge
				}, src) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconGlobeOutlineRegular, { size: edge })
			});
		}
		// src/client/WebsiteCreate.tsx
		function WebsiteCreate({ config, disabled, onChange }) {
			const [input, setInput] = (0, react.useState)(String(config.url ?? ""));
			const [touched, setTouched] = (0, react.useState)(false);
			const [previewUrl, setPreviewUrl] = (0, react.useState)("");
			const [modeOpen, setModeOpen] = (0, react.useState)(false);
			const errorId = (0, react.useId)();
			let normalized = "", error = "";
			try {
				normalized = normalizeWebsiteUrl(input);
			} catch (reason) {
				error = reason.message;
			}
			const origin = normalized ? new URL(normalized).origin : "";
			const trusted = !!origin && config.trustedOrigin === origin;
			const external = config.openMode === "external";
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-better-workbench-website-create",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					className: "dsh-better-workbench-create-field",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "网页地址" }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
							autoFocus: true,
							type: "text",
							inputMode: "url",
							autoComplete: "url",
							spellCheck: false,
							className: "dsh-better-workbench-create-input",
							icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(WebsiteIcon, { url: previewUrl || void 0 }),
							placeholder: "https://example.com",
							"aria-label": "网页地址",
							"aria-invalid": touched && !!error,
							"aria-describedby": touched && error ? errorId : void 0,
							value: input,
							disabled,
							onChange: (event) => {
								const value = event.target.value;
								setInput(value);
								setPreviewUrl("");
								let url = value, nextOrigin = "", title;
								try {
									url = normalizeWebsiteUrl(value);
									nextOrigin = new URL(url).origin;
									title = websiteName(url);
								} catch {}
								onChange({
									...config,
									url,
									trustedOrigin: nextOrigin === config.trustedOrigin ? nextOrigin : ""
								}, title);
							},
							onBlur: () => {
								setTouched(true);
								if (normalized) {
									setInput(normalized);
									setPreviewUrl(normalized);
								}
							}
						}),
						touched && error && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							id: errorId,
							role: "alert",
							className: "dsh-better-workbench-create-error",
							children: error
						})
					]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "dsh-better-workbench-create-options",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-better-workbench-create-setting-row",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "dsh-better-workbench-create-setting-label",
							children: "打开方式"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Menu, {
							open: modeOpen && !disabled,
							onClose: () => setModeOpen(false),
							portal: true,
							dense: true,
							align: "end",
							selectedId: external ? "external" : "embedded",
							items: [{
								id: "embedded",
								label: "工作台内"
							}, {
								id: "external",
								label: "浏览器新标签页"
							}],
							onSelect: (mode) => {
								if (disabled || mode !== "external" && mode !== "embedded") return;
								onChange({
									...config,
									openMode: mode,
									trustedOrigin: mode === "external" ? "" : config.trustedOrigin ?? ""
								});
								setModeOpen(false);
							},
							anchor: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								type: "button",
								variant: "ghost",
								size: "sm",
								className: "dsh-better-workbench-create-select",
								"aria-label": "打开方式",
								"aria-haspopup": "menu",
								"aria-expanded": modeOpen && !disabled,
								disabled,
								onClick: () => setModeOpen((value) => !value),
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: external ? "浏览器新标签页" : "工作台内" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, { size: 14 })]
							})
						})]
					}), !external && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-better-workbench-create-setting-row dsh-better-workbench-create-trust",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-better-workbench-create-setting-copy",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "dsh-better-workbench-create-setting-label",
								children: "信任此站点"
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "dsh-better-workbench-website-permission",
								children: "兼容模式允许站点使用自身 Cookie 和存储，可改善字体、样式和交互异常，但会降低隔离，仅用于可信站点。"
							})]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Switch, {
							label: "信任此站点并启用兼容模式",
							checked: trusted,
							disabled: disabled || !origin,
							title: !origin ? "请先填写有效的网页地址" : "启用兼容模式",
							onChange: (checked) => onChange({
								...config,
								trustedOrigin: checked ? origin : ""
							})
						})]
					})]
				})]
			});
		}
		// src/client/WebsiteView.tsx
		const FRAME_SANDBOX = "allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads";
		function destination(value) {
			if (typeof value !== "string") return void 0;
			try {
				const url = new URL(value);
				if ((url.protocol === "http:" || url.protocol === "https:") && !url.username && !url.password) return url;
			} catch {}
		}
		function ExternalFallback({ label, url }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-better-workbench-website-fallback",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconWarningOutlineRegular, { size: 24 })
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						role: "status",
						children: label
					}),
					url && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("a", {
						className: "dsh-better-workbench-website-external",
						href: url,
						target: "_blank",
						rel: "noopener noreferrer",
						referrerPolicy: "no-referrer",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconRightUpOutlineRegular, {}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "在浏览器打开" })]
					})
				]
			});
		}
		function EmbeddedWebsite({ url, title, trusted }) {
			const [failed, setFailed] = (0, react.useState)(false);
			if (failed) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ExternalFallback, {
				label: "网页加载失败",
				url
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("iframe", {
				className: "dsh-better-workbench-website-iframe",
				src: url,
				title,
				sandbox: trusted ? FRAME_SANDBOX + " allow-same-origin" : FRAME_SANDBOX,
				referrerPolicy: "no-referrer",
				onError: () => setFailed(true)
			});
		}
		/** The webpage owns the full center surface; controls live in its sidebar menu. */
		function WebsiteView({ instance }) {
			const url = destination(instance.config.url);
			const sameOrigin = url !== void 0 && (typeof window === "undefined" || url.origin === window.location.origin);
			const externalOnly = instance.config.openMode === "external";
			const embedBlocked = instance.config.embedBlocked === true;
			const trusted = url !== void 0 && instance.config.trustedOrigin === url.origin;
			const mixedContent = url?.protocol === "http:" && typeof window !== "undefined" && window.location.protocol === "https:";
			const canEmbed = url !== void 0 && !sameOrigin && !externalOnly && !embedBlocked && !mixedContent;
			const fallback = url === void 0 ? "网址无效" : sameOrigin || mixedContent ? "此地址仅可在浏览器打开" : embedBlocked ? "此网站不可嵌入" : "外部打开";
			const title = instance.title || url?.hostname || "网站";
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("section", {
				className: "dsh-better-workbench-website",
				"aria-label": title,
				children: canEmbed && url ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(EmbeddedWebsite, {
					url: url.href,
					title,
					trusted
				}, JSON.stringify([
					instance.instanceId,
					url.href,
					trusted
				])) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ExternalFallback, {
					label: fallback,
					url: url?.href
				})
			});
		}
		// src/client/website-app.tsx
		function InstanceIcon({ instance, ...props }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(WebsiteIcon, {
				...props,
				url: typeof instance?.config.url === "string" ? instance.config.url : void 0,
				faviconUrl: typeof instance?.config.faviconUrl === "string" ? instance.config.faviconUrl : void 0
			});
		}
		function websiteApp() {
			return {
				protocolVersion: 1,
				appId: WEBSITE_APP_ID,
				title: "网页",
				allowMultiple: true,
				config: {
					version: 1,
					defaults: () => ({
						url: "",
						openMode: "embedded"
					}),
					validate: validateWebsiteConfig,
					validateCreation: validateWebsiteCreation
				},
				presentations: [{
					kind: "page",
					conversation: "exclusive"
				}],
				defaultPresentation: "page",
				renderIcon: InstanceIcon,
				renderCreate: WebsiteCreate,
				renderMain: WebsiteView
			};
		}
		function websiteTemplate() {
			return {
				templateId: WEBSITE_TEMPLATE_ID,
				kind: "instance",
				appId: WEBSITE_APP_ID,
				title: "从网页地址创建",
				defaultTitle: "",
				defaultConfig: {
					url: "",
					openMode: "embedded"
				}
			};
		}
		// src/client/website-view-styles.ts
		const WEBSITE_VIEW_STYLE = `
.dsh-better-workbench-center-body:has(> .dsh-better-workbench-center-main > .dsh-better-workbench-website) { overflow: hidden; }
.dsh-better-workbench-center-main:has(> .dsh-better-workbench-website) { display: flex; flex: 1; min-height: 0; overflow: hidden; scrollbar-gutter: auto; }
.dsh-better-workbench-website { display: flex; flex: 1; flex-direction: column; width: 100%; height: 100%; min-width: 0; min-height: 0; overflow: hidden; color: var(--dsw-alias-label-primary); background: var(--dsw-alias-bg-base); font: var(--dsw-font-s-14); letter-spacing: 0; }
.dsh-better-workbench-website-iframe { display: block; flex: 1; width: 100%; height: 100%; min-width: 0; min-height: 0; border: 0; background: var(--dsw-alias-bg-base); }
.dsh-better-workbench-website-fallback { display: flex; flex: 1; flex-direction: column; align-items: center; justify-content: center; gap: 12px; min-width: 0; min-height: 0; padding: 20px; overflow: auto; color: var(--dsw-alias-label-secondary); text-align: center; overflow-wrap: anywhere; }
.dsh-better-workbench-website-fallback p { max-width: 100%; margin: 0; }
.dsh-better-workbench-website-external { display: inline-flex; align-items: center; gap: 4px; min-height: 24px; max-width: 100%; color: var(--dsw-alias-label-primary); text-decoration: none; overflow-wrap: anywhere; }
.dsh-better-workbench-website-external:hover { text-decoration: underline; }
.dsh-better-workbench-website-external:focus-visible { outline: 2px solid var(--dsw-alias-state-business-primary); outline-offset: 2px; }
`;
		// src/client/creation-styles.ts
		const CREATION_STYLE = `
.dsh-better-workbench-create-dialog { width: min(560px, calc(100vw - 32px)); max-height: calc(100dvh - 32px); border-radius: 32px; corner-shape: superellipse(1.5); }
.dsh-better-workbench-create-content { overflow-y: auto; min-height: 0; }
.dsh-better-workbench-create-dialog *, .dsh-better-workbench-website-create * { box-sizing: border-box; }
.dsh-better-workbench-create-dialog input { font: var(--dsw-font-s-14); color: var(--dsw-alias-label-primary); }
.dsh-better-workbench-create-search { display: block; width: 100%; min-width: 0; height: 38px; padding: 8px 10px; border: 1px solid var(--dsw-alias-border-l2); border-radius: 6px; background: var(--dsw-alias-bg-base); }
.dsh-better-workbench-create-search:focus { outline: 2px solid var(--dsw-alias-state-business-primary); outline-offset: 1px; }
.dsh-better-workbench-create-input { width: 100%; min-width: 0; }
.dsh-better-workbench-create-input:has(input[aria-invalid="true"]) { border-color: var(--dsw-alias-state-error-primary); }
.dsh-better-workbench-create-input:has(input:disabled) { opacity: .6; }
.dsh-better-workbench-create-choices { display: flex; flex-direction: column; margin-top: 12px; gap: 4px; }
.dsh-better-workbench-create-choice { display: flex; align-items: center; width: 100%; min-height: 52px; gap: 12px; padding: 10px; background: transparent; color: var(--dsw-alias-label-primary); border: 1px solid transparent; border-radius: 6px; cursor: pointer; text-align: left; font: var(--dsw-font-s-14); }
.dsh-better-workbench-create-choice:hover { background: var(--dsw-alias-interactive-bg-hover); }
.dsh-better-workbench-create-choice:focus-visible { outline: 2px solid var(--dsw-alias-state-business-primary); outline-offset: -2px; }
.dsh-better-workbench-create-choice:disabled { opacity: .5; cursor: default; }
.dsh-better-workbench-create-choice > svg, .dsh-better-workbench-create-choice-icon { display: inline-flex; align-items: center; justify-content: center; flex: none; width: 16px; height: 16px; line-height: 0; color: var(--dsw-alias-label-secondary); }
.dsh-better-workbench-create-choice-icon svg { display: block; }
.dsh-better-workbench-create-choice-label { flex: 1; min-width: 0; overflow-wrap: anywhere; }
.dsh-better-workbench-create-choice-kind { flex: none; font: var(--dsw-font-xs-13); color: var(--dsw-alias-label-tertiary); }
.dsh-better-workbench-create-spacer { flex: 1; }
.dsh-better-workbench-create-form, .dsh-better-workbench-website-create { display: flex; flex-direction: column; gap: 20px; }
.dsh-better-workbench-create-step { margin-bottom: 18px; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xs-13); }
.dsh-better-workbench-create-field { display: flex; flex-direction: column; gap: 8px; margin: 0 0 18px; font: var(--dsw-font-s-14); }
.dsh-better-workbench-create-field > input { display: block; width: 100%; min-width: 0; height: 38px; padding: 8px 10px; border: 1px solid var(--dsw-alias-border-l2); border-radius: 6px; background: var(--dsw-alias-bg-base); }
.dsh-better-workbench-create-field > input:focus { outline: 2px solid var(--dsw-alias-state-business-primary); outline-offset: 1px; }
.dsh-better-workbench-create-form .dsh-better-workbench-create-field, .dsh-better-workbench-website-create .dsh-better-workbench-create-field { margin: 0; }
.dsh-better-workbench-create-form .dsh-better-workbench-create-field > span:first-child { color: var(--dsw-alias-label-secondary); }
.dsh-better-workbench-create-error { color: var(--dsw-alias-state-error-primary); font: var(--dsw-font-xs-13); margin: 8px 0 12px; overflow-wrap: anywhere; }
.dsh-better-workbench-create-form .dsh-better-workbench-create-error { margin: 0; }
.dsh-better-workbench-create-empty { padding: 28px 0; text-align: center; color: var(--dsw-alias-label-tertiary); }
.dsh-better-workbench-create-options { border-top: .5px solid var(--dsw-alias-border-l2); }
.dsh-better-workbench-create-setting-row { display: flex; align-items: center; justify-content: space-between; gap: 20px; min-height: 56px; padding: 14px 0; }
.dsh-better-workbench-create-setting-row + .dsh-better-workbench-create-setting-row { border-top: .5px solid var(--dsw-alias-border-l2); }
.dsh-better-workbench-create-setting-label { font: var(--dsw-font-s-14); color: var(--dsw-alias-label-primary); }
.dsh-better-workbench-create-setting-copy { display: flex; flex: 1; flex-direction: column; gap: 6px; min-width: 0; }
.dsh-better-workbench-create-select { gap: 8px; max-width: 100%; }
.dsh-better-workbench-create-select > svg { display: block; flex: none; }
.dsh-better-workbench-home-card { border-radius: 8px; min-height: 150px; }
.dsh-better-workbench-home-card-main { border-radius: 8px 8px 0 0; }
.dsh-better-workbench-home-card-foot { border: 0; border-top: 1px solid var(--dsw-alias-border-l2); background: transparent; cursor: pointer; color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-better-workbench-home-card-foot:hover { background: var(--dsw-alias-interactive-bg-hover); }
.dsh-better-workbench-home-instance-icon { display: flex; flex: none; width: 16px; height: 16px; color: var(--dsw-alias-label-secondary); }
.dsh-better-workbench-home-card-name { white-space: normal; overflow-wrap: anywhere; }
.dsh-better-workbench-home-grid { grid-template-columns: repeat(auto-fill, minmax(min(268px, 100%), 1fr)); }
.dsh-better-workbench-website-setting { display: flex; align-items: center; gap: 8px; margin: 0 0 16px; font: var(--dsw-font-s-14); }
.dsh-better-workbench-create-trust { align-items: flex-start; padding-bottom: 0; }
.dsh-better-workbench-create-trust > button { margin-top: 1px; }
.dsh-better-workbench-create-trust .dsh-better-workbench-website-permission { margin: 0; line-height: 20px; }
.dsh-better-workbench-website-permission { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); line-height: 1.6; overflow-wrap: anywhere; }
.dsh-better-workbench-home-header { flex-wrap: wrap; }
.dsh-better-workbench-home-header h1 { white-space: nowrap; }
@container (max-width: 420px) {
  .dsh-better-workbench-home { padding: 20px 12px; }
  .dsh-better-workbench-home-header { flex-direction: column; align-items: flex-start; }
}
@media (max-width: 600px) {
  .dsh-better-workbench-create-dialog { width: calc(100vw - 24px); max-height: calc(100dvh - 24px); }
  .dsh-better-workbench-home-header { gap: 12px; }
  .dsh-better-workbench-create-choice { gap: 8px; padding-inline: 6px; }
}
`;
		// src/client/workbench-reference.ts
		const WORKBENCH_REFERENCE_SOURCE = "workbench";
		function escapeXml(value) {
			return value.replace(/[&<>"']/g, (character) => ({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				"\"": "&quot;",
				"'": "&apos;"
			})[character]);
		}
		function findInstance(service, ref) {
			const instance = service.getSnapshot().instances.find((item) => item.instanceId === ref);
			if (!instance) throw new Error("引用的工作台已删除，请重新选择");
			if (!instance.available) throw new Error("引用的工作台应用暂不可用");
			return instance;
		}
		/** One unified source for every application; no app-specific serializers or config export. */
		function createWorkbenchReferenceSource(service) {
			return {
				trigger: "@",
				name: WORKBENCH_REFERENCE_SOURCE,
				order: 10,
				showGroupTitle: false,
				async candidates(_session, request) {
					if (request.signal.aborted || request.quoted) return [];
					await service.ready;
					if (request.signal.aborted) return [];
					const query = request.query.trim().toLocaleLowerCase();
					const snapshot = service.getSnapshot();
					return snapshot.instances.filter((instance) => instance.available && (query === "" || instance.title.toLocaleLowerCase().includes(query))).slice(0, 50).map((instance) => ({
						name: instance.title,
						description: (snapshot.apps.find((app) => app.appId === instance.appId)?.title ?? instance.appId) + " · " + instance.instanceId,
						section: "工作台",
						value: instance.instanceId
					}));
				},
				onPick({ candidate }) {
					const instance = findInstance(service, candidate.value ?? "");
					return { insert: {
						source: WORKBENCH_REFERENCE_SOURCE,
						ref: instance.instanceId,
						label: instance.title,
						clipboardText: "@" + instance.title
					} };
				},
				codec: {
					clipboardText: (ref) => "@" + findInstance(service, ref).title,
					async serialize(ref, signal) {
						signal.throwIfAborted();
						const instance = findInstance(service, ref);
						return "<workbench instance_id=\"" + escapeXml(instance.instanceId) + "\" app_id=\"" + escapeXml(instance.appId) + "\" title=\"" + escapeXml(instance.title) + "\" />";
					}
				}
			};
		}
		/** The caller owns the returned disposer in the inputTriggers injection scope. */
		function registerWorkbenchReference(ctx, service) {
			const inputTriggers = ctx.get("inputTriggers");
			if (!inputTriggers) throw new Error("Workbench references require inputTriggers");
			const source = createWorkbenchReferenceSource(service);
			const lifetime = new AbortController();
			const unregister = inputTriggers.registerSource({
				...source,
				async candidates(session, request) {
					if (lifetime.signal.aborted) return [];
					const result = await source.candidates(session, request);
					return lifetime.signal.aborted ? [] : result;
				},
				onPick(pick) {
					lifetime.signal.throwIfAborted();
					return source.onPick(pick);
				},
				codec: {
					clipboardText(ref) {
						lifetime.signal.throwIfAborted();
						return source.codec.clipboardText(ref);
					},
					async serialize(ref, signal) {
						lifetime.signal.throwIfAborted();
						return source.codec.serialize(ref, signal);
					}
				}
			});
			return () => {
				if (lifetime.signal.aborted) return;
				lifetime.abort();
				unregister();
			};
		}
		// src/client/panel-navigation.ts
		function isPanelLayout(value) {
			if (typeof value !== "object" || value === null) return false;
			const layout = value;
			const info = layout.panelInfo;
			return typeof layout.selectPanel === "function" && typeof info?.getSnapshot === "function" && typeof info.subscribe === "function";
		}
		/**
		* A workbench is drawn over the main column, so a global panel (Plugins, Schedules, ...)
		* selected underneath it stays hidden. Keep the two exclusive in both directions:
		* selecting a panel closes the workbench, and opening a workbench clears the panel
		* selection so selecting the same panel again is a real change.
		* @returns a disposer for both subscriptions.
		*/
		function bindPanelNavigation(service, layout) {
			if (!isPanelLayout(layout)) return () => {};
			let active = true;
			const open = () => service.getSnapshot().route.kind !== "conversation";
			const unsubscribePanel = layout.panelInfo.subscribe(() => {
				if (!active || layout.panelInfo.getSnapshot().activePanelId === null || !open()) return;
				service.close();
				if (open()) layout.selectPanel(null);
			});
			const unsubscribeService = service.subscribe(() => {
				if (!active || !open() || layout.panelInfo.getSnapshot().activePanelId === null) return;
				layout.selectPanel(null);
			});
			return () => {
				active = false;
				unsubscribePanel();
				unsubscribeService();
			};
		}
		// src/client/index.ts
		var MountBoundary = class extends react.Component {
			state = { failed: false };
			static getDerivedStateFromError() {
				return { failed: true };
			}
			componentDidMount() {
				this.props.ready(!this.state.failed);
			}
			componentDidCatch(error) {
				this.props.ready(false);
				console.error("Workbench surface failed:", error);
			}
			render() {
				return this.state.failed ? null : this.props.children;
			}
		};
		function renderSurface(host, content, ready) {
			const root = (0, react_dom_client.createRoot)(host);
			try {
				root.render((0, react.createElement)(MountBoundary, {
					ready,
					children: content
				}));
			} catch (error) {
				root.unmount();
				throw error;
			}
			return () => root.unmount();
		}
		/** Mount the service and reversible compatibility surfaces in this Cordis lifetime. */
		function apply(ctx) {
			const service = new WorkbenchController();
			ctx.effect(() => () => service.dispose(), "dsh-better-workbench: controller lifetime");
			ctx.effect(() => {
				const beforeUnload = (event) => {
					if (service.getSnapshot().dirtyInstanceIds.length === 0) return;
					event.preventDefault();
					event.returnValue = "";
				};
				window.addEventListener("beforeunload", beforeUnload);
				return () => {
					window.removeEventListener("beforeunload", beforeUnload);
				};
			}, "dsh-better-workbench: unsaved changes warning");
			ctx.inject(["inputTriggers"], (scope) => {
				scope.effect(() => registerWorkbenchReference(scope, service), "dsh-better-workbench: @ reference source");
			});
			ctx.inject(["layout"], (scope) => {
				scope.effect(() => bindPanelNavigation(service, scope.get("layout")), "dsh-better-workbench: global panel navigation");
			});
			ctx.effect(() => service.registerApp(websiteApp()), "dsh-better-workbench: webpage application");
			ctx.effect(() => service.registerTemplate(websiteTemplate()), "dsh-better-workbench: webpage template");
			ctx.effect(() => ctx.reflect.provide("workbench", service), "dsh-better-workbench: service");
			ctx.effect(() => mountWorkbenchDom(service, {
				style: WORKBENCH_STYLE + CREATION_STYLE + WEBSITE_VIEW_STYLE,
				getSessions: () => ctx.get("sessions"),
				renderSidebar: (host, ready) => renderSurface(host, (0, react.createElement)(WorkbenchSidebar, { service }), ready),
				renderCenter: (host, ready) => renderSurface(host, (0, react.createElement)(WorkbenchSurface, { service }), ready)
			}), "dsh-better-workbench: DOM surfaces");
		}
		exports.WORKBENCH_REFERENCE_SOURCE = WORKBENCH_REFERENCE_SOURCE;
		exports.apply = apply;
		exports.createWorkbenchReferenceSource = createWorkbenchReferenceSource;
		exports.resolveActivePresentation = resolveActivePresentation;
		exports.resolvePresentationLayout = resolvePresentationLayout;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map