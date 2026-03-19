export type ProjectKind = "flagship" | "project" | "coursework";

export type ArchiveGroup =
  | "Agentic Systems"
  | "Applied ML"
  | "MLOps"
  | "Full-Stack"
  | "NLP"
  | "Computer Vision"
  | "Coursework";

export type ProjectDiagram = {
  id: string;
  label: string;
  src: string;
  alt: string;
  caption: string;
};

export type ProjectSection = {
  paragraphs: string[];
  bullets?: string[];
};

export type ProjectCaseStudy = {
  role?: string;
  year?: string;
  outcomes?: string[];
  problem?: ProjectSection;
  approach?: ProjectSection;
  implementation?: ProjectSection;
  results?: ProjectSection;
  lessons?: ProjectSection;
  diagrams?: ProjectDiagram[];
};

export type ProjectHighlights = {
  problem?: string;
  solution?: string;
  architecture?: string;
  metrics?: string[];
};

export type Project = {
  slug: string;
  title: string;
  preview?: string;
  homepageSummary: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  category: string;
  kind: ProjectKind;
  featuredOnHome: boolean;
  archiveGroup: ArchiveGroup;
  role: string;
  year: string;
  outcomes?: string[];
  status?: string;
  label?: string;
  tier?: "Tier 1" | "Tier 2" | "Coursework";
  domain?: string;
  tags?: string[];
  colabUrl?: string | null;
  primaryBadge?: string;
  secondaryBadge?: string;
  highlights?: ProjectHighlights;
  caseStudy?: ProjectCaseStudy;
};

export const archiveGroups: ArchiveGroup[] = [
  "Agentic Systems",
  "Applied ML",
  "MLOps",
  "Full-Stack",
  "NLP",
  "Computer Vision",
  "Coursework",
];

const hasActiveLink = (url?: string | null) =>
  Boolean(url && url.trim() && url !== "#");

const projects: Project[] = [
  {
    slug: "bhsi-risk-classification-system",
    title: "BHSI Risk Classification System",
    preview:
      "Automated D&O risk scoring with LLM orchestration + hybrid rules for underwriters.",
    homepageSummary:
      "Production-facing underwriting workflow that compresses manual D&O research into a structured AI-assisted risk review.",
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
    kind: "flagship",
    featuredOnHome: true,
    archiveGroup: "Agentic Systems",
    role: "Lead builder",
    year: "2025",
    outcomes: [
      "95% reduction in review time",
      "Structured risk classification output for underwriters",
      "Hybrid rules plus LLM reasoning for traceable decisions",
    ],
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
    caseStudy: {
      role: "Lead builder",
      year: "2025",
      outcomes: [
        "95% reduction in manual review time",
        "Faster first-pass risk decisions for underwriters",
        "Repeatable structured output across risk factors",
      ],
      problem: {
        paragraphs: [
          "Directors and officers underwriting required analysts to gather financial, legal, and market context from multiple sources before making a risk recommendation.",
          "The workflow was slow, inconsistent across reviewers, and difficult to scale when submission volume increased.",
        ],
      },
      approach: {
        paragraphs: [
          "The system combines agent-based research, retrieval over structured and unstructured data, and hybrid rules for risk scoring so model output remains grounded in underwriting logic.",
          "Instead of generating a single free-form summary, the pipeline produces explicit risk factors, supporting evidence, and a normalized recommendation payload.",
        ],
      },
      implementation: {
        paragraphs: [
          "FastAPI coordinates the underwriting workflow while background tasks fan out research requests across financial, news, and document sources.",
          "Gemini-powered reasoning sits behind guardrailed prompts and structured schemas so downstream scoring and UI layers can consume predictable fields.",
        ],
        bullets: [
          "Async orchestration for parallel evidence collection",
          "BigQuery-backed enrichment and retrieval",
          "Hybrid score calculation layered on top of LLM outputs",
        ],
      },
      results: {
        paragraphs: [
          "The project turned a multi-hour analyst workflow into a minutes-long assisted review, making the platform useful as a first-pass risk triage system.",
          "The biggest product win was not just speed, but producing an output shape that underwriting teams could review and challenge instead of treating the model as a black box.",
        ],
        bullets: [
          "95% reduction in review time",
          "Automated risk classification with evidence-backed summaries",
        ],
      },
      lessons: {
        paragraphs: [
          "Insurance workflows need explainability as much as model quality. Structured evidence and rule visibility matter more than polished prose.",
          "For production-readiness, the next step would be stronger observability around agent failures, retrieval quality, and override behavior from human reviewers.",
        ],
      },
      diagrams: [
        {
          id: "system-architecture",
          label: "System Architecture",
          src: "/diagrams/bhsi-system-architecture.svg",
          alt: "BHSI system architecture diagram",
          caption:
            "End-to-end underwriting system layout across ingestion, orchestration, retrieval, and decision outputs.",
        },
        {
          id: "rag-pipeline",
          label: "RAG Pipeline",
          src: "/diagrams/bhsi-rag-pipeline-flow.svg",
          alt: "BHSI retrieval pipeline diagram",
          caption:
            "Retrieval and evidence aggregation flow used to ground downstream risk classification.",
        },
        {
          id: "management-summary",
          label: "Management Summary",
          src: "/diagrams/bhsi-management-summary-architecture.svg",
          alt: "BHSI management summary architecture diagram",
          caption:
            "How the platform condenses research findings into a reviewer-friendly management summary.",
        },
      ],
    },
  },
  {
    slug: "deep-research-workflow",
    title: "Deep Research Workflow",
    preview:
      "Multi-agent research pipeline with routing, eval loops, and async orchestration.",
    homepageSummary:
      "Multi-agent research system that routes work by query complexity and adds evaluator loops to improve quality while reducing LLM cost.",
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
    kind: "flagship",
    featuredOnHome: true,
    archiveGroup: "Agentic Systems",
    role: "Lead builder",
    year: "2025",
    outcomes: [
      "30-50% API cost reduction on simple queries",
      "40-60% output quality improvement on complex tasks",
      "~50% latency reduction through async parallel execution",
    ],
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
      ],
    },
    caseStudy: {
      role: "Lead builder",
      year: "2025",
      outcomes: [
        "7 specialized agents orchestrated via OpenAI Agents SDK",
        "Adaptive workflow routing based on task complexity",
        "Lower cost and latency without sacrificing answer quality",
      ],
      problem: {
        paragraphs: [
          "Single-pass LLM research assistants tend to be expensive, brittle, and hard to trust for analytical work that spans multiple sources.",
          "The challenge was to design a system that could vary its depth based on the prompt while still validating quality before delivery.",
        ],
      },
      approach: {
        paragraphs: [
          "The workflow uses an explicit router and planner to decide whether a request needs lightweight synthesis or a deeper multi-agent research path.",
          "Evaluation is treated as a first-class step rather than an afterthought, allowing the system to retry or refine when the answer quality is below threshold.",
        ],
      },
      implementation: {
        paragraphs: [
          "Async execution enables parallel search and evidence gathering, which materially reduces latency on the heavier research paths.",
          "Pydantic schemas keep agent handoffs typed so downstream stages can reason over predictable payloads instead of parsing free-form text.",
        ],
        bullets: [
          "Clarify -> Router -> Planner -> Parallel Search -> Writer -> Evaluator -> Email",
          "Cost-aware workflow gating for simple vs complex queries",
          "Email-ready delivery format for end users",
        ],
      },
      results: {
        paragraphs: [
          "The main improvement came from matching the workflow depth to the task instead of forcing every request through the same expensive pipeline.",
          "The evaluation loop made the system more production-like because it surfaced quality as an operational concern rather than a manual review task.",
        ],
        bullets: [
          "30-50% API cost reduction on simple research queries",
          "40-60% output quality improvement on complex analytical tasks",
          "~15 second average response time on simple queries",
        ],
      },
      lessons: {
        paragraphs: [
          "Agent systems become easier to evolve when their interfaces are explicit and typed. The orchestration layer matters as much as the prompts.",
          "A future iteration would add richer telemetry per stage so routing and evaluation thresholds can be tuned from observed behavior instead of static heuristics.",
        ],
      },
      diagrams: [
        {
          id: "architecture",
          label: "Architecture",
          src: "/diagrams/deep-research-architecture.svg",
          alt: "Deep research architecture diagram",
          caption: "High-level agent topology for the deep research workflow.",
        },
        {
          id: "services-dataflow",
          label: "Services & Dataflow",
          src: "/diagrams/deep-research-services-and-dataflow.svg",
          alt: "Deep research services and dataflow diagram",
          caption:
            "How requests, agents, and output delivery move through the system.",
        },
      ],
    },
  },
  {
    slug: "autonomous-trading-system",
    title: "Autonomous Trading System",
    preview:
      "LLM-driven trading simulations and multi-agent orchestration for portfolio decisions.",
    homepageSummary:
      "Concurrent trading-floor simulation where specialist agents research markets, generate signals, and stress-test portfolio decisions.",
    description:
      "Autonomous multi-agent financial analysis platform coordinating specialised AI traders and researchers to analyse markets, generate signals, and simulate trading strategies through concurrent agent orchestration.",
    techStack: ["Python", "MCP", "OpenAI Agents SDK", "Gradio", "SQLite"],
    githubUrl: "https://github.com/cam-bell/autonomous-trading-system",
    liveUrl:
      "https://huggingface.co/spaces/cameronbell/autonomous_trading_system",
    image: "/images/trading.webp",
    category: "AI/ML",
    kind: "flagship",
    featuredOnHome: true,
    archiveGroup: "Agentic Systems",
    role: "Lead builder",
    year: "2026",
    outcomes: [
      "4 AI traders coordinated concurrently",
      "24 MCP instances active per cycle",
      "Structured trade logs for post-run analysis",
    ],
    status: "In Progress",
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
    caseStudy: {
      role: "Lead builder",
      year: "2026",
      outcomes: [
        "4 concurrent trader agents",
        "24 MCP instances active during execution",
        "Shared portfolio state with structured decision logs",
      ],
      problem: {
        paragraphs: [
          "Trading decisions depend on combining market data, news, technical indicators, and risk constraints under time pressure.",
          "A useful simulation needed multiple specialist perspectives instead of a single monolithic agent making all decisions.",
        ],
      },
      approach: {
        paragraphs: [
          "The system models a trading floor where research, signal generation, and risk evaluation happen as separate roles with shared state.",
          "This architecture makes it easier to inspect how decisions were formed and where portfolio behavior changed across cycles.",
        ],
      },
      implementation: {
        paragraphs: [
          "MCP-backed tools expose research and trading capabilities to each agent cycle, while the orchestration layer coordinates concurrent execution and state updates.",
          "Structured logs are stored so simulation runs can be audited, compared, and reused in the UI.",
        ],
        bullets: [
          "Research agents feed shared market intelligence",
          "Trader agents generate and debate signals",
          "Risk evaluation gates simulated execution decisions",
        ],
      },
      results: {
        paragraphs: [
          "The project demonstrates how a portfolio-decision simulation can remain inspectable even when multiple agents are active at once.",
          "Its value is architectural: it shows a reusable pattern for concurrent decision systems with shared memory, explicit tooling, and traceable outputs.",
        ],
        bullets: [
          "4 concurrent autonomous AI traders",
          "6 MCP servers per trader cycle",
          "Structured trade logs and portfolio simulation",
        ],
      },
      lessons: {
        paragraphs: [
          "Concurrency only helps when shared state is explicit and conflict handling is clear. Financial simulations expose that quickly.",
          "The next step is deeper evaluation of trade quality, scenario replay, and richer observability around agent disagreement and failure modes.",
        ],
      },
      diagrams: [
        {
          id: "system-architecture",
          label: "System Architecture",
          src: "/diagrams/autonomous-trading-system-architecture.svg",
          alt: "Autonomous trading system architecture diagram",
          caption:
            "The agent topology behind research, trading, risk evaluation, and portfolio state.",
        },
        {
          id: "workflow-dataflow",
          label: "Workflow & Dataflow",
          src: "/diagrams/autonomous-trading-workflow-dataflow.svg",
          alt: "Autonomous trading workflow dataflow diagram",
          caption:
            "Execution flow for an active simulation cycle from research to portfolio update.",
        },
      ],
    },
  },
  {
    slug: "market-intelligence-system",
    title: "Market Intelligence System",
    preview:
      "Financial intelligence platform combining FinBERT sentiment, quantitative risk scoring, and multi-agent orchestration.",
    homepageSummary:
      "Financial intelligence pipeline blending transformer sentiment, quantitative signals, and multi-agent synthesis into structured risk reports.",
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
    kind: "project",
    featuredOnHome: false,
    archiveGroup: "Applied ML",
    role: "Lead builder",
    year: "2025",
    outcomes: [
      "FinBERT-based financial sentiment analysis",
      "Weighted multi-signal risk scoring",
      "Structured market intelligence reports",
    ],
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
        "Weighted multi-signal risk scoring model",
      ],
    },
  },
  {
    slug: "healthcare-readmission-risk-mlops-pipeline",
    title: "Healthcare Readmission Risk MLOps Pipeline",
    preview:
      "Healthcare readmission pipeline with experiment tracking, config-driven runs, and a Dockerised FastAPI /predict service.",
    homepageSummary:
      "MLOps-focused healthcare pipeline that turns a notebook model into a reproducible training, evaluation, and inference system.",
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
    kind: "project",
    featuredOnHome: false,
    archiveGroup: "MLOps",
    role: "ML engineer, team of 5",
    year: "2025",
    outcomes: [
      "9-stage reproducible pipeline",
      "Minority-class recall improved from 17.5% to 57.6%",
      "$15.79M projected savings from intervention simulation",
    ],
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
        "9-stage reproducible MLOps pipeline",
      ],
    },
  },
  {
    slug: "real-time-fraud-detection-pipeline",
    title: "Real-Time Fraud Detection Pipeline",
    preview:
      "Streaming fraud detection with live features, drift monitoring, and KPI dashboards.",
    homepageSummary:
      "Streaming fraud detection pipeline with online inference, drift checks, and dashboarded operational monitoring.",
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
    kind: "project",
    featuredOnHome: false,
    archiveGroup: "MLOps",
    role: "Lead builder",
    year: "2025",
    outcomes: [
      "Real-time feature engineering and scoring",
      "Drift monitoring and KPI dashboards",
      "Alerting-ready fraud workflow architecture",
    ],
    tier: "Tier 1",
    tags: ["Applied ML", "MLOps"],
  },
  {
    slug: "langgraph-autonomous-task-agent",
    title: "LangGraph Autonomous Task Agent (Sidekick)",
    preview:
      "Autonomous task execution agent built with LangGraph for web browsing, extraction, and iterative reasoning with persistent memory.",
    homepageSummary:
      "Stateful task agent that combines browsing, tool use, memory, and evaluation loops for multi-step execution.",
    description:
      "Autonomous task execution agent built with LangGraph that performs web browsing, information extraction, and iterative reasoning using tool-based agents with persistent memory and evaluation loops.",
    techStack: ["Python", "LangGraph", "Playwright", "SQLite", "RAG", "Gradio"],
    githubUrl: "https://github.com/cam-bell/langgraph-sidekick-agent/tree/main",
    liveUrl: "https://huggingface.co/spaces/cameronbell/sidekick",
    image: "/images/langgraph.jpg",
    category: "AI/ML",
    kind: "project",
    featuredOnHome: false,
    archiveGroup: "Agentic Systems",
    role: "Lead builder",
    year: "2025",
    outcomes: [
      "LangGraph-based stateful orchestration",
      "Playwright-powered web automation",
      "Persistent task memory stored in SQLite",
    ],
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
    caseStudy: {
      role: "Lead builder",
      year: "2025",
      outcomes: [
        "Stateful LangGraph orchestration",
        "Playwright tool use for real-world interaction",
        "Persistent memory across multi-step tasks",
      ],
      problem: {
        paragraphs: [
          "Static-answer assistants break down on tasks that require browsing, extraction, intermediate memory, and stopping criteria.",
          "The goal here was to build a more execution-oriented assistant that can make progress through a sequence of tool-backed steps.",
        ],
      },
      approach: {
        paragraphs: [
          "The architecture uses a LangGraph StateGraph so agent state, tool usage, and evaluation decisions remain explicit rather than hidden in prompt history.",
          "This makes retry behavior, memory updates, and completion checks much easier to reason about.",
        ],
      },
      implementation: {
        paragraphs: [
          "Playwright handles browser automation, while SQLite-backed checkpoints give the agent stable memory between iterations.",
          "A tool layer wraps browsing, retrieval, and notifications so the orchestrator can route the right capability at the right step.",
        ],
        bullets: [
          "Worker -> ToolNode -> Evaluator style execution loop",
          "Persistent memory and retrieval across steps",
          "Tool-driven completion rather than answer-only generation",
        ],
      },
      results: {
        paragraphs: [
          "The project demonstrates a practical pattern for stateful assistants that need to act on the web instead of only reasoning over text.",
        ],
        bullets: [
          "Persistent task memory stored in SQLite",
          "RAG-enabled context retrieval",
          "Iterative evaluation for completion quality",
        ],
      },
      lessons: {
        paragraphs: [
          "Task agents benefit from explicit graph structure because debugging hidden control flow inside prompts quickly becomes unmanageable.",
        ],
      },
      diagrams: [
        {
          id: "architecture",
          label: "Architecture",
          src: "/diagrams/langgraph-agent-architecture.svg",
          alt: "LangGraph agent architecture diagram",
          caption:
            "Core agent architecture for orchestration, tooling, and memory.",
        },
        {
          id: "dataflow",
          label: "Dataflow",
          src: "/diagrams/langgraph-agent-dataflow.svg",
          alt: "LangGraph agent dataflow diagram",
          caption:
            "Execution and memory flow across tool-backed task completion steps.",
        },
      ],
    },
  },
  {
    slug: "self-replicating-agent-system",
    title: "Self-Replicating Agent System",
    preview:
      "Distributed meta-programming platform where agents generate, compile, and register new Python agents at runtime.",
    homepageSummary:
      "Experimental multi-agent runtime where a creator agent generates new agents dynamically and registers them into a distributed system.",
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
    kind: "project",
    featuredOnHome: false,
    archiveGroup: "Agentic Systems",
    role: "Lead builder",
    year: "2025",
    outcomes: [
      "Dynamic module generation and runtime registration",
      "Distributed gRPC worker architecture",
      "Probabilistic peer delegation for emergent collaboration",
    ],
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
      ],
    },
    caseStudy: {
      role: "Lead builder",
      year: "2025",
      outcomes: [
        "Generated agents compiled and registered at runtime",
        "Distributed worker topology over gRPC",
        "Custom message protocol for agent collaboration",
      ],
      problem: {
        paragraphs: [
          "Most multi-agent systems are static: the set of agents is fixed at build time, which limits experimentation with autonomous collaboration patterns.",
          "This project explored whether an agent could create new agents during execution and integrate them into the running system safely enough to be useful.",
        ],
      },
      approach: {
        paragraphs: [
          "A creator agent uses an LLM and a template to synthesize new Python agents, then hands them off to a validation and registration path before they join the network.",
          "The focus was less on raw output quality and more on proving the runtime architecture for self-extension.",
        ],
      },
      implementation: {
        paragraphs: [
          "Generated modules are written to disk, compiled via importlib, and registered into AutoGen runtimes that communicate over gRPC worker hosts.",
          "The system uses probabilistic delegation so generated peers can refine ideas and create more varied collaboration behavior.",
        ],
        bullets: [
          "Template-based agent generation",
          "Runtime import and registration flow",
          "Distributed execution across gRPC-connected workers",
        ],
      },
      results: {
        paragraphs: [
          "The architecture successfully demonstrates self-extension and distributed collaboration as a runtime property rather than a manual engineering step.",
        ],
        bullets: [
          "50% probabilistic delegation rate",
          "Dynamic module generation, compilation, and registration",
          "Async communication across multi-process workers",
        ],
      },
      lessons: {
        paragraphs: [
          "The hard part is not generation. It is validation, isolation, and lifecycle management once generated code enters the runtime.",
          "A production-ready version would need much stricter sandboxing, schema validation, and runtime guardrails around generated modules.",
        ],
      },
      diagrams: [
        {
          id: "system-architecture",
          label: "System Architecture",
          src: "/diagrams/self-replicating-agent-system-architecture.svg",
          alt: "Self-replicating agent system architecture diagram",
          caption:
            "Distributed runtime design for creator, workers, and agent registration.",
        },
        {
          id: "agent-workflow",
          label: "Agent Workflow",
          src: "/diagrams/self-replicating-agent-agent-workflow.svg",
          alt: "Self-replicating agent workflow diagram",
          caption:
            "Lifecycle of generating, validating, and activating a new agent.",
        },
      ],
    },
  },
  {
    slug: "cloud-cost-sustainability-advisor",
    title: "Cloud Cost & Sustainability Advisor",
    preview:
      "Decision-support app forecasting cloud costs and carbon impact across providers.",
    homepageSummary:
      "Full-stack decision-support product for comparing cost, carbon impact, and migration risk across cloud providers.",
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
    kind: "project",
    featuredOnHome: false,
    archiveGroup: "Full-Stack",
    role: "Full-stack builder",
    year: "2025",
    outcomes: [
      "Cross-cloud cost and carbon forecasting",
      "Risk-aware migration comparison workflows",
      "Semantic retrieval layered into planning experience",
    ],
    tier: "Tier 2",
    tags: ["Full-Stack", "Applied ML"],
  },
  {
    slug: "ai-powered-crypto-risk-dashboard",
    title: "AI-Powered Crypto Risk Dashboard",
    preview:
      "Real-time portfolio risk insights with ML-driven volatility and correlation analysis.",
    homepageSummary:
      "In-progress portfolio analytics dashboard blending risk metrics, market data, and AI-generated reporting.",
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
    category: "AI/ML",
    kind: "project",
    featuredOnHome: false,
    archiveGroup: "Full-Stack",
    role: "Lead builder",
    year: "2026",
    outcomes: [
      "Real-time portfolio risk views",
      "Volatility and correlation analysis",
      "AI-assisted reporting for portfolio summaries",
    ],
    status: "In Progress",
    tier: "Tier 2",
    tags: ["Applied ML", "LLM/Agentic"],
  },
  {
    slug: "multi-model-sales-agent-system",
    title: "Multi-Model Sales Agent System",
    preview:
      "Cross-provider agent system generating compliant, validated sales outreach.",
    homepageSummary:
      "Cross-provider sales outreach workflow using multiple model vendors with validation and policy-aware guardrails.",
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
    kind: "project",
    featuredOnHome: false,
    archiveGroup: "Agentic Systems",
    role: "Lead builder",
    year: "2025",
    outcomes: [
      "Cross-provider orchestration",
      "Structured email generation and validation",
      "Policy guardrails for outreach quality",
    ],
    tier: "Tier 2",
    tags: ["LLM/Agentic"],
  },
  {
    slug: "asl-detection-game",
    title: "ASL Detection Game",
    preview:
      "Human-centred CV game with real-time ASL detection and live feedback.",
    homepageSummary:
      "Computer vision teaching tool that turns real-time sign detection into a browser-based learning game.",
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
    kind: "project",
    featuredOnHome: false,
    archiveGroup: "Computer Vision",
    role: "CV and product contributor",
    year: "2025",
    outcomes: [
      "90% mAP@0.5 on custom ASL dataset",
      "Real-time webcam feedback",
      "Gamified learning experience",
    ],
    label: "Human-Centred CV Project",
    tier: "Tier 2",
    tags: ["CV"],
  },
  {
    slug: "multilingual-sentiment-keyword-analyzer",
    title: "Multilingual Sentiment & Keyword Analyzer",
    preview:
      "Multilingual sentiment + keyword extraction with transformer-based NLP.",
    homepageSummary:
      "NLP coursework project combining multilingual transformers, sentiment analysis, and keyword extraction.",
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
    kind: "coursework",
    featuredOnHome: false,
    archiveGroup: "NLP",
    role: "Team coursework",
    year: "2025",
    outcomes: [
      "239 cross-platform reviews analyzed",
      "Sentiment, emotion, and keyword extraction",
      "Transformer-driven multilingual analysis",
    ],
    domain: "NLP",
    tier: "Coursework",
    primaryBadge: "NLP",
    secondaryBadge: "Analytics",
    tags: ["NLP"],
  },
  {
    slug: "swimming-pool-detection",
    title: "Swimming Pool Detection",
    preview:
      "YOLOv11 aerial detection of pools using transfer learning and custom labels.",
    homepageSummary:
      "Computer vision coursework project focused on transfer learning and aerial object detection.",
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
    kind: "coursework",
    featuredOnHome: false,
    archiveGroup: "Computer Vision",
    role: "Individual coursework",
    year: "2025",
    outcomes: [
      "95.5% mAP after 30 epochs",
      "Transfer learning with custom aerial labels",
      "GroundingDINO and Roboflow data workflow",
    ],
    domain: "CV",
    tier: "Coursework",
    primaryBadge: "Computer Vision",
    secondaryBadge: "Insurance",
    tags: ["CV"],
  },
  {
    slug: "used-vehicle-pricing-valuation-model",
    title: "Used Vehicle Pricing & Valuation Model",
    preview:
      "Regression models predicting used car prices with engineered features.",
    homepageSummary:
      "Regression case study using feature engineering and tree ensembles on cross-country car listings.",
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
    kind: "coursework",
    featuredOnHome: false,
    archiveGroup: "Coursework",
    role: "Individual coursework",
    year: "2025",
    outcomes: [
      "R² = 0.867",
      "MAE ≈ EUR 2,660",
      "100K listings across 8 countries",
    ],
    tier: "Coursework",
    primaryBadge: "Regression",
    secondaryBadge: "Business",
    tags: ["Applied ML"],
  },
  {
    slug: "customer-churn-modelling",
    title: "Customer Churn Modelling",
    preview:
      "Churn model using SMOTE + gradient boosting with strong F1 performance.",
    homepageSummary:
      "Applied ML case study on churn prediction, imbalance handling, and model evaluation.",
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
    kind: "coursework",
    featuredOnHome: false,
    archiveGroup: "Coursework",
    role: "Individual coursework",
    year: "2025",
    outcomes: [
      "93.2% accuracy",
      "F1 = 0.926",
      "Improved baseline accuracy by 8.2 percentage points",
    ],
    tier: "Coursework",
    primaryBadge: "Classification",
    secondaryBadge: "Business",
    tags: ["Applied ML"],
  },
  {
    slug: "breast-cancer-classification",
    title: "Breast Cancer Classification",
    preview:
      "Scikit-learn pipeline for breast cancer classification with tuned KNN.",
    homepageSummary:
      "Coursework project focused on classical ML pipelines, CV tuning, and model complexity tradeoffs.",
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
    kind: "coursework",
    featuredOnHome: false,
    archiveGroup: "Coursework",
    role: "Individual coursework",
    year: "2025",
    outcomes: [
      "94.2% test accuracy",
      "Cross-validated hyperparameter tuning",
      "Interpretable model complexity analysis",
    ],
    tier: "Coursework",
    primaryBadge: "Classification",
    secondaryBadge: "Healthcare",
    tags: ["Applied ML"],
  },
  {
    slug: "diabetes-risk-classification",
    title: "Diabetes Risk Classification",
    preview:
      "Model comparison on imbalanced data to select a simpler, robust classifier.",
    homepageSummary:
      "Coursework comparison between XGBoost and logistic regression on imbalanced healthcare data.",
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
    kind: "coursework",
    featuredOnHome: false,
    archiveGroup: "Coursework",
    role: "Individual coursework",
    year: "2025",
    outcomes: [
      "Classifier comparison on imbalanced data",
      "Simpler model selected after evaluation",
      "Healthcare-focused classification case study",
    ],
    tier: "Coursework",
    primaryBadge: "Classification",
    secondaryBadge: "Healthcare",
    tags: ["Applied ML"],
  },
  {
    slug: "gapminder-global-trends",
    title: "Gapminder Global Trends",
    preview:
      "Visual analytics of 50+ years of GDP, life expectancy, and population trends.",
    homepageSummary:
      "Exploratory analytics project using regression, clustering, and visual storytelling on global development data.",
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
    kind: "coursework",
    featuredOnHome: false,
    archiveGroup: "Coursework",
    role: "Individual coursework",
    year: "2025",
    outcomes: [
      "50+ years of development data analyzed",
      "Regression and clustering on macro indicators",
      "Animated storytelling for pattern exploration",
    ],
    tier: "Coursework",
    primaryBadge: "Analytics",
    secondaryBadge: "Data Ethics",
    tags: ["Applied ML"],
  },
];

export const allProjects: Project[] = projects;

export const tier1Projects = projects.filter(
  (project) => project.tier === "Tier 1",
);

export const tier2Projects = projects.filter(
  (project) => project.tier === "Tier 2",
);

export const courseworkProjects = projects.filter(
  (project) => project.tier === "Coursework",
);

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featuredOnHome);

export const getArchiveProjects = () => projects;

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getProjectSlugs = () =>
  projects.map((project) => ({
    slug: project.slug,
  }));

export const getRelatedProjects = (project: Project, limit = 3) =>
  projects
    .filter(
      (candidate) =>
        candidate.slug !== project.slug &&
        (candidate.archiveGroup === project.archiveGroup ||
          candidate.kind === project.kind),
    )
    .slice(0, limit);

export const getProjectPrimaryLink = (
  project: Project,
): { href: string; label: string } | null => {
  if (hasActiveLink(project.liveUrl)) {
    return {
      href: project.liveUrl,
      label: "Live Demo",
    };
  }

  if (hasActiveLink(project.colabUrl)) {
    return {
      href: project.colabUrl as string,
      label: "Open Colab",
    };
  }

  if (hasActiveLink(project.githubUrl)) {
    return {
      href: project.githubUrl,
      label: "View Code",
    };
  }

  return null;
};

export const isProjectLinkAvailable = hasActiveLink;
