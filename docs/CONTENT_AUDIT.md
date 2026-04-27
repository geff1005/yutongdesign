# Content Audit — yutongdesign.art

_Generated: 2026-04-26 · Source: code repo + Notion (Design Projects DB + Projects DB) + havananguyen.com PD case study framework_

---

## TL;DR — 你今天要做的决定

1. **目标定位**：站点首要服务 **Product Designer 求职面试**。次要：Creative/Art 作品展示。两条线**必须分开**，别混在同一个 case study 框架里。
2. **MVP — 3 个 PD case studies 必上**：**Synco-E** (BCI 电竞，2023) → **BEATROL** (L4 自动驾驶 HMI，2023) → **SprayScape** (空间计算街头艺术，2025)。这 3 个在你 Notion 里内容最完整、PD 叙事最强。
3. **Creative work 走轻量格式**（不是 PD case study）：Wildfire-whispers / Botanictrum / Wind-from-bamboo / Poetic-form / LUNACY / Neon-NIKE 等用 gallery 卡片展示，每个一段简短描述 + 视频/图。
4. **ComfyUI / 实验性/Motion design** → **不上主站，走 GitHub README 主页 + Dribbble**。
5. **当前所有组件的内容都是占位假数据**，没有一个连到你 Notion 的真项目。需要全部替换。
6. **数字撒谎警告**：Stats 组件写着"20+ Years Experience / 200% Satisfied Clients"——你 Notion 里写的是 12 年经验，且 PD 面试这种数字会被秒识破，必须改真实数据。

---

## 1. 当前组件占位符审计

站点结构：`Portfolio.tsx` 串了 7 个组件。每个组件的真实内容缺口如下。

### 1.1 `LoadingScreen` — 暂时不用动
- 现状：动画 word 在 `["Design", "Create", "Inspire"]` 之间切换 + 进度条。
- 建议：保留。这是装饰，不需要内容。
- 可选改进：把 `WORDS` 换成跟你定位相关的词，比如 `["Reframe", "Explore", "Create", "Catalyse"]`（来自你 Design Projects DB 里已有的 4 个流程字段）。

### 1.2 `Hero` — ⚠️ 需要 3 处真内容 + 1 个视频替换
| 字段 | 现状（占位） | 真实内容来源 | 优先级 |
|------|-------------|------------|--------|
| `ROLES` 数组 | `["Creative", "Fullstack", "Founder", "Scholar"]` | 决策：PD 面试要 PD 词，建议改成 `["Product Designer", "Creative Technologist", "Researcher", "Generalist"]` | P0 |
| `<h1>` 名字 | "Julian Zhu" | 你叫 Yutong Zhu / Julian Zhu？需要确认你想用哪个 brand | P0 |
| 副标题 | "A [role] living in Chicago" | "Chicago" 对吗？还是别的城市？ | P0 |
| 描述 | "Designing seamless digital interactions by focusing on the unique nuances which bring systems to life." | 通用 BS。建议从 Notion `Designer Portfolio` 页（你写的 "12 years experience...") 那段提炼真实定位 | P0 |
| HLS 视频 | `https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8` | **这是别人的视频**——某个 demo 模板里的。必须换成你的 reel 或代表作蒙太奇。建议用 Gumlet / Mux 上传你的 hero reel | P0 |

### 1.3 `SelectedWorks` — ⚠️ 整个 PROJECTS 数组要重写
现状：硬编码 4 个假项目（Automotive Motion / Urban Architecture / Human Perspective / Brand Identity），所有 `href="#"` 不通。

替换方案：用你 Notion 的 **3 个 MVP PD case studies**（详见第 3 节）。
- 每个卡片需要：`title` / `slug` / `thumbnail image (1200x900 推荐)` / `链接到 /work/[slug]` / `tag (Project Type)`
- 现有 bento span `7/5/5/7` 适合 4 个 — 也可以改成 3 个等宽 + 1 个 "View all"

### 1.4 `Stats` — ⚠️ 数字必须改真实
| 现状 | 问题 | 改成 |
|------|------|------|
| 20+ Years Experience | 你 Notion 写的是 12 yrs | `12+ Years` 或者直接删掉年限改成更具体的数字 |
| 95+ Projects Done | 看你 Notion 大概 20-30 个能算 portfolio 项目 | 真实数字，e.g. `25+ Projects` |
| 200% Satisfied Clients | 数学上没意义，PD 面试官秒识破 | 删掉，或换成 `5+ Industries` / `3 Awards` 等可验证数据 |

**建议直接删掉这个 section**——PD 面试更看 case study 深度，bullshit 数字反而扣分。如果留，改成：
- `12 yrs` Practice
- `7` Project Types （Design Futures / Social / Media / Product / Service / UI/UX / Art Direction —— 你 Notion 里的 7 个分类）
- `IDA Silver+Bronze 2023`（来自你 Notion "06-荣誉奖项" 页）

### 1.5 `Journal` — ⚠️ 假博客内容
现状：4 篇假文章 ("On the craft of microinteractions" 等)。

3 个选项：
- **A. 删掉这个 section**（推荐 MVP 阶段）—— PD 面试不需要博客，少一个空 section 比假博客好。
- **B. 改成"Research & Writing"**——你有 PhD 申请材料、Statement of Objectives 这些写作可以拿来用。展示 academic 一面。
- **C. 留位置等以后**——把链接指向你 Notion public 页或 Medium。

### 1.6 `Explorations` — ⚠️ 6 个空卡片
现状：6 个 "Study 01-06" 占位卡片，parallax 滚动效果做得很好但内容是假的。

这个 section 适合放 **Creative/Art track** 的非 PD 作品。建议填：
- Wildfire-whispers (你 Notion: 2 个 Vimeo 视频)
- Botanictrum
- Wind-from-bamboo
- Poetic-form
- LUNACY
- Neon-NIKE

每个只需要一张缩略图（你 Notion 已经有 framerusercontent.com 的图，可以下载迁移到 Supabase Storage）+ 标题，点击放大看视频/图。

### 1.7 `Contact` — ⚠️ 邮箱、social、视频都假
| 字段 | 现状 | 真实 |
|------|------|------|
| Marquee 文字 | "BUILDING THE FUTURE" | 你想说什么？常见选择：邮箱本身循环 / "Open to Product Design roles 2026" |
| 邮箱 | hello@julianzhu.com | 你的真邮箱（judeforlove13@gmail.com 还是要个 hello@yutongdesign.art？） |
| Socials | Twitter/LinkedIn/Dribbble/GitHub 全部 `href="#"` | 真实 URL：`linkedin.com/in/[你的]`、`github.com/geff1005`、`dribbble.com/[你的]` |
| 背景视频 | 同 Hero 用了别人的 mux | 同上，需要换 |
| Footer copy | © 2026 Julian Zhu | Yutong Zhu 还是 Julian Zhu 二选一 |
| Available bar | "Available for projects" | 改成 "Open to Product Designer roles" 更精准 |

### 1.8 `Navbar`
现状：Home / Work / Resume 三个链接。Resume 没指向任何东西。

需要：
- "Resume" 链接到一个 PDF（放 `/public/resume.pdf` 或 Supabase Storage）
- 考虑加 "About" 链接 — PD 面试官 100% 会想看你背景
- 如果保留 Journal/Writing，再加一个

---

## 2. Notion 项目清单（按完整度 + PD 相关度排序）

从 **Projects DB**（newer，Feb 2026）和 **Design Projects DB**（older，有 framer 图片资产）合并去重后，共 **20 个独立项目**。

### 🅰 Tier A — PD 面试主推（5 个，按推荐度）

| # | 项目 | 年份 | Type | Featured | 内容完整度 | PD 强度 | 备注 |
|---|------|------|------|---------|-----------|---------|------|
| 1 | **Synco-E** 脑波电竞训练仪 | 2023 | Product Design | ✅ | 🟢 High | 🟢 强 | 8 张 framer 图、Quote、Project Details 都有；BCI + 神经反馈；研究问题清晰；团队协作 |
| 2 | **BEATROL** L4 安全人车协同 | 2023 | Service/Experience Design | ✅ | 🟡 Mid | 🟢 强 | Vimeo 视频在；HMI 系统设计、自动驾驶疲劳干预；研究问题强 |
| 3 | **SprayScape** 街头艺术空间计算 | 2025 | Service Design | ✅ | 🟢 High | 🟢 强 | 4 张 framer 图、Quote 完整；Spatial Computing + AR + 社区调研 |
| 4 | **CoCereb** AI 学习未来 | 2026 | Design Futures | ❌ | 🔴 Low | 🟢 强 | Notion 里基本空的，但 topic 很新（"教育未来 + AI"），如果有图可以快速补 |
| 5 | **SmaTaste** | 2025 | Service Design | ❌ | 🔴 Low | 🟡 中 | 内容空白，但 Service Design + AI + 数据驱动 tag 适合 PD |

### 🅱 Tier B — Creative/Art Track（gallery 卡片展示，不做 PD case study）

| 项目 | 年份 | Type | 资产 |
|------|------|------|------|
| Wildfire-whispers | 2024 | Interaction installation | 2× Vimeo |
| Botanictrum 绿脉 | 2023 | Sensing installation | Vimeo + 2 framer 图 |
| Wind-from-bamboo 脉动 | 2023 | Deep learning installation | Vimeo + 2 framer 图 |
| Poetic-form 宋韵诗形 | 2023 | AIGC sculpture | Vimeo + 5 framer 图 |
| LUNACY 月球寂静档案 | 2021 | Digital narrative web | Vimeo + 5 framer 图 |
| Walking Heaven | 2022 | Astronomy interaction | Vimeo + 2 framer 图 |
| Neon-NIKE | 2024 | Concept visual | 2 framer 图 |
| Massbot-inc | 2023 | Speculation Design (AI afterlife) | 2 framer 图 |
| Pulse (Wildfire 演化版) | 2025 | Design Futures | 缺资产 |

### 🅲 Tier C — 商业/客户作品（独立 section 或合并）

| 项目 | 年份 | Type | 备注 |
|------|------|------|------|
| Meta Station 元宇宙能量站 | 2020 | UI/UX | HUAWEI 客户作品（早期） |
| SKG+ Web Branding | 2025 | UI/UX | SKG+ 客户作品 |
| GreenMove 绿途 | TBD | Design Futures | L5 自动驾驶（似乎和 BEATROL 接近，可能合并） |

### 🅳 Tier D — 不上主站，走 GitHub/Dribbble

- ComfyUI workflows / AIGC 实验
- Motion design 短片（Eagle 库里的）
- 旧的硬盘里 university 时期的 product design assignments

---

## 3. 推荐 MVP：3 个 PD Case Study + 1 个 Gallery + 1 个 About

### MVP 站点结构（建议）

```
/                          # Home
  - Hero (你的真定位)
  - Featured Work (3 个 PD case study 卡片)
  - Explorations (Tier B 9 个 creative 项目，gallery)
  - About (简短，配头像 + 关键履历)
  - Contact

/work/synco-e              # PD case study 1 — Tier A
/work/beatrol              # PD case study 2 — Tier A
/work/sprayscape           # PD case study 3 — Tier A
/work/[other-pd-slugs]     # 之后陆续加

/about                     # 详细 About 页（可选，MVP 阶段可合并到 home）
```

3 个 PD case study 选 Synco-E / BEATROL / SprayScape 的理由：
- **完整度最高** —— Notion 里已有图、视频、Project Details、My Contributions
- **覆盖 3 个不同领域** —— 神经科学/医疗、汽车/HMI、社区/空间计算 —— PD 面试官会觉得"这人能做不同 domain"
- **3 个研究问题都强**：
  - Synco-E: "How will brain-computer interfaces shape our brains in the future?"
  - BEATROL: "How can AI-driven systems enhance safety in autonomous driving?"
  - SprayScape: "How can we harmonize graffiti culture with Local community values?"

---

## 4. PD Case Study 框架（基于 havananguyen.com 的 7-section 结构）

完整 case study 模板。Synco-E 我已经映射到了这个框架，给你看效果：

### Section 0 · HERO
- **Title**: 项目名（中英文，引用你 Notion Chinese title 字段）
- **Subtitle**: 一句话研究问题（引用 `Research Question`）
  - 例：Synco-E 的 "How will brain-computer interfaces shape our brains in the future?"

### Section 1 · PROJECT OVERVIEW
4 个 metadata block，1 段 intro（80-150 字）：

| Field | 来自 Notion 字段 | Synco-E 示例 |
|-------|----------------|-------------|
| Role | `My Contributions` | Team Executioner, Research, Concept Ideation, UX design, Prototype Testing |
| Timeline | `Project Timeline` | 07-09 2023 (3 months) |
| Team | `Contributor` | Yutong Zhu, HengYu Cao, Ningjing Jiang |
| Impact | 你需要补一句话总结 | "Awarded IDA Silver 2023; advanced to industry validation phase" |

Intro paragraph: 用 `Project Intro` 或 `Project Description`。

### Section 2 · THE CHALLENGE
- **Why this problem matters**（一段，引用 `Project Details` 开头）
- **Project Constraints**（bulleted list of 5-8）— **这一项你 Notion 里没有，需要补写**。例：Synco-E 的 constraints 可能是：
  - Limited access to professional esports athletes for testing
  - BCI hardware was prototype-stage, signal noise high
  - Team-only project, no industry funding initially
  - Cross-cultural team (3 people, 2 languages)
- **Key Insight callout**（一段大字 quote）—— 用你 Notion 已有的 `Quote Large` 字段

### Section 3 · RESEARCH & DISCOVERY
- 3 个子 section：
  - Competitive Analysis (类似 BCI 设备扫描)
  - SME Interviews (与电竞教练 / 神经学家访谈)
  - Field Observation (实地观察 pro-gamer 训练)
- 每段 1-2 张图（screenshot / interview note / synthesis sketch）

### Section 4 · DESIGN STRATEGY
- Key Design Decisions（3-5 条原则）
- 每条原则配 1 张图

### Section 5 · IMPLEMENTATION & TESTING
- Prototype iterations（图片：v1 → v2 → v3）
- User testing methodology
- 你 Notion `My Contributions` 里写了 "Prototype Testing and Partial development" — 可以展开讲

### Section 6 · RESULTS & IMPACT
- Quantitative outcomes（具体数字。Synco-E 有 IDA 奖，可以放 "IDA Silver Award 2023"）
- Qualitative impact（用户反馈或评委评语）
- Business / Field value

### Section 7 · LESSONS LEARNED
- 2-3 段反思
- **PD interview 含金量最高的一节** —— 面试官就看你这部分判断"成熟度"

### Section 8 · WHAT'S NEXT
- 项目后续如何演化 / 你想做什么改进

---

## 5. PD case study 内容缺口清单（针对 Synco-E / BEATROL / SprayScape）

### Synco-E
- ✅ 已有：Title / Chinese title / Project Intro / Research Question / My Contributions / Quote Large / 8 张图 / 1 个视频
- ❌ 缺：
  - **Constraints list**（5-8 条）
  - **Research methodology details**（你怎么做调研的？interviews 几个人？）
  - **Design decisions rationale**（为什么这样设计而不是那样？）
  - **Concrete results**（除了 IDA Award，有没有用户测试数据？）
  - **Lessons learned**（2-3 段反思）
  - **Hero video**（可能要从 8 张图剪一个 30s 的 walkthrough）

### BEATROL
- ✅ 已有：Title / Project Introduction / Research Question / My Contributions / Vimeo 视频
- ❌ 缺：
  - **图片资产**（Notion 里 Image 字段全空，但 Vimeo 链接说明你应该有素材）
  - **Constraints list**
  - **Process documentation**（user research + concepts + prototype iterations）
  - **Results / IRB-like compliance**（自动驾驶安全 = 严格规范，写出你怎么处理 regulation）
  - **Lessons**

### SprayScape
- ✅ 已有：Title / Description / Research Question / Project Details / Quote Large / 4 张图 / Vimeo / Project Timeline (8 weeks)
- ❌ 缺：
  - **Constraints list**
  - **Stakeholder mapping**（艺术家 / 社区 / 政府三方研究你怎么做的）
  - **Quantitative outcome**（用户测试反馈？concept validation 数据？）
  - **Lessons learned**

**优先级建议**：先把**Constraints + Lessons learned** 这两节内容写出来，因为 PD 面试官最爱问这两个。其他可以陆续完善。

---

## 6. Supabase Schema 推荐

基于 PD case study 框架 + 你 Notion 现有字段，推荐这个 schema：

### Table: `projects`
```sql
create table projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,                   -- "synco-e"
  title_en text not null,                       -- "Synco-E"
  title_zh text,                                -- "脑波电竞训练仪"
  
  -- 分类
  tier text not null check (tier in ('A','B','C')),  -- A=PD case study, B=Creative gallery, C=Client
  project_type text,                            -- "Product Design" / "Service Design" / etc.
  tags text[],                                  -- ["智能系统", "数据驱动", "HCI"]
  featured boolean default false,
  
  -- Hero
  hero_question text,                           -- 一句话 research question
  hero_video_url text,                          -- Vimeo / Mux URL
  thumbnail_url text,                           -- 缩略图（卡片用）
  
  -- Overview block
  role text,                                    -- "Lead Researcher, UX Lead"
  timeline text,                                -- "07-09 2023 (3 months)"
  team text,                                    -- "3 people: Yutong Zhu, ..."
  impact_oneliner text,                         -- "Awarded IDA Silver 2023"
  intro_paragraph text,                         -- 80-150 字
  
  -- Sections (markdown bodies)
  section_challenge text,                       -- markdown, 包含 constraints list
  section_research text,
  section_strategy text,
  section_implementation text,
  section_results text,
  section_lessons text,
  section_next text,
  
  -- Quote callout
  quote_large text,
  quote_source text,
  
  -- Metadata
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  published boolean default false
);

create index on projects (slug);
create index on projects (tier, featured) where published = true;
```

### Table: `project_images`
```sql
create table project_images (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete cascade,
  url text not null,                            -- Supabase Storage URL
  alt_text text,
  caption text,
  section text,                                 -- 'hero' / 'research' / 'strategy' / 'implementation' / 'results'
  position int not null,                        -- 顺序
  width int,
  height int
);

create index on project_images (project_id, section, position);
```

### Storage Bucket
- `project-media` (public read) — 存所有图片和视频缩略图。原视频走 Vimeo / Mux 不存 Supabase（流量太贵）。

### Next.js 集成思路
- **不用 SSR 实时拉**——用 ISR（每 60 秒重新生成静态页）
- `/work/[slug]` 页面在 build time + 增量 revalidate 拉数据
- 改 Notion 的内容 → 触发 webhook → Vercel Deploy Hook → 重新 build
- 或者 Supabase Studio 直接编辑 → 60 秒后下一个访问触发 ISR 重新 build

---

## 7. GitHub 主页策略

你提到想打造 GitHub 主页放 ComfyUI / creative work。建议：

### 不要把 GitHub 当作品集主战场
PD 面试官**不会**深度浏览 GitHub repo。GitHub 主页的价值是：
- 让"对方查到你后第一眼"显得可信
- 展示工程能力（PD + 写代码 = 加分项）

### 推荐做法

在 `github.com/geff1005` 创建一个 **`geff1005/geff1005`** 仓库（profile README）：

```markdown
## Yutong Zhu / Julian Zhu

Multidisciplinary designer working at the intersection of UX, AI, 
and interactive media. Currently exploring [thing].

→ Portfolio: https://yutongdesign.art
→ Email: hello@yutongdesign.art

### Selected Pinned Repos:
- [yutongdesign](portfolio site source) ← 你现在这个
- [comfyui-workflows](ComfyUI 实验) ← 把你的 ComfyUI 内容单独一个 repo
- [sprayscape-prototype](技术实现) ← 如果有代码原型
```

ComfyUI 内容创建独立 repo：`geff1005/comfyui-experiments`，里面放 workflow JSON + 渲染示例。这样：
- PD 面试官看到 = "这人会用 AI 工具，加分"
- 不污染主作品集的 PD 叙事

---

## 8. 内容生产 Pro Tips（PD 面试角度）

### Skill 展示策略
**不要在 hero/about 里列一长串 skills**（"Figma, Sketch, Photoshop, ..." = 每个 PD 都写）。改成：

- **Hero 里 0 个 skills**——就一句你的定位
- **About 页有 3-5 个 "Capabilities"**——抽象层级，不是工具：
  - "Research-driven design"（在每个 case study 里都体现）
  - "Cross-disciplinary collaboration"（你团队项目多）
  - "Generative + AI fluency"（差异化优势）
  - "Industrial / hardware sensitivity"（BEATROL、Synco-E 这两个加分）
- **Case study 里**才提具体工具——而且只在相关 section 提（"Used Figma + Spline for the parallax mockups"，不是列 toolbar）

### 选哪几个 case study 放在 home 的 "Featured"
不要超过 4 个。每多放一个，访客平均阅读深度减半。

3 个 PD case study + 1 个 standout creative work（比如 Wildfire-whispers，会 motion + 装置设计的差异化）就足够。

### Case study 里的"我做了什么 vs 团队做了什么"
PD 面试 #1 高频问题。`My Contributions` 字段你 Notion 里都有，但太短：
- ❌ "Research, Concept Ideation, UX design"（看不出是什么 size 的贡献）
- ✅ "Led 12 user interviews, owned design system architecture, built clickable prototype with 3 engineers"（具体动作 + 数字 + 协作）

### Process 节奏
PD 面试官最讨厌看到的：
1. 第一段就跳到 Final Solution 漂亮图
2. Process 部分用了 "Empathize → Define → Ideate → Prototype → Test" 这种 cookie-cutter framework（每个学校教过这套，写了 = 没思考）
3. Lessons learned 一段空话（"I learned the importance of communication"）

PD 面试官最爱看到的：
1. 第一段有一个让人停下来的"原来如此"——你的 Quote Large 字段就是干这个的
2. Research 部分有具体数字（"talked to 8 esports athletes, observed 3 training sessions"）
3. **Trade-off 决策**——"我们考虑过 A，但因为 B 选了 C"——这种思维过程比最终方案更值钱
4. Lessons 写**一个具体的失败**，不是泛泛而谈

### 内容生产顺序
不要按"先写 hero → 再写 challenge → 再写 ..."的顺序写每个 case study。改成：

1. **先把 3 个 case study 的 Quote Large + Research Question + 1 段 Lessons Learned 写完**——这是核心叙事
2. **再补 Constraints + My Contributions specifics**——让骨架变实
3. **最后补 Strategy / Implementation 细节 + 图片**——最耗时但其实最不重要

按这个顺序，2-3 个晚上能把 3 个 case study 推到"可以发布"的状态。

---

## 9. 你硬盘 / iCloud / Eagle 整理建议

你提到本地有很多 design hub + design project 文件夹混乱。建议在 iCloud 里建这个结构：

```
Design hub/
├── 00-PORTFOLIO-ASSETS/           ← 当前 portfolio 用的精选
│   ├── synco-e/
│   │   ├── hero-video.mp4
│   │   ├── 01-research/...
│   │   ├── 02-strategy/...
│   │   └── 03-final/...
│   ├── beatrol/
│   └── sprayscape/
├── 01-CASE-STUDY-WIPS/            ← 正在写的，但还没上线
├── 02-PROJECT-ARCHIVE/            ← 历史项目原文件，按年份
│   ├── 2020-2022/
│   ├── 2023/
│   └── ...
├── 10-EAGLE-LIBRARIES/            ← 视觉参考库
└── 99-MISC/
```

只把 `00-PORTFOLIO-ASSETS` 里的图迁移到 Supabase Storage。其他保留本地，不上云。

---

## 10. 接下来 3 步建议

**今天可以做的（不到 1 小时）：**
1. 在 Notion `Designer Portfolio` 页面里给 Synco-E / BEATROL / SprayScape 三个项目，每个写 1 段 **Constraints list (5-8 条)** 和 **2-3 段 Lessons learned**——只用打字，不需要图。这是 PD case study 最值钱的两块内容，你自己最清楚。
2. 决定 Hero 里的 4 个角色词（取代 Creative/Fullstack/Founder/Scholar）。
3. 决定你想用 Yutong Zhu 还是 Julian Zhu 作为公开 brand（建议二选一，混用对面试官造成困扰）。

**这周可以做的：**
4. 把 Synco-E 在 Notion 里的 8 张 framer 图下载下来，放到 `00-PORTFOLIO-ASSETS/synco-e/` 文件夹里 —— 这是迁移 Supabase Storage 前的本地准备。
5. 创建 Supabase 项目（free tier 够用），按上面 schema 跑 migration。
6. 让我帮你把 Hero / Stats / Contact 里的硬编码内容替换成你给的真实文案（不接 Supabase，先把假文案换掉，立刻视觉更专业）。

**下周开始的：**
7. 建 `/work/[slug]` 动态路由 + Supabase 拉数据。
8. 按 7-section 框架把 Synco-E 完整发布。
9. 复用 BEATROL 和 SprayScape。

---

## 附：Notion 项目数据原始链接

完整数据存在你的 Notion DB 里：

- 主规划页：`DesignM` — https://www.notion.so/2dc9f7ed1e0880389a61f8abd60296ba
- Design Projects DB（旧，含 framer 图资产）— https://www.notion.so/c916d4c6ccc74a3f95c93adea2f2774c
- Projects DB（新）— https://www.notion.so/20b9f7ed1e088013905ceccaf0bae66f
- Julian Zhu Portfolio 主页 — https://www.notion.so/2db9f7ed1e0881c0a34bf42fe9827229
- Designer Portfolio (12 yrs intro) — https://www.notion.so/2fb9f7ed1e088032bf7ee54619357a8e
- 06-荣誉奖项 — https://www.notion.so/13bb9119e00d489a94c88f7991a39654

---

_审计完成。下一步建议：先看 §10 的"今天可以做的"3 件事，然后告诉我你的 Yutong vs Julian、Hero 4 个角色词、Constraints 内容大概什么方向，我就可以开始 §10.5 (周内) 的硬编码内容替换。_
