# Token Theater
<!-- impeccable:product-schema 1 -->
## Platform
web
## Purpose
用户要求新建多场景 LLM 输出速度演示网站，复现 ChatGPT iPhone、Claude Code CLI、网页 chatbot、Codex macOS app 的界面语言。支持中文、英文、代码，思考与直接输出。
## Constraints
所有模型输出均为预置演示，非真实测速；思考区为示例摘要。token 计数为确定性的演示分词单位，不声称匹配任何实际模型 tokenizer。
## Open decisions
用户确认面向展示讲解，重点直观对比不同速度和终端。技术选型暂采用无构建依赖的 HTML/CSS/JS，便于本地预览与发布。
