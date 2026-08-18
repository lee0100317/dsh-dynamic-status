# @lee0100317/dsh-dynamic-status

> DSH 插件：动态替换思考状态文字为《文明 6》科技/人文引言，随机轮换，妙趣横生。

[![dsh-plugin](https://img.shields.io/badge/dsh-plugin-blue)](https://github.com/lee0100317/dsh-dynamic-status)
[![license](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

## 效果

每次 AI 思考时，底部的 shimmer 状态文字不再显示枯燥的 "Deep diving..."，而是随机展示一条《文明 6》中的经典引言：

> "我不相信星座。我是射手座，天生多疑。——亚瑟·查理斯·克拉克"  
> "写作很简单。你所要做的就是把错误的词语划掉。——马克·吐温"  
> "正常人认为东西没坏就别修它。工程师认为东西没坏是它功能太少。——斯科特·亚当斯"  
> "人都会犯错，但是想真正把事情搞砸你还需要一台计算机。——保罗·埃利希"  
> "I'll be back."

- **207 条**引言，数据来源于 Firaxis 官方 `Vanilla_zh_Hans_CN.xml`
- 每 **4–6 秒**随机轮换，不重复上一条
- 零配置，安装即用

## 安装

```bash
# 1. clone 到本地
git clone git@github.com:lee0100317/dsh-dynamic-status.git ~/dsh-dynamic-status

# 2. 编辑 ~/.dsh/profiles/web/package.json，添加依赖：
#    "dependencies": {
#      "@lee0100317/dsh-dynamic-status": "link:~/dsh-dynamic-status"
#    }

# 3. 在 dsh.profile.bundles 数组中追加：
#    "@lee0100317/dsh-dynamic-status"

# 4. 安装并重启 DSH
cd ~/.dsh/profiles/web && pnpm install
```

## 原理

基于 DOM MutationObserver 劫持 TurnStatus 组件：

- 检测 `<div role="status" aria-live="polite">` 的 shimmer 动画样式
- 替换文本节点为随机引言
- 通过 `ctx.effect` 管理生命周期，自动清理

## 数据来源

引言提取自《文明 6》(Sid Meier's Civilization VI) 游戏文件 `Vanilla_zh_Hans_CN.xml`，来自 [mrobaczyk/civ6](https://github.com/mrobaczyk/civ6) 仓库。

## License

MIT