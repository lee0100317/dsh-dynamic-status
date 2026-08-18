# dsh-dynamic-status

DSH 插件：将对话过程中的 "Deep diving..." 状态文字替换为**《文明 6》科技/人文引言**，随机轮换，像 Codex / Claude Code 一样动态变化。

## 效果

每次 AI 思考时，底部的 shimmer 状态文字会随机展示一条《文明 6》中的经典引言：

> "我不相信星座。我是射手座，天生多疑。——亚瑟·查理斯·克拉克"  
> "写作很简单。你所要做的就是把错误的词语划掉。——马克·吐温"  
> "正常人认为东西没坏就别修它。工程师认为东西没坏是它功能太少。——斯科特·亚当斯"  
> "人都会犯错，但是想真正把事情搞砸你还需要一台计算机。——保罗·埃利希"  
> "I'll be back."

共 **207 条**，数据来源于 Firaxis 官方 `Vanilla_zh_Hans_CN.xml` 中的 `LOC_TECH_*_QUOTE` 和 `LOC_CIVIC_*_QUOTE`。

每 4–6 秒随机轮换一条，不重复上一条。

## 安装

```bash
# 1. clone 到本地
git clone git@github.com:lee0100317/dsh-dynamic-status.git ~/dsh-dynamic-status

# 2. 在你的 DSH profile 的 package.json 中添加依赖
#    编辑 ~/.dsh/profiles/web/package.json：
#    "dependencies": {
#      "@lee0100317/dsh-dynamic-status": "link:~/dsh-dynamic-status"
#    }

# 3. 在 bundle 列表中添加插件
#    编辑 ~/.dsh/profiles/web/package.json，在 dsh.bundle 数组中插入：
#    "@lee0100317/dsh-dynamic-status"

# 4. 重新安装
cd ~/.dsh/profiles/web && pnpm install
```

## 原理

- 通过 DOM MutationObserver 检测 `<div role="status" aria-live="polite">` 元素
- 识别 shimmer 动画的 computed style 来定位 TurnStatus 组件
- 劫持文本节点，替换为随机引言
- 使用 `ctx.effect` 自动管理生命周期和清理

## 数据来源

引言提取自《文明 6》(Sid Meier's Civilization VI) 游戏文件 `Vanilla_zh_Hans_CN.xml`，来自 [mrobaczyk/civ6](https://github.com/mrobaczyk/civ6) 仓库。

## License

Apache-2.0