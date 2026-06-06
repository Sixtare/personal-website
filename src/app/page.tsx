import Image from "next/image";
import AnimatedTitle from "../components/AnimatedTitle";
import AnimatedSection from "../components/AnimatedSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start py-20 px-4 md:px-0 w-full">
      <main className="w-full max-w-5xl mx-auto space-y-12 mb-32" data-purpose="portfolio-container">
        <AnimatedSection as="header" className="flex flex-col items-center text-center space-y-6 mb-16" dataPurpose="profile-section" direction="top" delay={0}>
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-accent-gray shadow-xl">
            <img 
              alt="Avatar" 
              className="w-full h-full object-cover" 
              src="/picture.png" 
            />
          </div>
          <AnimatedTitle />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start px-4 md:px-4">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 space-y-16">
            <AnimatedSection className="flex flex-col md:flex-row gap-4" dataPurpose="about-section" direction="left" delay={200}>
              <div className="label-column">/about</div>
              <div className="flex-1 space-y-4 text-text-dim leading-relaxed">
                <p>Estudante de engenharia de software na UNIASSELVI, curioso e apaixonado por&nbsp;<span className="tag-pill bg-accent-gray">Tecnologia</span>&nbsp;,<span className="tag-pill bg-accent-gray">Jogos</span>&nbsp;e&nbsp;<span className="tag-pill bg-accent-gray">IA</span>&nbsp;.</p>
                <p>Com foco principal no desenvolvimento back-end e no ecossistema Java, gosto de projetar arquiteturas limpas e explorar a integração de APIs com bancos de dados.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="flex flex-col md:flex-row gap-4" dataPurpose="projects-section" direction="bottom" delay={600}>
              <div className="label-column">/projects</div>
              <div className="flex-1 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <a className="project-card block p-6 rounded-xl relative group" href="https://github.com/Sixtare/steam-stats">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono text-blue-400">Steam Profile Analytics</span>
                      <div className="p-1 rounded-md border border-white/10 group-hover:bg-white/10">
                        <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mt-2">Steam Stats</h3>
                  </a>
                   <a className="project-card block p-6 rounded-xl relative group" href="https://github.com/Sixtare/steam-family-bot">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono text-pink-400">Steam Helper Discord Bot</span>
                      <div className="p-1 rounded-md border border-white/10 group-hover:bg-white/10">
                        <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mt-2">Steam Family Bot</h3>
                  </a>
                  <a className="project-card block p-6 rounded-xl relative group" href="https://github.com/Sixtare/smw-65c816-asm">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono text-teal-400">65c816 Assembly Hacks for SMW</span>
                      <div className="p-1 rounded-md border border-white/10 group-hover:bg-white/10">
                        <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mt-2">Smw Assembly Hacks</h3>
                  </a>
                  <a className="project-card block p-6 rounded-xl relative group" href="https://github.com/Sixtare/ChibiChops">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono text-indigo-400">Video Splicing and Converter</span>
                      <div className="p-1 rounded-md border border-white/10 group-hover:bg-white/10">
                        <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mt-2">Chibi Chops</h3>
                  </a>
                </div>

                <div className="flex justify-center pt-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-accent-gray text-text-dim text-sm rounded-lg hover:text-white transition-colors border border-transparent hover:border-white/10">
                    Show more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 space-y-16 w-full px-4 md:px-4">
            <AnimatedSection className="flex flex-col gap-4" dataPurpose="habilidades-section" direction="right" delay={500}>
              <div className="label-column">/stack</div>
              <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold mb-3">
                    <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="skill-badge">React</span>
                    <span className="skill-badge">Next.js</span>
                    <span className="skill-badge">Tailwind CSS</span>
                    <span className="skill-badge">JavaScript</span>
                    <span className="skill-badge">TypeScript</span>
                  </div>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold mb-3">
                    <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="skill-badge">Java</span>
                    <span className="skill-badge">Spring Boot</span>
                    <span className="skill-badge">Python</span>
                    <span className="skill-badge">SQL Server</span>
                  </div>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold mb-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    DevOps &amp; Cloud
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="skill-badge">GCP</span>
                    <span className="skill-badge">Docker</span>
                    <span className="skill-badge">Linux</span>
                    <span className="skill-badge">Git</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="flex flex-col gap-4" dataPurpose="educacao-section" direction="right" delay={700}>
              <div className="label-column">/education</div>
              <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-white">Engenharia de Software</h4>
                  <p className="text-xs text-text-dim mt-1">Centro Universitário Leonardo da Vinci - UNIASSELVI</p>
                  <p className="text-[10px] text-zinc-600 mt-1 uppercase font-mono">01/2026 — Atual</p>
                </div>
                <div className="pt-4 border-t border-card-border">
                  <h4 className="text-sm font-bold text-white">Técnico em Eletromecânica</h4>
                  <p className="text-xs text-text-dim mt-1">Escola Técnica Estadual Santa Cruz </p>
                  <p className="text-[10px] text-zinc-600 mt-1 uppercase font-mono">01/2011 — 12/2013</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>


    </div>
  );
}
