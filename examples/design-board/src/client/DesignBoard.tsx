import type { ComponentType } from 'react'
import { IconGallery } from './IconGallery.js'
import { ComponentGallery } from './ComponentGallery.js'
import {
  BrandWordmark,
  IconAgentPresetOutlineRegular,
  IconAlarmClockOutlineRegular,
  IconApiOutlineRegular,
  IconArchiveOutlineRegular,
  IconBranchOutlineRegular,
  IconBrowseOutlineRegular,
  IconCheckOutlineRegular,
  IconChecklistOutlineRegular,
  IconChevronDownOutlineRegular,
  IconChevronLeftOutlineRegular,
  IconChevronRightOutlineRegular,
  IconChevronUpOutlineRegular,
  IconClockOutlineRegular,
  IconCloseFillRegular,
  IconCloseOutlineRegular,
  IconCodeOutlineRegular,
  IconContextInjectionOutlineRegular,
  IconCopyOutlineRegular,
  IconCordisPluginOutlineRegular,
  IconDarkOutlineRegular,
  IconDataOutlineRegular,
  IconDatabaseOutlineRegular,
  IconDislikeFillRegular,
  IconDislikeOutlineRegular,
  IconDownloadOutlineRegular,
  IconEditOutlineRegular,
  IconEllipsisOutlineRegular,
  IconEnhanceOutlineRegular,
  IconFolderCloseRegular,
  IconFolderOpenRegular,
  IconFolderOpenOutlineRegular,
  IconFollowsystemOutlineRegular,
  IconFullscreenOutlineRegular,
  IconGlobeOutlineRegular,
  IconGoalOutlineRegular,
  IconInspectOutlineRegular,
  IconLightOutlineRegular,
  IconLikeFillRegular,
  IconLikeOutlineRegular,
  IconLinkOutlineRegular,
  IconListPenOutlineRegular,
  IconLoadingOutlineRegular,
  IconNewChatOutlineRegular,
  IconPanelLeftOutlineRegular,
  IconPaperclipOutlineRegular,
  IconPauseOutlineRegular,
  IconPersonalizationOutlineRegular,
  IconPlayOutlineRegular,
  IconPlusOutlineRegular,
  IconProjectAddOutlineRegular,
  IconQuestionOutlineRegular,
  IconQueueOutlineRegular,
  IconRefreshOutlineRegular,
  IconRightUpOutlineRegular,
  IconSearchOutlineRegular,
  IconSendOutlineRegular,
  IconSettingsOutlineRegular,
  IconShareOutlineRegular,
  IconSkillOutlineRegular,
  IconSparkleRegular,
  IconStopFillRegular,
  IconThinkOutlineRegular,
  IconTrashOutlineRegular,
  IconTreeCornerRegular,
  IconTriangleRightFillRegular,
  IconUserOutlineRegular,
  IconWarningOutlineRegular,
  Input,
} from '@deepseek-ai/dsh-client-ui-primitives'
import type { WorkbenchRenderProps } from 'dsh-better-workbench/client'

type BoardIcon = ComponentType<{ size?: number; className?: string }>
type Section = { id: string; label: string; icon: BoardIcon }
type Token = { token: string; label: string; usage: string }

type SectionGroup = { label: string; sections: readonly Section[] }

const SECTION_GROUPS: readonly SectionGroup[] = [
  {
    label: '总览',
    sections: [{ id: 'overview', label: '系统总览', icon: IconPanelLeftOutlineRegular }],
  },
  {
    label: '基础资源',
    sections: [
      { id: 'foundations', label: '颜色与字体', icon: IconPersonalizationOutlineRegular },
      { id: 'icons', label: '图标', icon: IconListPenOutlineRegular },
      { id: 'primitives', label: '基础组件', icon: IconPlusOutlineRegular },
    ],
  },
  {
    label: '规范',
    sections: [
      { id: 'states', label: '状态与响应式', icon: IconLoadingOutlineRegular },
      { id: 'accessibility', label: '无障碍', icon: IconCheckOutlineRegular },
      { id: 'governance', label: '实现记录', icon: IconInspectOutlineRegular },
    ],
  },
  {
    label: '产品页面',
    sections: [
      { id: 'shell', label: '应用框架', icon: IconPanelLeftOutlineRegular },
      { id: 'sidebar', label: '侧边栏', icon: IconFolderOpenRegular },
      { id: 'settings', label: '设置弹窗', icon: IconSettingsOutlineRegular },
      { id: 'session', label: '会话标题栏', icon: IconAgentPresetOutlineRegular },
      { id: 'chat', label: '对话流', icon: IconNewChatOutlineRegular },
      { id: 'composer', label: '输入区', icon: IconPlusOutlineRegular },
      { id: 'trajectory', label: '轨迹', icon: IconDataOutlineRegular },
      { id: 'overlays', label: '浮层与全局反馈', icon: IconWarningOutlineRegular },
    ],
  },
]

const SECTIONS = SECTION_GROUPS.flatMap(group => group.sections)

const TOKEN_GROUPS: ReadonlyArray<{ title: string; source: string; tokens: readonly Token[] }> = [
  {
    title: '表面与边界',
    source: 'theme semantic aliases',
    tokens: [
      { token: '--dsw-alias-bg-base', label: '基础表面', usage: '应用和对话主工作面' },
      { token: '--dsw-alias-bg-layer-1', label: '第一层表面', usage: '输入与基础浮起面' },
      { token: '--dsw-alias-bg-layer-2', label: '第二层表面', usage: '设置与模块面板' },
      { token: '--dsw-alias-bg-layer-3', label: '第三层表面', usage: '菜单和更高层浮起面' },
      { token: '--dsw-alias-bg-overlay', label: '浮层表面', usage: '遮罩上的浮层' },
      { token: '--dsw-alias-bg-mask-1', label: '第一层遮罩', usage: '普通阻断遮罩' },
      { token: '--dsw-alias-bg-mask-2', label: '第二层遮罩', usage: '轻量遮罩和背景压暗' },
      { token: '--dsw-alias-bg-mask-3', label: '第三层遮罩', usage: '更强的阻断遮罩' },
      { token: '--dsw-alias-bg-mask-photo', label: '图片遮罩', usage: '图片内容上的强遮罩' },
      { token: '--dsw-alias-bg-mask-drop', label: '拖拽遮罩', usage: '拖拽进入时的覆盖层' },
      { token: '--dsw-alias-bg-module-platform', label: '平台模块背景', usage: '平台模块背景' },
      { token: '--dsw-alias-bg-multi-select', label: '多选背景', usage: '多选区域背景' },
      { token: '--dsw-alias-bg-skeleton', label: '骨架屏背景', usage: '加载占位区域' },
      { token: '--dsw-alias-border-inverted2', label: '第二级反色边界', usage: '反色表面的弱边界' },
      { token: '--dsw-alias-border-inverted', label: '反色边界', usage: '反色表面的边界' },
      { token: '--dsw-alias-border-l1', label: '第一层边界', usage: '弱分组边界' },
      { token: '--dsw-alias-border-l2-darkmode-thin', label: '暗色细第二层边界', usage: '暗色主题的细控件边界' },
      { token: '--dsw-alias-border-l2', label: '第二层边界', usage: '控件和面板边界' },
      { token: '--dsw-alias-border-l3', label: '第三层边界', usage: '焦点与强调边界' },
      { token: '--dsw-alias-border-l4', label: '第四层边界', usage: '更强的分隔和拖拽边界' },
      { token: '--dsw-alias-scrollbar-bg-l1', label: '第一层滚动条', usage: '普通内容滚动条滑块' },
      { token: '--dsw-alias-scrollbar-bg-l2', label: '第二层滚动条', usage: '菜单和浮层滚动条滑块' },
      { token: '--dsw-alias-scrollbar-hover-l1', label: '第一层滚动条悬停', usage: '普通内容滚动条悬停' },
      { token: '--dsw-alias-scrollbar-hover-l2', label: '第二层滚动条悬停', usage: '菜单和浮层滚动条悬停' },
    ],
  },
  {
    title: '文字与交互',
    source: 'theme semantic aliases',
    tokens: [
      { token: '--dsw-alias-label-primary', label: '主要文字', usage: '标题与主要正文' },
      { token: '--dsw-alias-label-primary-bluish', label: '冷色主要文字', usage: '需要冷色前景的主要文字' },
      { token: '--dsw-alias-label-primary-dimmed', label: '弱化主要文字', usage: '弱化的主要文字' },
      { token: '--dsw-alias-label-secondary', label: '次要文字', usage: '次级说明与控件' },
      { token: '--dsw-alias-label-tertiary', label: '第三级文字', usage: '元数据与摘要' },
      { token: '--dsw-alias-label-caption', label: '说明文字', usage: '弱提示和占位' },
      { token: '--dsw-alias-label-dimmed', label: '弱化辅助文字', usage: '最低优先级的辅助信息' },
      { token: '--dsw-alias-label-primary-foreground', label: '主要填充前景', usage: '主要填充色上的前景文字' },
      { token: '--dsw-alias-label-primary-inverted', label: '反色主要文字', usage: '反色表面的主要文字' },
      { token: '--dsw-alias-brand-primary-invert', label: '反色品牌主色', usage: '品牌反色配对前景' },
      { token: '--dsw-alias-brand-primary-new-colorprimary-new-color', label: '新品牌主色', usage: '源码中的品牌色兼容命名' },
      { token: '--dsw-alias-brand-primary', label: '品牌主色', usage: '品牌主色；不是链接蓝' },
      { token: '--dsw-alias-brand-text', label: '品牌文字', usage: '品牌文字；不是链接蓝' },
      { token: '--dsw-alias-interactive-bg-hover', label: '悬停背景', usage: '列表和图标悬停' },
      { token: '--dsw-alias-interactive-bg-hover-accent', label: '强调悬停背景', usage: '带业务强调的悬停' },
      { token: '--dsw-alias-interactive-bg-hover-solid', label: '不透明悬停背景', usage: '需要不透明悬停面的控件' },
      { token: '--dsw-alias-interactive-bg-active', label: '激活背景', usage: '按下或当前激活状态' },
      { token: '--dsw-alias-interactive-bg-hover-danger', label: '危险悬停背景', usage: '破坏性操作悬停' },
      { token: '--dsw-alias-button-contrast-fill', label: '高对比度填充', usage: '高对比度按钮填充' },
      { token: '--dsw-alias-button-elevated-fill', label: '抬升按钮填充', usage: '有边界的次级按钮表面' },
      { token: '--dsw-alias-button-floating-fill', label: '浮动按钮填充', usage: '浮动操作按钮表面' },
      { token: '--dsw-alias-button-floating-hover', label: '浮动按钮悬停', usage: '浮动操作按钮悬停' },
      { token: '--dsw-alias-button-ghost-active-border', label: '幽灵按钮激活边界', usage: '幽灵按钮激活边界' },
      { token: '--dsw-alias-button-ghost-active-fill', label: '幽灵按钮激活填充', usage: '幽灵按钮激活填充' },
      { token: '--dsw-alias-button-ghost-hover', label: '幽灵按钮悬停', usage: '幽灵按钮悬停' },
      { token: '--dsw-alias-button-info-fill', label: '信息按钮填充', usage: '发送、确认等主要动作' },
      { token: '--dsw-alias-button-info-hover', label: '信息按钮悬停', usage: '主要动作悬停' },
      { token: '--dsw-alias-button-primary-dimmed', label: 'Primary dimmed', usage: '弱化的主要按钮' },
      { token: '--dsw-alias-button-primary-fill', label: 'Primary', usage: '主要按钮填充' },
      { token: '--dsw-alias-button-primary-hover', label: 'Primary hover', usage: '主要按钮悬停' },
      { token: '--dsw-alias-button-tool-bar-fill-invisible', label: 'Toolbar invisible', usage: '工具栏透明填充' },
      { token: '--dsw-alias-button-tool-bar-fill', label: 'Toolbar', usage: '工具栏按钮填充' },
      { token: '--dsw-alias-button-tool-bar-hover', label: 'Toolbar hover', usage: '工具栏按钮悬停' },
    ],
  },
  {
    title: '状态与内容',
    source: 'theme semantic aliases',
    tokens: [
      { token: '--dsw-alias-state-business-primary', label: 'Business', usage: '品牌动作、选中和进行中' },
      { token: '--dsw-alias-state-business-tertiary', label: 'Business tertiary', usage: '品牌状态的浅色背景' },
      { token: '--dsw-alias-state-warn-primary', label: 'Warning', usage: '等待用户处理或注意' },
      { token: '--dsw-alias-state-warn-secondary', label: 'Warning secondary', usage: '警告辅助背景或边界' },
      { token: '--dsw-alias-state-warn-tertiary', label: 'Warning tertiary', usage: '弱警告背景' },
      { token: '--dsw-alias-state-warn-label', label: 'Warning label', usage: '警告文字' },
      { token: '--dsw-alias-state-error-primary', label: 'Error', usage: '错误、失败和删除动作' },
      { token: '--dsw-alias-state-error-secondary', label: 'Error secondary', usage: '错误辅助背景或边界' },
      { token: '--dsw-alias-state-success-primary', label: 'Success', usage: '完成和成功反馈' },
      { token: '--dsw-alias-state-success-secondary', label: 'Success secondary', usage: '成功辅助背景或边界' },
      { token: '--dsw-alias-state-success-tertiary', label: 'Success tertiary', usage: '弱成功背景' },
      { token: '--dsw-alias-markdown-code-block', label: 'Code block', usage: '代码块背景' },
      { token: '--dsw-alias-markdown-code-block-banner', label: 'Code block banner', usage: '代码块标题栏背景' },
      { token: '--dsw-alias-markdown-inline-code', label: 'Inline code', usage: '行内代码背景' },
      { token: '--dsw-alias-markdown-code-segment-selected', label: 'Code selected', usage: '代码选中片段' },
      { token: '--dsw-alias-markdown-code-segment-unselected', label: 'Code unselected', usage: '代码未选中片段' },
      { token: '--dsw-alias-markdown-citation', label: 'Citation', usage: '引用标记背景' },
      { token: '--dsw-alias-markdown-placeholder', label: 'Placeholder', usage: 'Markdown 占位内容' },
      { token: '--dsw-alias-markdown-tag', label: 'Tag', usage: 'Markdown 标签内容' },
      { token: '--dsw-alias-toast-bg', label: 'Toast', usage: '全局 Toast 表面' },
      { token: '--dsw-alias-tooltip-bg', label: 'Tooltip', usage: 'Tooltip 和提示内容' },
    ],
  },
  {
    title: '产品专用表面',
    source: 'theme specific aliases',
    tokens: [
      { token: '--dsw-specific-bubble-highlight', label: 'Bubble highlight', usage: '用户消息气泡的高亮层' },
      { token: '--dsw-specific-bubble', label: 'Bubble', usage: '用户消息气泡' },
      { token: '--dsw-specific-input-major', label: 'Input major', usage: '对话 Composer 表面' },
      { token: '--dsw-specific-login-input', label: 'Login input', usage: '登录表单输入表面' },
      { token: '--dsw-specific-menu', label: 'Menu', usage: '菜单组件表面' },
      { token: '--dsw-specific-selector', label: 'Selector', usage: 'Composer 添加按钮' },
      { token: '--dsw-specific-sidebar-fill', label: 'Sidebar fill', usage: '侧栏产品模块' },
      { token: '--dsw-specific-sidebar-nav-item-active-accent', label: 'Sidebar active accent', usage: '侧栏导航选中的强调层' },
      { token: '--dsw-specific-sidebar-nav-item-active', label: 'Sidebar active', usage: '侧栏导航选中' },
      { token: '--dsw-specific-sidebar-nav-item-hover', label: 'Sidebar hover', usage: '侧栏导航悬停' },
      { token: '--dsw-specific-tip', label: 'Tip', usage: '任务、目标和队列提示条' },
    ],
  },
]

const FOUNDATION_LAYERS = [
  ['基础基元', ':root', '字体栈、代码字体、基础缓动曲线和过渡时长', '提供全局基线，不直接提供页面颜色。'],
  ['原始色阶', 'body / body[data-ds-dark-theme]', '73 个琥珀色、蓝色、深度求索色、绿色、中性色、中性蓝灰色和红色色阶', '只作为语义别名的映射源；原始色阶名称不保证跨主题值绝对不变。'],
  ['语义别名', 'body / body[data-ds-dark-theme]', '背景、边界、文字、按钮、状态和 Markdown 等语义角色', '组件优先消费这一层；主题切换只替换语义值。'],
  ['产品专用表面', 'body / body[data-ds-dark-theme]', '侧栏、输入区、消息气泡、菜单、选择器和提示条等产品表面', '只在命名的产品模块使用，不推广为通用颜色。'],
  ['专项资源', '全局样式表', '语法高亮、滚动条、阴影、渐变文字', '只服务代码高亮、滚动条、层级或特定文字状态。'],
] as const

const STATIC_FAMILY_LABELS: Record<string, string> = {
  amber: '琥珀色',
  blue: '蓝色',
  deepseek: '深度求索色',
  green: '绿色',
  neutral: '中性色',
  'neutral-bluish': '中性蓝灰色',
  red: '红色',
}

const STATIC_FAMILIES = [
  ['amber', ['100', '400', '500', '600', '900']],
  ['blue', ['50', '50p', '75', '100', '300', '400', '450', '500', '600', '800', '900', '950']],
  ['deepseek', ['50', '100', '200', '300', '400', '450', '500', '600', '700-delete', '800', '900']],
  ['green', ['100', '400', '500', '900']],
  ['neutral', ['00', '50', '100', '150', '200', '250', '300', '400', '500', '550', '600', '700', '800', '850', '900', '1000']],
  ['neutral-bluish', ['00', '50', '60', '75', '100', '150', '200', '300', '400', '500', '600', '700', '750', '800', '850', '875', '900', '950', '1000']],
  ['red', ['50', '100', '400', '500', '600', '900']],
] as const

const FOUNDATION_THEME_RULES = [
  ['表面层级', '浅色：基础 / 第一层 / 第二层 / 第三层当前均为白；深色：中性蓝灰 950 / 875 / 850 / 800', '层级由语义名称和组件关系决定，不能依赖浅色主题的色差。'],
  ['文字阶梯', '主要文字 → 次要文字 → 第三级文字 → 说明文字', '标题和正文使用主要文字；说明和元数据逐级降低，不用透明度临时调灰。'],
  ['品牌与蓝色', '品牌主色与品牌文字接近黑或白；业务主色与信息按钮填充才是蓝色动作', '链接、发送和进行中状态使用对应业务蓝色，不把品牌色当作链接色。'],
  ['边界对比', '浅色使用黑色透明度；深色使用白色透明度', '第一至第四层边界代表强度；组件选择层级，不直接复制透明度。'],
  ['状态颜色', '业务、成功、警告、错误各有主要、辅助、弱背景或文字角色', '状态颜色必须与文案或图标一起表达，不能只靠颜色区分。'],
  ['遮罩与前景', '遮罩使用背景遮罩；主要填充前景和反色主要文字只与对应表面配对', '不要把前景 token 当普通正文颜色，也不要用黑色临时覆盖弹窗。'],
  ['代码专项', 'Markdown 专用资源服务文档内容；语法高亮变量只服务代码着色', '代码背景、行内代码、引用和语法色与普通 UI 表面分开。'],
  ['滚动条', '普通内容绑定第一层；菜单和弹窗等抬升表面重新绑定第二层', '滚动条变量是渲染桥接，不是新增色阶。'],
] as const

const TYPE_ROWS = [
  { token: '--dsw-font-markdown-h1', label: 'Markdown H1', metric: '24 / 34 · 700', specimen: '产品模块标题', status: '已消费' },
  { token: '--dsw-font-markdown-h2', label: 'Markdown H2', metric: '22 / 32 · 700', specimen: '模块内大标题', status: '已消费' },
  { token: '--dsw-font-markdown-h3', label: 'Markdown H3', metric: '20 / 30 · 700', specimen: '内容层级标题', status: '已消费' },
  { token: '--dsw-font-markdown-h4', label: 'Markdown H4', metric: '16 / 28 · 600', specimen: '段落内标题', status: '已消费' },
  { token: '--dsw-font-markdown-base', label: 'Markdown 正文', metric: '16 / 28 · 400', specimen: '连续助手回答与文档内容', status: '已消费' },
  { token: '--dsw-font-markdown-base-strong', label: 'Markdown 强调', metric: '16 / 28 · 600', specimen: '重要正文内容', status: '已消费' },
  { token: '--dsw-font-markdown-base-italic', label: 'Markdown 斜体', metric: '16 / 28 · 400 italic', specimen: '补充说明内容', status: '仅声明' },
  { token: '--dsw-font-markdown-base-strong-italic', label: 'Markdown 粗斜体', metric: '16 / 28 · 600 italic', specimen: '强调的补充说明', status: '仅声明' },
  { token: '--dsw-font-markdown-table', label: 'Markdown 表格', metric: '15 / 25 · 400', specimen: '表格正文内容', status: '已消费' },
  { token: '--dsw-font-markdown-table-head', label: 'Markdown 表头', metric: '15 / 25 · 500', specimen: '表格列标题', status: '已消费' },
  { token: '--dsw-font-markdown-small', label: 'Markdown 小号', metric: '14 / 24 · 400', specimen: '折叠内容和辅助正文', status: '仅声明' },
  { token: '--dsw-font-markdown-small-strong', label: 'Markdown 小号强调', metric: '14 / 24 · 600', specimen: '小号重点内容', status: '仅声明' },
  { token: '--dsw-font-markdown-small-italic', label: 'Markdown 小号斜体', metric: '14 / 24 · 400 italic', specimen: '小号补充说明', status: '仅声明' },
  { token: '--dsw-font-markdown-small-strong-italic', label: 'Markdown 小号粗斜体', metric: '14 / 24 · 600 italic', specimen: '小号强调说明', status: '仅声明' },
  { token: '--dsw-font-markdown-code', label: '行内代码', metric: '14 / 22 · code', specimen: 'src/client/index.ts', status: '已消费' },
  { token: '--dsw-font-markdown-code-block', label: '代码块', metric: '13 / 22 · code', specimen: 'pnpm run build', status: '已消费' },
  { token: '--dsw-font-markdown-code-block-small', label: '紧凑代码', metric: '12 / 18 · code', specimen: 'role="treeitem"', status: '已消费' },
  { token: '--dsw-font-xl-24', label: 'UI XL', metric: '24 / 32 · 600', specimen: '大型浮层标题', status: '仅声明' },
  { token: '--dsw-font-l-20', label: 'UI L', metric: '20 / 28 · 500', specimen: '浮层说明标题', status: '已消费' },
  { token: '--dsw-font-m-18', label: 'UI M', metric: '16 / 28 · 500', specimen: '名称含 18，实际字号 16px', status: '仅声明' },
  { token: '--dsw-font-base-16', label: 'UI Base', metric: '16 / 24 · 400', specimen: '发消息或做任务…', status: '仅声明' },
  { token: '--dsw-font-base-strong-16', label: 'UI Base 强调', metric: '16 / 24 · 500', specimen: '正在执行任务', status: '仅声明' },
  { token: '--dsw-font-s-14', label: '列表 / 工具标题', metric: '14 / 22 · 400', specimen: '分析工作区插件层级与功能', status: '已消费' },
  { token: '--dsw-font-s-strong-14', label: '列表强调', metric: '14 / 22 · 500', specimen: '当前工作区', status: '已消费' },
  { token: '--dsw-font-xs-13', label: '控件 / 辅助信息', metric: '13 / 20 · 400', specimen: 'DeepSeek V3.2 · 工具调用', status: '已消费' },
  { token: '--dsw-font-xs-strong-13', label: '控件强调', metric: '13 / 20 · 500', specimen: '对话 / 轨迹', status: '已消费' },
  { token: '--dsw-font-xxs-12', label: '紧凑元信息', metric: '12 / 18 · 400', specimen: '刚刚 · 2,304 tokens', status: '已消费' },
  { token: '--dsw-font-xxs-strong-12', label: '紧凑强调', metric: '12 / 18 · 500', specimen: '进行中', status: '仅声明' },
  { token: '--dsw-font-xxxs-11', label: '极小元信息', metric: '11 / 14 · 400', specimen: '状态说明', status: '已消费' },
  { token: '--dsw-font-xxxs-strong-11', label: '极小强调', metric: '11 / 14 · 500', specimen: '分组标签', status: '仅声明' },
] as const

const TYPE_LABEL_ZH: Readonly<Record<string, string>> = {
  'Markdown H1': '内容一级标题', 'Markdown H2': '内容二级标题', 'Markdown H3': '内容三级标题', 'Markdown H4': '内容四级标题', 'Markdown 斜体': '文档斜体', 'Markdown 粗斜体': '文档粗斜体', 'Markdown 表格': '文档表格', 'Markdown 表头': '文档表头', 'Markdown 小号': '文档小号', 'Markdown 小号强调': '文档小号强调', 'Markdown 小号斜体': '文档小号斜体', 'Markdown 小号粗斜体': '文档小号粗斜体', 'Markdown 正文': '文档正文', 'Markdown 强调': '文档正文强调', 'UI XL': '界面特大字号', 'UI L': '界面大字号', 'UI M': '界面中字号', 'UI Base': '界面正文', 'UI Base 强调': '界面正文强调',
}

const FOUNDATION_RULES = [
  ['语义颜色', '优先选择语义变量；不要在组件 CSS 里写新的黑、灰、蓝或透明度。'],
  ['字体角色', '先选内容类型或控件层级，再使用对应字体变量；字号和行高成对使用。'],
  ['组件变体', '相同语义角色复用相同变体；页面只负责排列，不修改变体自身的尺寸。'],
  ['产品专用', '产品专用变量只在它命名的产品表面使用，不把输入区或侧栏表面扩散到其他区域。'],
  ['主题切换', '组件只引用语义变量或命名的产品专用变量；主题层替换值，组件不写浅色和深色两套颜色。原始色阶不是绝对不变值。'],
  ['例外记录', '真实业务需要特殊颜色、动画或密度时，先命名变体并在实现记录中说明用途。'],
] as const

const FOUNDATION_FONT_STACKS = [
  ['UI 字体', "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif", 'body、button、input、select、textarea 继承这一栈。'],
  ['代码字体', "'SF Mono', 'JetBrains Mono', 'Fira Code', Consolas, 'Liberation Mono', Menlo, Courier, 'PingFang SC', 'Microsoft YaHei'", '代码块、行内代码和工具输出使用这一栈，不追加裸 monospace。'],
] as const

const FOUNDATION_METRICS = [
  ['应用框架', '侧栏 264–420px，默认 280px；收起栏 56px；视口小于 1024px 自动收起', '框架持有列宽和收起状态；主内容始终使用 minmax(0, 1fr)。'],
  ['右侧详情区', '关闭 0；重新打开 360px；范围 300–520px；拖拽命中区 8px', '视觉分隔线可以更细，但可点击拖拽区域和 col-resize 光标不能省略。'],
  ['侧栏与列表', '分区标题 36px；工作区行 34px；会话行 32px；圆角 8px；横向内边距 8px', '对象层级使用两档固定密度；标题栏图标按钮 28×28，收起栏按钮 36×36。'],
  ['会话标题栏', '上 12px / 左 20px / 右 28px；标题行至少 32px；页签上间距 4px、间隔 36px、激活条 2px', '标题路径、能力动作和页签按真实出现条件排列，不为不存在的能力预留入口。'],
  ['对话阅读列', '最大宽度 748px；节点间距 16px；两侧安全留白 16px', '用户消息、助手正文、思考、工具、错误、运行状态和统计信息对齐到同一阅读轴。'],
  ['用户消息气泡', '最大 525px 或 82%；圆角 22px；内边距 10px 16px', '只用于用户与待发送消息；助手正文和工具节点不套用消息气泡。'],
  ['输入区', '卡片最大 780px；圆角 22px；顶部 10px；内部间距 12px；文本最多 336px / 14 行；发送或停止 34×34', 'Todo、Goal、Queue 位于卡片上方；问题、审批和计划评审接管整个输入席位。'],
  ['设置弹窗', '面板 800px；高度 min(800px, 100vh−48px)；圆角 24px；导航 188px；标题 54px；选项内边距 24px', '单行输入 32px / 圆角 8px；切换设置页时保持面板尺寸和内容滚动区域稳定。'],
  ['轨迹视图', '工具栏 32px；时间概览 50px；事件列 122px；记录行至少 30px；检查器 320–440px；拖拽命中区 8px', '大历史使用虚拟行；窄空间事件列收至 50px，检查器转为覆盖层。'],
  ['浮层', '菜单 218–360px / 圆角 12px / 内边距 4px；弹窗 380px / 圆角 24px；悬浮卡 244px / 圆角 12px', 'Tooltip/HoverCard z100、Modal z1000、Portal Menu 与 Toast z1100；关闭和焦点策略按类型处理。'],
] as const

const FOUNDATION_MOTION = [
  ['一级阴影', '0 2px 4px rgba(0,0,0,.05)', '用于最轻的抬升关系；不代替边界。'],
  ['一级模糊阴影', '0 4px 12px rgba(0,0,0,.02)', '一级阴影的柔和版本，只在已命名表面使用。'],
  ['二级阴影', '0 4px 12px rgba(0,0,0,.02) + 0 2px 8px rgba(0,0,0,.04)', 'Composer 和浮动按钮等持续抬升表面使用。'],
  ['三级阴影', '0 0 1px rgba(0,0,0,.20) + 0 0 4px rgba(0,0,0,.02) + 0 12px 32px rgba(0,0,0,.08)', 'Menu、Modal、HoverCard 和 Toast 等最高浮层使用。'],
  ['遮罩模糊', 'blur(2px)', '与语义遮罩背景一起用于阻断式浮层；不能只加模糊而省略遮罩。'],
  ['共享过渡基线', 'cubic-bezier(0.4, 0, 0.2, 1)；快速 0.1s / 默认 0.2s / 慢速 0.3s', '只提供基础过渡；产品组件仍可拥有经过验证的专用曲线和时长。'],
  ['运行文字', 'TurnStatus：1.8s linear infinite', '“深度求索中...”使用文字 shimmer；15 秒后追加经过时间，不作为通用加载器。'],
  ['思考行', 'ReasoningRow：300px 光带，2.6s ease-out infinite', '与运行文字是两个独立动效；动效关闭后仍保留图标、标题和状态文字。'],
  ['短暂提示', 'Toast：进入 160ms ease-out；停留 3000ms；淡出 1000ms ease', '减少动效时取消位移进入，但保留淡出和定时卸载。'],
  ['减少动效', 'prefers-reduced-motion: reduce', '没有源码级全局总开关；每个拥有动画的组件分别停止位移、静态化或保留必要的无位移淡出。'],
] as const

const ICON_RULES = [
  ['图标本体', '默认 16px；思考、插件等紧凑状态可以使用源码提供的 14px 版本。', '图标尺寸不等于按钮点击区域。'],
  ['按钮容器', '标题栏图标按钮 28×28；rail 图标按钮 36×36；同一变体保持圆形。', '容器负责 hover、active、focus-visible 和 disabled。'],
  ['颜色继承', '图标使用 currentColor，由控件的 label alias 或状态 alias 提供颜色。', '不要在图标 SVG 内固定产品颜色。'],
  ['命名复用', '使用 ui-primitives 导出的真实图标组件和 canonical name。', '不复制 SVG、不发明相似图标、不用文字字符替代图标。'],
  ['动作语义', '图标表达对象或动作；页面通过按钮、行或状态组件补齐上下文。', '同一图标在不同区域不自动变成不同视觉变体。'],
  ['可访问名称', '图标按钮必须有 aria-label；带可见文字的按钮由文字提供名称。', '禁用和状态信息不能只靠图标颜色传达。'],
] as const

const ICON_GROUPS: ReadonlyArray<{ title: string; icons: ReadonlyArray<{ label: string; name: string; icon: BoardIcon; size: number; usage: string }> }> = [
  {
    title: '导航、工作区与设置',
    icons: [
      { label: '新建会话', name: 'IconNewChatOutlineRegular', icon: IconNewChatOutlineRegular, size: 16, usage: '侧边栏和对话标题栏的新会话入口' },
      { label: '搜索', name: 'IconSearchOutlineRegular', icon: IconSearchOutlineRegular, size: 16, usage: '工作区筛选和搜索入口' },
      { label: '视图选项', name: 'IconPersonalizationOutlineRegular', icon: IconPersonalizationOutlineRegular, size: 16, usage: '工作区标题栏的视图选项' },
      { label: '添加工作区', name: 'IconProjectAddOutlineRegular', icon: IconProjectAddOutlineRegular, size: 16, usage: '工作区标题栏添加工作区' },
      { label: '更多操作', name: 'IconEllipsisOutlineRegular', icon: IconEllipsisOutlineRegular, size: 16, usage: '列表行操作菜单触发' },
      { label: '侧栏', name: 'IconPanelLeftOutlineRegular', icon: IconPanelLeftOutlineRegular, size: 16, usage: '应用框架收起和展开侧栏' },
      { label: '网络', name: 'IconGlobeOutlineRegular', icon: IconGlobeOutlineRegular, size: 14, usage: '导航、工作区、设置和浮层动作' },
      { label: '设置（紧凑）', name: 'IconSettingsOutlineRegular', icon: IconSettingsOutlineRegular, size: 14, usage: '导航、工作区、设置和浮层动作' },
      { label: '设置', name: 'IconSettingsOutlineRegular', icon: IconSettingsOutlineRegular, size: 16, usage: '导航、工作区、设置和浮层动作' },
      { label: '完成', name: 'IconCheckOutlineRegular', icon: IconCheckOutlineRegular, size: 16, usage: '导航、工作区、设置和浮层动作' },
      { label: '完成（紧凑）', name: 'IconCheckOutlineRegular', icon: IconCheckOutlineRegular, size: 14, usage: '导航、工作区、设置和浮层动作' },
      { label: '分支', name: 'IconBranchOutlineRegular', icon: IconBranchOutlineRegular, size: 16, usage: '导航、工作区、设置和浮层动作' },
      { label: '向下', name: 'IconChevronDownOutlineRegular', icon: IconChevronDownOutlineRegular, size: 14, usage: '导航、工作区、设置和浮层动作' },
      { label: '向左', name: 'IconChevronLeftOutlineRegular', icon: IconChevronLeftOutlineRegular, size: 14, usage: '导航、工作区、设置和浮层动作' },
      { label: '向右', name: 'IconChevronRightOutlineRegular', icon: IconChevronRightOutlineRegular, size: 14, usage: '导航、工作区、设置和浮层动作' },
      { label: '展开', name: 'IconTriangleRightFillRegular', icon: IconTriangleRightFillRegular, size: 14, usage: '导航、工作区、设置和浮层动作' },
      { label: '向上', name: 'IconChevronUpOutlineRegular', icon: IconChevronUpOutlineRegular, size: 14, usage: '导航、工作区、设置和浮层动作' },
      { label: '关闭', name: 'IconCloseOutlineRegular', icon: IconCloseOutlineRegular, size: 16, usage: '导航、工作区、设置和浮层动作' },
      { label: '关闭（填充）', name: 'IconCloseFillRegular', icon: IconCloseFillRegular, size: 14, usage: '导航、工作区、设置和浮层动作' },
      { label: '刷新', name: 'IconRefreshOutlineRegular', icon: IconRefreshOutlineRegular, size: 16, usage: '导航、工作区、设置和浮层动作' },
      { label: '刷新（紧凑）', name: 'IconRefreshOutlineRegular', icon: IconRefreshOutlineRegular, size: 14, usage: '导航、工作区、设置和浮层动作' },
      { label: '分享', name: 'IconShareOutlineRegular', icon: IconShareOutlineRegular, size: 16, usage: '导航、工作区、设置和浮层动作' },
      { label: '编辑', name: 'IconEditOutlineRegular', icon: IconEditOutlineRegular, size: 16, usage: '导航、工作区、设置和浮层动作' },
      { label: '浏览', name: 'IconBrowseOutlineRegular', icon: IconBrowseOutlineRegular, size: 16, usage: '导航、工作区、设置和浮层动作' },
      { label: '链接（紧凑）', name: 'IconLinkOutlineRegular', icon: IconLinkOutlineRegular, size: 14, usage: '导航、工作区、设置和浮层动作' },
      { label: '链接', name: 'IconLinkOutlineRegular', icon: IconLinkOutlineRegular, size: 16, usage: '导航、工作区、设置和浮层动作' },
      { label: '外部链接（紧凑）', name: 'IconRightUpOutlineRegular', icon: IconRightUpOutlineRegular, size: 14, usage: '导航、工作区、设置和浮层动作' },
      { label: '外部链接', name: 'IconRightUpOutlineRegular', icon: IconRightUpOutlineRegular, size: 16, usage: '导航、工作区、设置和浮层动作' },
      { label: '增强', name: 'IconEnhanceOutlineRegular', icon: IconEnhanceOutlineRegular, size: 16, usage: '导航、工作区、设置和浮层动作' },
      { label: '轮廓文件夹', name: 'IconFolderOpenOutlineRegular', icon: IconFolderOpenOutlineRegular, size: 16, usage: '导航、工作区、设置和浮层动作' },
      { label: '打开文件夹', name: 'IconFolderOpenRegular', icon: IconFolderOpenRegular, size: 16, usage: '导航、工作区、设置和浮层动作' },
      { label: '关闭文件夹', name: 'IconFolderCloseRegular', icon: IconFolderCloseRegular, size: 16, usage: '导航、工作区、设置和浮层动作' },
      { label: '树节点连接', name: 'IconTreeCornerRegular', icon: IconTreeCornerRegular, size: 10, usage: '导航、工作区、设置和浮层动作' },
    ],
  },
  {
    title: '对话、反馈与运行状态',
    icons: [
      { label: '添加内容', name: 'IconPlusOutlineRegular', icon: IconPlusOutlineRegular, size: 16, usage: 'Composer 添加附件、任务或上下文' },
      { label: '发送', name: 'IconSendOutlineRegular', icon: IconSendOutlineRegular, size: 16, usage: 'Composer 发送消息' },
      { label: '发送（紧凑）', name: 'IconSendOutlineRegular', icon: IconSendOutlineRegular, size: 14, usage: '对话流、Composer 和反馈动作' },
      { label: '复制', name: 'IconCopyOutlineRegular', icon: IconCopyOutlineRegular, size: 16, usage: '助手消息复制操作' },
      { label: '赞同', name: 'IconLikeOutlineRegular', icon: IconLikeOutlineRegular, size: 16, usage: '助手消息正向反馈' },
      { label: '赞同（填充）', name: 'IconLikeFillRegular', icon: IconLikeFillRegular, size: 16, usage: '对话流、Composer 和反馈动作' },
      { label: '不赞同', name: 'IconDislikeOutlineRegular', icon: IconDislikeOutlineRegular, size: 16, usage: '助手消息负向反馈' },
      { label: '不赞同（填充）', name: 'IconDislikeFillRegular', icon: IconDislikeFillRegular, size: 16, usage: '对话流、Composer 和反馈动作' },
      { label: '思考', name: 'IconThinkOutlineRegular', icon: IconThinkOutlineRegular, size: 14, usage: '思考状态的紧凑 leading icon' },
      { label: '思考（16px）', name: 'IconThinkOutlineRegular', icon: IconThinkOutlineRegular, size: 16, usage: '对话流、Composer 和反馈动作' },
      { label: '用户', name: 'IconUserOutlineRegular', icon: IconUserOutlineRegular, size: 16, usage: '对话流、Composer 和反馈动作' },
      { label: '上下文注入', name: 'IconContextInjectionOutlineRegular', icon: IconContextInjectionOutlineRegular, size: 16, usage: '对话流、Composer 和反馈动作' },
      { label: '附件', name: 'IconPaperclipOutlineRegular', icon: IconPaperclipOutlineRegular, size: 16, usage: '对话流、Composer 和反馈动作' },
      { label: '停止', name: 'IconStopFillRegular', icon: IconStopFillRegular, size: 16, usage: '对话流、Composer 和反馈动作' },
      { label: '加载', name: 'IconLoadingOutlineRegular', icon: IconLoadingOutlineRegular, size: 16, usage: '加载或等待状态' },
      { label: '警告', name: 'IconWarningOutlineRegular', icon: IconWarningOutlineRegular, size: 16, usage: '对话流、Composer 和反馈动作' },
      { label: '下载', name: 'IconDownloadOutlineRegular', icon: IconDownloadOutlineRegular, size: 16, usage: '对话流、Composer 和反馈动作' },
      { label: '播放', name: 'IconPlayOutlineRegular', icon: IconPlayOutlineRegular, size: 16, usage: '对话流、Composer 和反馈动作' },
      { label: '暂停', name: 'IconPauseOutlineRegular', icon: IconPauseOutlineRegular, size: 16, usage: '对话流、Composer 和反馈动作' },
      { label: '全屏', name: 'IconFullscreenOutlineRegular', icon: IconFullscreenOutlineRegular, size: 16, usage: '对话流、Composer 和反馈动作' },
    ],
  },
  {
    title: '能力、主题、数据与任务',
    icons: [
      { label: '工具代码', name: 'IconCodeOutlineRegular', icon: IconCodeOutlineRegular, size: 16, usage: '工具行和代码结果的 leading icon' },
      { label: 'Agent 预设', name: 'IconAgentPresetOutlineRegular', icon: IconAgentPresetOutlineRegular, size: 16, usage: '设置、会话标题栏和预设选择' },
      { label: '插件', name: 'IconCordisPluginOutlineRegular', icon: IconCordisPluginOutlineRegular, size: 14, usage: '设置中的插件入口或插件状态' },
      { label: 'API', name: 'IconApiOutlineRegular', icon: IconApiOutlineRegular, size: 14, usage: '设置、能力、任务和轨迹' },
      { label: '目标', name: 'IconGoalOutlineRegular', icon: IconGoalOutlineRegular, size: 16, usage: 'Goal 面板入口' },
      { label: '技能', name: 'IconSkillOutlineRegular', icon: IconSkillOutlineRegular, size: 16, usage: 'Skill 面板入口' },
      { label: '浅色', name: 'IconLightOutlineRegular', icon: IconLightOutlineRegular, size: 16, usage: '主题设置的浅色选项' },
      { label: '深色', name: 'IconDarkOutlineRegular', icon: IconDarkOutlineRegular, size: 16, usage: '主题设置的深色选项' },
      { label: '跟随系统', name: 'IconFollowsystemOutlineRegular', icon: IconFollowsystemOutlineRegular, size: 16, usage: '设置、能力、任务和轨迹' },
      { label: '删除', name: 'IconTrashOutlineRegular', icon: IconTrashOutlineRegular, size: 16, usage: '删除工作区等破坏性动作' },
      { label: '数据', name: 'IconDataOutlineRegular', icon: IconDataOutlineRegular, size: 16, usage: '设置、能力、任务和轨迹' },
      { label: '数据库', name: 'IconDatabaseOutlineRegular', icon: IconDatabaseOutlineRegular, size: 16, usage: '设置、能力、任务和轨迹' },
      { label: '时间', name: 'IconClockOutlineRegular', icon: IconClockOutlineRegular, size: 16, usage: '设置、能力、任务和轨迹' },
      { label: '队列', name: 'IconQueueOutlineRegular', icon: IconQueueOutlineRegular, size: 14, usage: '设置、能力、任务和轨迹' },
      { label: '清单', name: 'IconChecklistOutlineRegular', icon: IconChecklistOutlineRegular, size: 14, usage: '设置、能力、任务和轨迹' },
      { label: '列表', name: 'IconListPenOutlineRegular', icon: IconListPenOutlineRegular, size: 16, usage: '设置、能力、任务和轨迹' },
      { label: '智能增强', name: 'IconSparkleRegular', icon: IconSparkleRegular, size: 16, usage: '设置、能力、任务和轨迹' },
      { label: '检查', name: 'IconInspectOutlineRegular', icon: IconInspectOutlineRegular, size: 12, usage: '设置、能力、任务和轨迹' },
      { label: '帮助', name: 'IconQuestionOutlineRegular', icon: IconQuestionOutlineRegular, size: 14, usage: '设置、能力、任务和轨迹' },
      { label: '定时', name: 'IconAlarmClockOutlineRegular', icon: IconAlarmClockOutlineRegular, size: 16, usage: '设置、能力、任务和轨迹' },
      { label: '归档', name: 'IconArchiveOutlineRegular', icon: IconArchiveOutlineRegular, size: 20, usage: '设置、能力、任务和轨迹' },
    ],
  },
]

const PRIMITIVE_RULES = [
  ['Button', '用于明确动作；md 36px / r18 / 14·22，sm 28px / r14 / 12·18。', 'primary、ghost、outline、toolbar 是命名变体；页面不能局部改写胶囊几何。'],
  ['Icon button', '用于单一图标动作；标题栏 28×28，rail 36×36。', '必须补 aria-label；按钮状态由容器表达。'],
  ['Input', '设置、搜索和单行表单使用 32px / r8 / 16px icon slot。', '它只有单行输入责任，不承载任务、附件、队列或发送。'],
  ['DisclosureRow', '用于工具、文件和结果摘要的展开/收起。', '摘要行和展开内容分开；状态点、菜单触发和内容区不能互相冒充。'],
  ['Overlay primitives', 'Menu、Tooltip、HoverCard、Modal、Toast 各自拥有触发、层级和收束方式。', '相似的浮层不合并为一个通用卡片。'],
  ['页面组合', 'Composer、工具行、设置字段和工作区行由产品页面组合原子资源。', '组合可以拥有自己的布局，但不重复定义原子的字体、状态和基础几何。'],
] as const

const A11Y_CHECKS = [
  ['键盘路径', 'Tab 顺序覆盖页面中所有可操作元素；Enter/Space 执行动作，Esc 收束当前浮层。', '失败：只能用鼠标打开、提交或关闭。'],
  ['可访问名称', '图标按钮有 aria-label；菜单、弹窗和表单控件有可读名称与关联说明。', '失败：读屏只能得到“button”或重复的无意义名称。'],
  ['状态语义', 'selected、expanded、disabled、readonly、busy 等状态同时反映到 ARIA 或原生属性。', '失败：视觉上选中或加载，但 DOM 没有对应状态。'],
  ['焦点可见', '键盘焦点使用清晰的 focus-visible 边界，不能用 outline: none 隐藏。', '失败：焦点进入后无法判断当前位置。'],
  ['颜色独立', '错误、成功、选中和进行中同时有文字、图标、位置或结构信号。', '失败：只靠红、绿、蓝或动画区分状态。'],
  ['动效收束', '每个带动画的组件单独处理 prefers-reduced-motion；关闭后仍保留信息和动作。', '失败：系统减少动效仍持续 shimmer、sweep 或位移。'],
  ['浮层焦点', 'Modal 打开时焦点进入对话框，关闭后回到触发源；Menu/Tooltip 按各自交互方式收束。', '失败：焦点留在遮罩后或关闭后丢失。'],
] as const

const TRAJECTORY_RULES = [
  ['视图根', 'height 100% · overflow hidden · bg-layer-1', '轨迹是会话中的独立视图，工具栏固定，下面的账本和详情检查器共享一个受限容器。'],
  ['工具栏', '32px · sticky top 0 · gap 8px · controls 20px', 'Duration、Turns、Calls 和搜索使用紧凑控制；按下状态通过 aria-pressed 保持可读。'],
  ['时间概览', '50px · labels 44px · track crosshair', 'Input、Model、Tools 三条 lane 使用相同时间域；拖选、滚轮缩放和 Escape 复位。'],
  ['事件账本', 'event column 122px · row min 30px', '记录按 turn 分组；历史分页位于顶部，加载时保留读者位置。'],
  ['记录生命周期', 'completed · pending · failed', '每条记录保留角色、内容、时间和错误信息；pending 不伪造完成时间。'],
  ['虚拟滚动', 'only visible rows + 12-row buffer', '大历史记录只挂载可见窗口；表头、加载条和详情不与行内容争夺滚动轴。'],
  ['记录检查器', '内嵌 split pane · adjustable width', '选择记录后显示 Summary、Payload、Result、Timing；关闭或切换记录不离开轨迹。'],
  ['响应式职责', 'event column 122px → 50px · inspector overlay', '窄空间优先收缩事件列；检查器转为覆盖层，轨道与账本继续独立滚动。'],
] as const

const COMPOSER_RULES = [
  ['共享宽度轴', 'content 748px · card max 780px · side clearance 16px', '对话流、dock、接管面板和 Composer 围绕同一会话阅读轴排列；输入卡片比正文宽 32px。'],
  ['dock 区', 'conversation.input.dock · order Todo 0 / Goal 10 / Queue 20', 'dock 位于 Composer 上方，按会话数据出现；它不是消息流节点，也不进入卡片内部。'],
  ['输入卡片', 'top pad 10px · gap 12px · r22 · shadow lv2', '卡片使用 input-major 表面和 darkmode-thin border；空工作区改为同半径的虚线选择工作区触发器。'],
  ['文本层', '16/24 · hero floor 52px · cap 14 lines', 'textarea、backdrop、mirror 共享一个滚动偏移，编辑和引用高亮不能漂移；只有文本区域滚动。'],
  ['附件与提示', 'attachment rail before text · notice 12/18 r8', '附件在文本前；局部错误或提示在卡片外上方，不能伪装为消息或 Toast。'],
  ['左侧工具', 'add 28px circular · selection controls 28px / r8', '添加、权限/计划等使用独立控件；选择项是下拉选择，不用外观相似的按钮冒充。'],
  ['右侧动作', 'model select + context meter + send/stop 34px circular', '发送使用 info fill；普通运行时主动作改为停止，连续子代理则保留 Send 并显示独立 Stop。'],
  ['接管面板', 'question · approval · plan review', '提问、审批、计划评审会替换 Composer seat；保持共享宽度，不在普通输入卡片下追加第二套表单。'],
] as const

const CHAT_FLOW_RULES = [
  ['滚动所有权', 'conversation scroll body', '会话根持有单一纵向滚动轴；ChatView 在该容器中作为普通内容流，不再创建第二个竞争滚动区。'],
  ['内容列', 'max-width 748px · centered · vertical gap 16px', '助手正文、用户气泡、上下文、工具、错误和状态行都对齐到同一阅读轴。'],
  ['历史加载', 'top-of-flow · button r14 · padding 4/12', '加载更早记录时保存阅读锚点，prepend 后不把读者跳到另一条消息。'],
  ['跟随策略', 'reader scroll disables follow', '新用户消息、待发送项和读者停在底部时可以跟随；读者上翻后保留当前位置。'],
  ['回到底部', '34×34 · circular · sticky zero-height slot', '独立于 Composer；只在离开底部后显示，不增加 scrollHeight。'],
  ['进行中', 'TurnStatus 26px · shimmer 1.8s', '覆盖本轮首次 token、工具和 streaming 阶段；15 秒后补充经过时间。'],
  ['思考与错误', 'ReasoningRow sweep 300px/2.6s · error text + code + retry', '思考、工具、错误和重试保持不同的节点结构，不能泛化为同一种“消息卡片”。'],
  ['会话统计', '12/20 · centered · ellipsis', '元数据位于对话流尾部并与阅读列对齐；超长内容只截断这一行。'],
] as const

const SESSION_HEADER_RULES = [
  ['标题区', 'top 12px · left 20px · right 28px · title row min 32px', '标题栏属于会话视图；当前会话和子代理路径共用 breadcrumb 结构。'],
  ['层级路径', 'gap 4px · crumb 14/20 · current 500', '普通会话没有父级路径时展示当前会话；子代理显示可返回的祖先路径。'],
  ['标题栏动作槽', 'min-height 28px · gap 8px', 'Agent 预设、子代理目录、后台任务各自按能力注册；没有能力时不占入口。'],
  ['子代理触发', 'min-height 28px · pad 3/2 · r6 · 12/18 · count margin 5', '使用状态点、数量和 disclosure；不是虚构的“子代理图标按钮”。'],
  ['后台任务触发', 'min-height 28px · pad 3/2 · r6 · 12/18', '有任务时才出现；列表内按运行和已结束状态排序。'],
  ['右侧工具区', 'gap 8px · margin-left 20px', 'Session 日志和分享等是独立插件贡献，不能当作原生标题栏保证存在。'],
  ['页签', 'margin-top 4px · left 8px · gap 36px · text 13/16 · active bar 2px', '“对话 / 轨迹”由会话视图切换，页签数大于 1 时才显示。'],
] as const

const SETTINGS_RULES = [
  ['遮罩', 'viewport fixed · z1000 · bg-mask-1 + mask blur', '设置是阻断式工作面；点击遮罩或 Esc 的关闭行为必须与未保存状态协调。'],
  ['面板', '800px × min(800px, 100vh−48px) · max-width 100vw−48px · r24', '切换设置页时面板尺寸稳定；超出内容只在 options 区滚动。'],
  ['导航轨', '188px · top 22px · side 12px · gap 18px', '设置页入口属于 shell 导航；选中项使用 40px / r12 的 nav cell。'],
  ['内容标题', '54px header · 24px options padding', '标题与关闭固定；字段、卡片和列表在 options 内滚动。'],
  ['单行字段', 'Input 32px · r8 · icon slot 16px', '搜索、名称和凭据等单行值使用 Input，不使用 Composer。'],
  ['动作', 'Button md 36px · sm 28px', '应用、取消、删除和添加使用基础 Button 变体，不在每个设置页重新定义。'],
  ['页面状态', 'saved · dirty · saving · invalid · readonly · error', '状态由具体设置页持有；shell 只负责导航、滚动和关闭流程。'],
] as const

const SIDEBAR_RULES = [
  ['宽度与滚动', '264–420px · default 280px', '侧边栏整体固定宽度；品牌和设置固定，工作台/工作区/会话区域独立滚动。'],
  ['品牌标题区', '40px row · wordmark + 28×28 collapse', '品牌是第一视觉信号；收起动作使用标题栏图标按钮变体。'],
  ['新会话', '38px · r12 · elevated fill + border L2', '宽侧栏使用带文字的整行入口；rail 切换为 36×36 图标按钮。'],
  ['分区标题', '36px · label 14/20 · actions 28×28 · gap 4', '工作台与工作区共享同一标题行和搜索/视图/添加按钮变体。'],
  ['对象行', '工作区 34px · 会话 32px · r8 · horizontal 8px', '对象层级造成两档密度；同类行跨分区保持一致。'],
  ['选中与悬停', 'semantic hover / active fills', '选中、hover、running、menu-open 可叠加；不能通过改变行高或圆角表达。'],
  ['行级操作', 'ellipsis only on hover/focus/menu-open', '菜单触发不切换 treeitem；重命名与删除使用统一菜单项密度。'],
  ['收起 rail', '56px', '保留品牌、展开、新会话、工作区入口和设置；隐藏文字不是删除功能。'],
] as const

const SHELL_RULES = [
  ['侧边栏列', 'min 264px · default 280px · max 420px · rail 56px', '应用框架持有宽度和收起状态；侧边栏页面只渲染自身内容。'],
  ['主内容列', 'minmax(0, 1fr)', '始终保留标题栏、当前视图和 Composer 的可用宽度，不为详情区硬编码剩余尺寸。'],
  ['详情列', 'closed 0 · reopen 360px · range 300–520px', '详情关闭时归零；重新打开使用默认宽度，再允许拖拽。'],
  ['拖拽命中', '8px invisible hit strip', '视觉分隔线可以更细，但鼠标命中区保持 8px，并提供 col-resize 光标。'],
  ['自动收起', '< 1024px → 56px rail', '视口级变化由应用框架决定；产品页面根据实际可用宽度重排。'],
  ['全局浮层', 'shell.overlay · z20 · pointer-events: none', '浮层根不拦截主界面；具体子项显式恢复交互。'],
] as const

const MODULE_ROWS = [
  { layer: '基础资源', owner: 'ui-theme / ui-primitives', slot: '全局样式 + 基础组件', dom: '令牌、Button、Input、Menu', states: '主题 / 焦点 / 禁用', source: 'ui-theme, ui-primitives' },
  { layer: '应用框架', owner: 'ui-layout / ui-sidebar', slot: '根节点 → 侧栏 | 对话 | 详情', dom: 'AppFrame grid + overlay', states: '宽侧栏 / rail / 详情打开', source: 'AppFrame.tsx + SidebarRoot.tsx' },
  { layer: '导航', owner: 'ui-workspace', slot: 'sidebar.workspaces', dom: 'sectionHeader + treeitem 行', states: '搜索 / 选中 / 拖拽 / 重命名', source: 'WorkspaceBrowser.tsx + Rows.tsx' },
  { layer: '对话', owner: 'ui-conversation', slot: 'conversation.view + conversation.composer', dom: 'scrollBody + composerSeat', states: '初始 / 活动 / 阻塞 / 进行中', source: 'ConversationRoot.tsx + InputBar.tsx' },
  { layer: '消息', owner: 'ui-conversation/chat', slot: 'conversation.chat.node', dom: '助手流 + 用户气泡', states: '流式 / 错误 / 重试', source: 'AssistantMarkdown + MessageItem' },
  { layer: '工具', owner: 'ui-tool', slot: 'tool.call.toolview', dom: 'DisclosureRow + 输入输出内容', states: '空闲 / 进行中 / 错误 / 展开', source: 'ToolRow.tsx + ToolDetails.tsx' },
  { layer: '设置', owner: 'ui-settings-*', slot: 'settings.section / tab / item', dom: '弹窗 + 导航轨 + 表单', states: '已保存 / 待保存 / 无效 / 只读', source: 'SettingsRoot + feature sections' },
  { layer: '反馈', owner: 'ui-primitives + feature packages', slot: 'shell.overlay / feature status', dom: 'banner + toast + 空状态 / 加载', states: '成功 / 进行中 / 错误 / 空状态', source: 'ConnectionBanner + Toast' },
  { layer: '无障碍', owner: '所有客户端模块', slot: '每个可交互根节点', dom: 'button / treeitem / dialog / status', states: '焦点 / 键盘 / 减少动效', source: 'roles + focus rules' },
] as const

const IMPLEMENTATION_AUDIT_ROWS = [
  ['语义颜色与字体', '已采用', '新实现优先使用 `--dsw-alias-*` 与已消费的字体令牌；原始色阶和“仅声明”字体不能被当作默认组件标准。'],
  ['阴影与遮罩', '已采用', '只使用一级、一级模糊、二级、三级阴影和 2px 遮罩模糊；具体表面归属以产品页为准。'],
  ['产品专用变量', '受限采用', '输入区、侧栏、消息气泡、菜单、选择器和提示条只在同名产品表面使用。'],
  ['局部固定颜色', '受控例外', '悬浮卡、用户引用标签和语法高亮保留源码局部值，不提升为共享颜色。'],
  ['历史未定义变量', '禁止采用', '模型设置中无法在当前主题层解析的历史变量只记录问题，不复制到基础资源或新页面。'],
  ['直接字号与间距', '需要归属', '源码中的固定值只有在对应产品页记录了组件、状态和原因后才能复用，不能据此推导全局刻度。'],
] as const

const IMPLEMENTATION_GATES = [
  ['来源', '至少一份当前 DSH 组件或主题源码能证明名称、结构或数值。'],
  ['归属', '标明语义角色、所属模块、挂载位置，以及通用组件或产品组合的边界。'],
  ['状态', '列出触发、默认、悬停、按下、选中、焦点、禁用、加载、成功和错误中的适用项。'],
  ['几何', '记录宽高、间距、圆角、滚动、层级和命中区域；不从相似页面猜值。'],
  ['响应式', '写清外层断点与组件在实际可用宽度中的重排责任。'],
  ['无障碍', '验证键盘路径、名称、ARIA/原生状态、焦点回归和减少动效。'],
  ['回归', '构建与类型检查通过，并在现有 3080 GUI 中核对无溢出、无重叠和真实组件关系。'],
] as const

const GEOMETRY_ROWS = [
  ['侧边栏收起轨道', '56px', '收起后仍保留品牌、新会话、工作区操作和设置入口。'],
  ['工作区行 / 会话行', '34px / 32px', '对象层级不同，因此使用两档固定列表密度。'],
  ['对话内容宽度', '748px', '用户消息、助手正文和状态信息共享阅读基线。'],
  ['输入区最大宽度', '780px', '包含 748px 内容宽度和两侧各 16px 的控件留白。'],
  ['输入文字滚动上限', '336px', '最多展示 14 行，每行 24px，超过后在输入区内部滚动。'],
  ['菜单 / Modal / HoverCard', '218–360px / 380px / 244px', '操作菜单、阻断确认和延迟信息卡使用不同宽度。'],
  ['设置弹窗 / 左侧导航', '800px / 188px', '设置内容在固定导航与主表单之间分列。'],
] as const

function sectionFor(value: unknown): string {
  if (value === 'tokens' || value === 'surfaces') return 'foundations'
  if (value === 'components') return 'primitives'
  return SECTIONS.some(section => section.id === value) ? value as string : 'overview'
}

function SectionHeading({ title, detail, source }: { title: string; detail: string; source?: string }): JSX.Element {
  return <div className="dsh-specimen-heading"><div><h2>{title}</h2><p>{detail}</p></div>{source !== undefined && <code className="dsh-specimen-source">依据：{source}</code>}</div>
}

function BoardIntro({ path, title, children }: { path: string; title: string; children: string }): JSX.Element {
  return <div className="dsh-specimen-intro"><span>{path}</span><h1>{title}</h1>{path.startsWith('产品页面') && <div className="dsh-board-specimen-kind">静态组合参考</div>}<p>{children}</p></div>
}

const TOKEN_LABEL_ZH: Readonly<Record<string, string>> = {
  Base: '基础表面', 'Layer 1': '第一层表面', 'Layer 2': '第二层表面', 'Layer 3': '第三层表面', Overlay: '浮层表面', 'Mask 1': '第一层遮罩', 'Mask 2': '第二层遮罩', 'Mask 3': '第三层遮罩', 'Mask photo': '图片遮罩', 'Mask drop': '拖拽遮罩', 'Module platform': '平台模块背景', 'Multi-select': '多选背景', Skeleton: '骨架屏背景', 'Border inverted 2': '第二级反色边界', 'Border inverted': '反色边界', 'Border L1': '第一层边界', 'Border L2 darkmode thin': '暗色细第二层边界', 'Border L2': '第二层边界', 'Border L3': '第三层边界', 'Border L4': '第四层边界', 'Scrollbar L1': '第一层滚动条', 'Scrollbar L2': '第二层滚动条', 'Scrollbar hover L1': '第一层滚动条悬停', 'Scrollbar hover L2': '第二层滚动条悬停',
  'Ghost active border': '幽灵按钮激活边界', 'Ghost active fill': '幽灵按钮激活填充', 'Ghost hover': '幽灵按钮悬停', Info: '信息按钮填充', 'Info hover': '信息按钮悬停', 'Primary dimmed': '弱化主要按钮', Primary: '主要按钮填充', 'Primary hover': '主要按钮悬停', 'Toolbar invisible': '工具栏透明填充', Toolbar: '工具栏按钮填充', 'Toolbar hover': '工具栏按钮悬停',
  Business: '业务状态', 'Business tertiary': '业务状态浅色背景', Warning: '警告状态', 'Warning secondary': '警告辅助背景', 'Warning tertiary': '警告弱背景', 'Warning label': '警告文字', Error: '错误状态', 'Error secondary': '错误辅助背景', Success: '成功状态', 'Success secondary': '成功辅助背景', 'Success tertiary': '成功弱背景', 'Code block': '代码块背景', 'Code block banner': '代码块标题栏背景', 'Inline code': '行内代码', 'Code selected': '代码选中片段', 'Code unselected': '代码未选中片段', Citation: '引用标记', Placeholder: '占位内容', Tag: '标签内容', Toast: '全局提示表面', Tooltip: '提示内容',
  'Bubble highlight': '用户气泡高亮', Bubble: '用户消息气泡', 'Input major': '对话输入表面', 'Login input': '登录输入表面', Menu: '菜单表面', Selector: '选择器表面', 'Sidebar fill': '侧栏表面', 'Sidebar active accent': '侧栏选中强调层', 'Sidebar active': '侧栏选中背景', 'Sidebar hover': '侧栏悬停背景', Tip: '提示条表面',
}

function TokenRow({ token, label, usage }: Token): JSX.Element {
  return <div className="dsh-specimen-token-row"><span className="dsh-specimen-swatch" style={{ backgroundColor: `var(${token})` }} aria-hidden="true" /><div className="dsh-specimen-token-copy"><strong>{TOKEN_LABEL_ZH[label] ?? label}</strong><code>{token}</code></div><span>{usage}</span></div>
}

function StaticRamp(): JSX.Element {
  return <div className="dsh-static-family-grid">{STATIC_FAMILIES.map(([family, tokens]) => <section className="dsh-static-family" key={family}><div className="dsh-static-family-heading"><strong>{STATIC_FAMILY_LABELS[family] ?? family}</strong><span>{tokens.length} 个色阶</span></div><div className="dsh-static-token-grid">{tokens.map(level => { const token = `--dsw-static-${family}-${level}`; const isThemeVariant = token === '--dsw-static-neutral-bluish-60'; return <div className="dsh-static-token" key={token}><span className="dsh-specimen-swatch" style={{ backgroundColor: `var(${token})` }} aria-hidden="true" /><code>{token}</code>{isThemeVariant && <small>浅色 245,246,247 · 深色 249,250,251</small>}</div> })}</div></section>)}</div>
}

function Overview(): JSX.Element {
  return <div className="dsh-specimen-content">
    <BoardIntro path="总览" title="系统总览">DSH 是一个围绕会话展开的工作界面：左侧选择会话和工作区，设置在独立弹窗中完成配置，中间区域在对话和轨迹之间切换。产品区域负责布局和组合，共享组件通过统一的语义变体保持一致。</BoardIntro>
    <section className="dsh-specimen-band">
      <SectionHeading title="阅读顺序" detail="先认识共享的颜色、字体、图标和基础组件，再用规范确定组合方法，最后到产品页面查看完整实例。" />
      <div className="dsh-board-layer-strip"><div><span>01</span><strong>基础资源</strong><small>颜色 · 字体 · 图标 · 基础组件</small></div><div><span>02</span><strong>规范</strong><small>状态 · 响应式 · 无障碍 · 实现记录</small></div><div><span>03</span><strong>产品页面</strong><small>侧边栏 · 设置 · 会话 · 对话 · 轨迹</small></div></div>
    </section>
    <section className="dsh-specimen-band">
      <SectionHeading title="产品区域" detail="先确定需求放在哪个区域，以选择正确的页面组合和周边关系。控件样式仍由语义角色和组件变体决定；同一变体跨区域保持一致。" />
      <div className="dsh-overview-page-map"><div><IconPanelLeftOutlineRegular /><strong>应用框架</strong><span>安排侧边栏、主内容和右侧详情，提供列宽调整与全局浮层位置。</span></div><div><IconFolderOpenRegular /><strong>侧边栏</strong><span>品牌、收起、新会话、工作台、工作区、会话树和设置入口。</span></div><div><IconSettingsOutlineRegular /><strong>设置弹窗</strong><span>通用、模型、插件和 Agent 预设；每项配置拥有独立状态。</span></div><div><IconAgentPresetOutlineRegular /><strong>会话标题栏</strong><span>父子路径、预设、子代理、后台任务与视图页签；工具可由插件追加。</span></div><div><IconNewChatOutlineRegular /><strong>对话流</strong><span>用户与助手消息、思考过程、工具调用、结果和会话反馈。</span></div><div><IconPlusOutlineRegular /><strong>输入区</strong><span>任务、目标、队列、附件、模式、模型、上下文、发送和会话统计。</span></div><div><IconDataOutlineRegular /><strong>轨迹</strong><span>时间概览、搜索、轮次和工具折叠、事件账本、历史加载与记录检查。</span></div><div><IconWarningOutlineRegular /><strong>浮层与反馈</strong><span>菜单、确认、提示、连接状态和错误反馈；各自有不同的关闭方式与层级。</span></div></div>
    </section>
    <section className="dsh-specimen-band">
      <SectionHeading title="一致性原则" detail="组件先于页面。页面选择组件、变体与排列方式，不在局部重新定义控件自身的视觉。" />
      <div className="dsh-board-callouts"><div><IconCheckOutlineRegular /><strong>同一角色，同一变体</strong><span>添加工作台与添加工作区都是标题栏添加按钮，统一为 28×28 的圆形图标按钮，并共享全部交互状态。</span></div><div><IconInspectOutlineRegular /><strong>差异必须有语义</strong><span>只有功能或约束确实不同，才选择另一个已命名变体；例如 28px 标题栏按钮与 36px rail 按钮。</span></div><div><IconWarningOutlineRegular /><strong>页面不能改写组件</strong><span>页面负责位置、间距和响应式编排；字号、内边距、边界、圆角、图标与状态由组件变体持有。</span></div></div>
    </section>
    <section className="dsh-specimen-band">
      <SectionHeading title="设计决策顺序" detail="新增或修改 UI 时按同一套顺序判断，任何一步缺失都不进入产品页面。" />
      <div className="dsh-overview-workflow"><div><b>1</b><strong>明确任务</strong><span>先说明要展示的信息、用户动作和完成反馈。</span></div><div><b>2</b><strong>确定区域</strong><span>确定控件放置位置、相邻内容和页面组合关系。</span></div><div><b>3</b><strong>识别角色</strong><span>判断它是图标按钮、菜单项、列表行、输入框还是其他语义组件。</span></div><div><b>4</b><strong>复用变体</strong><span>同一角色和变体直接复用；差异必须对应明确的功能或密度要求。</span></div><div><b>5</b><strong>补齐状态</strong><span>同时设计默认、hover、active、selected、focus、disabled、loading 和 error。</span></div><div><b>6</b><strong>校验一致性</strong><span>并排比较字号、行高、间距、边界、圆角和图标尺寸，再验证实际环境。</span></div></div>
    </section>
    <section className="dsh-specimen-band">
      <SectionHeading title="关键尺寸" detail="这些尺寸直接决定页面密度和行为；它们属于具体页面，并非一套脱离产品的全局刻度。" />
      <div className="dsh-board-geometry-table">{GEOMETRY_ROWS.map(row => <div key={row[0]}><strong>{row[0]}</strong><code>{row[1]}</code><span>{row[2]}</span></div>)}</div>
    </section>
  </div>
}

function Foundations(): JSX.Element {
  return <div className="dsh-specimen-content">
    <BoardIntro path="基础资源 / 颜色与字体" title="颜色与字体">这里定义所有 DSH 页面共同使用的语义颜色、字体角色、层级和动效。先从本页选择资源与度量，再到产品页面确定它们如何组合。</BoardIntro>
    <section className="dsh-specimen-band"><SectionHeading title="资源分层" detail="新页面从下往上使用资源：底层基元只提供基线，组件优先使用语义变量，产品专用变量只服务命名的产品表面。" /><div className="dsh-foundation-layer-table">{FOUNDATION_LAYERS.map(([title, scope, resources, detail]) => <div key={title}><strong>{title}</strong><code>{scope}</code><div className="dsh-foundation-layer-detail"><span>{resources}</span><small>{detail}</small></div></div>)}</div></section>
    <section className="dsh-specimen-band"><SectionHeading title="使用规则" detail="这些规则用于阻止页面出现局部猜测出来的字号、边距、圆角或颜色。" /><div className="dsh-foundation-rule-grid">{FOUNDATION_RULES.map(([title, detail]) => <div key={title}><strong>{title}</strong><span>{detail}</span></div>)}</div></section>
    <section className="dsh-specimen-band"><SectionHeading title="明暗主题对照" detail="主题层替换 token 的值，组件只保留语义引用。下面是选择资源时必须知道的跨主题行为。" /><div className="dsh-foundation-theme-table">{FOUNDATION_THEME_RULES.map(([title, value, detail]) => <div key={title}><strong>{title}</strong><code>{value}</code><span>{detail}</span></div>)}</div></section>
    <section className="dsh-specimen-band"><SectionHeading title="原始色阶" detail="完整原始色阶仅供主题映射和特殊专项使用；产品组件不要直接消费原始 token。`neutral-bluish-60` 是当前源码中唯一发现浅色与深色值不同的原始名称。" /><StaticRamp /></section>
    {TOKEN_GROUPS.map(group => <section className="dsh-specimen-band" key={group.title}><SectionHeading title={group.title} detail={group.title === '产品专用表面' ? '这些语义变量虽由主题层声明，但只服务具体产品表面；不要当作通用颜色。' : '使用对应的语义变量；明暗主题由主题层提供值，页面不写固定颜色。'} /><div className="dsh-specimen-token-table">{group.tokens.map(token => <TokenRow key={token.token} {...token} />)}</div></section>)}
    <section className="dsh-specimen-band"><SectionHeading title="字体栈" detail="字体角色只决定字号、行高和字重；字体家族遵循下面两套栈，由 shell 统一应用到正文和表单控件。" /><div className="dsh-foundation-font-table">{FOUNDATION_FONT_STACKS.map(([title, value, detail]) => <div key={title}><strong>{title}</strong><code>{value}</code><span>{detail}</span></div>)}</div></section>
    <section className="dsh-specimen-band"><SectionHeading title="字体角色" detail="字号、行高和字重必须作为一个角色一起使用。示例文字用于比较实际密度，不代表额外的页面标题样式。" /><div className="dsh-specimen-type-head"><span>角色</span><span>示例</span><span>字号 / 行高 / 字重</span><span>令牌</span><span>使用情况</span></div><div className="dsh-specimen-type-table">{TYPE_ROWS.map(row => <div className="dsh-specimen-type-row" key={row.token}><span>{TYPE_LABEL_ZH[row.label] ?? row.label}</span><strong style={{ font: `var(${row.token})` }}>{row.specimen}</strong><small>{row.metric}</small><code>{row.token}</code><em data-status={row.status}>{row.status}</em></div>)}</div></section>
    <section className="dsh-specimen-band"><SectionHeading title="页面度量" detail="这些数值约束几何，不单独决定行为；实现仍需同时遵循对应产品页面的状态、交互、无障碍和源码例外。新增设计优先复用已验证的度量。" /><div className="dsh-foundation-metric-table">{FOUNDATION_METRICS.map(([title, value, detail]) => <div key={title}><strong>{title}</strong><code>{value}</code><span>{detail}</span></div>)}</div></section>
    <section className="dsh-specimen-band"><SectionHeading title="阴影与动效" detail="阴影值、模糊、过渡基线和已验证的组件动效都写在表中；页面仍必须按所属组件的触发、完成和减少动效行为实现。" /><div className="dsh-foundation-motion-table">{FOUNDATION_MOTION.map(([title, value, detail]) => <div key={title}><strong>{title}</strong><code>{value}</code><span>{detail}</span></div>)}</div></section>
  </div>
}

function Shell(): JSX.Element {
  return <div className="dsh-specimen-content"><BoardIntro path="产品页面 / 应用框架" title="应用框架">应用框架只负责侧边栏、主内容、详情区和全局浮层的页面关系，也持有列宽、收起与拖拽状态。消息、Composer、轨迹和设置仍由各自页面定义。</BoardIntro><section className="dsh-specimen-band"><SectionHeading title="布局规则" source="ui-layout/AppFrame.tsx + ui-sidebar/SidebarRoot.tsx" detail="页面先遵循列宽与收起规则，再把产品模块放进对应区域；应用框架不改变内部组件变体。" /><div className="dsh-shell-rule-table">{SHELL_RULES.map(([title, value, detail]) => <div key={title}><strong>{title}</strong><code>{value}</code><span>{detail}</span></div>)}</div></section><section className="dsh-specimen-band"><SectionHeading title="三列布局" detail="侧边栏、主内容和详情区保持独立；详情区可归零，overlay 使用绝对层。" /><div className="dsh-shell-diagram"><aside><span>侧边栏</span><strong>264–420px</strong><small>default 280 · rail 56</small></aside><main><header><span>主内容</span><span>标题栏 + 当前视图 + Composer</span></header><div className="dsh-shell-chat-lines"><span /><span /><span /></div><div className="dsh-shell-composer-line" /></main><div className="dsh-shell-resize-handle" aria-hidden="true" /><aside className="dsh-shell-details"><span>详情区</span><strong>0 / 300–520px</strong><small>reopen 360 · hit strip 8</small></aside><div className="dsh-shell-overlay"><IconInspectOutlineRegular /><span>全局浮层 · z20 · 根层不拦截点击</span></div></div></section><section className="dsh-specimen-band"><SectionHeading title="框架状态" detail="页面框架根据视口和用户操作切换列状态，同时保留主内容和关键入口。" /><div className="dsh-shell-state-grid"><div><IconPanelLeftOutlineRegular /><strong>宽侧栏</strong><span>侧边栏内容可见，工作区树和设置入口保持完整。</span></div><div><IconPanelLeftOutlineRegular /><strong>56px rail</strong><span>1024px 以下自动收起；保留品牌、新会话、工作区和设置入口。</span></div><div><IconInspectOutlineRegular /><strong>详情关闭 / 打开</strong><span>关闭为 0；重新打开 360px，再在 300–520px 内拖拽。</span></div><div><IconCodeOutlineRegular /><strong>全局浮层</strong><span>根层 click-through，Toast、Banner 等子项按需要恢复交互。</span></div></div></section></div>
}
function Conversation(): JSX.Element {
  return <div className="dsh-specimen-content"><BoardIntro path="产品页面 / 对话流" title="对话流">对话流负责按时间阅读用户、助手、思考、工具、上下文和错误信息。它在会话的单一滚动轴内工作；Composer 及其 Todo、Goal、Queue dock 由“输入区”页面定义。</BoardIntro><section className="dsh-specimen-band"><SectionHeading title="阅读与滚动规则" source="ui-conversation/ChatView.tsx + ConversationRoot.tsx" detail="对话流保持稳定列宽和阅读位置；加载历史、运行状态与回到底部各自有明确位置和行为。" /><div className="dsh-chat-rule-table">{CHAT_FLOW_RULES.map(([title, value, detail]) => <div key={title}><strong>{title}</strong><code>{value}</code><span>{detail}</span></div>)}</div></section><section className="dsh-specimen-band"><SectionHeading title="完整消息流" detail="所有内容以 16px vertical rhythm 排列；每个节点保留其业务身份，而不是套进同一种卡片。" /><div className="dsh-chat-flow-specimen"><div className="dsh-chat-flow-column"><div className="dsh-chat-load-older"><button type="button">加载更早历史</button></div><div className="dsh-chat-context-row"><IconInspectOutlineRegular /><span>已压缩 409 条历史记录</span><i /><small>展开查看摘要</small></div><div className="dsh-chat-user-row"><div className="dsh-chat-user-bubble">请按真实 DSH 模块重构样式看板。</div></div><article className="dsh-chat-assistant"><p>我会先确认组件归属、状态和页面关系，再把重复控件收敛为同一个命名变体。</p><div className="dsh-module-message-actions"><button type="button" aria-label="复制"><IconCopyOutlineRegular /></button><button type="button" aria-label="赞同"><IconLikeOutlineRegular /></button><button type="button" aria-label="不赞同"><IconDislikeOutlineRegular /></button></div></article><div className="dsh-chat-reasoning" data-running="true"><IconThinkOutlineRegular /><strong>思考中</strong><i /><span>正在整理模块之间的关系</span><IconChevronDownOutlineRegular /></div><div className="dsh-chat-tool"><IconCodeOutlineRegular /><strong>读取</strong><i /><span>ui-conversation/chat/ChatView.tsx</span><IconChevronDownOutlineRegular /></div><div className="dsh-chat-error"><span /><div><strong>本轮未完成</strong><span>读取记录时出现错误</span><code>open-error</code></div><button type="button">重试</button></div><div className="dsh-chat-turn-status">深度求索中...<span>15秒</span></div><div className="dsh-chat-pending">待发送消息：继续核对轨迹页面。</div><div className="dsh-chat-stats">25 轮 · 741 步<i />LLM 325分7秒<i />工具调用 14分7秒<i />输入 124M tok · 输出 333K tok</div></div><button type="button" className="dsh-chat-to-bottom" aria-label="回到最新消息"><IconChevronDownOutlineRegular /></button></div></section><section className="dsh-specimen-band"><SectionHeading title="Composer dock 的相邻关系" detail="Todo、Goal、Queue 是输入区上方的按序贡献，不属于消息流节点；它们共享会话内容宽度轴但各自按有无数据出现。" /><div className="dsh-chat-dock-order"><div><strong>Todo</strong><code>order 0</code><span>计划投影存在时显示。</span></div><div><strong>Goal</strong><code>order 10</code><span>当前目标投影存在时显示。</span></div><div><strong>Queue</strong><code>order 20</code><span>会话队列存在时显示。</span></div><div><strong>快速跳转轨</strong><code>当前无 native 实现</code><span>不能在产品页假设存在；需要先定义所有权、键盘路径和阅读锚点。</span></div></div></section></div>
}

function Sidebar(): JSX.Element {
  return <div className="dsh-specimen-content"><BoardIntro path="产品页面 / 侧边栏" title="侧边栏">侧边栏负责身份入口、收起和新会话；下方再分成工作台、工作区、会话树和设置。宽侧栏和 56px 收起栏是同一套结构的两种呈现。</BoardIntro>
    <section className="dsh-specimen-band"><SectionHeading title="布局与密度" source="ui-sidebar/SidebarRoot.module.css + ui-workspace/WorkspaceBrowser.tsx" detail="侧边栏先固定区域与行高，再组合品牌、新会话、工作台、工作区、会话树和设置入口。" /><div className="dsh-sidebar-rule-table">{SIDEBAR_RULES.map(([title, value, detail]) => <div key={title}><strong>{title}</strong><code>{value}</code><span>{detail}</span></div>)}</div></section>
    <section className="dsh-specimen-band"><SectionHeading title="宽侧栏" detail="品牌、收起、新会话和工作区共同组成左侧导航；工作台与工作区标题行使用同一组图标按钮。" /><div className="dsh-sidebar-specimen"><div className="dsh-sidebar-brand"><BrandWordmark /><button type="button" aria-label="收起侧边栏"><IconPanelLeftOutlineRegular /></button></div><button type="button" className="dsh-sidebar-new"><IconNewChatOutlineRegular /><span>新会话</span></button><div className="dsh-sidebar-section-title"><strong>工作台</strong><div><button type="button" aria-label="搜索工作台"><IconSearchOutlineRegular /></button><button type="button" aria-label="添加工作台"><IconProjectAddOutlineRegular /></button></div></div><div className="dsh-sidebar-workbench"><IconCordisPluginOutlineRegular /><strong>DSH UI 样式看板</strong><IconEllipsisOutlineRegular /></div><div className="dsh-sidebar-section-title"><strong>工作区</strong><div><button type="button" aria-label="搜索会话"><IconSearchOutlineRegular /></button><button type="button" aria-label="添加工作区"><IconProjectAddOutlineRegular /></button></div></div><div className="dsh-sidebar-project"><IconFolderOpenRegular /><strong>AI 项目</strong><IconEllipsisOutlineRegular /></div><div className="dsh-sidebar-rename"><button type="button"><IconEditOutlineRegular /><span>重命名</span></button><hr /><button type="button" className="is-danger"><IconTrashOutlineRegular /><span>删除</span></button></div><button type="button" className="dsh-sidebar-session" data-selected="true"><IconPlayOutlineRegular /><span>分析工作区插件层级与功能</span><time>刚刚</time></button><button type="button" className="dsh-sidebar-session"><span className="dsh-sidebar-session-empty" /><span>DSH Cordis 插件开发规范</span><time>8小时</time></button></div></section>
    <section className="dsh-specimen-band"><SectionHeading title="收起与列表状态" detail="收起后只保留可继续操作的入口；列表行的选中、运行、悬停菜单和重命名都需要单独处理。" /><div className="dsh-sidebar-state-grid"><div><IconPanelLeftOutlineRegular /><strong>56px rail</strong><span>Logo、展开、新会话和设置使用图标入口。</span></div><div><IconPlayOutlineRegular /><strong>进行中会话</strong><span>状态点、子代理数量和当前会话标题同时出现。</span></div><div><IconEditOutlineRegular /><strong>重命名与删除</strong><span>工作区菜单使用统一行高和图标槽；删除使用 danger 状态，不新增不存在的操作。</span></div><div><IconSearchOutlineRegular /><strong>搜索与空列表</strong><span>搜索工作台、搜索会话、无结果和加载状态不改变树的行高。</span></div></div></section>
  </div>
}

function Session(): JSX.Element {
  return <div className="dsh-specimen-content"><BoardIntro path="产品页面 / 会话标题栏" title="会话标题栏">标题栏是会话区域的总入口：它显示父子会话关系、当前 Agent 预设、子代理和后台任务，右侧工具区可由插件追加分享等操作，Session 日志也由独立插件提供。下方页签决定进入对话还是轨迹。</BoardIntro>
    <section className="dsh-specimen-band"><SectionHeading title="布局与贡献规则" source="ui-conversation/ConversationSession.tsx + session header slots" detail="标题栏提供层级与页签；动作入口来自按能力挂载的动作槽和工具槽。" /><div className="dsh-session-rule-table">{SESSION_HEADER_RULES.map(([title, value, detail]) => <div key={title}><strong>{title}</strong><code>{value}</code><span>{detail}</span></div>)}</div></section>
    <section className="dsh-specimen-band"><SectionHeading title="完整标题栏" detail="单层会话只有当前标题；子代理增加可点击的父级路径。动作槽和工具槽保持独立。" /><div className="dsh-session-header-specimen"><div className="dsh-session-title-row"><nav aria-label="会话层级"><button type="button">AI 项目</button><span>/</span><strong>分析工作区插件层级与功能</strong></nav><div className="dsh-session-header-actions"><span className="dsh-session-preset"><IconAgentPresetOutlineRegular />Codex</span><button type="button" className="dsh-session-subagents" aria-label="8 个子代理，正在运行"><span className="dsh-session-running-dot" /><span>8 个子代理</span><IconChevronDownOutlineRegular /></button><button type="button" className="dsh-session-jobs" aria-label="后台任务"><span className="dsh-session-running-dot" /><span>2</span><IconChevronDownOutlineRegular /></button></div><div className="dsh-session-header-tools"><button type="button" className="dsh-session-log"><IconDownloadOutlineRegular />Session 日志</button></div></div><div className="dsh-session-tabs" role="tablist"><button type="button" role="tab" aria-selected="true">对话</button><button type="button" role="tab" aria-selected="false">轨迹</button></div></div></section>
    <section className="dsh-specimen-band"><SectionHeading title="能力出现条件" detail="不要为了视觉对称渲染不存在的入口；普通会话、运行任务和插件贡献的组合会不同。" /><div className="dsh-session-action-grid"><div><IconAgentPresetOutlineRegular /><strong>Agent 预设</strong><span>当前会话显示预设；新会话页面才允许选择。</span></div><div><IconChevronDownOutlineRegular /><strong>子代理目录</strong><span>状态点、数量和 disclosure；有子代理或加载态才出现。</span></div><div><IconChevronDownOutlineRegular /><strong>后台任务</strong><span>有任务才出现；触发后展示按状态排序的任务清单。</span></div><div><IconCordisPluginOutlineRegular /><strong>插件贡献</strong><span>Session 日志、分享等独立挂载，未注册时标题栏不预留位置。</span></div></div></section>
  </div>
}

function Composer(): JSX.Element {
  return <div className="dsh-specimen-content"><BoardIntro path="产品页面 / 输入区" title="输入区">输入区是会话底部的连续工作面：按序显示 Todo、Goal、Queue dock，再提供多行编辑、附件、选择控件、上下文占用和发送或停止动作。它不是 32px 的单行 Input。</BoardIntro><section className="dsh-specimen-band"><SectionHeading title="布局与责任" source="ui-conversation/InputBar.tsx + InputBar.module.css" detail="Composer 持有卡片、文本层、附件和工具栏；问题、审批和计划评审接管整个输入席位，而不是在输入卡片里堆叠表单。" /><div className="dsh-composer-rule-table">{COMPOSER_RULES.map(([title, value, detail]) => <div key={title}><strong>{title}</strong><code>{value}</code><span>{detail}</span></div>)}</div></section><section className="dsh-specimen-band"><SectionHeading title="活动 Composer" detail="dock 处于卡片上方；附件、文本和控制行位于同一张 r22 卡片中，所有控件有确定的尺寸与职责。" /><div className="dsh-composer-surface"><div className="dsh-composer-dock-stack"><div><IconListPenOutlineRegular /><strong>任务</strong><span>1 进行中 · 5 待处理</span><IconChevronDownOutlineRegular /></div><div><IconGoalOutlineRegular /><strong>进行中的目标</strong><span>按真实 DSH 模块重构样式看板</span><button type="button" aria-label="暂停目标"><IconStopFillRegular /></button></div><div><IconLoadingOutlineRegular /><strong>队列</strong><span>2 条待发送消息</span><IconChevronDownOutlineRegular /></div></div><div className="dsh-composer-notice">引用了 1 个文件；发送前会保留上下文关联。</div><div className="dsh-composer-real-card"><div className="dsh-composer-real-attachments"><div><IconCodeOutlineRegular /><button type="button" aria-label="移除附件"><IconCloseFillRegular /></button></div><span>附件 rail 位于文本层之前</span></div><div className="dsh-composer-real-text"><div aria-hidden="true">请按真实 <mark>DSH UI 样式看板</mark> 重构。</div><textarea aria-label="Composer 文本" readOnly defaultValue="请按真实 DSH UI 样式看板重构。" rows={2} /></div><div className="dsh-composer-real-row"><div className="dsh-composer-real-tools"><button type="button" className="dsh-composer-real-add" aria-label="打开命令菜单"><IconPlusOutlineRegular /></button><select aria-label="权限模式" defaultValue="plan"><option value="plan">Plan</option></select><select aria-label="会话模式" defaultValue="readonly"><option value="readonly">只读</option></select></div><div className="dsh-composer-real-trailing"><select aria-label="选择模型" defaultValue="v3"><option value="v3">DeepSeek V3.2</option></select><button type="button" className="dsh-composer-real-meter" aria-label="上下文占用">42%</button><button type="button" className="dsh-composer-real-send" aria-label="发送"><IconSendOutlineRegular /></button></div></div></div><div className="dsh-composer-real-stats">25 轮 · 741 步<i />LLM 325分7秒<i />工具调用 14分7秒<i />首 token 平均 13.8秒 · 36 tok/s</div></div></section><section className="dsh-specimen-band"><SectionHeading title="输入状态与接管" detail="运行和阻断改变可编辑性与主动作，但不改变宽度轴；不能为了复用把不同状态塞进相同的空白卡片。" /><div className="dsh-composer-state-grid"><div><strong>无工作区</strong><span>r22 虚线卡片是选择工作区触发器；文本和工具控件禁用，点击整个卡片。</span></div><div><strong>普通运行</strong><span>textarea 只读；主 34px 动作切换为停止，TurnStatus 留在消息流中。</span></div><div><strong>连续子代理</strong><span>Send 保留，旁边独立 Stop；父会话不可用时显示只读说明。</span></div><div><strong>附件拖入</strong><span>页面级 DropOverlay 显示可接受/拒绝；类型或大小错误通过 Toast 反馈。</span></div><div><strong>审批与问题</strong><span>ApprovalPanel 和问题面板接管 Composer seat，保持内容宽度并给出明确选项。</span></div><div><strong>计划评审</strong><span>计划 Markdown、讨论、拒绝、批准与忙碌状态属于独立接管面板。</span></div></div></section></div>
}

function Trajectory(): JSX.Element {
  const rows = [['#128', 'USER', '请按真实模块重构样式看板。', '—'], ['#129', 'ASSISTANT', '我先核对页面结构与可用组件。', '2.4s'], ['#130', 'TOOL', 'read · ui-conversation/InputBar.tsx', '0.8s'], ['#131', 'SUBTOOL', 'grep · conversation.session.header', '0.2s'], ['#132', 'ASSISTANT', '正在整理模块之间的关系', 'running'], ['#133', 'COMPACTED', '已压缩 409 条历史记录', '—'], ['#134', 'CONTEXT', 'skill-catalog · agent preset', '—']]
  return <div className="dsh-specimen-content"><BoardIntro path="产品页面 / 轨迹" title="轨迹">轨迹是独立的会话视图，用时间概览和事件账本展示模型、工具和上下文的执行过程。它有自己的工具栏、滚动区、搜索、折叠、历史分页和记录检查器，不等同于对话里的工具行。</BoardIntro><section className="dsh-specimen-band"><SectionHeading title="布局与交互规则" source="ui-trajectory/TrajectoryView.tsx + TrajectoryToolbar.tsx + TrajectoryTimeline.tsx + TrajectoryTable.tsx" detail="工具栏、时间概览、事件账本和记录检查器各自承担不同的阅读任务，统一由轨迹视图管理滚动和选择。" /><div className="dsh-trajectory-rule-table">{TRAJECTORY_RULES.map(([title, value, detail]) => <div key={title}><strong>{title}</strong><code>{value}</code><span>{detail}</span></div>)}</div></section>
    <section className="dsh-specimen-band"><SectionHeading title="时间概览与工具栏" detail="顶部固定工具栏负责时间宽度、轮次/工具折叠和搜索；时间概览用 Input、Model、Tools 三条轨道表达真实耗时。" /><div className="dsh-trajectory-frame"><div className="dsh-trajectory-toolbar"><button type="button" data-active="true"><IconPlayOutlineRegular />Duration</button><button type="button"><IconChevronDownOutlineRegular />Turns</button><button type="button"><IconChevronDownOutlineRegular />Calls</button><label><IconSearchOutlineRegular /><input aria-label="搜索轨迹" placeholder="Search" readOnly /></label></div><div className="dsh-trajectory-timeline"><div className="dsh-trajectory-lanes"><span>Input</span><span>Model</span><span>Tools</span></div><div className="dsh-trajectory-bars"><i className="is-input" /><i className="is-model" /><i className="is-tool" /><i className="is-error" /><small>TTFT 1.3s · decode 1.1s</small></div></div><div className="dsh-trajectory-body"><div className="dsh-trajectory-ledger"><div className="dsh-trajectory-load-earlier">… 加载更早历史</div>{rows.map(([index, kind, text, time]) => <div className={`dsh-trajectory-row kind-${kind.toLowerCase()}`} key={index}><span className="dsh-trajectory-event"><b>{index}</b><em>{kind}</em></span><span className="dsh-trajectory-content">{text}</span><time>{time}</time></div>)}<div className="dsh-trajectory-turn-break"><span>Turn 25</span><i /><small>3 steps · 2 tool calls</small></div><div className="dsh-trajectory-row is-selected"><span className="dsh-trajectory-event"><b>#135</b><em>TOOL</em></span><span className="dsh-trajectory-content">Bash · pnpm run check → Typecheck passed</span><time>1.8s</time></div></div><aside className="dsh-trajectory-inspector"><header><strong>Record #135</strong><button type="button" aria-label="关闭记录检查器"><IconCloseFillRegular /></button></header><nav><button type="button" data-active="true">Summary</button><button type="button">Payload</button><button type="button">Result</button><button type="button">Timing</button></nav><div className="dsh-trajectory-inspector-body"><dl><div><dt>Event</dt><dd>TOOL / Bash</dd></div><div><dt>Status</dt><dd className="is-success">Completed</dd></div><div><dt>Duration</dt><dd>1.8s</dd></div><div><dt>Request</dt><dd>Request #24</dd></div></dl><h4>Result</h4><pre>Typecheck passed\n0 errors</pre></div></aside></div></div></section>
    <section className="dsh-specimen-band"><SectionHeading title="轨迹中的完整状态" detail="角色、生命周期和阅读状态是三个独立维度；进行中不虚构耗时，失败记录保留错误和重试入口。" /><div className="dsh-trajectory-state-grid"><div><strong>7 类记录</strong><span>SYSTEM · USER · CONTEXT · COMPACTED · ASSISTANT · TOOL · SUBTOOL</span></div><div><strong>三种生命周期</strong><span>Completed · Pending · Failed；Request 还会显示 provider、model、usage、timing。</span></div><div><strong>大历史记录</strong><span>超过 100 行启动虚拟滚动，只挂载可见行和 12 行缓冲；顶部 48px 自动补页。</span></div><div><strong>时间交互</strong><span>点击选择、拖选范围、滚轮缩放、右键清除、Escape/双击复位、悬停 500ms 看详情。</span></div><div><strong>两类详情栏</strong><span>轨迹内嵌记录检查器可调整宽度；应用框架右侧详情栏默认 0 宽，当前普通工具点击不可达。</span></div><div><strong>窄屏转换</strong><span>事件列 122px 变 50px，记录检查器变为右侧覆盖层，轨道和账本仍独立滚动。</span></div></div></section>
  </div>
}

const OVERLAY_RULES = [
  ['Tooltip / HoverCard', 'fixed · z100 · Tooltip r8 · HoverCard 244px/r12', '由 hover 或 focus 延迟打开；HoverCard 可接住 pointer，Tooltip 只承载短标签，不放确认动作。'],
  ['Menu', 'r12 · 218–360px · pad 4px · z100 / Portal z1100', '对象操作使用菜单；Portal 菜单必须高于 Modal，靠近边缘时调整方向并在自身 viewport 内滚动。'],
  ['Modal', 'fixed inset 0 · z1000 · pad 24px · dialog 380px/r24', '遮罩阻断背景交互；焦点进入 dialog，Esc/遮罩关闭后回到触发源。'],
  ['Toast', 'fixed · z1100 · r14 · shadow lv3', '短暂结果放在全局提示层；持续连接问题使用 ConnectionBanner，不用 Toast 轮询。'],
  ['全局反馈', 'banner z100 · onboarding z1100', '连接、加载和空状态分别有持续时间与归属；失败必须同时给出原因和下一步动作。'],
  ['收束', 'outside click · Escape · focus return', '每种浮层声明自己的打开、关闭和焦点策略；不要用同一个 outside-click 处理器覆盖所有类型。'],
] as const

function Overlays(): JSX.Element {
  return <div className="dsh-specimen-content"><BoardIntro path="产品页面 / 浮层与全局反馈" title="浮层与全局反馈">菜单、Modal、HoverCard、Tooltip、Toast 和连接提示都使用浮层或固定层，但它们的触发方式、层级、交互收束和尺寸不同。此页先给出层级规则，再展示各自的产品组合。</BoardIntro><GlobalFeedback /><section className="dsh-specimen-band"><SectionHeading title="层级与收束规则" detail="层级只解决覆盖关系；触发方式、焦点和关闭行为仍由具体浮层类型负责。" /><div className="dsh-overlay-rule-table">{OVERLAY_RULES.map(([title, value, detail]) => <div key={title}><strong>{title}</strong><code>{value}</code><span>{detail}</span></div>)}</div></section><section className="dsh-specimen-band"><SectionHeading title="Menu" source="ui-primitives/Menu.tsx + Menu.module.css" detail="菜单用于承载当前对象的操作；它会根据触发按钮的位置选择展开方向，并在靠近窗口边缘时自动调整。" /><div className="dsh-overlay-menu-specimen"><div className="dsh-overlay-menu-card"><div className="dsh-overlay-menu-label">工作台操作</div><button type="button"><IconEditOutlineRegular />重命名</button><button type="button"><IconFolderOpenRegular />移动到工作区</button><div className="dsh-overlay-menu-separator" /><button type="button" className="is-danger"><IconTrashOutlineRegular />删除</button></div><div className="dsh-overlay-facts"><span>width 218–360px</span><span>radius 12px</span><span>padding 4px</span><span>z-index 1100</span></div></div></section><section className="dsh-specimen-band"><SectionHeading title="Modal 与 HoverCard" source="ui-primitives/Modal.module.css + HoverCard.module.css" detail="Modal 是确认和编辑的阻断层；HoverCard 是延迟信息卡，不应承担确认动作。" /><div className="dsh-overlay-duo"><div className="dsh-overlay-modal"><div className="dsh-overlay-modal-mask" /><div className="dsh-overlay-modal-card"><strong>删除工作区？</strong><p>删除只移除工作区注册；文件和会话日志会保留在未分组会话中。</p><div><button type="button" className="dsh-primitive-button is-outline">取消</button><button type="button" className="dsh-primitive-button is-primary">确认</button></div></div></div><div className="dsh-overlay-hovercard"><strong>WorkspaceHoverContent</strong><span>/Users/zhaowenbo/Downloads/AI项目</span><button type="button"><IconCopyOutlineRegular />复制路径</button><small>HoverCard 默认延迟打开，固定在 row 右侧。</small></div></div><div className="dsh-board-note"><IconWarningOutlineRegular /><span>HoverCard 的固定深色背景和白色文字是 primitives 的局部例外，不应推广为全局 token。</span></div></section></div>
}

function GlobalFeedback(): JSX.Element {
  return <section className="dsh-specimen-band"><SectionHeading title="全局反馈状态" detail="持续连接问题、短暂操作结果、首次引导和空状态使用不同的固定层；状态信息必须同时给出原因与下一步动作。" /><div className="dsh-overlay-feedback-strip"><div className="is-banner"><strong>ConnectionBanner</strong><span>固定顶部 · 连接断开持续可见</span><code>top 0 · z100 · 12/18</code></div><div className="is-toast"><strong>Toast</strong><span>复制成功 · 不拦截点击</span><code>top 120 · z1100 · r14</code></div><div><strong>DropOverlay</strong><span>拖入附件时覆盖工作面</span><code>mask-drop · 按拖拽状态显示</code></div><div className="is-onboarding"><strong>OnboardingSurface</strong><span>首次进入拥有独立工作面</span><code>inset 0 · z1100 · mask top 80</code></div></div></section>
}

function Settings(): JSX.Element {
  return <div className="dsh-specimen-content"><BoardIntro path="产品页面 / 设置弹窗" title="设置弹窗">设置外层、通用设置、模型设置和插件设置不是一个组件。它们共享 Modal、导航、Input 和 Button 资源，但各自持有字段、保存、校验和待处理状态。</BoardIntro><section className="dsh-specimen-band"><SectionHeading title="布局与状态" detail="设置外层保持稳定尺寸和滚动位置，具体设置页只负责自己的数据、字段与保存生命周期。" /><div className="dsh-settings-rule-table">{SETTINGS_RULES.map(([title, value, detail]) => <div key={title}><strong>{title}</strong><code>{value}</code><span>{detail}</span></div>)}</div></section><section className="dsh-specimen-band"><SectionHeading title="设置窗口与单行输入框" source="ui-settings-general/SettingsRoot.module.css + ui-primitives/Input.module.css" detail="面板 800px，导航轨 188px，导航行 40px；单行 Input 32px / r8。" /><div className="dsh-module-settings-panel"><aside className="dsh-module-settings-nav"><strong>设置</strong><button type="button" data-active="true"><IconSettingsOutlineRegular />通用</button><button type="button"><IconDataOutlineRegular />模型</button><button type="button"><IconPersonalizationOutlineRegular />插件</button><button type="button"><IconAgentPresetOutlineRegular />Agent 预设</button></aside><div className="dsh-module-settings-content"><header><strong>通用</strong><button type="button" aria-label="关闭设置"><IconCloseFillRegular /></button></header><div className="dsh-module-settings-options"><label>默认 Agent 预设<Input className="dsh-module-settings-input" icon={<IconSearchOutlineRegular />} defaultValue="DeepSeek Harness" /></label><label>工作区过滤<Input className="dsh-module-settings-input" placeholder="输入文件夹名称" /></label><div className="dsh-module-settings-row"><div><strong>紧凑模式</strong><span>使用较紧凑的会话列表行距</span></div><button type="button" className="dsh-module-switch" aria-label="紧凑模式" data-on="true"><span /></button></div></div></div></div></section><section className="dsh-specimen-band"><SectionHeading title="不同设置页面的写法" source="ui-settings-models + ui-settings-plugins" detail="模型设置和插件设置解决不同问题，因此字段排列、操作按钮和保存方式也不同。" /><div className="dsh-settings-recipe-grid"><div><IconCodeOutlineRegular /><strong>模型设置</strong><span>提供商卡片 · 适配器字段 · 采用/声明动作 · 删除确认</span><code>ui-settings-models/ModelsSection</code></div><div><IconCordisPluginOutlineRegular /><strong>插件设置</strong><span>页签 · 已访问面板 · 暂存字段 · 未保存标记 · 保存/放弃底栏</span><code>ui-settings-plugins/PluginCard + fields</code></div><div><IconWarningOutlineRegular /><strong>Validation</strong><span>field-level invalid state and async pending belong to feature section</span><code>feature-owned CSS</code></div><div><IconInspectOutlineRegular /><strong>Data logic</strong><span>schema-form only rehydrates and sets values; it does not render fields</span><code>schema-form/model.ts</code></div></div></section><section className="dsh-specimen-band"><SectionHeading title="Input 责任对照" source="ui-primitives/Input + ui-conversation/InputBar" detail="相同的 label / border token 不代表相同组件。" /><div className="dsh-settings-comparison"><div><strong>Settings Input</strong><span>single-line · 32px · r8 · Layer 1 · focus-within brand border</span><code>ui-primitives/Input</code></div><div><strong>Conversation Composer</strong><span>multi-line · r22 · Input major · lv2 shadow · mirror/backdrop · toolbar</span><code>ui-conversation/InputBar</code></div></div></section></div>
}

function Accessibility(): JSX.Element {
  return <div className="dsh-specimen-content"><BoardIntro path="规范 / 无障碍" title="无障碍">无障碍是每个产品页面的验收条件：键盘能完成同样的任务，焦点清楚可见，状态能被读屏理解，减少动效后信息和动作仍然完整。</BoardIntro><section className="dsh-specimen-band"><SectionHeading title="键盘操作" detail="所有可操作元素都能通过键盘到达，并且保持和鼠标操作一致。" /><div className="dsh-a11y-keyboard-list"><div><kbd>Tab</kbd><strong>移动焦点</strong><span>按照页面顺序访问按钮、输入框、菜单和链接。</span></div><div><kbd>Enter / Space</kbd><strong>执行操作</strong><span>打开页面、选择会话、提交表单或确认动作。</span></div><div><kbd>Esc</kbd><strong>收束当前层</strong><span>关闭菜单、HoverCard、Modal 或搜索输入，并恢复合理焦点。</span></div><div><kbd>↑ ↓</kbd><strong>移动选项</strong><span>在树形列表、菜单、页签和命令选项中移动。</span></div></div></section><section className="dsh-specimen-band"><SectionHeading title="语义与读屏" detail="视觉上的状态还要有语义对应，不能只依赖颜色或图标。" /><div className="dsh-a11y-role-grid"><div><span className="dsh-a11y-role">treeitem</span><strong>会话与工作区行</strong><small>aria-selected / aria-expanded</small></div><div><span className="dsh-a11y-role">dialog</span><strong>Modal 和设置窗口</strong><small>aria-modal / labelled heading</small></div><div><span className="dsh-a11y-role">status</span><strong>加载、运行与连接提示</strong><small>文字状态 + live announcement</small></div><div><span className="dsh-a11y-role">button</span><strong>图标操作</strong><small>aria-label 描述动作</small></div></div></section><section className="dsh-specimen-band"><SectionHeading title="焦点与动效" detail="焦点环不能被 outline: none 删除；减少动效由每个拥有动画的组件单独处理。" /><div className="dsh-a11y-focus-demo"><button type="button" data-focus-demo="true"><IconSearchOutlineRegular />键盘焦点</button><button type="button"><IconLoadingOutlineRegular />运行中</button><label><input type="checkbox" defaultChecked />减少动效</label><span>focus-visible 使用清晰边界；TurnStatus shimmer、ReasoningRow sweep 和位移过渡分别收束。</span></div></section><section className="dsh-specimen-band"><SectionHeading title="验收清单" detail="实现完成前逐项检查；任一项失败都不能只靠视觉截图放过。" /><div className="dsh-a11y-checklist">{A11Y_CHECKS.map(([title, detail, failure]) => <div key={title}><IconCheckOutlineRegular /><strong>{title}</strong><span>{detail}</span><small>{failure}</small></div>)}</div></section></div>
}

function States(): JSX.Element {
  return <div className="dsh-specimen-content"><BoardIntro path="使用规范 / 状态与响应式" title="状态与响应式">状态需要同时说明当前进度、对象和可执行动作。对话、思考行、工具、按钮不会因为同样处于“进行中”就使用同一种视觉表现。</BoardIntro><section className="dsh-specimen-band"><SectionHeading title="进行中状态" detail="进行中需要同时表达状态、当前对象和下一步动作。相同的状态语义在对话、思考行、工具和主操作中使用不同的表现。" /><div className="dsh-running-state-grid"><div className="dsh-running-thinking"><IconThinkOutlineRegular /><strong className="dsh-running-shimmer">深度求索中...</strong><span>TurnStatus：蓝色文字 shimmer · 1.8s</span></div><div className="dsh-running-reasoning"><IconThinkOutlineRegular /><strong>思考中</strong><span>ReasoningRow：300px sweep · 2.6s</span></div><div className="dsh-running-tool"><IconCodeOutlineRegular /><strong>读取</strong><span>工具行：保留任务与对象</span></div><div className="dsh-running-button"><button type="button" aria-label="停止"><IconStopFillRegular /></button><strong>停止</strong><span>主操作切换为下一步动作</span></div></div></section><section className="dsh-specimen-band"><SectionHeading title="状态维度" detail="先确定状态属于哪一维，再决定视觉表达；同一个组件可以同时拥有多个维度。" /><div className="dsh-state-matrix"><div><strong>可用性</strong><span>可用 · 禁用 · 不可交互 · 只读 · 阻塞</span><small>输入框 / 按钮 / Composer / 设置</small></div><div><strong>进度</strong><span>空闲 · 加载 · 进行中 · 等待处理 · 成功 · 已停止 · 错误</span><small>工具 / 会话 / 设置</small></div><div><strong>选择与焦点</strong><span>默认 · 悬停 · 按下 · 选中 · 键盘焦点</span><small>列表行 / 页签 / 导航 / 图标按钮</small></div><div><strong>展开与浮层</strong><span>收起 · 展开 · 菜单打开 · 弹窗打开 · HoverCard 打开</span><small>工作区 / 工具 / 浮层</small></div><div><strong>环境</strong><span>宽屏 · 窄屏 · rail · 移动端 · 减少动效</span><small>应用框架决定视口级状态；页面响应其可用空间</small></div><div><strong>Content</strong><span>empty · streaming · interrupted · retry · history error</span><small>Conversation and message domain</small></div></div></section><section className="dsh-specimen-band"><SectionHeading title="响应式断点责任" source="ui-layout/columns.ts + package-local CSS" detail="外层断点和内层组合分开：1024px 以下 shell 进入 rail，720px 以下工作台二级侧栏纵向连续。" /><div className="dsh-responsive-table"><div><strong>≥ 1024px</strong><span>AppFrame wide columns，sidebar 280px，workspace header / tree 完整展示。</span><code>ui-layout</code></div><div><strong>&lt; 1024px</strong><span>shell collapsed，sidebar 56px rail；Workbench 不渲染自己的 rail icons。</span><code>dsh-better-workbench + ui-sidebar</code></div><div><strong>≤ 720px</strong><span>Workbench secondary sidebar 纵向连续，Composer / settings 内容各自收缩。</span><code>package-local media rules</code></div><div><strong>reduced motion</strong><span>shell fade、search transition、running sweep 都应停止或缩短。</span><code>ui-theme + feature CSS</code></div></div></section><section className="dsh-specimen-band"><SectionHeading title="状态检查清单" source="real DSH browser/component tests" detail="设计看板以后每新增一个标本，都要说明它覆盖的状态和未覆盖的状态。" /><div className="dsh-checklist"><div><IconCheckOutlineRegular /><span>尺寸与 owner 源码一致</span></div><div><IconCheckOutlineRegular /><span>暗色主题使用 semantic alias</span></div><div><IconCheckOutlineRegular /><span>焦点、禁用、错误可识别</span></div><div><IconWarningOutlineRegular /><span>局部 literal 颜色已登记为 exception</span></div></div></section></div>
}

function Governance(): JSX.Element {
  return <div className="dsh-specimen-content"><BoardIntro path="实现记录" title="实现记录">这里集中记录每个样本对应的页面、组件、尺寸、状态和实现位置，方便后续更新时保持一致。外观相似的内容也不自动合并。</BoardIntro><section className="dsh-specimen-band"><SectionHeading title="实现信息" source="样式看板维护规则" detail="新增或修改样本时，至少记录页面区域、所属模块、挂载位置、尺寸约束、状态触发、源码依据和是否为局部例外。" /><div className="dsh-traceability-table"><div className="dsh-board-table-head"><span>样本标识</span><span>所属模块</span><span>挂载位置 / DOM 根</span><span>尺寸约束</span><span>状态 / 源码</span></div><div className="dsh-board-table-row"><strong>shell.frame</strong><span>ui-layout + ui-sidebar</span><code>root → sidebar | conversation | details | shell.overlay</code><span>280 / 56 / 300–520 / hit 8</span><code>宽屏、收起栏、详情打开 · AppFrame.tsx</code></div><div className="dsh-board-table-row"><strong>conversation.header</strong><span>ui-conversation</span><code>conversation.session.header → actions | utilities | conversation.view</code><span>top 12 / left 20 / right 28 / active 2</span><code>路径、能力、页签 · ConversationSession.tsx</code></div><div className="dsh-board-table-row"><strong>conversation.chat</strong><span>ui-conversation/chat + ui-tool</span><code>conversation.view → conversation.chat.node → tool.call.toolview</code><span>748 / gap 16 / bubble 525</span><code>流式、错误、重试、历史 · ChatView.tsx</code></div><div className="dsh-board-table-row"><strong>conversation.composer</strong><span>ui-conversation</span><code>conversation.composer.bar → card[data-composer-card]</code><span>748 / 780 / r22 / 34</span><code>初始、活动、运行 · InputBar.tsx</code></div><div className="dsh-board-table-row"><strong>settings.panel</strong><span>ui-settings-general</span><code>settings → nav + section + item</code><span>800 / 188 / header 54 / r24</span><code>打开、切换、关闭 · SettingsRoot.tsx</code></div><div className="dsh-board-table-row"><strong>settings.input</strong><span>ui-primitives + ui-settings-general</span><code>Input.wrap → settings options</code><span>32 / r8 / 16 icon slot</span><code>焦点、禁用 · Input.module.css</code></div><div className="dsh-board-table-row"><strong>trajectory.view</strong><span>ui-trajectory</span><code>conversation.view → toolbar + timeline + table + inspector</code><span>32 / 50 / 122 / 320–440</span><code>搜索、折叠、选中、调整 · TrajectoryView.tsx</code></div><div className="dsh-board-table-row"><strong>tool.row</strong><span>ui-tool</span><code>tool.call.toolview → DisclosureRow</code><span>24 / 16 leading</span><code>进行中、错误、展开 · ToolRow</code></div><div className="dsh-board-table-row"><strong>workspace.row</strong><span>ui-workspace</span><code>sidebar.workspaces → treeitem</code><span>34 / 32 / r8</span><code>选中、拖拽、菜单 · Rows</code></div></div></section><section className="dsh-specimen-band"><SectionHeading title="资源采用状态" detail="只把已验证且实际消费的资源称为规范；源码声明、受控例外和禁止采用项必须保持不同状态。" /><div className="dsh-foundation-theme-table">{IMPLEMENTATION_AUDIT_ROWS.map(([title, status, detail]) => <div key={title}><strong>{title}</strong><code>{status}</code><span>{detail}</span></div>)}</div></section><section className="dsh-specimen-band"><SectionHeading title="变更验收门槛" detail="新增或改动样本必须同时通过下面七项；缺少任何一项时继续查源码或回到所属产品页，不能靠相似外观补齐。" /><div className="dsh-foundation-rule-grid">{IMPLEMENTATION_GATES.map(([title, detail]) => <div key={title}><strong>{title}</strong><span>{detail}</span></div>)}</div></section><section className="dsh-specimen-band"><SectionHeading title="模块归属" detail="每个页面样本都必须能回答由哪个模块拥有、挂载到哪里、有哪些状态，以及哪份源码是依据。" /><div className="dsh-board-module-table"><div className="dsh-board-table-head"><span>模块层</span><span>所属模块</span><span>挂载位置</span><span>DOM 结构</span><span>状态 / 源码</span></div>{MODULE_ROWS.map(row => <div className="dsh-board-table-row" key={row.layer}><strong>{row.layer}</strong><span>{row.owner}</span><code>{row.slot}</code><span>{row.dom}</span><code>{row.states} · {row.source}</code></div>)}</div></section><section className="dsh-specimen-band"><SectionHeading title="特殊情况" source="当前组件样式中的局部例外" detail="这些特殊处理只保留在实际使用它们的页面中，不提升为全局颜色或组件。" /><div className="dsh-exception-list"><div><IconWarningOutlineRegular /><strong>悬浮卡</strong><span>固定深色背景与白色文字，为复制路径的对比度例外。</span><code>ui-primitives/HoverCard.module.css</code></div><div><IconWarningOutlineRegular /><strong>引用标签</strong><span>用户引用标签使用局部 rgba 蓝色，属于 MessageItem 产品特例。</span><code>ui-conversation/MessageItem.module.css</code></div><div><IconWarningOutlineRegular /><strong>发送图标</strong><span>发送箭头为白色 currentColor，配合信息按钮填充，不是普通文字变量。</span><code>ui-conversation/InputBar.module.css</code></div><div><IconWarningOutlineRegular /><strong>未定义变量</strong><span>模型设置中的历史未定义变量不得复制进基础页。</span><code>ui-settings-models/ModelsSection.module.css</code></div></div></section></div>
}

export function DesignBoardSidebar({ instance, updateConfig, reportError }: WorkbenchRenderProps): JSX.Element {
  const active = sectionFor(instance.config.section)
  return <nav className="dsh-specimen-sidebar" aria-label="DSH UI 样式看板导航"><div className="dsh-specimen-sidebar-title">DSH UI</div><p>从基础资源与规范进入产品页面</p><div className="dsh-specimen-sidebar-nav">{SECTION_GROUPS.map(group => <div className="dsh-specimen-sidebar-group" key={group.label}><div className="dsh-specimen-sidebar-group-label">{group.label}</div>{group.sections.map(section => { const Icon = section.icon; return <button type="button" className="dsh-specimen-sidebar-link" data-active={active === section.id} aria-current={active === section.id ? 'page' : undefined} key={section.id} onClick={() => { void updateConfig({ section: section.id }).catch(error => { reportError(error instanceof Error ? error.message : String(error)) }) }}><Icon size={16} />{section.label}</button> })}</div>)}</div><div className="dsh-specimen-sidebar-footer"><span>系统范围</span><strong>DSH Web UI</strong></div></nav>
}

export function DesignBoard({ instance }: WorkbenchRenderProps): JSX.Element {
  const section = sectionFor(instance.config.section)
  return <div className="dsh-specimen-board">{section === 'overview' && <Overview />}{section === 'shell' && <Shell />}{section === 'sidebar' && <Sidebar />}{section === 'settings' && <Settings />}{section === 'session' && <Session />}{section === 'chat' && <Conversation />}{section === 'composer' && <Composer />}{section === 'trajectory' && <Trajectory />}{section === 'overlays' && <Overlays />}{section === 'foundations' && <Foundations />}{section === 'icons' && <IconGallery groups={ICON_GROUPS} />}{section === 'primitives' && <ComponentGallery />}{section === 'states' && <States />}{section === 'accessibility' && <Accessibility />}{section === 'governance' && <Governance />}</div>
}
