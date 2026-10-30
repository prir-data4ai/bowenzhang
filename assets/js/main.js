/* ==================================================================
   Bo-Wen Zhang — Academic Homepage
   Vanilla JS: bilingual switch, theme toggle, data rendering, motion.
   ================================================================== */
(function () {
  'use strict';

  /* ---------------- i18n dictionary ---------------- */
  const I18N = {
    zh: {
      'nav.about': '关于', 'nav.news': '动态', 'nav.projects': '研究项目',
      'nav.pubs': '论文', 'nav.patents': '专利', 'nav.service': '服务与荣誉',
      'nav.collab': '合作单位', 'nav.contact': '联系',

      'hero.tag1': '大模型', 'hero.tag2': '多模态', 'hero.tag3': '智能体', 'hero.tag4': '数据智能',
      'hero.name': 'Bo-Wen Zhang',
      'hero.nameCn': '张 博 文',
      'hero.role': '副教授 / Associate Professor',
      'hero.affilPrefix': '北京科技大学 计算机与通信工程学院',
      'hero.lede': '聚焦大模型、多模态与智能体研究，关注数据如何驱动智能：以「数据—模型—评测」为主线，研究高质量语料构建、指令与推理数据合成、高效预训练与可信评测，主导或参与 Aquila 全系列、Infinity 数据体系、TACO 代码基准、CCI 语料库等开源工作。',
      'hero.cta.pubs': '查看论文', 'hero.cta.projects': '研究项目', 'hero.cta.patents': '查看专利',

      'stat.pubs': '篇论文', 'stat.projects': '个开源项目', 'stat.first': '篇一作 / 通讯', 'stat.years': '年研究经历',
      'stat.cites': '次被引', 'stat.h': 'h-index', 'stat.i10': 'i10 指数',
      'stat.note': '论文与项目数按本站收录统计，引用指标来自 Google Scholar',

      'about.title': '个人简介',
      'about.lead': '研究从数据到智能，探索数据如何驱动智能，围绕「数据—模型—评测」展开 AI 研究。',
      'about.p1': '现任<span class="hl">北京科技大学计算机与通信工程学院副教授</span>，2019 年于北京科技大学获得博士学位（导师：殷绪成教授），先后在阿里巴巴（2019–2022）与<span class="hl">北京智源人工智能研究院</span>（2022–2025）从事算法研究与开发，2025 年 6 月回到母校任教。',
      'about.p2': '在智源期间主要承担大语言模型、多模态模型与代码模型的<span class="hl">预训练、指令微调与数据构建</span>工作：作为第一作者发布 Aquila2 技术报告与 AquilaMoE（提出 EfficientScale 两阶段高效 MoE 训练方法）、InfinityMATH（数值解耦的可扩展数学指令合成）；作为核心成员参与 Infinity-Instruct 千万级指令数据集与 Infinity-MM 多模态数据体系、TACO 代码生成基准、CCI 语料库以及 FlagAI 等开源生态建设；此外也参与了 Emu3 等探索性工作。',
      'about.p3': '更早阶段的研究围绕信息检索与多模态表示学习展开，包括社交图书搜索重排序（CIKM 2014）、阅读列表自动生成（SIGIR 2017）、生物医学问答（BioASQ / Bioinformatics）以及 AltCLIP 多语言多模态表示扩展（ACL 2023）。贯穿其中的核心问题是：<span class="hl">什么数据、什么架构、以什么方式组合，才能让模型真正学到能力</span>。',
      'about.foldOpen': '展开完整履历与教育经历',
      'about.foldHide': '收起',
      'about.edu': '教育与工作经历',
      'about.interests': '研究方向',
      'about.open': '开源与工程',

      'news.title': '最新动态', 'news.sub': '论文、开源发布与学术活动', 'news.more': '查看专刊',

      'projects.title': '研究项目',
      'projects.sub': '在智源研究院与北科大主导 / 参与的开源模型、数据集与工具链',
      'projects.note': '以下项目均为开源成果，模型权重与数据集托管在 Hugging Face 与 GitHub。',
      'projects.minorTitle': '其他参与项目', 'projects.award': '获奖',
      'projects.more': '详细介绍', 'projects.less': '收起详情',

      'pubs.title': '论文',
      'pubs.sub': '按年份倒序 · 作者上方标注第一作者 / 共同第一作者 / 通讯作者',
      'pubs.filter.all': '全部', 'pubs.filter.first': '一作 / 通讯', 'pubs.filter.llm': '大模型 & MoE',
      'pubs.filter.multimodal': '多模态', 'pubs.filter.data': '数据与评测', 'pubs.filter.ir': '信息检索',
      'pubs.more': '显示更早论文（2014–2015）', 'pubs.less': '收起更早论文',
      'pubs.link.arxiv': 'arXiv', 'pubs.link.html': '原文', 'pubs.link.pdf': 'PDF',
      'pubs.link.code': '代码 / 数据', 'pubs.link.slides': 'Slides', 'pubs.link.bib': 'BibTeX',
      'pubs.badge.first': '第一作者', 'pubs.badge.corr': '通讯作者', 'pubs.badge.cofirst': '共同第一作者', 'pubs.cite': '被引',

      'patents.title': '专利',
      'patents.sub': '中国发明专利 · 第一发明人 / 导师一作参与',
      'patents.filter.all': '全部', 'patents.filter.first': '第一发明人',
      'patents.filter.other': '其他',
      'patents.badge.first': '第一发明人', 'patents.badge.granted': '已授权', 'patents.badge.pending': '在审',
      'patents.no': '公开号', 'patents.filed': '申请日', 'patents.published': '公开日', 'patents.granted': '授权日',
      'patents.assignee': '申请人', 'patents.inventors': '发明人',
      'patents.link': '原文',
      'patents.note': '共 11 项中国发明专利（8 项本人为第一发明人，3 项本人参与）。数据来自国家知识产权局公开文本，发明人顺序以专利扉页为准。',

      'service.title': '服务与荣誉',
      'service.sub': '同行评议、专刊组织与科研获奖',
      'service.review': '审稿人',
      'service.reviewDesc': '担任以下会议与期刊的审稿人（程序委员会成员）。',
      'service.edit': '客座编辑',
      'service.siTitle': 'AI4Data and Data4AI: Data Intelligence for Foundation Models, Knowledge Systems, and Intelligent Agents',
      'service.siMeta': 'Electronics（MDPI，ISSN 2079-9292）· 投稿截止 2027-02-15',
      'service.siCta': '查看专刊',
      'service.award': '科研奖励',
      'service.rank': '本人排名',

      'collab.title': '合作单位',
      'collab.sub': '科研项目、联合共建与产学研合作',

      'contact.title': '联系方式',
      'contact.sub': '欢迎交流合作；对大模型、多模态、智能体与数据方向感兴趣的同学，欢迎邮件联系。',
      'contact.email': '邮箱', 'contact.office': '办公地点', 'contact.tel': '电话',
      'contact.officeVal': '北京科技大学 机电信息楼 804（海淀区学院路 30 号）',
      'contact.links': '学术主页',
      'contact.students': '招生',
      'contact.studentsDesc': '每年招收计算机科学与技术方向的硕士 / 博士研究生，欢迎对大模型预训练、多模态理解与生成、数据合成与评测感兴趣的同学邮件联系（附上简历与成绩单）。',

      'foot.text': '© <b>Bo-Wen Zhang</b> · 北京科技大学 计算机与通信工程学院 · 基于 GitHub Pages 构建',
      'foot.updated': '最近更新'
    },

    en: {
      'nav.about': 'About', 'nav.news': 'News', 'nav.projects': 'Projects',
      'nav.pubs': 'Publications', 'nav.patents': 'Patents', 'nav.service': 'Service',
      'nav.collab': 'Collaborations', 'nav.contact': 'Contact',

      'hero.tag1': 'Foundation Models', 'hero.tag2': 'Multimodal', 'hero.tag3': 'Agents', 'hero.tag4': 'Data Intelligence',
      'hero.name': 'Bo-Wen Zhang',
      'hero.nameCn': '张 博 文',
      'hero.role': 'Associate Professor',
      'hero.affilPrefix': 'School of Computer and Communication Engineering, USTB',
      'hero.lede': 'Research spans large language models, multimodal models and agents, centred on how data drives intelligence. Along the data–model–evaluation loop, the work covers high-quality corpus curation, instruction and reasoning data synthesis, efficient pretraining and trustworthy evaluation, leading or contributing to open-source efforts such as the Aquila series, the Infinity data ecosystem, the TACO benchmark and the CCI corpora.',
      'hero.cta.pubs': 'Publications', 'hero.cta.projects': 'Projects', 'hero.cta.patents': 'Patents',

      'stat.pubs': 'Papers', 'stat.projects': 'Open-source Projects', 'stat.first': 'First / Corresponding', 'stat.years': 'Years of Research',
      'stat.cites': 'Citations', 'stat.h': 'h-index', 'stat.i10': 'i10-index',
      'stat.note': 'Paper and project counts are computed from this site; citation metrics are from Google Scholar',

      'about.title': 'About Me',
      'about.lead': 'Researching the path from data to intelligence — how data drives intelligence — across the data–model–evaluation loop.',
      'about.p1': 'Currently an <span class="hl">Associate Professor</span> at the School of Computer and Communication Engineering, <span class="hl">University of Science and Technology Beijing (USTB)</span>. Received the PhD from USTB in 2019 (advised by Prof. Xu-Cheng Yin), then worked at Alibaba (2019–2022) and the <span class="hl">Beijing Academy of Artificial Intelligence (BAAI)</span> (2022–2025) before returning to USTB in June 2025.',
      'about.p2': 'At BAAI the work focused on <span class="hl">pretraining, instruction tuning and data construction</span> for large language, multimodal and code models: first author of the Aquila2 Technical Report and AquilaMoE (EfficientScale, a two-stage efficient MoE training recipe) and of InfinityMATH (number-decoupled scalable math instruction synthesis). As a core member, contributed to the ten-million-scale Infinity-Instruct dataset, the Infinity-MM multimodal data ecosystem, the TACO code generation benchmark, the CCI corpora and the FlagAI open-source ecosystem; also took part in exploratory work such as Emu3.',
      'about.p3': 'Earlier research centred on information retrieval and multimodal representation learning — social book search reranking (CIKM 2014), automatic reading-list construction (SIGIR 2017), biomedical question answering (BioASQ / Bioinformatics) and AltCLIP for multilingual multimodal representations (ACL 2023). One question runs through all of it: <span class="hl">what data, what architecture, and what combination actually teach a model a capability</span>.',
      'about.foldOpen': 'Show full bio, education & experience',
      'about.foldHide': 'Collapse',
      'about.edu': 'Education & Experience',
      'about.interests': 'Research Interests',
      'about.open': 'Open Source',

      'news.title': 'News', 'news.sub': 'Papers, releases and academic activities', 'news.more': 'Special issue',

      'projects.title': 'Research Projects',
      'projects.sub': 'Open models, datasets and toolkits led or contributed to at BAAI and USTB',
      'projects.note': 'All projects below are open source; weights and datasets are hosted on Hugging Face and GitHub.',
      'projects.minorTitle': 'Also Involved In', 'projects.award': 'Award',
      'projects.more': 'Details', 'projects.less': 'Hide details',

      'pubs.title': 'Publications',
      'pubs.sub': 'Reverse chronological · first, co-first and corresponding author roles are marked above the author list',
      'pubs.filter.all': 'All', 'pubs.filter.first': 'First / Corresponding', 'pubs.filter.llm': 'LLM & MoE',
      'pubs.filter.multimodal': 'Multimodal', 'pubs.filter.data': 'Data & Evaluation', 'pubs.filter.ir': 'Information Retrieval',
      'pubs.more': 'Show earlier papers (2014–2015)', 'pubs.less': 'Hide earlier papers',
      'pubs.link.arxiv': 'arXiv', 'pubs.link.html': 'DOI / HTML', 'pubs.link.pdf': 'PDF',
      'pubs.link.code': 'Code / Data', 'pubs.link.slides': 'Slides', 'pubs.link.bib': 'BibTeX',
      'pubs.badge.first': 'First Author', 'pubs.badge.corr': 'Corresponding Author', 'pubs.badge.cofirst': 'Co-first Author', 'pubs.cite': 'Cited',

      'patents.title': 'Patents',
      'patents.sub': 'Chinese invention patents · first inventor / co-inventor',
      'patents.filter.all': 'All', 'patents.filter.first': 'First Inventor',
      'patents.filter.other': 'Other',
      'patents.badge.first': 'First Inventor', 'patents.badge.granted': 'Granted', 'patents.badge.pending': 'Pending',
      'patents.no': 'Pub. No.', 'patents.filed': 'Filed', 'patents.published': 'Published', 'patents.granted': 'Granted',
      'patents.assignee': 'Assignee', 'patents.inventors': 'Inventors',
      'patents.link': 'Full Text',
      'patents.note': '11 Chinese invention patents in total (8 as first inventor, 3 as co-inventor). Data from CNIPA published texts; inventor order follows the patent front page.',

      'service.title': 'Service & Awards',
      'service.sub': 'Peer review, special-issue editorship and research awards',
      'service.review': 'Reviewer',
      'service.reviewDesc': 'Reviewer / program committee member for the following conferences and journals.',
      'service.edit': 'Guest Editor',
      'service.siTitle': 'AI4Data and Data4AI: Data Intelligence for Foundation Models, Knowledge Systems, and Intelligent Agents',
      'service.siMeta': 'Electronics (MDPI, ISSN 2079-9292) · submission deadline 15 Feb 2027',
      'service.siCta': 'View the Special Issue',
      'service.award': 'Awards',
      'service.rank': 'Rank',

      'collab.title': 'Collaborations',
      'collab.sub': 'Research projects, joint builds and industry–academia partnerships',

      'contact.title': 'Contact',
      'contact.sub': 'Always happy to discuss research and collaboration; students interested in LLMs, multimodality and data are welcome to reach out.',
      'contact.email': 'Email', 'contact.office': 'Office', 'contact.tel': 'Tel',
      'contact.officeVal': 'Room 804, Jidian Information Building, USTB, 30 Xueyuan Road, Haidian District, Beijing',
      'contact.links': 'Profiles',
      'contact.students': 'Prospective Students',
      'contact.studentsDesc': 'I recruit MSc and PhD students each year. If you are interested in LLM pretraining, multimodal understanding and generation, or data synthesis and evaluation, please email me your CV and transcript.',

      'foot.text': '© <b>Bo-Wen Zhang</b> · School of Computer and Communication Engineering, USTB · Built with GitHub Pages',
      'foot.updated': 'Last updated'
    }
  };

  /* ---------------- Shared bilingual data ---------------- */
  const TIMELINE = [
    { yr: { zh: '2025.06 – 今', en: '2025.06 – now' }, ti: { zh: '副教授', en: 'Associate Professor' }, or: { zh: '北京科技大学 计算机与通信工程学院', en: 'USTB, School of Computer & Communication Engineering' } },
    { yr: { zh: '2022.08 – 2025.03', en: '2022.08 – 2025.03' }, ti: { zh: '算法研究员 / 副研究员', en: 'Researcher / Associate Researcher' }, or: { zh: '北京智源人工智能研究院', en: 'Beijing Academy of Artificial Intelligence (BAAI)' } },
    { yr: { zh: '2019.01 – 2022.08', en: '2019.01 – 2022.08' }, ti: { zh: '高级算法工程师', en: 'Senior Algorithm Engineer' }, or: { zh: '阿里巴巴 · 安全部 / 飞猪', en: 'Alibaba Group · Security / Fliggy' } },
    { yr: { zh: '2013.09 – 2019.01', en: '2013.09 – 2019.01' }, ti: { zh: '博士（计算机科学与技术）', en: 'PhD in Computer Science' }, or: { zh: '北京科技大学 · 导师 殷绪成 教授', en: 'USTB · Advisor: Prof. Xu-Cheng Yin' } },
    { yr: { zh: '2009.09 – 2013.07', en: '2009.09 – 2013.07' }, ti: { zh: '学士（计算机科学与技术）', en: 'BSc in Computer Science' }, or: { zh: '北京科技大学', en: 'University of Science and Technology Beijing' } }
  ];

  const INTERESTS = [
    { zh: '大语言模型预训练', en: 'LLM Pretraining' },
    { zh: 'MoE 架构与高效训练', en: 'MoE & Efficient Training' },
    { zh: '多模态理解与生成', en: 'Multimodal Understanding & Generation' },
    { zh: '指令数据合成', en: 'Instruction Data Synthesis' },
    { zh: '高质量语料构建', en: 'High-Quality Corpus Curation' },
    { zh: '代码大模型', en: 'Code LLMs' },
    { zh: '数学推理', en: 'Mathematical Reasoning' },
    { zh: '模型评测', en: 'Model Evaluation' },
    { zh: '信息检索', en: 'Information Retrieval' },
    { zh: '具身智能', en: 'Embodied AI' }
  ];

  /* 合作高校与企业：只展示单位 logo，不展示文字 */
  const COLLABS = [
    { logo: 'assets/img/logos/pku.svg', name: { zh: '北京大学', en: 'Peking University' }, url: 'https://www.pku.edu.cn', h: 54 },
    { logo: 'assets/img/logos/cumtb.svg', name: { zh: '中国矿业大学（北京）', en: 'China University of Mining and Technology-Beijing' }, url: 'https://www.cumtb.edu.cn', h: 56 },
    { logo: 'assets/img/logos/tencent.svg', name: { zh: '腾讯科技', en: 'Tencent' }, url: 'https://www.tencent.com' },
    { logo: 'assets/img/logos/huayun.png', name: { zh: '中国华云气象科技集团有限公司', en: 'China Huayun Meteorological Technology Group' }, url: 'https://www.cnhyc.com', h: 44, lift: true },
    { logo: 'assets/img/logos/antgroup.svg', name: { zh: '蚂蚁集团', en: 'Ant Group' }, url: 'https://www.antgroup.com', adapt: true },
    { logo: 'assets/img/logos/wisetech.png', name: { zh: '北京万讯博通科技发展有限公司', en: 'Beijing Wanxun Botong Technology Co., Ltd.' }, url: 'https://www.wise-tech.com.cn', mono: true }
  ];

  /* 科研奖励 */
  const AWARDS = [
    {
      year: '2025',
      rank: '9/13',
      prize: { zh: '中国电子学会科学技术进步奖 · 一等奖', en: 'Science and Technology Progress Award, First Prize — Chinese Institute of Electronics' },
      title: {
        zh: '面向开放环境的低质图像表征与复杂图文识别技术及应用',
        en: 'Low-quality image representation and complex image–text recognition in open environments, and their applications'
      },
      note: { zh: '殷绪成 等', en: 'with Prof. Xu-Cheng Yin et al.' }
    },
    {
      year: '2018',
      rank: '12/17',
      prize: { zh: '教育部科技进步奖 · 二等奖', en: 'Science and Technology Progress Award, Second Prize — Ministry of Education' },
      title: {
        zh: '大规模网络图像的文本识别技术及应用',
        en: 'Text recognition in large-scale web images and its applications'
      },
      note: { zh: '殷绪成 等', en: 'with Prof. Xu-Cheng Yin et al.' }
    }
  ];

  /* ---------------- State ---------------- */
  let LANG = localStorage.getItem('bwz-lang') || 'zh';
  let THEME = localStorage.getItem('bwz-theme');
  let activeFilter = 'all';
  let showEarly = false;
  let activePatFilter = 'all';

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const t = (k) => (I18N[LANG] && I18N[LANG][k]) || (I18N.zh[k] || k);
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const pick = (o) => (o && (o[LANG] || o.zh)) || '';

  /* ---------------- Theme ---------------- */
  function applyTheme() {
    if (!THEME) {
      THEME = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', THEME);
    const btn = $('#themeToggle');
    if (btn) btn.setAttribute('aria-label', THEME === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
  function toggleTheme() {
    THEME = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('bwz-theme', THEME);
    applyTheme();
  }

  /* ---------------- i18n ---------------- */
  function applyI18n() {
    document.documentElement.setAttribute('lang', LANG === 'zh' ? 'zh-CN' : 'en');
    document.title = LANG === 'zh'
      ? '张博文 Bo-Wen Zhang | 北京科技大学 副教授 · 大模型 · 多模态 · 智能体 · 数据智能'
      : 'Bo-Wen Zhang | Associate Professor, USTB · Foundation Models · Multimodal · Agents · Data Intelligence';
    $$('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n');
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = t(k);
      else el.textContent = t(k);
    });
    $$('[data-i18n-attr]').forEach((el) => {
      const spec = el.getAttribute('data-i18n-attr');
      spec.split(',').forEach((pair) => {
        const [attr, key] = pair.split(':').map((s) => s.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });
    const lb = $('.lang-btn');
    if (lb) $$('.l', lb).forEach((s) => s.classList.toggle('on', s.dataset.lang === LANG));
    renderDynamic();
  }
  function toggleLang() {
    LANG = LANG === 'zh' ? 'en' : 'zh';
    localStorage.setItem('bwz-lang', LANG);
    applyI18n();
  }

  /* ---------------- Render: timeline / interests / service ---------------- */
  function renderTimeline() {
    const ul = $('#timeline');
    if (!ul) return;
    ul.innerHTML = TIMELINE.map((e) => `
      <li>
        <div class="yr">${esc(pick(e.yr))}</div>
        <div class="ti">${esc(pick(e.ti))}</div>
        <div class="or">${esc(pick(e.or))}</div>
      </li>`).join('');
  }
  function renderInterests() {
    const box = $('#interests');
    if (!box) return;
    box.innerHTML = INTERESTS.map((i) => `<span class="chip">${esc(pick(i))}</span>`).join('');
  }
  function renderAwards() {
    const box = $('#awardList');
    if (!box) return;
    box.innerHTML = AWARDS.map((a) => `
      <div class="award">
        <div class="aw-year">${esc(a.year)}</div>
        <div class="aw-body">
          <div class="aw-prize">${esc(pick(a.prize))}</div>
          <div class="aw-title">${esc(pick(a.title))}</div>
          <div class="aw-meta">${esc(pick(a.note))}<span class="aw-sep">·</span>${esc(t('service.rank'))} ${esc(a.rank)}</div>
        </div>
      </div>`).join('');
  }

  /* ---------------- Render: collaborations ---------------- */
  function renderCollab() {
    const box = $('#collabGrid');
    if (!box) return;
    box.innerHTML = COLLABS.map((c) => `
      <div class="collab-item">
        <a href="${c.url}" target="_blank" rel="noopener" aria-label="${esc(pick(c.name))}">
          <img src="${c.logo}" alt="${esc(pick(c.name))}"${c.mono ? ' class="mono"' : c.adapt ? ' class="adapt-dark"' : c.lift ? ' class="lift"' : ''}${c.h ? ` style="height:${c.h}px"` : ''} loading="lazy">
        </a>
      </div>`).join('');
  }

  /* ---------------- Render: news ---------------- */
  function renderNews() {
    const box = $('#newsList');
    if (!box || !window.NEWS) return;
    box.innerHTML = window.NEWS.map((n) => `
      <div class="news-item reveal">
        <div class="d">${esc(n.date)}</div>
        <div class="t">${esc(pick(n.tag))}</div>
        <div class="c">${esc(pick(n))}${n.link ? ` <a class="news-link" href="${esc(n.link)}" target="_blank" rel="noopener">${esc(t('news.more'))} →</a>` : ''}</div>
      </div>`).join('');
  }

  /* ---------------- Render: projects ---------------- */
  const projLinks = (p) => (p.links || [])
    .map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('');

  function renderProjects() {
    if (!window.PROJECTS) return;
    const all = window.PROJECTS;
    const main = all.filter((p) => (p.tier || 'main') === 'main');
    const minor = all.filter((p) => p.tier === 'minor');

    const box = $('#projectsGrid');
    if (box) {
      // 记录展开状态，重渲染（如切换语言）后保持
      const opened = new Set($$('#projectsGrid .proj-more[open]').map((d) => d.dataset.name));
      box.innerHTML = main.map((p) => `
        <article class="proj reveal" style="--accent:${p.accent}">
          <div class="proj-head">
            ${p.logo ? `<div class="proj-logo"><img src="${p.logo}" alt="${esc(p.name)} logo" loading="lazy"></div>` : ''}
            <div style="min-width:0">
              <h3>${esc(p.name)}</h3>
              <div class="role">${esc(pick(p.role))}</div>
            </div>
            <div class="period">${esc(p.period || '')}</div>
          </div>
          <div class="proj-links">${projLinks(p)}</div>
          <div class="tagline">${esc(pick(p.tag))}</div>
          ${(pick(p.desc) || (p.bullets || []).length) ? `
          <details class="proj-more" data-name="${esc(p.name)}"${opened.has(p.name) ? ' open' : ''}>
            <summary>
              <span class="lbl-more" data-i18n="projects.more">${esc(t('projects.more'))}</span>
              <span class="lbl-less" data-i18n="projects.less">${esc(t('projects.less'))}</span>
              <i class="chev" aria-hidden="true"></i>
            </summary>
            <div class="more-body">
              ${pick(p.desc) ? `<p class="desc">${esc(pick(p.desc))}</p>` : ''}
              ${(p.bullets || []).length ? `<ul>${(p.bullets || []).map((b) => `<li class="${b.win ? 'win' : ''}">${b.win ? `<span class="win-tag">${esc(t('projects.award'))}</span>` : ''}${esc(pick(b))}</li>`).join('')}</ul>` : ''}
            </div>
          </details>` : ''}
        </article>`).join('');
    }

    const minorBox = $('#minorProjects');
    if (minorBox) {
      minorBox.innerHTML = minor.map((p) => `
        <div class="minor-item reveal">
          <div class="mn-name">${esc(p.name)}</div>
          <div class="mn-tag">${esc(pick(p.tag))}</div>
          <div class="mn-links">${projLinks(p)}</div>
        </div>`).join('');
    }
  }

  /* ---------------- Render: publications ---------------- */
  const FILTER_MAP = {
    all: () => true,
    first: (p) => p.first || p.corr,
    llm: (p) => p.tags.includes('llm') || p.tags.includes('moe') || p.tags.includes('code'),
    multimodal: (p) => p.tags.includes('multimodal') || p.tags.includes('cv'),
    data: (p) => p.tags.includes('data') || p.tags.includes('eval'),
    ir: (p) => p.tags.includes('ir')
  };

  function pubAuthors(p) {
    return p.authors.map((a, i) => (p.me && p.me.indexOf(i) !== -1 ? `<span class="me">${esc(a)}</span>` : esc(a))).join(', ');
  }
  /* 作者贡献标注：第一 / 共同第一 / 通讯，统一显示在作者列表上方 */
  function pubRoles(p) {
    const out = [];
    if (p.first) out.push(`<span class="badge first">${esc(t('pubs.badge.first'))}</span>`);
    if (p.note === 'co-first') out.push(`<span class="badge cofirst">${esc(t('pubs.badge.cofirst'))}</span>`);
    if (p.corr) out.push(`<span class="badge corr">${esc(t('pubs.badge.corr'))}</span>`);
    return out.join('');
  }
  function pubLinks(p) {
    const order = ['arxiv', 'html', 'pdf', 'code', 'slides', 'bib'];
    const labels = {
      arxiv: t('pubs.link.arxiv'), html: t('pubs.link.html'), pdf: t('pubs.link.pdf'),
      code: t('pubs.link.code'), slides: t('pubs.link.slides'), bib: t('pubs.link.bib')
    };
    return order.filter((k) => p.links && p.links[k]).map((k) => `<a href="${p.links[k]}" target="_blank" rel="noopener">${esc(labels[k])} ↗</a>`).join('');
  }

  function renderPubs() {
    const box = $('#pubList');
    if (!box || !window.PUBLICATIONS) return;
    const all = window.PUBLICATIONS.slice().sort((a, b) => b.year - a.year);
    const test = FILTER_MAP[activeFilter] || FILTER_MAP.all;
    let list = all.filter(test);
    const early = list.filter((p) => p.year <= 2015);
    const recent = list.filter((p) => p.year > 2015);
    let shown = showEarly ? list : recent;

    const years = [...new Set(shown.map((p) => p.year))];
    box.innerHTML = years.map((y) => `
      <div class="pub-year">
        <div class="year-label"><b>${y}</b><span class="line"></span></div>
        ${shown.filter((p) => p.year === y).map((p) => `
          <div class="pub reveal${p.highlight ? ' highlight' : ''}">
            <div class="pub-title">${esc(p.title)}</div>
            ${pubRoles(p) ? `<div class="pub-roles">${pubRoles(p)}</div>` : ''}
            <div class="pub-authors">${pubAuthors(p)}</div>
            <div class="pub-meta">
              <span class="venue ${p.venueType || 'preprint'}">${esc(p.venue)}</span>
              ${p.cites ? `<span class="badge cite">${esc(t('pubs.cite'))} ${esc(p.cites)}</span>` : ''}
              ${pubLinks(p) ? `<span class="pub-links">${pubLinks(p)}</span>` : ''}
            </div>
          </div>`).join('')}
      </div>`).join('') || `<p style="color:var(--text-mute)">—</p>`;

    const cnt = $('#pubCount');
    if (cnt) {
      const n = shown.length, total = all.length;
      cnt.textContent = LANG === 'zh' ? `显示 ${n} / ${total} 篇` : `Showing ${n} / ${total}`;
    }
    const more = $('#pubMore');
    if (more) {
      more.style.display = early.length ? '' : 'none';
      more.textContent = showEarly ? t('pubs.less') : t('pubs.more');
    }
    observeReveal();
  }

  function renderPatents() {
    const box = $('#patList');
    if (!box || !window.PATENTS) return;
    const all = window.PATENTS.slice().sort((a, b) => String(b.filed).localeCompare(String(a.filed)));
    const list = activePatFilter === 'all' ? all : all.filter((p) => p.group === activePatFilter);

    box.innerHTML = list.map((p) => {
      const inv = (p.inventors || []).map((n, i) =>
        `<span class="inv${i === p.me ? ' me' : ''}">${esc(n)}</span>`).join('<span class="sep">·</span>');
      const granted = p.status === 'granted';
      const rows = [
        [t('patents.no'), p.no],
        [t('patents.filed'), p.filed],
        [t('patents.published'), p.published]
      ];
      if (p.granted) rows.push([t('patents.granted'), p.granted]);
      if (p.app) rows.push([t('patents.assignee') === 'Assignee' ? 'App. No.' : '申请号', p.app]);
      return `
        <article class="pat reveal${granted ? ' granted' : ''}">
          <div class="pat-head">
            <h3 class="pat-title">${esc(pick(p.title))}</h3>
            ${p.group === 'first' ? `<span class="badge first">${esc(t('patents.badge.first'))}</span>` : ''}
            <span class="badge ${granted ? 'granted' : 'pending'}">${esc(t('patents.badge.' + (granted ? 'granted' : 'pending')))}</span>
          </div>
          <div class="pat-inventors"><span class="k">${esc(t('patents.inventors'))}</span>${inv}</div>
          <div class="pat-meta">
            <span class="pat-assignee">${esc(pick(p.assignee))}</span>
            ${rows.map(([k, v]) => `<span class="chip"><i>${esc(k)}</i>${esc(v || '')}</span>`).join('')}
            <a class="chip link" href="https://patents.google.com/patent/${p.no}/zh" target="_blank" rel="noopener">${esc(t('patents.link'))} ↗</a>
          </div>
          ${p.note ? `<p class="pat-desc">${esc(pick(p.note))}</p>` : ''}
        </article>`;
    }).join('') || `<p style="color:var(--text-mute)">—</p>`;

    const cnt = $('#patCount');
    if (cnt) {
      const n = list.length, total = all.length;
      cnt.textContent = LANG === 'zh' ? `显示 ${n} / ${total} 项` : `Showing ${n} / ${total}`;
    }
    observeReveal();
  }

  function renderDynamic() {
    renderTimeline(); renderInterests(); renderAwards(); renderCollab();
    renderNews(); renderProjects(); renderPubs(); renderPatents();
    observeReveal();
  }

  /* ---------------- Reveal on scroll ---------------- */
  let io = null;
  function observeReveal() {
    if (!('IntersectionObserver' in window)) {
      $$('.reveal').forEach((el) => el.classList.add('in'));
      return;
    }
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { rootMargin: '0px 0px -5% 0px', threshold: 0.01 });
    }
    $$('.reveal:not(.in)').forEach((el) => io.observe(el));
    // safety net: never leave content invisible
    clearTimeout(observeReveal._t);
    observeReveal._t = setTimeout(() => {
      $$('.reveal:not(.in)').forEach((el) => el.classList.add('in'));
    }, 2600);
  }

  /* ---------------- Nav behaviour ---------------- */
  function initNav() {
    const nav = $('.nav');
    const toTop = $('#toTop');
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      nav.classList.toggle('scrolled', y > 24);
      toTop.classList.toggle('show', y > 600);
      let cur = '';
      $$('section[id]').forEach((s) => { if (y + 140 >= s.offsetTop) cur = s.id; });
      $$('.nav-links a').forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    const toggle = $('#navToggle');
    const links = $('.nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', () => links.classList.toggle('open'));
      links.addEventListener('click', (e) => { if (e.target.tagName === 'A') links.classList.remove('open'); });
    }
  }

  /* ---------------- Boot ---------------- */
  function init() {
    applyTheme();
    $('#themeToggle').addEventListener('click', toggleTheme);
    $('.lang-btn').addEventListener('click', toggleLang);

    $$('.filter:not(.pf)').forEach((btn) => {
      btn.addEventListener('click', () => {
        $$('.filter:not(.pf)').forEach((b) => b.classList.remove('on'));
        btn.classList.add('on');
        activeFilter = btn.dataset.filter;
        renderPubs();
      });
    });
    $$('.pf').forEach((btn) => {
      btn.addEventListener('click', () => {
        $$('.pf').forEach((b) => b.classList.remove('on'));
        btn.classList.add('on');
        activePatFilter = btn.dataset.pfilter;
        renderPatents();
      });
    });
    const more = $('#pubMore');
    if (more) more.addEventListener('click', () => { showEarly = !showEarly; renderPubs(); });

    initNav();
    applyI18n();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
