import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

// Dynamically import client-only overlays to reduce initial bundle size & avoid SSR hydration mismatch
const CommandPalette = dynamic(() => import("@/components/CommandPalette"), {
  ssr: false,
});
const FloatingSocialDock = dynamic(
  () => import("@/components/FloatingSocialDock"),
  {
    ssr: false,
  }
);
const CustomCursorGlow = dynamic(
  () => import("@/components/CustomCursorGlow"),
  {
    ssr: false,
  }
);

/**
 * Main Portfolio Page (Server Component)
 * Styled with Cyber Indigo & Violet Palette (#2)
 */
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden pt-16 md:pt-20 relative">
      {/* CSS-only Aurora Mesh Background */}
      <div className="aurora-mesh" aria-hidden="true" />

      {/* Interactive Custom Cursor & Spotlight Glow */}
      <CustomCursorGlow />

      {/* Navigation Bar */}
      <Navbar />

      {/* Command Palette (Dynamic Client Overlay) */}
      <CommandPalette />

      {/* Floating Social Dock (Dynamic Client Overlay) */}
      <FloatingSocialDock />

      {/* Hero Section */}
      <Hero />

      {/* Stats / Key Metrics Strip */}
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
