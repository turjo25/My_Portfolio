"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PROJECTS } from "@/data/constants";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";

/**
 * Projects Section Component
 * Displays top featured projects in an award-winning grid format
 */
export default function Projects() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : {
            staggerChildren: 0.12,
            delayChildren: 0.1,
          },
    },
  };

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-red-400 text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center justify-center gap-1.5">
            <Sparkles size={14} />
            Featured Work
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading">
            <span className="text-gradient-primary">Selected Projects</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Real-world applications showcasing clean architecture, full-stack development, and modern user experiences.
          </p>
        </div>

        {/* Featured 3 Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {PROJECTS.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              featured={index === 0}
            />
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-14">
          <Link href="/projects" className="group">
            <button className="relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600/10 hover:bg-red-600 border border-red-500/30 hover:border-red-500 rounded-full text-red-300 hover:text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-red-600/15 hover:shadow-red-600/35">
              <span>View All Projects ({PROJECTS.length})</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
