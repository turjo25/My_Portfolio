"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import FloatingSocialDock from "@/components/FloatingSocialDock";

/**
 * Main Portfolio Page
 * Combines all sections into a single-page application
 */
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden pt-16 md:pt-20">
      {/* Navigation Bar */}
      <Navbar />

      {/* Command Palette */}
      <CommandPalette />

      {/* Floating Social Dock */}
      <FloatingSocialDock />

      {/* Hero Section */}
      <Hero />

      {/* Stats / Achievements Strip */}
      <Stats />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Education Section */}
      <Education />

      {/* Footer/Contact Section */}
      <Footer />
    </main>
  );
}
