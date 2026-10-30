/* ------------------------------------------------------------------
 * Research projects / 研究项目
 * 每个项目只需在此处维护一份中英双语数据，页面会自动渲染。
 *
 * tier: 'main'  → 主网格大卡片（重点展示）
 *       'minor' → 底部紧凑列表（一行式，弱化展示）
 * ------------------------------------------------------------------ */
window.PROJECTS = [
  {
    id: 'infinity',
    tier: 'main',
    logo: 'assets/img/logos/infinity.png',
    accent: '#8B5CF6',
    name: 'Infinity',
    role: { zh: '核心研究人员', en: 'Core Researcher' },
    period: '2024 – 2026',
    tag: {
      zh: '指令与多模态数据合成 · 千万级',
      en: 'Instruction & Multimodal Synthesis · 10M+ Scale'
    },
    desc: {
      zh: '面向大模型的千万级高质量数据体系，包含三件套：InfinityMATH（数学推理指令）、Infinity-Instruct（通用指令）、Infinity-MM（多模态指令）。核心思路是建立可无限扩展的自动合成机制，用开源高质量数据填补开源模型与闭源模型之间的性能差距。',
      en: 'A ten-million-scale data ecosystem for foundation models, comprising InfinityMATH (mathematical reasoning), Infinity-Instruct (general instruction) and Infinity-MM (multimodal instruction). The core idea is an infinitely scalable synthesis mechanism that closes the gap between open and closed models with high-quality open data.'
    },
    bullets: [
      {
        win: true,
        zh: 'Infinity-Instruct 入选 Hugging Face「Open-source AI: Year in Review 2024」两大榜单：Most Liked Datasets of 2024 与 The Circle of Sharing',
        en: 'Infinity-Instruct listed in Hugging Face’s “Open-source AI: Year in Review 2024” on two lists: Most Liked Datasets of 2024 and The Circle of Sharing'
      },
      {
        win: true,
        zh: '发布即登顶 Hugging Face Dataset Trending 第一；已被 120+ 开源模型采用，用户覆盖 40+ 国家和地区、近百家企业与组织',
        en: 'Hit #1 on Hugging Face Dataset Trending upon release; adopted by 120+ open models across 40+ countries and nearly a hundred organisations'
      },
      {
        zh: 'Infinity-Instruct Subject 论文被 AAAI 2026 接收；7M-Core 用 1.4M 指令达到全量 7M 的 95.7% 性能',
        en: 'Infinity-Instruct Subject paper accepted to AAAI 2026; 7M-Core reaches 95.7% of full-7M performance with only 1.4M instructions'
      },
      {
        zh: 'Infinity-MM：4000 万+ 多模态指令样本，基于标签体系与开源 VLM 合成；训练的 Aquila-VL-2B 在 8 项基准平均 59.5，同规模 SOTA，超越使用闭源数据的 Qwen2-VL-2B 与 InternVL2-2B',
        en: 'Infinity-MM: 40M+ multimodal instruction samples synthesised via a tagging system and open VLMs; the trained Aquila-VL-2B averages 59.5 across 8 benchmarks — SOTA at its scale, surpassing Qwen2-VL-2B and InternVL2-2B trained on closed data'
      },
      {
        zh: 'InfinityMATH：数字与问题解耦生成可执行程序，相对提升 184.7% – 514.3%，并构造 GSM8K+ / MATH+ 鲁棒评测集',
        en: 'InfinityMATH: decouples numbers from problems to emit executable programs, yielding 184.7%–514.3% relative gains and robust GSM8K+ / MATH+ benchmarks'
      }
    ],
    links: [
      { label: 'Infinity-Instruct', url: 'https://huggingface.co/datasets/BAAI/Infinity-Instruct' },
      { label: 'Infinity-MM', url: 'https://huggingface.co/datasets/BAAI/Infinity-MM' },
      { label: 'InfinityMATH', url: 'https://huggingface.co/datasets/BAAI/InfinityMATH' },
      { label: 'Code', url: 'https://github.com/FlagOpen/Infinity-Instruct' },
      { label: 'Paper (Instruct)', url: 'https://arxiv.org/abs/2506.11116' },
      { label: 'Paper (MM)', url: 'https://arxiv.org/abs/2410.18558' },
      { label: 'Paper (MATH)', url: 'https://arxiv.org/abs/2408.07089' }
    ]
  },
  {
    id: 'aquila',
    tier: 'main',
    logo: 'assets/img/logos/aquila.png',
    accent: '#1E6BFF',
    name: 'Aquila',
    role: { zh: '数据负责人 · 核心研究人员', en: 'Data Lead · Core Researcher' },
    period: '2023',
    tag: {
      zh: '悟道·天鹰 · 中英双语基座',
      en: 'WuDao Tianying · Bilingual Base Model'
    },
    desc: {
      zh: '北京智源自研的中英双语大语言模型系列开山之作，从零开始训练，参数覆盖 135M 到 33B，开源基座与对话权重，为后续 Aquila2 与 MoE 系列奠定基础。',
      en: 'The first generation of BAAI’s from-scratch bilingual LLMs, spanning 135M to 33B parameters with open base and chat weights — laying the groundwork for Aquila2 and the MoE series.'
    },
    bullets: [
      {
        zh: '中英双语语料从零预训练，开源 Aquila-7B / AquilaChat-7B / Aquila-33B',
        en: 'Pretrained from scratch on bilingual corpora; released Aquila-7B / AquilaChat-7B / Aquila-33B'
      },
      {
        zh: '配套开源 AquilaSQL、AquilaMed 等垂直方向衍生模型',
        en: 'Accompanied by domain derivatives such as AquilaSQL and AquilaMed'
      }
    ],
    links: [
      { label: 'HF Aquila-7B', url: 'https://huggingface.co/BAAI/Aquila-7B' },
      { label: 'HF Aquila-33B', url: 'https://huggingface.co/BAAI/Aquila-33B' },
      { label: 'HF Collection', url: 'https://huggingface.co/collections/BAAI/aquila-6698657124de09d10cd7a83f' }
    ]
  },
  {
    id: 'aquila2',
    tier: 'main',
    logo: 'assets/img/logos/aquila.png',
    accent: '#2563EB',
    name: 'Aquila2',
    role: { zh: '数据负责人 · 核心研究人员 · 技术报告一作', en: 'Data Lead · Core Researcher · Tech Report 1st Author' },
    period: '2024',
    tag: {
      zh: '第二代基座 · 7B / 34B / 70B',
      en: '2nd-Gen Base · 7B / 34B / 70B'
    },
    desc: {
      zh: 'Aquila 系列第二代模型，在架构与训练效率上全面升级：采用 GQA + RoPE，扩充到 10 万词表，并推出 16K 长文本版本。7B 与 34B 基座及对话模型全部开源，另提供 70B 实验版本。',
      en: 'The second generation of the Aquila family with upgraded architecture and training efficiency: GQA + RoPE, a 100k vocabulary and 16K long-context variants. 7B and 34B base and chat models are fully open-sourced, alongside a 70B experimental release.'
    },
    bullets: [
      {
        zh: 'Aquila2-7B / 34B 基座与 AquilaChat2 对话模型，含 16K 长文本版本',
        en: 'Aquila2-7B / 34B base and AquilaChat2 chat models, including 16K long-context variants'
      },
      {
        zh: '提出 HeuriMentor 训练监控框架，在训练中预判收敛趋势、提前干预',
        en: 'Introduces HeuriMentor for monitoring convergence trends and intervening early during training'
      },
      {
        zh: 'GitHub 官方仓库 447 stars，完整开源训练与推理代码',
        en: 'Official GitHub repo with 447 stars; full training and inference code released'
      }
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/FlagAI-Open/Aquila2' },
      { label: 'HF Aquila2-34B', url: 'https://huggingface.co/BAAI/Aquila2-34B' },
      { label: 'HF AquilaChat2-7B', url: 'https://huggingface.co/BAAI/AquilaChat2-7B' },
      { label: 'Paper', url: 'https://arxiv.org/abs/2408.07410' }
    ]
  },
  {
    id: 'aquilacode',
    tier: 'main',
    logo: 'assets/img/logos/aquila.png',
    accent: '#0891B2',
    name: 'AquilaCode',
    role: { zh: '项目负责人', en: 'Project Lead' },
    period: '2023 – 2024',
    tag: {
      zh: '代码大模型 · 多语言与 Python 专精',
      en: 'Code LLM · Multi-Language & Python'
    },
    desc: {
      zh: 'Aquila 系列的代码专精分支，面向代码补全、生成与理解任务，提供多语言通用版本与 Python 强化版本两档权重，沿用 Aquila 的中英双语能力优势。',
      en: 'The code-specialised branch of the Aquila family for completion, generation and understanding tasks, shipped as a multi-language version and a Python-enhanced version while retaining Aquila’s bilingual strengths.'
    },
    bullets: [
      {
        zh: 'AquilaCode-multi：覆盖多种主流编程语言的通用代码模型',
        en: 'AquilaCode-multi: general-purpose code model covering multiple mainstream languages'
      },
      {
        zh: 'AquilaCode-py：面向 Python 强化的专精版本',
        en: 'AquilaCode-py: Python-focused specialist variant'
      }
    ],
    links: [
      { label: 'HF AquilaCode-multi', url: 'https://huggingface.co/BAAI/AquilaCode-multi' },
      { label: 'HF AquilaCode-py', url: 'https://huggingface.co/BAAI/AquilaCode-py' },
      { label: 'HF Collection', url: 'https://huggingface.co/collections/BAAI/aquila-6698657124de09d10cd7a83f' }
    ]
  },
  {
    id: 'aquilamoe',
    tier: 'main',
    logo: 'assets/img/logos/aquila.png',
    accent: '#4F46E5',
    name: 'AquilaMoE',
    role: { zh: '数据负责人 · 核心研究人员 · 技术报告一作', en: 'Data Lead · Core Researcher · Tech Report 1st Author' },
    period: '2024',
    tag: {
      zh: '8×16B 稀疏专家 · 高效训练',
      en: '8×16B Sparse MoE · Efficient Training'
    },
    desc: {
      zh: '8×16B 稀疏专家混合模型，在 4TB 中英双语 token 上完成训练。提出 EfficientScale（Scale-Up + Scale-Out）高效训练方法与两阶段知识迁移策略，在显著降低数据与算力需求的同时达到同规模稠密模型的性能水平。',
      en: 'An 8×16B sparse mixture-of-experts model trained on 4TB of bilingual tokens. Introduces EfficientScale (Scale-Up + Scale-Out) and two-stage knowledge transfer, matching dense-model performance at the same scale with far less data and compute.'
    },
    bullets: [
      {
        zh: 'EfficientScale：Scale-Up 阶段用稠密模型蒸馏初始化，Scale-Out 阶段扩展为 MoE',
        en: 'EfficientScale: Scale-Up initialises from a distilled dense model, Scale-Out expands into MoE'
      },
      {
        zh: '两阶段知识迁移，8×16B MoE 仅需显著更少数据与算力即可收敛',
        en: 'Two-stage knowledge transfer enables an 8×16B MoE to converge with far less data and compute'
      },
      {
        zh: '开源 AquilaMoE 基座与 AquilaMoE-SFT 对话权重',
        en: 'Released AquilaMoE base and AquilaMoE-SFT chat weights'
      }
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/FlagAI-Open/Aquila-MoE' },
      { label: 'HF AquilaMoE', url: 'https://huggingface.co/BAAI/AquilaMoE' },
      { label: 'HF AquilaMoE-SFT', url: 'https://huggingface.co/BAAI/AquilaMoE-SFT' },
      { label: 'Paper', url: 'https://arxiv.org/abs/2408.06567' }
    ]
  },
  {
    id: 'flagai',
    tier: 'main',
    logo: 'assets/img/logos/flagai.png',
    accent: '#F43F5E',
    name: 'FlagAI',
    role: { zh: '核心技术人员', en: 'Core Technical Member' },
    period: '2022 – ',
    tag: {
      zh: '大模型训练与微调工具包 · 30+ 模型',
      en: 'Large Model Training Toolkit · 30+ Models'
    },
    desc: {
      zh: 'Fast LArge-scale General AI：快速、易用、可扩展的大模型工具包，支持 30+ 主流模型的下载、训练、微调与部署，底层打通 PyTorch、DeepSpeed、Megatron-LM、BMTrain 四大并行训练库，10 行以内代码即可完成分布式训练。',
      en: 'Fast LArge-scale General AI: a fast, easy-to-use and extensible toolkit for large models. Supports 30+ mainstream models with seamless integration of PyTorch, DeepSpeed, Megatron-LM and BMTrain — distributed training in fewer than ten lines of code.'
    },
    bullets: [
      {
        zh: 'Aquila 全系列模型的官方训练与推理基座，GitHub 累计 3.8k stars',
        en: 'The official training and inference backbone for the whole Aquila family; 3.8k stars on GitHub'
      },
      {
        zh: '首批支持 Aquila、AltCLIP、AltDiffusion、EVA-CLIP、悟道 GLM（最大 100 亿参数）',
        en: 'Early support for Aquila, AltCLIP, AltDiffusion, EVA-CLIP and WuDao GLM (up to 10B)'
      },
      {
        zh: '内置 prompt-learning 少样本工具包，中文任务表现尤为突出',
        en: 'Built-in prompt-learning toolkit for few-shot tasks; particularly strong on Chinese'
      }
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/FlagAI-Open/FlagAI' },
      { label: 'Docs', url: 'https://github.com/FlagAI-Open/FlagAI#readme' }
    ]
  },
  {
    id: 'taco',
    tier: 'main',
    logo: 'assets/img/logos/taco.png',
    accent: '#0EA5E9',
    name: 'TACO',
    role: { zh: '项目负责人 · 技术报告通讯作者', en: 'Project Lead · Tech Report Corresponding Author' },
    period: '2023 – ',
    tag: {
      zh: '算法代码生成基准 · 26K 题目',
      en: 'Algorithmic Code Generation Benchmark · 26K Problems'
    },
    desc: {
      zh: '面向「自然语言 → 代码」的大规模算法题基准，包含 26,443 道题目与 155 万条经过验证的解答，按 EASY 到 VERY_HARD 五级难度与多类算法技能标注，每道题均附带可执行测试用例，已成为代码大模型评测的常用基准之一。',
      en: 'A large-scale benchmark for natural-language-to-code generation with 26,443 problems and 1.55M verified solutions, annotated with five difficulty levels (EASY → VERY_HARD) and algorithm skill types, each shipped with executable test cases. It has become a standard benchmark for code LLMs.'
    },
    bullets: [
      {
        zh: '数据源覆盖 Codeforces、CodeChef、AtCoder、LeetCode、HackerRank、GeeksforGeeks 等',
        en: 'Sourced from Codeforces, CodeChef, AtCoder, LeetCode, HackerRank, GeeksforGeeks and more'
      },
      {
        zh: '测试集平均 202.3 个测试用例，全部具备 ground-truth 解答',
        en: 'Test split averages 202.3 test cases per problem, all with ground-truth solutions'
      },
      {
        zh: '支持按难度与算法技能（DP / 贪心 / 数据结构 / 范围查询等）筛选子集',
        en: 'Filterable by difficulty and skill type (DP / greedy / data structures / range queries…)'
      }
    ],
    links: [
      { label: 'HF Dataset', url: 'https://huggingface.co/datasets/BAAI/TACO' },
      { label: 'GitHub', url: 'https://github.com/FlagOpen/TACO' },
      { label: 'Paper', url: 'https://arxiv.org/abs/2312.14852' }
    ]
  },
  {
    id: 'altclip',
    tier: 'main',
    accent: '#0F766E',
    name: 'AltCLIP',
    role: { zh: '评测负责人', en: 'Evaluation Lead' },
    period: '2022 – 2024',
    tag: {
      zh: '多语言多模态表示 · 图文对齐评测',
      en: 'Multilingual Multimodal Representation · Vision-Language Evaluation'
    },
    desc: {
      zh: '以低成本把 CLIP 的语言能力扩展到多语言：用多语言 XLM-R 替换原文编码器，通过「教师学习 + 对比学习」两阶段对齐图像与语言表示，并在多语言图文检索、零样本分类等任务上完成系统评测。',
      en: 'A low-resource recipe to extend CLIP to multiple languages: replace the text encoder with multilingual XLM-R, align image–language representations via two-stage teacher and contrastive learning, and evaluate systematically on multilingual image-text retrieval and zero-shot classification.'
    },
    bullets: [
      {
        zh: '负责多语言图文对齐与零样本迁移能力的评测方案设计与结果分析',
        en: 'Led the evaluation design and result analysis for multilingual image-text alignment and zero-shot transfer'
      },
      {
        zh: '论文发表于 Findings of ACL 2023，模型已被 FlagAI 集成并在 Hugging Face 上被广泛使用',
        en: 'Published at Findings of ACL 2023; integrated into FlagAI and widely used on Hugging Face'
      },
      {
        zh: '与 CCI3.0-HQ、CCI 4.0 语料工作分属不同方向：AltCLIP 面向多模态表示，CCI 系列面向预训练语料',
        en: 'A separate line from CCI3.0-HQ and CCI 4.0: AltCLIP targets multimodal representation, the CCI series targets pretraining corpora'
      }
    ],
    links: [
      { label: 'Paper', url: 'https://aclanthology.org/2023.findings-acl.552' },
      { label: 'arXiv', url: 'https://arxiv.org/abs/2211.06679' },
      { label: 'FlagAI', url: 'https://github.com/FlagAI-Open/FlagAI' }
    ]
  },
  {
    id: 'cci',
    tier: 'main',
    accent: '#0EA5E9',
    name: 'CCI 3.0 / 4.0',
    role: { zh: '核心技术人员', en: 'Core Technical Member' },
    period: '2024 – 2025',
    tag: {
      zh: '中文互联网语料 · 1000GB → 35TB',
      en: 'Chinese Web Corpus · 1000GB → 35TB'
    },
    desc: {
      zh: '智源牵头、联合阿里云与上海人工智能实验室等十余家机构共建的中文互联网语料库（Chinese Corpora Internet）。CCI 3.0 于 2024 年 9 月发布，含 2.68 亿网页、1000GB 规模；CCI 4.0 于 2025 年 5 月在 GOSIM 巴黎发布，总量 35TB，扩展为中英双语并首次引入 CoT 合成推理轨迹。系列累计下载超过 14 万次，支撑 500 余家企事业单位的模型研发。',
      en: 'Chinese Corpora Internet (CCI): a web corpus led by BAAI with Alibaba Cloud, Shanghai AI Laboratory and a dozen other contributors. CCI 3.0 (Sep 2024) contains 268M web pages at 1000GB; CCI 4.0 (May 2025, GOSIM Paris) scales to 35TB, expands to Chinese–English bilingual data and introduces CoT reasoning traces for the first time. The series has been downloaded over 140,000 times and supports model development at 500+ organisations.'
    },
    bullets: [
      {
        zh: 'CCI 3.0：1000GB、2.68 亿网页、20+ 来源；CCI3.0-HQ 高质量子集 498GB',
        en: 'CCI 3.0: 1000GB, 268M web pages, 20+ sources; CCI3.0-HQ high-quality subset at 498GB'
      },
      {
        zh: 'CCI3.0-HQ 两阶段混合过滤：Qwen2-72B-Instruct 质量标注蒸馏到 0.5B 分类器；0.5B 模型训练 100B token，10 项零样本基准优于 CCI3.0、SkyPile 与 WanJuan v1',
        en: 'CCI3.0-HQ two-stage hybrid filtering: Qwen2-72B-Instruct quality labels distilled into a 0.5B classifier; a 0.5B model trained on 100B tokens beats CCI3.0, SkyPile and WanJuan v1 on 10 zero-shot benchmarks'
      },
      {
        zh: 'CCI 4.0：Base 26TB（中文 4.3TB，较 CCI 3.0 增 4 倍）、CoT 4 亿+ 条逆向合成推理轨迹 / 425B token、Extra 需单独授权子集',
        en: 'CCI 4.0: Base 26TB (4.3TB Chinese, 4× CCI 3.0), CoT with 400M+ reverse-synthesised reasoning traces / 425B tokens, plus an Extra subset requiring separate licensing'
      },
      {
        zh: 'ReTok：通过替换 tokenizer 提升大模型表示效率与压缩率，作为语料侧的配套技术并入本项目',
        en: 'ReTok: improves representation efficiency and compression by replacing the tokenizer — incorporated here as a corpus-side companion technique'
      }
    ],
    links: [
      { label: 'CCI3-Data', url: 'https://huggingface.co/datasets/BAAI/CCI3-Data' },
      { label: 'CCI4.0 Base', url: 'https://huggingface.co/datasets/BAAI/CCI4.0-M2-Base-v1' },
      { label: 'CCI4.0 CoT', url: 'https://huggingface.co/datasets/BAAI/CCI4.0-M2-CoT-v1' },
      { label: 'Paper (3.0-HQ)', url: 'https://arxiv.org/abs/2410.18505' },
      { label: 'Paper (ReTok)', url: 'https://arxiv.org/abs/2410.04335' },
      { label: 'Data Hub', url: 'https://data.baai.ac.cn/' }
    ]
  },

  /* ---------------- 次要参与（紧凑展示） ---------------- */
  {
    id: 'emu3',
    tier: 'minor',
    accent: '#7C5CFF',
    name: 'Emu3',
    role: { zh: '数据负责人', en: 'Data Lead' },
    tag: {
      zh: '统一多模态生成与理解',
      en: 'Unified Multimodal Generation & Understanding'
    },
    links: [
      { label: 'Code', url: 'https://github.com/baaivision/Emu3' },
      { label: 'HF', url: 'https://huggingface.co/collections/BAAI/emu3-66f4e64f70850ff358a2e60f' },
      { label: 'Paper', url: 'https://arxiv.org/abs/2409.18869' }
    ]
  },
  {
    id: 'flagdata',
    tier: 'minor',
    accent: '#10B981',
    name: 'FlagData',
    role: { zh: '参与', en: 'Contributor' },
    tag: {
      zh: '数据清洗与处理工具链',
      en: 'Data Cleaning & Processing Toolkit'
    },
    links: [
      { label: 'GitHub', url: 'https://github.com/FlagOpen/FlagData' },
      { label: 'CCI3.0-HQ', url: 'https://arxiv.org/abs/2410.18505' }
    ]
  },
  {
    id: 'flageval',
    tier: 'minor',
    accent: '#6366F1',
    name: 'FlagEval',
    role: { zh: '参与', en: 'Contributor' },
    tag: {
      zh: '大模型评测体系',
      en: 'LLM Evaluation Suite'
    },
    links: [
      { label: 'Platform', url: 'https://flageval.baai.ac.cn/' },
      { label: 'GitHub', url: 'https://github.com/FlagOpen/FlagEval' }
    ]
  }
];
