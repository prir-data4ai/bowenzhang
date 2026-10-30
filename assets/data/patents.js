/* ==================================================================
   Patents — 中国发明专利
   group: first = 张博文为第一发明人
          other = 张博文参与（非第一发明人）
   status: granted = 已授权   pending = 在审 / 已公开
   数据来源：Google Patents（CNIPA 公开文本），发明人顺序以专利扉页为准。
   ================================================================== */
window.PATENTS = [
  /* ---------- 第一发明人 ---------- */
  {
    no: 'CN122528968A', app: '202611020793.2',
    filed: '2026-07-09', published: '2026-08-07', granted: '',
    status: 'pending', group: 'first',
    title: {
      zh: '视频模型的量化方法、装置、设备和介质',
      en: 'Quantization Method, Apparatus, Device and Medium for Video Models'
    },
    inventors: ['张博文', '杨振华', '崔艺凡', '杨瑞超', '赵鑫', '殷绪成'],
    me: 0,
    assignee: { zh: '北京科技大学', en: 'University of Science and Technology Beijing' },
    note: {
      zh: '基于有限差分算子度量时序切向失真，联合求解最优量化尺度与优化舍入变量，降低视频生成模型的量化误差。',
      en: 'Uses finite-difference operators to measure temporal tangential distortion, jointly solving for the optimal quantization scale and rounding variables to reduce quantization error in video models.'
    }
  },
  {
    no: 'CN122364352A', app: '202610619694.X',
    filed: '2026-05-07', published: '2026-07-10', granted: '',
    status: 'pending', group: 'first',
    title: {
      zh: '基于自演化记忆智能体查询处理方法、装置、设备和介质',
      en: 'Query Processing Method, Apparatus, Device and Medium Based on a Self-Evolving Memory Agent'
    },
    inventors: ['张博文', '杨瑞超', '王周', '殷绪成'],
    me: 0,
    assignee: { zh: '北京科技大学', en: 'University of Science and Technology Beijing' },
    note: {
      zh: '以记忆配置周期驱动智能体自主演化，动态提取目标记忆特征并生成工作记忆序列完成查询求解。',
      en: 'Drives agent self-evolution through memory configuration cycles, dynamically extracting target memory features and producing working-memory sequences for query solving.'
    }
  },
  {
    no: 'CN120508825A', app: '202510578638.1',
    filed: '2025-05-06', published: '2025-08-19', granted: '',
    status: 'pending', group: 'first',
    title: {
      zh: '偏好数据集构建方法、训练方法、设备、存储介质及产品',
      en: 'Preference Dataset Construction Method, Training Method, Device, Storage Medium and Product'
    },
    inventors: ['张博文'],
    me: 0,
    assignee: { zh: '北京智源人工智能研究院', en: 'Beijing Academy of Artificial Intelligence (BAAI)' },
    note: {
      zh: '对应 Infinity-Preference 数据集：按任务类型训练任务粒度偏好分类器，替代固定维度权重，构建多样且高质量的偏好数据。',
      en: 'Backs the Infinity-Preference dataset: trains task-granular preference classifiers per task type instead of using fixed dimension weights, yielding diverse and high-quality preference data.'
    }
  },
  {
    no: 'CN119513560A', app: '202510087589.1',
    filed: '2025-01-20', published: '2025-02-25', granted: '',
    status: 'pending', group: 'first',
    title: {
      zh: '基于分布的预训练数据自动筛选方法及电子设备',
      en: 'Distribution-Based Automatic Screening Method for Pre-training Data and Electronic Device'
    },
    inventors: ['张博文'],
    me: 0,
    assignee: { zh: '北京智源人工智能研究院', en: 'Beijing Academy of Artificial Intelligence (BAAI)' },
    note: {
      zh: '通过特征哈希与高效分布匹配，自动筛选与目标任务分布一致的预训练子集，筛选耗时降低 50% 以上。',
      en: 'Uses feature hashing and efficient distribution matching to select pre-training subsets aligned with the target task distribution, cutting screening time by over 50%.'
    }
  },
  {
    no: 'CN119988907A', app: '202510069082.3',
    filed: '2025-01-16', published: '2025-05-13', granted: '',
    status: 'pending', group: 'first',
    title: {
      zh: '大模型算法能力数据集构建方法、装置及电子设备',
      en: 'Method, Apparatus and Electronic Device for Constructing a Large Model Algorithmic Capability Dataset'
    },
    inventors: ['张博文'],
    me: 0,
    assignee: { zh: '北京智源人工智能研究院', en: 'Beijing Academy of Artificial Intelligence (BAAI)' },
    note: {
      zh: '以数据清洗与能力标注流水线，构建面向大模型算法能力（代码、推理、规划）的指令数据集。',
      en: 'A cleaning-and-capability-labelling pipeline that builds instruction data targeting LLMs algorithmic capabilities (code, reasoning, planning).'
    }
  },
  {
    no: 'CN119312399A', app: '202411833398.7',
    filed: '2024-12-13', published: '2025-01-14', granted: '',
    status: 'pending', group: 'first',
    title: {
      zh: '一种预训练数据的预处理方法及电子设备',
      en: 'A Preprocessing Method for Pre-training Data and Electronic Device'
    },
    inventors: ['张博文'],
    me: 0,
    assignee: { zh: '北京智源人工智能研究院', en: 'Beijing Academy of Artificial Intelligence (BAAI)' },
    note: {
      zh: '提出「数据大脑 + 多智能体算子」的自动化预处理框架：用大模型解析需求 Prompt，动态编排清洗、去重、有害内容与隐私过滤算子。',
      en: 'A "data brain + multi-agent operator" framework: an LLM parses the requirement prompt and dynamically orchestrates cleaning, deduplication, harmful-content and privacy filtering operators.'
    }
  },
  {
    no: 'CN119227815A', app: '202411745467.9',
    filed: '2024-12-02', published: '2024-12-31', granted: '',
    status: 'pending', group: 'first',
    title: {
      zh: '一种大语言模型数学推理优化方法及电子设备',
      en: 'A Mathematical Reasoning Optimization Method for Large Language Models and Electronic Device'
    },
    inventors: ['张博文'],
    me: 0,
    assignee: { zh: '北京智源人工智能研究院', en: 'Beijing Academy of Artificial Intelligence (BAAI)' },
    note: {
      zh: 'InfinityMATH 的核心方法：数值掩码得到通用问题，生成可复用函数式解题程序，经解释器执行与多轮对话修正后规模化合成指令数据。',
      en: 'Core method behind InfinityMATH: mask numbers into generalised problems, generate reusable functional solvers, verify via interpreter execution and multi-turn correction, then scale up instruction synthesis.'
    }
  },
  {
    no: 'CN113987426B', app: '202111154479.0',
    filed: '2021-09-29', published: '2022-01-28', granted: '2025-05-16',
    status: 'granted', group: 'first',
    title: {
      zh: '文件复用检测方法、装置及设备',
      en: 'File Reuse Detection Method, Apparatus and Device'
    },
    inventors: ['张博文', '许皓天', '韦皓川', '张荣'],
    me: 0,
    assignee: { zh: '阿里巴巴（中国）有限公司', en: 'Alibaba (China) Co., Ltd.' },
    note: {
      zh: '按文件类型自适应选取指纹方案（文本 / 图像 / 视频），多指纹相似度判定文件复用，用于文件安全保护场景。',
      en: 'Adaptively selects fingerprint schemes (text / image / video) per file type and judges reuse by multi-fingerprint similarity, for file security protection.'
    }
  },

  /* ---------- 其他（非第一发明人） ---------- */
  {
    no: 'CN109829042B', app: '201811623339.1',
    filed: '2018-12-28', published: '2019-05-31', granted: '2021-04-20',
    status: 'granted', group: 'other',
    title: {
      zh: '一种基于生物医学文献的知识问答系统及方法',
      en: 'A Knowledge Question-Answering System and Method Based on Biomedical Literature'
    },
    inventors: ['殷绪成', '晋赞霞', '张博文'],
    me: 2, advisor: 0,
    assignee: { zh: '北京科技大学', en: 'University of Science and Technology Beijing' },
    note: {
      zh: '融合问题分析、文档检索与片段检索，对应 BioASQ 生物医学问答参赛系统。',
      en: 'Combines question analysis, document retrieval and snippet retrieval — the system behind the BioASQ biomedical QA entry.'
    }
  },
  {
    no: 'CN109635083B', app: '201811426488.9',
    filed: '2018-11-27', published: '2019-04-16', granted: '2020-11-17',
    status: 'granted', group: 'other',
    title: {
      zh: '一种用于搜索 TED 演讲中话题式查询的文档检索方法',
      en: 'A Document Retrieval Method for Searching Topical Queries in TED Talks'
    },
    inventors: ['殷绪成', '方帆', '张博文'],
    me: 2, advisor: 0,
    assignee: { zh: '北京科技大学', en: 'University of Science and Technology Beijing' },
    note: {
      zh: '查询似然初检索 + LSTM/CNN 神经重排序，解决话题式查询与演讲文档之间的语义鸿沟。',
      en: 'Query-likelihood first-stage retrieval followed by LSTM/CNN neural re-ranking, bridging the semantic gap between topical queries and talk documents.'
    }
  },

  /* ---------- 其他（非第一发明人） ---------- */
  {
    no: 'CN119272059A', app: '202411814111.6',
    filed: '2024-12-11', published: '2025-01-07', granted: '',
    status: 'pending', group: 'other',
    title: {
      zh: '预训练数据集构建方法、训练方法、设备、介质及产品',
      en: 'Pre-training Dataset Construction Method, Training Method, Device, Medium and Product'
    },
    inventors: ['王良栋', '张博文', '刘广', '谷舒豪', '李季杰'],
    me: 1,
    assignee: { zh: '北京智源人工智能研究院', en: 'Beijing Academy of Artificial Intelligence (BAAI)' },
    note: {
      zh: '对应 CCI3.0 / CCI3.0-HQ 中文预训练语料：Qwen2-72B-Instruct 质量标注蒸馏到 BGE-M3 分类器，产出当时开源规模最大的高质量中文语料。',
      en: 'Backs the CCI3.0 / CCI3.0-HQ Chinese corpora: quality labels from Qwen2-72B-Instruct distilled into a BGE-M3 classifier, producing the largest open high-quality Chinese corpus at the time.'
    }
  }
];
