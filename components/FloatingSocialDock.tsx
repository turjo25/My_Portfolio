"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Linkedin, Github, Mail, Phone, MapPin, ChevronUp, X } from "lucide-react";
import { CONTACT_INFO } from "@/data/constants";

interface SocialLink {
  id: string;
  icon: React.ReactNode;
  href: string;
  label: string;
}

export default function FloatingSocialDock() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const socialLinks: SocialLink[] = [
    {
      id: "linkedin",
      icon: <Linkedin size={20} />,
      href: CONTACT_INFO.linkedin || "#",
      label: "LinkedIn",
    },
    {
      id: "github",
      icon: <Github size={20} />,
      href: CONTACT_INFO.github || "#",
      label: "GitHub",
    },
    {
      id: "email",
      icon: <Mail size={20} />,
      href: `mailto:${CONTACT_INFO.email}`,
      label: "Email",
    },
    {
      id: "phone",
      icon: <Phone size={20} />,
      href: `tel:${CONTACT_INFO.phone}`,
      label: "Phone",
    },
    {
      id: "location",
      icon: <MapPin size={20} />,
      href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.location)}`,
      label: "Location",
    },
  ];

  return (
    <div className="fixed left-5 bottom-6 md:left-8 md:bottom-10 z-40 flex flex-col-reverse items-center gap-3">
      {/* Expanded Links */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex flex-col gap-2.5"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredId(link.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="glass rounded-full p-3.5 shadow-lg border border-indigo-500/20 hover:border-indigo-500/50 hover:bg-indigo-500/20 text-gray-300 hover:text-white transition-all duration-200 relative group flex items-center justify-center"
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: reduceMotion ? 0 : index * 0.04 }}
                whileHover={reduceMotion ? {} : { scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <div>{link.icon}</div>

                {/* Hover Tooltip */}
                {hoveredId === link.id && (
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    className="absolute left-full ml-3 top-1/2 -translate-y-1/2 glass rounded-lg px-3 py-1 text-white text-xs font-semibold whitespace-nowrap pointer-events-none border border-indigo-500/30"
                  >
                    {link.label}
                  </motion.div>
                )}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`glass rounded-full p-3.5 shadow-xl border transition-all duration-300 relative ${
          isExpanded
            ? "bg-indigo-600 border-indigo-500 text-white shadow-indigo-600/35"
            : "border-indigo-500/25 hover:bg-indigo-500/20 hover:border-indigo-500/50 text-indigo-300 hover:text-white"
        }`}
        whileHover={reduceMotion ? {} : { scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isExpanded ? "Close Social Links" : "Open Social Links"}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isExpanded ? <X size={20} /> : <ChevronUp size={20} />}
        </motion.div>
      </motion.button>
    </div>
  );
}
