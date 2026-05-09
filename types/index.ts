// Type definitions for the portfolio

export interface Project {
  title: string;
  shortDescription?: string;
  keyFeatures?: string[];
  technicalChallenges?: string[];
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  image?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
}




