# Design hub Rename Plan

_Drafted 2026-04-29 — review and approve before I execute the batch rename._

## 当前问题

1. **重复项目** — SKG 有两个文件夹 (`SKG+` + `SKG WebDeisgn（写设计文档）`) 需要合并
2. **拼写错误** — `Deisgn`、`Collabration`（→ Collaboration）
3. **命名风格混乱** — Chinese / English / hashtags / 括号混用，Finder 排序看不出优先级
4. **无统一编号** — 找具体项目要逐个看名字
5. **散落文件** — 根目录有 4 个文件不属于任何项目（2 个 PDF + 1 个 ZIP + 1 个 MD）

## 推荐方案 — Tier prefix + 编号

每个项目加 `{Tier}{NN}-` 前缀，Finder 自动按 Tier → 序号排序。Tier 含义：

- **A** = Featured / 主推（PD 求职 hero work）
- **B** = Library / 备用（gallery 用）
- **C** = Experiments / archive（不主动展示）

格式：`{Tier}{NN}-{Slug-EN}-{中文 tag (可选)}`

### A 层 — Featured (8 个)

| 旧名 | 新名 |
|------|------|
| `SmaTaste-SOD121-Design Innovation（sodexo）` | `A01-SmaTaste-Sodexo-AID` |
| `CoCereb Agent-IRP-P-R` | `A02-CoCereb-IRP-Six-Hats` |
| `SKG+` + `SKG WebDeisgn（写设计文档）` 合并 → | `A03-SKG-Plus-Web` |
| `Beatrol作品集-疲劳座舱` | `A04-Beatrol-Cockpit-L4` |
| `Sync-e-BCI脑波仪` | `A05-Sync-E-BCI` |
| `Spray Scape-涂行-涂鸦文化` | `A06-SprayScape-Spatial` |
| `Wildfire whispers-野火低语-专题2` | `A07-Wildfire-Whispers` |
| `Meta Station#元宇宙方案` (含 HUAWEI 主题) | `A08-Meta-Station-Huawei` |

### B 层 — Library / Gallery (8 个)

| 旧名 | 新名 |
|------|------|
| `Pulse-Wildfire Whisper-U` | `B01-Pulse-Wildfire-RCA` |
| `Bamboo Wind-共书竹风-汉字文化` | `B02-Bamboo-Wind` |
| `Botanictrum-植物,可持续#思辨 #bioloss` | `B03-Botanictrum` |
| `Lunacy月球档案 #Art Direction` | `B04-Lunacy-Moon` |
| `Walkinghaven-天文，24节气步天歌` | `B05-Walking-Heaven` |
| `Poetic Form-宋韵诗形(整理结构）` | `B06-Poetic-Form` |
| `GreenMove绿途（上作品集网站）` | `B07-GreenMove` |
| `Massbot -数字遗产（网站）-思辨设计` | `B08-Massbot-Digital-Legacy` |

### C 层 — Experiments / Archive (5 个)

| 旧名 | 新名 |
|------|------|
| `runway《ISEE》` | `C01-Runway-ISEE` |
| `SP+AI+Collabration+Dynamic` | `C02-SP-AI-Collaboration` (修拼写) |
| `Mercury-音画互动-钢琴` | `C03-Mercury-Piano` |
| `digital legacy` | `C04-Digital-Legacy-Old` (跟 Massbot 是不同的吗？需你确认) |
| `宣传-朱宇同排版内容-发杰哥-profile 宣传（Done）` | `C05-Profile-Promo-Done` |

### 不动的文件夹（不是项目）

- `0-Portfolio_PDF` (polished PDFs aggregator) — 保留
- `0-作品集分类` (18 类 taxonomy 空壳) — 保留
- `Julianyutongzhu /` (网站 repo) — 保留
- `eagle 图库` (Eagle libraries) — 保留
- `apple本地` — 保留

### 散落文件 — 移到对应位置

- `Export_2026-02-18_18_09_12.pdf` (5.9MB) — 不知道是哪个项目，要你确认归属
- `IRP Graphic 123 18-Feb-2026-6.15pm.zip` (2.7MB) → 移到 `A02-CoCereb-IRP-Six-Hats/`
- `「图迹」产品开发需求文档（PRD）- 落地版.md` — 不知道哪个项目，要你确认（看起来是某 PD 项目的 PRD）

## 你需要拍板的事

1. **方案 A/B/C 三层是否 OK？** 还是想用别的（比如纯按年份 `2024-01-...` / 纯序号 `01-...`）？
2. **A 层 8 个项目的顺序对吗？** SmaTaste #1 / CoCereb #2 / SKG+ #3 是按你的求职优先级，可以调
3. **SKG+ 和 SKG WebDeisgn 怎么合并？** 我建议都搬进 `A03-SKG-Plus-Web/`，subfolders 保留原结构。或者你说哪个是 canonical
4. **C04-Digital-Legacy-Old vs B08-Massbot-Digital-Legacy** 是同一个项目还是 2 个？
5. **`Export_2026-02-18_18_09_12.pdf` 和「图迹」PRD** 归属哪个项目？

## 影响（连带要更新的地方）

如果你批准这个方案，我会同步更新这 5 处避免链接断裂：

- `CLAUDE.md` 里的项目路径引用
- `docs/_HUB_REGISTRY.md` 里的路径
- `docs/CONTENT_AUDIT.md` 里的路径
- `docs/ROADMAP.md` 里的路径
- 网站 `lib/projects.ts` 里的 thumbnail 路径不受影响（thumbnails 已经在 `/public/thumbnails/` 不引用 Design hub）

Notion DB 里有些项目也有"asset path"字段，sync 时如果引用旧路径会断 — 但目前 Notion DB 里大部分项目没填 asset path 所以风险小，我会一起检查。

---

**回我 OK / 提修改 / 选别的方案，确认后我批量改。**
