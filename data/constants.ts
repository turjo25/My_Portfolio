import { Project, SkillCategory, Education, ContactInfo } from "@/types";

// Personal Information
export const PERSONAL_INFO = {
  name: "MD. SHARDUL RAHMAN TURJO",
  role: "Software Engineering Student | Full-Stack Developer",
  tagline: "Problem solver with 1000+ coding challenges solved. Building modern web applications with Django & React.",
} as const;

// Contact Information
export const CONTACT_INFO: ContactInfo = {
  email: "mdshardulrahmanturjoofficial@gmail.com",
  phone: "+8801881566366",
  location: "North Alipur, Faridpur",
  linkedin: "https://www.linkedin.com/in/md-shardul-rahman-turjo-844a2a2a7/",
  github: "https://github.com/turjo25",
};

// About Section Content
export const ABOUT_TEXT =
  "Software Engineering student with strong problem-solving abilities (1000+ coding problems solved) and hands-on experience in full-stack development using Django...";

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
    title: "To-Do Web App",
    description:
      "A full-featured to-do application built with Django backend and SQLite database. Features user authentication, task management, and a clean, responsive UI.",
    techStack: ["Django", "SQLite", "HTML", "CSS"],
    githubLink: "https://github.com/turjo25/To-Do_Web_App_with_Django.git",
    liveLink: "https://todo-web-app-kg5f.onrender.com",
  },
  {
    title: "Online Library",
    description:
      "A digital library management system built with Django. Allows users to browse, search, and manage books with an intuitive interface.",
    techStack: ["Django", "SQLite", "HTML", "CSS"],
    githubLink: "https://github.com/turjo25/Online_Library_Django.git",
  },
  {
    title: "Shopping Cart",
    description:
      "An e-commerce shopping cart application with full CRUD functionality. Built with PHP and MySQL, featuring product management and cart operations.",
    techStack: ["PHP", "MySQL", "HTML", "CSS"],
    githubLink: "https://github.com/turjo25/ShoppingCart_PHP-CRUD.git",
  },
];

// Education Data
export const EDUCATION: Education[] = [
  {
    degree: "B.Sc. in Software Engineering",
    institution: "Daffodil International University",
    period: "Jan 2023 – Present",
    grade: "CGPA: 3.85 / 4.00",
  },
  {
    degree: "HSC in Science",
    institution: "Faridpur Zilla School",
    period: "Jan 2018 – Jan 2021",
    grade: "GPA: 5.00 / 5.00",
  },
];

// Navigation Links
export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
] as const;



