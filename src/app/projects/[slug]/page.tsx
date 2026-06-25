"use client";

import { use, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "../../../data/projects";
import AnimatedSection from "../../../components/AnimatedSection";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  const [leftPosition, setLeftPosition] = useState<string>("1rem");

  // Dynamically calculate the left position of the back button to center it in the left margin
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        const calculated = (width - 1152) / 4 + 16;
        setLeftPosition(`${calculated}px`);
      } else {
        setLeftPosition("1rem");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set page title dynamically on the client side
  useEffect(() => {
    document.title = `${project.title} | Project Details`;
  }, [project.title]);

  // Render the custom mockups in the Hero area
  const renderHeroMockup = () => {
    if (project.imageUrl) {
      return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg shadow-2xl border border-white/5 transform group-hover:scale-[1.01] transition-transform duration-500"
          />
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#121214] text-[#e5e2e1] font-sans selection:bg-white selection:text-black">
      {/* Center Left Back Button */}
      <div
        className="fixed top-1/2 -translate-y-1/2 z-50 transition-[left] duration-300"
        style={{ left: leftPosition }}
      >
        <AnimatedSection
          direction="left"
          delay={100}
        >
          <Link
            href="/"
            className="group flex items-center justify-center w-12 h-12 rounded-full border border-card-border bg-dark-bg/80 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-card-bg shadow-lg"
            aria-label="Voltar para a página principal"
            title="Voltar para a página principal"
          >
            <span className="material-symbols-outlined text-text-dim group-hover:text-white transition-transform duration-300 group-hover:-translate-x-1 text-2xl">
              arrow_back
            </span>
          </Link>
        </AnimatedSection>
      </div>

      {/* Wide Hero Header for steam-stats */}
      {/* Hero Header (Unified size matching steam-stats) */}
      <AnimatedSection as="header" direction="top" delay={200} className="max-w-6xl mx-auto px-6 md:px-20 pt-24 mb-12 text-left">
        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
          /project overview
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-none">
          {project.title}
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl font-light mb-8 max-w-2xl">
          {project.subtitle}
        </p>
        <div className="relative group w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative bg-[#161616] border border-white/10 rounded-2xl overflow-hidden aspect-[21/8] w-full flex items-center justify-center p-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)]"></div>
            {renderHeroMockup()}
          </div>
        </div>
      </AnimatedSection>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 md:px-20 pt-8 pb-20">
        {/* Two-Column Overview */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-start">
          <AnimatedSection direction="left" delay={300} className="md:col-span-8 space-y-4">
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-2">/About the Project</p>
            <p className="text-xl text-white font-medium italic mb-4 leading-relaxed">
              {project.tagline}
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed text-pretty font-light">
              {project.longDescription}
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={500} className="md:col-span-4 space-y-8 bg-[#161616]/50 border border-white/5 rounded-xl p-6">
            <div>
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-3">/Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-[#1c1c1f] border border-white/5 rounded-md text-xs text-zinc-400 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t border-white/5 pt-4">
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-2">/Role</p>
              <p className="text-sm text-zinc-300 font-medium">{project.role}</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Features Bento-inspired Grid */}
        <section className="mb-16">
          <AnimatedSection direction="bottom" delay={400}>
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-8">/Features</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.features.map((feature, idx) => (
              <AnimatedSection
                key={feature.title}
                direction="bottom"
                delay={400 + (idx * 100)}
                className="bg-[#161616]/80 border border-white/5 hover:border-white/10 p-6 rounded-xl transition-all duration-300 text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#27272a]/30 border border-white/5 flex items-center justify-center mb-5 group-hover:border-white/20 transition-all">
                  <span className="material-symbols-outlined text-white text-xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </section>
        {/* Call to Action */}
        <AnimatedSection as="section" direction="bottom" delay={600} className="text-center py-12 border-t border-white/10">
          <h2 className="text-3xl md:text-4xl text-white mb-8 font-bold tracking-tight">
            Interessado no projeto?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {project.demoUrl ? (
              <>
                <a
                  className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors text-sm"
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar Site
                </a>
                <a
                  className="px-6 py-3 bg-transparent border border-white/10 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors text-sm"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repositório no Github
                </a>
              </>
            ) : (
              <a
                className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors text-sm"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repositório no Github
              </a>
            )}
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}
