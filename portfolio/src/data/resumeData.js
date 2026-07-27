// All data sourced from Tin Timothy Ko's resume

export const education = [
  {
    school: 'California State University, Fullerton',
    degree: 'M.S, Computer Science',
    gpa: '3.87/4.00',
    highlights: ['Aug. 2024 — May 2026', 'Fullerton, CA'],
  },
  {
    school: 'National Central University',
    degree: 'B.S, Computer Science and Information Engineering',
    gpa: '3.67/4.00',
    highlights: ['Sep. 2019 — Jun. 2023', 'Taoyuan, Taiwan'],
  },
];

export const experiences = [
  {
    role: 'Software Engineer (Part-Time)',
    company: 'Sweep Digital Inc.',
    time: 'Jul. 2025 — Present',
    location: 'Remote, USA',
    description:
      'Engineered a cross-platform analytics platform in React, React Native, and Supabase, bridging a browser extension and a mobile app to deliver behavioral insights to users. Architected an event-driven RAG system on Supabase, GCP, and React that transformed 27,000+ browsing events into structured insights for a 50-user beta group. Built a Python and GCP serverless backend layer with a SetFit model that compressed input data by over 80%, cutting GPT-5 API costs.',
    tags: ['React', 'React Native', 'Supabase', 'GCP', 'Python', 'GPT-5', 'SetFit', 'RAG Architecture'],
  },
  {
    role: 'AI Automation Specialist Intern (Winter)',
    company: 'Unis LLC',
    time: 'Jan. 2025 — Feb. 2025',
    location: 'Buena Park, California',
    description:
      'Deployed a Python (Flask) and React full-stack driver self-check-in system, integrating with the in-house Warehouse Management System to reduce gate wait times by 70%. Developed a React, TypeScript, and CSS batch QR generator to streamline inventory tagging workflows for warehouse operators.',
    tags: ['Python', 'Flask', 'React', 'TypeScript', 'CSS', 'WMS Integration'],
  },
  {
    role: 'Co-Founder & Lead Engineer',
    company: 'Eumius Inc.',
    time: 'Jul. 2023 — Aug. 2024',
    location: 'Los Angeles, California',
    description:
      'Architected a React Native and GraphQL HealthTech MVP from concept to high-fidelity prototype, collaborating directly with stakeholders to meet market requirements. Integrated Firebase to build 80% of the MVP, including authentication and real-time medical synchronization for users.',
    tags: ['React Native', 'GraphQL', 'Firebase', 'Mobile Development', 'Product Strategy'],
  },
  {
    role: 'AI Research Intern',
    company: 'Hon Hai Research Institute (Foxconn)',
    time: 'Mar. 2022 — Jun. 2023',
    location: 'Taipei, Taiwan',
    description:
      'Optimized image pre-processing for large ImageNet datasets with Python multi-threading, reducing processing time by 90%. Built automated Python model-benchmarking pipelines, accelerating weekly experiment validation by 90%. Applied prompt engineering and reinforcement learning techniques to enhance the OCEAN personality traits of LLMs by 23%.',
    tags: ['Python', 'Multi-threading', 'Prompt Engineering', 'Reinforcement Learning', 'LLMs'],
  },
];

export const projects = [
  {
    title: 'Tech Trend Tracker (TTT)',
    description:
      "An insight platform designed to bridge the gap between job seekers and the roles they're targeting. The platform scrapes real-time job postings from LinkedIn, processes the data through a distributed pipeline to extract in-demand skills via local LLMs, and visualizes the trends to help developers optimize their resumes for specific roles. A local Gemma4 and Ollama NLP engine normalizes the technical skills demanded by each posting into clean, deduplicated data — enabling accurate trend analysis while eliminating 100% of recurring LLM API costs. Users can search any job title and instantly see its most-requested skills, related roles, and tailored portfolio project recommendations, surfaced through hybrid retrieval (pgvector semantic + pg_trgm lexical) in sub-second time.",
    tech: ['Go', 'Python', 'PostgreSQL (pgvector)', 'Gemma4', 'Ollama', 'RabbitMQ', 'Scrapy', 'React', 'Tailwind CSS', 'GCP'],
  },
  {
    title: 'GPU Accelerated ARBAC Policy Analysis',
    description:
      'Academic research focused on leveraging GPU acceleration to significantly enhance the performance and scalability of Administrative Role-Based Access Control (ARBAC) policy analysis. Engineered custom C++ and CUDA kernels that decreased memory usage 32x during ARBAC reachability analysis, and implemented a hybrid GPU/CPU architecture achieving a 1400x speedup over the baseline CPU version. A backward-slicing preprocessor pruned up to 85% of irrelevant policy rules from the GPU workload.',
    tech: ['C/C++', 'CUDA', 'HPC', 'Access Control'],
  },
  {
    title: 'Company Wizard',
    description:
      "An AI-powered enterprise assistant designed to bridge the gap between employees and internal company systems. The platform orchestrates LLMs via the Model Context Protocol to query live ERP databases and retrieve corporate policies via RAG, automatically escalates undocumented questions to human operators, and dynamically injects the resolved answers back into a vector database to continuously expand the application's knowledge base.",
    tech: ['Next.js', 'React', 'TypeScript', 'CSS', 'FastAPI', 'FastMCP', 'OpenAI API', 'ChromaDB', 'SQLite', 'SQLAlchemy', 'pytest'],
  },
  {
    title: 'Skin Tone Analysis',
    description:
      'An end-to-end machine learning pipeline that provides personalized skin care and cosmetic recommendations through real-time computer vision analysis. The application integrates face segmentation to isolate skin regions and employs k-means clustering to determine precise color profiles. By leveraging Gemini-Nano for on-device LLM inference, the platform delivers intelligent, adaptive feedback locally — ensuring total user privacy, zero cloud latency, and full offline functionality.',
    tech: ['React', 'JavaScript', 'MediaPipe', 'Gemini-Nano', 'Vercel'],
  },
  {
    title: 'UML Editor',
    description:
      'A desktop GUI application engineered to create and manage Unified Modeling Language (UML) diagrams. With strict adherence to core object-oriented design patterns, the editor features a fully interactive canvas that allows users to generate class and use-case nodes, draw complex relationship lines (composition, generalization, association), group/ungroup elements, and manipulate objects in real time.',
    tech: ['Java', 'Java Swing', 'OOD Patterns'],
  },
];

export const skillCategories = [
  {
    name: 'Languages',
    skills: ['Python', 'Go (Golang)', 'JavaScript', 'TypeScript', 'Java', 'C/C++', 'SQL', 'CUDA', 'HTML', 'CSS'],
    span: 2,
  },
  {
    name: 'Frontend & Mobile',
    skills: ['React', 'React Native', 'Tailwind CSS', 'Next.js', 'HTMX'],
    span: 2,
  },
  {
    name: 'Backend & Database',
    skills: ['REST APIs', 'Node.js', 'Flask', 'FastAPI', 'PostgreSQL', 'MongoDB'],
    span: 1,
  },
  {
    name: 'Cloud & DevOps',
    skills: ['Docker', 'GCP', 'Linux', 'Supabase', 'Firebase', 'RabbitMQ', 'pgmq'],
    span: 1,
  },
  {
    name: 'AI & Data Processing',
    skills: ['PyTorch', 'RAG', 'Local LLM', 'MCP', 'AI Workflows & Skills', 'Prompt Engineering'],
    span: 1,
  },
  {
    name: 'Spoken Languages',
    skills: ['English (Native)', 'Mandarin (Native)', 'Cantonese (Native)'],
    span: 1,
  },
];
