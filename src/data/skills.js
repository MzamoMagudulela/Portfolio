/**
 * TECHNICAL EXPERTISE DATA
 * Grouped into exact specified categories with descriptive context.
 * No arbitrary percentages or progress bars as instructed.
 */

export const skillCategories = [
  {
    category: "Programming",
    description: "Core programming languages utilized for backend architecture, algorithms, and data modeling.",
    skills: [
      { name: "Java", focus: "Object-Oriented Design, Enterprise Software, Multi-threading", icon: "Code2" },
      { name: "Python", focus: "Automation, Backend APIs, Scripting, Log Analysis", icon: "Terminal" },
      { name: "JavaScript", focus: "Modern ES6+, Asynchronous Programming, DOM & Web APIs", icon: "Braces" },
      { name: "SQL", focus: "Relational Queries, Normalization, Transactions, Stored Procedures", icon: "Database" }
    ]
  },
  {
    category: "Frontend",
    description: "Building responsive, modern, and accessible client-side interfaces.",
    skills: [
      { name: "HTML5", focus: "Semantic Structure, Web Accessibility (a11y), SEO Best Practices", icon: "Layout" },
      { name: "CSS3 / Tailwind", focus: "Modern Flexbox/Grid, Responsive Layouts, Glassmorphism & Animations", icon: "Palette" },
      { name: "React", focus: "Component Architecture, State Management, Hooks, Interactive SPAs", icon: "Atom" }
    ]
  },
  {
    category: "Backend",
    description: "Architecting high-performance server-side services, business logic, and API endpoints.",
    skills: [
      { name: "FastAPI", focus: "Asynchronous Python Microservices, Pydantic, High-Speed Routing", icon: "Zap" },
      { name: "Django", focus: "Model-View-Template Architecture, ORM, User Authentication", icon: "Server" },
      { name: "REST APIs", focus: "HTTP Specification, JSON Contracts, Authentication, Status Codes, Versioning", icon: "Cpu" }
    ]
  },
  {
    category: "Databases",
    description: "Designing schemas, persistence layers, and managing structured & unstructured data.",
    skills: [
      { name: "MySQL", focus: "Relational Schema Design, Foreign Keys, Indexing, ACID Transactions", icon: "Database" },
      { name: "SQLite", focus: "Embedded Storage, Rapid Prototyping, Local Persistence", icon: "Layers" },
      { name: "Firebase", focus: "Realtime Database, Authentication, Cloud Storage", icon: "Cloud" },
      { name: "MongoDB", focus: "Document Models, Aggregation Pipelines, Flexible Schemas", icon: "FolderGit2" }
    ]
  },
  {
    category: "Tools & Ecosystem",
    description: "Development environments, version control, API testing, and collaboration suites.",
    skills: [
      { name: "Git", focus: "Branching Strategies, Commit Hygiene, Merge Conflict Resolution", icon: "GitBranch" },
      { name: "GitHub", focus: "Open Source Collaboration, Pull Requests, Code Reviews", icon: "Github" },
      { name: "VS Code", focus: "Modular Extension Ecosystem, Debugging, Linting", icon: "Code" },
      { name: "NetBeans", focus: "Java Desktop & Enterprise Application Development", icon: "Laptop" },
      { name: "Postman", focus: "API Endpoint Testing, Header & Payload Mocking, Test Collections", icon: "Send" }
    ]
  }
];
