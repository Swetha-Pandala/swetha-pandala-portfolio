import projectMultiAgent from "./assets/project-multi-agent.jpg";
import projectDocumentIntelligence from "./assets/project-document-intelligence.jpg";
import projectSwiftPrediction from "./assets/project-swift-prediction.jpg";
import projectQuestionSimilarity from "./assets/project-question-similarity.jpg";

export const config = {
  developer: {
    name: "Swetha",
    fullName: "Swetha Pandala",
    initials: "SP",
    title: "AI Engineer & Full-Stack Developer",
    description:
      "Generative AI and Full-Stack Engineer specializing in agentic AI, RAG, LLM applications, Python, FastAPI, Java, Spring Boot and AWS.",
  },
  social: {
    github: "Swetha-Pandala",
    email: "swethapandala799@gmail.com",
    location: "United States",
  },
  resumeFile: "/Swetha_Pandala_Resume.pdf",
  about: {
    title: "About Me",
    description:
      "I’m a Python and AI/ML Engineer building production-grade Generative AI, RAG, and agentic systems. My work combines Python backend engineering, FastAPI, LangGraph, LangChain, PyTorch, TensorFlow, vector databases, and cloud deployment with strong enterprise experience in Java, Spring Boot, React, APIs, databases, and distributed systems. I focus on building AI applications that are scalable, reliable, observable, and production-ready.",
  },
  experiences: [
    {
      position: "Software Engineer",
      company: "MetLife",
      period: "2024 - Present",
      location: "Whippany, New Jersey",
      description:
        "Built Python-based GenAI and agentic AI services using FastAPI, LangChain, and LangGraph, with RAG, tool calling, multi-agent orchestration, and AWS Bedrock. Developed production APIs, evaluation workflows, guardrails, and observability for enterprise AI applications.",
      responsibilities: [
        "Designed stateful multi-agent orchestration with LangChain and LangGraph, including conditional routing and human-in-the-loop checkpoints",
        "Built production RAG pipelines on Amazon Bedrock Knowledge Bases with OpenSearch Serverless vector collections for citation-backed answers",
        "Implemented LangSmith tracing and automated LLM evals covering relevance, faithfulness, latency and cost before production promotion",
        "Integrated GenAI capabilities into enterprise systems via Python FastAPI microservices and Java Spring Boot REST APIs on AWS",
      ],
      technologies: [
        "AWS Bedrock",
        "LangGraph",
        "LangChain",
        "LangSmith",
        "RAG",
        "OpenSearch Serverless",
        "FastAPI",
        "Spring Boot",
        "React",
      ],
    },
    {
      position: "Python Software Engineer",
      company: "Morgan Stanley",
      period: "2022 - 2024",
      location: "New York, New York",
      description:
        "Developed Python backend services and APIs for high-volume financial workflows using FastAPI, Flask, Celery, Redis, PostgreSQL, and MongoDB. Built asynchronous processing, data pipelines, AI-assisted workflows, and containerized services deployed on Kubernetes/EKS.",
      responsibilities: [
        "Decomposed legacy Java monolith modules into Spring Boot and Python microservices, cutting average service startup time by 60%",
        "Implemented Celery task queues with a Redis broker for scheduled reports, notifications and transaction retry logic",
        "Built autonomous AI agents with tool use and multi-step reasoning, applying prompt engineering across Claude and OpenAI APIs",
        "Automated CI/CD with Jenkins and GitHub Actions, reducing release cycle time by 45%",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Python",
        "Celery",
        "Redis",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "Kubernetes",
        "Kafka",
      ],
    },
    {
      position: "Python Full Stack Developer",
      company: "Optum",
      period: "2020 - 2021",
      location: "India",
      description:
        "Built Python full-stack applications using Flask/Django, React, PostgreSQL, MongoDB, and Redis for healthcare analytics and enterprise workflows. Developed APIs, data-processing services, ML integrations, and performance-optimized backend systems.",
      responsibilities: [
        "Built Spring Boot microservices and Python services using clean, layered architecture",
        "Optimized data models and indexing across PostgreSQL and MongoDB",
        "Deployed to AWS Elastic Beanstalk, RDS and S3 with Jenkins-driven CI/CD",
      ],
      technologies: ["Java", "Spring Boot", "Python", "React", "PostgreSQL", "AWS", "Redis"],
    },
    {
      position: "Web Application Developer",
      company: "ValueMomentum",
      period: "2020",
      location: "India",
      description:
        "Developed reusable React and Angular interfaces integrated with Python and Java backend services, API-driven workflows, and optimized MySQL/PostgreSQL queries for faster enterprise reporting.",
      responsibilities: [
        "Built reusable front-end component libraries for enterprise applications",
        "Implemented backend CRUD and workflow services integrated with MySQL and MongoDB",
        "Supported AWS deployments and Jenkins CI/CD setup",
      ],
      technologies: ["React", "Angular", "JavaScript", "Python", "Java", "MySQL", "MongoDB"],
    },
    {
      position: "Java Developer",
      company: "Abbott",
      period: "2018 - 2020",
      location: "India",
      description:
        "Built REST microservices in Java and Python over MySQL, MongoDB and Cassandra for clinical and transactional workflows, with PySpark ingestion pipelines processing 1M+ records and ELK/CloudWatch observability.",
      responsibilities: [
        "Designed Spring Boot and Flask REST APIs for analytics dashboards and client portals",
        "Built Python and PySpark data ingestion and validation pipelines",
        "Implemented logging, monitoring and alerting with CloudWatch and the ELK Stack",
      ],
      technologies: ["Java", "Spring Boot", "Python", "Flask", "PySpark", "Cassandra", "AWS"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Multi-Agent Financial Intelligence Platform",
      category: "Agentic AI / RAG / Financial Intelligence",
      technologies:
        "Python, FastAPI, React, TypeScript, LangGraph, LangChain, RAG, LLMs, PostgreSQL, pgvector, Multi-Agent Orchestration, Tool Calling, Guardrails, Evaluation, Docker",
      image: projectMultiAgent,
      description:
        "An AI-powered financial intelligence platform that uses multi-agent orchestration, RAG, tool calling and structured and unstructured data retrieval to analyze financial information and generate contextual, explainable insights through a modern full-stack application.",
      link: "",
      github: "https://github.com/Swetha-Pandala/fin-mind-weave",
      live: "https://fin-mind-weave.lovable.app/",
    },
    {
      id: 2,
      title: "Document Intelligence Platform",
      category: "RAG / Semantic Search",
      technologies: "Python, LangChain, GPT-4, pgvector, PostgreSQL, FastAPI, AWS, React",
      image: projectDocumentIntelligence,
      description:
        "A document intelligence and semantic search platform enabling contextual question-answering across 500K+ enterprise documents and records, with grounded responses, secure data handling, an AWS deployment and a React frontend.",
      link: "",
    },
    {
      id: 3,
      title: "Swift Transaction Prediction Engine",
      category: "NLP / Fine-Tuning",
      technologies: "Python, GPT-2, Hugging Face Transformers, Apache Cassandra, FuzzyWuzzy, NLP",
      image: projectSwiftPrediction,
      description:
        "A transaction-status prediction and natural-language query system built on a fine-tuned GPT-2 model over historical financial transaction data, with fuzzy query matching and Cassandra-backed storage.",
      link: "",
    },
    {
      id: 4,
      title: "Quora Question Similarity",
      category: "NLP / Machine Learning",
      technologies: "Python, Logistic Regression, TF-IDF, GloVe, NLP, Scikit-learn",
      image: projectQuestionSimilarity,
      description:
        "A semantic similarity classifier trained on more than 400K question pairs, reaching a log-loss score of 0.284 using TF-IDF weighted GloVe embeddings.",
      link: "",
    },
  ],
  education: [
    {
      degree: "Doctorate in Business Administration, Applied Artificial Intelligence",
      school: "Belhaven University",
      meta: "Jackson, MS",
      period: "Expected 2029",
    },
    {
      degree: "Master's in Information Systems",
      school: "University of Memphis",
      meta: "GPA 3.8 / 4.0",
      period: "Dec 2022",
    },
    {
      degree: "Bachelor's in Computer Science and Engineering",
      school: "JNTUH, Hyderabad",
      meta: "GPA 9.0 / 10",
      period: "Aug 2020",
    },
  ],
  certifications: [
    { name: "AWS Certified Developer – Associate", year: "2024" },
    { name: "Java Programming Certificate", year: "2021" },
    { name: "HTML, CSS and JavaScript for Web Developers", year: "2020" },
    { name: "Python Programming Certificate", year: "2020" },
  ],
  resources: [
    {
      category: "Professional Profiles",
      items: [
        {
          title: "GitHub Profile",
          note: "Open source work and engineering projects",
          type: "Profile",
          url: "https://github.com/Swetha-Pandala",
        },
        {
          title: "LinkedIn Profile",
          note: "Professional network and career updates",
          type: "Profile",
          url: "https://www.linkedin.com/in/swetha-pandala/",
        },
      ],
    },
    {
      category: "Learning Resources",
      items: [
        {
          title: "Kaggle",
          note: "Data science competitions and datasets",
          type: "Platform",
          url: "https://kaggle.com/",
        },
        {
          title: "DeepLearning.AI",
          note: "World-class AI education and specializations",
          type: "Courses",
          url: "https://www.deeplearning.ai/",
        },
        {
          title: "Fast.ai",
          note: "Practical, accessible deep learning",
          type: "Courses",
          url: "https://www.fast.ai/",
        },
        {
          title: "Khan Academy AI",
          note: "AI in personalized education",
          type: "Learning",
          url: "https://www.khanacademy.org/khan-labs",
        },
      ],
    },
    {
      category: "Industry Resources",
      items: [
        {
          title: "OpenAI Blog",
          note: "Latest updates and research from OpenAI",
          type: "Blog",
          url: "https://openai.com/blog",
        },
        {
          title: "Google DeepMind",
          note: "Research and breakthroughs from DeepMind",
          type: "Research",
          url: "https://deepmind.google/",
        },
        {
          title: "Towards Data Science",
          note: "Data science and AI articles",
          type: "Publication",
          url: "https://towardsdatascience.com/",
        },
      ],
    },
    {
      category: "AI Research & Resources",
      items: [
        {
          title: "Hugging Face",
          note: "Hub for state-of-the-art models and datasets",
          type: "Models",
          url: "https://huggingface.co/",
        },
        {
          title: "Papers with Code",
          note: "Latest AI research linked to implementations",
          type: "Papers",
          url: "https://paperswithcode.com/",
        },
        {
          title: "PyTorch Framework",
          note: "Leading deep learning framework for research",
          type: "Framework",
          url: "https://pytorch.org/",
        },
      ],
    },
  ],
  contact: {
    email: "swethapandala799@gmail.com",
    github: "https://github.com/Swetha-Pandala",
    linkedin: "https://www.linkedin.com/in/swetha-pandala/",
  },
  skills: {
    develop: {
      title: "AI ENGINEER",
      description: "Generative and Agentic AI systems in production",
      details:
        "Building production-grade GenAI, RAG, and agentic AI systems using Python, LangGraph, LangChain, and modern LLM platforms.",
      more:
        "Designing intelligent workflows with tool calling, multi-agent orchestration, semantic retrieval, evaluation, and guardrails for enterprise AI applications.",
      tools: ["Python", "LangGraph", "LangChain", "RAG", "AWS Bedrock", "PyTorch", "LLM Evaluation"],
    },
    design: {
      title: "FULL-STACK",
      description: "Scalable enterprise applications end to end",
      details:
        "Building scalable enterprise applications with Python, Java, APIs, modern frontends, and cloud-native architecture.",
      more:
        "Developing backend services with FastAPI and Spring Boot, API-driven React interfaces, database integrations, and distributed systems across cloud environments.",
      tools: ["Python", "FastAPI", "Java", "Spring Boot", "React", "TypeScript", "PostgreSQL"],
    },
  },
};
