# yutongdesign.art — Full Asset Audit & Upgrade Roadmap (V2)

_Updated: 2026-04-26 — supersedes parts of CONTENT_AUDIT.md (V1)_

> **V1 → V2 主要变化**：Accenture 角色定位从"Visual Campaign Designer"改成 **"GenAI Creative Technologist"**（Apple Note `ACCenture 匹配JD FOCUS` 里的真实 JD 关键词），MVP case study 组合相应调整。

---

## TL;DR — 3 个关键 insight

**1. Accenture 那个岗位是 GenAI Creative Technologist，不是普通 PD。** 关键词全是 ComfyUI / Weavy / Runway / HeyGen / ElevenLabs / **node-based environments** / repeatable workflows / art direction + craft + emerging tech / marketing & content creation。这意味着：你的 **ComfyUI 工作流**、**Six Thinking Hats Rebuild**、**ByteDance TikTok Filters**（AR）才是 hero case study；Synco-E / BEATROL 这些工业设计 case 是次要 supporting work。

**2. 你的资产体量比之前 V1 audit 估的大 3 倍。** 实际盘点：iCloud 20+ 项目文件夹（每个有 30-100 个原文件）+ T7 Shield 外接硬盘有完整 RCA + DJI + DaVinci + SKG 客户档案 + Figma 至少 3 个文件其中 ZHU-V2 是 **40-53 页** 完整 PDF portfolio + Notion 3 个 DB + Apple Notes 至少 25 个相关 + Eagle 库。**你不缺内容 —— 你缺的是筛选 + 重组叙事**。

**3. 你最强的没用过的牌是 Six Thinking Hats Rebuild。** Apple Note 里看到这是你刚开始的 active build：Next.js 15 + Spline 3D + LLM agents + Voice synthesis + Vercel AI SDK。这个项目**完美匹配** Accenture JD 的每一条要求（GenAI workflow / node-based thinking / production engineering / creative agents）。在 Vercel Builder's Night 还遇到了潜在 cofounder。**这才应该是首页 hero project**，不是 Synco-E。

---

## 资产全景图（8 个 source 实测）

| Source | 状态 | 主要内容 | 我能直接读吗 |
|--------|------|---------|-----------|
| **iCloud Design Hub** | ✅ 已扫 | 20+ 项目文件夹 + 18 个空 taxonomy 类别 + 2 个完成版 Portfolio PDF (BambooWind / SYNCOE) + IRP Graphic ZIP | 是 |
| **T7 Shield (TTBase)** | ✅ 已扫顶层 | RCA 全档案 / DJI 拍摄素材 / DaVinci 项目 / SKG 客户工作 / Designer-Jeff.library (Eagle) / 剪映文件 / Lightroom 库 | 是 |
| **Notion** | ✅ 已扫 | Design Projects DB (旧含 framer 图) + Projects DB (新) + 项目 myProjects2023 + 25+ 相关页 | 是（MCP 已连） |
| **Figma** | ✅ 已部分扫 | ALL Design Universe (skill tree 9 领域) + ZHU-V2 (40-53 页完整 portfolio) + Symposium-25 (campaign system) + 待发现更多 | 是（MCP 已连） |
| **Apple Notes** | ✅ 已扫 | Accenture JD analysis ⭐ / Six Thinking Hats Rebuild brief ⭐ / 伦敦两年上岸计划 / Linkedin Post draft / 横滨 CHI 2025 / 一堆 RCA RQ3 笔记 | 是（MCP 已连） |
| **Google Sheet (CMS)** | ❓ 未读 | Framer 老站的 CMS 表格（Gumlet+BedBunny 合并入口） | 需要 Google Sheets MCP，未连 |
| **Gumlet** | ❓ 未读 | 付费视频托管 — 你之前 Framer 站的视频源 | 需要 API key，未配 |
| **BedBunny** | ❓ 未读 | 图片+视频托管 | 需要 API key，未配 |

→ **8 个 source 我已能直接访问 5 个（iCloud / T7 / Notion / Figma / Apple Notes）**。Gumlet / BedBunny 你考虑要不要继续付费？如果以后内容存 Supabase Storage，这两个可以停了，或保留只作为视频 CDN（Mux / Vimeo / Vercel Blob 也都行）。

---

## 关键 Apple Notes 摘要（必读）

### `ACCenture 匹配JD FOCUS` ⭐

JD = **"GenAI Creative Technologist"** at Accenture. 关键短语：
- "defining the future of AI-enabled creative production"
- "combining creative judgment with hands-on technical expertise in generative AI tools"
- "high-quality, repeatable workflows for marketing and content creation"
- 工具栈：**ComfyUI / Weavy / Runway / HeyGen / ElevenLabs**
- 范围：social, digital, CRM, web, paid media, film/video
- 性质：**hybrid creative/technical role**

你已经做了 SWOT：
- ✅ Strengths: ComfyUI 列在 CV / ByteDance + HUAWEI 大厂经历 / Prompt Engineering
- ⚠️ Weaknesses: 没列 Runway/Weavy/HeyGen/ElevenLabs / 没体现 "scalable workflows" / 没量化 art direction 案例
- 💡 Opportunities: 重新包装 HUAWEI 设计系统为 "scalable workflow" / 加 Runway 项目 / 量化 ByteDance 数据
- ⚠️ Threats: midweight 经验门槛 / portfolio 质量门槛高 / 缺特定工具经验

### `🎩 Six Thinking Hats Rebuild` ⭐

毕业项目重做，**正在进行**。关键事实：
- Vercel Builder's Night 遇到 cofounder，对 education 角度有兴趣
- 现在不只是 demo，有 collab 可能
- Tech: Next.js 15 + TS + Tailwind + Spline + Vercel AI SDK v5 + Web Speech
- 6 个 hat agents（White/Red/Black/Yellow/Green/Blue），每个不同 voice 配置
- 总成本 £0（Vercel Hobby）
- Spline scene URL 已有

→ **这是你的 GenAI Creative Technologist 简历最有杀伤力的 weapon**，因为它**正在被你建造**。能拿出来给 Accenture 看到一个**进行中的 AI creative production workflow** + 真实 cofounder 兴趣，比任何静态 case study 都有说服力。

### `🫢Tasks — Yutong 伦敦两年上岸计划`

未读全文，但标题说明你有清晰的两年上岸 roadmap。建议把 Accenture 这个机会放到这个 roadmap 的优先级 1 位。

---

## Accenture-track 重新定位（取代 V1 推荐）

### 旧 V1 推荐（"Visual Campaign Designer" 假设）
~~HUAWEI / ByteDance / SKG / Symposium~~ — 这套 mostly 还对，但**优先级和叙事重心要调**。

### V2 推荐（"GenAI Creative Technologist" 实际 JD）

| 优先级 | 项目 | 角色 | 为什么对 GenAI Tech 加分 |
|-------|------|------|---------------------|
| 🥇 #1 | **Six Thinking Hats Rebuild** | Hero current project | LLM agents + voice synth (ElevenLabs 类) + Spline 3D + Vercel AI Gateway = **JD 每一条都打中** + 进行中 = 显示 "self-starter / explores and experiments" |
| 🥈 #2 | **ComfyUI Workflows Library** | 横向能力 demo | 直接命中 "ComfyUI / node-based environments / repeatable scalable workflows"。你 CV 里列了 ComfyUI，但**需要 visualize 出实际 node graphs + 输出案例**才有说服力。这是你 GitHub README 主页的重点内容 |
| 🥉 #3 | **ByteDance TikTok Filters** | 大厂 + AR + 真实数据 | "Designed and launched 2 filters / 1k+ users / 10k+ views / featured on official homepage" + 500M DAU 用户研究 + AR creative interaction = visual storytelling + content production for marketing 的最佳 case |
| #4 | **HUAWEI HarmonyOS Theme System** | 大厂 + scalable workflow | 119 icons launched + design system + 用户研究 → **重新叙事为 "repeatable workflow for content production at scale"** |
| #5 | **Symposium 25 Campaign** | Campaign system | Visual campaign + brand guideline + multi-channel (poster/manifesto/Eventbrite/IG/LinkedIn) — 是 "social, digital, web, paid media" multi-channel 的 textbook 例 |
| #6（备选）| **SKG+ Branding + amacontest** | 客户作品 + 国际 IP | 端到端落地 / CMS / 170+ works 管理 / 400+ teams 国际 contest |

**Synco-E / BEATROL** 移到 **archive** 或 **Industrial Design 子库**，不放 Featured —— 因为 GenAI Tech 岗位看到 BCI 工业设计会觉得"路径不一致"。它们对 PhD / R&D 申请才是核心。

### 关键叙事 reframe

你 CV 现在的弱点（Apple Note SWOT 里写过）是 **"single project outputs vs systematized production"**。每个 case study 写的时候要刻意把"我做了一个东西"的叙事改成 "**我建立了一套能反复使用的工作流，输出了 N 个 deliverable**"。

举例：
- ❌ HUAWEI: "Designed mobile widget and lock screen" → 听起来是单点设计
- ✅ HUAWEI: "Built a 119-icon system + theme template framework that scaled to mobile + watch face + lock screen + widget across HarmonyOS Theme Store, supporting designers across 4 product categories" → workflow + scale + reusability

---

## 全项目重排序（Tier A/B/C/D）

合并 Notion + iCloud + Resume 全数据后，所有项目分 4 层：

### 🅰 Tier A — Featured on Site (5-6 个)
首页 "Featured" 区，每个有完整 case study 详情页。

| 项目 | Source | 内容完整度 | Accenture 强度 |
|------|--------|----------|--------------|
| **Six Thinking Hats Rebuild** | Apple Note + Spline + 即将 GitHub | 🟡 进行中（关键：要在 deadline 前推到 demo-able） | 🟢🟢🟢 |
| **ComfyUI Workflows** | iCloud `runway《ISEE》/`、SP+AI+Collabration+Dynamic、digital legacy | 🟡 资产散落，需归集 | 🟢🟢🟢 |
| **ByteDance TikTok Filters** | iCloud（待找具体文件夹） + Resume 数据 | 🔴 站内零素材，需要从硬盘补 | 🟢🟢🟢 |
| **HUAWEI HarmonyOS Theme** | iCloud `Meta Station#元宇宙方案/华为主题渲染—早期文件夹/` | 🟢 有素材 | 🟢🟢 |
| **Symposium 25 Campaign** | Figma `Symposium-25` + RCA volunteering | 🟢 5 个 hero deliverable 已识别 (211:163 / 430:261 / 225:28 / 28:272 / 114:129) | 🟢🟢 |
| **SKG+ Web + amacontest** | T7 Shield `SKG+` + Notion + skgplus.cn | 🟢 已上线 | 🟢 |

### 🅱 Tier B — Campaign / Visual Library（时间轴 list 形态）
你说的 chronological library section 用这些填。每个项目 2-4 张图 + 一句话说明 + tag。

- 2025 — Symposium 25 collateral 各种延展 (海报 v1-v5 / Manifesto iterations / IG posts / LinkedIn / Eventbrite)
- 2025 — SKG+ Web Branding deliverables
- 2025 — Pulse-Wildfire Whisper（Wildfire whispers 2024 的 future-facing 版）
- 2024 — Wildfire Whispers 装置 (TouchDesigner + 5years 气候 CSV 数据可视化)
- 2024 — Neon NIKE concept visual
- 2023 — Poetic Form 宋韵诗形 (AIGC sculpture, Vimeo 1079210038)
- 2023 — Botanictrum 绿脉 (sensing installation)
- 2023 — Wind from Bamboo 共书竹风 (deep learning Chinese handwriting)
- 2022 — Walking Heaven 步天歌 (24 节气 astronomy interaction)
- 2022 — HUAWEI HarmonyOS Theme（如果做了 Tier A 完整 case study，这里只放精选 visual）
- 2021 — LUNACY 月球档案 (digital narrative web)
- 2020 — Meta Station HUAWEI metaverse concept (作为客户 ref)

### 🅲 Tier C — Archived Industrial / PD Track（不上 Accenture 站，但存档可用）

**注意**：这一组对 PhD / Industrial Design / Healthcare 申请仍是 hero。所以**不是删掉，是放到 archive 页**或独立 `/labs/` 路由。

- Synco-E BCI 电竞 (奖：IDA Silver+Bronze, EUPD Top Design, Spark Award + 脑电专利!)
- BEATROL 疲劳座舱 (Red Dot finalist + IDC + Sasaki 复现)
- GreenMove 绿途 (L5 自动驾驶 healthcare mobility, Healmove 视频在 T7)
- SmaTaste SOD121 (RCA Service Design + Sodexo)
- SprayScape 涂鸦空间计算
- CoCereb Agent IRP-P-R (RCA 在做的 AI education 项目)

### 🅳 Tier D — Creative Lab / Experiments（轻量 gallery）

- runway《ISEE》(Runway 实验)
- Mercury 音画互动钢琴
- Massbot 数字遗产 (MassBot Inc.)
- digital legacy
- Six Thinking Hats（如果 Tier A 还没 ready，先 stub 在这）

### 🅴 Tier E — Don't Ship Yet（在 0-Portfolio 或 archive 里继续做）

- 防疫教育（你说挪到其他页面）
- Achievements 9.5（T7 Shield 老存档）
- 各种本科未完成 idea

---

## 4-Phase 升级路线图

### Phase 0 — 紧急反假数据（**今天/明天，~1 hr**）

**目标**：站点立刻看起来不再像模板。

- [ ] Hero 替换：
  - 名字：定 brand "Julian Yutong Zhu"（CV 用这个）
  - "living in Chicago" → "living in London"（你在 RCA / 伦敦）
  - ROLES: ["Creative", "Fullstack", "Founder", "Scholar"] → 候选 `["Creative Technologist", "Designer", "Researcher", "Builder"]`
  - 背景视频：先用纯 CSS gradient 替代占位，**不要继续用别人的 mux 流**
- [ ] Stats 直接**删除整个 section**（Phase 2 再决定要不要回来）
- [ ] Contact:
  - 邮箱：julianyutongzhu@gmail.com 或者 hello@yutongdesign.art
  - LinkedIn: linkedin.com/in/yutongdesign
  - GitHub: github.com/geff1005
  - 删掉 Twitter & Dribbble（除非你常用）
- [ ] Navbar Resume 链接到 PDF（先用 `/public/resume.pdf` 暂时手动放）

→ **deliverable**：站点不再撒谎。1 hr 内。**我可以帮你直接改代码 commit + push**。

---

### Phase 1 — 内容架构 + Library section（**3-5 天**）

**目标**：站点结构改成支持时间轴 library + Featured case study + 专题分流。

- [ ] **决定 site map**（你来定）：
  - 推荐：Home（Hero + Featured 4-6 个 + Library timeline + About + Contact）+ /work/[slug] 详情页 + /labs（Industrial / R&D archive）+ /experiments（Tier D）
- [ ] 我**重写 Portfolio.tsx + components**：
  - 替换 SelectedWorks 硬编码 → 用 TS 数据文件 (Phase 2 再迁 Supabase)
  - 删 Journal 或改成 Writing
  - 删 Stats 或改成真数据
  - **新增** `<Library />` 组件 (chronological list)
  - **新增** `<Capabilities />` 组件 (从 ALL Design Universe 移植 9 领域 skill tree)
- [ ] 创建 `/work/[slug]` 动态路由（PD case study 模板）
- [ ] Site 上线 V2 视觉

→ **deliverable**：站点已经有完整结构 + 用 hardcoded 数据可以填充进去。

---

### Phase 2 — 内容生产 Sprint（**1-2 周**）

**目标**：把 5-6 个 Tier A 项目的真实内容写出来 + 上线。

每个 case study 按这个顺序生产（参考 V1 audit 第 4 节 7-section 框架，但 GenAI track 专属调整）：

1. **Six Thinking Hats Rebuild**（hero project，需要 deploy 一个能玩的 demo + case study 页）
2. **ComfyUI Workflows**（截图 5-10 个你做过的 node graph + 渲染输出，开 GitHub repo `comfyui-workflows`）
3. **ByteDance TikTok Filters**（找硬盘里的素材 + 写 case study + 录 screen recording）
4. **HUAWEI HarmonyOS Theme**（重新叙事为 scalable workflow，从 `Meta Station#元宇宙方案/华为主题渲染—早期文件夹/` 找资产）
5. **Symposium 25**（5 个 hero deliverable 已知 node ID，导出后排版）
6. **SKG+ + amacontest**（已上线项目，写 case study 比较快）

每个项目要补的 4 块内容（Apple Note SWOT 里强调的）：
- ✅ **Constraints list**（5-8 条具体限制）
- ✅ **Quantified outcomes**（数字 + scale）
- ✅ **Workflow / system framing**（"我建了一套能复用的工作流"，不是"我做了一个东西"）
- ✅ **Lessons learned**（一个具体失败 + 反思）

→ **deliverable**：站点真实内容上线。

---

### Phase 3 — Supabase + 自动化（**1-2 周**）

**目标**：内容从 hardcoded TS 文件迁到 Supabase，让你以后改内容不用 commit 代码。

- [ ] 起 Supabase 项目（free tier）
- [ ] 跑 migration（V1 audit §6 schema 已经设计好，根据 V2 调整：补 case study 详情字段 + library item 字段）
- [ ] 图片资产从 `framerusercontent.com` 下载 → Supabase Storage（自动化脚本）
- [ ] Next.js 改用 ISR 拉数据
- [ ] Notion → Supabase 同步脚本（可选 — 你 Notion 是 source of truth 的话）
- [ ] Vercel Deploy Hook（内容改完触发 rebuild）

→ **deliverable**：Supabase Studio 里改内容，60 秒后站点自动更新。

---

### Phase 4 — Build in Public（**持续，每周 1-2 hrs**）

**目标**：让"做"的过程本身成为 Accenture 的 social proof。

- [ ] **GitHub profile README** (`geff1005/geff1005`)
  - Hero 一段定位 + 链接到 portfolio + LinkedIn + Email
  - Pinned repos:
    - `yutongdesign` (portfolio source)
    - `comfyui-workflows` (ComfyUI experiments)
    - `six-thinking-hats` (Six Hats Rebuild repo，Public)
    - 1-2 个其他 build-in-public 项目
- [ ] LinkedIn 每周 1 篇 build update（你已经在 Apple Notes 起草过 LinkedIn Post draft）
- [ ] 给 Six Thinking Hats / ComfyUI 等项目录 video walkthrough 放 YouTube / Vimeo

→ **deliverable**：Accenture 招聘看到你 GitHub / LinkedIn 的活跃度 = "naturally curious / future-focused / explores and experiments" — 直接命中 JD soft skills。

---

## 你的 4 个策略思路 → 我的执行映射

| 你的思路 | 我的对应 | 在哪个 Phase |
|---------|--------|------------|
| 1. 内容审计与 PD Case Study 筛选 | Tier A/B/C/D 分级（本文档第 4 节） | Phase 1-2 |
| 2. 案例库（图床 / Live Demo Library） | `<Library />` 组件 + Supabase Storage | Phase 1 + 3 |
| 3. 设计内容宇宙（Figma 可视化） | `<Capabilities />` 组件移植 ALL Design Universe 9 领域 + 你继续在 Figma 扩展，我之后再 sync | Phase 1 + 持续 |
| 4. Notion DB 任务管理 + GitHub build in public | Notion 项目 sync schema + GitHub README 主页 + ComfyUI repo | Phase 4 |

---

## 你硬盘 / iCloud 整理建议（第三次重申，因为很重要）

iCloud `0-作品集分类/` 下面 18 个空 taxonomy 文件夹是个**已经做好的好结构**——你只是没把现有项目 sort 进去。

建议**今晚或明早做一次 1 hr sort**：
1. 把 iCloud `Design hub/` 顶层每个项目文件夹的 thumbnails 拷一份到对应 `0-作品集分类/` 类别
2. T7 Shield 上的 archive 不动，只把"在用"的素材路径登记到 Notion DB

不需要移动原始大文件 —— 只需要**让 thumbnails 进对应类别**，方便以后导出 Library 时按类别取。

---

## 接下来我建议的 step-by-step

### Step 1 — 你今天/明天做（10-30 min total）：

**A. 决定 4 件事**（每件 30 秒）：
1. Brand 名: `Julian Yutong Zhu` ✓ (已在 CV 定)
2. Hero 4 个角色词：`["Creative Technologist", "Designer", "Researcher", "Builder"]` ok 吗？还是你想换？
3. Stats section 删掉？还是改真实数字？
4. Six Thinking Hats Rebuild 的 deadline：Accenture 面试前还是后？这影响是否能放 Featured

**B. 给我两份资产**（如果手上有）：
- 现成的 Resume PDF（你已经传了 `JulianZhu Resume4-21-5.pdf` ✓）
- ByteDance TikTok Filter 的 screen recording 或截图（路径告诉我，我去取）

### Step 2 — 我做（说完上面立刻开始）：

完成 **Phase 0**：替换站点所有假数据 + 删 Stats + 改邮箱/social 链接 + commit + push（10-15 min，立刻看到效果）

### Step 3 — 我们一起做：

Phase 1 设计：我画 site map + 组件 wireframe，你 review，定下来后我开始改代码。

---

## 附：本次盘点信息源

- Resume: `/uploads/JulianZhu Resume4-21-5.pdf`
- Notion 关键 DB: Design Projects DB / Projects DB / 项目 myProjects2023
- Apple Notes 关键: `ACCenture 匹配JD FOCUS` / `🎩 Project: Six Thinking Hats Rebuild` / `🫢Tasks — Yutong 伦敦两年上岸计划`
- Figma 关键文件: `ALL Design Universe (3UWWwCbnRRubuvUgeAmb5g)` / `00-ZHU-V2 (lvGC5pqs9F8fNdYmlTvKq4)` / `Symposium-25 (4VUeNNXEkPAHVYOBluXN7O)`
- iCloud Design Hub: 20+ 项目文件夹
- T7 Shield (TTBase): RCA / DJI / DaVinci / SKG+ / Designer-Jeff.library
- GitHub: `geff1005/yutongdesign`
- Vercel: `judeforlove13-4509s-projects/yutongdesign`
- Live: https://yutongdesign.art

---

_文档结束。Phase 0 操作我可以马上开始 — 你只要回答上面 Step 1 的 4 个问题。_
