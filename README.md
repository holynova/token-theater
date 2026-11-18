<p align="right"><a href="README.en.md">English</a></p>

<p align="center">
  <img src="./assets/readme/hero.svg" width="100%" alt="Token Theater 令牌剧场 — LLM 流式输出速度模拟：iPhone 与 CLI 双屏对比，30 token/s 对 120 token/s">
</p>

<p align="center">
  <a href="https://xiaosang.cc/token-theater/">▶ 在线体验</a>
  ·
  <a href="https://github.com/holynova/token-theater">GitHub 仓库</a>
</p>

Token Theater 是一个不需要 API Key 的 LLM 流式输出模拟器：把同一份回答放在两个终端里同步播放，对比 token/s、首字等待、思考状态和传输节奏如何影响主观体验。四个终端界面、8 个场景预设，全部用预置内容演示，不调用任何模型。

## 截图

<p align="center">
  <img src="./assets/readme/screenshot.png" width="100%" alt="双屏对比：左侧 iPhone ChatGPT 以 30 token/s 输出，右侧 CLI Claude Code 以 120 token/s 输出，同一份回答耗时 11.1 秒对 2.8 秒">
</p>

## 功能

- **四个终端**：iPhone · ChatGPT、CLI · Claude Code、Web · Chatbot、macOS · Codex，各自保留本平台的界面语言（动态岛、终端提示符、窗口控制按钮等）。
- **双屏同步对比**：两端各选终端与速度，同步播放同一份内容；也可切单屏专注一端。
- **速度独立可调**：每端 1–300 token/s，快捷档 10 / 30 / 60 / 120 / 240。
- **8 个场景预设**：日常对话、深度思考、结对编程、英文长文、搜索与工具、网络不太好、结构化数据、实时语音字幕。
- **四种内容**：中文、英文、TypeScript 代码、JSON；三档输出长度。
- **回答方式**：直接回答、思考摘要、仅思考状态、模拟工具调用。
- **传输节奏**：连续、分块、周期性网络卡顿；首包延迟与思考等待独立可调。
- **播放控制**：暂停、继续、重播；配置可生成 URL 分享。
- **实时指标**：首字等待、已输出 Token 数、回答耗时，三项实时显示。

## 说明

- 输入提示词只修改界面中的展示问题，回答由预置内容决定，不会调用 LLM。
- 内置 token 单位是确定性的演示分词，不声称匹配任何实际模型的 tokenizer。
- 示例思考摘要不是模型内部推理；语音场景仅模拟字幕，没有音频输出。
- 品牌界面是独立的风格演示，可能与产品当前版本不同。

## 本地运行

纯静态 HTML/CSS/JavaScript，零构建、零依赖：

```bash
npm run dev
# 打开 http://localhost:4317
```

字体在线加载，加载失败时使用系统字体。

## 测试

```bash
npm test            # 4 项核心计时测试，全部通过
node --check dist/app.js
```

测试覆盖中英混合文本无损切分、首包与思考分离、批量输出尾批刷新、网络停顿。

## 技术

- 确定性分词与计时引擎（`dist/engine.js`），同一配置每次播放结果一致。
- 桌面与 390px 移动端均已验证；移动端双屏上下排列。

```
dist/index.html       界面与原理说明
dist/style.css        四种终端与响应式样式
dist/app.js           示例、场景、交互、分享
dist/engine.js        确定性分词与计时函数
tests/engine.test.js  计时边界测试
```

## 参考

- [OpenAI reasoning models](https://developers.openai.com/api/docs/guides/reasoning)
- [Anthropic Claude Code](https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously)
