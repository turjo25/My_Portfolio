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

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        setSearchQuery("");
        setSelectedIndex(0);
      }

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

  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) {
      acc[cmd.category] = [];
    }
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<string, Command[]>);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-xl px-4 z-[101]"
          >
            <div className="glass-strong rounded-3xl shadow-2xl border border-indigo-500/25 overflow-hidden bg-[#0b0c10]">
              {/* Search Bar */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-indigo-500/20">
                <Search size={18} className="text-indigo-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search commands or sections... (Esc to close)"
                  className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-base font-medium"
                  autoFocus
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-indigo-500/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Commands List */}
              <div className="max-h-80 overflow-y-auto p-2">
                {filteredCommands.length === 0 ? (
                  <div className="px-4 py-8 text-center text-gray-500 text-sm">
                    No results found
                  </div>
                ) : (
                  Object.entries(groupedCommands).map(([category, cmds]) => (
                    <div key={category} className="mb-2">
                      <div className="px-3 py-1.5 text-[10px] font-bold text-indigo-300/70 uppercase tracking-widest">
                        {category}
                      </div>
                      {cmds.map((command) => {
                        const globalIndex = filteredCommands.findIndex((c) => c.id === command.id);
                        const isSelected = globalIndex === selectedIndex;
                        return (
                          <button
                            key={command.id}
                            onClick={() => handleCommandSelect(command)}
                            className={cn(
                              "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-colors text-sm font-medium",
                              isSelected
                                ? "bg-indigo-500/20 text-white border border-indigo-500/40 shadow-sm shadow-indigo-500/10"
                                : "text-gray-300 hover:bg-indigo-500/10"
                            )}
                          >
                            <div className={cn("p-1.5 rounded-lg", isSelected ? "text-indigo-400" : "text-gray-400")}>
                              {command.icon}
                            </div>
                            <span className="flex-1 truncate">{command.name}</span>
                            <ArrowRight size={14} className={cn("text-gray-500", isSelected && "text-indigo-400")} />
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer navigation guide */}
              <div className="px-4 py-2.5 border-t border-indigo-500/20 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded text-[10px] text-indigo-300">↑↓</kbd> Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded text-[10px] text-indigo-300">↵</kbd> Select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded text-[10px] text-indigo-300">Esc</kbd> Close
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function getIconForSection(href: string) {
  const iconMap: Record<string, React.ReactNode> = {
    "#home": <Home size={16} />,
    "#about": <User size={16} />,
    "#skills": <Code size={16} />,
    "#projects": <Briefcase size={16} />,
    "#education": <GraduationCap size={16} />,
    "#contact": <Mail size={16} />,
  };
  return iconMap[href] || <ArrowRight size={16} />;
}
