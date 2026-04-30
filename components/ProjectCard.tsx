"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

const TECH_COLORS: Record<string, string> = {
  "Django":       "text-emerald-300 bg-emerald-500/10 border-emerald-500/25",
  "React":        "text-cyan-300 bg-cyan-500/10 border-cyan-500/25",
  "Python":       "text-yellow-300 bg-yellow-500/10 border-yellow-500/25",
  "JavaScript":   "text-amber-300 bg-amber-500/10 border-amber-500/25",
  "PHP":          "text-indigo-300 bg-indigo-500/10 border-indigo-500/25",
  "PostgreSQL":   "text-blue-300 bg-blue-500/10 border-blue-500/25",
  "SQLite":       "text-sky-300 bg-sky-500/10 border-sky-500/25",
  "MySQL":        "text-teal-300 bg-teal-500/10 border-teal-500/25",
  "HTML":         "text-rose-300 bg-rose-500/10 border-rose-500/25",
  "CSS":          "text-sky-300 bg-sky-500/10 border-sky-500/25",
  "Tailwind CSS": "text-cyan-400 bg-cyan-500/10 border-cyan-500/25",
  "Weather API":  "text-blue-300 bg-blue-500/10 border-blue-500/25",
  "JWT / Session-based Authentication": "text-violet-300 bg-violet-500/10 border-violet-500/25",
  "Django REST Framework (DRF)": "text-emerald-300 bg-emerald-500/10 border-emerald-500/25",
};
const DEFAULT_TECH = "text-gray-300 bg-white/5 border-white/12";

export default function ProjectCard({ project, index, featured }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.92 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group glass rounded-2xl border border-white/8 hover:border-white/15 transition-all duration-400 flex flex-col relative overflow-hidden h-full"
      whileHover={{ scale: 1.025, y: -7 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {/* Top border highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-20" />

      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 z-20 backdrop-blur-md">
          <Star size={11} className="text-amber-400 fill-amber-400" />
          <span className="text-amber-300 text-[10px] font-bold uppercase tracking-wider">Featured</span>
        </div>
      )}

      {/* Project Image (Edge to Edge) */}
      {project.image && (
        <div className="relative w-full h-56 sm:h-64 overflow-hidden z-10 shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle bottom fade for the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-90" />
        </div>
      )}

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6 md:p-7 relative z-10 bg-[#0a0a1a]/40">
        
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 italic font-light flex-grow">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1.5 text-[11px] md:text-xs font-semibold rounded-lg border backdrop-blur-sm ${TECH_COLORS[tech] ?? DEFAULT_TECH}`}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1.5 text-[12px] font-bold text-cyan-400 ml-1">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className={`grid ${project.liveLink ? "grid-cols-2" : "grid-cols-1"} gap-3 mt-auto`}>
          {project.liveLink && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl border border-white/10 glass hover:bg-white/10 hover:border-red-500/30 transition-all duration-300 text-gray-300 hover:text-white group/btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink size={18} className="group-hover/btn:text-red-400 transition-colors" />
              <span className="text-xs font-bold tracking-widest uppercase">Live Demo</span>
            </motion.a>
          )}
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 rounded-xl border border-white/10 glass hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 text-gray-300 hover:text-white group/btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={18} className="group-hover/btn:text-orange-400 transition-colors" />
            <span className="text-xs font-bold tracking-widest uppercase">Source</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
