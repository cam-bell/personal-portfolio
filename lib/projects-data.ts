export type Project = {
  title: string;
  preview?: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  category: string;
  status?: string;
  label?: string;
  tier?: "Tier 1" | "Tier 2" | "Coursework";
  domain?: string;
  tags?: string[];
  colabUrl?: string | null;
  primaryBadge?: string;
  secondaryBadge?: string;
  highlights?: ProjectHighlights;
};

export type ProjectHighlights = {
  problem?: string;
  solution?: string;
  architecture?: string;
  metrics?: string[];
};

export const tier1Projects: Project[] = [
  {
    title: "BHSI Risk Classification System",
    preview:
      "Automated D&O risk scoring with LLM orchestration + hybrid rules for underwriters.",
    description:
      "Designed and deployed a production risk classification system for Berkshire Hathaway Specialty Insurance, using multi-agent LLM orchestration and hybrid rule-based logic to automate D&O policy assessments and reduce manual underwriting review from hours to minutes.",
    techStack: [
      "Python",
      "FastAPI",
      "BigQuery",
      "Google Cloud",
      "Gemini Pro",
      "LangChain",
      "Vector Search",
    ],
    githubUrl: "https://github.com/cam-bell/bhsi-risk-assessment-platform",
    liveUrl: "#",
    image: "/images/risk-assessment-top.png",
    category: "AI/ML",
    tier: "Tier 1",
    tags: ["LLM/Agentic", "Applied ML"],
    highlights: {
      problem: "Manual underwriting review required hours of research.",
      solution:
        "Multi-agent system aggregating financial signals, news, and risk metrics.",
      architecture:
        "Agent orchestration + async execution + structured outputs.",
      metrics: [
        "95% reduction in review time",
        "Automated risk classification",
      ],
    },
  },
  {
    title: "Deep Research Workflow",
    preview:
      "Multi-agent research pipeline with routing, eval loops, and async orchestration.",
    description:
      "Production-style multi-agent research system implementing async orchestration, intelligent routing, and automated evaluation loops to optimise research quality and API cost.",
    techStack: [
      "Python",
      "OpenAI Agents SDK",
      "asyncio",
      "Pydantic",
      "Gradio",
      "SendGrid",
      "Jinja2",
    ],
    githubUrl: "https://github.com/cam-bell/deep-research-workflow",
    liveUrl: "https://huggingface.co/spaces/cameronbell/deep-research-workflow",
    image: "/images/deep_research_workflow.png",
    category: "AI/ML",
    tier: "Tier 1",
    tags: ["LLM/Agentic"],
    highlights: {
      problem:
        "Business research tasks require synthesising information across multiple sources and perspectives, while manual workflows are slow and naive LLM pipelines are costly without quality validation.",
      solution:
        "A multi-agent architecture that decomposes queries, runs parallel research tasks, synthesises findings, and validates outputs with iterative evaluator loops before final delivery.",
      architecture:
        "Seven specialised agents coordinate Clarify -> Router -> Planner -> Parallel Search -> Writer -> Evaluator -> Email. Async orchestration and structured Pydantic schemas provide type-safe agent communication with cost-aware evaluation gating.",
      metrics: [
        "7 specialised agents orchestrated via OpenAI Agents SDK",
        "5 production agentic workflow patterns implemented",
        "4 adaptive workflows based on query complexity",
        "30-50% API cost reduction on simple research queries",
        "40-60% output quality improvement on complex analytical tasks",
        "~50% latency reduction through async parallel execution",
        "~15 second average response time for simple research tasks",
        "Average query cost reduced (~$0.15 -> ~$0.10)",
      ],
    },
  },
  {
    title: "Autonomous Trading System",
    preview:
      "LLM-driven trading simulations and multi-agent orchestration for portfolio decisions.",
    description:
      "Autonomous multi-agent financial analysis platform coordinating specialised AI traders and researchers to analyse markets, generate signals, and simulate trading strategies through concurrent agent orchestration.",
    techStack: ["Python", "MCP", "OpenAI Agents SDK", "Gradio", "SQLite"],
    githubUrl: "https://github.com/cam-bell/autonomous-trading-system",
    liveUrl:
      "https://huggingface.co/spaces/cameronbell/autonomous_trading_system",
    image: "/images/trading.webp",
    status: "In Progress",
    category: "AI/ML",
    tier: "Tier 1",
    tags: ["LLM/Agentic"],
    highlights: {
      problem:
        "Financial trading decisions require synthesising large volumes of market data, news signals, and technical indicators; manual analysis is slow and single-agent systems miss multi-perspective reasoning.",
      solution:
        "A multi-agent trading floor model where specialised AI agents concurrently research markets, generate signals, evaluate risk, and simulate portfolio decisions with structured logging.",
      architecture:
        "Research Agents -> Market Intelligence -> Trader Agents -> Risk Evaluation -> Trade Decision -> Portfolio State -> Logging & Monitoring -> Dashboard. Execution runs in concurrent agent cycles with shared market intelligence.",
      metrics: [
        "4 concurrent autonomous AI traders",
        "6 MCP servers per trader cycle (3 research + 3 trading tools)",
        "24 concurrent MCP instances during active execution",
        "Parallel agent execution architecture",
        "Structured trade logs and portfolio simulation",
      ],
    },
  },
  // {
  //   title: "Discharge Summary Copilot",
  //   preview:
  //     "LLM copilot drafting structured discharge notes with guardrails and reviewer feedback.",
  //   description:
  //     "Designed an LLM copilot that drafts structured discharge summaries with retrieval, guardrails, and evaluator feedback. Emphasizes reliability, auditability, and ML-in-the-loop review for clinical workflows.",
  //   techStack: [
  //     "Python",
  //     "LLM Orchestration",
  //     "Evaluation",
  //     "FastAPI",
  //     "Observability",
  //   ],
  //   githubUrl: "#",
  //   liveUrl: "",
  //   image: "/placeholder.svg",
  //   category: "AI/ML",
  //   tier: "Tier 1",
  //   tags: ["LLM/Agentic", "Applied ML"],
  // },
  {
    title: "Market Intelligence System",
    preview:
      "Financial intelligence platform combining FinBERT sentiment, quantitative risk scoring, and multi-agent orchestration.",
    description:
      "Financial market intelligence platform combining transformer-based sentiment analysis, quantitative risk modelling, and multi-agent orchestration to generate structured market risk assessments.",
    techStack: [
      "Python",
      "CrewAI",
      "FinBERT",
      "Pydantic",
      "NumPy",
      "pandas",
      "matplotlib",
      "seaborn",
    ],
    githubUrl: "https://github.com/cam-bell/market-intelligence-system",
    liveUrl: "",
    image: "/images/market-intelligence.jpeg",
    category: "AI/ML",
    tier: "Tier 1",
    tags: ["Applied ML", "LLM/Agentic"],
    highlights: {
      problem:
        "Market participants must synthesize news, volatility, social sentiment, and macro signals, but manual analysis is slow and isolated sources miss full market context.",
      solution:
        "A unified multi-agent pipeline ingests market data, applies FinBERT financial sentiment classification, computes quantitative risk indicators, and generates structured market intelligence reports.",
      architecture:
        "Data Ingestion Agents -> Sentiment Analysis Agent -> Risk Analysis Engine -> Signal Aggregation Layer -> Intelligence Generator. Async ingestion and Pydantic-validated pipelines combine text sentiment and statistical risk modelling.",
      metrics: [
        "6 specialized agents orchestrating ingestion and analysis",
        "FinBERT transformer model integration for financial sentiment",
        "21-day annualized volatility calculations",
        "Z-score anomaly detection for unusual trading activity",
        "Weighted multi-signal risk scoring model",
      ],
    },
  },
  {
    title: "Healthcare Readmission Risk MLOps Pipeline",
    preview:
      "Production-style healthcare readmission pipeline with experiment tracking, config-driven runs, and a Dockerised FastAPI /predict service.",
    description:
      "Converted a Jupyter notebook diabetes readmission model into a production-style, reproducible MLOps pipeline with experiment tracking, config-driven runs, and a Dockerised FastAPI /predict service.",
    techStack: [
      "Python",
      "scikit-learn",
      "MLflow",
      "Hydra",
      "W&B",
      "Docker",
      "FastAPI",
      "GitHub Actions",
      "BorderlineSMOTE",
    ],
    githubUrl: "https://github.com/kollie/mlops-project-ci",
    liveUrl: "#",
    image: "/images/mlops.png",
    category: "MLOps",
    label: "Team of 5",
    tier: "Tier 1",
    tags: ["Applied ML", "MLOps"],
    highlights: {
      problem:
        "Notebook-based healthcare models are difficult to reproduce, operationalize, and evaluate reliably, especially when severe class imbalance makes minority-risk detection the real business objective.",
      solution:
        "A config-driven 9-stage MLOps pipeline that transformed a diabetes readmission notebook into a reproducible training, evaluation, and inference system with MLflow, W&B, Hydra, GitHub Actions, Docker, and a FastAPI /predict service.",
      architecture:
        "Ingestion -> preprocessing -> feature engineering -> modelling -> evaluation -> inference across a 9-stage pipeline. Hydra orchestrates repeatable runs, MLflow and W&B track experiments and artifacts, GitHub Actions automates checks, and Dockerized FastAPI exposes synchronous inference patterns for real-time and batch-ready use.",
      metrics: [
        "100K+ patient records from 130+ US hospitals",
        "Minority-class Recall improved from 17.5% to 57.6% (+229% relative lift)",
        "$15.79M projected savings from intervention simulation",
        "~$2.39 saved per $1 invested",
        "38+ W&B tracked experiment runs",
        "9-stage reproducible MLOps pipeline",
      ],
    },
  },
  {
    title: "Real-Time Fraud Detection Pipeline",
    preview:
      "Streaming fraud detection with live features, drift monitoring, and KPI dashboards.",
    description:
      "Built an end-to-end streaming fraud detection system with real-time feature engineering, online inference, performance monitoring, and drift detection. Includes alerting and an interactive dashboard for tracking model accuracy and operational KPIs over time.",
    techStack: [
      "Python",
      "scikit-learn",
      "XGBoost",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Plotly",
    ],
    githubUrl: "https://github.com/cam-bell/real-time-fraud-detection",
    liveUrl: "",
    image: "/images/fraud-streaming.png",
    category: "AI/ML",
    tier: "Tier 1",
    tags: ["Applied ML", "MLOps"],
  },
];

export const tier2Projects: Project[] = [
  {
    title: "Cloud Cost & Sustainability Advisor",
    preview:
      "Decision-support app forecasting cloud costs and carbon impact across providers.",
    description:
      "Built a full-stack decision-support platform to help SMEs plan cloud migrations by forecasting costs, assessing risk, and comparing carbon impact across AWS, GCP, and Azure using hybrid ML models and semantic retrieval.",
    techStack: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Google Cloud",
      "Docker",
    ],
    githubUrl: "https://github.com/cam-bell/Capstone",
    liveUrl: "#",
    image: "/images/cloud-migration-dashboard.png",
    category: "Full-Stack",
    tier: "Tier 2",
    tags: ["Full-Stack", "Applied ML"],
  },
  {
    title: "AI-Powered Crypto Risk Dashboard",
    preview:
      "Real-time portfolio risk insights with ML-driven volatility and correlation analysis.",
    description:
      "Developed a real-time crypto portfolio risk analysis platform combining traditional financial metrics with ML-driven insights. The system aggregates on-chain and market data to assess volatility, concentration risk, and correlations, delivering proactive alerts and AI-generated portfolio reports.",
    techStack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "TimescaleDB",
      "Next.js",
      "LangChain",
      "OpenAI",
      "Docker",
    ],
    githubUrl: "#",
    liveUrl: "",
    image: "/images/crypto.png",
    status: "In Progress",
    category: "AI/ML",
    tier: "Tier 2",
    tags: ["Applied ML", "LLM/Agentic"],
  },
  {
    title: "LangGraph Autonomous Task Agent (Sidekick)",
    preview:
      "Autonomous task execution agent built with LangGraph for web browsing, extraction, and iterative reasoning with persistent memory.",
    description:
      "Autonomous task execution agent built with LangGraph that performs web browsing, information extraction, and iterative reasoning using tool-based agents with persistent memory and evaluation loops.",
    techStack: ["Python", "LangGraph", "Playwright", "SQLite", "RAG", "Gradio"],
    githubUrl: "https://github.com/cam-bell/langgraph-sidekick-agent/tree/main",
    liveUrl: "https://huggingface.co/spaces/cameronbell/sidekick",
    image: "/images/langgraph.jpg",
    category: "AI/ML",
    tier: "Tier 2",
    tags: ["LLM/Agentic"],
    highlights: {
      problem:
        "Many AI assistants rely on static knowledge or simple retrieval, but complex tasks require active tool use, web interaction, and iterative refinement across multiple steps.",
      solution:
        "A tool-using autonomous LangGraph agent that decomposes requests into steps, performs automated browsing and extraction, stores intermediate context in memory, and iteratively evaluates completion.",
      architecture:
        "Sidekick orchestrator runs a LangGraph StateGraph with Worker, ToolNode, and Evaluator nodes. Tool layer integrates Playwright browser automation, web sources, file tools, notifications, and persistent memory/checkpointing for stateful execution.",
      metrics: [
        "LangGraph-based stateful agent orchestration",
        "Playwright browser automation for real-world data access",
        "Persistent task memory stored in SQLite",
        "RAG-enabled context retrieval across task steps",
        "Iterative evaluation loop for improved task completion",
      ],
    },
  },
  {
    title: "Self-Replicating Agent System",
    preview:
      "Distributed meta-programming platform where agents generate, compile, and register new Python agents at runtime.",
    description:
      "Engineered a distributed meta-programming platform where an autonomous agent dynamically generates, compiles and registers new Python agent modules at runtime, enabling emergent collaboration across gRPC-connected workers.",
    techStack: [
      "Python",
      "AutoGen Core",
      "gRPC",
      "importlib",
      "GPT-4o-mini",
      "Llama 3.2",
      "Custom Message Protocol",
    ],
    githubUrl: "https://github.com/cam-bell/self-replicating-agent",
    liveUrl:
      "https://huggingface.co/spaces/cameronbell/self-replicating-agent-system",
    image: "/images/self-replicating-agent.png",
    category: "AI/ML",
    tier: "Tier 2",
    tags: ["LLM/Agentic"],
    highlights: {
      problem:
        "Fixed agent systems are hard to scale and adapt, while manually extending multi-agent networks slows experimentation with autonomous collaboration patterns.",
      solution:
        "A self-extending agent runtime where a Creator agent uses LLM-driven code generation to synthesize new Python agent modules, validate them, import them dynamically, and register them for immediate execution across distributed workers.",
      architecture:
        "Creator agent reads a template, generates new RoutedAgent modules via GPT-4o-mini or Llama 3.2, writes them to disk, compiles them through importlib, and registers them with AutoGen runtimes. Distributed execution runs through gRPC worker hosts and asynchronous message handlers, using AgentId routing plus a custom protocol for probabilistic collaboration.",
      metrics: [
        "50% probabilistic delegation rate creating emergent collaboration",
        "Distributed gRPC worker architecture for horizontal scaling",
        "Dynamic module generation, compilation, and runtime registration",
        "Async agent communication across multi-process workers",
        "Custom internal validation for generated code compilation and registration",
        // "System autonomy increased by [X]% (placeholder)",
      ],
    },
  },
  {
    title: "Multi-Model Sales Agent System",
    preview:
      "Cross-provider agent system generating compliant, validated sales outreach.",
    description:
      "Designed a multi-agent sales automation system orchestrating multiple LLM providers to generate, validate, and deliver personalised sales emails. The system demonstrates safe agent collaboration patterns, structured outputs, and cross-provider orchestration with guardrails for policy compliance.",
    techStack: [
      "Python",
      "OpenAI Agents SDK",
      "DeepSeek",
      "Gemini",
      "Groq",
      "SendGrid",
      "Pydantic",
    ],
    githubUrl: "#",
    liveUrl: "",
    image: "/images/sdr.webp",
    category: "AI/ML",
    tier: "Tier 2",
    tags: ["LLM/Agentic"],
  },
  {
    title: "ASL Detection Game",
    preview:
      "Human-centred CV game with real-time ASL detection and live feedback.",
    description:
      "Built a computer vision game that teaches American Sign Language using YOLOv8 and a 1,000+ image dataset. Achieved 90% mAP@0.5 with real-time webcam detection, live feedback, and 2 gamified modes. Deployed with React, FastAPI, and Roboflow pipeline.",
    techStack: [
      "YOLOv8",
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Roboflow",
      "OpenCV",
    ],
    githubUrl: "https://github.com/sophiaecl/ASL-CV-Backend",
    liveUrl: "#",
    image: "/images/sign-learn.png",
    category: "Computer Vision",
    label: "Human-Centred CV Project",
    tier: "Tier 2",
    tags: ["CV"],
  },
];

export const courseworkProjects: Project[] = [
  {
    title: "Customer Churn Modelling",
    preview:
      "Churn model using SMOTE + gradient boosting with strong F1 performance.",
    primaryBadge: "Classification",
    secondaryBadge: "Business",
    description:
      "Built a churn prediction model using stratified 5-fold CV, SMOTE, and Gradient Boosting. Achieved 93.2% accuracy and F1 = 0.926, improving baseline accuracy by +8.2 percentage points.",
    githubUrl: "https://github.com/cam-bell/customer-churn-prediction-trees",
    colabUrl: null,
    domain: "Business",
    techStack: [
      "scikit-learn",
      "SMOTE",
      "Gradient Boosting",
      "Classification",
      "Stratified CV",
    ],
    image: "/placeholder.svg",
    liveUrl: "",
    category: "Coursework",
    tier: "Coursework",
    tags: ["Applied ML"],
  },
  {
    title: "Breast Cancer Classification",
    preview:
      "Scikit-learn pipeline for breast cancer classification with tuned KNN.",
    primaryBadge: "Classification",
    secondaryBadge: "Healthcare",
    description:
      "Developed a full scikit-learn pipeline to classify breast cancer cases with 94.2% test accuracy. Tuned `k` using cross-validation and visualized error curves for model complexity.",
    githubUrl:
      "https://github.com/cam-bell/applied-ml-classification/blob/main/notebooks/breast_cancer_knn.ipynb",
    colabUrl: null,
    domain: "Healthcare",
    techStack: [
      "KNN",
      "scikit-learn",
      "Classification",
      "Pipelines",
      "Data Preprocessing",
    ],
    image: "/placeholder.svg",
    liveUrl: "",
    category: "Coursework",
    tier: "Coursework",
    tags: ["Applied ML"],
  },
  {
    title: "Diabetes Risk Classification",
    preview:
      "Model comparison on imbalanced data to select a simpler, robust classifier.",
    primaryBadge: "Classification",
    secondaryBadge: "Healthcare",
    description:
      "Trained and benchmarked XGBoost and Logistic Regression on an imbalanced diabetes dataset. Achieved 75.3% with XGBoost and 81.2% with Logistic Regression, recommending the simpler model.",
    githubUrl:
      "https://github.com/cam-bell/applied-ml-classification/blob/main/notebooks/diabetes_xgboost_vs_logreg.ipynb",
    colabUrl: null,
    domain: "Healthcare",
    techStack: [
      "XGBoost",
      "Logistic Regression",
      "Model Comparison",
      "GridSearchCV",
    ],
    image: "/placeholder.svg",
    liveUrl: "",
    category: "Coursework",
    tier: "Coursework",
    tags: ["Applied ML"],
  },
  {
    title: "Used Vehicle Pricing & Valuation Model",
    preview:
      "Regression models predicting used car prices with engineered features.",
    primaryBadge: "Regression",
    secondaryBadge: "Business",
    description:
      "Built a regression model to predict used car prices across 8 countries using 100K listings. Cleaned outliers, engineered features, and tuned tree-based models (Random Forest, Gradient Boosting) to reach R² = 0.867 and MAE ≈ €2,660.",
    githubUrl:
      "https://github.com/cam-bell/applied-ml-regression/tree/main/projects/used_car_pricing",
    colabUrl: null,
    domain: "Business",
    techStack: [
      "Pandas",
      "scikit-learn",
      "Random Forest",
      "Gradient Boosting",
      "ANOVA",
    ],
    image: "/placeholder.svg",
    liveUrl: "",
    category: "Coursework",
    tier: "Coursework",
    tags: ["Applied ML"],
  },
  {
    title: "Multilingual Sentiment & Keyword Analyzer",
    preview:
      "Multilingual sentiment + keyword extraction with transformer-based NLP.",
    primaryBadge: "NLP",
    secondaryBadge: "Analytics",
    description:
      "Built a multilingual NLP system that analyzes reviews from IMDb, Trustpilot, Steam, and Google Play. Uses HuggingFace transformers and KeyBERT for sentiment, emotion, and keyword extraction with 0% error rate across 239 reviews.",
    techStack: [
      "Python",
      "HuggingFace",
      "spaCy",
      "KeyBERT",
      "LaBSE",
      "VADER",
      "BERT",
    ],
    githubUrl: "https://github.com/felixhommels/reviews-group-nlp",
    liveUrl: "#",
    image: "/images/review-analyzer.png",
    category: "NLP",
    domain: "NLP",
    tier: "Coursework",
    tags: ["NLP"],
  },
  {
    title: "Swimming Pool Detection",
    preview:
      "YOLOv11 aerial detection of pools using transfer learning and custom labels.",
    primaryBadge: "Computer Vision",
    secondaryBadge: "Insurance",
    description:
      "Built a YOLOv11 object detection model to identify swimming pools from aerial images. Achieved 95.5% mAP after 30 epochs using transfer learning on a custom-labeled dataset with GroundingDINO + Roboflow.",
    techStack: [
      "YOLOv11",
      "GroundingDINO",
      "Roboflow",
      "Object Detection",
      "Python",
      "OpenCV",
    ],
    githubUrl: "https://github.com/cam-bell/NLP-Review-Analyzer",
    liveUrl: "#",
    image: "/images/pool-detection.jpeg",
    category: "Computer Vision",
    domain: "CV",
    tier: "Coursework",
    tags: ["CV"],
  },
  {
    title: "Gapminder Global Trends",
    preview:
      "Visual analytics of 50+ years of GDP, life expectancy, and population trends.",
    primaryBadge: "Analytics",
    secondaryBadge: "Data Ethics",
    description:
      "Analyzed 50+ years of global development data using visual analytics, linear regression, and clustering. Uncovered patterns across GDP, life expectancy, and population trends with animated storytelling.",
    githubUrl: "https://github.com/cam-bell/gapminder-lifeexp-analysis",
    colabUrl: null,
    domain: "Analytics",
    techStack: [
      "Pandas",
      "Seaborn",
      "plotly",
      "Regression",
      "Clustering",
      "Visual storytelling",
      "K-Means",
    ],
    image: "/placeholder.svg",
    liveUrl: "",
    category: "Coursework",
    tier: "Coursework",
    tags: ["Applied ML"],
  },
];

export const allProjects: Project[] = [
  ...tier1Projects,
  ...tier2Projects,
  ...courseworkProjects,
];
