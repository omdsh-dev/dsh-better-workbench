window.__ModuleLoader__.load({
	id: "dsh-better-workbench-design-board",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region \0rolldown/runtime.js
		var __create = Object.create;
		var __defProp = Object.defineProperty;
		var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
		var __getOwnPropNames = Object.getOwnPropertyNames;
		var __getProtoOf = Object.getPrototypeOf;
		var __hasOwnProp = Object.prototype.hasOwnProperty;
		var __copyProps = (to, from, except, desc) => {
			if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
				key = keys[i];
				if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
					get: ((k) => from[k]).bind(null, key),
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
			}
			return to;
		};
		var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
			value: mod,
			enumerable: true
		}) : target, mod));
		//#endregion
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		_deepseek_ai_dsh_client_ui_primitives = __toESM(_deepseek_ai_dsh_client_ui_primitives, 1);
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region src/client/icon-gallery-styles.ts
		const ICON_GALLERY_STYLE = `
.dsh-icon-meta { display:flex; flex-wrap:wrap; gap:8px 20px; font:var(--dsw-font-xxs-12); color:var(--dsw-alias-label-tertiary); }
.dsh-icon-meta code { overflow-wrap:anywhere; }
.dsh-icon-library-toolbar { display:flex; align-items:center; flex-wrap:wrap; gap:12px; padding:20px 0; border-bottom:1px solid var(--dsw-alias-border-l1); }
.dsh-icon-library-toolbar > :first-child { flex:1; min-width:180px; }
.dsh-icon-library-toolbar select { max-width:100%; height:32px; border:1px solid var(--dsw-alias-border-l2); border-radius:8px; background:var(--dsw-alias-bg-base); color:var(--dsw-alias-label-primary); padding:0 8px; font:var(--dsw-font-xxs-12); }
.dsh-icon-library-toolbar > span { font:var(--dsw-font-xxs-12); color:var(--dsw-alias-label-tertiary); }
.dsh-icon-library-layout { display:grid; grid-template-columns:minmax(0,1fr) 260px; gap:28px; align-items:start; padding-top:24px; }
.dsh-icon-library-group { margin-bottom:28px; }
.dsh-icon-library-group h2 { display:flex; align-items:center; gap:10px; margin:0 0 14px; font:var(--dsw-font-xs-strong-13); }
.dsh-icon-library-group h2 span { color:var(--dsw-alias-label-tertiary); font:var(--dsw-font-xxxs-11); }
.dsh-icon-library-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(96px,1fr)); gap:8px; }
.dsh-icon-tile { display:flex; flex-direction:column; align-items:center; justify-content:center; gap:4px; min-width:0; height:104px; padding:8px 4px; border:1px solid var(--dsw-alias-border-l1); border-radius:6px; background:var(--dsw-alias-bg-base); color:var(--dsw-alias-label-primary); cursor:pointer; }
.dsh-icon-tile:hover { background:var(--dsw-alias-interactive-bg-hover); }
.dsh-icon-tile[aria-pressed=true] { border-color:var(--dsw-alias-state-business-primary); background:var(--dsw-alias-interactive-bg-hover); }
.dsh-icon-tile:focus-visible, .dsh-icon-library-toolbar select:focus-visible { outline:2px solid var(--dsw-alias-state-business-primary); outline-offset:2px; }
.dsh-icon-tile-glyph { display:flex; align-items:center; justify-content:center; height:32px; width:32px; flex:none; }
.dsh-icon-tile strong { font:var(--dsw-font-xxs-12); text-align:center; overflow-wrap:anywhere; }
.dsh-icon-tile small { font:var(--dsw-font-xxxs-11); color:var(--dsw-alias-label-tertiary); }
.dsh-icon-inspector { position:sticky; top:20px; min-width:0; border-left:1px solid var(--dsw-alias-border-l1); padding-left:20px; }
.dsh-icon-inspector h2 { font:var(--dsw-font-base-strong-16); margin:0 0 6px; }
.dsh-icon-inspector code { font:var(--dsw-font-markdown-code-block-small); overflow-wrap:anywhere; color:var(--dsw-alias-label-tertiary); }
.dsh-icon-inspector-preview { height:132px; display:flex; align-items:center; justify-content:center; margin-top:16px; background:var(--dsw-alias-bg-layer-1); border:1px solid var(--dsw-alias-border-l1); }
.dsh-icon-specimens { display:grid; grid-template-columns:1fr 1fr; }
.dsh-icon-specimens > div { display:flex; align-items:center; justify-content:center; gap:8px; min-height:48px; font:var(--dsw-font-xxxs-11); }
.dsh-icon-inverse { background:var(--dsw-alias-label-primary); color:var(--dsw-alias-bg-base); }
.dsh-icon-inspector dl { margin:16px 0; font:var(--dsw-font-xxs-12); }
.dsh-icon-inspector dl > div { padding:8px 0; border-bottom:1px solid var(--dsw-alias-border-l1); }
.dsh-icon-inspector dt { color:var(--dsw-alias-label-tertiary); margin-bottom:4px; }
.dsh-icon-inspector dd { margin:0; overflow-wrap:anywhere; }
.dsh-icon-inspector pre { white-space:pre-wrap; overflow-wrap:anywhere; font:var(--dsw-font-markdown-code-block-small); padding:12px; background:var(--dsw-alias-bg-layer-1); }
.dsh-icon-contexts { display:grid; gap:10px; font:var(--dsw-font-xxs-12); }
.dsh-icon-contexts > div { display:flex; align-items:center; flex-wrap:wrap; gap:6px; }
.dsh-icon-contexts small { color:var(--dsw-alias-label-tertiary); }
.dsh-icon-copy-status { display:block; min-height:22px; margin-top:6px; font:var(--dsw-font-xxs-12); color:var(--dsw-alias-label-secondary); }
.dsh-icon-empty { display:flex; align-items:center; flex-direction:column; gap:16px; padding:60px 12px; font:var(--dsw-font-xs-13); }
@container (max-width:760px) { .dsh-icon-library-layout { grid-template-columns:minmax(0,1fr); } .dsh-icon-inspector { position:static; border-left:0; border-top:1px solid var(--dsw-alias-border-l1); padding:20px 0 0; } .dsh-icon-inspector-preview { height:100px; } }
`;
		//#endregion
		//#region src/client/IconGallery.tsx
		function IconGallery({ groups }) {
			const [query, setQuery] = (0, react.useState)("");
			const [category, setCategory] = (0, react.useState)("all");
			const [selectedName, setSelectedName] = (0, react.useState)("IconAgentPresetOutlineRegular");
			const [copyState, setCopyState] = (0, react.useState)("");
			const all = groups.flatMap((group) => group.icons);
			const selected = all.find((item) => item.name === selectedName) ?? all[0];
			const SelectedIcon = selected.icon;
			const visible = groups.filter((group) => category === "all" || category === group.title).map((group) => ({
				...group,
				icons: group.icons.filter((item) => [
					item.name,
					item.label,
					item.usage
				].some((value) => value.toLowerCase().includes(query.trim().toLowerCase())))
			})).filter((group) => group.icons.length);
			const count = visible.reduce((total, group) => total + group.icons.length, 0);
			const snippet = `import { ${selected.name} } from '@deepseek-ai/dsh-client-ui-primitives'\n\n<${selected.name} size={${selected.size}} />`;
			const copy = async () => {
				try {
					await navigator.clipboard.writeText(snippet);
					setCopyState("已复制");
				} catch {
					setCopyState("复制失败，请检查剪贴板权限");
				}
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-specimen-content dsh-icon-library",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("style", { children: ICON_GALLERY_STYLE }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", {
						className: "dsh-specimen-intro",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "基础资源 / Icons" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h1", { children: "图标" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "dsh-icon-meta",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [all.length, " 个图标"] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "@deepseek-ai/dsh-client-ui-primitives" })]
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-icon-library-toolbar",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
								icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSearchOutlineRegular, {}),
								"aria-label": "搜索图标",
								placeholder: "搜索名称、用途或组件名",
								value: query,
								onChange: (event) => setQuery(event.target.value)
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
								"aria-label": "图标分类",
								value: category,
								onChange: (event) => setCategory(event.target.value),
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
									value: "all",
									children: "全部分类"
								}), groups.map((group) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", { children: group.title }, group.title))]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								role: "status",
								children: [
									count,
									" / ",
									all.length
								]
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-icon-library-layout",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-icon-library-results",
							children: [visible.map((group) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
								className: "dsh-icon-library-group",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("h2", { children: [group.title, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: group.icons.length })] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "dsh-icon-library-grid",
									children: group.icons.map((item) => {
										const Icon = item.icon;
										return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
											type: "button",
											className: "dsh-icon-tile",
											"aria-pressed": selectedName === item.name,
											title: item.name,
											onClick: () => {
												setSelectedName(item.name);
												setCopyState("");
											},
											children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: "dsh-icon-tile-glyph",
													children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, { size: item.size })
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: item.label }),
												/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("small", { children: [item.name === "IconTreeCornerRegular" ? "8 × 10" : item.size, "px"] })
											]
										}, item.name);
									})
								})]
							}, group.title)), !count && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "dsh-icon-empty",
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSearchOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "没有匹配的图标" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										variant: "outline",
										size: "sm",
										onClick: () => {
											setQuery("");
											setCategory("all");
										},
										children: "清除筛选"
									})
								]
							})]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("aside", {
							className: "dsh-icon-inspector",
							"aria-label": "图标详情",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", { children: selected.label }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: selected.name })] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "dsh-icon-inspector-preview",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SelectedIcon, { size: selected.size * 4 })
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-icon-specimens",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SelectedIcon, { size: selected.size }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [
										"原尺寸 ",
										selected.name === "IconTreeCornerRegular" ? "8 × 10" : selected.size,
										"px"
									] })] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "dsh-icon-inverse",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SelectedIcon, { size: selected.size }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "反色" })]
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dl", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: "导出名称" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: selected.name })] }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: "产品用途" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: selected.usage })] }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: "颜色" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: "currentColor" })] }),
									selected.name === "IconAgentPresetOutlineRegular" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: "实际尺寸" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: "会话标签 14px / 设置导航 16px" })] })
								] }),
								selected.name === "IconAgentPresetOutlineRegular" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-icon-contexts",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SelectedIcon, { size: 14 }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "DeepSeek Harness" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "会话标签" })
									] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SelectedIcon, { size: 16 }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "Agent 预设" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "设置导航" })
									] })]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", { children: snippet }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									variant: "outline",
									size: "sm",
									icon: copyState === "已复制" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCopyOutlineRegular, {}),
									onClick: () => {
										copy();
									},
									children: "复制调用"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "dsh-icon-copy-status",
									role: "status",
									children: copyState
								})
							]
						})]
					})
				]
			});
		}
		//#endregion
		//#region src/client/GallerySpecimen.tsx
		function IconAction({ label, children, onClick }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
				label,
				side: "top",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: "dsh-cg-icon-anchor",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
						size: "sm",
						"aria-label": label,
						onClick,
						children
					})
				})
			});
		}
		function Specimen({ name, title, metrics, sample, children, notify }) {
			const [codeOpen, setCodeOpen] = (0, react.useState)(false);
			const id = (0, react.useId)();
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: "dsh-cg-section",
				"aria-labelledby": id,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", {
						className: "dsh-cg-section-head",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("h2", {
							id,
							children: [
								title,
								" ",
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: name })
							]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-cg-metrics",
							children: metrics.map((metric) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: metric }, metric))
						})] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-cg-actions",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconAction, {
								label: "复制 " + name + " 实例",
								onClick: () => {
									(0, _deepseek_ai_dsh_client_ui_primitives.writeClipboard)(sample).then((ok) => notify(ok ? "实例已复制" : "无法访问剪贴板", !ok));
								},
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCopyOutlineRegular, {})
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
								label: "实例代码",
								side: "top",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "dsh-cg-icon-anchor",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										size: "sm",
										"aria-label": name + " 实例代码",
										"aria-expanded": codeOpen,
										"aria-controls": id + "-code",
										onClick: () => setCodeOpen((value) => !value),
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCodeOutlineRegular, {})
									})
								})
							})]
						})]
					}),
					children,
					codeOpen && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "dsh-cg-code",
						id: id + "-code",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.CodeBlock, {
							code: sample,
							lang: "tsx",
							copyLabel: "复制代码",
							copiedLabel: "已复制"
						})
					})
				]
			});
		}
		//#endregion
		//#region src/client/NativeSpecimens.tsx
		const SelectableCard = _deepseek_ai_dsh_client_ui_primitives.SelectableCard;
		const CollectionAddButton = _deepseek_ai_dsh_client_ui_primitives.CollectionAddButton;
		function PresetCardSpecimen({ notify }) {
			const [selected, setSelected] = (0, react.useState)("general");
			const entries = [
				{
					id: "general",
					title: "通用助手",
					description: "通用任务与日常问答。",
					badge: "内置"
				},
				{
					id: "coding",
					title: "编码助手",
					description: "代码分析、实现与验证。",
					badge: "内置"
				},
				{
					id: "review",
					title: "代码审阅",
					description: "检查行为回归、接口约束和测试覆盖。",
					badge: "自定义"
				}
			];
			const footer = (title) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
				label: "查看 " + title,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
					size: "sm",
					"aria-label": "查看 " + title,
					onClick: () => notify(title + " · 查看示例"),
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconBrowseOutlineRegular, {})
				}) })
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
				label: "复制 " + title,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
					size: "sm",
					"aria-label": "复制 " + title,
					onClick: () => notify(title + " · 复制示例"),
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCopyOutlineRegular, {})
				}) })
			})] });
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Specimen, {
				title: "实体选择卡片",
				name: "SelectableCard",
				metrics: [
					"AgentPresetSection",
					"主区选择 / 底部独立操作",
					"pressed / disabled / broken",
					"r20 · 原生规格"
				],
				notify,
				sample: `import { SelectableCard, Button } from "@deepseek-ai/dsh-client-ui-primitives"

<SelectableCard title={name} description={description} metadata={id}
  pressed={isDefault} disabled={isDefault} broken={Boolean(error)}
  mainButtonProps={{ "aria-label": "设为默认: " + name, onClick: makeDefault }}
  footer={<Button onClick={copyPreset}>复制</Button>} />`,
				children: [!SelectableCard ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "dsh-cg-unavailable",
					role: "status",
					children: "宿主未提供 SelectableCard"
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-native-label",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "单项选择" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "已选主区禁用 · 底部操作独立" })]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "dsh-native-card-grid",
						children: entries.map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SelectableCard, {
							title: item.title,
							description: item.description,
							metadata: item.id,
							badges: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Pill, { children: item.badge }),
							pressed: selected === item.id,
							disabled: selected === item.id,
							mainButtonProps: {
								"aria-label": (selected === item.id ? "当前预设: " : "设为默认: ") + item.title,
								onClick: () => setSelected(item.id)
							},
							footer: footer(item.title)
						}, item.id))
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-cg-result",
						role: "status",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "当前示例" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: entries.find((item) => item.id === selected)?.title })]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-native-card-grid dsh-native-card-states",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "不可用 / 保持键盘可达" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SelectableCard, {
								title: "配置不可用",
								description: "配置文件缺少必要字段。",
								metadata: "preset.invalid",
								broken: true,
								mainButtonProps: {
									"aria-label": "不可用预设: 配置不可用",
									onClick: () => notify("不应触发不可用主区", true)
								},
								footer: footer("配置不可用"),
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "dsh-native-owner-error",
									role: "alert",
									children: "缺少模型配置"
								})
							})] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "只读 / 主区禁用" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SelectableCard, {
								title: "只读预设",
								description: "当前环境不允许修改默认预设。",
								metadata: "preset.readonly",
								disabled: true,
								mainButtonProps: { "aria-label": "只读预设" },
								footer: footer("只读预设")
							})] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "长内容 / 描述截断" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SelectableCard, {
								title: "多阶段研究与实现",
								description: "分析需求、核对来源、形成计划、执行验证，并整理可追溯的交付结果。".repeat(8),
								metadata: "preset.research.with-a-long-identifier",
								mainButtonProps: {
									"aria-label": "长内容预设",
									onClick: () => notify("长内容主区已触发")
								},
								footer: footer("长内容预设")
							})] })
						]
					})
				] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dl", {
					className: "dsh-native-contract",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: "语义" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: "选择一个实体，不是导航卡片" })] }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: "结构" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: "标题 / 标记 / 描述 / 标识 / 独立 footer" })] }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: "组件负责" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: "边界、截断、选择态、禁用与不可用主区" })] }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: "页面负责" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: "默认项、业务标记、错误原因、复制与查看" })] })
					]
				})]
			});
		}
		function CollectionActionSpecimen({ notify }) {
			const [adding, setAdding] = (0, react.useState)(null);
			const [name, setName] = (0, react.useState)("");
			const [items, setItems] = (0, react.useState)([]);
			const field = (0, react.useId)();
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Specimen, {
				title: "集合扩展入口",
				name: "CollectionAddButton",
				metrics: [
					"44px · r16",
					"虚线边框",
					"图标 + 标签",
					"ui-settings-models / ModelsSection"
				],
				notify,
				sample: "import { CollectionAddButton, IconPlusOutlineRegular } from \"@deepseek-ai/dsh-client-ui-primitives\"\n\n<CollectionAddButton disabled={!writable} onClick={openProviderForm}>\n  <IconPlusOutlineRegular size={14} />添加提供方\n</CollectionAddButton>",
				children: [!CollectionAddButton ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "dsh-cg-unavailable",
					role: "status",
					children: "宿主未提供 CollectionAddButton"
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-native-label",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "提供方列表末尾" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "并列入口 · 等宽 · 空间不足时换行" })]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-native-provider-actions",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(CollectionAddButton, {
							onClick: () => {
								setAdding("known");
								setName("");
							},
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular, { size: 14 }), "添加提供方"]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(CollectionAddButton, {
							onClick: () => {
								setAdding("custom");
								setName("");
							},
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular, { size: 14 }), "添加自定义提供方"]
						})]
					}),
					adding && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("form", {
						className: "dsh-native-inline-form",
						onSubmit: (event) => {
							event.preventDefault();
							if (!name.trim()) return;
							setItems((value) => [...value, name.trim()]);
							setAdding(null);
							notify("示例提供方已添加");
						},
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
								htmlFor: field,
								children: adding === "known" ? "提供方名称" : "自定义提供方名称"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
								id: field,
								value: name,
								onChange: (event) => setName(event.target.value),
								autoFocus: true,
								required: true,
								maxLength: 64
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "dsh-cg-actions",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									size: "sm",
									variant: "outline",
									onClick: () => setAdding(null),
									children: "取消"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									type: "submit",
									size: "sm",
									variant: "primary",
									disabled: !name.trim(),
									children: "添加"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-cg-result",
						role: "status",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "本地示例" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: items.length ? items.join(" / ") : "尚未添加" })]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-native-state-grid",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "默认" }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(CollectionAddButton, {
								onClick: () => notify("默认入口已触发"),
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular, { size: 14 }), "添加提供方"]
							})] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "禁用 / 无可用提供方" }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(CollectionAddButton, {
								disabled: true,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular, { size: 14 }), "添加提供方"]
							})] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "长标签" }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(CollectionAddButton, {
								onClick: () => notify("长标签入口已触发"),
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular, { size: 14 }), "添加兼容 OpenAI 协议的提供方"]
							})] })
						]
					})
				] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dl", {
					className: "dsh-native-contract",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: "语义" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: "向集合新增一个实体的占位入口" })] }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: "结构" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: "原生 button / 可选图标 / 标签" })] }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: "组件负责" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: "边界、尺寸、hover、focus、disabled" })] }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: "页面负责" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: "等宽分组、换行、新增表单与业务校验" })] })
					]
				})]
			});
		}
		//#endregion
		//#region src/client/ComponentGallery.tsx
		const GROUPS = [
			["actions", "按钮与入口"],
			["entities", "选择与实体"],
			["inputs", "输入与表单"],
			["overlays", "菜单与浮层"],
			["feedback", "状态与反馈"],
			["content", "结构化内容"],
			["all", "全部组件"]
		];
		const VARIANTS = [
			"primary",
			"ghost",
			"outline",
			"toolbar"
		];
		const STATES = [
			["done", "已完成"],
			["warning", "待确认"],
			["ongoing", "进行中"],
			["error", "失败"]
		];
		const FOLD_LABELS = {
			codeLabel: "代码",
			wrapLabel: "自动换行",
			unwrapLabel: "取消换行",
			copy: "复制",
			copied: "已复制",
			collapse: "收起",
			collapseAria: "收起内容",
			expand: (count) => "展开 " + count + " 行",
			expandAria: (count) => "展开隐藏的 " + count + " 行"
		};
		const TERMINAL_LABELS = {
			...FOLD_LABELS,
			signal: (signal) => "信号 " + signal,
			exitCode: (code) => "退出码 " + code,
			commandLine: (line) => "第 " + line + " 行命令",
			noExitCode: "无退出码",
			running: "运行中",
			failed: "失败",
			done: "已完成",
			noOutput: "无输出"
		};
		const JSON_LABELS = {
			copyValue: "复制值",
			copyJson: "复制 JSON",
			copyPath: "复制属性路径",
			copyPrettyJson: "复制格式化 JSON",
			copyCompactJson: "复制紧凑 JSON",
			copied: "已复制",
			copyFailed: "复制失败",
			collapseNode: "收起节点",
			expandNode: "展开节点",
			copyButtonTitle: (action) => action
		};
		function ButtonSpecimen({ notify }) {
			const [busy, setBusy] = (0, react.useState)(false);
			const timer = (0, react.useRef)();
			(0, react.useEffect)(() => () => {
				clearTimeout(timer.current);
			}, []);
			const save = () => {
				setBusy(true);
				timer.current = setTimeout(() => {
					setBusy(false);
					notify("本地草稿已保存");
				}, 1200);
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Specimen, {
				name: "Button",
				title: "通用命令按钮",
				metrics: [
					"4 variants",
					"md 36px / sm 28px",
					"icon 16px",
					"native disabled"
				],
				notify,
				sample: "<Button variant=\"primary\" size=\"md\" icon={<IconPlusOutlineRegular />} onClick={onCreate}>新建项目</Button>\n<Button variant=\"outline\" size=\"sm\" disabled>新建项目</Button>",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "dsh-cg-table-scroll",
					tabIndex: 0,
					role: "region",
					"aria-label": "按钮变体尺寸矩阵",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("table", {
						className: "dsh-cg-matrix",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
								scope: "col",
								children: "Variant"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
								scope: "col",
								children: "md / 36"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
								scope: "col",
								children: "sm / 28"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
								scope: "col",
								children: "md / disabled"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
								scope: "col",
								children: "sm / disabled"
							})
						] }) }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tbody", { children: VARIANTS.map((variant) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
								scope: "row",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: variant })
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								variant,
								icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular, {}),
								onClick: () => notify(variant + " · md"),
								children: "新建项目"
							}) }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								variant,
								size: "sm",
								icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular, {}),
								onClick: () => notify(variant + " · sm"),
								children: "新建项目"
							}) }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								variant,
								disabled: true,
								icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular, {}),
								children: "新建项目"
							}) }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								variant,
								size: "sm",
								disabled: true,
								icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular, {}),
								children: "新建项目"
							}) })
						] }, variant)) })]
					})
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "dsh-cg-inline-samples",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "纯文本" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "outline",
							onClick: () => notify("已取消"),
							children: "取消"
						})] }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "图标操作" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconAction, {
							label: "复制项目名称",
							onClick: () => {
								(0, _deepseek_ai_dsh_client_ui_primitives.writeClipboard)("Design system").then((ok) => notify(ok ? "项目名称已复制" : "复制失败", !ok));
							},
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCopyOutlineRegular, {})
						})] }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "异步组合 / disabled + icon" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "primary",
							disabled: busy,
							"aria-busy": busy,
							icon: busy ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconLoadingOutlineRegular, { className: "dsh-cg-spin" }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {}),
							onClick: save,
							children: busy ? "保存中" : "保存草稿"
						})] })
					]
				})]
			});
		}
		function PillSpecimen({ notify }) {
			const [selected, setSelected] = (0, react.useState)("全部");
			const [pinned, setPinned] = (0, react.useState)(true);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Specimen, {
				name: "Pill",
				title: "选项与标签",
				metrics: [
					"24px",
					"active",
					"onClick → button",
					"无 onClick → span"
				],
				notify,
				sample: "<Pill active={selected === \"all\"} aria-pressed={selected === \"all\"} onClick={() => setSelected(\"all\")}>全部</Pill>\n<Pill>只读标签</Pill>",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "dsh-cg-inline-samples",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "单选筛选" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-cg-options",
							role: "group",
							"aria-label": "项目筛选",
							children: [
								"全部",
								"进行中",
								"已完成"
							].map((label) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Pill, {
								active: selected === label,
								"aria-pressed": selected === label,
								onClick: () => setSelected(label),
								children: label
							}, label))
						})] }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "独立选中" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Pill, {
							active: pinned,
							"aria-pressed": pinned,
							onClick: () => setPinned((value) => !value),
							children: "已收藏"
						})] }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "静态标签" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Pill, { children: "只读" })] }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "禁用交互" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Pill, {
							disabled: true,
							onClick: () => notify("不可达"),
							children: "已归档"
						})] })
					]
				})
			});
		}
		function InputSpecimen({ notify }) {
			const id = (0, react.useId)();
			const [name, setName] = (0, react.useState)("Design system");
			const [slug, setSlug] = (0, react.useState)("design board");
			const valid = /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Specimen, {
				name: "Input",
				title: "单行输入",
				metrics: [
					"32px",
					"icon 16px",
					"native input attributes",
					"校验反馈由表单持有"
				],
				notify,
				sample: "<label htmlFor=\"project-name\">项目名称</label>\n<Input id=\"project-name\" value={name} onChange={e => setName(e.currentTarget.value)} />\n<Input aria-invalid={!valid} aria-describedby=\"validation\" value={slug} onChange={e => setSlug(e.currentTarget.value)} />",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "dsh-cg-fields",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: "dsh-cg-field",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "空值 / placeholder" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, { placeholder: "输入项目名称" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "默认状态" })
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: "dsh-cg-field",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "已填写 / controlled" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
									value: name,
									onChange: (event) => setName(event.currentTarget.value)
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("small", { children: [name.length, " 个字符"] })
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: "dsh-cg-field",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "前置图标 / search" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
									type: "search",
									icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSearchOutlineRegular, {}),
									placeholder: "搜索模型"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "icon slot 16px" })
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: "dsh-cg-field",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "只读 / readOnly" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
									readOnly: true,
									value: "workspace/design-system"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "可选择与复制" })
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: "dsh-cg-field",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "禁用 / disabled" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
									disabled: true,
									value: "已归档项目"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "原生禁用" })
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: "dsh-cg-field",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "项目标识 / validation" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
									value: slug,
									"aria-invalid": !valid,
									"aria-describedby": id + "-validation",
									onChange: (event) => setSlug(event.currentTarget.value)
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("small", {
									id: id + "-validation",
									className: valid ? "dsh-cg-success" : "dsh-cg-error",
									children: [valid ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconWarningOutlineRegular, {}), valid ? "标识可用" : "仅限小写字母、数字和单连字符"]
								})
							]
						})
					]
				})
			});
		}
		const MENU_ITEMS = [
			{
				type: "label",
				id: "heading",
				text: "项目操作"
			},
			{
				id: "rename",
				label: "重命名",
				icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconEditOutlineRegular, {})
			},
			{
				id: "duplicate",
				label: "复制项目",
				icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCopyOutlineRegular, {})
			},
			{
				id: "move",
				label: "移动到",
				icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconFolderOpenRegular, {}),
				submenu: [{
					id: "personal",
					label: "个人工作区"
				}, {
					id: "team",
					label: "团队工作区"
				}]
			},
			{
				id: "archive",
				label: "归档",
				disabled: true
			},
			{
				type: "separator",
				id: "separator"
			},
			{
				id: "remove",
				label: "移除项目",
				danger: true,
				icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconTrashOutlineRegular, {})
			}
		];
		function MenuSpecimen({ notify }) {
			const [open, setOpen] = (0, react.useState)(null);
			const [selection, setSelection] = (0, react.useState)("rename");
			const [result, setResult] = (0, react.useState)("尚未选择");
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Specimen, {
				name: "Menu",
				title: "操作菜单",
				metrics: [
					"portal",
					"label / separator / danger",
					"selectedId / disabled / submenu"
				],
				notify,
				sample: "<Menu open={open} portal selectedId={selectedId} items={items}\n  anchor={<Button aria-haspopup=\"menu\" aria-expanded={open} onClick={() => setOpen(!open)}>项目操作</Button>}\n  onSelect={id => { setSelectedId(id); setOpen(false) }} onClose={() => setOpen(false)} />",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "dsh-cg-inline-samples",
					children: [
						["default", "标准"],
						["dense", "Dense"],
						["compact", "Compact"]
					].map(([key, label]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: label }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Menu, {
						open: open === key,
						portal: true,
						dense: key === "dense",
						compact: key === "compact",
						items: MENU_ITEMS,
						selectedId: selection,
						anchor: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "outline",
							icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconEllipsisOutlineRegular, {}),
							"aria-haspopup": "menu",
							"aria-expanded": open === key,
							onClick: () => setOpen((value) => value === key ? null : key),
							children: ["项目操作", /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, {})]
						}),
						onSelect: (id) => {
							setSelection(id);
							setResult(id);
							setOpen(null);
							notify("已选择：" + id);
						},
						onClose: () => setOpen(null)
					})] }, key))
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("output", {
					className: "dsh-cg-result",
					children: ["onSelect ", /* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: result })]
				})]
			});
		}
		function useDialogFocus(open, title) {
			(0, react.useLayoutEffect)(() => {
				if (!open) return;
				const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
				const dialog = [...document.querySelectorAll("[role=\"dialog\"]")].find((element) => element.getAttribute("aria-label") === title);
				if (!dialog) return;
				const controls = () => [...dialog.querySelectorAll("button:not(:disabled), input:not(:disabled), [tabindex=\"0\"]")].filter((element) => element.getClientRects().length > 0);
				(dialog.querySelector("input:not(:disabled)") ?? controls()[0])?.focus();
				const containFocus = (event) => {
					if (event.target instanceof Node && !dialog.contains(event.target)) (controls()[0] ?? dialog).focus();
				};
				const trapTab = (event) => {
					if (event.key !== "Tab") return;
					const items = controls();
					const first = items[0];
					const last = items[items.length - 1];
					if (!first || !last) return;
					if (event.shiftKey && document.activeElement === first) {
						event.preventDefault();
						last.focus();
					} else if (!event.shiftKey && document.activeElement === last) {
						event.preventDefault();
						first.focus();
					}
				};
				document.addEventListener("focusin", containFocus);
				dialog.addEventListener("keydown", trapTab);
				return () => {
					document.removeEventListener("focusin", containFocus);
					dialog.removeEventListener("keydown", trapTab);
					if (previous?.isConnected) previous.focus();
				};
			}, [open, title]);
		}
		function OverlaySpecimen({ notify }) {
			const [dialog, setDialog] = (0, react.useState)(null);
			const [name, setName] = (0, react.useState)("Design system");
			const [draft, setDraft] = (0, react.useState)(name);
			const [acknowledged, setAcknowledged] = (0, react.useState)(false);
			const unique = (0, react.useId)();
			const editTitle = "编辑项目";
			const riskTitle = "移除示例项目？";
			useDialogFocus(dialog === "edit", editTitle);
			useDialogFocus(dialog === "risk", riskTitle);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Specimen, {
				name: "Modal / RiskConfirmation / Tooltip / HoverCard",
				title: "浮层与确认",
				metrics: [
					"受控 open",
					"body portal",
					"显式确认",
					"hover / focus"
				],
				notify,
				sample: "<Modal open={open} onClose={() => setOpen(false)} title=\"编辑项目\" closeLabel=\"关闭\"\n  footer={<Button variant=\"primary\" onClick={save}>保存</Button>}>\n  <Input aria-label=\"项目名称\" value={name} onChange={e => setName(e.currentTarget.value)} />\n</Modal>",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-cg-inline-samples",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "编辑 / Modal" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								variant: "outline",
								icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconEditOutlineRegular, {}),
								onClick: () => {
									setDraft(name);
									setDialog("edit");
								},
								children: "编辑项目"
							})] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "风险确认 / checkbox" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								variant: "outline",
								icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconTrashOutlineRegular, {}),
								onClick: () => {
									setAcknowledged(false);
									setDialog("risk");
								},
								children: "移除示例项目"
							})] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "Tooltip / top" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconAction, {
								label: "刷新项目",
								onClick: () => notify("项目已刷新"),
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconRefreshOutlineRegular, {})
							})] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "HoverCard / copyText" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.HoverCard, {
								copyLabel: "复制路径",
								copiedLabel: "路径已复制",
								copyText: "/workspace/design-system",
								anchor: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									size: "sm",
									variant: "ghost",
									icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconFolderOpenRegular, {}),
									children: "项目路径"
								}),
								content: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-cg-hover-content",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: name }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "/workspace/design-system" })]
								})
							})] })
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("output", {
						className: "dsh-cg-result",
						children: ["项目名称 ", /* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: name })]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
						open: dialog === "edit",
						title: editTitle,
						closeLabel: "关闭编辑",
						onClose: () => setDialog(null),
						footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "outline",
							onClick: () => setDialog(null),
							children: "取消"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "primary",
							disabled: !draft.trim(),
							onClick: () => {
								setName(draft.trim());
								setDialog(null);
								notify("项目名称已更新");
							},
							children: "保存"
						})] }),
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: "dsh-cg-field",
							htmlFor: unique,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "项目名称" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
								id: unique,
								value: draft,
								maxLength: 64,
								onChange: (event) => setDraft(event.currentTarget.value)
							})]
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.RiskConfirmation, {
						open: dialog === "risk",
						title: riskTitle,
						description: "此操作仅重置当前陈列的示例项目名称，不会删除工作区或文件。",
						acknowledgeLabel: "我确认重置示例项目",
						cancelLabel: "取消",
						closeLabel: "关闭确认",
						confirmLabel: "确认移除",
						acknowledged,
						onAcknowledgedChange: setAcknowledged,
						onCancel: () => setDialog(null),
						onConfirm: () => {
							setName("未命名项目");
							setDialog(null);
							notify("示例项目已重置");
						}
					})
				]
			});
		}
		function FeedbackSpecimen({ notify }) {
			const [open, setOpen] = (0, react.useState)(true);
			const [state, setState] = (0, react.useState)("ongoing");
			const [connection, setConnection] = (0, react.useState)("disconnected");
			const timer = (0, react.useRef)();
			(0, react.useEffect)(() => () => {
				clearTimeout(timer.current);
			}, []);
			const reconnect = () => {
				clearTimeout(timer.current);
				setConnection("connecting");
				timer.current = setTimeout(() => {
					setConnection("recovered");
				}, 1400);
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Specimen, {
				name: "StateDot / DisclosureRow / ConnectionIndicator / Toast",
				title: "状态与反馈",
				metrics: [
					"4 states",
					"StateDot 10px",
					"DisclosureRow 24px",
					"持久反馈 / 短暂反馈"
				],
				notify,
				sample: "<DisclosureRow icon={<StateDot state=\"ongoing\" />} title=\"检查项目\" open={open}\n  expandable expandOnRowClick onToggle={() => setOpen(!open)} collapsedContent=\"3 个文件\">\n  <p>正在检查组件属性。</p>\n</DisclosureRow>",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "dsh-cg-status-matrix",
					children: STATES.map(([value, label]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.StateDot, { state: value }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: label }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: value })
					] }, value))
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "dsh-cg-two-col",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-cg-subsection",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", { children: "DisclosureRow" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "dsh-cg-options",
								role: "group",
								"aria-label": "任务状态",
								children: STATES.map(([value, label]) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Pill, {
									active: state === value,
									"aria-pressed": state === value,
									onClick: () => setState(value),
									children: label
								}, value))
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "dsh-cg-disclosure",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.DisclosureRow, {
									icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.StateDot, { state }),
									title: "检查项目",
									open,
									expandable: true,
									expandOnRowClick: true,
									keepContentWhenOpen: true,
									onToggle: () => setOpen((value) => !value),
									collapsedContent: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "dsh-cg-muted",
										children: "3 个文件"
									}),
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "dsh-cg-disclosure-body",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.StateDot, { state }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [STATES.find(([value]) => value === state)?.[1], " · Button.tsx / Input.tsx / Menu.tsx"] })]
									})
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.DisclosureRow, {
								icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.StateDot, { state: "done" }),
								title: "资源已就绪",
								open: false,
								expandable: false,
								onToggle: () => {},
								collapsedContent: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "dsh-cg-muted",
									children: "不可展开"
								})
							})
						]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-cg-subsection",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", { children: "ConnectionIndicator" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "dsh-cg-options",
								role: "group",
								"aria-label": "连接状态",
								children: [
									"disconnected",
									"connecting",
									"recovered"
								].map((value, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Pill, {
									active: connection === value,
									"aria-pressed": connection === value,
									onClick: () => {
										clearTimeout(timer.current);
										setConnection(value);
									},
									children: [
										"已断开",
										"连接中",
										"已恢复"
									][index]
								}, value))
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "dsh-cg-connection",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.ConnectionIndicator, {
									state: connection,
									disconnectedLabel: "连接已断开",
									connectingLabel: "正在重连",
									recoveredLabel: "连接已恢复",
									reconnectActionLabel: "重新连接示例",
									restartActionLabel: "重新开始连接示例",
									onReconnect: reconnect
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "dsh-cg-actions",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									size: "sm",
									icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {}),
									onClick: () => notify("所有更改已保存"),
									children: "成功反馈"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									size: "sm",
									icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconWarningOutlineRegular, {}),
									onClick: () => notify("示例请求未完成，请重试", true),
									children: "失败反馈"
								})]
							})
						]
					})]
				})]
			});
		}
		function ContentSpecimen({ notify }) {
			const [terminalState, setTerminalState] = (0, react.useState)("done");
			const output = terminalState === "error" ? "Error: Missing project name\nValidation failed." : terminalState === "empty" ? "" : "Resolving project...\nReading Button.tsx\nReading Input.tsx\nReading Menu.tsx\nChecking semantic tokens\nChecking component props\nChecking keyboard actions\nChecking disabled states\nChecking responsive layout\n12 checks passed";
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Specimen, {
				name: "TerminalBlock / ReadBlock / DiffBlock / JsonTree / CodeBlock",
				title: "结构化内容",
				metrics: [
					"原生复制",
					"折叠 / 展开",
					"行号 / 差异 / 树",
					"maxLines = 6"
				],
				notify,
				sample: "<TerminalBlock command=\"pnpm check\" output={output} exitCode={0} maxLines={6} labels={labels} />\n<ReadBlock label=\"Button.tsx\" lines={lines} totalLines={12} lang=\"tsx\" labels={labels} />\n<JsonTree data={data} label=\"项目配置\" labels={jsonLabels} />",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "dsh-cg-two-col dsh-cg-content-grid",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-cg-subsection",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", { children: "TerminalBlock" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "dsh-cg-options",
									role: "group",
									"aria-label": "终端状态",
									children: [
										"done",
										"running",
										"error",
										"empty"
									].map((value, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Pill, {
										active: terminalState === value,
										"aria-pressed": terminalState === value,
										onClick: () => setTerminalState(value),
										children: [
											"完成",
											"运行中",
											"失败",
											"无输出"
										][index]
									}, value))
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.TerminalBlock, {
									command: "pnpm check",
									cwd: "/workspace/design-system",
									output,
									running: terminalState === "running",
									exitCode: terminalState === "error" ? 1 : 0,
									maxLines: 6,
									labels: TERMINAL_LABELS
								})
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-cg-subsection",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", { children: "ReadBlock" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.ReadBlock, {
								label: "src/actions.tsx",
								lang: "tsx",
								maxLines: 6,
								totalLines: 12,
								lines: [
									"import { Button } from \"@deepseek-ai/dsh-client-ui-primitives\"",
									"",
									"export function Actions() {",
									"  return (",
									"    <Button",
									"      variant=\"primary\"",
									"      size=\"sm\"",
									"      onClick={save}",
									"    >",
									"      保存",
									"    </Button>",
									"  )}"
								].map((text, index) => ({
									number: index + 1,
									text
								})),
								labels: {
									...FOLD_LABELS,
									window: (shown, total) => shown + " / " + total + " 行"
								}
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-cg-subsection",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", { children: "DiffBlock" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.DiffBlock, {
								maxLines: 6,
								diffs: [{
									path: "src/actions.tsx",
									oldText: "<Button variant=\"ghost\">保存</Button>",
									newText: "<Button variant=\"primary\">保存</Button>"
								}],
								labels: FOLD_LABELS
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-cg-subsection",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", { children: "JsonTree" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.JsonTree, {
								label: "项目配置",
								data: {
									project: "Design system",
									theme: {
										mode: "system",
										density: "compact"
									},
									components: [
										"Button",
										"Input",
										"Menu"
									],
									published: false,
									revision: 12
								},
								labels: JSON_LABELS
							})]
						})
					]
				})
			});
		}
		const AddButton = _deepseek_ai_dsh_client_ui_primitives.AddButton;
		function AddActionSpecimen({ notify }) {
			const [count, setCount] = (0, react.useState)(0);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Specimen, {
				name: "AddButton",
				title: "列表内添加命令",
				metrics: [
					"模型设置 / 两处原生消费",
					"28px",
					"disabled / focus-visible",
					AddButton ? "已公共化" : "宿主未提供"
				],
				notify,
				sample: "import { AddButton, IconPlusOutlineRegular } from \"@deepseek-ai/dsh-client-ui-primitives\"\n\n<AddButton onClick={onAdd}>添加模型</AddButton>\n<AddButton disabled={busy} onClick={onAdd}><IconPlusOutlineRegular size={14} />添加模型</AddButton>",
				children: AddButton ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "dsh-cg-inline-samples",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "模型列表 / 纯文字" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(AddButton, {
							onClick: () => setCount((value) => value + 1),
							children: "添加模型"
						})] }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "DeepSeek 模型 / 图标 14px" }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(AddButton, {
							onClick: () => setCount((value) => value + 1),
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular, { size: 14 }), "添加模型"]
						})] }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "禁用" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(AddButton, {
							disabled: true,
							children: "添加模型"
						})] })
					]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "dsh-cg-result",
					role: "status",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "本地新增" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: count })]
				})] }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "dsh-cg-result",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "需要包含 AddButton 导出的 DSH 版本" })
				})
			});
		}
		const SECTIONS$1 = [
			{
				key: "collection-add",
				group: "actions",
				terms: "CollectionAddButton 添加提供方 添加自定义提供方 虚线 集合 扩展 按钮",
				component: CollectionActionSpecimen
			},
			{
				key: "preset-card",
				group: "entities",
				terms: "SelectableCard Agent 预设 卡片 选择 实体 默认 不可用 区块",
				component: PresetCardSpecimen
			},
			{
				key: "buttons",
				group: "actions",
				terms: "Button 按钮 尺寸 变体 禁用 loading",
				component: ButtonSpecimen
			},
			{
				key: "add-action",
				group: "actions",
				terms: "AddButton 添加模型 列表 添加入口 产品模式",
				component: AddActionSpecimen
			},
			{
				key: "pills",
				group: "entities",
				terms: "Pill 标签 选择 筛选",
				component: PillSpecimen
			},
			{
				key: "inputs",
				group: "inputs",
				terms: "Input 输入 搜索 校验 表单 只读 禁用",
				component: InputSpecimen
			},
			{
				key: "menus",
				group: "overlays",
				terms: "Menu 菜单 选择 子菜单",
				component: MenuSpecimen
			},
			{
				key: "overlays",
				group: "overlays",
				terms: "Modal RiskConfirmation Tooltip HoverCard 弹窗 浮层 对话框 确认 dialog",
				component: OverlaySpecimen
			},
			{
				key: "feedback",
				group: "feedback",
				terms: "StateDot DisclosureRow ConnectionIndicator Toast 状态 反馈 展开 连接",
				component: FeedbackSpecimen
			},
			{
				key: "content",
				group: "content",
				terms: "TerminalBlock ReadBlock DiffBlock JsonTree CodeBlock 终端 内容 代码 JSON 差异",
				component: ContentSpecimen
			}
		];
		function ComponentGallery() {
			const [group, setGroup] = (0, react.useState)("actions");
			const [query, setQuery] = (0, react.useState)("");
			const [resetKey, setResetKey] = (0, react.useState)(0);
			const [toast, setToast] = (0, react.useState)(null);
			const sequence = (0, react.useRef)(0);
			const notify = (0, react.useCallback)((text, error = false) => {
				setToast({
					id: ++sequence.current,
					text,
					error
				});
			}, []);
			const clearToast = (0, react.useCallback)(() => setToast(null), []);
			const search = query.trim().toLowerCase();
			const visible = SECTIONS$1.filter((section) => search ? section.terms.toLowerCase().includes(search) : group === "all" || section.group === group);
			const activeLabel = search ? "搜索结果" : GROUPS.find(([key]) => key === group)?.[1];
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-cg",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", {
						className: "dsh-cg-heading",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "dsh-cg-eyebrow",
								children: "DSH / COMPONENT LIBRARY"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h1", { children: "基础组件" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "@deepseek-ai/dsh-client-ui-primitives" })
						] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "dsh-cg-scope",
							children: "原生组件与组合模式"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("nav", {
						className: "dsh-cg-families",
						"aria-label": "组件族",
						children: GROUPS.map(([value, label]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-pressed": !search && group === value,
							onClick: () => {
								setGroup(value);
								setQuery("");
							},
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: SECTIONS$1.filter((section) => value === "all" || section.group === value).length })]
						}, value))
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-cg-toolbar",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
								className: "dsh-cg-search",
								icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSearchOutlineRegular, {}),
								type: "search",
								"aria-label": "搜索基础组件",
								placeholder: "搜索组件",
								value: query,
								onChange: (event) => setQuery(event.currentTarget.value)
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								className: "dsh-cg-result-count",
								role: "status",
								children: [
									activeLabel,
									" · ",
									visible.length,
									" 组"
								]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconAction, {
								label: "重置全部示例",
								onClick: () => {
									setResetKey((value) => value + 1);
									setGroup("actions");
									setQuery("");
									clearToast();
								},
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconRefreshOutlineRegular, {})
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "dsh-cg-list",
						children: visible.map(({ key, component: Component }) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Component, { notify }, key))
					}, resetKey),
					visible.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-cg-empty",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSearchOutlineRegular, {}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "没有匹配的组件" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								size: "sm",
								variant: "outline",
								onClick: () => {
									setQuery("");
									setGroup("all");
								},
								children: "清除筛选"
							})
						]
					}),
					toast && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Toast, {
						text: toast.text,
						icon: toast.error ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconWarningOutlineRegular, {}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {}),
						onDone: clearToast
					}, toast.id)
				]
			});
		}
		//#endregion
		//#region src/client/DesignBoard.tsx
		const SECTION_GROUPS = [
			{
				label: "总览",
				sections: [{
					id: "overview",
					label: "系统总览",
					icon: _deepseek_ai_dsh_client_ui_primitives.IconPanelLeftOutlineRegular
				}]
			},
			{
				label: "基础资源",
				sections: [
					{
						id: "foundations",
						label: "颜色与字体",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconPersonalizationOutlineRegular
					},
					{
						id: "icons",
						label: "图标",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconListPenOutlineRegular
					},
					{
						id: "primitives",
						label: "基础组件",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular
					}
				]
			},
			{
				label: "规范",
				sections: [
					{
						id: "states",
						label: "状态与响应式",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconLoadingOutlineRegular
					},
					{
						id: "accessibility",
						label: "无障碍",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular
					},
					{
						id: "governance",
						label: "实现记录",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconInspectOutlineRegular
					}
				]
			},
			{
				label: "产品页面",
				sections: [
					{
						id: "shell",
						label: "应用框架",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconPanelLeftOutlineRegular
					},
					{
						id: "sidebar",
						label: "侧边栏",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconFolderOpenRegular
					},
					{
						id: "settings",
						label: "设置弹窗",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconSettingsOutlineRegular
					},
					{
						id: "session",
						label: "会话标题栏",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconAgentPresetOutlineRegular
					},
					{
						id: "chat",
						label: "对话流",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconNewChatOutlineRegular
					},
					{
						id: "composer",
						label: "输入区",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular
					},
					{
						id: "trajectory",
						label: "轨迹",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconDataOutlineRegular
					},
					{
						id: "overlays",
						label: "浮层与全局反馈",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconWarningOutlineRegular
					}
				]
			}
		];
		const SECTIONS = SECTION_GROUPS.flatMap((group) => group.sections);
		const TOKEN_GROUPS = [
			{
				title: "表面与边界",
				source: "theme semantic aliases",
				tokens: [
					{
						token: "--dsw-alias-bg-base",
						label: "基础表面",
						usage: "应用和对话主工作面"
					},
					{
						token: "--dsw-alias-bg-layer-1",
						label: "第一层表面",
						usage: "输入与基础浮起面"
					},
					{
						token: "--dsw-alias-bg-layer-2",
						label: "第二层表面",
						usage: "设置与模块面板"
					},
					{
						token: "--dsw-alias-bg-layer-3",
						label: "第三层表面",
						usage: "菜单和更高层浮起面"
					},
					{
						token: "--dsw-alias-bg-overlay",
						label: "浮层表面",
						usage: "遮罩上的浮层"
					},
					{
						token: "--dsw-alias-bg-mask-1",
						label: "第一层遮罩",
						usage: "普通阻断遮罩"
					},
					{
						token: "--dsw-alias-bg-mask-2",
						label: "第二层遮罩",
						usage: "轻量遮罩和背景压暗"
					},
					{
						token: "--dsw-alias-bg-mask-3",
						label: "第三层遮罩",
						usage: "更强的阻断遮罩"
					},
					{
						token: "--dsw-alias-bg-mask-photo",
						label: "图片遮罩",
						usage: "图片内容上的强遮罩"
					},
					{
						token: "--dsw-alias-bg-mask-drop",
						label: "拖拽遮罩",
						usage: "拖拽进入时的覆盖层"
					},
					{
						token: "--dsw-alias-bg-module-platform",
						label: "平台模块背景",
						usage: "平台模块背景"
					},
					{
						token: "--dsw-alias-bg-multi-select",
						label: "多选背景",
						usage: "多选区域背景"
					},
					{
						token: "--dsw-alias-bg-skeleton",
						label: "骨架屏背景",
						usage: "加载占位区域"
					},
					{
						token: "--dsw-alias-border-inverted2",
						label: "第二级反色边界",
						usage: "反色表面的弱边界"
					},
					{
						token: "--dsw-alias-border-inverted",
						label: "反色边界",
						usage: "反色表面的边界"
					},
					{
						token: "--dsw-alias-border-l1",
						label: "第一层边界",
						usage: "弱分组边界"
					},
					{
						token: "--dsw-alias-border-l2-darkmode-thin",
						label: "暗色细第二层边界",
						usage: "暗色主题的细控件边界"
					},
					{
						token: "--dsw-alias-border-l2",
						label: "第二层边界",
						usage: "控件和面板边界"
					},
					{
						token: "--dsw-alias-border-l3",
						label: "第三层边界",
						usage: "焦点与强调边界"
					},
					{
						token: "--dsw-alias-border-l4",
						label: "第四层边界",
						usage: "更强的分隔和拖拽边界"
					},
					{
						token: "--dsw-alias-scrollbar-bg-l1",
						label: "第一层滚动条",
						usage: "普通内容滚动条滑块"
					},
					{
						token: "--dsw-alias-scrollbar-bg-l2",
						label: "第二层滚动条",
						usage: "菜单和浮层滚动条滑块"
					},
					{
						token: "--dsw-alias-scrollbar-hover-l1",
						label: "第一层滚动条悬停",
						usage: "普通内容滚动条悬停"
					},
					{
						token: "--dsw-alias-scrollbar-hover-l2",
						label: "第二层滚动条悬停",
						usage: "菜单和浮层滚动条悬停"
					}
				]
			},
			{
				title: "文字与交互",
				source: "theme semantic aliases",
				tokens: [
					{
						token: "--dsw-alias-label-primary",
						label: "主要文字",
						usage: "标题与主要正文"
					},
					{
						token: "--dsw-alias-label-primary-bluish",
						label: "冷色主要文字",
						usage: "需要冷色前景的主要文字"
					},
					{
						token: "--dsw-alias-label-primary-dimmed",
						label: "弱化主要文字",
						usage: "弱化的主要文字"
					},
					{
						token: "--dsw-alias-label-secondary",
						label: "次要文字",
						usage: "次级说明与控件"
					},
					{
						token: "--dsw-alias-label-tertiary",
						label: "第三级文字",
						usage: "元数据与摘要"
					},
					{
						token: "--dsw-alias-label-caption",
						label: "说明文字",
						usage: "弱提示和占位"
					},
					{
						token: "--dsw-alias-label-dimmed",
						label: "弱化辅助文字",
						usage: "最低优先级的辅助信息"
					},
					{
						token: "--dsw-alias-label-primary-foreground",
						label: "主要填充前景",
						usage: "主要填充色上的前景文字"
					},
					{
						token: "--dsw-alias-label-primary-inverted",
						label: "反色主要文字",
						usage: "反色表面的主要文字"
					},
					{
						token: "--dsw-alias-brand-primary-invert",
						label: "反色品牌主色",
						usage: "品牌反色配对前景"
					},
					{
						token: "--dsw-alias-brand-primary-new-colorprimary-new-color",
						label: "新品牌主色",
						usage: "源码中的品牌色兼容命名"
					},
					{
						token: "--dsw-alias-brand-primary",
						label: "品牌主色",
						usage: "品牌主色；不是链接蓝"
					},
					{
						token: "--dsw-alias-brand-text",
						label: "品牌文字",
						usage: "品牌文字；不是链接蓝"
					},
					{
						token: "--dsw-alias-interactive-bg-hover",
						label: "悬停背景",
						usage: "列表和图标悬停"
					},
					{
						token: "--dsw-alias-interactive-bg-hover-accent",
						label: "强调悬停背景",
						usage: "带业务强调的悬停"
					},
					{
						token: "--dsw-alias-interactive-bg-hover-solid",
						label: "不透明悬停背景",
						usage: "需要不透明悬停面的控件"
					},
					{
						token: "--dsw-alias-interactive-bg-active",
						label: "激活背景",
						usage: "按下或当前激活状态"
					},
					{
						token: "--dsw-alias-interactive-bg-hover-danger",
						label: "危险悬停背景",
						usage: "破坏性操作悬停"
					},
					{
						token: "--dsw-alias-button-contrast-fill",
						label: "高对比度填充",
						usage: "高对比度按钮填充"
					},
					{
						token: "--dsw-alias-button-elevated-fill",
						label: "抬升按钮填充",
						usage: "有边界的次级按钮表面"
					},
					{
						token: "--dsw-alias-button-floating-fill",
						label: "浮动按钮填充",
						usage: "浮动操作按钮表面"
					},
					{
						token: "--dsw-alias-button-floating-hover",
						label: "浮动按钮悬停",
						usage: "浮动操作按钮悬停"
					},
					{
						token: "--dsw-alias-button-ghost-active-border",
						label: "幽灵按钮激活边界",
						usage: "幽灵按钮激活边界"
					},
					{
						token: "--dsw-alias-button-ghost-active-fill",
						label: "幽灵按钮激活填充",
						usage: "幽灵按钮激活填充"
					},
					{
						token: "--dsw-alias-button-ghost-hover",
						label: "幽灵按钮悬停",
						usage: "幽灵按钮悬停"
					},
					{
						token: "--dsw-alias-button-info-fill",
						label: "信息按钮填充",
						usage: "发送、确认等主要动作"
					},
					{
						token: "--dsw-alias-button-info-hover",
						label: "信息按钮悬停",
						usage: "主要动作悬停"
					},
					{
						token: "--dsw-alias-button-primary-dimmed",
						label: "Primary dimmed",
						usage: "弱化的主要按钮"
					},
					{
						token: "--dsw-alias-button-primary-fill",
						label: "Primary",
						usage: "主要按钮填充"
					},
					{
						token: "--dsw-alias-button-primary-hover",
						label: "Primary hover",
						usage: "主要按钮悬停"
					},
					{
						token: "--dsw-alias-button-tool-bar-fill-invisible",
						label: "Toolbar invisible",
						usage: "工具栏透明填充"
					},
					{
						token: "--dsw-alias-button-tool-bar-fill",
						label: "Toolbar",
						usage: "工具栏按钮填充"
					},
					{
						token: "--dsw-alias-button-tool-bar-hover",
						label: "Toolbar hover",
						usage: "工具栏按钮悬停"
					}
				]
			},
			{
				title: "状态与内容",
				source: "theme semantic aliases",
				tokens: [
					{
						token: "--dsw-alias-state-business-primary",
						label: "Business",
						usage: "品牌动作、选中和进行中"
					},
					{
						token: "--dsw-alias-state-business-tertiary",
						label: "Business tertiary",
						usage: "品牌状态的浅色背景"
					},
					{
						token: "--dsw-alias-state-warn-primary",
						label: "Warning",
						usage: "等待用户处理或注意"
					},
					{
						token: "--dsw-alias-state-warn-secondary",
						label: "Warning secondary",
						usage: "警告辅助背景或边界"
					},
					{
						token: "--dsw-alias-state-warn-tertiary",
						label: "Warning tertiary",
						usage: "弱警告背景"
					},
					{
						token: "--dsw-alias-state-warn-label",
						label: "Warning label",
						usage: "警告文字"
					},
					{
						token: "--dsw-alias-state-error-primary",
						label: "Error",
						usage: "错误、失败和删除动作"
					},
					{
						token: "--dsw-alias-state-error-secondary",
						label: "Error secondary",
						usage: "错误辅助背景或边界"
					},
					{
						token: "--dsw-alias-state-success-primary",
						label: "Success",
						usage: "完成和成功反馈"
					},
					{
						token: "--dsw-alias-state-success-secondary",
						label: "Success secondary",
						usage: "成功辅助背景或边界"
					},
					{
						token: "--dsw-alias-state-success-tertiary",
						label: "Success tertiary",
						usage: "弱成功背景"
					},
					{
						token: "--dsw-alias-markdown-code-block",
						label: "Code block",
						usage: "代码块背景"
					},
					{
						token: "--dsw-alias-markdown-code-block-banner",
						label: "Code block banner",
						usage: "代码块标题栏背景"
					},
					{
						token: "--dsw-alias-markdown-inline-code",
						label: "Inline code",
						usage: "行内代码背景"
					},
					{
						token: "--dsw-alias-markdown-code-segment-selected",
						label: "Code selected",
						usage: "代码选中片段"
					},
					{
						token: "--dsw-alias-markdown-code-segment-unselected",
						label: "Code unselected",
						usage: "代码未选中片段"
					},
					{
						token: "--dsw-alias-markdown-citation",
						label: "Citation",
						usage: "引用标记背景"
					},
					{
						token: "--dsw-alias-markdown-placeholder",
						label: "Placeholder",
						usage: "Markdown 占位内容"
					},
					{
						token: "--dsw-alias-markdown-tag",
						label: "Tag",
						usage: "Markdown 标签内容"
					},
					{
						token: "--dsw-alias-toast-bg",
						label: "Toast",
						usage: "全局 Toast 表面"
					},
					{
						token: "--dsw-alias-tooltip-bg",
						label: "Tooltip",
						usage: "Tooltip 和提示内容"
					}
				]
			},
			{
				title: "产品专用表面",
				source: "theme specific aliases",
				tokens: [
					{
						token: "--dsw-specific-bubble-highlight",
						label: "Bubble highlight",
						usage: "用户消息气泡的高亮层"
					},
					{
						token: "--dsw-specific-bubble",
						label: "Bubble",
						usage: "用户消息气泡"
					},
					{
						token: "--dsw-specific-input-major",
						label: "Input major",
						usage: "对话 Composer 表面"
					},
					{
						token: "--dsw-specific-login-input",
						label: "Login input",
						usage: "登录表单输入表面"
					},
					{
						token: "--dsw-specific-menu",
						label: "Menu",
						usage: "菜单组件表面"
					},
					{
						token: "--dsw-specific-selector",
						label: "Selector",
						usage: "Composer 添加按钮"
					},
					{
						token: "--dsw-specific-sidebar-fill",
						label: "Sidebar fill",
						usage: "侧栏产品模块"
					},
					{
						token: "--dsw-specific-sidebar-nav-item-active-accent",
						label: "Sidebar active accent",
						usage: "侧栏导航选中的强调层"
					},
					{
						token: "--dsw-specific-sidebar-nav-item-active",
						label: "Sidebar active",
						usage: "侧栏导航选中"
					},
					{
						token: "--dsw-specific-sidebar-nav-item-hover",
						label: "Sidebar hover",
						usage: "侧栏导航悬停"
					},
					{
						token: "--dsw-specific-tip",
						label: "Tip",
						usage: "任务、目标和队列提示条"
					}
				]
			}
		];
		const FOUNDATION_LAYERS = [
			[
				"基础基元",
				":root",
				"字体栈、代码字体、基础缓动曲线和过渡时长",
				"提供全局基线，不直接提供页面颜色。"
			],
			[
				"原始色阶",
				"body / body[data-ds-dark-theme]",
				"73 个琥珀色、蓝色、深度求索色、绿色、中性色、中性蓝灰色和红色色阶",
				"只作为语义别名的映射源；原始色阶名称不保证跨主题值绝对不变。"
			],
			[
				"语义别名",
				"body / body[data-ds-dark-theme]",
				"背景、边界、文字、按钮、状态和 Markdown 等语义角色",
				"组件优先消费这一层；主题切换只替换语义值。"
			],
			[
				"产品专用表面",
				"body / body[data-ds-dark-theme]",
				"侧栏、输入区、消息气泡、菜单、选择器和提示条等产品表面",
				"只在命名的产品模块使用，不推广为通用颜色。"
			],
			[
				"专项资源",
				"全局样式表",
				"语法高亮、滚动条、阴影、渐变文字",
				"只服务代码高亮、滚动条、层级或特定文字状态。"
			]
		];
		const STATIC_FAMILY_LABELS = {
			amber: "琥珀色",
			blue: "蓝色",
			deepseek: "深度求索色",
			green: "绿色",
			neutral: "中性色",
			"neutral-bluish": "中性蓝灰色",
			red: "红色"
		};
		const STATIC_FAMILIES = [
			["amber", [
				"100",
				"400",
				"500",
				"600",
				"900"
			]],
			["blue", [
				"50",
				"50p",
				"75",
				"100",
				"300",
				"400",
				"450",
				"500",
				"600",
				"800",
				"900",
				"950"
			]],
			["deepseek", [
				"50",
				"100",
				"200",
				"300",
				"400",
				"450",
				"500",
				"600",
				"700-delete",
				"800",
				"900"
			]],
			["green", [
				"100",
				"400",
				"500",
				"900"
			]],
			["neutral", [
				"00",
				"50",
				"100",
				"150",
				"200",
				"250",
				"300",
				"400",
				"500",
				"550",
				"600",
				"700",
				"800",
				"850",
				"900",
				"1000"
			]],
			["neutral-bluish", [
				"00",
				"50",
				"60",
				"75",
				"100",
				"150",
				"200",
				"300",
				"400",
				"500",
				"600",
				"700",
				"750",
				"800",
				"850",
				"875",
				"900",
				"950",
				"1000"
			]],
			["red", [
				"50",
				"100",
				"400",
				"500",
				"600",
				"900"
			]]
		];
		const FOUNDATION_THEME_RULES = [
			[
				"表面层级",
				"浅色：基础 / 第一层 / 第二层 / 第三层当前均为白；深色：中性蓝灰 950 / 875 / 850 / 800",
				"层级由语义名称和组件关系决定，不能依赖浅色主题的色差。"
			],
			[
				"文字阶梯",
				"主要文字 → 次要文字 → 第三级文字 → 说明文字",
				"标题和正文使用主要文字；说明和元数据逐级降低，不用透明度临时调灰。"
			],
			[
				"品牌与蓝色",
				"品牌主色与品牌文字接近黑或白；业务主色与信息按钮填充才是蓝色动作",
				"链接、发送和进行中状态使用对应业务蓝色，不把品牌色当作链接色。"
			],
			[
				"边界对比",
				"浅色使用黑色透明度；深色使用白色透明度",
				"第一至第四层边界代表强度；组件选择层级，不直接复制透明度。"
			],
			[
				"状态颜色",
				"业务、成功、警告、错误各有主要、辅助、弱背景或文字角色",
				"状态颜色必须与文案或图标一起表达，不能只靠颜色区分。"
			],
			[
				"遮罩与前景",
				"遮罩使用背景遮罩；主要填充前景和反色主要文字只与对应表面配对",
				"不要把前景 token 当普通正文颜色，也不要用黑色临时覆盖弹窗。"
			],
			[
				"代码专项",
				"Markdown 专用资源服务文档内容；语法高亮变量只服务代码着色",
				"代码背景、行内代码、引用和语法色与普通 UI 表面分开。"
			],
			[
				"滚动条",
				"普通内容绑定第一层；菜单和弹窗等抬升表面重新绑定第二层",
				"滚动条变量是渲染桥接，不是新增色阶。"
			]
		];
		const TYPE_ROWS = [
			{
				token: "--dsw-font-markdown-h1",
				label: "Markdown H1",
				metric: "24 / 34 · 700",
				specimen: "产品模块标题",
				status: "已消费"
			},
			{
				token: "--dsw-font-markdown-h2",
				label: "Markdown H2",
				metric: "22 / 32 · 700",
				specimen: "模块内大标题",
				status: "已消费"
			},
			{
				token: "--dsw-font-markdown-h3",
				label: "Markdown H3",
				metric: "20 / 30 · 700",
				specimen: "内容层级标题",
				status: "已消费"
			},
			{
				token: "--dsw-font-markdown-h4",
				label: "Markdown H4",
				metric: "16 / 28 · 600",
				specimen: "段落内标题",
				status: "已消费"
			},
			{
				token: "--dsw-font-markdown-base",
				label: "Markdown 正文",
				metric: "16 / 28 · 400",
				specimen: "连续助手回答与文档内容",
				status: "已消费"
			},
			{
				token: "--dsw-font-markdown-base-strong",
				label: "Markdown 强调",
				metric: "16 / 28 · 600",
				specimen: "重要正文内容",
				status: "已消费"
			},
			{
				token: "--dsw-font-markdown-base-italic",
				label: "Markdown 斜体",
				metric: "16 / 28 · 400 italic",
				specimen: "补充说明内容",
				status: "仅声明"
			},
			{
				token: "--dsw-font-markdown-base-strong-italic",
				label: "Markdown 粗斜体",
				metric: "16 / 28 · 600 italic",
				specimen: "强调的补充说明",
				status: "仅声明"
			},
			{
				token: "--dsw-font-markdown-table",
				label: "Markdown 表格",
				metric: "15 / 25 · 400",
				specimen: "表格正文内容",
				status: "已消费"
			},
			{
				token: "--dsw-font-markdown-table-head",
				label: "Markdown 表头",
				metric: "15 / 25 · 500",
				specimen: "表格列标题",
				status: "已消费"
			},
			{
				token: "--dsw-font-markdown-small",
				label: "Markdown 小号",
				metric: "14 / 24 · 400",
				specimen: "折叠内容和辅助正文",
				status: "仅声明"
			},
			{
				token: "--dsw-font-markdown-small-strong",
				label: "Markdown 小号强调",
				metric: "14 / 24 · 600",
				specimen: "小号重点内容",
				status: "仅声明"
			},
			{
				token: "--dsw-font-markdown-small-italic",
				label: "Markdown 小号斜体",
				metric: "14 / 24 · 400 italic",
				specimen: "小号补充说明",
				status: "仅声明"
			},
			{
				token: "--dsw-font-markdown-small-strong-italic",
				label: "Markdown 小号粗斜体",
				metric: "14 / 24 · 600 italic",
				specimen: "小号强调说明",
				status: "仅声明"
			},
			{
				token: "--dsw-font-markdown-code",
				label: "行内代码",
				metric: "14 / 22 · code",
				specimen: "src/client/index.ts",
				status: "已消费"
			},
			{
				token: "--dsw-font-markdown-code-block",
				label: "代码块",
				metric: "13 / 22 · code",
				specimen: "pnpm run build",
				status: "已消费"
			},
			{
				token: "--dsw-font-markdown-code-block-small",
				label: "紧凑代码",
				metric: "12 / 18 · code",
				specimen: "role=\"treeitem\"",
				status: "已消费"
			},
			{
				token: "--dsw-font-xl-24",
				label: "UI XL",
				metric: "24 / 32 · 600",
				specimen: "大型浮层标题",
				status: "仅声明"
			},
			{
				token: "--dsw-font-l-20",
				label: "UI L",
				metric: "20 / 28 · 500",
				specimen: "浮层说明标题",
				status: "已消费"
			},
			{
				token: "--dsw-font-m-18",
				label: "UI M",
				metric: "16 / 28 · 500",
				specimen: "名称含 18，实际字号 16px",
				status: "仅声明"
			},
			{
				token: "--dsw-font-base-16",
				label: "UI Base",
				metric: "16 / 24 · 400",
				specimen: "发消息或做任务…",
				status: "仅声明"
			},
			{
				token: "--dsw-font-base-strong-16",
				label: "UI Base 强调",
				metric: "16 / 24 · 500",
				specimen: "正在执行任务",
				status: "仅声明"
			},
			{
				token: "--dsw-font-s-14",
				label: "列表 / 工具标题",
				metric: "14 / 22 · 400",
				specimen: "分析工作区插件层级与功能",
				status: "已消费"
			},
			{
				token: "--dsw-font-s-strong-14",
				label: "列表强调",
				metric: "14 / 22 · 500",
				specimen: "当前工作区",
				status: "已消费"
			},
			{
				token: "--dsw-font-xs-13",
				label: "控件 / 辅助信息",
				metric: "13 / 20 · 400",
				specimen: "DeepSeek V3.2 · 工具调用",
				status: "已消费"
			},
			{
				token: "--dsw-font-xs-strong-13",
				label: "控件强调",
				metric: "13 / 20 · 500",
				specimen: "对话 / 轨迹",
				status: "已消费"
			},
			{
				token: "--dsw-font-xxs-12",
				label: "紧凑元信息",
				metric: "12 / 18 · 400",
				specimen: "刚刚 · 2,304 tokens",
				status: "已消费"
			},
			{
				token: "--dsw-font-xxs-strong-12",
				label: "紧凑强调",
				metric: "12 / 18 · 500",
				specimen: "进行中",
				status: "仅声明"
			},
			{
				token: "--dsw-font-xxxs-11",
				label: "极小元信息",
				metric: "11 / 14 · 400",
				specimen: "状态说明",
				status: "已消费"
			},
			{
				token: "--dsw-font-xxxs-strong-11",
				label: "极小强调",
				metric: "11 / 14 · 500",
				specimen: "分组标签",
				status: "仅声明"
			}
		];
		const TYPE_LABEL_ZH = {
			"Markdown H1": "内容一级标题",
			"Markdown H2": "内容二级标题",
			"Markdown H3": "内容三级标题",
			"Markdown H4": "内容四级标题",
			"Markdown 斜体": "文档斜体",
			"Markdown 粗斜体": "文档粗斜体",
			"Markdown 表格": "文档表格",
			"Markdown 表头": "文档表头",
			"Markdown 小号": "文档小号",
			"Markdown 小号强调": "文档小号强调",
			"Markdown 小号斜体": "文档小号斜体",
			"Markdown 小号粗斜体": "文档小号粗斜体",
			"Markdown 正文": "文档正文",
			"Markdown 强调": "文档正文强调",
			"UI XL": "界面特大字号",
			"UI L": "界面大字号",
			"UI M": "界面中字号",
			"UI Base": "界面正文",
			"UI Base 强调": "界面正文强调"
		};
		const FOUNDATION_RULES = [
			["语义颜色", "优先选择语义变量；不要在组件 CSS 里写新的黑、灰、蓝或透明度。"],
			["字体角色", "先选内容类型或控件层级，再使用对应字体变量；字号和行高成对使用。"],
			["组件变体", "相同语义角色复用相同变体；页面只负责排列，不修改变体自身的尺寸。"],
			["产品专用", "产品专用变量只在它命名的产品表面使用，不把输入区或侧栏表面扩散到其他区域。"],
			["主题切换", "组件只引用语义变量或命名的产品专用变量；主题层替换值，组件不写浅色和深色两套颜色。原始色阶不是绝对不变值。"],
			["例外记录", "真实业务需要特殊颜色、动画或密度时，先命名变体并在实现记录中说明用途。"]
		];
		const FOUNDATION_FONT_STACKS = [[
			"UI 字体",
			"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif",
			"body、button、input、select、textarea 继承这一栈。"
		], [
			"代码字体",
			"'SF Mono', 'JetBrains Mono', 'Fira Code', Consolas, 'Liberation Mono', Menlo, Courier, 'PingFang SC', 'Microsoft YaHei'",
			"代码块、行内代码和工具输出使用这一栈，不追加裸 monospace。"
		]];
		const FOUNDATION_METRICS = [
			[
				"应用框架",
				"侧栏 264–420px，默认 280px；收起栏 56px；视口小于 1024px 自动收起",
				"框架持有列宽和收起状态；主内容始终使用 minmax(0, 1fr)。"
			],
			[
				"右侧详情区",
				"关闭 0；重新打开 360px；范围 300–520px；拖拽命中区 8px",
				"视觉分隔线可以更细，但可点击拖拽区域和 col-resize 光标不能省略。"
			],
			[
				"侧栏与列表",
				"分区标题 36px；工作区行 34px；会话行 32px；圆角 8px；横向内边距 8px",
				"对象层级使用两档固定密度；标题栏图标按钮 28×28，收起栏按钮 36×36。"
			],
			[
				"会话标题栏",
				"上 12px / 左 20px / 右 28px；标题行至少 32px；页签上间距 4px、间隔 36px、激活条 2px",
				"标题路径、能力动作和页签按真实出现条件排列，不为不存在的能力预留入口。"
			],
			[
				"对话阅读列",
				"最大宽度 748px；节点间距 16px；两侧安全留白 16px",
				"用户消息、助手正文、思考、工具、错误、运行状态和统计信息对齐到同一阅读轴。"
			],
			[
				"用户消息气泡",
				"最大 525px 或 82%；圆角 22px；内边距 10px 16px",
				"只用于用户与待发送消息；助手正文和工具节点不套用消息气泡。"
			],
			[
				"输入区",
				"卡片最大 780px；圆角 22px；顶部 10px；内部间距 12px；文本最多 336px / 14 行；发送或停止 34×34",
				"Todo、Goal、Queue 位于卡片上方；问题、审批和计划评审接管整个输入席位。"
			],
			[
				"设置弹窗",
				"面板 800px；高度 min(800px, 100vh−48px)；圆角 24px；导航 188px；标题 54px；选项内边距 24px",
				"单行输入 32px / 圆角 8px；切换设置页时保持面板尺寸和内容滚动区域稳定。"
			],
			[
				"轨迹视图",
				"工具栏 32px；时间概览 50px；事件列 122px；记录行至少 30px；检查器 320–440px；拖拽命中区 8px",
				"大历史使用虚拟行；窄空间事件列收至 50px，检查器转为覆盖层。"
			],
			[
				"浮层",
				"菜单 218–360px / 圆角 12px / 内边距 4px；弹窗 380px / 圆角 24px；悬浮卡 244px / 圆角 12px",
				"Tooltip/HoverCard z100、Modal z1000、Portal Menu 与 Toast z1100；关闭和焦点策略按类型处理。"
			]
		];
		const FOUNDATION_MOTION = [
			[
				"一级阴影",
				"0 2px 4px rgba(0,0,0,.05)",
				"用于最轻的抬升关系；不代替边界。"
			],
			[
				"一级模糊阴影",
				"0 4px 12px rgba(0,0,0,.02)",
				"一级阴影的柔和版本，只在已命名表面使用。"
			],
			[
				"二级阴影",
				"0 4px 12px rgba(0,0,0,.02) + 0 2px 8px rgba(0,0,0,.04)",
				"Composer 和浮动按钮等持续抬升表面使用。"
			],
			[
				"三级阴影",
				"0 0 1px rgba(0,0,0,.20) + 0 0 4px rgba(0,0,0,.02) + 0 12px 32px rgba(0,0,0,.08)",
				"Menu、Modal、HoverCard 和 Toast 等最高浮层使用。"
			],
			[
				"遮罩模糊",
				"blur(2px)",
				"与语义遮罩背景一起用于阻断式浮层；不能只加模糊而省略遮罩。"
			],
			[
				"共享过渡基线",
				"cubic-bezier(0.4, 0, 0.2, 1)；快速 0.1s / 默认 0.2s / 慢速 0.3s",
				"只提供基础过渡；产品组件仍可拥有经过验证的专用曲线和时长。"
			],
			[
				"运行文字",
				"TurnStatus：1.8s linear infinite",
				"“深度求索中...”使用文字 shimmer；15 秒后追加经过时间，不作为通用加载器。"
			],
			[
				"思考行",
				"ReasoningRow：300px 光带，2.6s ease-out infinite",
				"与运行文字是两个独立动效；动效关闭后仍保留图标、标题和状态文字。"
			],
			[
				"短暂提示",
				"Toast：进入 160ms ease-out；停留 3000ms；淡出 1000ms ease",
				"减少动效时取消位移进入，但保留淡出和定时卸载。"
			],
			[
				"减少动效",
				"prefers-reduced-motion: reduce",
				"没有源码级全局总开关；每个拥有动画的组件分别停止位移、静态化或保留必要的无位移淡出。"
			]
		];
		const ICON_GROUPS = [
			{
				title: "导航、工作区与设置",
				icons: [
					{
						label: "新建会话",
						name: "IconNewChatOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconNewChatOutlineRegular,
						size: 16,
						usage: "侧边栏和对话标题栏的新会话入口"
					},
					{
						label: "搜索",
						name: "IconSearchOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconSearchOutlineRegular,
						size: 16,
						usage: "工作区筛选和搜索入口"
					},
					{
						label: "视图选项",
						name: "IconPersonalizationOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconPersonalizationOutlineRegular,
						size: 16,
						usage: "工作区标题栏的视图选项"
					},
					{
						label: "添加工作区",
						name: "IconProjectAddOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconProjectAddOutlineRegular,
						size: 16,
						usage: "工作区标题栏添加工作区"
					},
					{
						label: "更多操作",
						name: "IconEllipsisOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconEllipsisOutlineRegular,
						size: 16,
						usage: "列表行操作菜单触发"
					},
					{
						label: "侧栏",
						name: "IconPanelLeftOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconPanelLeftOutlineRegular,
						size: 16,
						usage: "应用框架收起和展开侧栏"
					},
					{
						label: "网络",
						name: "IconGlobeOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconGlobeOutlineRegular,
						size: 14,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "设置（紧凑）",
						name: "IconSettingsOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconSettingsOutlineRegular,
						size: 14,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "设置",
						name: "IconSettingsOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconSettingsOutlineRegular,
						size: 16,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "完成",
						name: "IconCheckOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular,
						size: 16,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "完成（紧凑）",
						name: "IconCheckOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular,
						size: 14,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "分支",
						name: "IconBranchOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconBranchOutlineRegular,
						size: 16,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "向下",
						name: "IconChevronDownOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular,
						size: 14,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "向左",
						name: "IconChevronLeftOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconChevronLeftOutlineRegular,
						size: 14,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "向右",
						name: "IconChevronRightOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconChevronRightOutlineRegular,
						size: 14,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "展开",
						name: "IconTriangleRightFillRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconTriangleRightFillRegular,
						size: 14,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "向上",
						name: "IconChevronUpOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconChevronUpOutlineRegular,
						size: 14,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "关闭",
						name: "IconCloseOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconCloseOutlineRegular,
						size: 16,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "关闭（填充）",
						name: "IconCloseFillRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconCloseFillRegular,
						size: 14,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "刷新",
						name: "IconRefreshOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconRefreshOutlineRegular,
						size: 16,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "刷新（紧凑）",
						name: "IconRefreshOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconRefreshOutlineRegular,
						size: 14,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "分享",
						name: "IconShareOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconShareOutlineRegular,
						size: 16,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "编辑",
						name: "IconEditOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconEditOutlineRegular,
						size: 16,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "浏览",
						name: "IconBrowseOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconBrowseOutlineRegular,
						size: 16,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "链接（紧凑）",
						name: "IconLinkOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconLinkOutlineRegular,
						size: 14,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "链接",
						name: "IconLinkOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconLinkOutlineRegular,
						size: 16,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "外部链接（紧凑）",
						name: "IconRightUpOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconRightUpOutlineRegular,
						size: 14,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "外部链接",
						name: "IconRightUpOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconRightUpOutlineRegular,
						size: 16,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "增强",
						name: "IconEnhanceOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconEnhanceOutlineRegular,
						size: 16,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "轮廓文件夹",
						name: "IconFolderOpenOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconFolderOpenOutlineRegular,
						size: 16,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "打开文件夹",
						name: "IconFolderOpenRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconFolderOpenRegular,
						size: 16,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "关闭文件夹",
						name: "IconFolderCloseRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconFolderCloseRegular,
						size: 16,
						usage: "导航、工作区、设置和浮层动作"
					},
					{
						label: "树节点连接",
						name: "IconTreeCornerRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconTreeCornerRegular,
						size: 10,
						usage: "导航、工作区、设置和浮层动作"
					}
				]
			},
			{
				title: "对话、反馈与运行状态",
				icons: [
					{
						label: "添加内容",
						name: "IconPlusOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular,
						size: 16,
						usage: "Composer 添加附件、任务或上下文"
					},
					{
						label: "发送",
						name: "IconSendOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconSendOutlineRegular,
						size: 16,
						usage: "Composer 发送消息"
					},
					{
						label: "发送（紧凑）",
						name: "IconSendOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconSendOutlineRegular,
						size: 14,
						usage: "对话流、Composer 和反馈动作"
					},
					{
						label: "复制",
						name: "IconCopyOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconCopyOutlineRegular,
						size: 16,
						usage: "助手消息复制操作"
					},
					{
						label: "赞同",
						name: "IconLikeOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconLikeOutlineRegular,
						size: 16,
						usage: "助手消息正向反馈"
					},
					{
						label: "赞同（填充）",
						name: "IconLikeFillRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconLikeFillRegular,
						size: 16,
						usage: "对话流、Composer 和反馈动作"
					},
					{
						label: "不赞同",
						name: "IconDislikeOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconDislikeOutlineRegular,
						size: 16,
						usage: "助手消息负向反馈"
					},
					{
						label: "不赞同（填充）",
						name: "IconDislikeFillRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconDislikeFillRegular,
						size: 16,
						usage: "对话流、Composer 和反馈动作"
					},
					{
						label: "思考",
						name: "IconThinkOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconThinkOutlineRegular,
						size: 14,
						usage: "思考状态的紧凑 leading icon"
					},
					{
						label: "思考（16px）",
						name: "IconThinkOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconThinkOutlineRegular,
						size: 16,
						usage: "对话流、Composer 和反馈动作"
					},
					{
						label: "用户",
						name: "IconUserOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconUserOutlineRegular,
						size: 16,
						usage: "对话流、Composer 和反馈动作"
					},
					{
						label: "上下文注入",
						name: "IconContextInjectionOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconContextInjectionOutlineRegular,
						size: 16,
						usage: "对话流、Composer 和反馈动作"
					},
					{
						label: "附件",
						name: "IconPaperclipOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconPaperclipOutlineRegular,
						size: 16,
						usage: "对话流、Composer 和反馈动作"
					},
					{
						label: "停止",
						name: "IconStopFillRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconStopFillRegular,
						size: 16,
						usage: "对话流、Composer 和反馈动作"
					},
					{
						label: "加载",
						name: "IconLoadingOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconLoadingOutlineRegular,
						size: 16,
						usage: "加载或等待状态"
					},
					{
						label: "警告",
						name: "IconWarningOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconWarningOutlineRegular,
						size: 16,
						usage: "对话流、Composer 和反馈动作"
					},
					{
						label: "下载",
						name: "IconDownloadOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconDownloadOutlineRegular,
						size: 16,
						usage: "对话流、Composer 和反馈动作"
					},
					{
						label: "播放",
						name: "IconPlayOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconPlayOutlineRegular,
						size: 16,
						usage: "对话流、Composer 和反馈动作"
					},
					{
						label: "暂停",
						name: "IconPauseOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconPauseOutlineRegular,
						size: 16,
						usage: "对话流、Composer 和反馈动作"
					},
					{
						label: "全屏",
						name: "IconFullscreenOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconFullscreenOutlineRegular,
						size: 16,
						usage: "对话流、Composer 和反馈动作"
					}
				]
			},
			{
				title: "能力、主题、数据与任务",
				icons: [
					{
						label: "工具代码",
						name: "IconCodeOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconCodeOutlineRegular,
						size: 16,
						usage: "工具行和代码结果的 leading icon"
					},
					{
						label: "Agent 预设",
						name: "IconAgentPresetOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconAgentPresetOutlineRegular,
						size: 16,
						usage: "设置、会话标题栏和预设选择"
					},
					{
						label: "插件",
						name: "IconCordisPluginOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconCordisPluginOutlineRegular,
						size: 14,
						usage: "设置中的插件入口或插件状态"
					},
					{
						label: "API",
						name: "IconApiOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconApiOutlineRegular,
						size: 14,
						usage: "设置、能力、任务和轨迹"
					},
					{
						label: "目标",
						name: "IconGoalOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconGoalOutlineRegular,
						size: 16,
						usage: "Goal 面板入口"
					},
					{
						label: "技能",
						name: "IconSkillOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconSkillOutlineRegular,
						size: 16,
						usage: "Skill 面板入口"
					},
					{
						label: "浅色",
						name: "IconLightOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconLightOutlineRegular,
						size: 16,
						usage: "主题设置的浅色选项"
					},
					{
						label: "深色",
						name: "IconDarkOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconDarkOutlineRegular,
						size: 16,
						usage: "主题设置的深色选项"
					},
					{
						label: "跟随系统",
						name: "IconFollowsystemOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconFollowsystemOutlineRegular,
						size: 16,
						usage: "设置、能力、任务和轨迹"
					},
					{
						label: "删除",
						name: "IconTrashOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconTrashOutlineRegular,
						size: 16,
						usage: "删除工作区等破坏性动作"
					},
					{
						label: "数据",
						name: "IconDataOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconDataOutlineRegular,
						size: 16,
						usage: "设置、能力、任务和轨迹"
					},
					{
						label: "数据库",
						name: "IconDatabaseOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconDatabaseOutlineRegular,
						size: 16,
						usage: "设置、能力、任务和轨迹"
					},
					{
						label: "时间",
						name: "IconClockOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconClockOutlineRegular,
						size: 16,
						usage: "设置、能力、任务和轨迹"
					},
					{
						label: "队列",
						name: "IconQueueOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconQueueOutlineRegular,
						size: 14,
						usage: "设置、能力、任务和轨迹"
					},
					{
						label: "清单",
						name: "IconChecklistOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconChecklistOutlineRegular,
						size: 14,
						usage: "设置、能力、任务和轨迹"
					},
					{
						label: "列表",
						name: "IconListPenOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconListPenOutlineRegular,
						size: 16,
						usage: "设置、能力、任务和轨迹"
					},
					{
						label: "智能增强",
						name: "IconSparkleRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconSparkleRegular,
						size: 16,
						usage: "设置、能力、任务和轨迹"
					},
					{
						label: "检查",
						name: "IconInspectOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconInspectOutlineRegular,
						size: 12,
						usage: "设置、能力、任务和轨迹"
					},
					{
						label: "帮助",
						name: "IconQuestionOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconQuestionOutlineRegular,
						size: 14,
						usage: "设置、能力、任务和轨迹"
					},
					{
						label: "定时",
						name: "IconAlarmClockOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconAlarmClockOutlineRegular,
						size: 16,
						usage: "设置、能力、任务和轨迹"
					},
					{
						label: "归档",
						name: "IconArchiveOutlineRegular",
						icon: _deepseek_ai_dsh_client_ui_primitives.IconArchiveOutlineRegular,
						size: 20,
						usage: "设置、能力、任务和轨迹"
					}
				]
			}
		];
		const A11Y_CHECKS = [
			[
				"键盘路径",
				"Tab 顺序覆盖页面中所有可操作元素；Enter/Space 执行动作，Esc 收束当前浮层。",
				"失败：只能用鼠标打开、提交或关闭。"
			],
			[
				"可访问名称",
				"图标按钮有 aria-label；菜单、弹窗和表单控件有可读名称与关联说明。",
				"失败：读屏只能得到“button”或重复的无意义名称。"
			],
			[
				"状态语义",
				"selected、expanded、disabled、readonly、busy 等状态同时反映到 ARIA 或原生属性。",
				"失败：视觉上选中或加载，但 DOM 没有对应状态。"
			],
			[
				"焦点可见",
				"键盘焦点使用清晰的 focus-visible 边界，不能用 outline: none 隐藏。",
				"失败：焦点进入后无法判断当前位置。"
			],
			[
				"颜色独立",
				"错误、成功、选中和进行中同时有文字、图标、位置或结构信号。",
				"失败：只靠红、绿、蓝或动画区分状态。"
			],
			[
				"动效收束",
				"每个带动画的组件单独处理 prefers-reduced-motion；关闭后仍保留信息和动作。",
				"失败：系统减少动效仍持续 shimmer、sweep 或位移。"
			],
			[
				"浮层焦点",
				"Modal 打开时焦点进入对话框，关闭后回到触发源；Menu/Tooltip 按各自交互方式收束。",
				"失败：焦点留在遮罩后或关闭后丢失。"
			]
		];
		const TRAJECTORY_RULES = [
			[
				"视图根",
				"height 100% · overflow hidden · bg-layer-1",
				"轨迹是会话中的独立视图，工具栏固定，下面的账本和详情检查器共享一个受限容器。"
			],
			[
				"工具栏",
				"32px · sticky top 0 · gap 8px · controls 20px",
				"Duration、Turns、Calls 和搜索使用紧凑控制；按下状态通过 aria-pressed 保持可读。"
			],
			[
				"时间概览",
				"50px · labels 44px · track crosshair",
				"Input、Model、Tools 三条 lane 使用相同时间域；拖选、滚轮缩放和 Escape 复位。"
			],
			[
				"事件账本",
				"event column 122px · row min 30px",
				"记录按 turn 分组；历史分页位于顶部，加载时保留读者位置。"
			],
			[
				"记录生命周期",
				"completed · pending · failed",
				"每条记录保留角色、内容、时间和错误信息；pending 不伪造完成时间。"
			],
			[
				"虚拟滚动",
				"only visible rows + 12-row buffer",
				"大历史记录只挂载可见窗口；表头、加载条和详情不与行内容争夺滚动轴。"
			],
			[
				"记录检查器",
				"内嵌 split pane · adjustable width",
				"选择记录后显示 Summary、Payload、Result、Timing；关闭或切换记录不离开轨迹。"
			],
			[
				"响应式职责",
				"event column 122px → 50px · inspector overlay",
				"窄空间优先收缩事件列；检查器转为覆盖层，轨道与账本继续独立滚动。"
			]
		];
		const COMPOSER_RULES = [
			[
				"共享宽度轴",
				"content 748px · card max 780px · side clearance 16px",
				"对话流、dock、接管面板和 Composer 围绕同一会话阅读轴排列；输入卡片比正文宽 32px。"
			],
			[
				"dock 区",
				"conversation.input.dock · order Todo 0 / Goal 10 / Queue 20",
				"dock 位于 Composer 上方，按会话数据出现；它不是消息流节点，也不进入卡片内部。"
			],
			[
				"输入卡片",
				"top pad 10px · gap 12px · r22 · shadow lv2",
				"卡片使用 input-major 表面和 darkmode-thin border；空工作区改为同半径的虚线选择工作区触发器。"
			],
			[
				"文本层",
				"16/24 · hero floor 52px · cap 14 lines",
				"textarea、backdrop、mirror 共享一个滚动偏移，编辑和引用高亮不能漂移；只有文本区域滚动。"
			],
			[
				"附件与提示",
				"attachment rail before text · notice 12/18 r8",
				"附件在文本前；局部错误或提示在卡片外上方，不能伪装为消息或 Toast。"
			],
			[
				"左侧工具",
				"add 28px circular · selection controls 28px / r8",
				"添加、权限/计划等使用独立控件；选择项是下拉选择，不用外观相似的按钮冒充。"
			],
			[
				"右侧动作",
				"model select + context meter + send/stop 34px circular",
				"发送使用 info fill；普通运行时主动作改为停止，连续子代理则保留 Send 并显示独立 Stop。"
			],
			[
				"接管面板",
				"question · approval · plan review",
				"提问、审批、计划评审会替换 Composer seat；保持共享宽度，不在普通输入卡片下追加第二套表单。"
			]
		];
		const CHAT_FLOW_RULES = [
			[
				"滚动所有权",
				"conversation scroll body",
				"会话根持有单一纵向滚动轴；ChatView 在该容器中作为普通内容流，不再创建第二个竞争滚动区。"
			],
			[
				"内容列",
				"max-width 748px · centered · vertical gap 16px",
				"助手正文、用户气泡、上下文、工具、错误和状态行都对齐到同一阅读轴。"
			],
			[
				"历史加载",
				"top-of-flow · button r14 · padding 4/12",
				"加载更早记录时保存阅读锚点，prepend 后不把读者跳到另一条消息。"
			],
			[
				"跟随策略",
				"reader scroll disables follow",
				"新用户消息、待发送项和读者停在底部时可以跟随；读者上翻后保留当前位置。"
			],
			[
				"回到底部",
				"34×34 · circular · sticky zero-height slot",
				"独立于 Composer；只在离开底部后显示，不增加 scrollHeight。"
			],
			[
				"进行中",
				"TurnStatus 26px · shimmer 1.8s",
				"覆盖本轮首次 token、工具和 streaming 阶段；15 秒后补充经过时间。"
			],
			[
				"思考与错误",
				"ReasoningRow sweep 300px/2.6s · error text + code + retry",
				"思考、工具、错误和重试保持不同的节点结构，不能泛化为同一种“消息卡片”。"
			],
			[
				"会话统计",
				"12/20 · centered · ellipsis",
				"元数据位于对话流尾部并与阅读列对齐；超长内容只截断这一行。"
			]
		];
		const SESSION_HEADER_RULES = [
			[
				"标题区",
				"top 12px · left 20px · right 28px · title row min 32px",
				"标题栏属于会话视图；当前会话和子代理路径共用 breadcrumb 结构。"
			],
			[
				"层级路径",
				"gap 4px · crumb 14/20 · current 500",
				"普通会话没有父级路径时展示当前会话；子代理显示可返回的祖先路径。"
			],
			[
				"标题栏动作槽",
				"min-height 28px · gap 8px",
				"Agent 预设、子代理目录、后台任务各自按能力注册；没有能力时不占入口。"
			],
			[
				"子代理触发",
				"min-height 28px · pad 3/2 · r6 · 12/18 · count margin 5",
				"使用状态点、数量和 disclosure；不是虚构的“子代理图标按钮”。"
			],
			[
				"后台任务触发",
				"min-height 28px · pad 3/2 · r6 · 12/18",
				"有任务时才出现；列表内按运行和已结束状态排序。"
			],
			[
				"右侧工具区",
				"gap 8px · margin-left 20px",
				"Session 日志和分享等是独立插件贡献，不能当作原生标题栏保证存在。"
			],
			[
				"页签",
				"margin-top 4px · left 8px · gap 36px · text 13/16 · active bar 2px",
				"“对话 / 轨迹”由会话视图切换，页签数大于 1 时才显示。"
			]
		];
		const SETTINGS_RULES = [
			[
				"遮罩",
				"viewport fixed · z1000 · bg-mask-1 + mask blur",
				"设置是阻断式工作面；点击遮罩或 Esc 的关闭行为必须与未保存状态协调。"
			],
			[
				"面板",
				"800px × min(800px, 100vh−48px) · max-width 100vw−48px · r24",
				"切换设置页时面板尺寸稳定；超出内容只在 options 区滚动。"
			],
			[
				"导航轨",
				"188px · top 22px · side 12px · gap 18px",
				"设置页入口属于 shell 导航；选中项使用 40px / r12 的 nav cell。"
			],
			[
				"内容标题",
				"54px header · 24px options padding",
				"标题与关闭固定；字段、卡片和列表在 options 内滚动。"
			],
			[
				"单行字段",
				"Input 32px · r8 · icon slot 16px",
				"搜索、名称和凭据等单行值使用 Input，不使用 Composer。"
			],
			[
				"动作",
				"Button md 36px · sm 28px",
				"应用、取消、删除和添加使用基础 Button 变体，不在每个设置页重新定义。"
			],
			[
				"页面状态",
				"saved · dirty · saving · invalid · readonly · error",
				"状态由具体设置页持有；shell 只负责导航、滚动和关闭流程。"
			]
		];
		const SIDEBAR_RULES = [
			[
				"宽度与滚动",
				"264–420px · default 280px",
				"侧边栏整体固定宽度；品牌和设置固定，工作台/工作区/会话区域独立滚动。"
			],
			[
				"品牌标题区",
				"40px row · wordmark + 28×28 collapse",
				"品牌是第一视觉信号；收起动作使用标题栏图标按钮变体。"
			],
			[
				"新会话",
				"38px · r12 · elevated fill + border L2",
				"宽侧栏使用带文字的整行入口；rail 切换为 36×36 图标按钮。"
			],
			[
				"分区标题",
				"36px · label 14/20 · actions 28×28 · gap 4",
				"工作台与工作区共享同一标题行和搜索/视图/添加按钮变体。"
			],
			[
				"对象行",
				"工作区 34px · 会话 32px · r8 · horizontal 8px",
				"对象层级造成两档密度；同类行跨分区保持一致。"
			],
			[
				"选中与悬停",
				"semantic hover / active fills",
				"选中、hover、running、menu-open 可叠加；不能通过改变行高或圆角表达。"
			],
			[
				"行级操作",
				"ellipsis only on hover/focus/menu-open",
				"菜单触发不切换 treeitem；重命名与删除使用统一菜单项密度。"
			],
			[
				"收起 rail",
				"56px",
				"保留品牌、展开、新会话、工作区入口和设置；隐藏文字不是删除功能。"
			]
		];
		const SHELL_RULES = [
			[
				"侧边栏列",
				"min 264px · default 280px · max 420px · rail 56px",
				"应用框架持有宽度和收起状态；侧边栏页面只渲染自身内容。"
			],
			[
				"主内容列",
				"minmax(0, 1fr)",
				"始终保留标题栏、当前视图和 Composer 的可用宽度，不为详情区硬编码剩余尺寸。"
			],
			[
				"详情列",
				"closed 0 · reopen 360px · range 300–520px",
				"详情关闭时归零；重新打开使用默认宽度，再允许拖拽。"
			],
			[
				"拖拽命中",
				"8px invisible hit strip",
				"视觉分隔线可以更细，但鼠标命中区保持 8px，并提供 col-resize 光标。"
			],
			[
				"自动收起",
				"< 1024px → 56px rail",
				"视口级变化由应用框架决定；产品页面根据实际可用宽度重排。"
			],
			[
				"全局浮层",
				"shell.overlay · z20 · pointer-events: none",
				"浮层根不拦截主界面；具体子项显式恢复交互。"
			]
		];
		const MODULE_ROWS = [
			{
				layer: "基础资源",
				owner: "ui-theme / ui-primitives",
				slot: "全局样式 + 基础组件",
				dom: "令牌、Button、Input、Menu",
				states: "主题 / 焦点 / 禁用",
				source: "ui-theme, ui-primitives"
			},
			{
				layer: "应用框架",
				owner: "ui-layout / ui-sidebar",
				slot: "根节点 → 侧栏 | 对话 | 详情",
				dom: "AppFrame grid + overlay",
				states: "宽侧栏 / rail / 详情打开",
				source: "AppFrame.tsx + SidebarRoot.tsx"
			},
			{
				layer: "导航",
				owner: "ui-workspace",
				slot: "sidebar.workspaces",
				dom: "sectionHeader + treeitem 行",
				states: "搜索 / 选中 / 拖拽 / 重命名",
				source: "WorkspaceBrowser.tsx + Rows.tsx"
			},
			{
				layer: "对话",
				owner: "ui-conversation",
				slot: "conversation.view + conversation.composer",
				dom: "scrollBody + composerSeat",
				states: "初始 / 活动 / 阻塞 / 进行中",
				source: "ConversationRoot.tsx + InputBar.tsx"
			},
			{
				layer: "消息",
				owner: "ui-conversation/chat",
				slot: "conversation.chat.node",
				dom: "助手流 + 用户气泡",
				states: "流式 / 错误 / 重试",
				source: "AssistantMarkdown + MessageItem"
			},
			{
				layer: "工具",
				owner: "ui-tool",
				slot: "tool.call.toolview",
				dom: "DisclosureRow + 输入输出内容",
				states: "空闲 / 进行中 / 错误 / 展开",
				source: "ToolRow.tsx + ToolDetails.tsx"
			},
			{
				layer: "设置",
				owner: "ui-settings-*",
				slot: "settings.section / tab / item",
				dom: "弹窗 + 导航轨 + 表单",
				states: "已保存 / 待保存 / 无效 / 只读",
				source: "SettingsRoot + feature sections"
			},
			{
				layer: "反馈",
				owner: "ui-primitives + feature packages",
				slot: "shell.overlay / feature status",
				dom: "banner + toast + 空状态 / 加载",
				states: "成功 / 进行中 / 错误 / 空状态",
				source: "ConnectionBanner + Toast"
			},
			{
				layer: "无障碍",
				owner: "所有客户端模块",
				slot: "每个可交互根节点",
				dom: "button / treeitem / dialog / status",
				states: "焦点 / 键盘 / 减少动效",
				source: "roles + focus rules"
			}
		];
		const IMPLEMENTATION_AUDIT_ROWS = [
			[
				"语义颜色与字体",
				"已采用",
				"新实现优先使用 `--dsw-alias-*` 与已消费的字体令牌；原始色阶和“仅声明”字体不能被当作默认组件标准。"
			],
			[
				"阴影与遮罩",
				"已采用",
				"只使用一级、一级模糊、二级、三级阴影和 2px 遮罩模糊；具体表面归属以产品页为准。"
			],
			[
				"产品专用变量",
				"受限采用",
				"输入区、侧栏、消息气泡、菜单、选择器和提示条只在同名产品表面使用。"
			],
			[
				"局部固定颜色",
				"受控例外",
				"悬浮卡、用户引用标签和语法高亮保留源码局部值，不提升为共享颜色。"
			],
			[
				"历史未定义变量",
				"禁止采用",
				"模型设置中无法在当前主题层解析的历史变量只记录问题，不复制到基础资源或新页面。"
			],
			[
				"直接字号与间距",
				"需要归属",
				"源码中的固定值只有在对应产品页记录了组件、状态和原因后才能复用，不能据此推导全局刻度。"
			]
		];
		const IMPLEMENTATION_GATES = [
			["来源", "至少一份当前 DSH 组件或主题源码能证明名称、结构或数值。"],
			["归属", "标明语义角色、所属模块、挂载位置，以及通用组件或产品组合的边界。"],
			["状态", "列出触发、默认、悬停、按下、选中、焦点、禁用、加载、成功和错误中的适用项。"],
			["几何", "记录宽高、间距、圆角、滚动、层级和命中区域；不从相似页面猜值。"],
			["响应式", "写清外层断点与组件在实际可用宽度中的重排责任。"],
			["无障碍", "验证键盘路径、名称、ARIA/原生状态、焦点回归和减少动效。"],
			["回归", "构建与类型检查通过，并在现有 3080 GUI 中核对无溢出、无重叠和真实组件关系。"]
		];
		const GEOMETRY_ROWS = [
			[
				"侧边栏收起轨道",
				"56px",
				"收起后仍保留品牌、新会话、工作区操作和设置入口。"
			],
			[
				"工作区行 / 会话行",
				"34px / 32px",
				"对象层级不同，因此使用两档固定列表密度。"
			],
			[
				"对话内容宽度",
				"748px",
				"用户消息、助手正文和状态信息共享阅读基线。"
			],
			[
				"输入区最大宽度",
				"780px",
				"包含 748px 内容宽度和两侧各 16px 的控件留白。"
			],
			[
				"输入文字滚动上限",
				"336px",
				"最多展示 14 行，每行 24px，超过后在输入区内部滚动。"
			],
			[
				"菜单 / Modal / HoverCard",
				"218–360px / 380px / 244px",
				"操作菜单、阻断确认和延迟信息卡使用不同宽度。"
			],
			[
				"设置弹窗 / 左侧导航",
				"800px / 188px",
				"设置内容在固定导航与主表单之间分列。"
			]
		];
		function sectionFor(value) {
			if (value === "tokens" || value === "surfaces") return "foundations";
			if (value === "components") return "primitives";
			return SECTIONS.some((section) => section.id === value) ? value : "overview";
		}
		function SectionHeading({ title, detail, source }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-specimen-heading",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", { children: title }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: detail })] }), source !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("code", {
					className: "dsh-specimen-source",
					children: ["依据：", source]
				})]
			});
		}
		function BoardIntro({ path, title, children }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-specimen-intro",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: path }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h1", { children: title }),
					path.startsWith("产品页面") && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "dsh-board-specimen-kind",
						children: "静态组合参考"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children })
				]
			});
		}
		const TOKEN_LABEL_ZH = {
			Base: "基础表面",
			"Layer 1": "第一层表面",
			"Layer 2": "第二层表面",
			"Layer 3": "第三层表面",
			Overlay: "浮层表面",
			"Mask 1": "第一层遮罩",
			"Mask 2": "第二层遮罩",
			"Mask 3": "第三层遮罩",
			"Mask photo": "图片遮罩",
			"Mask drop": "拖拽遮罩",
			"Module platform": "平台模块背景",
			"Multi-select": "多选背景",
			Skeleton: "骨架屏背景",
			"Border inverted 2": "第二级反色边界",
			"Border inverted": "反色边界",
			"Border L1": "第一层边界",
			"Border L2 darkmode thin": "暗色细第二层边界",
			"Border L2": "第二层边界",
			"Border L3": "第三层边界",
			"Border L4": "第四层边界",
			"Scrollbar L1": "第一层滚动条",
			"Scrollbar L2": "第二层滚动条",
			"Scrollbar hover L1": "第一层滚动条悬停",
			"Scrollbar hover L2": "第二层滚动条悬停",
			"Ghost active border": "幽灵按钮激活边界",
			"Ghost active fill": "幽灵按钮激活填充",
			"Ghost hover": "幽灵按钮悬停",
			Info: "信息按钮填充",
			"Info hover": "信息按钮悬停",
			"Primary dimmed": "弱化主要按钮",
			Primary: "主要按钮填充",
			"Primary hover": "主要按钮悬停",
			"Toolbar invisible": "工具栏透明填充",
			Toolbar: "工具栏按钮填充",
			"Toolbar hover": "工具栏按钮悬停",
			Business: "业务状态",
			"Business tertiary": "业务状态浅色背景",
			Warning: "警告状态",
			"Warning secondary": "警告辅助背景",
			"Warning tertiary": "警告弱背景",
			"Warning label": "警告文字",
			Error: "错误状态",
			"Error secondary": "错误辅助背景",
			Success: "成功状态",
			"Success secondary": "成功辅助背景",
			"Success tertiary": "成功弱背景",
			"Code block": "代码块背景",
			"Code block banner": "代码块标题栏背景",
			"Inline code": "行内代码",
			"Code selected": "代码选中片段",
			"Code unselected": "代码未选中片段",
			Citation: "引用标记",
			Placeholder: "占位内容",
			Tag: "标签内容",
			Toast: "全局提示表面",
			Tooltip: "提示内容",
			"Bubble highlight": "用户气泡高亮",
			Bubble: "用户消息气泡",
			"Input major": "对话输入表面",
			"Login input": "登录输入表面",
			Menu: "菜单表面",
			Selector: "选择器表面",
			"Sidebar fill": "侧栏表面",
			"Sidebar active accent": "侧栏选中强调层",
			"Sidebar active": "侧栏选中背景",
			"Sidebar hover": "侧栏悬停背景",
			Tip: "提示条表面"
		};
		function TokenRow({ token, label, usage }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-specimen-token-row",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "dsh-specimen-swatch",
						style: { backgroundColor: `var(${token})` },
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-specimen-token-copy",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: TOKEN_LABEL_ZH[label] ?? label }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: token })]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: usage })
				]
			});
		}
		function StaticRamp() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "dsh-static-family-grid",
				children: STATIC_FAMILIES.map(([family, tokens]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
					className: "dsh-static-family",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-static-family-heading",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: STATIC_FAMILY_LABELS[family] ?? family }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [tokens.length, " 个色阶"] })]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "dsh-static-token-grid",
						children: tokens.map((level) => {
							const token = `--dsw-static-${family}-${level}`;
							const isThemeVariant = token === "--dsw-static-neutral-bluish-60";
							return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "dsh-static-token",
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "dsh-specimen-swatch",
										style: { backgroundColor: `var(${token})` },
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: token }),
									isThemeVariant && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "浅色 245,246,247 · 深色 249,250,251" })
								]
							}, token);
						})
					})]
				}, family))
			});
		}
		function Overview() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-specimen-content",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BoardIntro, {
						path: "总览",
						title: "系统总览",
						children: "DSH 是一个围绕会话展开的工作界面：左侧选择会话和工作区，设置在独立弹窗中完成配置，中间区域在对话和轨迹之间切换。产品区域负责布局和组合，共享组件通过统一的语义变体保持一致。"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "阅读顺序",
							detail: "先认识共享的颜色、字体、图标和基础组件，再用规范确定组合方法，最后到产品页面查看完整实例。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-board-layer-strip",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "01" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "基础资源" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "颜色 · 字体 · 图标 · 基础组件" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "02" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "规范" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "状态 · 响应式 · 无障碍 · 实现记录" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "03" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "产品页面" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "侧边栏 · 设置 · 会话 · 对话 · 轨迹" })
								] })
							]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "产品区域",
							detail: "先确定需求放在哪个区域，以选择正确的页面组合和周边关系。控件样式仍由语义角色和组件变体决定；同一变体跨区域保持一致。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-overview-page-map",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPanelLeftOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "应用框架" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "安排侧边栏、主内容和右侧详情，提供列宽调整与全局浮层位置。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconFolderOpenRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "侧边栏" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "品牌、收起、新会话、工作台、工作区、会话树和设置入口。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSettingsOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "设置弹窗" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "通用、模型、插件和 Agent 预设；每项配置拥有独立状态。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconAgentPresetOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "会话标题栏" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "父子路径、预设、子代理、后台任务与视图页签；工具可由插件追加。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconNewChatOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "对话流" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "用户与助手消息、思考过程、工具调用、结果和会话反馈。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "输入区" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "任务、目标、队列、附件、模式、模型、上下文、发送和会话统计。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconDataOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "轨迹" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "时间概览、搜索、轮次和工具折叠、事件账本、历史加载与记录检查。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconWarningOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "浮层与反馈" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "菜单、确认、提示、连接状态和错误反馈；各自有不同的关闭方式与层级。" })
								] })
							]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "一致性原则",
							detail: "组件先于页面。页面选择组件、变体与排列方式，不在局部重新定义控件自身的视觉。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-board-callouts",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "同一角色，同一变体" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "添加工作台与添加工作区都是标题栏添加按钮，统一为 28×28 的圆形图标按钮，并共享全部交互状态。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconInspectOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "差异必须有语义" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "只有功能或约束确实不同，才选择另一个已命名变体；例如 28px 标题栏按钮与 36px rail 按钮。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconWarningOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "页面不能改写组件" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "页面负责位置、间距和响应式编排；字号、内边距、边界、圆角、图标与状态由组件变体持有。" })
								] })
							]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "设计决策顺序",
							detail: "新增或修改 UI 时按同一套顺序判断，任何一步缺失都不进入产品页面。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-overview-workflow",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("b", { children: "1" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "明确任务" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "先说明要展示的信息、用户动作和完成反馈。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("b", { children: "2" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "确定区域" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "确定控件放置位置、相邻内容和页面组合关系。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("b", { children: "3" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "识别角色" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "判断它是图标按钮、菜单项、列表行、输入框还是其他语义组件。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("b", { children: "4" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "复用变体" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "同一角色和变体直接复用；差异必须对应明确的功能或密度要求。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("b", { children: "5" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "补齐状态" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "同时设计默认、hover、active、selected、focus、disabled、loading 和 error。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("b", { children: "6" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "校验一致性" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "并排比较字号、行高、间距、边界、圆角和图标尺寸，再验证实际环境。" })
								] })
							]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "关键尺寸",
							detail: "这些尺寸直接决定页面密度和行为；它们属于具体页面，并非一套脱离产品的全局刻度。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-board-geometry-table",
							children: GEOMETRY_ROWS.map((row) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: row[0] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: row[1] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: row[2] })
							] }, row[0]))
						})]
					})
				]
			});
		}
		function Foundations() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-specimen-content",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BoardIntro, {
						path: "基础资源 / 颜色与字体",
						title: "颜色与字体",
						children: "这里定义所有 DSH 页面共同使用的语义颜色、字体角色、层级和动效。先从本页选择资源与度量，再到产品页面确定它们如何组合。"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "资源分层",
							detail: "新页面从下往上使用资源：底层基元只提供基线，组件优先使用语义变量，产品专用变量只服务命名的产品表面。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-foundation-layer-table",
							children: FOUNDATION_LAYERS.map(([title, scope, resources, detail]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: title }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: scope }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-foundation-layer-detail",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: resources }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: detail })]
								})
							] }, title))
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "使用规则",
							detail: "这些规则用于阻止页面出现局部猜测出来的字号、边距、圆角或颜色。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-foundation-rule-grid",
							children: FOUNDATION_RULES.map(([title, detail]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: title }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: detail })] }, title))
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "明暗主题对照",
							detail: "主题层替换 token 的值，组件只保留语义引用。下面是选择资源时必须知道的跨主题行为。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-foundation-theme-table",
							children: FOUNDATION_THEME_RULES.map(([title, value, detail]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: title }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: value }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: detail })
							] }, title))
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "原始色阶",
							detail: "完整原始色阶仅供主题映射和特殊专项使用；产品组件不要直接消费原始 token。`neutral-bluish-60` 是当前源码中唯一发现浅色与深色值不同的原始名称。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(StaticRamp, {})]
					}),
					TOKEN_GROUPS.map((group) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: group.title,
							detail: group.title === "产品专用表面" ? "这些语义变量虽由主题层声明，但只服务具体产品表面；不要当作通用颜色。" : "使用对应的语义变量；明暗主题由主题层提供值，页面不写固定颜色。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-specimen-token-table",
							children: group.tokens.map((token) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TokenRow, { ...token }, token.token))
						})]
					}, group.title)),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "字体栈",
							detail: "字体角色只决定字号、行高和字重；字体家族遵循下面两套栈，由 shell 统一应用到正文和表单控件。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-foundation-font-table",
							children: FOUNDATION_FONT_STACKS.map(([title, value, detail]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: title }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: value }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: detail })
							] }, title))
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
								title: "字体角色",
								detail: "字号、行高和字重必须作为一个角色一起使用。示例文字用于比较实际密度，不代表额外的页面标题样式。"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "dsh-specimen-type-head",
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "角色" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "示例" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "字号 / 行高 / 字重" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "令牌" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "使用情况" })
								]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "dsh-specimen-type-table",
								children: TYPE_ROWS.map((row) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-specimen-type-row",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: TYPE_LABEL_ZH[row.label] ?? row.label }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", {
											style: { font: `var(${row.token})` },
											children: row.specimen
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: row.metric }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: row.token }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("em", {
											"data-status": row.status,
											children: row.status
										})
									]
								}, row.token))
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "页面度量",
							detail: "这些数值约束几何，不单独决定行为；实现仍需同时遵循对应产品页面的状态、交互、无障碍和源码例外。新增设计优先复用已验证的度量。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-foundation-metric-table",
							children: FOUNDATION_METRICS.map(([title, value, detail]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: title }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: value }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: detail })
							] }, title))
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "阴影与动效",
							detail: "阴影值、模糊、过渡基线和已验证的组件动效都写在表中；页面仍必须按所属组件的触发、完成和减少动效行为实现。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-foundation-motion-table",
							children: FOUNDATION_MOTION.map(([title, value, detail]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: title }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: value }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: detail })
							] }, title))
						})]
					})
				]
			});
		}
		function Shell() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-specimen-content",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BoardIntro, {
						path: "产品页面 / 应用框架",
						title: "应用框架",
						children: "应用框架只负责侧边栏、主内容、详情区和全局浮层的页面关系，也持有列宽、收起与拖拽状态。消息、Composer、轨迹和设置仍由各自页面定义。"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "布局规则",
							source: "ui-layout/AppFrame.tsx + ui-sidebar/SidebarRoot.tsx",
							detail: "页面先遵循列宽与收起规则，再把产品模块放进对应区域；应用框架不改变内部组件变体。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-shell-rule-table",
							children: SHELL_RULES.map(([title, value, detail]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: title }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: value }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: detail })
							] }, title))
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "三列布局",
							detail: "侧边栏、主内容和详情区保持独立；详情区可归零，overlay 使用绝对层。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-shell-diagram",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("aside", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "侧边栏" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "264–420px" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "default 280 · rail 56" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("main", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "主内容" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "标题栏 + 当前视图 + Composer" })] }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "dsh-shell-chat-lines",
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {})
										]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: "dsh-shell-composer-line" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "dsh-shell-resize-handle",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("aside", {
									className: "dsh-shell-details",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "详情区" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "0 / 300–520px" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "reopen 360 · hit strip 8" })
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-shell-overlay",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconInspectOutlineRegular, {}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "全局浮层 · z20 · 根层不拦截点击" })]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "框架状态",
							detail: "页面框架根据视口和用户操作切换列状态，同时保留主内容和关键入口。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-shell-state-grid",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPanelLeftOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "宽侧栏" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "侧边栏内容可见，工作区树和设置入口保持完整。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPanelLeftOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "56px rail" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "1024px 以下自动收起；保留品牌、新会话、工作区和设置入口。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconInspectOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "详情关闭 / 打开" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "关闭为 0；重新打开 360px，再在 300–520px 内拖拽。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCodeOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "全局浮层" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "根层 click-through，Toast、Banner 等子项按需要恢复交互。" })
								] })
							]
						})]
					})
				]
			});
		}
		function Conversation() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-specimen-content",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BoardIntro, {
						path: "产品页面 / 对话流",
						title: "对话流",
						children: "对话流负责按时间阅读用户、助手、思考、工具、上下文和错误信息。它在会话的单一滚动轴内工作；Composer 及其 Todo、Goal、Queue dock 由“输入区”页面定义。"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "阅读与滚动规则",
							source: "ui-conversation/ChatView.tsx + ConversationRoot.tsx",
							detail: "对话流保持稳定列宽和阅读位置；加载历史、运行状态与回到底部各自有明确位置和行为。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-chat-rule-table",
							children: CHAT_FLOW_RULES.map(([title, value, detail]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: title }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: value }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: detail })
							] }, title))
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "完整消息流",
							detail: "所有内容以 16px vertical rhythm 排列；每个节点保留其业务身份，而不是套进同一种卡片。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-chat-flow-specimen",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "dsh-chat-flow-column",
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: "dsh-chat-load-older",
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											children: "加载更早历史"
										})
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "dsh-chat-context-row",
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconInspectOutlineRegular, {}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "已压缩 409 条历史记录" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("i", {}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "展开查看摘要" })
										]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: "dsh-chat-user-row",
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
											className: "dsh-chat-user-bubble",
											children: "请按真实 DSH 模块重构样式看板。"
										})
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("article", {
										className: "dsh-chat-assistant",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: "我会先确认组件归属、状态和页面关系，再把重复控件收敛为同一个命名变体。" }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: "dsh-module-message-actions",
											children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
													type: "button",
													"aria-label": "复制",
													children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCopyOutlineRegular, {})
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
													type: "button",
													"aria-label": "赞同",
													children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconLikeOutlineRegular, {})
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
													type: "button",
													"aria-label": "不赞同",
													children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconDislikeOutlineRegular, {})
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "dsh-chat-reasoning",
										"data-running": "true",
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconThinkOutlineRegular, {}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "思考中" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("i", {}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "正在整理模块之间的关系" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, {})
										]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "dsh-chat-tool",
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCodeOutlineRegular, {}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "读取" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("i", {}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "ui-conversation/chat/ChatView.tsx" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, {})
										]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "dsh-chat-error",
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "本轮未完成" }),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "读取记录时出现错误" }),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "open-error" })
											] }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												children: "重试"
											})
										]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "dsh-chat-turn-status",
										children: ["深度求索中...", /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "15秒" })]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: "dsh-chat-pending",
										children: "待发送消息：继续核对轨迹页面。"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "dsh-chat-stats",
										children: [
											"25 轮 · 741 步",
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("i", {}),
											"LLM 325分7秒",
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("i", {}),
											"工具调用 14分7秒",
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("i", {}),
											"输入 124M tok · 输出 333K tok"
										]
									})
								]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: "dsh-chat-to-bottom",
								"aria-label": "回到最新消息",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, {})
							})]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "Composer dock 的相邻关系",
							detail: "Todo、Goal、Queue 是输入区上方的按序贡献，不属于消息流节点；它们共享会话内容宽度轴但各自按有无数据出现。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-chat-dock-order",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "Todo" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "order 0" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "计划投影存在时显示。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "Goal" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "order 10" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "当前目标投影存在时显示。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "Queue" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "order 20" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "会话队列存在时显示。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "快速跳转轨" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "当前无 native 实现" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "不能在产品页假设存在；需要先定义所有权、键盘路径和阅读锚点。" })
								] })
							]
						})]
					})
				]
			});
		}
		function Sidebar() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-specimen-content",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BoardIntro, {
						path: "产品页面 / 侧边栏",
						title: "侧边栏",
						children: "侧边栏负责身份入口、收起和新会话；下方再分成工作台、工作区、会话树和设置。宽侧栏和 56px 收起栏是同一套结构的两种呈现。"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "布局与密度",
							source: "ui-sidebar/SidebarRoot.module.css + ui-workspace/WorkspaceBrowser.tsx",
							detail: "侧边栏先固定区域与行高，再组合品牌、新会话、工作台、工作区、会话树和设置入口。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-sidebar-rule-table",
							children: SIDEBAR_RULES.map(([title, value, detail]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: title }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: value }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: detail })
							] }, title))
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "宽侧栏",
							detail: "品牌、收起、新会话和工作区共同组成左侧导航；工作台与工作区标题行使用同一组图标按钮。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-sidebar-specimen",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-sidebar-brand",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.BrandWordmark, {}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "收起侧边栏",
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPanelLeftOutlineRegular, {})
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "dsh-sidebar-new",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconNewChatOutlineRegular, {}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "新会话" })]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-sidebar-section-title",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "工作台" }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "搜索工作台",
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSearchOutlineRegular, {})
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "添加工作台",
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconProjectAddOutlineRegular, {})
									})] })]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-sidebar-workbench",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCordisPluginOutlineRegular, {}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "DSH UI 样式看板" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconEllipsisOutlineRegular, {})
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-sidebar-section-title",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "工作区" }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "搜索会话",
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSearchOutlineRegular, {})
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "添加工作区",
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconProjectAddOutlineRegular, {})
									})] })]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-sidebar-project",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconFolderOpenRegular, {}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "AI 项目" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconEllipsisOutlineRegular, {})
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-sidebar-rename",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
											type: "button",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconEditOutlineRegular, {}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "重命名" })]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("hr", {}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
											type: "button",
											className: "is-danger",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconTrashOutlineRegular, {}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "删除" })]
										})
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "dsh-sidebar-session",
									"data-selected": "true",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlayOutlineRegular, {}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "分析工作区插件层级与功能" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("time", { children: "刚刚" })
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "dsh-sidebar-session",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: "dsh-sidebar-session-empty" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "DSH Cordis 插件开发规范" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("time", { children: "8小时" })
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "收起与列表状态",
							detail: "收起后只保留可继续操作的入口；列表行的选中、运行、悬停菜单和重命名都需要单独处理。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-sidebar-state-grid",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPanelLeftOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "56px rail" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "Logo、展开、新会话和设置使用图标入口。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlayOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "进行中会话" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "状态点、子代理数量和当前会话标题同时出现。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconEditOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "重命名与删除" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "工作区菜单使用统一行高和图标槽；删除使用 danger 状态，不新增不存在的操作。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSearchOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "搜索与空列表" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "搜索工作台、搜索会话、无结果和加载状态不改变树的行高。" })
								] })
							]
						})]
					})
				]
			});
		}
		function Session() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-specimen-content",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BoardIntro, {
						path: "产品页面 / 会话标题栏",
						title: "会话标题栏",
						children: "标题栏是会话区域的总入口：它显示父子会话关系、当前 Agent 预设、子代理和后台任务，右侧工具区可由插件追加分享等操作，Session 日志也由独立插件提供。下方页签决定进入对话还是轨迹。"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "布局与贡献规则",
							source: "ui-conversation/ConversationSession.tsx + session header slots",
							detail: "标题栏提供层级与页签；动作入口来自按能力挂载的动作槽和工具槽。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-session-rule-table",
							children: SESSION_HEADER_RULES.map(([title, value, detail]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: title }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: value }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: detail })
							] }, title))
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "完整标题栏",
							detail: "单层会话只有当前标题；子代理增加可点击的父级路径。动作槽和工具槽保持独立。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-session-header-specimen",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "dsh-session-title-row",
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("nav", {
										"aria-label": "会话层级",
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												children: "AI 项目"
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "/" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "分析工作区插件层级与功能" })
										]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "dsh-session-header-actions",
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
												className: "dsh-session-preset",
												children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconAgentPresetOutlineRegular, {}), "Codex"]
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
												type: "button",
												className: "dsh-session-subagents",
												"aria-label": "8 个子代理，正在运行",
												children: [
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: "dsh-session-running-dot" }),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "8 个子代理" }),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, {})
												]
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
												type: "button",
												className: "dsh-session-jobs",
												"aria-label": "后台任务",
												children: [
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: "dsh-session-running-dot" }),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "2" }),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, {})
												]
											})
										]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: "dsh-session-header-tools",
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
											type: "button",
											className: "dsh-session-log",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconDownloadOutlineRegular, {}), "Session 日志"]
										})
									})
								]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "dsh-session-tabs",
								role: "tablist",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									role: "tab",
									"aria-selected": "true",
									children: "对话"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									role: "tab",
									"aria-selected": "false",
									children: "轨迹"
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "能力出现条件",
							detail: "不要为了视觉对称渲染不存在的入口；普通会话、运行任务和插件贡献的组合会不同。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-session-action-grid",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconAgentPresetOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "Agent 预设" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "当前会话显示预设；新会话页面才允许选择。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "子代理目录" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "状态点、数量和 disclosure；有子代理或加载态才出现。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "后台任务" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "有任务才出现；触发后展示按状态排序的任务清单。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCordisPluginOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "插件贡献" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "Session 日志、分享等独立挂载，未注册时标题栏不预留位置。" })
								] })
							]
						})]
					})
				]
			});
		}
		function Composer() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-specimen-content",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BoardIntro, {
						path: "产品页面 / 输入区",
						title: "输入区",
						children: "输入区是会话底部的连续工作面：按序显示 Todo、Goal、Queue dock，再提供多行编辑、附件、选择控件、上下文占用和发送或停止动作。它不是 32px 的单行 Input。"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "布局与责任",
							source: "ui-conversation/InputBar.tsx + InputBar.module.css",
							detail: "Composer 持有卡片、文本层、附件和工具栏；问题、审批和计划评审接管整个输入席位，而不是在输入卡片里堆叠表单。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-composer-rule-table",
							children: COMPOSER_RULES.map(([title, value, detail]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: title }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: value }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: detail })
							] }, title))
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "活动 Composer",
							detail: "dock 处于卡片上方；附件、文本和控制行位于同一张 r22 卡片中，所有控件有确定的尺寸与职责。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-composer-surface",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-composer-dock-stack",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconListPenOutlineRegular, {}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "任务" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "1 进行中 · 5 待处理" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, {})
										] }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconGoalOutlineRegular, {}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "进行中的目标" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "按真实 DSH 模块重构样式看板" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": "暂停目标",
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconStopFillRegular, {})
											})
										] }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconLoadingOutlineRegular, {}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "队列" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "2 条待发送消息" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, {})
										] })
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "dsh-composer-notice",
									children: "引用了 1 个文件；发送前会保留上下文关联。"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-composer-real-card",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: "dsh-composer-real-attachments",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCodeOutlineRegular, {}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": "移除附件",
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCloseFillRegular, {})
											})] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "附件 rail 位于文本层之前" })]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: "dsh-composer-real-text",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												"aria-hidden": "true",
												children: [
													"请按真实 ",
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("mark", { children: "DSH UI 样式看板" }),
													" 重构。"
												]
											}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("textarea", {
												"aria-label": "Composer 文本",
												readOnly: true,
												defaultValue: "请按真实 DSH UI 样式看板重构。",
												rows: 2
											})]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: "dsh-composer-real-row",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: "dsh-composer-real-tools",
												children: [
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
														type: "button",
														className: "dsh-composer-real-add",
														"aria-label": "打开命令菜单",
														children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular, {})
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
														"aria-label": "权限模式",
														defaultValue: "plan",
														children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
															value: "plan",
															children: "Plan"
														})
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
														"aria-label": "会话模式",
														defaultValue: "readonly",
														children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
															value: "readonly",
															children: "只读"
														})
													})
												]
											}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: "dsh-composer-real-trailing",
												children: [
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
														"aria-label": "选择模型",
														defaultValue: "v3",
														children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
															value: "v3",
															children: "DeepSeek V3.2"
														})
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
														type: "button",
														className: "dsh-composer-real-meter",
														"aria-label": "上下文占用",
														children: "42%"
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
														type: "button",
														className: "dsh-composer-real-send",
														"aria-label": "发送",
														children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSendOutlineRegular, {})
													})
												]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-composer-real-stats",
									children: [
										"25 轮 · 741 步",
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("i", {}),
										"LLM 325分7秒",
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("i", {}),
										"工具调用 14分7秒",
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("i", {}),
										"首 token 平均 13.8秒 · 36 tok/s"
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "输入状态与接管",
							detail: "运行和阻断改变可编辑性与主动作，但不改变宽度轴；不能为了复用把不同状态塞进相同的空白卡片。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-composer-state-grid",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "无工作区" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "r22 虚线卡片是选择工作区触发器；文本和工具控件禁用，点击整个卡片。" })] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "普通运行" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "textarea 只读；主 34px 动作切换为停止，TurnStatus 留在消息流中。" })] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "连续子代理" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "Send 保留，旁边独立 Stop；父会话不可用时显示只读说明。" })] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "附件拖入" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "页面级 DropOverlay 显示可接受/拒绝；类型或大小错误通过 Toast 反馈。" })] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "审批与问题" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "ApprovalPanel 和问题面板接管 Composer seat，保持内容宽度并给出明确选项。" })] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "计划评审" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "计划 Markdown、讨论、拒绝、批准与忙碌状态属于独立接管面板。" })] })
							]
						})]
					})
				]
			});
		}
		function Trajectory() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-specimen-content",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BoardIntro, {
						path: "产品页面 / 轨迹",
						title: "轨迹",
						children: "轨迹是独立的会话视图，用时间概览和事件账本展示模型、工具和上下文的执行过程。它有自己的工具栏、滚动区、搜索、折叠、历史分页和记录检查器，不等同于对话里的工具行。"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "布局与交互规则",
							source: "ui-trajectory/TrajectoryView.tsx + TrajectoryToolbar.tsx + TrajectoryTimeline.tsx + TrajectoryTable.tsx",
							detail: "工具栏、时间概览、事件账本和记录检查器各自承担不同的阅读任务，统一由轨迹视图管理滚动和选择。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-trajectory-rule-table",
							children: TRAJECTORY_RULES.map(([title, value, detail]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: title }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: value }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: detail })
							] }, title))
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "时间概览与工具栏",
							detail: "顶部固定工具栏负责时间宽度、轮次/工具折叠和搜索；时间概览用 Input、Model、Tools 三条轨道表达真实耗时。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-trajectory-frame",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-trajectory-toolbar",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
											type: "button",
											"data-active": "true",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlayOutlineRegular, {}), "Duration"]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
											type: "button",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, {}), "Turns"]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
											type: "button",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, {}), "Calls"]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSearchOutlineRegular, {}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
											"aria-label": "搜索轨迹",
											placeholder: "Search",
											readOnly: true
										})] })
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-trajectory-timeline",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "dsh-trajectory-lanes",
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "Input" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "Model" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "Tools" })
										]
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "dsh-trajectory-bars",
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("i", { className: "is-input" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("i", { className: "is-model" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("i", { className: "is-tool" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("i", { className: "is-error" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "TTFT 1.3s · decode 1.1s" })
										]
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-trajectory-body",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "dsh-trajectory-ledger",
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
												className: "dsh-trajectory-load-earlier",
												children: "… 加载更早历史"
											}),
											[
												[
													"#128",
													"USER",
													"请按真实模块重构样式看板。",
													"—"
												],
												[
													"#129",
													"ASSISTANT",
													"我先核对页面结构与可用组件。",
													"2.4s"
												],
												[
													"#130",
													"TOOL",
													"read · ui-conversation/InputBar.tsx",
													"0.8s"
												],
												[
													"#131",
													"SUBTOOL",
													"grep · conversation.session.header",
													"0.2s"
												],
												[
													"#132",
													"ASSISTANT",
													"正在整理模块之间的关系",
													"running"
												],
												[
													"#133",
													"COMPACTED",
													"已压缩 409 条历史记录",
													"—"
												],
												[
													"#134",
													"CONTEXT",
													"skill-catalog · agent preset",
													"—"
												]
											].map(([index, kind, text, time]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: `dsh-trajectory-row kind-${kind.toLowerCase()}`,
												children: [
													/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
														className: "dsh-trajectory-event",
														children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("b", { children: index }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("em", { children: kind })]
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
														className: "dsh-trajectory-content",
														children: text
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("time", { children: time })
												]
											}, index)),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: "dsh-trajectory-turn-break",
												children: [
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "Turn 25" }),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("i", {}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "3 steps · 2 tool calls" })
												]
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: "dsh-trajectory-row is-selected",
												children: [
													/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
														className: "dsh-trajectory-event",
														children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("b", { children: "#135" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("em", { children: "TOOL" })]
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
														className: "dsh-trajectory-content",
														children: "Bash · pnpm run check → Typecheck passed"
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("time", { children: "1.8s" })
												]
											})
										]
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("aside", {
										className: "dsh-trajectory-inspector",
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "Record #135" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": "关闭记录检查器",
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCloseFillRegular, {})
											})] }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("nav", { children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
													type: "button",
													"data-active": "true",
													children: "Summary"
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
													type: "button",
													children: "Payload"
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
													type: "button",
													children: "Result"
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
													type: "button",
													children: "Timing"
												})
											] }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: "dsh-trajectory-inspector-body",
												children: [
													/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dl", { children: [
														/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: "Event" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: "TOOL / Bash" })] }),
														/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: "Status" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", {
															className: "is-success",
															children: "Completed"
														})] }),
														/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: "Duration" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: "1.8s" })] }),
														/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("dt", { children: "Request" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("dd", { children: "Request #24" })] })
													] }),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h4", { children: "Result" }),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", { children: "Typecheck passed\\n0 errors" })
												]
											})
										]
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "轨迹中的完整状态",
							detail: "角色、生命周期和阅读状态是三个独立维度；进行中不虚构耗时，失败记录保留错误和重试入口。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-trajectory-state-grid",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "7 类记录" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "SYSTEM · USER · CONTEXT · COMPACTED · ASSISTANT · TOOL · SUBTOOL" })] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "三种生命周期" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "Completed · Pending · Failed；Request 还会显示 provider、model、usage、timing。" })] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "大历史记录" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "超过 100 行启动虚拟滚动，只挂载可见行和 12 行缓冲；顶部 48px 自动补页。" })] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "时间交互" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "点击选择、拖选范围、滚轮缩放、右键清除、Escape/双击复位、悬停 500ms 看详情。" })] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "两类详情栏" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "轨迹内嵌记录检查器可调整宽度；应用框架右侧详情栏默认 0 宽，当前普通工具点击不可达。" })] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "窄屏转换" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "事件列 122px 变 50px，记录检查器变为右侧覆盖层，轨道和账本仍独立滚动。" })] })
							]
						})]
					})
				]
			});
		}
		const OVERLAY_RULES = [
			[
				"Tooltip / HoverCard",
				"fixed · z100 · Tooltip r8 · HoverCard 244px/r12",
				"由 hover 或 focus 延迟打开；HoverCard 可接住 pointer，Tooltip 只承载短标签，不放确认动作。"
			],
			[
				"Menu",
				"r12 · 218–360px · pad 4px · z100 / Portal z1100",
				"对象操作使用菜单；Portal 菜单必须高于 Modal，靠近边缘时调整方向并在自身 viewport 内滚动。"
			],
			[
				"Modal",
				"fixed inset 0 · z1000 · pad 24px · dialog 380px/r24",
				"遮罩阻断背景交互；焦点进入 dialog，Esc/遮罩关闭后回到触发源。"
			],
			[
				"Toast",
				"fixed · z1100 · r14 · shadow lv3",
				"短暂结果放在全局提示层；持续连接问题使用 ConnectionBanner，不用 Toast 轮询。"
			],
			[
				"全局反馈",
				"banner z100 · onboarding z1100",
				"连接、加载和空状态分别有持续时间与归属；失败必须同时给出原因和下一步动作。"
			],
			[
				"收束",
				"outside click · Escape · focus return",
				"每种浮层声明自己的打开、关闭和焦点策略；不要用同一个 outside-click 处理器覆盖所有类型。"
			]
		];
		function Overlays() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-specimen-content",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BoardIntro, {
						path: "产品页面 / 浮层与全局反馈",
						title: "浮层与全局反馈",
						children: "菜单、Modal、HoverCard、Tooltip、Toast 和连接提示都使用浮层或固定层，但它们的触发方式、层级、交互收束和尺寸不同。此页先给出层级规则，再展示各自的产品组合。"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(GlobalFeedback, {}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "层级与收束规则",
							detail: "层级只解决覆盖关系；触发方式、焦点和关闭行为仍由具体浮层类型负责。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-overlay-rule-table",
							children: OVERLAY_RULES.map(([title, value, detail]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: title }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: value }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: detail })
							] }, title))
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "Menu",
							source: "ui-primitives/Menu.tsx + Menu.module.css",
							detail: "菜单用于承载当前对象的操作；它会根据触发按钮的位置选择展开方向，并在靠近窗口边缘时自动调整。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-overlay-menu-specimen",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "dsh-overlay-menu-card",
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: "dsh-overlay-menu-label",
										children: "工作台操作"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconEditOutlineRegular, {}), "重命名"]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconFolderOpenRegular, {}), "移动到工作区"]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: "dsh-overlay-menu-separator" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "is-danger",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconTrashOutlineRegular, {}), "删除"]
									})
								]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "dsh-overlay-facts",
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "width 218–360px" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "radius 12px" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "padding 4px" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "z-index 1100" })
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
								title: "Modal 与 HoverCard",
								source: "ui-primitives/Modal.module.css + HoverCard.module.css",
								detail: "Modal 是确认和编辑的阻断层；HoverCard 是延迟信息卡，不应承担确认动作。"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "dsh-overlay-duo",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-overlay-modal",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: "dsh-overlay-modal-mask" }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "dsh-overlay-modal-card",
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "删除工作区？" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: "删除只移除工作区注册；文件和会话日志会保留在未分组会话中。" }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												className: "dsh-primitive-button is-outline",
												children: "取消"
											}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												className: "dsh-primitive-button is-primary",
												children: "确认"
											})] })
										]
									})]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-overlay-hovercard",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "WorkspaceHoverContent" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "/Users/zhaowenbo/Downloads/AI项目" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
											type: "button",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCopyOutlineRegular, {}), "复制路径"]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "HoverCard 默认延迟打开，固定在 row 右侧。" })
									]
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "dsh-board-note",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconWarningOutlineRegular, {}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "HoverCard 的固定深色背景和白色文字是 primitives 的局部例外，不应推广为全局 token。" })]
							})
						]
					})
				]
			});
		}
		function GlobalFeedback() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: "dsh-specimen-band",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
					title: "全局反馈状态",
					detail: "持续连接问题、短暂操作结果、首次引导和空状态使用不同的固定层；状态信息必须同时给出原因与下一步动作。"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "dsh-overlay-feedback-strip",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "is-banner",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "ConnectionBanner" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "固定顶部 · 连接断开持续可见" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "top 0 · z100 · 12/18" })
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "is-toast",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "Toast" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "复制成功 · 不拦截点击" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "top 120 · z1100 · r14" })
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "DropOverlay" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "拖入附件时覆盖工作面" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "mask-drop · 按拖拽状态显示" })
						] }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "is-onboarding",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "OnboardingSurface" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "首次进入拥有独立工作面" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "inset 0 · z1100 · mask top 80" })
							]
						})
					]
				})]
			});
		}
		function Settings() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-specimen-content",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BoardIntro, {
						path: "产品页面 / 设置弹窗",
						title: "设置弹窗",
						children: "设置外层、通用设置、模型设置和插件设置不是一个组件。它们共享 Modal、导航、Input 和 Button 资源，但各自持有字段、保存、校验和待处理状态。"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "布局与状态",
							detail: "设置外层保持稳定尺寸和滚动位置，具体设置页只负责自己的数据、字段与保存生命周期。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-settings-rule-table",
							children: SETTINGS_RULES.map(([title, value, detail]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: title }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: value }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: detail })
							] }, title))
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "设置窗口与单行输入框",
							source: "ui-settings-general/SettingsRoot.module.css + ui-primitives/Input.module.css",
							detail: "面板 800px，导航轨 188px，导航行 40px；单行 Input 32px / r8。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-module-settings-panel",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("aside", {
								className: "dsh-module-settings-nav",
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "设置" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										"data-active": "true",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSettingsOutlineRegular, {}), "通用"]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconDataOutlineRegular, {}), "模型"]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPersonalizationOutlineRegular, {}), "插件"]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconAgentPresetOutlineRegular, {}), "Agent 预设"]
									})
								]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "dsh-module-settings-content",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "通用" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "关闭设置",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCloseFillRegular, {})
								})] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-module-settings-options",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", { children: ["默认 Agent 预设", /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
											className: "dsh-module-settings-input",
											icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSearchOutlineRegular, {}),
											defaultValue: "DeepSeek Harness"
										})] }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", { children: ["工作区过滤", /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
											className: "dsh-module-settings-input",
											placeholder: "输入文件夹名称"
										})] }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: "dsh-module-settings-row",
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "紧凑模式" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "使用较紧凑的会话列表行距" })] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												className: "dsh-module-switch",
												"aria-label": "紧凑模式",
												"data-on": "true",
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {})
											})]
										})
									]
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "不同设置页面的写法",
							source: "ui-settings-models + ui-settings-plugins",
							detail: "模型设置和插件设置解决不同问题，因此字段排列、操作按钮和保存方式也不同。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-settings-recipe-grid",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCodeOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "模型设置" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "提供商卡片 · 适配器字段 · 采用/声明动作 · 删除确认" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "ui-settings-models/ModelsSection" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCordisPluginOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "插件设置" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "页签 · 已访问面板 · 暂存字段 · 未保存标记 · 保存/放弃底栏" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "ui-settings-plugins/PluginCard + fields" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconWarningOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "Validation" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "field-level invalid state and async pending belong to feature section" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "feature-owned CSS" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconInspectOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "Data logic" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "schema-form only rehydrates and sets values; it does not render fields" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "schema-form/model.ts" })
								] })
							]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "Input 责任对照",
							source: "ui-primitives/Input + ui-conversation/InputBar",
							detail: "相同的 label / border token 不代表相同组件。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-settings-comparison",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "Settings Input" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "single-line · 32px · r8 · Layer 1 · focus-within brand border" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "ui-primitives/Input" })
							] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "Conversation Composer" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "multi-line · r22 · Input major · lv2 shadow · mirror/backdrop · toolbar" }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "ui-conversation/InputBar" })
							] })]
						})]
					})
				]
			});
		}
		function Accessibility() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-specimen-content",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BoardIntro, {
						path: "规范 / 无障碍",
						title: "无障碍",
						children: "无障碍是每个产品页面的验收条件：键盘能完成同样的任务，焦点清楚可见，状态能被读屏理解，减少动效后信息和动作仍然完整。"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "键盘操作",
							detail: "所有可操作元素都能通过键盘到达，并且保持和鼠标操作一致。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-a11y-keyboard-list",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("kbd", { children: "Tab" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "移动焦点" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "按照页面顺序访问按钮、输入框、菜单和链接。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("kbd", { children: "Enter / Space" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "执行操作" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "打开页面、选择会话、提交表单或确认动作。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("kbd", { children: "Esc" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "收束当前层" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "关闭菜单、HoverCard、Modal 或搜索输入，并恢复合理焦点。" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("kbd", { children: "↑ ↓" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "移动选项" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "在树形列表、菜单、页签和命令选项中移动。" })
								] })
							]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "语义与读屏",
							detail: "视觉上的状态还要有语义对应，不能只依赖颜色或图标。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-a11y-role-grid",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "dsh-a11y-role",
										children: "treeitem"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "会话与工作区行" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "aria-selected / aria-expanded" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "dsh-a11y-role",
										children: "dialog"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "Modal 和设置窗口" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "aria-modal / labelled heading" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "dsh-a11y-role",
										children: "status"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "加载、运行与连接提示" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "文字状态 + live announcement" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "dsh-a11y-role",
										children: "button"
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "图标操作" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "aria-label 描述动作" })
								] })
							]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "焦点与动效",
							detail: "焦点环不能被 outline: none 删除；减少动效由每个拥有动画的组件单独处理。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-a11y-focus-demo",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									"data-focus-demo": "true",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSearchOutlineRegular, {}), "键盘焦点"]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconLoadingOutlineRegular, {}), "运行中"]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									type: "checkbox",
									defaultChecked: true
								}), "减少动效"] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "focus-visible 使用清晰边界；TurnStatus shimmer、ReasoningRow sweep 和位移过渡分别收束。" })
							]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "验收清单",
							detail: "实现完成前逐项检查；任一项失败都不能只靠视觉截图放过。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-a11y-checklist",
							children: A11Y_CHECKS.map(([title, detail, failure]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: title }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: detail }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: failure })
							] }, title))
						})]
					})
				]
			});
		}
		function States() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-specimen-content",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BoardIntro, {
						path: "使用规范 / 状态与响应式",
						title: "状态与响应式",
						children: "状态需要同时说明当前进度、对象和可执行动作。对话、思考行、工具、按钮不会因为同样处于“进行中”就使用同一种视觉表现。"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "进行中状态",
							detail: "进行中需要同时表达状态、当前对象和下一步动作。相同的状态语义在对话、思考行、工具和主操作中使用不同的表现。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-running-state-grid",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-running-thinking",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconThinkOutlineRegular, {}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", {
											className: "dsh-running-shimmer",
											children: "深度求索中..."
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "TurnStatus：蓝色文字 shimmer · 1.8s" })
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-running-reasoning",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconThinkOutlineRegular, {}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "思考中" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "ReasoningRow：300px sweep · 2.6s" })
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-running-tool",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCodeOutlineRegular, {}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "读取" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "工具行：保留任务与对象" })
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-running-button",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-label": "停止",
											children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconStopFillRegular, {})
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "停止" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "主操作切换为下一步动作" })
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "状态维度",
							detail: "先确定状态属于哪一维，再决定视觉表达；同一个组件可以同时拥有多个维度。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-state-matrix",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "可用性" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "可用 · 禁用 · 不可交互 · 只读 · 阻塞" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "输入框 / 按钮 / Composer / 设置" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "进度" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "空闲 · 加载 · 进行中 · 等待处理 · 成功 · 已停止 · 错误" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "工具 / 会话 / 设置" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "选择与焦点" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "默认 · 悬停 · 按下 · 选中 · 键盘焦点" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "列表行 / 页签 / 导航 / 图标按钮" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "展开与浮层" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "收起 · 展开 · 菜单打开 · 弹窗打开 · HoverCard 打开" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "工作区 / 工具 / 浮层" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "环境" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "宽屏 · 窄屏 · rail · 移动端 · 减少动效" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "应用框架决定视口级状态；页面响应其可用空间" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "Content" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "empty · streaming · interrupted · retry · history error" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "Conversation and message domain" })
								] })
							]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "响应式断点责任",
							source: "ui-layout/columns.ts + package-local CSS",
							detail: "外层断点和内层组合分开：1024px 以下 shell 进入 rail，720px 以下工作台二级侧栏纵向连续。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-responsive-table",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "≥ 1024px" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "AppFrame wide columns，sidebar 280px，workspace header / tree 完整展示。" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "ui-layout" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "< 1024px" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "shell collapsed，sidebar 56px rail；Workbench 不渲染自己的 rail icons。" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "dsh-better-workbench + ui-sidebar" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "≤ 720px" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "Workbench secondary sidebar 纵向连续，Composer / settings 内容各自收缩。" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "package-local media rules" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "reduced motion" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "shell fade、search transition、running sweep 都应停止或缩短。" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "ui-theme + feature CSS" })
								] })
							]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "状态检查清单",
							source: "real DSH browser/component tests",
							detail: "设计看板以后每新增一个标本，都要说明它覆盖的状态和未覆盖的状态。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-checklist",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "尺寸与 owner 源码一致" })] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "暗色主题使用 semantic alias" })] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCheckOutlineRegular, {}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "焦点、禁用、错误可识别" })] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconWarningOutlineRegular, {}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "局部 literal 颜色已登记为 exception" })] })
							]
						})]
					})
				]
			});
		}
		function Governance() {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-specimen-content",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BoardIntro, {
						path: "实现记录",
						title: "实现记录",
						children: "这里集中记录每个样本对应的页面、组件、尺寸、状态和实现位置，方便后续更新时保持一致。外观相似的内容也不自动合并。"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "实现信息",
							source: "样式看板维护规则",
							detail: "新增或修改样本时，至少记录页面区域、所属模块、挂载位置、尺寸约束、状态触发、源码依据和是否为局部例外。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-traceability-table",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-board-table-head",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "样本标识" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "所属模块" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "挂载位置 / DOM 根" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "尺寸约束" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "状态 / 源码" })
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-board-table-row",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "shell.frame" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "ui-layout + ui-sidebar" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "root → sidebar | conversation | details | shell.overlay" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "280 / 56 / 300–520 / hit 8" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "宽屏、收起栏、详情打开 · AppFrame.tsx" })
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-board-table-row",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "conversation.header" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "ui-conversation" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "conversation.session.header → actions | utilities | conversation.view" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "top 12 / left 20 / right 28 / active 2" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "路径、能力、页签 · ConversationSession.tsx" })
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-board-table-row",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "conversation.chat" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "ui-conversation/chat + ui-tool" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "conversation.view → conversation.chat.node → tool.call.toolview" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "748 / gap 16 / bubble 525" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "流式、错误、重试、历史 · ChatView.tsx" })
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-board-table-row",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "conversation.composer" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "ui-conversation" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "conversation.composer.bar → card[data-composer-card]" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "748 / 780 / r22 / 34" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "初始、活动、运行 · InputBar.tsx" })
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-board-table-row",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "settings.panel" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "ui-settings-general" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "settings → nav + section + item" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "800 / 188 / header 54 / r24" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "打开、切换、关闭 · SettingsRoot.tsx" })
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-board-table-row",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "settings.input" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "ui-primitives + ui-settings-general" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "Input.wrap → settings options" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "32 / r8 / 16 icon slot" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "焦点、禁用 · Input.module.css" })
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-board-table-row",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "trajectory.view" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "ui-trajectory" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "conversation.view → toolbar + timeline + table + inspector" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "32 / 50 / 122 / 320–440" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "搜索、折叠、选中、调整 · TrajectoryView.tsx" })
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-board-table-row",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "tool.row" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "ui-tool" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "tool.call.toolview → DisclosureRow" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "24 / 16 leading" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "进行中、错误、展开 · ToolRow" })
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "dsh-board-table-row",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "workspace.row" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "ui-workspace" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "sidebar.workspaces → treeitem" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "34 / 32 / r8" }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "选中、拖拽、菜单 · Rows" })
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "资源采用状态",
							detail: "只把已验证且实际消费的资源称为规范；源码声明、受控例外和禁止采用项必须保持不同状态。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-foundation-theme-table",
							children: IMPLEMENTATION_AUDIT_ROWS.map(([title, status, detail]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: title }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: status }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: detail })
							] }, title))
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "变更验收门槛",
							detail: "新增或改动样本必须同时通过下面七项；缺少任何一项时继续查源码或回到所属产品页，不能靠相似外观补齐。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "dsh-foundation-rule-grid",
							children: IMPLEMENTATION_GATES.map(([title, detail]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: title }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: detail })] }, title))
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "模块归属",
							detail: "每个页面样本都必须能回答由哪个模块拥有、挂载到哪里、有哪些状态，以及哪份源码是依据。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-board-module-table",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "dsh-board-table-head",
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "模块层" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "所属模块" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "挂载位置" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "DOM 结构" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "状态 / 源码" })
								]
							}), MODULE_ROWS.map((row) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "dsh-board-table-row",
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: row.layer }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: row.owner }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: row.slot }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: row.dom }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("code", { children: [
										row.states,
										" · ",
										row.source
									] })
								]
							}, row.layer))]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
						className: "dsh-specimen-band",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionHeading, {
							title: "特殊情况",
							source: "当前组件样式中的局部例外",
							detail: "这些特殊处理只保留在实际使用它们的页面中，不提升为全局颜色或组件。"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-exception-list",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconWarningOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "悬浮卡" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "固定深色背景与白色文字，为复制路径的对比度例外。" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "ui-primitives/HoverCard.module.css" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconWarningOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "引用标签" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "用户引用标签使用局部 rgba 蓝色，属于 MessageItem 产品特例。" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "ui-conversation/MessageItem.module.css" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconWarningOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "发送图标" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "发送箭头为白色 currentColor，配合信息按钮填充，不是普通文字变量。" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "ui-conversation/InputBar.module.css" })
								] }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconWarningOutlineRegular, {}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "未定义变量" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "模型设置中的历史未定义变量不得复制进基础页。" }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: "ui-settings-models/ModelsSection.module.css" })
								] })
							]
						})]
					})
				]
			});
		}
		function DesignBoardSidebar({ instance, updateConfig, reportError }) {
			const active = sectionFor(instance.config.section);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("nav", {
				className: "dsh-specimen-sidebar",
				"aria-label": "DSH UI 样式看板导航",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "dsh-specimen-sidebar-title",
						children: "DSH UI"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: "从基础资源与规范进入产品页面" }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "dsh-specimen-sidebar-nav",
						children: SECTION_GROUPS.map((group) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "dsh-specimen-sidebar-group",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "dsh-specimen-sidebar-group-label",
								children: group.label
							}), group.sections.map((section) => {
								const Icon = section.icon;
								return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "dsh-specimen-sidebar-link",
									"data-active": active === section.id,
									"aria-current": active === section.id ? "page" : void 0,
									onClick: () => {
										updateConfig({ section: section.id }).catch((error) => {
											reportError(error instanceof Error ? error.message : String(error));
										});
									},
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, { size: 16 }), section.label]
								}, section.id);
							})]
						}, group.label))
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "dsh-specimen-sidebar-footer",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "系统范围" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "DSH Web UI" })]
					})
				]
			});
		}
		function DesignBoard({ instance }) {
			const section = sectionFor(instance.config.section);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "dsh-specimen-board",
				children: [
					section === "overview" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Overview, {}),
					section === "shell" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Shell, {}),
					section === "sidebar" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Sidebar, {}),
					section === "settings" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Settings, {}),
					section === "session" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Session, {}),
					section === "chat" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Conversation, {}),
					section === "composer" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Composer, {}),
					section === "trajectory" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Trajectory, {}),
					section === "overlays" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Overlays, {}),
					section === "foundations" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Foundations, {}),
					section === "icons" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconGallery, { groups: ICON_GROUPS }),
					section === "primitives" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComponentGallery, {}),
					section === "states" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(States, {}),
					section === "accessibility" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Accessibility, {}),
					section === "governance" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Governance, {})
				]
			});
		}
		//#endregion
		//#region src/client/styles.ts
		const DESIGN_BOARD_STYLE = `
.dsh-specimen-board { min-height: 100%; container-type: inline-size; background: var(--dsw-alias-bg-base); color: var(--dsw-alias-label-primary); }
.dsh-specimen-board *, .dsh-specimen-board *::before, .dsh-specimen-board *::after { box-sizing: border-box; }
.dsh-specimen-sidebar { display: flex; flex-direction: column; min-height: 100%; padding: 18px 12px 12px; background: var(--dsw-specific-sidebar-fill); color: var(--dsw-alias-label-primary); }
.dsh-specimen-sidebar-title { padding: 0 8px; font: var(--dsw-font-s-strong-14); }
.dsh-specimen-sidebar > p { margin: 4px 8px 18px; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-specimen-sidebar-nav { display: grid; gap: 14px; }
.dsh-specimen-sidebar-group { display: grid; gap: 2px; min-width: 0; }
.dsh-specimen-sidebar-group-label { padding: 0 8px 4px; color: var(--dsw-alias-label-caption); font: var(--dsw-font-xxxs-strong-11); text-transform: uppercase; }
.dsh-specimen-sidebar-link { display: flex; align-items: center; gap: 8px; width: 100%; height: 32px; border: 0; border-radius: 8px; padding: 0 8px; color: var(--dsw-alias-label-secondary); background: transparent; cursor: pointer; text-align: left; font: var(--dsw-font-xs-13); }
.dsh-specimen-sidebar-link > svg { flex: none; width: 16px; color: var(--dsw-alias-label-tertiary); }
.dsh-specimen-sidebar-link:hover, .dsh-specimen-sidebar-link[data-active="true"] { background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary); }
.dsh-specimen-sidebar-link[data-active="true"] { font: var(--dsw-font-xs-strong-13); }
.dsh-specimen-sidebar-footer { display: flex; justify-content: space-between; gap: 8px; margin-top: auto; padding: 14px 8px 0; border-top: 1px solid var(--dsw-alias-border-l1); color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxxs-11); }
.dsh-specimen-sidebar-footer strong { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xxxs-strong-11); }
.dsh-specimen-content { width: min(100%, 1080px); margin: 0 auto; padding: 40px 48px 64px; }
.dsh-specimen-intro { padding-bottom: 28px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-specimen-intro > span { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxxs-strong-11); letter-spacing: 0; }
.dsh-board-specimen-kind { display: inline-block; margin: 0 0 10px; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-specimen-sidebar-link:focus-visible { outline: 2px solid var(--dsw-alias-state-business-primary); outline-offset: 1px; }
.dsh-specimen-intro h1 { margin: 8px 0; color: var(--dsw-alias-label-primary); font: var(--dsw-font-xl-24); }
.dsh-specimen-intro p { max-width: 760px; margin: 0; color: var(--dsw-alias-label-secondary); font: var(--dsw-font-s-14); }
.dsh-specimen-band { padding: 28px 0; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-specimen-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; margin-bottom: 18px; }
.dsh-specimen-heading h2 { margin: 0; font: var(--dsw-font-base-strong-16); }
.dsh-specimen-heading p { max-width: 660px; margin: 4px 0 0; color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-specimen-source { flex: none; max-width: 42%; overflow: hidden; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); overflow-wrap: anywhere; }
.dsh-foundation-layer-table, .dsh-foundation-theme-table, .dsh-foundation-font-table { border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-foundation-layer-table > div { display: grid; grid-template-columns: 150px 220px minmax(0, 1fr); gap: 4px 16px; align-items: start; min-height: 68px; padding: 14px 0; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-foundation-layer-table strong { padding-top: 2px; font: var(--dsw-font-xs-strong-13); }
.dsh-foundation-layer-table code, .dsh-foundation-theme-table code, .dsh-foundation-font-table code { min-width: 0; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); overflow-wrap: anywhere; }
.dsh-foundation-layer-table span, .dsh-foundation-layer-table small, .dsh-foundation-font-table span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-foundation-layer-detail { display: grid; min-width: 0; gap: 4px; }
.dsh-foundation-layer-table small { color: var(--dsw-alias-label-tertiary); }
.dsh-foundation-rule-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-border-l1); }
.dsh-foundation-rule-grid > div { display: grid; align-content: start; gap: 6px; min-height: 92px; padding: 16px; background: var(--dsw-alias-bg-base); }
.dsh-foundation-rule-grid strong { font: var(--dsw-font-xs-strong-13); }
.dsh-foundation-rule-grid span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-foundation-theme-table > div, .dsh-foundation-font-table > div { display: grid; grid-template-columns: 150px minmax(280px, 1fr) minmax(0, 1fr); gap: 16px; align-items: center; min-height: 62px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-foundation-theme-table strong, .dsh-foundation-font-table strong { font: var(--dsw-font-xs-strong-13); }
.dsh-foundation-theme-table code, .dsh-foundation-font-table code { min-width: 0; color: var(--dsw-alias-state-business-primary); font: var(--dsw-font-markdown-code-block-small); overflow-wrap: anywhere; }
.dsh-foundation-theme-table span, .dsh-foundation-font-table span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-static-family-grid { display: grid; grid-template-columns: minmax(0, 1fr); gap: 18px; }
.dsh-static-family { min-width: 0; border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-static-family-heading { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; min-height: 42px; padding-top: 12px; }
.dsh-static-family-heading strong { font: var(--dsw-font-xs-strong-13); }
.dsh-static-family-heading span { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-static-token-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; background: var(--dsw-alias-border-l1); }
.dsh-static-token { display: grid; grid-template-columns: 22px minmax(0, 1fr); gap: 8px; align-items: center; min-height: 38px; padding: 6px 8px; background: var(--dsw-alias-bg-base); }
.dsh-static-token .dsh-specimen-swatch { width: 22px; height: 22px; border-radius: 4px; }
.dsh-static-token code { min-width: 0; overflow-wrap: anywhere; color: var(--dsw-alias-label-secondary); font: var(--dsw-font-markdown-code-block-small); }
.dsh-static-token small { grid-column: 2; color: var(--dsw-alias-state-business-primary); font: var(--dsw-font-xxxs-11); }
.dsh-specimen-token-table, .dsh-specimen-type-table { border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-specimen-token-row { display: grid; grid-template-columns: 28px minmax(180px, 1fr) minmax(130px, .7fr); align-items: center; gap: 12px; min-height: 58px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-specimen-swatch { width: 28px; height: 28px; border: 1px solid var(--dsw-alias-border-l2); border-radius: 6px; }
.dsh-specimen-token-copy { display: grid; gap: 2px; min-width: 0; }
.dsh-specimen-token-copy strong { font: var(--dsw-font-xs-strong-13); }
.dsh-specimen-token-copy code, .dsh-specimen-token-row > span:last-child { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-specimen-type-head, .dsh-specimen-type-row { display: grid; grid-template-columns: 150px minmax(0, 1fr) 130px 250px 58px; align-items: center; gap: 12px; }
.dsh-specimen-type-head { min-height: 34px; border-bottom: 1px solid var(--dsw-alias-border-l1); color: var(--dsw-alias-label-caption); font: var(--dsw-font-xxxs-strong-11); }
.dsh-specimen-type-row { min-height: 58px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-specimen-type-row > span { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xs-13); }
.dsh-specimen-type-row strong, .dsh-specimen-type-row code { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dsh-specimen-type-row strong { color: var(--dsw-alias-label-primary); }
.dsh-specimen-type-row small { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xxs-12); }
.dsh-specimen-type-row code { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); }
.dsh-specimen-type-row em { color: var(--dsw-alias-label-caption); font: normal var(--dsw-font-xxxs-11); }
.dsh-specimen-type-row em[data-status="已消费"] { color: var(--dsw-alias-state-success-primary); }
.dsh-specimen-type-row em[data-status="仅声明"] { color: var(--dsw-alias-label-tertiary); }
.dsh-foundation-metric-table, .dsh-foundation-motion-table { border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-foundation-metric-table > div, .dsh-foundation-motion-table > div { display: grid; grid-template-columns: 180px 340px minmax(0, 1fr); gap: 16px; align-items: center; min-height: 54px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-foundation-metric-table strong, .dsh-foundation-motion-table strong { font: var(--dsw-font-xs-strong-13); }
.dsh-foundation-metric-table code, .dsh-foundation-motion-table code { min-width: 0; color: var(--dsw-alias-state-business-primary); font: var(--dsw-font-markdown-code-block-small); overflow-wrap: anywhere; }
.dsh-foundation-metric-table span, .dsh-foundation-motion-table span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-board-layer-strip { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--dsw-alias-border-l1); border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-board-layer-strip > div { display: grid; grid-template-columns: 32px 1fr; grid-template-rows: auto auto; column-gap: 10px; min-height: 82px; padding: 16px 14px; border-right: 1px solid var(--dsw-alias-border-l1); }
.dsh-board-layer-strip > div:last-child { border-right: 0; }
.dsh-board-layer-strip span { grid-row: span 2; color: var(--dsw-alias-state-business-primary); font: var(--dsw-font-s-strong-14); }
.dsh-board-layer-strip strong { font: var(--dsw-font-s-strong-14); }
.dsh-board-layer-strip small { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-board-module-table, .dsh-traceability-table { border-top: 1px solid var(--dsw-alias-border-l1); overflow: hidden; }
.dsh-board-table-head, .dsh-board-table-row { display: grid; grid-template-columns: 110px minmax(150px, 1fr) minmax(150px, 1.1fr) minmax(125px, .9fr) minmax(150px, 1fr); gap: 12px; align-items: start; padding: 12px 0; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-board-table-head { color: var(--dsw-alias-label-caption); font: var(--dsw-font-xxxs-strong-11); }
.dsh-board-table-row { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xxs-12); }
.dsh-board-table-row strong { color: var(--dsw-alias-label-primary); font: var(--dsw-font-xs-strong-13); }
.dsh-board-table-row code, .dsh-board-geometry-table code, .dsh-settings-recipe-grid code, .dsh-traceability-table code { min-width: 0; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); overflow-wrap: anywhere; }
.dsh-board-geometry-table > div { display: grid; grid-template-columns: minmax(160px, 1fr) 210px minmax(180px, 1.2fr); gap: 16px; align-items: center; min-height: 48px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-board-geometry-table strong { font: var(--dsw-font-xs-strong-13); }
.dsh-board-geometry-table span { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-board-callouts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
.dsh-board-callouts > div, .dsh-board-note { display: grid; grid-template-columns: 16px minmax(0, 1fr); column-gap: 8px; row-gap: 3px; color: var(--dsw-alias-label-secondary); }
.dsh-board-callouts svg, .dsh-board-note svg { grid-row: span 2; color: var(--dsw-alias-state-business-primary); }
.dsh-board-callouts strong { font: var(--dsw-font-xs-strong-13); }
.dsh-board-callouts span, .dsh-board-note span { font: var(--dsw-font-xs-13); }
.dsh-settings-recipe-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-settings-recipe-grid > div { display: grid; grid-template-columns: 18px minmax(0, 1fr); column-gap: 10px; row-gap: 3px; min-height: 86px; padding: 16px 0; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-settings-recipe-grid > div:nth-child(odd) { padding-right: 18px; }
.dsh-settings-recipe-grid > div:nth-child(even) { padding-left: 18px; border-left: 1px solid var(--dsw-alias-border-l1); }
.dsh-settings-recipe-grid strong { font: var(--dsw-font-xs-strong-13); }
.dsh-settings-recipe-grid span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-settings-recipe-grid code { grid-column: 2; }
.dsh-icon-rule-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-border-l1); }
.dsh-icon-rule-grid > div { display: grid; align-content: start; gap: 5px; min-height: 94px; padding: 16px; background: var(--dsw-alias-bg-base); }
.dsh-icon-rule-grid strong { font: var(--dsw-font-xs-strong-13); }
.dsh-icon-rule-grid span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-icon-rule-grid small { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-icon-geometry-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-border-l1); }
.dsh-icon-geometry-grid > div { display: grid; grid-template-columns: 42px minmax(0, 1fr); grid-template-rows: auto auto; gap: 3px 10px; align-content: start; align-items: start; min-height: 86px; padding: 16px; background: var(--dsw-alias-bg-layer-1); }
.dsh-icon-geometry-grid > div > button, .dsh-icon-status-14 { grid-row: span 2; display: inline-flex; align-items: center; justify-content: center; color: var(--dsw-alias-label-secondary); background: transparent; }
.dsh-icon-button-28 { width: 28px; height: 28px; border: 0; border-radius: 50%; }
.dsh-icon-button-36 { width: 36px; height: 36px; border: 0; border-radius: 50%; }
.dsh-icon-button-28:hover, .dsh-icon-button-36:hover { background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary); }
.dsh-icon-button-28:focus-visible, .dsh-icon-button-36:focus-visible { outline: 2px solid var(--dsw-alias-state-business-primary); outline-offset: 2px; }
.dsh-icon-status-14 { width: 28px; height: 28px; color: var(--dsw-alias-state-business-primary); }
.dsh-icon-geometry-grid strong { font: var(--dsw-font-xs-strong-13); }
.dsh-icon-geometry-grid code { min-width: 0; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); overflow-wrap: anywhere; }
.dsh-specimen-icon-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-specimen-icon-item { display: grid; grid-template-columns: 36px minmax(0, 1fr); gap: 10px; align-items: center; min-height: 70px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-specimen-icon-item:nth-child(odd) { padding-right: 18px; }
.dsh-specimen-icon-item:nth-child(even) { padding-left: 18px; border-left: 1px solid var(--dsw-alias-border-l1); }
.dsh-specimen-icon-box { display: inline-flex; width: 28px; height: 28px; align-items: center; justify-content: center; border-radius: 8px; color: var(--dsw-alias-label-secondary); background: var(--dsw-alias-interactive-bg-hover); }
.dsh-specimen-icon-item > div { display: grid; min-width: 0; gap: 1px; }
.dsh-specimen-icon-item strong { font: var(--dsw-font-xs-strong-13); }
.dsh-specimen-icon-item code, .dsh-specimen-icon-item span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-specimen-icon-states { display: flex; flex-wrap: wrap; gap: 8px; }
.dsh-specimen-icon-states button { display: inline-flex; align-items: center; gap: 6px; height: 28px; border: 0; border-radius: 14px; padding: 0 10px; color: var(--dsw-alias-label-secondary); background: transparent; font: var(--dsw-font-xxs-12); }
.dsh-specimen-icon-states button[data-state="hover"], .dsh-specimen-icon-states button[data-state="selected"] { color: var(--dsw-alias-label-primary); background: var(--dsw-alias-interactive-bg-hover); }
.dsh-specimen-icon-states button[data-state="selected"] { background: var(--dsw-alias-interactive-bg-active); }
.dsh-specimen-icon-states button:focus-visible { outline: 2px solid var(--dsw-alias-state-business-primary); outline-offset: 2px; }
.dsh-specimen-icon-states button:disabled { cursor: not-allowed; opacity: .4; }
.dsh-primitive-rule-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-border-l1); }
.dsh-primitive-rule-grid > div { display: grid; gap: 5px; min-height: 94px; padding: 16px; background: var(--dsw-alias-bg-base); }
.dsh-primitive-rule-grid strong { font: var(--dsw-font-xs-strong-13); }
.dsh-primitive-rule-grid span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-primitive-rule-grid small { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-primitive-button-row { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; }
.dsh-primitive-button { display: inline-flex; align-items: center; justify-content: center; gap: 4px; height: 36px; border: 0; border-radius: 18px; padding: 0 14px; color: var(--dsw-alias-label-primary); background: transparent; cursor: pointer; font: var(--dsw-font-s-14); }
.dsh-primitive-button:hover:not(:disabled) { background: var(--dsw-alias-interactive-bg-hover); }
.dsh-primitive-button:disabled { cursor: not-allowed; opacity: .4; }
.dsh-primitive-button.is-primary { color: var(--dsw-alias-label-primary-foreground); background: var(--dsw-alias-button-primary-fill); }
.dsh-primitive-button.is-primary:hover:not(:disabled) { background: var(--dsw-alias-button-primary-hover); }
.dsh-primitive-button.is-outline { border: 1px solid var(--dsw-alias-border-l2); }
.dsh-primitive-button.is-toolbar { color: var(--dsw-alias-label-primary-foreground); background: var(--dsw-alias-button-tool-bar-fill); }
.dsh-primitive-button.is-small { height: 28px; border-radius: 14px; padding: 0 10px; font: var(--dsw-font-xxs-12); }
.dsh-board-spec-grid { display: flex; flex-wrap: wrap; gap: 8px 20px; margin-top: 16px; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-primitive-input-row { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
.dsh-primitive-input-row label, .dsh-module-settings-options label { display: grid; gap: 6px; color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-primitive-input { width: 100%; }
.dsh-primitive-input-row .dsh-primitive-input input { min-width: 0; }
.dsh-board-note { margin-top: 18px; padding: 10px 12px; border-top: 1px solid var(--dsw-alias-border-l1); border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-board-note svg { color: var(--dsw-alias-state-error-primary); }
.dsh-primitive-disclosure { display: grid; gap: 2px; }
.dsh-primitive-disclosure > div { display: flex; align-items: center; min-width: 0; height: 24px; color: var(--dsw-alias-label-secondary); font: var(--dsw-font-s-14); }
.dsh-primitive-disclosure > div > span:not(.dsh-primitive-leading):not(.dsh-primitive-separator) { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dsh-primitive-disclosure > div > svg { flex: none; margin-left: auto; color: var(--dsw-alias-label-tertiary); }
.dsh-primitive-leading { display: inline-flex; width: 16px; height: 16px; align-items: center; justify-content: center; margin-right: 6px; color: var(--dsw-alias-label-tertiary); }
.dsh-primitive-separator { width: 3px; height: 3px; margin: 0 8px; border-radius: 50%; background: var(--dsw-alias-label-tertiary); }
.dsh-primitive-catalog { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-primitive-catalog > div { display: grid; gap: 5px; min-height: 82px; padding: 16px 0; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-primitive-catalog > div:nth-child(odd) { padding-right: 18px; }
.dsh-primitive-catalog > div:nth-child(even) { padding-left: 18px; border-left: 1px solid var(--dsw-alias-border-l1); }
.dsh-primitive-catalog strong { font: var(--dsw-font-xs-strong-13); }
.dsh-primitive-catalog span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-shell-rule-table { border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-shell-rule-table > div { display: grid; grid-template-columns: 170px 300px minmax(0, 1fr); gap: 16px; align-items: center; min-height: 54px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-shell-rule-table strong { font: var(--dsw-font-xs-strong-13); }
.dsh-shell-rule-table code { min-width: 0; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); overflow-wrap: anywhere; }
.dsh-shell-rule-table span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-shell-diagram { position: relative; display: grid; grid-template-columns: 180px minmax(0, 1fr) 8px 138px; min-height: 248px; border: 1px solid var(--dsw-alias-border-l2); border-radius: 12px; overflow: hidden; background: var(--dsw-alias-bg-layer-1); }
.dsh-shell-diagram > aside { display: grid; align-content: start; gap: 6px; padding: 18px 16px; background: var(--dsw-specific-sidebar-fill); color: var(--dsw-alias-label-primary); }
.dsh-shell-diagram > aside strong, .dsh-shell-diagram > aside small { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xxs-12); }
.dsh-shell-diagram > aside small { color: var(--dsw-alias-label-tertiary); }
.dsh-shell-diagram > main { display: grid; grid-template-rows: 42px 1fr 52px; min-width: 0; background: var(--dsw-alias-bg-base); }
.dsh-shell-diagram header { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 0 18px; border-bottom: 1px solid var(--dsw-alias-border-l1); color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-shell-chat-lines { display: grid; align-content: center; gap: 10px; padding: 22px 14%; }
.dsh-shell-chat-lines span { display: block; height: 10px; border-radius: 5px; background: var(--dsw-alias-interactive-bg-hover); }
.dsh-shell-chat-lines span:nth-child(2) { width: 75%; }
.dsh-shell-chat-lines span:nth-child(3) { width: 58%; }
.dsh-shell-composer-line { width: 74%; height: 32px; align-self: center; justify-self: center; border: 1px solid var(--dsw-alias-border-l2); border-radius: 16px; background: var(--dsw-specific-input-major); }
.dsh-shell-resize-handle { position: relative; z-index: 1; cursor: col-resize; background: transparent; }
.dsh-shell-resize-handle::after { position: absolute; inset-block: 0; left: 3px; width: 1px; content: ''; background: var(--dsw-alias-border-l2); }
.dsh-shell-resize-handle:hover::after { background: var(--dsw-alias-state-business-primary); }
.dsh-shell-details { background: var(--dsw-alias-bg-layer-2) !important; color: var(--dsw-alias-label-primary) !important; }
.dsh-shell-details strong { color: var(--dsw-alias-label-secondary) !important; }
.dsh-shell-overlay { position: absolute; right: 18px; bottom: 12px; display: inline-flex; align-items: center; gap: 6px; padding: 6px 8px; border: 1px dashed var(--dsw-alias-border-l3); border-radius: 8px; color: var(--dsw-alias-label-tertiary); background: var(--dsw-alias-bg-layer-2); font: var(--dsw-font-xxs-12); }
.dsh-shell-state-grid, .dsh-settings-recipe-grid, .dsh-state-matrix { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-border-l1); }
.dsh-shell-state-grid > div, .dsh-state-matrix > div { display: grid; grid-template-columns: 18px minmax(0, 1fr); column-gap: 10px; row-gap: 3px; min-height: 82px; padding: 16px; background: var(--dsw-alias-bg-base); }
.dsh-shell-state-grid svg { grid-row: span 2; color: var(--dsw-alias-label-tertiary); }
.dsh-shell-state-grid strong, .dsh-state-matrix strong { font: var(--dsw-font-xs-strong-13); }
.dsh-shell-state-grid span, .dsh-state-matrix span, .dsh-state-matrix small { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
@keyframes dsh-board-thinking-sweep { 0% { left: -300px; } 90%, 100% { left: 100%; } }
.dsh-module-message-actions { display: flex; gap: 12px; margin-top: 16px; }
.dsh-module-message-actions button { display: inline-flex; width: 28px; height: 28px; align-items: center; justify-content: center; border: 0; border-radius: 50%; color: var(--dsw-alias-label-tertiary); background: transparent; }
.dsh-module-message-actions button:hover { background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary); }
.dsh-responsive-table > div { display: grid; grid-template-columns: 120px minmax(0, 1fr) 190px; gap: 14px; align-items: center; min-height: 54px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-responsive-table strong { font: var(--dsw-font-xs-strong-13); }
.dsh-responsive-table span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-overlay-rule-table { border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-overlay-rule-table > div { display: grid; grid-template-columns: 190px 330px minmax(0, 1fr); gap: 16px; align-items: center; min-height: 54px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-overlay-rule-table strong { font: var(--dsw-font-xs-strong-13); }
.dsh-overlay-rule-table code { min-width: 0; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); overflow-wrap: anywhere; }
.dsh-overlay-rule-table span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-overlay-menu-specimen { display: flex; align-items: flex-start; gap: 28px; }
.dsh-overlay-menu-card { width: min(280px, 100%); padding: 4px; border: 1px solid var(--dsw-alias-border-l2); border-radius: 12px; box-shadow: var(--dsw-shadow-lv3); background: var(--dsw-specific-menu); }
.dsh-overlay-menu-label { padding: 8px 12px 6px; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-overlay-menu-card button { display: flex; align-items: center; gap: 8px; width: 100%; height: 40px; border: 0; border-radius: 8px; padding: 0 8px; color: var(--dsw-alias-label-secondary); background: transparent; text-align: left; font: var(--dsw-font-s-14); }
.dsh-overlay-menu-card button:hover { background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary); }
.dsh-overlay-menu-card button.is-danger { color: var(--dsw-alias-state-error-primary); }
.dsh-overlay-menu-separator { height: 1px; margin: 4px 8px; background: var(--dsw-alias-border-l1); }
.dsh-overlay-facts { display: grid; align-content: center; gap: 8px; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-overlay-feedback-strip { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; margin-top: 16px; }
.dsh-overlay-feedback-strip > div { display: grid; gap: 6px; min-height: 78px; padding: 12px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 8px; background: var(--dsw-alias-bg-base); }
.dsh-overlay-feedback-strip strong { font: var(--dsw-font-xs-strong-13); }
.dsh-overlay-feedback-strip span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xxs-12); }
.dsh-overlay-feedback-strip code { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); }
.dsh-overlay-feedback-strip .is-toast { margin-top: 10px; border-radius: 14px; color: var(--dsw-alias-label-primary-inverted); background: var(--dsw-alias-button-contrast-fill); }
.dsh-overlay-feedback-strip .is-banner { border-top: 3px solid var(--dsw-alias-state-error-primary); }
.dsh-overlay-feedback-strip .is-onboarding { border-radius: 0; background: var(--dsw-alias-bg-layer-1); }
.dsh-overlay-duo { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
.dsh-overlay-modal, .dsh-overlay-hovercard { position: relative; min-height: 210px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 12px; overflow: hidden; background: var(--dsw-alias-bg-layer-1); }
.dsh-overlay-modal-mask { position: absolute; inset: 0; background: var(--dsw-alias-bg-mask-1); }
.dsh-overlay-modal-card { position: absolute; inset: 28px 24px; display: grid; align-content: center; gap: 10px; padding: 24px; border: 1px solid var(--dsw-alias-border-l2); border-radius: 24px; box-shadow: var(--dsw-shadow-lv3); background: var(--dsw-alias-bg-layer-2); }
.dsh-overlay-modal-card strong, .dsh-overlay-hovercard strong { font: var(--dsw-font-s-strong-14); }
.dsh-overlay-modal-card p { margin: 0; color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-overlay-modal-card > div { display: flex; justify-content: flex-end; gap: 8px; margin-top: 4px; }
.dsh-overlay-hovercard { display: grid; align-content: start; gap: 6px; padding: 18px; background: var(--dsw-alias-tooltip-bg); color: var(--dsw-alias-label-primary-foreground); }
.dsh-overlay-hovercard strong, .dsh-overlay-hovercard span, .dsh-overlay-hovercard small { color: var(--dsw-alias-label-primary-foreground); }
.dsh-overlay-hovercard span, .dsh-overlay-hovercard small { font: var(--dsw-font-xxs-12); overflow-wrap: anywhere; }
.dsh-overlay-hovercard button { display: inline-flex; width: fit-content; align-items: center; gap: 6px; margin-top: 8px; border: 0; border-radius: 14px; padding: 0 8px; height: 28px; color: var(--dsw-alias-label-primary-foreground); background: var(--dsw-alias-button-tool-bar-fill); font: var(--dsw-font-xxs-12); }
.dsh-settings-rule-table { border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-settings-rule-table > div { display: grid; grid-template-columns: 170px 300px minmax(0, 1fr); gap: 16px; align-items: center; min-height: 54px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-settings-rule-table strong { font: var(--dsw-font-xs-strong-13); }
.dsh-settings-rule-table code { min-width: 0; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); overflow-wrap: anywhere; }
.dsh-settings-rule-table span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-module-settings-panel { display: grid; grid-template-columns: 188px minmax(0, 1fr); width: min(800px, 100%); min-height: 420px; overflow: hidden; border-radius: 24px; box-shadow: var(--dsw-shadow-lv3); background: var(--dsw-alias-bg-layer-2); }
.dsh-module-settings-nav { display: grid; align-content: start; gap: 2px; padding: 20px 12px; background: var(--dsw-specific-sidebar-fill); }
.dsh-module-settings-nav > strong { padding: 0 12px 12px; color: var(--dsw-alias-label-primary); font: var(--dsw-font-s-strong-14); }
.dsh-module-settings-nav button { display: flex; align-items: center; gap: 8px; height: 40px; border: 0; border-radius: 12px; padding: 9px 16px 9px 12px; color: var(--dsw-alias-label-secondary); background: transparent; cursor: pointer; text-align: left; font-size: 14px; line-height: 22px; }
.dsh-module-settings-nav button[data-active="true"], .dsh-module-settings-nav button:hover { color: var(--dsw-alias-label-primary); background: var(--dsw-specific-sidebar-nav-item-active); }
.dsh-module-settings-content { display: grid; grid-template-rows: 54px minmax(0, 1fr); min-width: 0; }
.dsh-module-settings-content > header { display: flex; align-items: center; justify-content: space-between; padding: 0 24px; border-bottom: 1px solid var(--dsw-alias-border-l1); font: var(--dsw-font-s-strong-14); }
.dsh-module-settings-content > header button { display: inline-flex; width: 28px; height: 28px; align-items: center; justify-content: center; border: 0; border-radius: 50%; color: var(--dsw-alias-label-tertiary); background: transparent; }
.dsh-module-settings-options { display: grid; align-content: start; gap: 18px; overflow: auto; padding: 24px; }
.dsh-module-settings-input { width: 100%; }
.dsh-module-settings-input input { min-width: 0; }
.dsh-module-settings-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding-top: 4px; }
.dsh-module-settings-row > div { display: grid; gap: 3px; }
.dsh-module-settings-row strong { font: var(--dsw-font-xs-strong-13); }
.dsh-module-settings-row span { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-module-switch { position: relative; width: 36px; height: 22px; flex: none; border: 0; border-radius: 11px; padding: 0; background: var(--dsw-alias-border-l3); }
.dsh-module-switch span { position: absolute; top: 3px; left: 3px; width: 16px; height: 16px; border-radius: 50%; background: var(--dsw-alias-bg-layer-1); }
.dsh-module-switch[data-on="true"] { background: var(--dsw-alias-state-business-primary); }
.dsh-module-switch[data-on="true"] span { left: 17px; }
.dsh-settings-recipe-grid { border: 0; background: transparent; }
.dsh-settings-recipe-grid > div { min-height: 92px; padding: 16px 0; background: transparent; }
.dsh-settings-comparison { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-settings-comparison > div { display: grid; gap: 6px; min-height: 110px; padding: 18px 0; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-settings-comparison > div + div { padding-left: 18px; border-left: 1px solid var(--dsw-alias-border-l1); }
.dsh-settings-comparison strong { font: var(--dsw-font-s-strong-14); }
.dsh-settings-comparison span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-settings-comparison code { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); }
.dsh-primitive-button.is-danger { color: var(--dsw-alias-label-primary-foreground); background: var(--dsw-alias-state-error-primary); }
.dsh-a11y-keyboard-list { display: grid; border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-a11y-keyboard-list > div { display: grid; grid-template-columns: 74px 120px minmax(0, 1fr); gap: 14px; align-items: center; min-height: 52px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-a11y-keyboard-list kbd, .dsh-a11y-role { display: inline-flex; width: fit-content; min-width: 40px; height: 24px; align-items: center; justify-content: center; border: 1px solid var(--dsw-alias-border-l2); border-radius: 6px; padding: 0 7px; color: var(--dsw-alias-label-secondary); background: var(--dsw-alias-bg-layer-1); font: var(--dsw-font-markdown-code-block-small); }
.dsh-a11y-keyboard-list strong { font: var(--dsw-font-xs-strong-13); }
.dsh-a11y-keyboard-list span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-a11y-role-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-border-l1); }
.dsh-a11y-role-grid > div { display: grid; grid-template-columns: 90px minmax(0, 1fr); grid-template-rows: auto auto; gap: 3px 12px; align-items: center; min-height: 72px; padding: 12px 14px; background: var(--dsw-alias-bg-layer-1); }
.dsh-a11y-role-grid .dsh-a11y-role { grid-row: span 2; color: var(--dsw-alias-state-business-primary); border-color: var(--dsw-alias-state-business-primary); background: transparent; }
.dsh-a11y-role-grid strong { font: var(--dsw-font-xs-strong-13); }
.dsh-a11y-role-grid small { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-a11y-focus-demo { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 16px; padding: 16px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-1); }
.dsh-a11y-focus-demo button { display: inline-flex; align-items: center; gap: 6px; height: 32px; border: 0; border-radius: 16px; padding: 0 12px; color: var(--dsw-alias-label-secondary); background: var(--dsw-alias-interactive-bg-hover); font: var(--dsw-font-xs-13); }
.dsh-a11y-focus-demo button[data-focus-demo="true"] { outline: 2px solid var(--dsw-alias-state-business-primary); outline-offset: 2px; }
.dsh-a11y-focus-demo label { display: inline-flex; align-items: center; gap: 6px; color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-a11y-focus-demo > span { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-running-state-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-border-l1); }
.dsh-running-state-grid > div { display: grid; grid-template-columns: 20px minmax(0, 1fr); grid-template-rows: auto auto; column-gap: 10px; row-gap: 3px; align-items: center; min-height: 84px; padding: 16px; background: var(--dsw-alias-bg-layer-1); }
.dsh-running-state-grid > div > svg { grid-row: span 2; color: var(--dsw-alias-state-business-primary); }
.dsh-running-state-grid strong { font: var(--dsw-font-xs-strong-13); }
.dsh-running-state-grid span { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xs-13); }
.dsh-running-reasoning { position: relative; overflow: hidden; }
.dsh-running-reasoning::after { content: ''; position: absolute; inset-block: 0; left: 0; width: 300px; background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--dsw-alias-bg-base) 60%, transparent), transparent); animation: dsh-board-thinking-sweep 2.6s ease-out infinite; pointer-events: none; }
.dsh-running-shimmer { color: var(--dsw-alias-state-business-primary); background: linear-gradient(90deg, var(--dsw-alias-state-business-primary) 0%, var(--dsw-alias-label-primary-foreground) 48%, var(--dsw-alias-state-business-primary) 100%); background-size: 220% 100%; background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: dsh-board-text-shimmer 1.8s linear infinite; }
@keyframes dsh-board-text-shimmer { from { background-position: 200% 0; } to { background-position: -20% 0; } }
.dsh-running-button button { display: inline-flex; grid-row: span 2; width: 28px; height: 28px; align-items: center; justify-content: center; border: 0; border-radius: 50%; color: var(--dsw-alias-label-primary-foreground); background: var(--dsw-alias-button-info-fill); }
.dsh-state-matrix { border: 0; background: transparent; }
.dsh-state-matrix > div { min-height: 88px; padding: 16px 0; border-bottom: 1px solid var(--dsw-alias-border-l1); background: transparent; }
.dsh-state-matrix > div:nth-child(odd) { padding-right: 18px; }
.dsh-state-matrix > div:nth-child(even) { padding-left: 18px; border-left: 1px solid var(--dsw-alias-border-l1); }
.dsh-state-matrix small { grid-column: 2; color: var(--dsw-alias-label-tertiary); }
.dsh-responsive-table > div { grid-template-columns: 150px minmax(0, 1fr) 190px; }
.dsh-responsive-table code { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); }
.dsh-checklist { border: 0; background: transparent; }
.dsh-checklist > div { min-height: 50px; padding: 12px 0; border-bottom: 1px solid var(--dsw-alias-border-l1); background: transparent; }
.dsh-checklist svg { color: var(--dsw-alias-state-business-primary); }
.dsh-a11y-checklist { border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-a11y-checklist > div { display: grid; grid-template-columns: 18px 130px minmax(0, 1fr) 260px; gap: 12px; align-items: center; min-height: 58px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-a11y-checklist svg { color: var(--dsw-alias-state-business-primary); }
.dsh-a11y-checklist strong { font: var(--dsw-font-xs-strong-13); }
.dsh-a11y-checklist span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-a11y-checklist small { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-exception-list > div {  display: grid; grid-template-columns: 18px 150px minmax(0, 1fr) 250px; gap: 12px; align-items: center; min-height: 58px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-exception-list svg { color: var(--dsw-alias-state-error-primary); }
.dsh-exception-list strong { font: var(--dsw-font-xs-strong-13); }
.dsh-exception-list span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-exception-list code { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); overflow-wrap: anywhere; }
.dsh-chat-rule-table { border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-chat-rule-table > div { display: grid; grid-template-columns: 170px 300px minmax(0, 1fr); gap: 16px; align-items: center; min-height: 54px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-chat-rule-table strong { font: var(--dsw-font-xs-strong-13); }
.dsh-chat-rule-table code { min-width: 0; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); overflow-wrap: anywhere; }
.dsh-chat-rule-table span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-chat-flow-specimen { position: relative; min-height: 560px; padding: 16px calc(var(--dsw-board-gutter, 32px) + 16px); overflow: hidden; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-base); }
.dsh-chat-flow-column { display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 748px; margin: 0 auto; }
.dsh-chat-load-older { display: flex; justify-content: center; }
.dsh-chat-load-older button { border: 0; border-radius: 14px; padding: 4px 12px; color: var(--dsw-alias-label-secondary); background: var(--dsw-alias-interactive-bg-hover-solid); font: var(--dsw-font-xxs-12); }
.dsh-chat-context-row { display: flex; align-items: center; min-width: 0; height: 24px; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-s-14); }
.dsh-chat-context-row svg { flex: none; margin-right: 6px; color: var(--dsw-alias-label-secondary); }
.dsh-chat-context-row i, .dsh-chat-stats i { flex: none; width: 2px; height: 2px; margin: 0 8px; border-radius: 1px; background: var(--dsw-alias-label-caption); }
.dsh-chat-context-row span { flex: none; color: var(--dsw-alias-label-primary-dimmed); }
.dsh-chat-context-row small { min-width: 0; overflow: hidden; color: var(--dsw-alias-label-tertiary); font: inherit; text-overflow: ellipsis; white-space: nowrap; }
.dsh-chat-user-row { display: flex; justify-content: flex-end; }
.dsh-chat-user-bubble { max-width: min(525px, 82%); border-radius: 22px; padding: 10px 16px; color: var(--dsw-alias-label-primary); background: var(--dsw-specific-bubble); font: var(--dsw-font-base-16); }
.dsh-chat-assistant { max-width: 748px; color: var(--dsw-alias-label-primary); font: var(--dsw-font-markdown-base); }
.dsh-chat-assistant p { margin: 0; }
.dsh-chat-reasoning { position: relative; display: flex; align-items: center; min-width: 0; height: 24px; overflow: hidden; gap: 6px; color: var(--dsw-alias-label-secondary); font: var(--dsw-font-s-14); }
.dsh-chat-reasoning[data-running="true"]::after { position: absolute; inset-block: 0; left: 0; width: 300px; content: ''; background: linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--dsw-alias-bg-base) 60%, transparent) 55%, transparent 100%); animation: dsh-board-chat-reasoning-sweep 2.6s ease-out infinite; pointer-events: none; }
.dsh-chat-reasoning > svg:first-child { flex: none; color: var(--dsw-alias-state-business-primary); }
.dsh-chat-reasoning strong { font: var(--dsw-font-s-14); }
.dsh-chat-reasoning i { flex: none; width: 2px; height: 2px; margin: 0 2px; border-radius: 1px; background: var(--dsw-alias-label-caption); }
.dsh-chat-reasoning span { min-width: 0; overflow: hidden; color: var(--dsw-alias-label-tertiary); text-overflow: ellipsis; white-space: nowrap; }
.dsh-chat-reasoning > svg:last-child { flex: none; color: var(--dsw-alias-label-secondary); }
@keyframes dsh-board-chat-reasoning-sweep { 0% { left: -300px; } 90%, 100% { left: 100%; } }
.dsh-chat-tool { display: grid; grid-template-columns: 18px auto 2px minmax(0, 1fr) 14px; gap: 8px; align-items: center; min-height: 24px; color: var(--dsw-alias-label-secondary); font: var(--dsw-font-s-14); }
.dsh-chat-tool > svg { color: var(--dsw-alias-label-secondary); }
.dsh-chat-tool strong { font: var(--dsw-font-s-14); }
.dsh-chat-tool i { width: 2px; height: 2px; border-radius: 1px; background: var(--dsw-alias-label-caption); }
.dsh-chat-tool span { min-width: 0; overflow: hidden; color: var(--dsw-alias-label-tertiary); text-overflow: ellipsis; white-space: nowrap; }
.dsh-chat-error { display: grid; grid-template-columns: 10px minmax(0, 1fr) auto; gap: 8px; align-items: start; color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-chat-error > span { width: 8px; height: 8px; margin-top: 6px; border-radius: 50%; background: var(--dsw-alias-state-error-primary); }
.dsh-chat-error > div { display: flex; flex-wrap: wrap; gap: 0 6px; min-width: 0; }
.dsh-chat-error strong { color: var(--dsw-alias-state-error-primary); font: var(--dsw-font-xs-strong-13); }
.dsh-chat-error code { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); }
.dsh-chat-error button { height: 28px; border: 0; border-radius: 14px; padding: 0 10px; color: var(--dsw-alias-label-secondary); background: var(--dsw-alias-interactive-bg-hover); font: var(--dsw-font-xxs-12); }
.dsh-chat-turn-status { display: inline-flex; align-self: flex-start; align-items: center; height: 26px; color: transparent; background: linear-gradient(90deg, var(--dsw-static-deepseek-500) 0%, var(--dsw-static-deepseek-500) 40%, var(--dsw-static-deepseek-200) 50%, var(--dsw-static-deepseek-500) 60%, var(--dsw-static-deepseek-500) 100%); background-position: 100% 0; background-size: 250% 100%; background-clip: text; font: var(--dsw-font-s-strong-14); -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: dsh-board-chat-shimmer 1.8s linear infinite; }
.dsh-chat-turn-status span { margin-left: 8px; color: var(--dsw-alias-label-caption); font: var(--dsw-font-xs-13); font-weight: 400; -webkit-text-fill-color: var(--dsw-alias-label-caption); }
@keyframes dsh-board-chat-shimmer { to { background-position: 0 0; } }
.dsh-chat-pending { align-self: flex-end; max-width: min(525px, 82%); border-radius: 22px; padding: 10px 16px; color: var(--dsw-alias-label-primary); background: var(--dsw-specific-bubble); font: var(--dsw-font-base-16); }
.dsh-chat-stats { display: block; width: 100%; overflow: hidden; padding-top: 4px; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); line-height: 20px; text-align: center; text-overflow: ellipsis; white-space: nowrap; }
.dsh-chat-stats i { display: inline-block; vertical-align: middle; }
.dsh-chat-to-bottom { position: absolute; right: max(16px, calc((100% - 748px) / 2)); bottom: 16px; display: flex; width: 34px; height: 34px; align-items: center; justify-content: center; border: 1px solid var(--dsw-alias-border-l2); border-radius: 50%; color: var(--dsw-alias-label-primary); background: var(--dsw-alias-button-floating-fill); box-shadow: var(--dsw-shadow-lv2); }
.dsh-chat-dock-order { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-border-l1); }
.dsh-chat-dock-order > div { display: grid; gap: 5px; min-height: 92px; padding: 16px; background: var(--dsw-alias-bg-base); }
.dsh-chat-dock-order strong { font: var(--dsw-font-xs-strong-13); }
.dsh-chat-dock-order code { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); overflow-wrap: anywhere; }
.dsh-chat-dock-order span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-sidebar-rule-table { border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-sidebar-rule-table > div { display: grid; grid-template-columns: 170px 300px minmax(0, 1fr); gap: 16px; align-items: center; min-height: 54px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-sidebar-rule-table strong { font: var(--dsw-font-xs-strong-13); }
.dsh-sidebar-rule-table code { min-width: 0; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); overflow-wrap: anywhere; }
.dsh-sidebar-rule-table span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-sidebar-specimen { display: grid; align-content: start; gap: 4px; width: min(320px, 100%); min-height: 468px; padding: 10px 8px; border: 1px solid var(--dsw-alias-border-l2); border-radius: 12px; overflow: hidden; background: var(--dsw-specific-sidebar-fill); }
.dsh-sidebar-specimen > * { min-width: 0; }
.dsh-sidebar-brand { display: flex; align-items: center; gap: 6px; height: 42px; padding: 0 10px; color: var(--dsw-alias-label-primary); font: var(--dsw-font-s-strong-14); }
.dsh-sidebar-brand span { color: var(--dsw-alias-label-tertiary); font-weight: 400; }
.dsh-sidebar-brand button { display: inline-flex; width: 28px; height: 28px; align-items: center; justify-content: center; margin-left: auto; border: 0; border-radius: 50%; color: var(--dsw-alias-label-secondary); background: transparent; }
.dsh-sidebar-new { display: flex; align-items: center; justify-content: center; gap: 6px; height: 38px; margin: 0 2px 8px; border: 1px solid var(--dsw-alias-border-l2); border-radius: 12px; padding: 0 16px; color: var(--dsw-alias-label-primary); background: var(--dsw-alias-button-elevated-fill); text-align: left; font: var(--dsw-font-s-14); }
.dsh-sidebar-new:hover { background: var(--dsw-alias-button-floating-hover); }
.dsh-sidebar-section-title { display: flex; align-items: center; justify-content: space-between; height: 36px; padding: 0 4px; margin-top: 6px; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xs-13); }
.dsh-sidebar-section-title > div { display: flex; gap: 2px; }
.dsh-sidebar-section-title button, .dsh-sidebar-workbench > svg:last-child, .dsh-sidebar-project > svg:last-child { display: inline-flex; width: 28px; height: 28px; align-items: center; justify-content: center; border: 0; border-radius: 50%; color: var(--dsw-alias-label-secondary); background: transparent; }
.dsh-sidebar-section-title button:hover, .dsh-sidebar-workbench:hover, .dsh-sidebar-project:hover { background: var(--dsw-alias-interactive-bg-hover); }
.dsh-sidebar-workbench, .dsh-sidebar-project { display: flex; align-items: center; gap: 7px; min-width: 0; min-height: 34px; padding: 0 8px; border-radius: 8px; color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-sidebar-workbench > strong, .dsh-sidebar-project > strong { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font: var(--dsw-font-xs-strong-13); }
.dsh-sidebar-rename { width: 218px; margin: 0 0 4px 20px; padding: 4px; border: 1px solid var(--dsw-alias-border-l2); border-radius: 12px; background: var(--dsw-specific-menu); box-shadow: var(--dsw-shadow-lv3); }
.dsh-sidebar-rename button { display: flex; align-items: center; gap: 8px; width: 100%; height: 40px; border: 0; border-radius: 8px; padding: 0 8px; color: var(--dsw-alias-label-secondary); background: transparent; text-align: left; font: var(--dsw-font-s-14); }
.dsh-sidebar-rename button:hover { background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary); }
.dsh-sidebar-rename .is-danger { color: var(--dsw-alias-state-error-primary); }
.dsh-sidebar-rename hr { height: 1px; margin: 4px 8px; border: 0; background: var(--dsw-alias-border-l1); }
.dsh-sidebar-session { display: flex; align-items: center; gap: 6px; min-width: 0; height: 32px; border: 0; border-radius: 8px; padding: 0 8px; color: var(--dsw-alias-label-secondary); background: transparent; text-align: left; font: var(--dsw-font-xs-13); }
.dsh-sidebar-session[data-selected="true"], .dsh-sidebar-session:hover { background: var(--dsw-alias-interactive-bg-hover); }
.dsh-sidebar-session > span:nth-child(2) { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dsh-sidebar-session time { margin-left: auto; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-sidebar-session-empty { width: 6px; height: 6px; margin: 0 5px; border-radius: 50%; background: var(--dsw-alias-label-caption); }
.dsh-sidebar-state-grid, .dsh-session-action-grid, .dsh-composer-state-grid, .dsh-trajectory-state-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-border-l1); }
.dsh-sidebar-state-grid > div, .dsh-session-action-grid > div, .dsh-composer-state-grid > div, .dsh-trajectory-state-grid > div { display: grid; grid-template-columns: 18px minmax(0, 1fr); column-gap: 10px; row-gap: 4px; min-height: 84px; padding: 16px; background: var(--dsw-alias-bg-base); }
.dsh-sidebar-state-grid svg, .dsh-session-action-grid svg { grid-row: span 2; color: var(--dsw-alias-label-tertiary); }
.dsh-sidebar-state-grid strong, .dsh-session-action-grid strong, .dsh-composer-state-grid strong, .dsh-trajectory-state-grid strong { font: var(--dsw-font-xs-strong-13); }
.dsh-sidebar-state-grid span, .dsh-session-action-grid span, .dsh-composer-state-grid span, .dsh-trajectory-state-grid span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-session-rule-table { border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-session-rule-table > div { display: grid; grid-template-columns: 170px 300px minmax(0, 1fr); gap: 16px; align-items: center; min-height: 54px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-session-rule-table strong { font: var(--dsw-font-xs-strong-13); }
.dsh-session-rule-table code { min-width: 0; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); overflow-wrap: anywhere; }
.dsh-session-rule-table span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-session-header-specimen { border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-base); }
.dsh-session-title-row { display: flex; align-items: center; gap: 0; min-height: 32px; padding: 12px 28px 0 20px; border-bottom: 1px solid var(--dsw-alias-border-l2); }
.dsh-session-title-row > nav { display: flex; align-items: center; gap: 5px; min-width: 0; margin-right: auto; white-space: nowrap; font: var(--dsw-font-xs-13); }
.dsh-session-title-row nav button { max-width: 160px; overflow: hidden; border: 0; border-radius: 12px; padding: 4px 8px; color: var(--dsw-alias-label-tertiary); background: transparent; text-overflow: ellipsis; white-space: nowrap; font: inherit; }
.dsh-session-title-row nav strong { min-width: 0; overflow: hidden; color: var(--dsw-alias-label-primary); text-overflow: ellipsis; font: var(--dsw-font-xs-strong-13); }
.dsh-session-header-actions, .dsh-session-header-tools { display: flex; align-items: center; gap: 8px; min-width: 0; }
.dsh-session-header-tools { margin-left: 20px; }
.dsh-session-preset, .dsh-session-subagents, .dsh-session-jobs { display: inline-flex; align-items: center; gap: 3px; min-height: 28px; max-width: 190px; overflow: hidden; border: 0; border-radius: 6px; padding: 3px 2px; color: var(--dsw-alias-label-tertiary); background: transparent; text-overflow: ellipsis; white-space: nowrap; font: var(--dsw-font-xxs-12); }
.dsh-session-subagents span:not(.dsh-session-running-dot), .dsh-session-jobs span:not(.dsh-session-running-dot) { margin: 0 5px; }
.dsh-session-subagents:hover, .dsh-session-jobs:hover { color: var(--dsw-alias-label-secondary); }
.dsh-session-preset svg, .dsh-session-subagents svg, .dsh-session-jobs svg { flex: none; }
.dsh-session-log { display: inline-flex; align-items: center; gap: 6px; height: 32px; border: 1px solid var(--dsw-alias-border-l2); border-radius: 16px; padding: 0 10px; color: var(--dsw-alias-label-secondary); background: transparent; font: var(--dsw-font-xxs-12); }
.dsh-session-tabs { position: relative; display: flex; gap: 36px; min-height: 35px; margin-top: 4px; padding-left: 8px; }
.dsh-session-tabs button { position: relative; border: 0; padding: 0 0 11px; color: var(--dsw-alias-label-tertiary); background: transparent; font: var(--dsw-font-xxs-12); line-height: 16px; font-weight: 500; }
.dsh-session-tabs button[aria-selected="true"] { color: var(--dsw-alias-label-primary); }
.dsh-session-tabs button[aria-selected="true"]::after { content: ''; position: absolute; right: 0; bottom: 0; left: 0; height: 2px; border-radius: 2px 2px 0 0; background: var(--dsw-alias-label-primary); }
.dsh-composer-rule-table { border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-composer-rule-table > div { display: grid; grid-template-columns: 170px 300px minmax(0, 1fr); gap: 16px; align-items: center; min-height: 54px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-composer-rule-table strong { font: var(--dsw-font-xs-strong-13); }
.dsh-composer-rule-table code { min-width: 0; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); overflow-wrap: anywhere; }
.dsh-composer-rule-table span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-composer-surface { width: min(780px, 100%); margin: 0 auto; }
.dsh-composer-dock-stack { display: grid; gap: 4px; margin: 0 16px 4px; }
.dsh-composer-dock-stack > div { display: grid; grid-template-columns: 18px auto minmax(0, 1fr) auto; gap: 7px; align-items: center; min-height: 36px; padding: 0 10px; border-radius: 12px; color: var(--dsw-alias-label-secondary); background: var(--dsh-board-specific-tip, var(--dsw-specific-tip)); font: var(--dsw-font-xs-13); }
.dsh-composer-dock-stack > div > span { min-width: 0; overflow: hidden; color: var(--dsw-alias-label-tertiary); text-overflow: ellipsis; white-space: nowrap; }
.dsh-composer-dock-stack > div > svg { color: var(--dsw-alias-label-tertiary); }
.dsh-composer-dock-stack button { display: inline-flex; width: 24px; height: 24px; align-items: center; justify-content: center; border: 0; border-radius: 50%; color: var(--dsw-alias-label-secondary); background: transparent; }
.dsh-composer-notice { width: calc(100% - 32px); margin: 0 16px 6px; padding: 4px 8px; border-radius: 8px; color: var(--dsw-alias-label-secondary); background: var(--dsw-alias-interactive-bg-hover); font: var(--dsw-font-xxs-12); }
.dsh-composer-real-card { overflow: hidden; border: 1px solid var(--dsw-alias-border-l2-darkmode-thin); border-radius: 22px; box-shadow: var(--dsw-shadow-lv2); background: var(--dsw-specific-input-major); }
.dsh-composer-real-attachments { display: flex; align-items: center; gap: 10px; min-height: 76px; padding: 10px 16px 0; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-composer-real-attachments > div { position: relative; display: inline-flex; width: 64px; height: 64px; align-items: center; justify-content: center; border-radius: 16px; color: var(--dsw-alias-label-secondary); background: var(--dsw-alias-bg-layer-1); }
.dsh-composer-real-attachments button { position: absolute; top: -4px; right: -4px; display: inline-flex; width: 18px; height: 18px; align-items: center; justify-content: center; border: 0; border-radius: 50%; color: var(--dsw-alias-label-primary-foreground); background: var(--dsw-alias-state-error-primary); }
.dsh-composer-real-text { position: relative; min-height: 104px; padding: 12px 16px 0; }
.dsh-composer-real-text textarea, .dsh-composer-real-text > div { display: block; width: 100%; min-height: 78px; margin: 0; border: 0; outline: 0; resize: none; color: var(--dsw-alias-label-primary); background: transparent; font: var(--dsw-font-base-16); line-height: 24px; }
.dsh-composer-real-text > div { position: absolute; inset: 12px 16px 0; color: transparent; pointer-events: none; }
.dsh-composer-real-text mark { color: transparent; border-radius: 6px; background: rgba(97, 135, 216, 0.22); }
.dsh-composer-real-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; min-width: 0; padding: 2px 8px 6px; }
.dsh-composer-real-tools, .dsh-composer-real-trailing { display: flex; align-items: center; gap: 12px; min-width: 0; }
.dsh-composer-real-tools { gap: 16px; }
.dsh-composer-real-row select { max-width: 180px; height: 28px; min-width: 0; overflow: hidden; border: 0; border-radius: 8px; padding: 0 8px; color: var(--dsw-alias-label-secondary); background: transparent; font: var(--dsw-font-xs-13); }
.dsh-composer-real-row select:hover { background: var(--dsw-alias-interactive-bg-hover); }
.dsh-composer-real-add, .dsh-composer-real-send { display: inline-flex; flex: none; width: 28px; height: 28px; align-items: center; justify-content: center; border: 0; border-radius: 50%; padding: 0; color: var(--dsw-alias-label-secondary); }
.dsh-composer-real-add { background: var(--dsw-specific-selector); }
.dsh-composer-real-meter { height: 28px; border: 0; border-radius: 14px; padding: 0 8px; color: var(--dsw-alias-label-tertiary); background: transparent; font: var(--dsw-font-xxs-12); }
.dsh-composer-real-send { width: 34px; height: 34px; color: var(--dsw-alias-label-primary-foreground); background: var(--dsw-alias-button-info-fill); transform: translateY(-2px); }
.dsh-composer-real-stats { overflow: hidden; padding: 4px 16px 0; color: var(--dsw-alias-label-tertiary); text-align: center; text-overflow: ellipsis; white-space: nowrap; font: var(--dsw-font-xxs-12); }
.dsh-composer-real-stats i { display: inline-block; width: 2px; height: 2px; margin: 0 8px; border-radius: 1px; background: var(--dsw-alias-label-caption); vertical-align: middle; }
.dsh-composer-state-grid > div { grid-template-columns: minmax(0, 1fr); min-height: 76px; }
.dsh-trajectory-rule-table { border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-trajectory-rule-table > div { display: grid; grid-template-columns: 170px 300px minmax(0, 1fr); gap: 16px; align-items: center; min-height: 54px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-trajectory-rule-table strong { font: var(--dsw-font-xs-strong-13); }
.dsh-trajectory-rule-table code { min-width: 0; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); overflow-wrap: anywhere; }
.dsh-trajectory-rule-table span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-trajectory-frame { min-width: 0; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-base); }
.dsh-trajectory-toolbar { display: flex; align-items: center; gap: 8px; height: 32px; padding: 0 6px; border-bottom: 1px solid var(--dsw-alias-border-l2); }
.dsh-trajectory-toolbar > button { display: inline-flex; align-items: center; gap: 4px; height: 20px; border: 0; border-radius: 3px; padding: 0 7px; color: var(--dsw-alias-label-tertiary); background: transparent; font: var(--dsw-font-xxs-12); }
.dsh-trajectory-toolbar > button[data-active="true"], .dsh-trajectory-toolbar > button:hover { background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary); }
.dsh-trajectory-toolbar label { display: flex; align-items: center; gap: 5px; width: 164px; min-width: 84px; height: 20px; margin-left: auto; padding: 0 8px; border-radius: 3px; color: var(--dsw-alias-label-tertiary); background: transparent; }
.dsh-trajectory-toolbar input { min-width: 0; width: 100%; border: 0; outline: 0; color: var(--dsw-alias-label-primary); background: transparent; font: var(--dsw-font-xxs-12); }
.dsh-trajectory-timeline { display: grid; grid-template-columns: 44px minmax(0, 1fr); height: 50px; border-bottom: 1px solid var(--dsw-alias-border-l2); }
.dsh-trajectory-lanes { display: grid; grid-template-rows: repeat(3, 1fr); padding: 8px 4px; color: var(--dsw-alias-label-caption); font: var(--dsw-font-xxxs-strong-11); }
.dsh-trajectory-lanes span { display: flex; align-items: center; }
.dsh-trajectory-bars { position: relative; display: grid; grid-template-rows: repeat(3, 1fr); gap: 3px; padding: 8px 12px; overflow: hidden; }
.dsh-trajectory-bars i { display: block; height: 12px; border-radius: 3px; background: var(--dsw-alias-state-business-tertiary); }
.dsh-trajectory-bars .is-input { width: 35%; }
.dsh-trajectory-bars .is-model { width: 68%; background: var(--dsw-alias-state-business-primary); }
.dsh-trajectory-bars .is-tool { width: 48%; background: var(--dsw-alias-label-caption); }
.dsh-trajectory-bars .is-error { position: absolute; top: 37px; left: 51%; width: 12%; height: 12px; background: var(--dsw-alias-state-error-primary); }
.dsh-trajectory-bars small { position: absolute; right: 12px; bottom: 2px; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxxs-11); }
.dsh-trajectory-body { display: grid; grid-template-columns: minmax(0, 1fr) 280px; min-height: 330px; }
.dsh-trajectory-ledger { min-width: 0; padding: 8px 0 12px; overflow: hidden; }
.dsh-trajectory-load-earlier { height: 30px; padding: 7px 12px; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-trajectory-row { display: grid; grid-template-columns: 122px minmax(0, 1fr) 46px; gap: 8px; align-items: center; min-height: 30px; padding: 0 10px; border-left: 3px solid transparent; color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xxs-12); }
.dsh-trajectory-row:hover, .dsh-trajectory-row.is-selected { background: var(--dsw-alias-interactive-bg-hover); }
.dsh-trajectory-row.is-selected { border-left-color: var(--dsw-alias-state-business-primary); }
.dsh-trajectory-event { display: flex; align-items: center; gap: 7px; min-width: 0; }
.dsh-trajectory-event b { color: var(--dsw-alias-label-caption); font: var(--dsw-font-markdown-code-block-small); }
.dsh-trajectory-event em { min-width: 0; overflow: hidden; color: var(--dsw-alias-state-business-primary); font-style: normal; font: var(--dsw-font-xxxs-strong-11); text-overflow: ellipsis; }
.dsh-trajectory-content { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dsh-trajectory-row time { color: var(--dsw-alias-label-tertiary); text-align: right; font: var(--dsw-font-xxxs-11); }
.dsh-trajectory-row.kind-tool .dsh-trajectory-event em, .dsh-trajectory-row.kind-subtool .dsh-trajectory-event em { color: var(--dsw-alias-label-secondary); }
.dsh-trajectory-row.kind-compacted .dsh-trajectory-event em, .dsh-trajectory-row.kind-context .dsh-trajectory-event em { color: var(--dsw-alias-label-tertiary); }
.dsh-trajectory-turn-break { display: flex; align-items: center; gap: 8px; min-height: 28px; padding: 8px 12px 4px; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-trajectory-turn-break i { flex: 1; height: 2px; background: var(--dsw-alias-border-l2); }
.dsh-trajectory-turn-break small { font: var(--dsw-font-xxxs-11); }
.dsh-trajectory-inspector { min-width: 0; border-left: 1px solid var(--dsw-alias-border-l2); background: var(--dsw-alias-bg-layer-1); }
.dsh-trajectory-inspector header { display: flex; align-items: center; justify-content: space-between; height: 42px; padding: 0 10px 0 14px; border-bottom: 1px solid var(--dsw-alias-border-l1); font: var(--dsw-font-xs-strong-13); }
.dsh-trajectory-inspector header button { display: inline-flex; width: 28px; height: 28px; align-items: center; justify-content: center; border: 0; border-radius: 50%; color: var(--dsw-alias-label-tertiary); background: transparent; }
.dsh-trajectory-inspector nav { display: flex; gap: 14px; height: 34px; overflow: auto; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-trajectory-inspector nav button { flex: none; height: 34px; border: 0; padding: 0 5px; color: var(--dsw-alias-label-tertiary); background: transparent; font: var(--dsw-font-xxs-12); }
.dsh-trajectory-inspector nav button[data-active="true"] { color: var(--dsw-alias-label-primary); border-bottom: 2px solid var(--dsw-alias-state-business-primary); }
.dsh-trajectory-inspector-body { display: grid; gap: 12px; padding: 14px; overflow: auto; }
.dsh-trajectory-inspector-body dl { display: grid; gap: 7px; margin: 0; }
.dsh-trajectory-inspector-body dl > div { display: flex; justify-content: space-between; gap: 10px; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-trajectory-inspector-body dd { margin: 0; color: var(--dsw-alias-label-secondary); text-align: right; }
.dsh-trajectory-inspector-body .is-success { color: var(--dsw-alias-state-success-primary); }
.dsh-trajectory-inspector-body h4 { margin: 0; font: var(--dsw-font-xs-strong-13); }
.dsh-trajectory-inspector-body pre { max-height: 132px; margin: 0; overflow: auto; padding: 10px; border-radius: 8px; color: var(--dsw-alias-label-secondary); background: var(--dsw-alias-markdown-code-block); font: var(--dsw-font-markdown-code-block-small); white-space: pre-wrap; }
.dsh-overview-page-map { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-overview-page-map > div { display: grid; grid-template-columns: 18px minmax(0, 1fr); column-gap: 10px; row-gap: 4px; min-height: 98px; padding: 16px 0; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-overview-page-map > div:nth-child(odd) { padding-right: 18px; }
.dsh-overview-page-map > div:nth-child(even) { padding-left: 18px; border-left: 1px solid var(--dsw-alias-border-l1); }
.dsh-overview-page-map svg { grid-row: span 2; color: var(--dsw-alias-label-tertiary); }
.dsh-overview-page-map strong { font: var(--dsw-font-xs-strong-13); }
.dsh-overview-page-map span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-overview-workflow { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px 20px; padding-top: 4px; }
.dsh-overview-workflow > div { display: grid; grid-template-columns: 24px minmax(0, 1fr); column-gap: 10px; row-gap: 5px; min-width: 0; }
.dsh-overview-workflow b { display: inline-flex; grid-row: span 2; width: 24px; height: 24px; align-items: center; justify-content: center; border-radius: 50%; color: var(--dsw-alias-state-business-primary); background: var(--dsw-alias-state-business-tertiary); font: var(--dsw-font-xxs-strong-12); }
.dsh-overview-workflow strong { font: var(--dsw-font-xs-strong-13); }
.dsh-overview-workflow span { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); }
.dsh-session-running-dot { flex: none; width: 8px; height: 8px; border-radius: 50%; background: var(--dsw-alias-state-business-primary); }
@container (max-width: 900px) {
  .dsh-specimen-content { padding: 32px 28px 52px; }
  .dsh-board-table-head, .dsh-board-table-row { grid-template-columns: 100px minmax(130px, 1fr) minmax(130px, 1fr); }
  .dsh-board-table-head span:nth-child(n+4), .dsh-board-table-row > :nth-child(n+4) { display: none; }
  .dsh-exception-list > div { grid-template-columns: 18px 120px minmax(0, 1fr); }
  .dsh-exception-list code { grid-column: 3; }
}
@container (max-width: 720px) {
  .dsh-specimen-content { padding: 24px 18px 42px; }
  .dsh-foundation-layer-table > div, .dsh-foundation-theme-table > div, .dsh-foundation-font-table > div, .dsh-chat-rule-table > div, .dsh-composer-rule-table > div, .dsh-trajectory-rule-table > div, .dsh-overlay-rule-table > div, .dsh-settings-rule-table > div, .dsh-sidebar-rule-table > div, .dsh-session-rule-table > div, .dsh-shell-rule-table > div, .dsh-board-table-head, .dsh-board-table-row { grid-template-columns: 1fr; gap: 4px; align-items: start; min-height: 0; padding: 12px 0; }
  .dsh-foundation-layer-table small { grid-column: auto; }
  .dsh-foundation-layer-table strong { grid-row: auto; }
  .dsh-foundation-layer-table code, .dsh-foundation-theme-table code, .dsh-foundation-font-table code, .dsh-chat-rule-table code, .dsh-composer-rule-table code, .dsh-trajectory-rule-table code, .dsh-overlay-rule-table code, .dsh-settings-rule-table code, .dsh-sidebar-rule-table code, .dsh-session-rule-table code, .dsh-shell-rule-table code, .dsh-a11y-checklist > div { white-space: normal; overflow-wrap: anywhere; }
  .dsh-a11y-checklist > div { grid-template-columns: 18px minmax(0, 1fr); gap: 4px; align-items: start; min-height: 0; padding: 12px 0; }
  .dsh-a11y-checklist strong, .dsh-a11y-checklist span, .dsh-a11y-checklist small { grid-column: 2; }
  .dsh-chat-reasoning, .dsh-chat-tool, .dsh-chat-error, .dsh-chat-turn-status, .dsh-chat-stats { min-width: 0; max-width: 100%; }
  .dsh-chat-reasoning span, .dsh-chat-tool span, .dsh-chat-error span, .dsh-chat-turn-status span, .dsh-chat-stats span, .dsh-chat-rule-table span { min-width: 0; overflow-wrap: anywhere; white-space: normal; }
  .dsh-chat-reasoning i { flex: 0 1 24px; min-width: 8px; }
  .dsh-specimen-heading { display: block; }
  .dsh-specimen-source { display: block; max-width: 100%; margin-top: 8px; }
  .dsh-board-layer-strip, .dsh-board-callouts, .dsh-specimen-icon-grid, .dsh-primitive-input-row, .dsh-shell-state-grid, .dsh-overlay-duo, .dsh-settings-comparison, .dsh-state-matrix, .dsh-a11y-role-grid, .dsh-running-state-grid, .dsh-sidebar-state-grid, .dsh-session-action-grid, .dsh-composer-state-grid, .dsh-trajectory-state-grid, .dsh-foundation-rule-grid { grid-template-columns: 1fr; }
  .dsh-overview-page-map, .dsh-overview-workflow { grid-template-columns: 1fr; }
  .dsh-overview-page-map > div:nth-child(odd), .dsh-overview-page-map > div:nth-child(even) { padding-right: 0; padding-left: 0; border-left: 0; }
  .dsh-sidebar-specimen { grid-template-columns: 1fr; }
  .dsh-sidebar-specimen > div:last-child { min-height: 120px; }
  .dsh-session-title-row { align-items: flex-start; flex-wrap: wrap; gap: 8px; }
  .dsh-session-title-row > nav { flex-basis: 100%; }
  .dsh-session-header-tools { margin-left: auto; }
  .dsh-trajectory-body { grid-template-columns: 1fr; }
  .dsh-trajectory-inspector { border-top: 1px solid var(--dsw-alias-border-l2); border-left: 0; }
  .dsh-trajectory-row { grid-template-columns: 50px minmax(0, 1fr) 40px; }
  .dsh-trajectory-event em { font-size: 0; }
  .dsh-trajectory-event em::first-letter { font-size: 10px; }
  .dsh-board-layer-strip > div { border-right: 0; border-bottom: 1px solid var(--dsw-alias-border-l1); }
  .dsh-board-layer-strip > div:last-child { border-bottom: 0; }
  .dsh-board-callouts { gap: 14px; }
  .dsh-specimen-token-row { grid-template-columns: 28px minmax(0, 1fr); padding: 10px 0; }
  .dsh-specimen-token-row > span:last-child { grid-column: 2; white-space: normal; }
  .dsh-specimen-type-head { display: none; }
  .dsh-specimen-type-row { grid-template-columns: 1fr; gap: 4px; padding: 12px 0; }
  .dsh-specimen-type-row code { white-space: normal; }
  .dsh-foundation-metric-table > div, .dsh-foundation-motion-table > div { grid-template-columns: 1fr; gap: 4px; padding: 12px 0; }
  .dsh-specimen-icon-item:nth-child(even), .dsh-settings-recipe-grid > div:nth-child(even), .dsh-state-matrix > div:nth-child(even), .dsh-primitive-catalog > div:nth-child(even) { padding-left: 0; border-left: 0; }
  .dsh-specimen-icon-item:nth-child(odd), .dsh-settings-recipe-grid > div:nth-child(odd), .dsh-state-matrix > div:nth-child(odd), .dsh-primitive-catalog > div:nth-child(odd) { padding-right: 0; }
  .dsh-settings-recipe-grid, .dsh-primitive-catalog { grid-template-columns: 1fr; }
  .dsh-board-table-head, .dsh-board-table-row { grid-template-columns: 1fr; gap: 4px; }
  .dsh-board-table-head span, .dsh-board-table-row > * { display: block; }
  .dsh-board-geometry-table > div { grid-template-columns: 1fr; gap: 3px; padding: 12px 0; }
  .dsh-shell-diagram { grid-template-columns: 1fr; }
  .dsh-shell-details { min-height: 110px; }
  .dsh-responsive-table > div { grid-template-columns: 1fr; gap: 4px; align-items: start; padding: 12px 0; }
  .dsh-overlay-menu-specimen { display: grid; grid-template-columns: 1fr; }
  .dsh-overlay-facts { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .dsh-overlay-modal-card { inset: 18px 12px; padding: 16px; }
  .dsh-module-settings-panel { grid-template-columns: 1fr; min-height: 0; border-radius: 16px; }
  .dsh-module-settings-nav { grid-template-columns: repeat(3, minmax(0, 1fr)); padding: 12px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
  .dsh-module-settings-nav > strong { grid-column: 1 / -1; margin-bottom: 4px; padding: 0; }
  .dsh-module-settings-nav button { justify-content: center; padding: 8px; font-size: 0; }
  .dsh-module-settings-nav button svg { width: 16px; height: 16px; }
  .dsh-module-settings-options { padding: 18px; }
  .dsh-running-state-grid > div { min-height: 72px; padding: 12px 0; }
  .dsh-a11y-keyboard-list > div { grid-template-columns: 60px 1fr; gap: 8px; padding: 10px 0; }
  .dsh-a11y-keyboard-list span { grid-column: 2; }
  .dsh-a11y-role-grid > div { grid-template-columns: 78px minmax(0, 1fr); }
  .dsh-exception-list > div { grid-template-columns: 18px minmax(0, 1fr); gap: 8px; padding: 10px 0; }
  .dsh-exception-list strong, .dsh-exception-list span, .dsh-exception-list code { grid-column: 2; }
  .dsh-exception-list svg { grid-row: span 3; }
}
@container (max-width: 260px) {
  .dsh-specimen-content { padding-inline: 12px; }
  .dsh-icon-geometry-grid { grid-template-columns: 1fr; }
  .dsh-icon-geometry-grid > div { grid-template-columns: 42px minmax(0, 1fr); padding: 12px; }
  .dsh-specimen-icon-item code, .dsh-specimen-icon-item span { text-overflow: clip; white-space: normal; overflow-wrap: anywhere; }
  .dsh-primitive-input-row label, .dsh-primitive-input-row .dsh-primitive-input { width: 100%; min-width: 0; }
  .dsh-primitive-input-row .dsh-primitive-input input { width: 100%; }
  .dsh-trajectory-toolbar { height: auto; min-height: 32px; flex-wrap: wrap; padding-block: 6px; }
  .dsh-trajectory-toolbar label { flex-basis: 100%; width: 100%; min-width: 0; margin-left: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .dsh-specimen-board *, .dsh-specimen-board *::before, .dsh-specimen-board *::after { scroll-behavior: auto !important; transition: none !important; animation: none !important; }
}
`;
		//#endregion
		//#region src/client/componentGalleryStyles.ts
		const COMPONENT_GALLERY_STYLE = `

.dsh-cg { width: min(100%, 1120px); margin: 0 auto; padding: 32px 36px 64px; color: var(--dsw-alias-label-primary); font: var(--dsw-font-xs-13); letter-spacing: 0; }
.dsh-cg *, .dsh-cg *::before, .dsh-cg *::after { box-sizing: border-box; }
.dsh-cg-heading { display: flex; justify-content: space-between; align-items: center; gap: 16px; padding-bottom: 24px; }
.dsh-cg-heading > div { min-width: 0; }
.dsh-cg-eyebrow { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxxs-strong-11); }
.dsh-cg-heading h1 { margin: 7px 0 8px; font: var(--dsw-font-xl-24); }
.dsh-cg-heading > div > code { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-markdown-code-block-small); overflow-wrap: anywhere; }
.dsh-cg-heading > span { flex: none; }
.dsh-cg-scope { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-cg-families { display: flex; flex-wrap: wrap; gap: 0 20px; border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-cg-families button { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 6px 0; border: 0; border-bottom: 2px solid transparent; background: transparent; color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-13); cursor: pointer; }
.dsh-cg-families button small { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxxs-11); }
.dsh-cg-families button[aria-pressed=true] { color: var(--dsw-alias-label-primary); border-bottom-color: var(--dsw-alias-state-business-primary); font-weight: 600; }
.dsh-cg-families button:focus-visible { outline: 2px solid var(--dsw-alias-state-business-primary); outline-offset: 2px; }
.dsh-cg-result-count { flex: 1; font: var(--dsw-font-xxs-12); color: var(--dsw-alias-label-tertiary); }
.dsh-native-label { display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 16px; margin-bottom: 12px; }
.dsh-native-label strong { font: var(--dsw-font-xs-strong-13); }
.dsh-native-label span, .dsh-native-state-grid small, .dsh-native-card-states small { font: var(--dsw-font-xxs-12); color: var(--dsw-alias-label-tertiary); }
.dsh-native-provider-actions { display: flex; flex-wrap: wrap; gap: 10px; }
.dsh-native-provider-actions > button { flex: 1 1 0; min-width: min(180px, 100%); }
.dsh-native-state-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px 24px; margin-top: 22px; }
.dsh-native-state-grid > div { display: flex; align-items: flex-start; flex-direction: column; gap: 10px; min-width: 0; }
.dsh-native-state-grid > div:last-child { grid-column: 1 / -1; }
.dsh-native-state-grid button { max-width: 100%; }
.dsh-native-contract { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px 24px; margin: 24px 0 0; padding: 16px 0 0; border-top: 1px solid var(--dsw-alias-border-l1); }
.dsh-native-contract > div { min-width: 0; }
.dsh-native-contract dt { font: var(--dsw-font-xxxs-11); color: var(--dsw-alias-label-tertiary); }
.dsh-native-contract dd { margin: 4px 0 0; font: var(--dsw-font-xxs-12); overflow-wrap: anywhere; }
.dsh-native-inline-form { display: grid; gap: 10px; max-width: 420px; margin: 16px 0; padding: 12px 0; }
.dsh-native-card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr)); gap: 16px; align-items: stretch; }
.dsh-native-card-states { margin-top: 24px; }
.dsh-native-card-states > div { display: flex; flex-direction: column; gap: 10px; min-width: 0; }
.dsh-native-card-states > div > div { flex: 1; }
.dsh-native-owner-error { display: block; padding: 10px 16px; color: var(--dsw-alias-state-error-primary); font: var(--dsw-font-xxs-12); }
.dsh-cg-unavailable { padding: 16px 0; color: var(--dsw-alias-label-tertiary); }
@container (max-width: 520px) { .dsh-native-contract, .dsh-native-state-grid { grid-template-columns: minmax(0, 1fr); } .dsh-cg-families { gap: 0 16px; } }

.dsh-cg-toolbar { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; padding: 14px 0; border-top: 1px solid var(--dsw-alias-border-l1); border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-cg-search { width: 192px; min-width: 0; }
.dsh-cg-toolbar > .dsh-cg-options { flex: 1; }
.dsh-cg-options, .dsh-cg-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; min-width: 0; }
.dsh-cg-icon-anchor { display: inline-flex; flex: none; align-items: center; justify-content: center; }
.dsh-cg-section { min-width: 0; padding: 26px 0; border-bottom: 1px solid var(--dsw-alias-border-l1); }
.dsh-cg-section-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 18px; }
.dsh-cg-section-head > div:first-child { min-width: 0; }
.dsh-cg-section-head > .dsh-cg-actions { flex: none; flex-wrap: nowrap; }
.dsh-cg-section-head h2 { display: flex; flex-wrap: wrap; align-items: baseline; gap: 5px 12px; margin: 0; font: var(--dsw-font-base-strong-16); }
.dsh-cg-section-head h2 code { min-width: 0; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); overflow-wrap: anywhere; }
.dsh-cg-metrics { display: flex; flex-wrap: wrap; gap: 4px 14px; margin-top: 7px; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-cg-table-scroll { max-width: 100%; overflow-x: auto; overscroll-behavior-inline: contain; }
.dsh-cg-matrix { width: 100%; min-width: 660px; table-layout: fixed; border-collapse: collapse; }
.dsh-cg-matrix th, .dsh-cg-matrix td { height: 62px; padding: 8px 12px; border-bottom: 1px solid var(--dsw-alias-border-l1); text-align: left; vertical-align: middle; }
.dsh-cg-matrix thead th { height: 32px; background: var(--dsw-alias-bg-layer-1); color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxxs-strong-11); }
.dsh-cg-matrix th:first-child { width: 108px; }
.dsh-cg-matrix tbody th { color: var(--dsw-alias-label-secondary); font: var(--dsw-font-markdown-code-block-small); }
.dsh-cg-matrix button { white-space: nowrap; }
.dsh-cg-inline-samples { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 24px 36px; padding: 8px 0; }
.dsh-cg-table-scroll + .dsh-cg-inline-samples { margin-top: 16px; }
.dsh-cg-inline-samples > div { display: flex; flex-direction: column; align-items: flex-start; gap: 10px; min-width: 0; }
.dsh-cg-inline-samples > div > small { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-cg-fields { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px 20px; }
.dsh-cg-field { display: flex; flex-direction: column; gap: 7px; min-width: 0; color: var(--dsw-alias-label-primary); font: var(--dsw-font-xs-13); }
.dsh-cg-field > span:first-child { font: var(--dsw-font-xs-strong-13); }
.dsh-cg-field > span { min-width: 0; }
.dsh-cg-field > small { display: flex; align-items: flex-start; gap: 4px; min-height: 18px; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-cg-field > small > svg { flex: none; }
.dsh-cg-field > small.dsh-cg-error { color: var(--dsw-alias-state-error-primary); }
.dsh-cg-field > small.dsh-cg-success { color: var(--dsw-alias-state-success-primary); }
.dsh-cg-result { display: flex; align-items: baseline; flex-wrap: wrap; gap: 10px; min-height: 32px; margin-top: 16px; padding-top: 12px; color: var(--dsw-alias-label-tertiary); border-top: 1px solid var(--dsw-alias-border-l1); font: var(--dsw-font-xxs-12); }
.dsh-cg-result code, .dsh-cg-result strong { color: var(--dsw-alias-label-primary); overflow-wrap: anywhere; }
.dsh-cg-hover-content { display: grid; gap: 7px; min-width: 0; color: var(--dsw-alias-label-primary-foreground); }
body[data-ds-dark-theme] .dsh-cg-hover-content { color: var(--dsw-alias-label-primary); }
.dsh-cg-hover-content code { overflow-wrap: anywhere; color: inherit; }
.dsh-cg-status-matrix { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-top: 1px solid var(--dsw-alias-border-l1); border-bottom: 1px solid var(--dsw-alias-border-l1); margin-bottom: 24px; }
.dsh-cg-status-matrix > div { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; min-height: 46px; padding: 8px; }
.dsh-cg-status-matrix code { color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-markdown-code-block-small); }
.dsh-cg-two-col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
.dsh-cg-subsection { display: flex; flex-direction: column; align-items: stretch; gap: 12px; min-width: 0; }
.dsh-cg-subsection h3 { margin: 0; color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xs-strong-13); }
.dsh-cg-disclosure { padding: 4px 0; }
.dsh-cg-disclosure-body { display: flex; align-items: flex-start; gap: 8px; padding: 12px 0 10px 24px; overflow-wrap: anywhere; color: var(--dsw-alias-label-secondary); font: var(--dsw-font-xxs-12); }
.dsh-cg-disclosure-body > :first-child { flex: none; margin-top: 4px; }
.dsh-cg-muted { min-width: 0; color: var(--dsw-alias-label-tertiary); font: var(--dsw-font-xxs-12); }
.dsh-cg-connection { display: flex; align-items: center; min-height: 36px; }
.dsh-cg-content-grid { row-gap: 28px; }
.dsh-cg-code { margin-top: 18px; min-width: 0; }
.dsh-cg-empty { display: flex; flex-direction: column; align-items: center; gap: 14px; padding: 64px 20px; color: var(--dsw-alias-label-tertiary); }
.dsh-cg-spin { animation: dsh-cg-spin 1s linear infinite; }
@keyframes dsh-cg-spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .dsh-cg-spin { animation: none; } }
@container (max-width: 900px) {
  .dsh-cg { padding: 24px; }
  .dsh-cg-toolbar > .dsh-cg-options { order: 3; flex-basis: 100%; }
  .dsh-cg-search { flex: 1; }
  .dsh-cg-fields { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .dsh-cg-status-matrix { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@container (max-width: 600px) {
  .dsh-cg { padding: 20px 16px 40px; }
  .dsh-cg-heading { align-items: flex-start; flex-direction: column; gap: 12px; }
  .dsh-cg-heading h1 { font: var(--dsw-font-l-20, 600 20px/28px sans-serif); }
  .dsh-cg-section-head { gap: 8px; }
  .dsh-cg-section-head h2 { flex-direction: column; align-items: flex-start; font: var(--dsw-font-s-strong-14); }
  .dsh-cg-two-col, .dsh-cg-fields { grid-template-columns: minmax(0, 1fr); }
  .dsh-cg-inline-samples { gap: 22px 24px; }
  .dsh-cg-section { padding: 22px 0; }
  .dsh-cg-metrics { gap: 3px 10px; }
}

`;
		//#endregion
		//#region src/client/index.ts
		const inject = ["workbench"];
		/** Registers the reference DSH frontend design board with the workbench host. */
		function apply(ctx) {
			const workbench = ctx.workbench;
			ctx.effect(() => {
				const style = document.createElement("style");
				style.setAttribute("data-dsh-better-workbench-design-board-style", "");
				style.textContent = DESIGN_BOARD_STYLE + COMPONENT_GALLERY_STYLE;
				document.head.appendChild(style);
				return () => {
					style.remove();
				};
			}, "dsh-better-workbench-design-board: styles");
			ctx.effect(() => workbench.registerApp({
				protocolVersion: 1,
				appId: "dsh-design-board",
				source: {
					packageName: "dsh-better-workbench-design-board",
					version: "0.2.0",
					repository: "https://github.com/omdsh-dev/dsh-better-workbench"
				},
				config: {
					version: 1,
					defaults: () => ({ section: "primitives" }),
					validate(config) {
						if (typeof config.section !== "string") throw new Error("Design board section must be a string");
					}
				},
				title: "DSH UI 样式看板",
				description: "按基础系统与真实产品模块组织的 DSH Web 样式看板",
				allowMultiple: true,
				presentations: [{
					kind: "page",
					conversation: "exclusive"
				}],
				defaultPresentation: "page",
				defaultInstance: {
					instanceId: "dsh-design-board-default",
					title: "DSH UI 样式看板",
					config: { section: "primitives" }
				},
				renderMain: DesignBoard,
				renderSecondary: DesignBoardSidebar
			}), "dsh-better-workbench-design-board: app registration");
			ctx.effect(() => workbench.registerTemplate({
				templateId: "dsh-design-board:reference",
				title: "DSH UI 样式看板",
				description: "创建一份从真实组件陈列开始的 DSH 设计参考实例",
				kind: "instance",
				appId: "dsh-design-board",
				defaultTitle: "DSH UI 样式看板",
				defaultConfig: { section: "primitives" }
			}), "dsh-better-workbench-design-board: template registration");
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map