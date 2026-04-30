"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/constants";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";

/**
 * Projects Section Component
 * Display project cards in a grid layout
 */
export default function Projects() {
  // Enhanced container variants with staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <SectionWrapper id="projects">
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 md:mb-20 text-center tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="text-gradient-primary">
          Projects
        </span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px", amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7"
      >
        {PROJECTS.slice(0, 3).map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>

      {/* Show All Projects Button */}
      <motion.div
        className="flex justify-center mt-12 md:mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Link href="/projects">
          <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 glass hover:bg-white/10 border border-white/10 hover:border-red-500/50 rounded-full transition-all duration-300 overflow-hidden">
            {/* Button Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <span className="relative z-10 text-gray-200 group-hover:text-white font-semibold tracking-wide">
              Show All Projects
            </span>
            <ArrowRight className="relative z-10 w-5 h-5 text-gray-400 group-hover:text-red-400 group-hover:translate-x-1 transition-all duration-300" />
          </button>
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}

