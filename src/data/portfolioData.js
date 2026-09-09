export const personalInfo = {
  name: "Hanzala Malik",
  role: "Data Science & AI/ML Engineer",
  location: "Islamabad, PK",
  email: "hanzala.malikk23@gmail.com",
  phone: "+92-302-5303305",
  github: "https://github.com/Hanzala007-code",
  linkedin: "https://linkedin.com/in/hanzala-malik-174934182",
  tagline: "Building & Shipping Production AI Systems — Not Just Coursework.",
  bio: "Data Science graduate from FAST NUCES delivering end-to-end intelligent systems. From state-of-the-art computer vision models (ConvNeXt, YOLOv8) and speech diarization pipelines (Whisper, pyannote) to multi-LLM voting consensus engines and enterprise automation workflows. I own the full engineering lifecycle: raw data processing, architectural design, fine-tuning, and robust FastAPI/Flask backend deployment.",
  education: {
    degree: "Bachelor of Science in Data Science",
    institution: "National University of Computer and Emerging Sciences (FAST NUCES)",
    location: "Islamabad, Pakistan",
    period: "2022 — 2026"
  },
  stats: [
    { label: "Production Pipelines", value: "12+", suffix: "" },
    { label: "Model Benchmark Acc", value: "92", suffix: "%" },
    { label: "Vendors Automated", value: "300", suffix: "+" },
    { label: "Architecture Classes", value: "11", suffix: " Diseases" }
  ]
};

export const projects = [
  {
    id: "skinvision-ai",
    title: "SkinVision AI: Medical Diagnosis & Clinical Decision Support",
    category: "Computer Vision",
    featured: true,
    badge: "92% Accuracy Benchmark",
    description: "End-to-end dermatology screening system combining deep ConvNeXt neural networks with an evidence-based structured knowledge base and dynamic LLM clinical report generation.",
    metrics: ["ConvNeXt Backbone", "11 Skin Conditions", "FastAPI & React", "Safe Offline Fallback"],
    tags: ["PyTorch", "ConvNeXt", "FastAPI", "React", "LLM", "Medical AI"],
    github: "https://github.com/Hanzala007-code/skin-diagnosis-system",
    accentColor: "#00F0FF"
  },
  {
    id: "voting-llm-referee",
    title: "Multi-AI Referee & Voting Ensemble LLM Consensus System",
    category: "Agentic AI",
    featured: true,
    badge: "Multi-Model Consensus",
    description: "High-reliability multi-LLM deliberation architecture that dispatches prompts across diverse foundation models (GPT-4, Claude, Gemini, Mistral, Groq), conducts blind peer-voting, and synthesizes optimal verified responses via an autonomous AI Referee.",
    metrics: ["Multi-Provider Fan-Out", "Peer-Voting Protocol", "Autonomous Referee Model", "Prompt Audit Telemetry"],
    tags: ["Multi-Agent LLMs", "Ensemble Voting", "FastAPI/Flask", "OpenAI", "Gemini", "Groq"],
    github: "https://github.com/Hanzala007-code",
    accentColor: "#8A2BE2"
  },
  {
    id: "speech-diarization-pipeline",
    title: "Automated Meeting Minutes & Neural Speaker Diarization Pipeline",
    category: "Speech & NLP",
    featured: true,
    badge: "Enterprise Voice Intelligence",
    description: "Production-grade audio intelligence pipeline transcribing multi-speaker executive meetings. Combines FFmpeg audio preprocessing, Silero VAD silence suppression, faster-Whisper ASR, wav2vec2 CTC forced alignment, and pyannote.audio neural speaker diarization for millisecond-level speaker-attributed transcripts and action summaries.",
    metrics: ["Multi-Speaker Attribution", "Silero VAD Silence Stripping", "faster-Whisper & wav2vec2 CTC", "pyannote.audio Overlap Handling"],
    tags: ["Whisper ASR", "pyannote.audio", "wav2vec2", "Audio DSP", "FastAPI", "Python"],
    github: "https://github.com/Hanzala007-code",
    accentColor: "#FFB800"
  },
  {
    id: "invoice-processing-engine",
    title: "Dynamic Multi-Vendor Invoice Processing & Spatial Layout Engine",
    category: "AI Automation",
    featured: true,
    badge: "Document AI & Spatial OCR",
    description: "High-throughput enterprise document intelligence system designed for ~300 unique vendor formats. Replaces brute-force OCR by fingerprinting spatial bounding-box templates once and dynamically extracting line-item deltas, tax IDs, and billing amounts with cross-field arithmetic validation.",
    metrics: ["~300 Vendors Supported", "Spatial Template Fingerprinting", "Dynamic Delta Extraction", "85% Latency Reduction"],
    tags: ["Document AI", "FastAPI", "Python", "Spatial Layout Parsing", "OCR Pipelines", "Enterprise Automation"],
    github: "https://github.com/Hanzala007-code",
    accentColor: "#38EF7D"
  },
  {
    id: "petroprice-calculation-engine",
    title: "Enterprise Petroleum Product Pricing & OGRA Calculation Engine",
    category: "AI Automation",
    featured: true,
    badge: "Fintech & Energy Pricing",
    description: "Enterprise-grade downstream petroleum calculation platform modeling dynamic product pricing, ex-refinery computations, dealer margins, and OGRA official circular reconciliations with automated dual-workbook Excel synchronization.",
    metrics: ["OGRA Price Formulas", "Excel Formula Sync", "RBAC & Audit Logging", "Automated Reconciliation"],
    tags: ["Flask", "Python", "Pandas", "Energy Pricing", "Financial Modeling", "Audit Logs"],
    github: "https://github.com/Hanzala007-code",
    accentColor: "#FF6B6B"
  },
  {
    id: "ifem-analytics-dashboard",
    title: "Cnergyico IFEM Regulatory & Platts Market Analytics Dashboard",
    category: "Data Engineering",
    featured: true,
    badge: "Market Intelligence & Scraper",
    description: "Regulatory tracking and market intelligence platform monitoring Inland Freight Equalization Margin (IFEM) circulars from OGRA and real-time Platts global commodity indices, featuring OCR PDF ingestion and interactive multi-granularity analytics.",
    metrics: ["OGRA Scraper Daemon", "Platts Market Ingestion", "OCR PDF Extraction", "Multi-Granularity Trends"],
    tags: ["Flask", "Tesseract OCR", "Web Scraping", "SQLite", "Chart.js", "Data Engineering"],
    github: "https://github.com/Hanzala007-code",
    accentColor: "#4FACFE"
  },
  {
    id: "agentic-housing",
    title: "Habitat Multi-Agent Housing Consultant",
    category: "Agentic AI",
    featured: true,
    badge: "Local Ollama LLM System",
    description: "Multi-agent real estate consultancy system inspired by HabitatAgent. Features intent classification, safety guardrails, structured constraint parsing, and trade-off-aware property recommendation.",
    metrics: ["qwen2.5:3b Local Engine", "Multi-Agent Topology", "Streamlit UI", "Pakistani Real Estate Data"],
    tags: ["Ollama", "Multi-Agent", "Python", "Streamlit", "Prompt Engineering", "NLP"],
    github: "https://github.com/Hanzala007-code/Agentic-housing-consultant-",
    accentColor: "#8A2BE2"
  },
  {
    id: "facial-emotion-fer",
    title: "Facial Emotion Recognition (FER) Research",
    category: "Computer Vision",
    featured: true,
    badge: "CNN + Transformer & CBAM",
    description: "Deep learning research evaluating the accuracy-efficiency trade-off between lightweight CNNs (ResNet18, MobileNetV2, EfficientNet-B0) and hybrid attention/transformer mechanisms on the FER-2013 benchmark.",
    metrics: ["7 Emotion Classes", "Attention Mechanisms", "Real-Time Webcam Inference", "Multi-Seed Ablation"],
    tags: ["PyTorch", "Vision Transformers", "CBAM", "OpenCV", "FER-2013"],
    github: "https://github.com/Hanzala007-code/Facial-emotion-detection-FER",
    accentColor: "#00F5A0"
  },
  {
    id: "cctv-gun-detection",
    title: "AI Surveillance System: Real-Time Gun Detection via CCTV",
    category: "Computer Vision",
    featured: true,
    badge: "YOLOv8 Edge Vision",
    description: "Real-time threat detection system designed for CCTV surveillance feeds. Fine-tuned YOLOv8 on custom annotated firearm datasets, evaluated rigorously for high precision and mAP in active monitoring.",
    metrics: ["YOLOv8 Architecture", "CCTV Video Stream", "Sub-second Latency", "Threat Alerting"],
    tags: ["YOLOv8", "Computer Vision", "Real-Time Detection", "Surveillance", "PyTorch"],
    github: "https://github.com/Hanzala007-code",
    accentColor: "#FF3366"
  },
  {
    id: "street-fighter-bot",
    title: "Autonomous Game AI: Street Fighter II Turbo Bot",
    category: "Reinforcement & ML",
    featured: false,
    badge: "Game AI & Emulation",
    description: "Trained Random Forest machine learning models on high-frequency custom gameplay state data to autonomously play Street Fighter II Turbo, integrated with the BizHawk emulator for real-time bot-vs-bot competition.",
    metrics: ["BizHawk Emulation", "Random Forest", "Frame-State Parsing", "Real-Time Controller"],
    tags: ["Machine Learning", "Game AI", "Python", "State Optimization"],
    github: "https://github.com/Hanzala007-code",
    accentColor: "#9D4EDD"
  },
  {
    id: "electricity-forecasting",
    title: "Electricity Demand Forecasting & Pattern Analysis",
    category: "Data Engineering",
    featured: false,
    badge: "Time-Series & Clustering",
    description: "End-to-end data mining pipeline combining unsupervised clustering (K-Means, DBSCAN, Hierarchical) with predictive forecasting models (Random Forest, XGBoost, LSTM, ARIMA, SARIMA) deployed via Streamlit.",
    metrics: ["Multi-Model Ensemble", "LSTM & ARIMA", "DBSCAN Clustering", "Interactive Dashboard"],
    tags: ["Time-Series", "LSTM", "XGBoost", "ARIMA", "Streamlit", "Data Mining"],
    github: "https://github.com/Hanzala007-code",
    accentColor: "#38EF7D"
  },
  {
    id: "ecommerce-analytics",
    title: "E-Commerce Customer Lifetime Value & Segmentation",
    category: "Data Engineering",
    featured: false,
    badge: "Predictive Analytics",
    description: "Comprehensive data science workflow consolidating multi-source transactional datasets, executing PCA for behavioral customer segmentation, and projecting Customer Lifetime Value (CLV) to inform commercial growth.",
    metrics: ["PCA Dimensionality", "CLV Calculation", "Cohort Analysis", "Data Cleaning"],
    tags: ["Pandas", "Scikit-Learn", "PCA", "Customer Segmentation", "Business Intelligence"],
    github: "https://github.com/Hanzala007-code",
    accentColor: "#4FACFE"
  }
];

export const experiences = [
  {
    company: "Cnergyico",
    role: "AI Automation Engineer",
    period: "Aug 2026 — Sept 2026",
    location: "Pakistan",
    summary: "Architected and deployed enterprise AI systems, speech diarization pipelines, multi-LLM voting consensus engines, and petroleum pricing calculation platforms.",
    projects: [
      {
        title: "Automated Meeting Minutes & Neural Speaker Diarization Pipeline",
        badge: "Speech Intelligence & DSP",
        description: "Engineered an end-to-end audio intelligence pipeline to transcribe and summarize corporate meetings with millisecond-accurate per-speaker attribution, replacing error-prone manual note-taking.",
        architecture: [
          "Audio Preprocessing & VAD: Ingests audio through FFmpeg stream normalization, followed by Silero Voice Activity Detection (VAD) to isolate human voice and eliminate ambient background noise.",
          "ASR & Alignment: Deploys faster-Whisper with beam search for robust multilingual transcription, combined with wav2vec2 CTC forced alignment for millisecond-level word-boundary timing.",
          "Speaker Diarization & Summarization: Integrates pyannote.audio neural clustering to resolve overlapping speech and attribute distinct speaker labels to conversational turns, outputting structured executive minutes."
        ],
        tech: ["faster-Whisper", "pyannote.audio", "Silero VAD", "wav2vec2", "FastAPI", "FFmpeg"]
      },
      {
        title: "Dynamic Multi-Vendor Invoice Processing & Layout Extraction Engine",
        badge: "Document AI & Spatial OCR",
        description: "Architected a high-throughput intelligent document parsing system handling invoices across ~300 unique vendor formats without requiring slow, repetitive full-page OCR re-scanning.",
        architecture: [
          "Spatial Template Fingerprinting: Memorizes each vendor's spatial bounding-box layout and key-value anchors once, storing coordinates in an optimized template cache.",
          "Dynamic Delta Extraction: Matches incoming invoices to their vendor template and targets only dynamic fields (invoice numbers, tax IDs, line-item quantity tables, payment due dates, and totals).",
          "Automated Field Reconciliation: Built-in arithmetic verification (subtotal + tax = total) ensures high extraction confidence, cuts document turnaround time by ~85%, and completely prevents OCR hallucinations."
        ],
        tech: ["Document AI", "FastAPI", "Python", "Spatial Layout Parsing", "OCR Pipelines", "Regex Verification"]
      },
      {
        title: "Enterprise Petroleum Product Pricing & OGRA Calculation Engine",
        badge: "Fintech & Energy Modeling",
        description: "Developed a secure calculation and pricing management platform automating downstream petroleum pricing structures, ex-refinery computations, dealer commissions, and official regulatory margin formulas.",
        architecture: [
          "Dual-Workbook Excel Synchronization: Bi-directionally syncs complex multi-sheet Excel calculation workbooks with strict formula validation and transactional data integrity.",
          "Pricing Formula Engine: Automates ex-refinery computations, inland freight adjustments, and multi-tier dealer margin simulations aligned with OGRA regulatory directives.",
          "Enterprise Governance: Built complete role-based access control (RBAC), multi-user audit logging, and automated Microsoft Exchange email delivery of approved pricing sheets."
        ],
        tech: ["Flask", "Python", "Pandas", "Financial Modeling", "Excel Engine", "RBAC", "Audit Systems"]
      },
      {
        title: "Cnergyico IFEM Regulatory & Platts Market Analytics Dashboard",
        badge: "Market Intelligence & Scrapers",
        description: "Engineered an automated intelligence and monitoring platform tracking Inland Freight Equalization Margin (IFEM) regulatory circulars from OGRA alongside real-time Platts global commodity market data.",
        architecture: [
          "Automated Regulatory Scraper: Daemon service continuously monitoring OGRA publication channels, automatically parsing notification PDFs via Tesseract OCR into a structured data store.",
          "Platts Commodity Feed Integration: Standardizes global petroleum benchmark price feeds (FOB Singapore, Arab Gulf) for dynamic margin spread analytics.",
          "Interactive Telemetry Dashboard: Built rich visual interfaces with multi-granularity trend toggles (Day/Month/Year), zoomable charts, sparkline rate-cards, and multi-format exports (Excel/CSV/PDF)."
        ],
        tech: ["Flask", "Python", "Tesseract OCR", "Web Scraping", "SQLite", "Chart.js", "Data Engineering"]
      },
      {
        title: "Multi-AI Referee & Voting Ensemble LLM Consensus System",
        badge: "Multi-Agent & LLM Ensemble",
        description: "Architected a high-reliability multi-LLM deliberation architecture that orchestrates parallel inference across diverse foundation models and reaches audited consensus through algorithmic peer voting.",
        architecture: [
          "Multi-Provider Parallel Dispatch: Concurrently fans out user queries across OpenAI GPT-4, Anthropic Claude, Google Gemini, Mistral, and Groq endpoints.",
          "Algorithmic Peer-Voting Protocol: Automated validation where models blind-review and cast weighted votes on the strongest, most factually grounded output.",
          "Autonomous AI Referee Synthesis: A dedicated referee model synthesizes consensus insights, eliminates hallucinations, and produces an audited optimal response with complete decision telemetry."
        ],
        tech: ["FastAPI/Flask", "OpenAI API", "Gemini API", "Groq", "Mistral", "Ensemble Voting", "Prompt Architecture"]
      }
    ],
    highlights: [
      "Engineered automated meeting-minutes pipeline transcribing recordings with per-speaker attribution and summaries via ffmpeg preprocessing, Silero VAD, faster-Whisper ASR, CTC forced alignment (wav2vec2), and pyannote diarization.",
      "Architected an invoice-processing system spanning ~300 vendors that eliminates repetitive re-scanning by capturing each vendor's layout once and updating only changed fields dynamically.",
      "Built enterprise petroleum product pricing calculation engine with dual-workbook Excel synchronization and OGRA regulatory alignment.",
      "Developed automated IFEM regulatory scraper and interactive Platts market analytics dashboard.",
      "Architected Multi-AI Referee voting ensemble consensus system spanning multiple LLM foundation models."
    ],
    tech: ["faster-Whisper", "pyannote.audio", "Silero VAD", "Flask", "FastAPI", "Document AI", "Multi-LLMs", "OCR"]
  },
  {
    company: "Escaplix",
    role: "AI Automation Engineer",
    period: "Nov 2025 — Jun 2026",
    location: "Remote",
    summary: "Designed AI-driven automation systems, lead qualification flows, and backend FastAPI microservices.",
    projects: [
      {
        title: "Autonomous Lead Intelligence & Qualification Pipeline",
        badge: "Workflow Automation & LLM",
        description: "Engineered automated multi-stage lead generation and qualification pipelines integrating n8n, Zapier, and OpenAI APIs, eliminating over 80% of manual prospect research.",
        architecture: [
          "Lead Ingestion & Normalization: Automatically captures leads from multi-channel forms, enriches corporate profiles via public APIs, and normalizes contact metadata.",
          "Intelligent Scoring & Routing: Uses structured OpenAI prompt workflows to score lead intent, classify budget fit, and dynamically route high-priority opportunities to CRM queues.",
          "FastAPI Backend Microservices: Delivered high-uptime webhook receivers and REST endpoints ensuring reliable data transfer between disparate SaaS platforms."
        ],
        tech: ["FastAPI", "n8n", "OpenAI APIs", "Webhooks", "Zapier", "REST APIs"]
      }
    ],
    highlights: [
      "Built resilient automation workflows using n8n, Zapier, and REST APIs, eliminating manual operational steps.",
      "Automated lead-generation pipelines with enrichment and real-time qualification, cutting manual research by over 80%.",
      "Integrated OpenAI APIs for content generation and delivered high-uptime backend services using FastAPI and webhooks."
    ],
    tech: ["FastAPI", "n8n", "OpenAI APIs", "Webhooks", "Zapier", "REST APIs"]
  },
  {
    company: "CloudOps",
    role: "AI-Based Outreach Automation",
    period: "Oct 2024 — Sept 2025",
    location: "Remote",
    summary: "Automated LinkedIn outreach and dynamic email personalization at scale using LLMs.",
    projects: [
      {
        title: "Hyper-Personalized Multi-Channel Outreach & Dynamic LLM Engine",
        badge: "LLM Personalization & Growth AI",
        description: "Built scalable outreach automation replacing manual copy drafting with structured dynamic prompt systems that personalize emails and LinkedIn sequences based on recipient profile data.",
        architecture: [
          "Profile Scraping & Feature Extraction: Collects professional background data and recent company milestones to extract contextual personalization hooks.",
          "Dynamic Prompt Architecture: Employs strict few-shot prompt frameworks ensuring LLM generated messaging matches brand tone, avoids generic clichés, and maximizes conversion.",
          "Automated Dispatch Sequencing: Seamlessly connects AI-generated copy to email and social sequencing engines with delivery throttling and response tracking."
        ],
        tech: ["LLM Prompt Systems", "OpenAI API", "Workflow Automation", "Data Scraping", "Python"]
      }
    ],
    highlights: [
      "Designed LinkedIn outreach and hyper-personalized email workflows replacing manual drafting.",
      "Engineered structured prompt engineering architectures ensuring consistent, high-converting copy across campaigns."
    ],
    tech: ["LLM Prompt Systems", "OpenAI API", "Workflow Automation", "Data Scraping"]
  },
  {
    company: "NADRA Pakistan",
    role: "Data Science Associate",
    period: "Jul 2024 — Aug 2024",
    location: "Islamabad, PK",
    summary: "Developed conversational AI systems based on structured national government datasets.",
    projects: [
      {
        title: "Citizen Assistance FAQ Conversational AI & NLP Retrieval System",
        badge: "Gov NLP & Information Retrieval",
        description: "Developed an automated conversational FAQ system designed to parse complex, structured national citizen service datasets and deliver accurate, instant policy answers to public inquiries.",
        architecture: [
          "Data Preprocessing & Entity Cleaning: Structured official policy documentation and tabular FAQs into normalized NLP intent-entity representations.",
          "Conversational Flow Design: Built rule-based and intent-classified conversational routing allowing seamless guidance through citizen registration procedures.",
          "Knowledge Retrieval: Query matching pipeline that searches verified official directives to eliminate misinterpretation and deliver deterministic answers."
        ],
        tech: ["NLP", "Python", "SQL", "Data Cleaning", "Conversational AI", "Intent Classification"]
      }
    ],
    highlights: [
      "Engineered an automated FAQ chatbot answering citizen inquiries from structured official datasets.",
      "Executed data preprocessing, entity cleaning, and conversational-flow design for internal AI infrastructure."
    ],
    tech: ["Chatbot Architecture", "Data Preprocessing", "NLP", "Python", "SQL"]
  }
];

export const skillCategories = [
  {
    name: "Artificial Intelligence & Machine Learning",
    icon: "Brain",
    skills: [
      { name: "Convolutional Neural Networks (CNNs)", level: "Advanced" },
      { name: "ConvNeXt & ResNet Architectures", level: "Advanced" },
      { name: "YOLOv8 Object Detection", level: "Proficient" },
      { name: "Vision Transformers (ViT) & CBAM", level: "Proficient" },
      { name: "Scikit-Learn & Classical ML", level: "Advanced" },
      { name: "Model Evaluation & Tuning", level: "Advanced" }
    ]
  },
  {
    name: "Speech, NLP & Multi-Agent Systems",
    icon: "Cpu",
    skills: [
      { name: "Whisper & faster-Whisper ASR", level: "Advanced" },
      { name: "Speaker Diarization (pyannote)", level: "Advanced" },
      { name: "Silero VAD & CTC Alignment", level: "Proficient" },
      { name: "Multi-LLM Voting & Ensemble AI", level: "Advanced" },
      { name: "Local LLMs (Ollama / Qwen / Llama)", level: "Advanced" },
      { name: "Structured Prompt Engineering", level: "Advanced" }
    ]
  },
  {
    name: "Backend, APIs & Automation",
    icon: "Server",
    skills: [
      { name: "FastAPI & Flask Microservices", level: "Advanced" },
      { name: "REST APIs & Webhooks", level: "Advanced" },
      { name: "JWT Auth & Cryptography", level: "Advanced" },
      { name: "n8n & Workflow Automation", level: "Advanced" },
      { name: "SQLAlchemy & SQLite / MySQL", level: "Proficient" },
      { name: "Docker & Linux Deployment", level: "Proficient" }
    ]
  },
  {
    name: "Data Engineering & Core Languages",
    icon: "Database",
    skills: [
      { name: "Python (NumPy, Pandas, PyTorch)", level: "Expert" },
      { name: "C++ (Data Structures, Algorithms)", level: "Proficient" },
      { name: "JavaScript / React", level: "Proficient" },
      { name: "SQL & Dimensional Modeling", level: "Advanced" },
      { name: "Tesseract OCR & PDF Ingestion", level: "Advanced" },
      { name: "Web Scraping & Telemetry", level: "Advanced" }
    ]
  }
];
