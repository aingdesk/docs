---
sidebar_position: 1
description: 如何更好的使用知识库
---
# 如何更好的使用知识库
很多人在一开始可能并不明白知识库的使用场景是什么，导致你觉得知识库没有用，那你的场景真的是知识库的使用场景吗？举例说说常见的几个误区：
1. 知识库能总结知识库里所有文档的内容吗？
不能，知识库的侧重点是检索和问答，知识库的内容是基于你发送的问题中的关键词去知识库中检索相关的文档，然后根据这些文档生成回答，他并不是一个文档的总结器。如果你要总结全文，建议直接通过上传附件喂给大模型。
```markdown
明确功能边界
✔️ 核心能力：关键词检索 + 上下文问答
✔️ 最佳场景：基于具体问题的精准信息提取（如"广东省2023年GDP增长率是多少？"）
❌ 避免场景：开放式总结（如"请概括所有文档内容"），建议使用大模型直接分析文档
```
2. 全省和xx省是一个词吗？
不是，导入了某个知识库，知识库内容是全省共有xxxxxx，你问广东省共有xxxxxx，知识库可能会宕机的哦，只是简单举个例子，需要注意关键词的使用。
```markdown
原始内容和优化后
- "各市数据" → "珠海、东莞2023年规上工业增加值"
- "文件内容" → 《广东省科技创新十四五规划》中人工智能专项经费
- "最新政策" → 2024年7月生效的广州人才落户新政
```
3. 待补充

## 大模型喜欢什么样的文件？
一、**推荐优先级高的格式**
1. **Markdown（.md/.markdown）**
   - ✅ 最适合：天然带标题、列表、代码块等结构，AI理解最轻松
   - 技巧：用`## 二级标题`划分章节，代码块用三个反引号包裹（```代码```）
   - 示例：每段文字不超过5行，用`---`分隔不同主题

2. **纯文本（.txt/.log）**
   - ✅ 简单直接：避免复杂格式，每段文字用空行分隔
   - 技巧：长文本每200-300字插入`[换行分隔符]`，类似读书时的段落划分

3. **结构化文档（.docx/.pptx）**
   - ✅ 善用样式：标题用"标题1/标题2"样式，列表用项目符号
   - 注意：删除页眉页脚/水印，PPT每页文字不宜超过10行

二、**需要特别注意的格式**
- **表格数据（.xlsx/.csv）**
  - 保留表头：明确标注"姓名|年龄|职业"等列名
  - 技巧：每张表单独存放，用`==== 员工表 ====`这样的说明开头
  - 必要时建议用Markdown语法格式化

- **PDF/网页（.pdf/.html）**
  - 优先选择文字版PDF，扫描件需要先用OCR转文字
  - 网页保留正文，删除广告/导航栏，用`>>> 章节标题 <<<`标记重点

- **代码/配置（.json/.conf）**
  - 添加注释说明：在文件开头用简单文字描述用途
  - 示例：用`# 服务器配置`作为区块开头，相关配置集中存放

三、**通用黄金法则**
1. **结构清晰化**
   - 像写书一样组织内容：主标题 > 子标题 > 段落
   - 示例：
     ```
     如何泡茶
     ==========
     准备工具
     ----------
     - 茶壶
     - 茶叶...
     ```

2. **自然分隔技巧**
   - 用`---`或`***`分隔大章节
   - 用空行分隔小段落
   - 表格/代码前后留空行

3. **避坑指南**
   - 避免超大文件：单文件建议不超过20页
   - 图片/扫描件：确保已转文字
   - 特殊符号：删除火星文符号如「※♨」

四、**不推荐的用法**
- ❌ 全篇无分段的长文本（超过500字无换行）
- ❌ PPT内嵌过多图片未配文字说明
- ❌ Excel表格合并单元格/复杂公式
- ❌ PDF扫描件直接上传不转文字