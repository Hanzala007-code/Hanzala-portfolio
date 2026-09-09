export const personalInfo = {
  name: "Hanzala Malik",
  role: "Data Science & AI/ML Engineer",
  location: "Islamabad, PK",
  email: "hanzala.malikk23@gmail.com",
  phone: "+92-302-5303305",
  github: "https://github.com/Hanzala007-code",
  linkedin: "https://linkedin.com/in/hanzala-malik-174934182",
  tagline: "Building & Shipping Production AI Systems — Not Just Coursework.",
  bio: "Data Science undergraduate from FAST NUCES who delivers end-to-end intelligent systems. From state-of-the-art computer vision models (ConvNeXt, YOLOv8) and speech diarization pipelines (Whisper, pyannote) to local multi-agent LLM systems and automated enterprise workflows. I own the full lifecycle: raw data processing, architecture design, fine-tuning, and robust FastAPI backend deployment.",
  education: {
    degree: "Bachelor of Science in Data Science",
    institution: "National University of Computer and Emerging Sciences (FAST NUCES)",
    location: "Islamabad, Pakistan",
    period: "2022 — 2026"
  },
  stats: [
    { label: "Production Pipelines", value: "10+", suffix: "" },
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
    id: "speech-diarization-pipeline",
    title: "Automated Meeting Minutes & Neural Speaker Diarization Pipeline",
    category: "Speech & NLP",
    featured: true,
    badge: "Enterprise Voice Intelligence",
    description: "End-to-end production speech intelligence system engineered to transcribe multi-speaker executive meetings. Combines FFmpeg audio preprocessing, Silero VAD silence suppression, faster-Whisper ASR, wav2vec2 CTC forced alignment, and pyannote.audio neural speaker diarization for millisecond-level speaker-attributed transcripts and action summaries.",
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
    description: "Enterprise invoice parsing engine built to automate accounts-payable workflows across ~300 unique vendor layouts. Eliminates slow brute-force OCR by fingerprinting spatial bounding-box templates once and dynamically extracting line-item deltas, tax IDs, and billing amounts with cross-field arithmetic validation.",
    metrics: ["~300 Vendors Supported", "Spatial Template Fingerprinting", "Dynamic Delta Extraction", "85% Latency Reduction"],
    tags: ["Document AI", "FastAPI", "Python", "Spatial Layout Parsing", "OCR Pipelines", "Enterprise Automation"],
    github: "https://github.com/Hanzala007-code",
    accentColor: "#38EF7D"
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
    summary: "Architected and shipped production speech transcription pipelines and high-throughput enterprise document intelligence systems.",
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
      }
    ],
    highlights: [
      "Engineered automated meeting-minutes pipeline transcribing recordings with per-speaker attribution and summaries via ffmpeg preprocessing, Silero VAD, faster-Whisper ASR, CTC forced alignment (wav2vec2), and pyannote diarization.",
      "Architected an invoice-processing system spanning ~300 vendors that eliminates repetitive re-scanning by capturing each vendor's layout once and updating only changed fields dynamically."
    ],
    tech: ["faster-Whisper", "pyannote.audio", "Silero VAD", "wav2vec2", "FastAPI", "Document AI"]
  },
  {
    company: "Escaplix",
    role: "AI Automation Engineer",
    period: "Nov 2025 — Jun 2026",
    location: "Remote",
    summary: "Designed AI-driven automation systems, lead qualification flows, and backend FastAPI microservices.",
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
      { name: "Local LLMs (Ollama / Qwen / Llama)", level: "Advanced" },
      { name: "Multi-Agent Architectures", level: "Advanced" },
      { name: "Structured Prompt Engineering", level: "Advanced" }
    ]
  },
  {
    name: "Backend, APIs & Automation",
    icon: "Server",
    skills: [
      { name: "FastAPI & Uvicorn", level: "Advanced" },
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
      { name: "Time-Series (ARIMA / LSTM)", level: "Proficient" },
      { name: "Data Scraping (BeautifulSoup / APIs)", level: "Advanced" }
    ]
  }
];
