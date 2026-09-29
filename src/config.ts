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
      "I'm a Full Stack Software Engineer and Generative AI Developer with around 7 years of experience building scalable enterprise applications, AI-native systems and cloud platforms across financial services and healthcare. I design multi-agent and RAG architectures with LangChain, LangGraph and AWS Bedrock, and ship them behind production Python FastAPI and Java Spring Boot services. I care about grounded answers, measurable evaluation and clean systems — instrumenting agent workflows with LangSmith for tracing, accuracy, latency and cost. Alongside the AI work I build React and TypeScript interfaces, model relational and vector data stores, and deploy cloud-native workloads on AWS with Docker, Kubernetes and full CI/CD.",
  },
  experiences: [
    {
      position: "Software Engineer",
      company: "MetLife",
      period: "2024 - Present",
      location: "Whippany, New Jersey",
      description:
        "Architecting multi-agent systems on AWS Bedrock with planner, retriever and executor agents orchestrated through LangGraph, grounded by Bedrock Knowledge Bases and OpenSearch Serverless, and exposed through FastAPI and Spring Boot services across enterprise financial platforms.",
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
      position: "Software Engineer",
      company: "Morgan Stanley",
      period: "2022 - 2024",
      location: "New York, New York",
      description:
        "Built Java and Spring Boot microservices alongside Python services for a high-volume financial platform, refactoring legacy monolith modules, adding asynchronous processing with Celery and Redis, and running everything on Docker, Kubernetes/EKS and Kafka-backed event pipelines.",
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
      position: "Java/Python Full Stack Developer",
      company: "Optum",
      period: "2020 - 2021",
      location: "India",
      description:
        "Delivered full stack banking and healthcare analytics features with Spring Boot, Python and React.js, securing APIs with OAuth 2.0 and JWT and tuning PostgreSQL and MongoDB layers for 40% faster queries.",
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
        "Developed reusable React and Angular UI components backed by Python and Java services, and tuned SQL across MySQL and PostgreSQL to cut reporting response times by 20–30%.",
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
      title: "Enterprise Multi-Agent Financial Assistant",
      category: "Agentic AI / RAG",
      technologies:
        "AWS Bedrock AgentCore, Strands Agents, LangGraph, Bedrock Knowledge Bases, OpenSearch Serverless, LangSmith, Python, FastAPI",
      image: projectMultiAgent,
      description:
        "A production-oriented multi-agent financial assistant with specialized retrieval, analysis and report-generation agents coordinated through LangGraph and grounded by enterprise RAG over financial documents. Answer quality, latency and cost are tracked with LangSmith tracing and automated evaluations.",
      link: "",
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
      description: "Generative and agentic AI systems in production",
      details:
        "Designing multi-agent orchestration and LLM applications with LangChain, LangGraph and AWS Bedrock. Building RAG pipelines over vector retrieval, serving them through FastAPI, and measuring quality with LLM evaluation and LangSmith observability.",
      tools: [
        "Generative AI",
        "Agentic Systems",
        "RAG",
        "LLM Applications",
        "Multi-Agent Orchestration",
        "LangChain",
        "LangGraph",
        "AWS Bedrock",
        "FastAPI",
        "Vector Retrieval",
        "LLM Evals",
        "Observability",
      ],
    },
    design: {
      title: "FULL-STACK",
      description: "Scalable enterprise applications end to end",
      details:
        "Building microservices in Java and Spring Boot alongside Python and FastAPI, backed by well-modelled relational and NoSQL databases, with React and TypeScript interfaces on top and AWS, Docker, Kubernetes and CI/CD underneath.",
      tools: [
        "Java",
        "Spring Boot",
        "Python",
        "FastAPI",
        "React",
        "TypeScript",
        "REST APIs",
        "Databases",
        "Microservices",
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD",
      ],
    },
  },
};
