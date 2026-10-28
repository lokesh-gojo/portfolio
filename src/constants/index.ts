import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
  TAchievement,
  TCertification,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  python,
  fastapi,
  postgresql,
  academic,
  internship,
  ai_bot,
  lms_icon,
  deskbotImg,
  agriAiImg,
  acadexImg,
  trackitImg,
  voicebotImg,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "AI & RAG Solutions",
    icon: backend,
    desc: "Strict grounded architectures, vector embeddings, Gemini API integration & conversational agents.",
  },
  {
    title: "Full-Stack Web Architect",
    icon: web,
    desc: "End-to-end responsive web applications, modular architecture, and cloud deployment pipelines.",
  },
  {
    title: "Python & System Tools",
    icon: creator,
    desc: "FastAPI services, automation workflows, hardware IoT telemetry, and data processing.",
  },
  {
    title: "3D & Interactive UI",
    icon: mobile,
    desc: "Immersive WebGL & Three.js canvas experiences, physics interactions, and fluid motion design.",
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
    category: "AI & GenAI",
  },
  {
    name: "FastAPI",
    icon: fastapi,
    category: "AI & GenAI",
  },
  {
    name: "React JS",
    icon: reactjs,
    category: "Frontend & 3D",
  },
  {
    name: "Redux",
    icon: redux,
    category: "Frontend & 3D",
  },
  {
    name: "TypeScript",
    icon: typescript,
    category: "Frontend & 3D",
  },
  {
    name: "Three JS",
    icon: threejs,
    category: "Frontend & 3D",
  },
  {
    name: "JavaScript",
    icon: javascript,
    category: "Frontend & 3D",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    category: "Frontend & 3D",
  },
  {
    name: "HTML 5",
    icon: html,
    category: "Frontend & 3D",
  },
  {
    name: "CSS 3",
    icon: css,
    category: "Frontend & 3D",
  },
  {
    name: "Node JS",
    icon: nodejs,
    category: "Backend & DB",
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
    category: "Backend & DB",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    category: "Backend & DB",
  },
  {
    name: "Docker",
    icon: docker,
    category: "DevOps & Tools",
  },
  {
    name: "git",
    icon: git,
    category: "DevOps & Tools",
  },
  {
    name: "figma",
    icon: figma,
    category: "DevOps & Tools",
  },
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Python Developer Intern",
    companyName: "Software Engineering Internship",
    icon: internship,
    iconBg: "#0f172a",
    date: "Jun 2026 – Aug 2026 · Bangalore",
    points: [
      "Built, debugged, and shipped web application features using Python with high-standard coding conventions.",
      "Engineered backend modules, handled API interactions, and resolved complex technical bottlenecks.",
      "Gained direct, hands-on production experience with industry agile workflows, git branching, and testing standards.",
      "Collaborated with cross-functional engineering teams to deliver responsive and resilient end-user solutions.",
    ],
  },
  {
    title: "Lead AI Engineer – EASA DeskBot",
    companyName: "Enterprise Strict-Grounded RAG Architecture",
    icon: ai_bot,
    iconBg: "#1e1b4b",
    date: "2026 · Production Helpdesk",
    points: [
      "Architected an enterprise-grade Strict Source-Grounded RAG digital reception assistant (V2.3) for institutional knowledge.",
      "Implemented dual BM25 keyword search + Dense 384-dimensional multilingual vector retrieval with sentence-transformers.",
      "Configured Supabase pgvector with SQLite zero-dependency local fallback and conversational contextual query rewriting.",
      "Engineered robust production safeguards: 60 req/min rate limiting, 100KB payload guard, Docker containerization, and Cloud Run specs.",
    ],
  },
  {
    title: "Lead Developer – Acadex LMS Suite",
    companyName: "Next-Gen Learning & Placement Suite",
    icon: lms_icon,
    iconBg: "#064e3b",
    date: "Academic & Cloud Project",
    points: [
      "Built and deployed an end-to-end LMS platform with role-based dashboards for Admins, Faculty, and Students.",
      "Engineered an in-browser code compiler sandbox, dynamic attendance logging, automated certificate generation, and an AI ATS Resume Builder.",
      "Achieved seamless cross-device responsiveness using HTML5, CSS3, JavaScript, service workers, and GitHub Pages hosting.",
      "Designed modular architecture with persistent data caching and structured API integrations.",
    ],
  },
  {
    title: "B.E. Computer Science Engineering",
    companyName: "EASA College of Engineering and Technology",
    icon: academic,
    iconBg: "#312e81",
    date: "2023 - 2027 (Currently 7th Sem)",
    points: [
      "Pursuing Bachelor of Engineering in CSE with deep specialization in Artificial Intelligence, Python, and Full Stack Web Development.",
      "2x Hackathon 1st Prize Winner representing the institution across state-level collegiate technical competitions.",
      "Hands-on project lead for departmental software, college AI helpdesks, and student developer mentoring.",
      "Consistent track record in data structures, algorithms, system design fundamentals, and web technologies.",
    ],
  },
];

const projects: TProject[] = [
  {
    name: "EASA DeskBot AI",
    description:
      "Enterprise Strict Source-Grounded RAG college helpdesk. Features BM25 + dense vector hybrid search, Supabase pgvector, bilingual Tamil/English contextual rewriter, 60 req/min rate limiter, Docker container, and Cloud Run deployment.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
      { name: "rag-pgvector", color: "pink-text-gradient" },
      { name: "gemini-api", color: "orange-text-gradient" },
      { name: "docker", color: "blue-text-gradient" },
    ],
    image: deskbotImg,
    sourceCodeLink: "https://github.com/lokesh-gojo/desk-top",
    liveDemoLink: "https://github.com/lokesh-gojo/desk-top#system-overview",
    badge: "Enterprise RAG V2.3",
    badgeColor: "bg-purple-900/80 text-purple-300 border-purple-500/40",
    highlights: [
      "Dense vector + BM25 hybrid search (384-dim EN/Tamil)",
      "Strict zero-hallucination fact grounding & fallback",
      "Supabase PostgreSQL + pgvector & Docker deployment",
    ],
  },
  {
    name: "Smart Crop Rotation AI",
    description:
      "AI-driven agricultural decision-support platform for farmers that won 1st Prize in 2 Hackathons. Calculates soil health score from N, P, K, pH, and organic carbon, provides Gemini-powered bilingual advisory (Tamil & English), and integrates ESP32 soil sensors.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "gemini-api", color: "green-text-gradient" },
      { name: "esp32-iot", color: "pink-text-gradient" },
      { name: "agri-ai", color: "orange-text-gradient" },
      { name: "hackathon-winner", color: "green-text-gradient" },
    ],
    image: agriAiImg,
    sourceCodeLink: "https://github.com/lokesh-gojo",
    badge: "🏆 2x Hackathon 1st Prize",
    badgeColor: "bg-amber-900/80 text-yellow-300 border-amber-500/50",
    highlights: [
      "1st Prize at HACKRO'26 & 1st Place at NEXUS'26",
      "Multi-season crop rotation optimizer for maximum profit & soil recovery",
      "Bilingual Gemini LLM conversational advisor in Tamil and English",
    ],
  },
  {
    name: "Acadex LMS Suite",
    description:
      "Comprehensive, production-ready Learning Management & Placement Preparation System. Features dedicated Admin, Faculty, and Student dashboards, live online compiler sandbox, AI ATS resume builder, quizzes, attendance, and dynamic certificate generation.",
    tags: [
      { name: "html5", color: "blue-text-gradient" },
      { name: "css3", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
      { name: "compiler-sandbox", color: "orange-text-gradient" },
      { name: "ats-resume-ai", color: "blue-text-gradient" },
    ],
    image: acadexImg,
    sourceCodeLink: "https://github.com/lokesh-gojo/adcadex-lms",
    liveDemoLink: "https://lokesh-gojo.github.io/adcadex-lms/",
    badge: "Live Deployed",
    badgeColor: "bg-emerald-900/80 text-emerald-300 border-emerald-500/40",
    highlights: [
      "Live production demo deployed on GitHub Pages",
      "In-browser code compiler & AI ATS Resume Builder",
      "Full role-based portals: Admin, Faculty, and Student",
    ],
  },
  {
    name: "Track It Invest",
    description:
      "Responsive investment tracking web application built to simplify personal wealth management and asset monitoring. Features interactive allocation breakdowns, ROI analytics, and sleek mobile-first design.",
    tags: [
      { name: "html5", color: "blue-text-gradient" },
      { name: "css3", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
      { name: "fintech", color: "orange-text-gradient" },
    ],
    image: trackitImg,
    sourceCodeLink: "https://github.com/lokesh-gojo/Track-it-video-refrence-",
    badge: "FinTech Web App",
    badgeColor: "bg-blue-900/80 text-blue-300 border-blue-500/40",
    highlights: [
      "Real-time investment return and portfolio balance tracking",
      "Interactive asset allocation charts and visual indicators",
      "Seamless responsiveness across smartphones and desktop monitors",
    ],
  },
  {
    name: "Voice Chatbot & AI",
    description:
      "Interactive voice-enabled assistant built in Python supporting real-time speech input recognition, dynamic query processing, audio synthesis, and automated desktop task execution.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "speech-recognition", color: "green-text-gradient" },
      { name: "nlp", color: "pink-text-gradient" },
      { name: "automation", color: "orange-text-gradient" },
    ],
    image: voicebotImg,
    sourceCodeLink: "https://github.com/lokesh-gojo/voice-chatbot",
    badge: "AI Assistant",
    badgeColor: "bg-fuchsia-900/80 text-fuchsia-300 border-fuchsia-500/40",
    highlights: [
      "Speech-to-text audio input with noise filtering",
      "Automated desktop workflows and system operations",
      "Clean modular Python codebase with expandable command handlers",
    ],
  },
];

const achievements: TAchievement[] = [
  {
    title: "1st Prize — HACKRO'26 Hackathon",
    event: "HACKRO'26 State-Level Hackathon",
    organization: "Erode Sengunthar Engineering College",
    date: "September 2026",
    badge: "Champion 🥇",
    description:
      "Awarded First Prize for architecting the Smart Crop Rotation & Soil Restorer AI platform, combining IoT soil sensor telemetry with Gemini LLM bilingual agricultural advisory.",
    link: "https://github.com/lokesh-gojo",
  },
  {
    title: "1st Place — NEXUS'26 Hackathon",
    event: "NEXUS'26 Grand Hackathon",
    organization: "Sasurie College of Engineering",
    date: "October 2026",
    badge: "Winner 🥇",
    description:
      "Secured First Place for innovative application of generative AI, soil restoration modeling, and Tamil conversational bot for real-world farming communities.",
    link: "https://github.com/lokesh-gojo",
  },
];

const certifications: TCertification[] = [
  {
    title: "Introduction to Semiconductors",
    issuer: "India Semiconductor Mission, MeitY & Intel",
    date: "September 2026",
    skills: "Semiconductor Fundamentals, Chip Fabrication, Microelectronics",
  },
  {
    title: "Build Your Own GPTs",
    issuer: "LinkedIn Learning",
    date: "March 2025",
    skills: "Prompt Engineering, Custom GPT Architecture, AI Systems",
  },
  {
    title: "Introduction to Career Skills in Software Development",
    issuer: "LinkedIn Learning",
    date: "May 2025",
    skills: "SDLC, Clean Code, Agile Workflows, Code Review",
  },
  {
    title: "Networking Essentials using Cisco",
    issuer: "Certificate of Appreciation · FIESTA'25, KPR Institute",
    date: "March 2025",
    skills: "Computer Networks, TCP/IP, Subnetting, Routing",
  },
  {
    title: "AI Tools & Emerging Tech Workshop",
    issuer: "Technical Development Workshop",
    date: "2025",
    skills: "Generative AI, Workflow Automation, Developer Productivity",
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Lokesh's work on EASA DeskBot RAG is exceptional. His understanding of hybrid vector search, strict factual grounding, and production deployment is well beyond typical undergraduate standards.",
    name: "Engineering Faculty",
    designation: "CSE Department",
    company: "EASA College of Engg",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Watching Lokesh lead the Agri-AI project to win back-to-back hackathons at HACKRO'26 and NEXUS'26 showed remarkable problem-solving speed, technical depth in Python and Gemini API, and presentation mastery.",
    name: "Hackathon Jury & Mentor",
    designation: "Technical Lead",
    company: "State Tech Forum",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    testimonial:
      "Lokesh delivers clean, modular code with great UI sensibility. His Acadex LMS platform with the live compiler sandbox was intuitive, responsive, and thoroughly documented.",
    name: "Project Collaborator",
    designation: "Software Developer",
    company: "Development Lab",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  achievements,
  certifications,
};
