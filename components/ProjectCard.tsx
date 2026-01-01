"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

/**
 * ProjectCard Component
 * Individual project card with links and tech stack
 */
export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Enhanced card variants with scale and rotation
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      rotateY: -10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
  };

  // Internal elements container
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Internal item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group glass rounded-2xl p-7 hover:bg-white/10 transition-all duration-500 flex flex-col relative overflow-hidden"
      whileHover={{ scale: 1.04, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Gradient accent on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
      />
      
      <motion.div
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col h-full relative z-10"
      >
        {/* Project Title */}
        <motion.h3
          variants={itemVariants}
          className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 tracking-tight"
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-base leading-relaxed mb-6 flex-grow font-light"
        >
          {project.description}
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          variants={contentVariants}
          className="flex flex-wrap gap-2.5 mb-6"
        >
          {project.techStack.map((tech, techIndex) => (
            <motion.span
              key={tech}
              variants={itemVariants}
              className="px-3 py-1.5 text-xs font-medium bg-gradient-to-br from-purple-500/20 to-purple-600/20 text-purple-300 rounded-full border border-purple-500/30 backdrop-blur-sm"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Links */}
        <motion.div
          variants={contentVariants}
          className="flex gap-5 pt-5 border-t border-white/10"
        >
          <motion.a
            variants={itemVariants}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Github size={19} />
            GitHub
          </motion.a>
          {project.liveLink && (
            <motion.a
              variants={itemVariants}
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ExternalLink size={19} />
              Live Demo
            </motion.a>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

