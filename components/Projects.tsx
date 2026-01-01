"use client";

import { motion } from "framer-motion";
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
        <span className="text-gradient-blue">
          Projects
        </span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px", amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

