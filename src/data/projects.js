/**
 * PROJECTS DATA FILE
 * Easily add, edit or reorder projects displayed across the portfolio.
 * To add a new project, simply append an object with the structure below.
 */

export const projects = [
  {
    id: "learnitics",
    title: "Learnitics / Learnatics",
    tagline: "Comprehensive Educational Learning Management Platform",
    category: "Full Stack Web Platform",
    featured: true,
    description:
      "An educational learning management platform engineered with multi-tiered role authorization for students, educators, and administrative personnel. Features course material distribution, assignment workflows, and student progress tracking.",
    longDescription:
      "Designed to address digital education access and streamline instructional workflows. Learnitics delivers distinct user experiences tailored for students, teachers, and system administrators with robust role-based access control (RBAC), structured academic content modules, and grade tracking mechanisms.",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "REST APIs", "Tailwind CSS"],
    highlights: [
      "Role-Based Access Control (Admin, Educator, Student)",
      "Course and module distribution engine",
      "Assignment submission and evaluation workflow",
      "Student progress analytics and grade reporting"
    ],
    githubUrl: "https://github.com/MzamoMagudulela/learnitics-educational-platform",
    liveUrl: null, // Set to live URL when deployed
    status: "Active Development",
    year: "2024"
  },
  {
    id: "automated-api-tester",
    title: "Automated API Testing Platform",
    tagline: "High-Throughput Endpoint Validation & Monitoring Suite",
    category: "Developer Tools & Backend",
    featured: true,
    description:
      "A platform for executing GET, POST, PUT, and DELETE requests, validating API responses, monitoring response times, and storing granular test execution records.",
    longDescription:
      "A specialized developer utility built to automate integration testing of RESTful web services. It enables engineering teams to define HTTP request collections, execute automated assertion checks against status codes and JSON payloads, benchmark latency percentiles, and maintain audit logs of all runs.",
    technologies: ["Python", "FastAPI", "SQLite", "REST APIs", "Postman", "Pytest"],
    highlights: [
      "Full HTTP method execution (GET, POST, PUT, DELETE, PATCH)",
      "Automated JSON schema & assertion validation",
      "Latency benchmarking & response duration tracking",
      "Persistent test run history and audit trails"
    ],
    githubUrl: "https://github.com/MzamoMagudulela/Automated-API-Testing-Platform",
    liveUrl: null,
    status: "Completed",
    year: "2024"
  },
  {
    id: "it-support-ticket-api",
    title: "IT Support Ticket API",
    tagline: "Enterprise Service Desk Management Architecture",
    category: "Backend & Systems",
    featured: true,
    description:
      "A robust backend application for managing IT support requests, technician ticket assignments, SLA monitoring, and IT service lifecycle management.",
    longDescription:
      "Engineered to streamline internal technical operations, this REST API manages the complete ticketing lifecycle from initial incident logging to escalation, assignment, resolution, and feedback. Designed with data normalization, transaction safety, and clean separation of concerns.",
    technologies: ["Java", "Spring / REST", "MySQL", "Git", "Postman"],
    highlights: [
      "Lifecycle state machine (Open, Assigned, Pending, Resolved)",
      "Priority triage & SLA escalation rules",
      "Relational schema with ACID compliance",
      "Comprehensive Swagger / OpenAPI specifications"
    ],
    githubUrl: "https://github.com/MzamoMagudulela/IT_Support_Ticket_API",
    liveUrl: null,
    status: "Completed",
    year: "2023"
  },
  {
    id: "security-log-analyser",
    title: "Security Log Analyser",
    tagline: "System Telemetry & Suspicious Pattern Detector",
    category: "Cybersecurity & Systems",
    featured: false,
    description:
      "A security application for parsing system logs, detecting anomalous activity patterns, and identifying potential brute-force attempts and suspicious traffic.",
    longDescription:
      "Developed as part of practical cybersecurity research, this application consumes authentication logs and server access traces, extracts relevant indicators of compromise (IoCs), flags high-frequency failure thresholds, and outputs structured security incident summaries.",
    technologies: ["Python", "FastAPI", "Regular Expressions", "SQLite", "Data Analytics"],
    highlights: [
      "High-speed log ingestion and regex parsing",
      "Brute force and abnormal credential attempt detection",
      "IP reputation flagging and threat threshold alarms",
      "Structured incident export in JSON/CSV formats"
    ],
    githubUrl: "https://github.com/MzamoMagudulela/Security-Log--Analyser",
    liveUrl: null,
    status: "Completed",
    year: "2024"
  },
  {
    id: "restaurant-management-system",
    title: "Restaurant Management System",
    tagline: "Full-Cycle Hospitality Operations & POS Platform",
    category: "Full Stack Application",
    featured: false,
    description:
      "An application for managing restaurant operations, customer orders, inventory synchronization, dining tables, and staff role permissions.",
    longDescription:
      "An end-to-end management solution covering point-of-sale order intake, kitchen ticket dispatch, inventory deduction, staff shift accounting, and operational reporting. Provides restaurant managers with real-time insight into day-to-day revenue and inventory levels.",
    technologies: ["Java", "MySQL", "NetBeans / Swing", "Git"],
    highlights: [
      "Table layout and seating status tracking",
      "Order processing with automated bill generation",
      "Inventory reconciliation and stock alerts",
      "Role-segregated access for servers, kitchen, and management"
    ],
    githubUrl: "https://github.com/MzamoMagudulela",
    liveUrl: null,
    status: "Completed",
    year: "2023"
  },
  {
    id: "communifix-sa",
    title: "CommuniFix SA",
    tagline: "Civic Technology Platform for Municipal Service Reporting",
    category: "Civic Tech & Community Impact",
    featured: false,
    description:
      "A civic technology concept that empowers communities across South Africa to report, track, and monitor municipal service delivery challenges like water leaks and power outages.",
    longDescription:
      "Conceived as an accessible digital bridge between citizens and municipal service departments. CommuniFix SA enables residents to geolocate infrastructure faults, attach incident details, and monitor resolution timelines, fostering transparent municipal accountability.",
    technologies: ["React", "FastAPI", "PostgreSQL", "Geolocation APIs", "Tailwind CSS"],
    highlights: [
      "Geo-tagged fault reporting (potholes, water leaks, electrical)",
      "Public status dashboard for community verification",
      "Automated ticket routing to municipal district channels",
      "Mobile-optimized progressive web architecture"
    ],
    githubUrl: "https://github.com/MzamoMagudulela/communifix-sa",
    liveUrl: null,
    status: "Concept & Prototype",
    year: "2024"
  }
];
