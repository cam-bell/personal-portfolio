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
};

export const tier1Projects: Project[] = [
  {
    title: "BHSI Risk Classification System",
    preview:
      "Automated D&O risk scoring with LLM orchestration + hybrid rules for underwriter triage.",
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
  {
    title: "Autonomous Trading System",
    preview:
      "LLM-driven trading simulations and multi-agent orchestration for portfolio decisions.",
    description:
      "Built an autonomous trading system that uses LLM-driven trading simulations to optimize portfolio performance. The system uses a multi-agent architecture to orchestrate LLMs, tools and data pipelines to solve real operational problems.",
    techStack: ["Python", "MCP", "OpenAI Agents SDK", "Gradio", "SQLite"],
    githubUrl: "#",
    liveUrl: "",
    image: "/images/trading.webp",
    status: "In Progress",
    category: "AI/ML",
    tier: "Tier 1",
    tags: ["LLM/Agentic"],
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
    title: "Deep Research Workflow",
    preview:
      "Multi-agent research pipeline with routing, eval loops, and async orchestration.",
    description:
      "Built a multi-agent research system implementing production agentic patterns including routing, parallel execution, and evaluator–optimizer loops. The system reduces API cost and latency through async orchestration while improving output quality via iterative evaluation.",
    techStack: ["Python", "OpenAI Agents SDK", "asyncio", "Gradio"],
    githubUrl:
      "https://huggingface.co/spaces/cameronbell/deep-research-workflow",
    liveUrl: "https://huggingface.co/spaces/cameronbell/deep-research-workflow",
    image: "/images/deep_research_workflow.png",
    category: "AI/ML",
    tier: "Tier 1",
    tags: ["LLM/Agentic"],
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
    title: "LangGraph Autonomous Task Agent",
    preview:
      "Task agent with conditional routing, feedback loops, and tool-based execution.",
    description:
      "Built an autonomous task execution agent using LangGraph state management, capable of planning, executing, and evaluating complex tasks with conditional routing and feedback loops. The system demonstrates computer-use capabilities through browser automation, long-term memory, and retrieval-augmented reasoning.",
    techStack: [
      "Python",
      "LangGraph",
      "Playwright",
      "FAISS",
      "SQLite",
      "Serper",
    ],
    githubUrl: "#",
    liveUrl: "",
    image: "/images/langgraph.jpg",
    category: "AI/ML",
    tier: "Tier 2",
    tags: ["LLM/Agentic"],
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
