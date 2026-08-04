"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/**
 * SectionWrapper Component
 * Reusable section wrapper with subtle transform/opacity reveal animations,
 * strictly compliant with prefers-reduced-motion.
 */
export default function SectionWrapper({
  id,
  children,
  className,
}: SectionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      className={cn("py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative", className)}
    >
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}
