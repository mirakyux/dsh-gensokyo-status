# dsh-gensokyo-status

把 DeepSeek Harness 底部蓝色运行提示前的小鲸鱼换成东方角色的动态标志。灵梦的大蝴蝶结轻轻摇摆，琪露诺的冰晶缓缓旋转。图标使用各自的主题色，也支持 DS Bot 的运行提示。

在「设置 → 幻想乡运行状态 → 运行角色」固定选择角色，或保留默认的「每轮随机」。共有 184 个图标选项，包含 180 个角色条目和 4 种爱丽丝的人偶。可以按中文名、作品或标志物搜索，并在设置里预览动画。同一轮运行中，计时刷新和文案切换都保留本轮角色。开启系统的“减少动态效果”后，标志以静态显示。

![博丽灵梦、魂魄妖梦和琪露诺的动态标志预览](./assets/preview.gif)

运行文案可单独设置。上方的工作阶段标题沿用 DSH 原文。

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

安装启用后，在「设置 → 幻想乡运行状态」设置角色、文案和运行时间。

## 兼容性

- DeepSeek Harness `0.2.2-rc.3` 至 `0.2.2-rc.5`。插件声明范围为 `>=0.2.2-rc.3 <0.3.0`。
- DS Bot `0.3.10` 为可选插件。

插件依赖 DSH 和 DS Bot 的运行提示元素。相关界面结构在升级后发生变化时，插件可能需要适配。

## 隐私与权限

角色数据和图标内置于插件。运行时在 DSH 页面内更新状态图标和文案，支持离线使用。

## 开发

```sh
npm run build
npm test
npm run check
npm pack --dry-run
```

## 许可与声明

插件代码和原创角色线条图标采用 MIT 许可。插件封面取自用户提供的博丽灵梦同人图。东方 Project 及其角色相关权利归原权利人所有。[MIT License](./LICENSE) · [角色名录与图标说明](./assets/CREDITS.md)

---

## English

Replaces the running indicator in DeepSeek Harness and DS Bot with an animated Touhou character emblem. Search by character, work, or motif and preview your choice, or pick a random emblem once per run. The caption has its own fixed and random modes. Elapsed time is shown by default. The icons respect the system’s reduced-motion setting.

The plugin targets DSH `>=0.2.2-rc.3 <0.3.0`, makes no network requests, and does not read conversations, files, account data, or secrets.

This is an unofficial Touhou Project fan plugin and is not affiliated with Team Shanghai Alice, ZUN, or DeepSeek.
