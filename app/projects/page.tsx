import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/data/constants";

export const metadata = {
  title: "Projects | MD. SHARDUL RAHMAN TURJO",
  description: "Browse all web development projects, full-stack web apps, APIs, and open-source contributions built by Shardul Rahman Turjo.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden pt-20 md:pt-24 pb-16 flex flex-col bg-[#08090d] relative">
      {/* CSS-only Aurora Mesh Background */}
      <div className="aurora-mesh" aria-hidden="true" />

      {/* Navigation Bar */}
      <Navbar />

      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 md:mt-10 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 px-3 py-1.5 rounded-lg hover:bg-white/5"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300 text-red-400" />
            <span className="font-medium text-sm">Back to Home</span>
          </Link>
        </div>

        {/* Page Title */}
        <div className="mb-12 md:mb-16">
          <p className="text-red-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">
            Selected Works
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="text-gradient-primary">All Projects</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
            A showcase of production-ready full-stack applications, REST APIs, competitive programming projects, and open-source tools.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
