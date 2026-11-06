// All Skill Mastery Track content lives here. Edit this file to change the website
// AND the WhatsApp Skill Mastery Track images — both are generated from this data.

export const COURSES = [
  {
    id: "n8n-infra",
    num: "01",
    icon: "flow",
    tag: "Automation & Infrastructure",
    title: "n8n Automation on Your Own Server",
    subtitle: "Docker · VPS · CRM Integration",
    summary:
      "The flagship track. You learn to build automations and run them on infrastructure you own — not a trial account that expires. By the end you can deploy, host and maintain a production automation stack.",
    outcome:
      "Deploy a self-hosted n8n stack on a VPS with Docker, and build workflows that connect a CRM to the rest of your tools and keep running unattended.",
    modules: [
      {
        name: "n8n Fundamentals",
        points: [
          "The node model: triggers, actions, data flow",
          "Expressions and working with JSON between nodes",
          "Manual, scheduled and webhook triggers",
          "Reading and reshaping data mid-workflow",
        ],
      },
      {
        name: "Docker & Linux Basics",
        points: [
          "Containers, images and volumes explained practically",
          "docker-compose for a multi-service stack",
          "Environment variables and secrets handling",
          "Logs, restarts and debugging a container",
        ],
      },
      {
        name: "VPS Deployment",
        points: [
          "Buying and securing a VPS (Ubuntu)",
          "SSH keys, firewall and basic server hardening",
          "Nginx Proxy Manager, domains and free SSL",
          "Postgres for n8n, backups and persistence",
        ],
      },
      {
        name: "CRM & API Integration",
        points: [
          "Connecting a CRM (Twenty, HubSpot or similar)",
          "REST APIs, authentication and API keys",
          "Two-way sync between CRM and other apps",
          "Rate limits, pagination and bulk operations",
        ],
      },
      {
        name: "Production Hardening",
        points: [
          "Error branches and retry strategies",
          "Alerting when a workflow fails",
          "Queue mode and handling volume",
          "Version control and safe workflow updates",
        ],
      },
    ],
    needs: "No prior server experience needed",
    sessions: "6–8 sessions",
  },
  {
    id: "rag-chatbot",
    num: "02",
    icon: "database",
    tag: "RAG & Chatbots",
    title: "RAG Chatbots Over Your Own Data",
    subtitle: "Embeddings · Vector DBs · Retrieval",
    summary:
      "Make a model answer from your documents instead of inventing things. Retrieval is where most RAG projects quietly fail, so that is where most of the time goes.",
    outcome:
      "Build a chatbot that answers accurately from a real document set, cites its sources, and that you can measure and improve.",
    modules: [
      {
        name: "How RAG Actually Works",
        points: [
          "Why a model needs retrieval at all",
          "The full pipeline: ingest → chunk → embed → retrieve → answer",
          "Where hallucinations enter and how to block them",
          "When RAG is the wrong tool for the job",
        ],
      },
      {
        name: "Documents & Chunking",
        points: [
          "Loading PDFs, docs, sheets and web pages",
          "Chunk size and overlap, and why they matter",
          "Semantic vs fixed chunking compared on real data",
          "Metadata and filtering at retrieval time",
        ],
      },
      {
        name: "Embeddings & Vector Databases",
        points: [
          "What an embedding is, without the maths",
          "Choosing an embedding model (cost vs quality)",
          "Pinecone, Qdrant and pgvector compared",
          "Indexing, updating and deleting documents",
        ],
      },
      {
        name: "Retrieval Quality",
        points: [
          "Similarity search and its failure modes",
          "Hybrid search: keyword plus semantic",
          "Re-ranking to fix bad top results",
          "Citations so answers can be checked",
        ],
      },
      {
        name: "Shipping the Chatbot",
        points: [
          "A chat interface people can actually use",
          "Conversation memory and follow-up questions",
          "Measuring accuracy before you trust it",
          "Deploying it inside n8n or as its own service",
        ],
      },
    ],
    needs: "Basic programming helps",
    sessions: "5–7 sessions",
  },
  {
    id: "ai-foundations",
    num: "03",
    icon: "brain",
    tag: "Core AI Knowledge",
    title: "AI Foundations & How Models Work",
    subtitle: "LLMs · Tokens · Fine-Tuning · Model Selection",
    summary:
      "The theory track, taught practically. Everything else makes more sense once you understand what a model actually does, what it costs, and why it behaves the way it does.",
    outcome:
      "Choose the right model for any task on evidence rather than reputation, control cost and quality, and know when fine-tuning is worth it.",
    modules: [
      {
        name: "How LLMs Work",
        points: [
          "Training, inference and what a model really stores",
          "Tokens: what they are and why they cost money",
          "Context windows and what happens when you exceed them",
          "Temperature, top-p and controlling randomness",
        ],
      },
      {
        name: "The Model Landscape",
        points: [
          "GPT, Claude, Gemini, Llama, Mistral, DeepSeek compared",
          "Open-weight vs closed models in practice",
          "Reasoning models and when they are worth the wait",
          "Multimodal models: vision, audio and documents",
        ],
      },
      {
        name: "Cost, Speed & Quality",
        points: [
          "Reading pricing pages and predicting real cost",
          "Latency, streaming and perceived speed",
          "Caching, batching and cutting the bill",
          "Benchmarking models on your own task",
        ],
      },
      {
        name: "Fine-Tuning & Customisation",
        points: [
          "Prompting vs RAG vs fine-tuning: what fixes what",
          "Preparing a training dataset properly",
          "LoRA and parameter-efficient fine-tuning",
          "Evaluating whether the tuned model is better",
        ],
      },
      {
        name: "Running Models Locally",
        points: [
          "Ollama and local model hosting",
          "Quantisation and hardware requirements",
          "Privacy, data residency and offline use",
          "When local beats an API, and when it does not",
        ],
      },
    ],
    needs: "No coding needed",
    sessions: "4–5 sessions",
  },
  {
    id: "python-ai",
    num: "04",
    icon: "project",
    tag: "Programming",
    title: "Python for AI & Automation",
    subtitle: "From First Script to Working API",
    summary:
      "Python taught through the things you will actually use it for. No exercises about shapes and animals — every concept arrives attached to an AI or automation task.",
    outcome:
      "Read, write and debug Python confidently enough to script your own automations and call any AI API directly.",
    modules: [
      {
        name: "Python Basics",
        points: [
          "Variables, types, lists and dictionaries",
          "Conditions, loops and functions",
          "Reading and writing files",
          "Errors, exceptions and reading a traceback",
        ],
      },
      {
        name: "Working With Data",
        points: [
          "JSON and how APIs actually talk",
          "CSV and spreadsheet data with pandas",
          "Cleaning messy real-world data",
          "Dates, text processing and regular expressions",
        ],
      },
      {
        name: "APIs & Requests",
        points: [
          "HTTP methods, headers and status codes",
          "Calling an API with the requests library",
          "Authentication, keys and environment variables",
          "Handling failures, retries and timeouts",
        ],
      },
      {
        name: "Python With AI Models",
        points: [
          "OpenAI, Anthropic and Groq SDKs",
          "Streaming responses and structured output",
          "Building a small tool that uses a model",
          "Token counting and cost control in code",
        ],
      },
      {
        name: "Building Something Real",
        points: [
          "Virtual environments and dependencies",
          "A simple FastAPI service of your own",
          "Calling your Python code from n8n",
          "Git basics and keeping your work safe",
        ],
      },
    ],
    needs: "Complete beginners welcome",
    sessions: "6–8 sessions",
  },
  {
    id: "agentic-ai",
    num: "05",
    icon: "agent",
    tag: "Agents",
    title: "Agentic AI Systems",
    subtitle: "Tool Use · Multi-Agent · Guardrails",
    summary:
      "Systems that decide rather than just respond. You build an agent that plans, uses tools, recovers from its own mistakes — and then learn to prove it works before trusting it.",
    outcome:
      "Ship a working agent with tools, memory and guardrails, tested properly before it touches anything that matters.",
    modules: [
      {
        name: "What an Agent Really Is",
        points: [
          "Chatbot vs workflow vs agent: the real difference",
          "The ReAct loop: reason, act, observe, repeat",
          "When an agent is overkill for the problem",
          "Where agents fail most often in production",
        ],
      },
      {
        name: "Tools & Function Calling",
        points: [
          "Defining tools a model can call",
          "Writing tool descriptions the model understands",
          "Handling tool errors and bad arguments",
          "Giving an agent access to APIs and databases",
        ],
      },
      {
        name: "Memory & State",
        points: [
          "Short-term context vs long-term memory",
          "Storing and retrieving agent state",
          "Summarising long conversations",
          "Passing context between steps safely",
        ],
      },
      {
        name: "Multi-Agent Systems",
        points: [
          "Supervisor and worker agent patterns",
          "Handoffs and shared state between agents",
          "LangGraph and CrewAI compared",
          "Knowing when one agent is enough",
        ],
      },
      {
        name: "Guardrails & Evaluation",
        points: [
          "Input validation and output constraints",
          "Human-in-the-loop approval steps",
          "Writing evals that catch real failures",
          "Logging, tracing and debugging agent runs",
        ],
      },
    ],
    needs: "Python basics required",
    sessions: "6–8 sessions",
  },
  {
    id: "make-zapier",
    num: "06",
    icon: "zap",
    tag: "No-Code Automation",
    title: "Make.com & Zapier",
    subtitle: "Visual Automation You Can Sell",
    summary:
      "The fastest route from zero to automations clients will pay for. No code at all — but with the cost and reliability traps that catch almost every beginner.",
    outcome:
      "Design and ship multi-app automations for a client or your own business, priced and built so they stay profitable.",
    modules: [
      {
        name: "Scenario Design",
        points: [
          "Mapping a process before you build it",
          "Modules, connections and data mapping",
          "Triggers: instant, polling and scheduled",
          "Testing safely without touching live data",
        ],
      },
      {
        name: "Logic & Control Flow",
        points: [
          "Routers and conditional branches",
          "Filters and when to use them instead",
          "Iterators and aggregators for lists",
          "Data stores for state between runs",
        ],
      },
      {
        name: "Make vs Zapier",
        points: [
          "Where each one genuinely wins",
          "Operations vs tasks: the pricing models",
          "Migrating an automation between them",
          "Choosing per project, not by habit",
        ],
      },
      {
        name: "AI Inside No-Code",
        points: [
          "Adding GPT or Claude steps to a scenario",
          "Structured output that the next step can use",
          "Document and image processing modules",
          "Keeping AI costs predictable",
        ],
      },
      {
        name: "Reliability & Cost",
        points: [
          "Error handlers and fallback routes",
          "Reducing operation count on a live scenario",
          "Monitoring and failure alerts",
          "Pricing automation work for clients",
        ],
      },
    ],
    needs: "No coding needed",
    sessions: "6 sessions",
  },
  {
    id: "ai-tools",
    num: "07",
    icon: "tools",
    tag: "Applied AI",
    title: "AI Tools & Prompt Engineering",
    subtitle: "Daily Work · Content · Prompt Systems",
    summary:
      "The practical sweep. Which tools genuinely save hours in a working week, and how to write prompts that behave the same way every time instead of only when you are lucky.",
    outcome:
      "Cut real hours out of your week, and build prompt systems reliable enough to sit inside an automation.",
    modules: [
      {
        name: "Prompt Engineering Core",
        points: [
          "Why identical prompts give different answers",
          "Role, context, task and constraint structure",
          "Few-shot examples and when they help",
          "Chain-of-thought and step-by-step reasoning",
        ],
      },
      {
        name: "Prompt Systems",
        points: [
          "Reusable templates with variables",
          "Forcing strict JSON and structured output",
          "Prompt chaining across multiple steps",
          "Versioning and testing against edge cases",
        ],
      },
      {
        name: "Content & Research Tools",
        points: [
          "Research and summarising workflows",
          "Long-form content without the AI voice",
          "Image and video generation tools",
          "Brand voice that stays consistent",
        ],
      },
      {
        name: "Productivity & Coding Tools",
        points: [
          "Coding assistants used properly",
          "Documents, decks and spreadsheets",
          "Meeting notes, transcripts and summaries",
          "Where these tools quietly get things wrong",
        ],
      },
      {
        name: "Putting It to Work",
        points: [
          "Automating one real weekly task of yours",
          "Prompt library you keep and reuse",
          "Combining tools into a single workflow",
          "Judging output quality honestly",
        ],
      },
    ],
    needs: "No coding needed",
    sessions: "3–4 sessions",
  },
];
