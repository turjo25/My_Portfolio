import { Project, SkillCategory, Education, ContactInfo } from "@/types";

// Personal Information
export const PERSONAL_INFO = {
  name: "MD. SHARDUL RAHMAN TURJO",
  role: "Full-Stack Developer & Software Engineering Student",
  tagline: "Passionate about building scalable, real-world web applications. 500+ coding challenges solved across LeetCode, Codeforces & HackerRank.",
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
  "Software Engineering student at Daffodil International University (CGPA: 3.87/4.00) with a passion for building scalable, production-ready web applications. I have solved 500+ coding challenges across competitive programming platforms, sharpening my analytical thinking and problem-solving approach. Comfortable across the full stack — from Django REST APIs and Python backends to React frontends — I am driven by clean, maintainable code and real-world impact.";

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
    title: "Royal Shop",
    description:
      "E-Shop is a Django-based single-vendor e-commerce platform featuring product management, cart and order processing, and secure SSLCommerz payment integration. It includes user authentication (manual & Google OAuth), product reviews, email order notifications, and an admin dashboard for inventory and order control—built with Django, SQLite, and modern web technologies.",
    techStack: ["Django", "SQLite", "HTML", "CSS"],
    githubLink: "https://github.com/turjo25/Royal_Shop.git",
    liveLink: "https://royal-shop-uf36.onrender.com",
    image: "/projects/Royal_Eshop.png",
  },
  {
    title: "Farm2Market",
    description:
      "A web-based e-commerce platform that connects farmers directly with consumers, eliminating intermediaries and enabling fair pricing. The system supports product listing, cart and order management, user authentication, and an admin panel for monitoring inventory and transactions. It focuses on improving transparency, accessibility, and efficiency in agricultural product distribution.",
    techStack: ["Django","Supabase","PostgreSQL", "HTML", "Tailwind CSS"],
    githubLink: "https://github.com/turjo25/Farm2Market.git",
    liveLink: "https://farm2market-1ao7.onrender.com/",
    image: "/projects/Farm2Market.png",
  },
  {
    title: "GhoreRanna",
    description:
      "A web-based food ordering platform focused on homemade meals, allowing users to browse dishes, place orders, and manage their accounts. The system includes user authentication, product (meal) management, cart functionality, and order processing. An admin panel enables efficient control over menu items, orders, and users, providing a streamlined experience for both customers and administrators.",
    techStack: ["Django","Supabase","PostgreSQL", "HTML", "Tailwind CSS"],
    githubLink: "https://github.com/turjo25/GhoreRanna.git",
    liveLink: "https://ghoreranna.onrender.com/",
    image: "/projects/Ghoreranna.png",
  },
  {
    title: "To-Do Web App",
    description:
      "A full-featured to-do application built with Django backend and SQLite database. Features user authentication, task management, and a clean, responsive UI.",
    techStack: ["Django", "SQLite", "HTML", "CSS"],
    githubLink: "https://github.com/turjo25/To-Do_Web_App_with_Django.git",
    liveLink: "https://todo-web-app-kg5f.onrender.com",
    image: "/projects/ToDo.png",
  },
   {
    title: "AI Agent",
    description:
      "A Django-based AI shopping assistant that enables interactive customer conversations using the OpenRouter AI API, complete with session history and responsive UI.",
    techStack: ["Django", "Python", "HTML", "Tailwind CSS"],
    githubLink: "https://github.com/turjo25/AI_AGENT.git",
    liveLink: "https://aiagent-somp.onrender.com/",
    image: "/projects/AiAgent.png",
  },
  {
    title: "WeatherFlow",
    description:
      "WeatherFlow is a Django-based weather application that provides real-time weather information using external weather APIs. It allows users to search for cities and view current temperature, weather conditions, humidity, and wind details through a clean and responsive interface—built with Django, API integration, and modern web technologies.",
    techStack: ["React","Weather API", "HTML", "CSS"],
    githubLink: "https://github.com/turjo25/WeatherFlow.git",
    liveLink: "https://weather-flow-nine.vercel.app/",
    image: "/projects/WeatherFlow.png",
  },
  {
    title: "Online Library",
    description:
      "A digital library management system built with Django. Allows users to browse, search, and manage books with an intuitive interface.",
    techStack: ["Django", "SQLite", "HTML", "CSS"],
    githubLink: "https://github.com/turjo25/Online_Library_Django.git",
    image: "/projects/OnlineLibrary.png",
  },
  {
    title: "Shopping Cart",
    description:
      "An e-commerce shopping cart application with full CRUD functionality. Built with PHP and MySQL, featuring product management and cart operations.",
    techStack: ["PHP", "MySQL", "HTML", "CSS"],
    githubLink: "https://github.com/turjo25/ShoppingCart_PHP-CRUD.git",
    image: "/projects/ShoppingCart.png",
  },
  {
    title: "LearningHub",
    description:
      "LearningHub is a full-stack Learning Management System combining Django’s backend (REST APIs, authentication, role-based access) with a React-based frontend. It supports teacher workflows like course and assignment creation, and student workflows such as browsing courses, enrolling in lessons, and submitting assignments — demonstrating a complete ed-tech solution from database to UI.",
    techStack: ["Django", "Django REST Framework (DRF)","React","JWT / Session-based Authentication", "SQLite", "Tailwind CSS"],
    githubLink: "https://github.com/turjo25/LearningHub.git",
    // liveLink: "https://personal-portfolio-turjo25.vercel.app",
    image: "/projects/LearningHub.png",
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




