"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Home, User, Code, Briefcase, GraduationCap, Mail, X } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO } from "@/data/constants";
import { cn } from "@/lib/utils";

interface Command {
  id: string;
  name: string;
  href: string;
  icon: React.ReactNode;
  category: string;
}

/**
 * Command Palette Component
 * Cmd+K style navigation for quick access to sections
 */
export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Build command list
  const commands: Command[] = [
    ...NAV_LINKS.map((link) => ({
      id: link.href,
      name: link.name,
      href: link.href,
      icon: getIconForSection(link.href),
      category: "Navigation",
    })),
    {
      id: "email",
      name: `Email: ${CONTACT_INFO.email}`,
      href: `mailto:${CONTACT_INFO.email}`,
      icon: <Mail size={18} />,
      category: "Contact",
    },
    {
      id: "linkedin",
      name: "LinkedIn Profile",
      href: CONTACT_INFO.linkedin || "#",
      icon: <User size={18} />,
      category: "Social",
    },
    {
      id: "github",
      name: "GitHub Profile",
      href: CONTACT_INFO.github || "#",
      icon: <Code size={18} />,
      category: "Social",
    },
  ];

  // Filter commands based on search
  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cmd.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open command palette with Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }

      // Close with Escape
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        setSearchQuery("");
        setSelectedIndex(0);
      }

      // Navigate with arrow keys
      if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) => 
            prev < filteredCommands.length - 1 ? prev + 1 : 0
          );
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) => 
            prev > 0 ? prev - 1 : filteredCommands.length - 1
          );
        }
        if (e.key === "Enter" && filteredCommands[selectedIndex]) {
          handleCommandSelect(filteredCommands[selectedIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands]);

  // Reset selected index when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  const handleCommandSelect = (command: Command) => {
    if (command.href.startsWith("#")) {
      const element = document.querySelector(command.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (command.href.startsWith("mailto:") || command.href.startsWith("http")) {
      window.open(command.href, "_blank");
    }
    setIsOpen(false);
    setSearchQuery("");
    setSelectedIndex(0);
  };

  // Group commands by category
  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) {
      acc[cmd.category] = [];
    }
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<string, Command[]>);

  return (
    <>
      {/* Command Palette Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              onClick={() => setIsOpen(false)}
            />

            {/* Command Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl mx-4 z-[101]"
            >
              <div className="glass-strong rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                {/* Search Input */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                  <Search size={20} className="text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Type to search or navigate..."
                    className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-lg"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X size={18} className="text-gray-400" />
                  </button>
                </div>

                {/* Commands List */}
                <div className="max-h-96 overflow-y-auto">
                  {filteredCommands.length === 0 ? (
                    <div className="px-4 py-8 text-center text-gray-400">
                      No results found
                    </div>
                  ) : (
                    Object.entries(groupedCommands).map(([category, cmds]) => (
                      <div key={category} className="py-2">
                        <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          {category}
                        </div>
                        {cmds.map((command, index) => {
                          const globalIndex = filteredCommands.findIndex((c) => c.id === command.id);
                          return (
                            <motion.button
                              key={command.id}
                              onClick={() => handleCommandSelect(command)}
                              className={cn(
                                "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors",
                                globalIndex === selectedIndex
                                  ? "bg-blue-500/20 text-white"
                                  : "text-gray-300 hover:bg-white/5"
                              )}
                              whileHover={{ x: 4 }}
                              transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                              <div className={cn(
                                "p-2 rounded-lg",
                                globalIndex === selectedIndex
                                  ? "bg-blue-500/30"
                                  : "bg-white/5"
                              )}>
                                {command.icon}
                              </div>
                              <span className="flex-1 font-medium">{command.name}</span>
                              <ArrowRight
                                size={16}
                                className={cn(
                                  "text-gray-400",
                                  globalIndex === selectedIndex && "text-blue-400"
                                )}
                              />
                            </motion.button>
                          );
                        })}
                      </div>
                    ))
                  )}
                </div>

                {/* Footer */}
                <div className="px-4 py-2 border-t border-white/10 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs">↑↓</kbd>
                      Navigate
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs">↵</kbd>
                      Select
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs">Esc</kbd>
                      Close
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


    </>
  );
}

// Helper function to get icon for section
function getIconForSection(href: string) {
  const iconMap: Record<string, React.ReactNode> = {
    "#home": <Home size={18} />,
    "#about": <User size={18} />,
    "#skills": <Code size={18} />,
    "#projects": <Briefcase size={18} />,
    "#education": <GraduationCap size={18} />,
    "#contact": <Mail size={18} />,
  };
  return iconMap[href] || <ArrowRight size={18} />;
}

