import { Project, SkillCategory, Education, ContactInfo } from "@/types";

// Personal Information
export const PERSONAL_INFO = {
  name: "MD. SHARDUL RAHMAN TURJO",
  role: "Full-Stack Developer",
  tagline:
    "Building modern web applications with React, Django, PostgreSQL, and AI integrations.",
} as const;

// Contact Information
export const CONTACT_INFO: ContactInfo = {
  email: "mdshardulrahmanturjoofficial@gmail.com",
  phone: "+8801881566366",
  location: "Mirupur 10, Dhaka, Bangladesh",
  linkedin: "https://www.linkedin.com/in/srturjo25/",
  github: "https://github.com/turjo25",
};

// About Section Content
export const ABOUT_TEXT =
  "Full-stack developer focused on building scalable web applications using React, Django, and REST APIs. Interested in backend engineering, clean architecture, authentication systems, and creating production-ready user experiences.";
export const BACKGROUND =
  "I am also a Software Engineering student at Daffodil International University with a CGPA of 3.87/4.00. Solved 500+ coding challenges across competitive programming platforms, strengthening analytical thinking and problem-solving skills through algorithmic practice and real-world development.";

// Skills Categories
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["C++", "Java", "Python", "JavaScript", "PHP"],
  },
  {
    name: "Frontend",
    skills: ["React", "HTML", "CSS"],
  },
  {
    name: "Backend",
    skills: ["Django"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub"],
  },
  {
    name: "Competitive Programming",
    skills: ["CodeForces", "LeetCode", "HackerRank"],
  },
];

// Projects Data
export const PROJECTS: Project[] = [
  {
    title: "Finance Tracker",

    shortDescription:
      "A premium, full-stack Personal Finance Tracker with AI-driven insights, multi-currency support, and dynamic analytics — built with a modern microservices architecture to help users manage their finances effectively.",

    keyFeatures: [
      "Real-time financial analytics dashboard",
      "AI chatbot with personalized spending insights",
      "ML-powered expense categorization and forecasting",
      "Multi-currency tracking with savings goals",
    ],

    technicalChallenges: [
      "Microservices integration across React, Django, and FastAPI",
      "Google OAuth + JWT dual authentication",
      "AI-service fallback and resilience handling",
      "Cross-service state synchronization and data consistency",
    ],

    techStack: [
      "React",
      "Tailwind CSS",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "scikit-learn",
      "SQLite",
      "JWT Authentication",
      "Google OAuth",
      "OpenRouter AI",
      "Recharts",
    ],
    githubLink: "https://github.com/turjo25/FinanceTracker.git",
    liveLink: "https://finance-tracker-25.vercel.app/",
    image: "/projects/FinanceTracker.webp",
  },
  {
    title: "LearningHub",
    shortDescription:
      "A full-stack Learning Management System (LMS) where teachers can create courses and students can learn.",
    keyFeatures: [
      "Role-based access (Student/Teacher/Admin)",
      "Course creation and assignment management",
      "Student enrollment and progress tracking",
      "RESTful API backend with Django REST Framework",
    ],
    technicalChallenges: [
      "Building a decoupled React frontend and Django backend",
      "Implementing JWT authentication",
      "Designing complex relational models for courses and assignments",
    ],
    techStack: [
      "Django",
      "Django REST Framework (DRF)",
      "React",
      "JWT / Session-based Authentication",
      "SQLite",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/turjo25/LearningHub.git",
    liveLink: "https://learning-hub-25.vercel.app/",
    image: "/projects/LearningHub.webp",
  },
  {
    title: "Royal Shop",
    shortDescription:
      "A Django-based single vendor e-commerce platform with SSLCommerz payment integration, product management, and order processing.",
    keyFeatures: [
      "User authentication with Google OAuth",
      "Product browsing with category & price filters",
      "Shopping cart with persistent session storage",
      "SSLCommerz payment gateway integration",
    ],
    technicalChallenges: [
      "Integrating SSLCommerz payment gateway",
      "Managing secure user sessions and cart state",
      "Handling post-checkout inventory updates",
    ],
    techStack: ["Django", "SQLite", "HTML", "CSS"],
    githubLink: "https://github.com/turjo25/Royal_Shop.git",
    liveLink: "https://royal-shop-uf36.onrender.com",
    image: "/projects/Royal_Eshop.webp",
  },
  {
    title: "Farm2Market",
    shortDescription:
      "A modern multi-role e-commerce platform built with Django connecting farmers directly with buyers.",
    keyFeatures: [
      "Multi-role authentication (Farmer/Buyer)",
      "Farmer dashboard for inventory management",
      "Real-time order tracking and notifications",
      "Product rating and review system",
    ],
    technicalChallenges: [
      "Designing a complex multi-role database schema",
      "Implementing real-time order notifications",
      "Handling logistics coordination logic",
    ],
    techStack: ["Django", "Supabase", "PostgreSQL", "HTML", "Tailwind CSS"],
    githubLink: "https://github.com/turjo25/Farm2Market.git",
    liveLink: "https://farm2market-1ao7.onrender.com/",
    image: "/projects/Farm2Market.webp",
  },
  {
    title: "GhoreRanna",
    shortDescription:
      "A web-based food ordering platform connecting customers with home cooks for convenient meal delivery.",
    keyFeatures: [
      "Role-specific dashboards (Customer/Cook/Delivery)",
      "Live order status tracking",
      "Menu and inventory management for home cooks",
      "Discount coupon system integration",
    ],
    technicalChallenges: [
      "Managing diverse permissions across multiple user roles",
      "Synchronizing live order status updates",
      "Building a comprehensive master admin dashboard",
    ],
    techStack: ["Django", "Supabase", "PostgreSQL", "HTML", "Tailwind CSS"],
    githubLink: "https://github.com/turjo25/GhoreRanna.git",
    liveLink: "https://ghoreranna.onrender.com/",
    image: "/projects/Ghoreranna.webp",
  },
  {
    title: "To-Do Web App",
    shortDescription:
      "A full-featured To-Do List web application built with Python and Django, featuring secure user authentication.",
    keyFeatures: [
      "Secure user authentication system",
      "Task status management (Pending/Completed)",
      "Task categorization and advanced filtering",
      "Due date and deadline tracking",
    ],
    technicalChallenges: [
      "Implementing dynamic task filtering",
      "Designing a responsive Bootstrap UI",
      "Ensuring secure per-user data isolation",
    ],
    techStack: ["Django", "SQLite", "HTML", "CSS"],
    githubLink: "https://github.com/turjo25/To-Do_Web_App_with_Django.git",
    liveLink: "https://todo-web-app-kg5f.onrender.com",
    image: "/projects/ToDo.webp",
  },
  {
    title: "AI Agent",
    shortDescription:
      "A friendly AI-powered customer service chatbot built with Django and integrated with OpenRouter AI.",
    keyFeatures: [
      "Real-time chat interface with smooth animations",
      "AI-Powered responses using DeepSeek AI model",
      "Persistent MySQL conversation history",
      "User session management",
    ],
    technicalChallenges: [
      "Integrating with OpenRouter API for seamless AI responses",
      "Managing real-time session state",
      "Optimizing chat history database queries",
    ],
    techStack: ["Django", "Python", "HTML", "Tailwind CSS"],
    githubLink: "https://github.com/turjo25/AI_AGENT.git",
    liveLink: "https://aiagent-somp.onrender.com/",
    image: "/projects/AiAgent.webp",
  },
  {
    title: "WeatherFlow",
    shortDescription:
      "A modern, responsive weather application built with React and Tailwind CSS.",
    keyFeatures: [
      "Real-time weather data using WeatherAPI",
      "Modern glassmorphism UI design",
      "City-based weather search",
      "Responsive mobile-friendly layout",
    ],
    technicalChallenges: [
      "Handling asynchronous API calls efficiently",
      "Implementing a glassmorphism design system",
      "Managing complex React state for weather data",
    ],
    techStack: ["React", "Weather API", "HTML", "CSS"],
    githubLink: "https://github.com/turjo25/WeatherFlow.git",
    liveLink: "https://weather-flow-nine.vercel.app/",
    image: "/projects/WeatherFlow.webp",
  },
  {
    title: "Online Library",
    shortDescription:
      "A comprehensive Online Library Management System built with Python, Django, and Tailwind CSS.",
    keyFeatures: [
      "Secure user authentication and profile management",
      "Full CRUD functionality for book management",
      "User review and feedback system",
      "Responsive book browsing interface",
    ],
    technicalChallenges: [
      "Implementing a secure admin-only CRUD interface",
      "Building a reliable feedback and review system",
      "Designing a fully responsive UI with Tailwind CSS",
    ],
    techStack: ["Django", "SQLite", "HTML", "CSS"],
    githubLink: "https://github.com/turjo25/Online_Library_Django.git",
    image: "/projects/OnlineLibrary.webp",
  },
  {
    title: "Shopping Cart",
    shortDescription:
      "A straightforward shopping cart application built using PHP and MySQL demonstrating core CRUD operations.",
    keyFeatures: [
      "Add and remove products dynamically",
      "Update product quantities seamlessly",
      "Persistent database storage using MySQL",
      "Clean and simple user interface",
    ],
    technicalChallenges: [
      "Managing pure PHP session state",
      "Implementing secure MySQL queries",
      "Handling dynamic cart calculations",
    ],
    techStack: ["PHP", "MySQL", "HTML", "CSS"],
    githubLink: "https://github.com/turjo25/ShoppingCart_PHP-CRUD.git",
    image: "/projects/ShoppingCart.webp",
  },
];

// Education Data
export const EDUCATION: Education[] = [
  {
    degree: "B.Sc. in Software Engineering",
    institution: "Daffodil International University",
    period: "Jan 2023 – Present",
    grade: "CGPA: 3.87 / 4.00",
  },
  {
    degree: "HSC in Science",
    institution: "Government Rajendra College",
    period: "Jan 2018 – Jan 2021",
    grade: "GPA: 5.00 / 5.00",
  },
];

// Navigation Links
export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "/projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
] as const;
