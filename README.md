# Bo-Wen Zhang · 学术主页（GitHub Pages）

[中文](#中文说明) | [English](#english)

> 零依赖静态站点：一个 `index.html` + 一份 CSS + 一份 JS + 三个数据文件。
> 中英双语一键切换、亮/暗主题自动跟随系统、论文与项目全部由数据文件驱动。
> 直接推送到 GitHub、开启 Pages 即可上线；本地双击 `index.html` 也能预览。

---

## 中文说明

### 目录结构

```
.
├── index.html                   # 页面骨架（含 SVG 图标 sprite、双语标签）
├── assets/
│   ├── css/style.css            # 全部样式（主题变量集中在 :root）
│   ├── js/main.js               # 双语字典 + 渲染逻辑 + 主题/导航
│   ├── data/
│   │   ├── publications.js      # 论文列表 ← 以后加论文改这里
│   │   ├── projects.js          # 研究项目 ← 以后加项目改这里
│   │   ├── patents.js           # 中国发明专利 ← 以后加专利改这里
│   │   └── news.js              # 新闻动态
│   ├── img/
│   │   └── logos/               # 项目与机构 Logo（SVG，可替换）
├── publications.bib             # 论文 BibTeX 汇总
└── .nojekyll
```

### 双仓库工作流（源码 / 发布分离）

这个站点**没有构建步骤**：`index.html` 打开就是最终页面，`assets/` 就是最终资源，
源码即产物，不存在 src → dist 的编译过程。分成两个仓库是为了隔离风险，
不是因为需要编译。

| 仓库 | 用途 | 可见性 |
| --- | --- | --- |
| `bowenzhang-src` | 源码仓库，日常改动都在这里 | Private |
| `bowenzhang` | 发布仓库，GitHub Pages 指向它 | Public |

日常流程：

```
在 bowenzhang-src 改动 → push 到 main
  → GitHub Actions（.github/workflows/publish.yml）自动同步
  → bowenzhang 更新 → 约 1 分钟上线
```

启用自动同步需要两步：

1. 把 `docs/publish-workflow.yml` 的内容，在源码仓库网页上创建为
   `.github/workflows/publish.yml`（Add file → Create new file，路径直接粘进去）。
   > 为什么不放本地 `.github/`？fine-grained token 默认没有 `workflow` scope，
   > 从命令行推 workflow 文件会被 GitHub 拒绝。网页创建不受此限制。
2. 在源码仓库 **Settings → Secrets and variables → Actions → New repository secret**，
   添加 `PUBLISH_TOKEN`，值为一个对 `bowenzhang` 有写权限的 PAT。

不想自动发布时，在 Actions 页面手动点 **Run workflow** 也能触发一次同步。

**不想配 Actions 就用本地脚本**（效果完全一样，一条命令）：

```bash
export PUBLISH_TOKEN=<你的 PAT>
./publish.sh
```

它会剔除 `.git` / `.github` / `docs` / `publish.sh`，把干净的站点 force push 到
`prir-data4ai/bowenzhang`，约 1 分钟后线上生效。

### 上线步骤

```bash
# 1. 在 GitHub 新建仓库 <你的用户名>/<你的用户名>.github.io（或任意名）
git remote add origin git@github.com:<用户名>/<仓库名>.git
git branch -M main
git push -u origin main

# 2. 仓库 Settings → Pages → Source 选 "Deploy from a branch" → main / (root)
#    稍等一分钟，https://<用户名>.github.io 即可访问
```

如果仓库名**不是** `<用户名>.github.io`，Pages 会部署在 `https://<用户名>.github.io/<仓库名>/`，
此时需要把 `index.html` 里的资源路径改成相对路径（当前已经是相对路径，无需改动）。

### 日常维护

| 我想改什么 | 改哪个文件 |
| --- | --- |
| 加一篇论文 | `assets/data/publications.js` 数组里新增一项（见下方字段说明） |
| 加一个研究项目 | `assets/data/projects.js` 数组里新增一项（`tier:'main'` 主卡片 / `tier:'minor'` 紧凑列表） |
| 加一项专利 | `assets/data/patents.js` 数组里新增一项 |
| 加一条新闻 | `assets/data/news.js` 数组里新增一项 |
| 改界面文案 / 翻译 | `assets/js/main.js` 顶部的 `I18N` 字典（`zh` / `en` 两份） |
| 换配色 | `assets/css/style.css` 顶部 `:root` 的 `--brand` / `--brand-2` / `--brand-3` |
| 换 Logo | 替换 `assets/img/logos/*.svg`（文件名保持不变即可） |

**论文条目字段**

```js
{
  year: 2026,
  venue: 'AAAI 2026',            // 显示名称
  venueType: 'conf',             // conf | journal | preprint（决定配色）
  tags: ['llm'],                 // 用于筛选：llm moe multimodal data code ir nlp cv
  title: '...',
  authors: ['Bowen Zhang', '...'],
  me: [0],                       // 本人是第几位作者（会加粗高亮），从 0 开始
  first: true,                   // 一作（可选）
  corr: true,                    // 通讯（可选）
  note: 'co-first',              // 共同一作（可选）
  highlight: true,               // 重点论文，左侧加高亮条（可选）
  links: { arxiv: '...', html: '...', pdf: '...', code: '...', slides: '...', bib: '...' }
}
```

### 需要你补充的信息

| 位置 | 内容 |
| --- | --- |
| `index.html` 的 `.stats` | 四个数字目前是估算值，按实际情况调整 |

### 内容与资料来源

内容基于公开资料整理，请上线前再核对一次：

- 学院主页：<https://scce.ustb.edu.cn/info/1147/3562.htm>
- DBLP：<https://dblp.org/pid/85/7433-11.html>
- ORCID：`0000-0002-6384-2104`
- Hugging Face：BAAI 组织下的 Aquila 全系列 / AquilaCode / AquilaMoE / Infinity-Instruct / Infinity-MM / InfinityMATH / TACO / Emu3
- GitHub：FlagAI-Open（FlagAI / Aquila2 / Aquila-MoE）、FlagOpen（FlagEval / FlagData / TACO / Infinity-Instruct）、baaivision/Emu3
- 智源社区报告页、Aquila2 与 AquilaMoE 模型卡

---

## English

A dependency-free static academic homepage: bilingual (中文 / English) toggle, dark & light themes,
publications and projects rendered from plain JS data files.

### Run locally

```bash
# any static server works; opening index.html directly also works
python3 -m http.server 8000
# then visit http://localhost:8000
```

### Deploy

1. Create a repo named `<username>.github.io`.
2. `git push` this folder.
3. Settings → Pages → Deploy from branch `main` / `/(root)`.

### Where to edit

| What | File |
| --- | --- |
| Publications | `assets/data/publications.js` |
| Projects | `assets/data/projects.js` |
| News | `assets/data/news.js` |
| UI strings / translations | `I18N` dictionary at the top of `assets/js/main.js` |
| Colours | `:root` variables in `assets/css/style.css` |

### TODO before publishing

- Double-check the four numbers in the stats strip.

---

Built for **Bo-Wen Zhang (张博文)** — Associate Professor, School of Computer and Communication Engineering,
University of Science and Technology Beijing; formerly Researcher at BAAI.
