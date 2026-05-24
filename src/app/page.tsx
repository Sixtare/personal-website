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
              alt="Ewajis Avatar" 
              className="w-full h-full object-cover" 
              src="/picture.png" 
            />
          </div>
          <AnimatedTitle />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 space-y-16">
            <AnimatedSection className="flex flex-col md:flex-row gap-4" dataPurpose="about-section" direction="left" delay={200}>
              <div className="label-column">/about</div>
              <div className="flex-1 space-y-4 text-text-dim leading-relaxed">
                <p>Olá, me chamo Matheus e estou cursando engenharia de software.</p>
                <p>Curioso e apaixonado por&nbsp;<span className="tag-pill bg-accent-gray">Tecnologia</span>&nbsp;,<span className="tag-pill bg-accent-gray">Jogos</span>&nbsp;e&nbsp;<span className="tag-pill bg-accent-gray">IA</span>&nbsp;.</p>
                <p>Com foco principal no desenvolvimento back-end e no ecossistema Java, gosto de projetar arquiteturas limpas e explorar a integração de APIs com bancos de dados. Além disso, sou um entusiasta do ecossistema Linux, onde encontro a liberdade e o controle ideais para customizar e otimizar meu ambiente de desenvolvimento.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="flex flex-col md:flex-row gap-4" dataPurpose="projects-section" direction="bottom" delay={600}>
              <div className="label-column">/projects</div>
              <div className="flex-1 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a className="project-card block p-6 rounded-xl relative group" href="#">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono text-indigo-400">Video Splicing and Converter</span>
                      <div className="p-1 rounded-md border border-white/10 group-hover:bg-white/10">
                        <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mt-2">Chibi Chops</h3>
                  </a>
                  
                  <a className="project-card block p-6 rounded-xl relative group" href="#">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono text-pink-400">Steam Helper Discord Bot</span>
                      <div className="p-1 rounded-md border border-white/10 group-hover:bg-white/10">
                        <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mt-2">Steam Family Bot</h3>
                  </a>

                  <a className="project-card block p-6 rounded-xl relative group" href="#">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono text-teal-400">Mais projetos felizes</span>
                      <div className="p-1 rounded-md border border-white/10 group-hover:bg-white/10">
                        <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mt-2">Projeto Feliz</h3>
                  </a>

                  <a className="project-card block p-6 rounded-xl relative group" href="#">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono text-blue-400">Alguma coisa de IA</span>
                      <div className="p-1 rounded-md border border-white/10 group-hover:bg-white/10">
                        <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mt-2">Amo IA me contrate</h3>
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
          <div className="lg:col-span-5 space-y-16">
            <AnimatedSection className="flex flex-col gap-4" dataPurpose="habilidades-section" direction="right" delay={500}>
              <div className="label-column">/habilidades</div>
              <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold mb-3">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
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
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="skill-badge">Java</span>
                    <span className="skill-badge">Spring Boot</span>
                    <span className="skill-badge">Python</span>
                    <span className="skill-badge">Node.js</span>
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
              <div className="label-column">/educação</div>
              <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-white">Engenharia de Software</h4>
                  <p className="text-xs text-text-dim mt-1">Instituto Nacional de Telecomunicações - Inatel</p>
                  <p className="text-[10px] text-zinc-600 mt-1 uppercase font-mono">01/2021 — Atual</p>
                </div>
                <div className="pt-4 border-t border-card-border">
                  <h4 className="text-sm font-bold text-white">Técnico em Telecomunicações</h4>
                  <p className="text-xs text-text-dim mt-1">Escola Técnica de Eletrônica Francisco Moreira da Costa</p>
                  <p className="text-[10px] text-zinc-600 mt-1 uppercase font-mono">01/2018 — 12/2020</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-1 p-2 rounded-2xl nav-blur shadow-2xl z-50" data-purpose="floating-nav">
        <a className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 text-white hover:bg-white/10 transition-all" href="#">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
        </a>
        <div className="w-px h-6 bg-white/10 mx-1"></div>
        <a className="w-12 h-12 flex items-center justify-center rounded-xl text-text-dim hover:bg-white/5 hover:text-white transition-all" href="#">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
        </a>
        <a className="w-12 h-12 flex items-center justify-center rounded-xl text-text-dim hover:bg-white/5 hover:text-white transition-all" href="#">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
        </a>
        <a className="w-12 h-12 flex items-center justify-center rounded-xl text-text-dim hover:bg-white/5 hover:text-white transition-all" href="#">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
        </a>
        <div className="w-px h-6 bg-white/10 mx-1"></div>
        <button className="w-12 h-12 flex items-center justify-center rounded-xl text-text-dim hover:bg-white/5 hover:text-white transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
        </button>
      </nav>
    </div>
  );
}
