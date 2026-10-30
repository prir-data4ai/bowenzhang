/* ------------------------------------------------------------------
 * Publications / 论文列表
 * 字段说明：
 *   me      -> 本人（渲染时高亮）
 *   first   -> 第一作者
 *   corr    -> 通讯作者
 *   tags    -> 用于筛选：llm / moe / multimodal / data / code / ir / nlp / cv
 *   links   -> arxiv / html / code / pdf / slides / bib
 * ------------------------------------------------------------------ */
window.PUBLICATIONS = [
  /* ============================== 2026 ============================== */
  {
    year: 2026, venue: 'Nature 650', venueType: 'journal', tags: ['multimodal', 'llm'], highlight: true,
    title: 'Multimodal Learning with Next-Token Prediction for Large Multimodal Models',
    authors: ['Xinlong Wang', 'Yufeng Cui', 'Jinsheng Wang', 'Fan Zhang', 'Yueze Wang', 'Xiaosong Zhang', 'Zhengxiong Luo', 'Quan Sun', 'Zhen Li', 'Yuqi Wang', 'Qiying Yu', 'Yingli Zhao', 'Yulong Ao', 'Xuebin Min', 'Chunlei Men', 'Boya Wu', 'Bo Zhao', 'Bowen Zhang', 'Liangdong Wang', 'Guang Liu', 'Zheqi He', 'Xi Yang', 'Jingjing Liu', 'Yonghua Lin', 'Zhongyuan Wang', 'Tiejun Huang'], me: [17],
    links: { html: 'https://doi.org/10.1038/s41586-025-10041-x', arxiv: 'https://arxiv.org/abs/2409.18869', code: 'https://github.com/baaivision/Emu3' }
  },
  {
    year: 2026, venue: 'AAAI 2026', venueType: 'conf', tags: ['llm'],
    title: 'Predicting Emergent Tool Use in LLMs Before It Emerges: A Proxy Perspective',
    authors: ['Bowen Zhang', 'Yan Yan', 'Guang Liu', 'Xu-Cheng Yin'], me: [0], first: true,
    links: { html: 'https://doi.org/10.1609/aaai.v40i41.40763' }
  },
  {
    year: 2026, venue: 'ICMR 2026', venueType: 'conf', tags: ['cv', 'multimodal'],
    title: 'Beyond Optical Flow: Latent Micro-Motion as Visual Evidence in UAV Video',
    authors: ['Bo-Wen Zhang', 'Zhou Wang', 'Songlu Chen', 'Chun Yang', 'Xiaobin Zhu', 'Xu-Cheng Yin'], me: [0], first: true,
    links: { html: 'https://doi.org/10.1145/3805622.3810426' }
  },
  {
    year: 2026, venue: 'Findings of ACL 2026', venueType: 'conf', tags: ['multimodal', 'nlp'],
    title: 'Dialectical Structured Reasoning for Explainable Multimodal Fake News Detection',
    authors: ['Ruichao Yang', 'Yufan Bian', 'Wei Gao', 'Bowen Zhang', 'Jing Ma', 'Hongzhan Lin', 'Ziyang Luo', 'Xiaobin Zhu', 'Xucheng Yin'], me: [3], corr: true,
    links: { html: 'https://aclanthology.org/2026.findings-acl.1601/' }
  },
  {
    year: 2026, venue: 'CVPR 2026', venueType: 'conf', tags: ['multimodal', 'nlp'],
    title: 'Probabilistic Concept Graph Reasoning for Multimodal Misinformation Detection',
    authors: ['Ruichao Yang', 'Wei Gao', 'Xiaobin Zhu', 'Jing Ma', 'Hongzhan Lin', 'Ziyang Luo', 'Bowen Zhang', 'Xu-Cheng Yin'], me: [6], corr: true,
    links: { arxiv: 'https://arxiv.org/abs/2603.25203' }
  },
  {
    year: 2026, venue: 'Neurocomputing 2026', venueType: 'journal', tags: ['cv', 'multimodal'],
    title: 'ReVisE: Reflective visual editing for multi-instruction image manipulation',
    authors: ['Yan Yan', 'Junyi Xu', 'Bo-Wen Zhang', 'Zhenduo Zhang', 'Guang Liu'], me: [2],
    links: { html: 'https://doi.org/10.1016/j.neucom.2025.132424' }
  },
  {
    year: 2026, venue: 'ECCV 2026', venueType: 'conf', tags: ['multimodal', 'llm'],
    title: 'RoboBench: A Comprehensive Evaluation Benchmark for Multimodal Large Language Models as Embodied Brain',
    authors: ['Yulin Luo', 'Chun-Kai Fan', 'Menghang Dong', 'Jiayu Shi', 'Xiangju Mi', 'Mengdi Zhao', 'Bo-Wen Zhang', 'Cheng Chi', 'Jiaming Liu', 'Gaole Dai', 'Rongyu Zhang', 'Ruichuan An', 'Kun Wu', 'Zhengping Che', 'Shaoxuan Xie', 'Guocai Yao', 'Zhongxia Zhao', 'Pengwei Wang', 'Guang Liu', 'Zhongyuan Wang', 'Tiejun Huang', 'Shanghang Zhang'], me: [6], note: 'co-first',
    links: { arxiv: 'https://arxiv.org/abs/2510.17801' }
  },

  /* ============================== 2025 ============================== */
  {
    year: 2025, venue: 'arXiv 2025', venueType: 'preprint', tags: ['llm', 'data'],
    title: 'InCo-DPO: Balancing Distribution Shift and Data Quality for Enhanced Preference Optimization',
    authors: ['Yunan Wang', 'Jijie Li', 'Bo-Wen Zhang', 'Liangdong Wang', 'Guang Liu'], me: [2],
    links: { arxiv: 'https://arxiv.org/abs/2503.15880' }
  },
  {
    year: 2025, venue: 'arXiv 2025', venueType: 'preprint', tags: ['llm', 'data'],
    title: 'Infinity Instruct: Scaling Instruction Selection and Synthesis to Enhance Language Models',
    authors: ['Jijie Li', 'Li Du', 'Hanyu Zhao', 'Bowen Zhang', 'Liangdong Wang', 'Boyan Gao', 'Guang Liu', 'Yonghua Lin'], me: [3],
    links: { arxiv: 'https://arxiv.org/abs/2506.11116', code: 'https://huggingface.co/datasets/BAAI/Infinity-Instruct' }
  },
  {
    year: 2025, venue: 'Neurocomputing 2025', venueType: 'journal', tags: ['llm', 'data'],
    title: 'SPRInT: Scaling Programmatic Reasoning for INstruction Tuning in mathematics',
    authors: ['Yan Yan', 'Lin Li', 'Bo-Wen Zhang'], me: [2], corr: true,
    links: { html: 'https://doi.org/10.1016/j.neucom.2025.129868' }
  },
  {
    year: 2025, venue: 'JAIR 2025', venueType: 'journal', tags: ['nlp'],
    title: 'LabelCoRank: Revolutionizing Long Tail Multi-Label Classification with Co-Occurrence Reranking',
    authors: ['Yan Yan', 'Junyuan Liu', 'Bo-Wen Zhang'], me: [2], corr: true,
    links: { html: 'https://jair.org/index.php/jair/article/view/15475' }
  },

  /* ============================== 2024 ============================== */
  {
    year: 2024, venue: 'arXiv 2024', venueType: 'preprint', tags: ['llm', 'moe'], highlight: true,
    title: 'AquilaMoE: Efficient Training for MoE Models with Scale-Up and Scale-Out Strategies',
    authors: ['Bo-Wen Zhang', 'Liangdong Wang', 'Ye Yuan', 'Jijie Li', 'Shuhao Gu', 'Mengdi Zhao', 'Xinya Wu', 'Guang Liu', 'Chengwei Wu', 'Hanyu Zhao', 'Li Du', 'Yiming Ju', 'Quanyue Ma', 'Yulong Ao', 'Yingli Zhao', 'Songhe Zhu', 'Zhou Cao', 'Dong Liang', 'Yonghua Lin', 'Ming Zhang', 'Shunfei Wang', 'Yanxin Zhou', 'Min Ye', 'Xuekai Chen', 'Xinyang Yu', 'Xiangjun Huang', 'Jian Yang'], me: [0], first: true,
    links: { arxiv: 'https://arxiv.org/abs/2408.06567', code: 'https://huggingface.co/BAAI/AquilaMoE' }
  },
  {
    year: 2024, venue: 'CIKM 2024', venueType: 'conf', tags: ['data', 'llm'], highlight: true,
    title: 'InfinityMath: A Scalable Instruction Tuning Dataset in Programmatic Mathematical Reasoning',
    authors: ['Bo-Wen Zhang', 'Yan Yan', 'Lin Li', 'Guang Liu'], me: [0], first: true,
    links: { arxiv: 'https://arxiv.org/abs/2408.07089', code: 'https://huggingface.co/datasets/BAAI/InfinityMATH' }
  },
  {
    year: 2024, venue: 'arXiv 2024', venueType: 'preprint', tags: ['llm'], highlight: true,
    title: 'Aquila2 Technical Report',
    authors: ['Bo-Wen Zhang', 'Liangdong Wang', 'Jijie Li', 'Shuhao Gu', 'Xinya Wu', 'Zhengduo Zhang', 'Boyan Gao', 'Yulong Ao', 'Guang Liu'], me: [0], first: true,
    links: { arxiv: 'https://arxiv.org/abs/2408.07410', code: 'https://huggingface.co/BAAI/Aquila2-34B' }
  },
  {
    year: 2024, venue: 'arXiv 2024', venueType: 'preprint', tags: ['data', 'llm'],
    title: 'CCI3.0-HQ: A Large-Scale Chinese Dataset of High Quality Designed for Pre-training Large Language Models',
    authors: ['Liangdong Wang', 'Bowen Zhang', 'Chengwei Wu', 'Hanyu Zhao', 'Xiaofeng Shi', 'Shuhao Gu', 'Jijie Li', 'Quanyue Ma', 'Tengfei Pan', 'Guang Liu'], me: [1],
    links: { arxiv: 'https://arxiv.org/abs/2410.18505', code: 'https://huggingface.co/datasets/BAAI/CCI3-Data' }
  },
  {
    year: 2024, venue: 'arXiv 2024', venueType: 'preprint', tags: ['llm'],
    title: 'ReTok: Replacing Tokenizer to Enhance Representation Efficiency in Large Language Model',
    authors: ['Shuhao Gu', 'Mengdi Zhao', 'Bowen Zhang', 'Liangdong Wang', 'Jijie Li', 'Guang Liu'], me: [2],
    links: { arxiv: 'https://arxiv.org/abs/2410.04335' }
  },
  {
    year: 2024, venue: 'Neural Processing Letters 56(2)', venueType: 'journal', tags: ['nlp'],
    title: 'DialGNN: Heterogeneous Graph Neural Networks for Dialogue Classification',
    authors: ['Yan Yan', 'Bo-Wen Zhang', 'Peng-hao Min', 'Guanwen Ding', 'Jun-yuan Liu'], me: [1],
    links: { html: 'https://doi.org/10.1007/s11063-024-11595-z' }
  },
  {
    year: 2024, venue: 'Cognitive Computation 16(1)', venueType: 'journal', tags: ['nlp'],
    title: 'O²-Bert: Two-Stage Target-Based Sentiment Analysis',
    authors: ['Yan Yan', 'Bo-Wen Zhang', 'Guanwen Ding', 'Wenjie Li', 'Jie Zhang', 'Jia-Jing Li', 'Wenchao Gao'], me: [1],
    links: { html: 'https://doi.org/10.1007/s12559-023-10191-y' }
  },

  /* ============================== 2023 ============================== */
  {
    year: 2023, venue: 'arXiv 2023', venueType: 'preprint', tags: ['code', 'data'], highlight: true,
    title: 'TACO: Topics in Algorithmic COde Generation Dataset',
    authors: ['Rongao Li', 'Jie Fu', 'Bo-Wen Zhang', 'Tao Huang', 'Zhihong Sun', 'Chen Lyu', 'Guang Liu', 'Zhi Jin', 'Ge Li'], me: [2], corr: true, note: 'co-first', cites: '200+',
    links: { arxiv: 'https://arxiv.org/abs/2312.14852', code: 'https://huggingface.co/datasets/BAAI/TACO' }
  },
  {
    year: 2023, venue: 'arXiv 2023', venueType: 'preprint', tags: ['multimodal', 'cv'],
    title: 'CoIE: Chain-of-Instruct Editing for Multi-Attribute Face Manipulation',
    authors: ['Zhenduo Zhang', 'Bo-Wen Zhang', 'Guang Liu'], me: [1],
    links: { arxiv: 'https://arxiv.org/abs/2312.07879' }
  },
  {
    year: 2023, venue: 'ICASSP 2023', venueType: 'conf', tags: ['ir', 'nlp'],
    title: 'Contrastive Learning of Sentence Embeddings in Product Search',
    authors: ['Bo-Wen Zhang', 'Yan Yan', 'Jiapei Yu'], me: [0], first: true,
    links: { html: 'https://doi.org/10.1109/ICASSP49357.2023.10097165' }
  },
  {
    year: 2023, venue: 'Findings of ACL 2023', venueType: 'conf', tags: ['multimodal', 'cv'],
    title: 'AltCLIP: Altering the Language Encoder in CLIP for Extended Language Capabilities',
    authors: ['Zhongzhi Chen', 'Guang Liu', 'Bo-Wen Zhang', 'Qinghong Yang', 'Ledell Wu'], me: [2], cites: '100+',
    links: { html: 'https://aclanthology.org/2023.findings-acl.552', arxiv: 'https://arxiv.org/abs/2211.06679', code: 'https://github.com/FlagOpen/FlagAI' }
  },

  /* ============================== 2020 ============================== */
  {
    year: 2020, venue: 'ACM TALLIP 2020', venueType: 'journal', tags: ['nlp'],
    title: 'Chinese Short Text Classification with Mutual-Attention Convolutional Neural Networks',
    authors: ['Ming Hao', 'Bo Xu', 'Jing-Yi Liang', 'Bo-Wen Zhang', 'Xu-Cheng Yin'], me: [3],
    links: { html: 'https://doi.org/10.1145/3388970' }
  },
  {
    year: 2020, venue: 'Information Sciences 538', venueType: 'journal', tags: ['ir', 'nlp'],
    title: 'Ranking via Partial Ordering for Answer Selection',
    authors: ['Zan-Xia Jin', 'Bo-Wen Zhang', 'Fang Zhou', 'Jingyan Qin', 'Xu-Cheng Yin'], me: [1], first: true, note: 'co-first',
    links: { html: 'https://doi.org/10.1016/j.ins.2020.05.110' }
  },

  /* ============================== 2019 ============================== */
  {
    year: 2019, venue: 'Bioinformatics 2019', venueType: 'journal', tags: ['ir'],
    title: 'Health Assistant: Answering Your Questions Anytime from Biomedical Literature',
    authors: ['Zan-Xia Jin', 'Bo-Wen Zhang', 'Fan Fang', 'Le-Le Zhang', 'Xu-Cheng Yin'], me: [1],
    links: { html: 'https://doi.org/10.1093/bioinformatics/btz123' }
  },

  /* ============================== 2018 ============================== */
  {
    year: 2018, venue: 'CIKM 2018', venueType: 'conf', tags: ['ir', 'cv'],
    title: 'TED-KISS: A Known-Item Speech Video Search Benchmark',
    authors: ['Fan Fang', 'Bo-Wen Zhang', 'Xu-Cheng Yin', 'Haixia Man', 'Fang Zhou'], me: [1], note: 'co-first',
    links: { html: 'https://doi.org/10.1145/3269206.3269235' }
  },
  {
    year: 2018, venue: 'Cognitive Computation 2018', venueType: 'journal', tags: ['ir', 'nlp'],
    title: 'SSDM2: A Two-Stage Semantic Sequential Dependence Model Framework for Biomedical Question Answering',
    authors: ['Bo-Wen Zhang', 'Xu-Cheng Yin'], me: [0], first: true,
    links: { html: 'https://doi.org/10.1007/s12559-017-9525-x' }
  },
  {
    year: 2018, venue: 'IEEE Access 2018', venueType: 'journal', tags: ['ir'],
    title: 'Semantic Sequential Query Expansion for Biomedical Article Search',
    authors: ['Fan Fang', 'Bo-Wen Zhang', 'Xu-Cheng Yin'], me: [1],
    links: {}
  },
  {
    year: 2018, venue: 'Neural Processing Letters 2018', venueType: 'journal', tags: ['nlp'],
    title: 'LSTM²: Multi-Label Ranking for Document Classification',
    authors: ['Yan Yan', 'Ying Wang', 'Wenchao Gao', 'Bo-Wen Zhang', 'Chun Yang', 'Xu-Cheng Yin'], me: [3],
    links: { html: 'https://doi.org/10.1007/s11063-017-9636-0' }
  },

  /* ============================== 2017 ============================== */
  {
    year: 2017, venue: 'SIGIR 2017', venueType: 'conf', tags: ['ir'], highlight: true,
    title: 'Building Your Own Reading List Anytime via Embedding Relevance, Quality, Timeliness and Diversity',
    authors: ['Bo-Wen Zhang', 'Xu-Cheng Yin', 'Fang Zhou', 'Jian-Lin Jin'], me: [0], first: true,
    links: { html: 'https://doi.org/10.1145/3077136.3080734' }
  },
  {
    year: 2017, venue: 'ICC 2017', venueType: 'conf', tags: ['ir'],
    title: 'A Calculation Method for Social Network User Credibility',
    authors: ['Fang Zhou', 'Jian-Lin Jin', 'Xiaojiang Du', 'Bowen Zhang', 'Xu-Cheng Yin'], me: [3],
    links: { html: 'https://doi.org/10.1109/ICC.2017.7997425' }
  },
  {
    year: 2017, venue: 'BioNLP 2017', venueType: 'conf', tags: ['ir', 'nlp'],
    title: 'A Multi-strategy Query Processing Approach for Biomedical Question Answering: USTB_PRIR at BioASQ 2017 Task 5B',
    authors: ['Zan-Xia Jin', 'Bo-Wen Zhang', 'Fan Fang', 'Le-Le Zhang', 'Xu-Cheng Yin'], me: [1],
    links: { html: 'https://doi.org/10.18653/v1/W17-2348' }
  },

  /* ============================== 2016 ============================== */
  {
    year: 2016, venue: 'Information Sciences 367', venueType: 'journal', tags: ['ir'],
    title: 'A Generic Pseudo Relevance Feedback Framework with Heterogeneous Social Information',
    authors: ['Bo-Wen Zhang', 'Xu-Cheng Yin', 'Fang Zhou'], me: [0], first: true, note: 'co-first',
    links: { html: 'https://doi.org/10.1016/j.ins.2016.07.004' }
  },
  {
    year: 2016, venue: 'CLEF 2016 (Working Notes)', venueType: 'conf', tags: ['ir'],
    title: 'USTB at Social Book Search 2016 Suggestion Task: Active Books Set and Re-ranking',
    authors: ['Shao-Hui Feng', 'Bo-Wen Zhang', 'Xu-Cheng Yin', 'Zan-Xia Jin', 'Jian-Lin Jin', 'Jianwei Wu', 'Le-Le Zhang', 'Hao-Jie Pan', 'Fan Fang', 'Fang Zhou'], me: [1],
    links: { pdf: 'https://ceur-ws.org/Vol-1609/16091089.pdf' }
  },
  {
    year: 2016, venue: 'CCPR 2016', venueType: 'conf', tags: ['nlp'],
    title: 'Multi-label Ranking with LSTM² for Document Classification',
    authors: ['Yan Yan', 'Xu-Cheng Yin', 'Chun Yang', 'Bo-Wen Zhang', 'Hong-Wei Hao'], me: [3],
    links: { html: 'https://doi.org/10.1007/978-981-10-3005-5_29' }
  },

  /* ============================== 2015 ============================== */
  {
    year: 2015, venue: 'CLEF 2015 (Working Notes)', venueType: 'conf', tags: ['ir'],
    title: 'USTB at Social Book Search 2015 Suggestion Task: Metadata Expansion and Reranking',
    authors: ['Chun Hua Zhao', 'Fang Zhou', 'Bo-Wen Zhang', 'Xu-Cheng Yin', 'Ming Hao', 'Zhijuan Zhang', 'Tiantian Liu'], me: [2],
    links: { pdf: 'https://ceur-ws.org/Vol-1391/2-CR.pdf' }
  },
  {
    year: 2015, venue: 'CLEF 2015 (Working Notes)', venueType: 'conf', tags: ['ir'],
    title: 'A Generic Retrieval System for Biomedical Literatures: USTB at BioASQ2015 Question Answering Task',
    authors: ['Zhijuan Zhang', 'Tiantian Liu', 'Bo-Wen Zhang', 'Yan Li', 'Chun Hua Zhao', 'Shao-Hui Feng', 'Xu-Cheng Yin', 'Fang Zhou'], me: [2],
    links: { pdf: 'https://ceur-ws.org/Vol-1391/3-CR.pdf' }
  },

  /* ============================== 2014 ============================== */
  {
    year: 2014, venue: 'CIKM 2014', venueType: 'conf', tags: ['ir'], highlight: true,
    title: 'Social Book Search Reranking with Generalized Content-Based Filtering',
    authors: ['Bo-Wen Zhang', 'Xu-Cheng Yin', 'Xiao-Ping Cui', 'Jiao Qu', 'Bin Geng', 'Fang Zhou', 'Li Song', 'Hong-Wei Hao'], me: [0], first: true,
    links: { html: 'https://doi.org/10.1145/2661829.2661940' }
  },
  {
    year: 2014, venue: 'ICONIP 2014', venueType: 'conf', tags: ['ir'],
    title: 'Social Book Search with Pseudo-Relevance Feedback',
    authors: ['Bin Geng', 'Fang Zhou', 'Jiao Qu', 'Bo-Wen Zhang', 'Xiao-Ping Cui', 'Xu-Cheng Yin'], me: [3],
    links: { html: 'https://doi.org/10.1007/978-3-319-12640-1_25' }
  },
  {
    year: 2014, venue: 'CLEF 2014 (Working Notes)', venueType: 'conf', tags: ['ir'],
    title: 'USTB at INEX2014: Social Book Search Track',
    authors: ['Bo-Wen Zhang', 'Xu-Cheng Yin', 'Xiao-Ping Cui', 'Jiao Qu', 'Bin Geng', 'Fang Zhou', 'Hong-Wei Hao'], me: [0], first: true,
    links: { pdf: 'https://ceur-ws.org/Vol-1180/CLEF2014wn-Inex-ZhangEt2014.pdf' }
  }
];
