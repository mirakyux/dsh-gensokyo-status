# dsh-gensokyo-status

把 DeepSeek Harness 底部的蓝色「深度求索中」提示，以及 DS Bot 的运行字幕换成幻想乡风格文案。上方的工作阶段标题沿用 DSH 原文。

- `随机`：每轮在“少女祈祷中”和“少女折寿中”之间等概率选择一次。
- `少女祈祷中`：始终显示“少女祈祷中…”。
- `少女折寿中`：始终显示“少女折寿中…”。

“显示运行时间”默认开启，提示会显示为“少女祈祷中，用时 8分22秒…”。关闭后显示“少女祈祷中…”。计时沿用 DSH 或 DS Bot 原有的运行时间。

随机模式在同一轮运行期间保持稳定，不会随 DSH 的计时刷新来回跳动。可见提示与读屏状态会同步替换，选择结果保存在当前 DSH Profile 的浏览器本地存储中。

![幻想乡运行状态图标](./icon.png)

## 安装

在 DeepSeek Harness 中打开「插件」，选择从 GitHub 安装并输入以下地址。

```text
github:mirakyux/dsh-gensokyo-status
```

需要固定版本时，使用完整提交 SHA。

```text
git+https://github.com/mirakyux/dsh-gensokyo-status.git#<完整的 40 位提交 SHA>
```

安装启用后，在「设置 → 幻想乡运行状态」选择文案，并切换“显示运行时间”。

## 兼容性

- DeepSeek Harness `0.2.2-rc.3` 至 `0.2.2-rc.5`。插件声明范围为 `>=0.2.2-rc.3 <0.3.0`。
- DS Bot `0.3.10` 为可选插件。

插件依赖 DSH 和 DS Bot 的运行提示元素。相关界面结构在升级后发生变化时，插件可能需要适配。

## 隐私与权限

插件只在 DSH 页面内观察并替换运行提示文本，不访问网络、文件、会话正文、账号或密钥。

## 开发

```sh
npm test
npm run check
npm pack --dry-run
```

## 许可与声明

插件代码采用 [MIT License](./LICENSE)。插件图标取自用户提供的博丽灵梦同人图。东方 Project 及其角色相关权利归原权利人所有。

---

## English

Replaces the bottom running caption in DeepSeek Harness and DS Bot with Gensokyo-themed messages ending in an ellipsis. Choose a fixed message or let the plugin pick once per run. Elapsed time is shown by default and can be switched off in settings. Preferences are stored locally in the active DSH profile.

The plugin targets DSH `>=0.2.2-rc.3 <0.3.0`, makes no network requests, and does not read conversations, files, account data, or secrets.

This is an unofficial Touhou Project fan plugin and is not affiliated with Team Shanghai Alice, ZUN, or DeepSeek.
