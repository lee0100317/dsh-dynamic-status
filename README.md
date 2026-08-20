# @lee0100317/dsh-dynamic-status

> DSH 插件：动态替换思考状态文字为《文明 6》科技/人文引言，随机轮换，妙趣横生。

[![dsh-plugin](https://img.shields.io/badge/dsh-plugin-blue)](https://github.com/lee0100317/dsh-dynamic-status)
[![license](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

## 效果

每次 AI 思考时，底部的状态文字不再显示枯燥的 "Deep diving..."，取而代之的是 TUI 风格盲文 spinner + 蓝色《文明 6》经典引言：

> `⠼ 我不相信星座。我是射手座，天生多疑。——亚瑟·查理斯·克拉克`  
> `⠙ 写作很简单。你所要做的就是把错误的词语划掉。——马克·吐温`  
> `⠹ 正常人认为东西没坏就别修它。工程师认为东西没坏是它功能太少。——斯科特·亚当斯`

- **207 条**引言，数据来源于 Firaxis 官方 `Vanilla_zh_Hans_CN.xml`
- ⠼ 盲文 spinner 每 200ms 旋转，示意活动中
- 每 **10–15 秒**随机轮换引言，不重复上一条
- 深蓝纯色 (`rgb(30, 65, 170)`)，无动画，不干扰阅读
- **自动适配系统深色模式**：深色背景下切换为浅蓝 (`rgb(130, 175, 255)`)，确保可读性

## 安装

```bash
dsh plugin --profile web add git+ssh://git@github.com/lee0100317/dsh-dynamic-status.git
```

重启 DSH 即可。`cordis.patch.yml` 会自动注册到 bundle 层，无需手动编辑 bundles 数组。

## 原理

基于 DOM MutationObserver 劫持 TurnStatus 组件：

- 检测 `<div role="status" aria-live="polite">` 的 shimmer 动画样式
- 覆盖 inline style 杀死扫光，换为纯蓝色文字
- 盲文 spinner 200ms 循环旋转，作为活动指示器
- 10–15s 慢速轮换引言，通过 `ctx.effect` 管理生命周期

## 数据来源

引言提取自《文明 6》(Sid Meier's Civilization VI) 游戏文件 `Vanilla_zh_Hans_CN.xml`，来自 [mrobaczyk/civ6](https://github.com/mrobaczyk/civ6) 仓库。

## License

MIT