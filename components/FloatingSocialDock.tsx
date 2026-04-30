"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, Mail, Phone, MapPin, ChevronUp, X } from "lucide-react";
import { CONTACT_INFO } from "@/data/constants";

interface SocialLink {
  id: string;
  icon: React.ReactNode;
  href: string;
  label: string;
  color: string;
  hoverColor: string;
}

/**
 * Floating Social Dock Component
 * Modern floating social media and contact links dock
 */
export default function FloatingSocialDock() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const socialLinks: SocialLink[] = [
    {
      id: "linkedin",
      icon: <Linkedin size={22} />,
      href: CONTACT_INFO.linkedin || "#",
      label: "LinkedIn",
      color: "text-red-400",
      hoverColor: "hover:bg-red-500/20",
    },
    {
      id: "github",
      icon: <Github size={22} />,
      href: CONTACT_INFO.github || "#",
      label: "GitHub",
      color: "text-gray-300",
      hoverColor: "hover:bg-gray-500/20",
    },
    {
      id: "email",
      icon: <Mail size={22} />,
      href: `mailto:${CONTACT_INFO.email}`,
      label: "Email",
      color: "text-purple-400",
      hoverColor: "hover:bg-purple-500/20",
    },
    {
      id: "phone",
      icon: <Phone size={22} />,
      href: `tel:${CONTACT_INFO.phone}`,
      label: "Phone",
      color: "text-green-400",
      hoverColor: "hover:bg-green-500/20",
    },
    {
      id: "location",
      icon: <MapPin size={22} />,
      href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.location)}`,
      label: "Location",
      color: "text-red-400",
      hoverColor: "hover:bg-red-500/20",
    },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) {
      window.open(href, "_blank");
    }
  };

  return (
    <div className="fixed left-6 bottom-24 md:left-8 md:bottom-32 z-40 flex flex-col-reverse items-center gap-3">
      {/* Social Links */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
            className="flex flex-col gap-3"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                onMouseEnter={() => setHoveredId(link.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                  glass rounded-full p-4 shadow-lg backdrop-blur-md border border-white/10
                  transition-all duration-300 relative group
                  ${link.hoverColor}
                  ${hoveredId === link.id ? "scale-110 shadow-xl" : ""}
                `}
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: 0,
                  transition: {
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0, 
                  x: -20,
                  transition: { delay: index * 0.05 }
                }}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={link.color}>{link.icon}</div>
                
                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredId === link.id && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="absolute left-full ml-3 top-1/2 -translate-y-1/2 glass rounded-lg px-3 py-1.5 whitespace-nowrap pointer-events-none"
                    >
                      <span className="text-white text-sm font-medium">{link.label}</span>
                      <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 border-r-white/20" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          glass rounded-full p-4 shadow-lg backdrop-blur-md border border-white/10
          transition-all duration-300 relative overflow-hidden
          ${isExpanded ? "bg-red-500/20 hover:bg-red-500/30" : "hover:bg-white/10"}
        `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={isExpanded ? "Close Social Links" : "Open Social Links"}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {isExpanded ? (
            <X size={22} className="text-white" />
          ) : (
            <ChevronUp size={22} className="text-white" />
          )}
        </motion.div>

        {/* Pulse effect when closed */}
        {!isExpanded && (
          <motion.div
            className="absolute inset-0 rounded-full bg-red-500/20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.button>

      {/* Badge showing number of links */}
      {!isExpanded && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs font-bold shadow-lg"
        >
          {socialLinks.length}
        </motion.div>
      )}
    </div>
  );
}

