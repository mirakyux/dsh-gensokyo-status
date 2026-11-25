# dsh-gensokyo-status

把 DeepSeek Harness 的主运行提示替换成幻想乡风格文案，并在输入框下方提供三种模式：

- `随机`：每轮在“少女祈祷中”和“少女折寿中”之间等概率选择一次。
- `少女祈祷中`：始终显示“少女祈祷中”。
- `少女折寿中`：始终显示“少女折寿中”。

随机模式在同一轮运行期间保持稳定，不会随 DSH 的计时刷新来回跳动。可见提示与读屏状态会同步替换，选择结果保存在当前 DSH Profile 的浏览器本地存储中。

![幻想乡运行状态图标](./icon.png)

## 安装

在 DeepSeek Harness 中打开“插件”，选择从 GitHub 安装，然后输入：

```text
github:mirakyux/dsh-gensokyo-status
```

也可以使用固定提交安装，以获得可复现的版本：

```text
git+https://github.com/mirakyux/dsh-gensokyo-status.git#<完整的 40 位提交 SHA>
```

安装启用后，在聊天输入框下方的选择器中切换模式。

## 兼容性

- 已适配：DeepSeek Harness `0.2.2-rc.3`
- 声明范围：`>=0.2.2-rc.3 <0.3.0`

DSH 暂未为主运行提示提供专用 Slot，因此插件监听官方组件的稳定标记 `[data-chat-running]`。DSH 升级后如果该标记发生变化，插件需要同步适配。

## 隐私与权限

插件只在 DSH 页面内观察并替换运行提示文本，不访问网络、文件、会话正文、账号或密钥。

## 开发

```sh
npm test
npm run check
npm pack --dry-run
```

## 许可与声明

代码和仓库内图标采用 [MIT License](./LICENSE)。这是非官方的东方 Project 同人插件，与上海爱丽丝幻乐团、ZUN 或 DeepSeek 官方无关。东方 Project 及其角色相关权利归原权利人所有。

---

## English

Replaces the main DeepSeek Harness running indicator with one of two Gensokyo-style messages. Choose a fixed message or let the plugin pick once per run. The selected mode is stored locally in the active DSH profile.

The plugin targets DSH `>=0.2.2-rc.3 <0.3.0`, makes no network requests, and does not read conversations, files, account data, or secrets.

This is an unofficial Touhou Project fan plugin and is not affiliated with Team Shanghai Alice, ZUN, or DeepSeek.
