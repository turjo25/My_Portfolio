"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Github, ExternalLink, Star, AlignLeft, Zap, Code } from "lucide-react";
import Image from "next/image";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

type TabType = "overview" | "features" | "challenges";

export default function ProjectCard({ project, index, featured }: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: reduceMotion ? 0 : index * 0.08,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={reduceMotion ? {} : { y: -5 }}
      className="group bento-card rounded-3xl border border-white/8 hover:border-red-500/35 transition-all duration-300 flex flex-col relative overflow-hidden h-full shadow-xl"
    >
      {/* Dynamic Cursor Spotlight Beam */}
      {isHovered && !reduceMotion && (
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-100 transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(239, 68, 68, 0.15), transparent 80%)`,
          }}
        />
      )}

      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 z-20 backdrop-blur-md">
          <Star size={12} className="text-amber-400 fill-amber-400" />
          <span className="text-amber-300 text-[10px] font-bold uppercase tracking-wider">
            Featured
          </span>
        </div>
      )}

      {/* Optimized Next/Image Screenshot Container */}
      {project.image && (
        <div className="relative w-full aspect-[16/9] overflow-hidden z-10 shrink-0 bg-[#0a0d14]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading={index < 2 ? "eager" : "lazy"}
            priority={index < 2}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          {/* Subtle bottom fade mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-transparent opacity-90 pointer-events-none z-20" />
        </div>
      )}

      {/* Card Content */}
      <div className="flex flex-col flex-grow p-6 sm:p-7 relative z-10 bg-[#0a0d14]/90">
        
        {/* Title */}
        <h3 className="text-2xl font-extrabold text-white font-heading mb-4 tracking-tight group-hover:text-red-400 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Tab Navigation (Overview / Features / Challenges) */}
        <div className="flex items-center gap-2 mb-4 border-b border-white/8 pb-3 overflow-x-auto">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 whitespace-nowrap ${
              activeTab === "overview"
                ? "bg-red-500/20 text-red-400 border border-red-500/35"
                : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
            }`}
          >
            <AlignLeft size={13} />
            <span>Overview</span>
          </button>

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <button
              onClick={() => setActiveTab("features")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                activeTab === "features"
                  ? "bg-red-500/20 text-red-400 border border-red-500/35"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
              }`}
            >
              <Zap size={13} />
              <span>Features</span>
            </button>
          )}

          {project.technicalChallenges && project.technicalChallenges.length > 0 && (
            <button
              onClick={() => setActiveTab("challenges")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                activeTab === "challenges"
                  ? "bg-red-500/20 text-red-400 border border-red-500/35"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
              }`}
            >
              <Code size={13} />
              <span>Challenges</span>
            </button>
          )}
        </div>

        {/* Tab Content with GPU-cheap opacity transition */}
        <div className="min-h-[80px] mb-6 flex flex-col justify-start">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && (
              <motion.p
                key="overview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="text-gray-300 text-sm leading-relaxed"
              >
                {project.shortDescription}
              </motion.p>
            )}

            {activeTab === "features" && (
              <motion.ul
                key="features"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="space-y-2"
              >
                {project.keyFeatures?.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-300 leading-snug">
                    <Zap size={13} className="text-red-400 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </motion.ul>
            )}

            {activeTab === "challenges" && (
              <motion.ul
                key="challenges"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="space-y-2"
              >
                {project.technicalChallenges?.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-300 leading-snug">
                    <Code size={13} className="text-red-400 mt-0.5 shrink-0" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-white/5 border border-white/10 text-gray-300"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 text-[11px] font-bold text-red-400">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons (Live Demo & Source Code) */}
        <div className={`grid ${project.liveLink ? "grid-cols-2" : "grid-cols-1"} gap-3 mt-auto`}>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-red-600/15 hover:bg-red-600 border border-red-500/30 hover:border-red-500 text-red-300 hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-wider group/btn shadow-md hover:shadow-red-600/30"
            >
              <ExternalLink size={15} className="group-hover/btn:scale-110 transition-transform" />
              <span>Live Demo</span>
            </a>
          )}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-xl glass hover:bg-white/10 border border-white/10 hover:border-white/25 text-gray-300 hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-wider group/btn"
          >
            <Github size={15} className="group-hover/btn:scale-110 transition-transform text-gray-400 group-hover/btn:text-white" />
            <span>Source</span>
          </a>
        </div>

      </div>
    </motion.div>
  );
}
