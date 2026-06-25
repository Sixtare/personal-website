"use client";

import { use, useEffect } from "react";
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
            className="max-h-full max-w-full object-contain rounded-lg shadow-2xl border border-white/5 transform group-hover:scale-[1.01] transition-transform duration-500"
          />
        </div>
      );
    }

    switch (project.heroType) {
      case "steam-family-bot":
        return (
          <div className="relative z-10 w-full max-w-md bg-[#1e1f22] rounded-lg shadow-2xl border border-[#2b2d31] p-6 transform group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[#1e1f22]" style={{ fontVariationSettings: "'FILL' 1" }}>robot_2</span>
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-white text-sm font-sans">Steam Family Bot</span>
                  <span className="bg-[#5865f2] text-[10px] px-1.5 py-0.5 rounded text-white font-bold font-sans">BOT</span>
                  <span className="text-[#949ba4] text-xs font-sans">Today at 2:45 PM</span>
                </div>
                <div className="bg-[#2b2d31] border-l-4 border-white p-4 rounded-md">
                  <p className="text-[#dbdee1] text-sm font-medium mb-1 font-sans">New Library Addition!</p>
                  <p className="text-white text-base font-sans">Matheus just bought <span className="text-white font-bold underline">Elden Ring</span>!</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "steam-stats":
        return (
          <div className="absolute inset-0 z-10 bg-[#0b0c0e] text-left flex flex-row font-mono text-[9px] md:text-[10px] select-none">
            {/* Miniature Sidebar */}
            <div className="w-[90px] md:w-[110px] bg-[#070809] border-r border-white/10 p-3 flex flex-col justify-between shrink-0">
              <div className="space-y-4">
                <div className="font-sans font-bold text-white text-[8px] md:text-[9px] tracking-wider italic flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-cyan-400 rounded-sm shadow-[0_0_8px_rgba(34,211,238,0.5)]"></span>
                  STEAM STATS
                </div>
                <div className="space-y-2 text-zinc-500 text-[7px] md:text-[8px] uppercase font-bold">
                  <div className="text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-1 rounded flex items-center gap-1.5 shadow-[0_0_8px_rgba(6,182,212,0.15)]">
                    <span className="material-symbols-outlined text-[8px] md:text-[9px]">dashboard</span> DASHBOARD
                  </div>
                  <div className="px-2 py-1 flex items-center gap-1.5 hover:text-zinc-300 cursor-pointer transition-colors">
                    <span className="material-symbols-outlined text-[8px] md:text-[9px]">sports_esports</span> LIBRARY
                  </div>
                  <div className="px-2 py-1 flex items-center gap-1.5 hover:text-zinc-300 cursor-pointer transition-colors">
                    <span className="material-symbols-outlined text-[8px] md:text-[9px]">compare_arrows</span> COMPARE
                  </div>
                </div>
              </div>
              <div className="border border-white/10 rounded-lg py-1.5 text-center text-zinc-500 hover:text-white hover:border-white/20 transition-all cursor-pointer font-bold text-[7px] md:text-[8px]">
                NEW ANLS
              </div>
            </div>

            {/* Main Area */}
            <div className="flex-1 p-4 md:p-5 bg-[#0a0b0d] flex flex-col justify-between h-full overflow-hidden">
              {/* Profile Card */}
              <div className="relative bg-[#111215] border border-white/10 rounded-xl p-4 overflow-hidden">
                {/* Faint Red Graph Line in background */}
                <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none w-32 h-12">
                  <svg className="w-full h-full text-red-500" viewBox="0 0 100 30" fill="none">
                    <path d="M0,25 L15,20 L30,28 L45,15 L60,22 L75,5 L90,12 L100,2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-cyan-500/20 border border-cyan-400/30 overflow-hidden shrink-0">
                      <img src="https://avatars.githubusercontent.com/u/24908823?v=4" alt="SIX" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-[12px] md:text-[13px] flex items-center gap-1.5">
                        SIX
                        <span className="bg-yellow-500/15 text-yellow-400 border border-yellow-500/30 text-[8px] md:text-[9px] px-1 rounded font-sans font-bold">LVL 19</span>
                      </div>
                      <div className="text-zinc-500 text-[8px] md:text-[9px] uppercase font-bold tracking-wider">STEAM USER • GAMER</div>
                    </div>
                  </div>
                  <span className="text-[8px] md:text-[9px] text-emerald-400 border border-emerald-500/30 bg-emerald-500/5 px-1.5 py-0.5 rounded font-bold">STATUS: DECRYPTED</span>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-4 gap-3 text-center">
                  <div className="bg-[#18191d]/85 p-2 rounded-lg border border-white/5">
                    <div className="text-zinc-500 text-[8px] md:text-[9px] uppercase">Playtime</div>
                    <div className="text-white font-bold text-[12px] md:text-[13px] mt-0.5">14,303 HRS</div>
                  </div>
                  <div className="bg-[#18191d]/85 p-2 rounded-lg border border-white/5">
                    <div className="text-zinc-500 text-[8px] md:text-[9px] uppercase">Collection</div>
                    <div className="text-white font-bold text-[12px] md:text-[13px] mt-0.5">197 GAMES</div>
                  </div>
                  <div className="bg-[#18191d]/85 p-2 rounded-lg border border-white/5">
                    <div className="text-zinc-500 text-[8px] md:text-[9px] uppercase">Service Medal</div>
                    <div className="text-white font-bold text-[12px] md:text-[13px] mt-0.5">12 YEARS</div>
                  </div>
                  <div className="bg-[#18191d]/85 p-2 rounded-lg border border-cyan-500/20">
                    <div className="text-cyan-400 text-[8px] md:text-[9px] uppercase">Value</div>
                    <div className="text-cyan-400 font-bold text-[12px] md:text-[13px] mt-0.5">$2,506.19 EST</div>
                  </div>
                </div>
              </div>

              {/* Lower Section (Genre Ecosystem and Titan Hours) */}
              <div className="grid grid-cols-2 gap-4">
                {/* Genre Ecosystem */}
                <div className="bg-[#111215] border border-white/5 rounded-xl p-4">
                  <div className="text-zinc-400 text-[9px] md:text-[10px] font-bold uppercase mb-3 flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span>Genre Ecosystem</span>
                    <span className="text-zinc-600 text-[8px]">TOP 10 TAGS</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    {/* Donut Chart */}
                    <div className="relative w-16 h-16 rounded-full border-4 border-zinc-800 flex items-center justify-center shrink-0">
                      <div className="absolute inset-0 rounded-full border-4 border-cyan-500 border-t-transparent border-r-transparent animate-spin-slow"></div>
                      <div className="absolute inset-0.5 rounded-full border-4 border-purple-500 border-b-transparent border-l-transparent"></div>
                      <span className="text-[7px] text-zinc-500 uppercase font-bold">Tags</span>
                    </div>
                    {/* Legend (selected top genres) */}
                    <div className="flex-1 space-y-1 text-[8px] md:text-[9px] text-zinc-400">
                      <div className="flex items-center justify-between"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> ACTION</span><span className="text-zinc-500 font-bold">131</span></div>
                      <div className="flex items-center justify-between"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> ADVENTURE</span><span className="text-zinc-500 font-bold">109</span></div>
                      <div className="flex items-center justify-between"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span> INDIE</span><span className="text-zinc-500 font-bold">82</span></div>
                    </div>
                  </div>
                </div>

                {/* Titan Hours */}
                <div className="bg-[#111215] border border-white/5 rounded-xl p-4">
                  <div className="text-zinc-400 text-[9px] md:text-[10px] font-bold uppercase mb-3 flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span>Titan Hours</span>
                    <span className="text-zinc-600 text-[8px]">LIFETIME</span>
                  </div>
                  <div className="space-y-3">
                    {/* FFXIV */}
                    <div>
                      <div className="flex justify-between text-[8px] md:text-[9px] text-zinc-400 mb-1">
                        <span className="truncate max-w-[120px] font-semibold text-zinc-300">FINAL FANTASY XIV</span>
                        <span className="text-white font-bold">8,130h</span>
                      </div>
                      <div className="w-full bg-[#18191d] h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full w-[85%] shadow-[0_0_6px_rgba(6,182,212,0.4)]"></div>
                      </div>
                    </div>
                    {/* CS2 */}
                    <div>
                      <div className="flex justify-between text-[8px] md:text-[9px] text-zinc-400 mb-1">
                        <span className="truncate max-w-[120px] font-semibold text-zinc-300">Counter-Strike 2</span>
                        <span className="text-white font-bold">924h</span>
                      </div>
                      <div className="w-full bg-[#18191d] h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full w-[25%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-[#111215] border border-white/5 rounded-xl p-4">
                <div className="text-zinc-400 text-[9px] md:text-[10px] font-bold uppercase mb-3 flex items-center justify-between border-b border-white/5 pb-1.5">
                  <span>Recent Activity (Last 2 Weeks)</span>
                  <span className="text-zinc-600 text-[8px]">14d TREND</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-[8px] md:text-[9px] text-zinc-400">
                        <span>Path of Exile 2</span>
                        <span className="text-cyan-400 font-bold">68.8h</span>
                      </div>
                      <div className="w-full bg-[#18191d] h-2 rounded-full overflow-hidden mt-1">
                        <div className="bg-cyan-500 h-full w-[80%] shadow-[0_0_6px_rgba(6,182,212,0.4)]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[8px] md:text-[9px] text-zinc-400">
                        <span>FINAL FANTASY XIV</span>
                        <span className="text-purple-400 font-bold">52.6h</span>
                      </div>
                      <div className="w-full bg-[#18191d] h-2 rounded-full overflow-hidden mt-1">
                        <div className="bg-purple-500 h-full w-[60%]"></div>
                      </div>
                    </div>
                  </div>
                  {/* Recent Ecosystem composition bar */}
                  <div className="flex flex-col justify-center">
                    <div className="text-[7px] md:text-[8px] text-zinc-500 mb-1.5 font-bold">RECENT COMPOSITION</div>
                    <div className="w-full h-3.5 rounded-md bg-[#18191d] flex overflow-hidden border border-white/5">
                      <div className="bg-cyan-500 w-[56%]" title="PoE2"></div>
                      <div className="bg-purple-500 w-[43%]" title="FFXIV"></div>
                      <div className="bg-teal-500 w-[1%]" title="Other"></div>
                    </div>
                    <div className="text-[7px] text-zinc-600 mt-1.5 uppercase font-bold">121.9 Total Hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "smw-assembly-hacks":
        return (
          <div className="relative z-10 w-full max-w-lg bg-[#0e0e0e] rounded-lg shadow-2xl border border-red-500/20 p-4 font-mono text-left transform group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs text-[#a1a1aa]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                <span>snes_physics_hack.asm</span>
              </div>
              <span>65c816 Mode</span>
            </div>

            <div className="space-y-1 text-xs md:text-sm">
              <div className="flex"><span className="text-zinc-600 w-8 select-none">001</span><span className="text-blue-400">ORG</span> <span className="text-zinc-400">$00D58C</span> <span className="text-zinc-600">; Mario X-speed offset</span></div>
              <div className="flex"><span className="text-zinc-600 w-8 select-none">002</span><span className="text-emerald-400">LDA</span> <span className="text-zinc-400">$7B</span>     <span className="text-zinc-600">; Load current X-speed</span></div>
              <div className="flex"><span className="text-zinc-600 w-8 select-none">003</span><span className="text-emerald-400">CMP</span> <span className="text-zinc-400">#$20</span>     <span className="text-zinc-600">; Max speed threshold</span></div>
              <div className="flex"><span className="text-zinc-600 w-8 select-none">004</span><span className="text-emerald-400">BPL</span> <span className="text-zinc-400">.LimitSpeed</span></div>
              <div className="flex"><span className="text-zinc-600 w-8 select-none">005</span><span className="text-emerald-400">CLC</span></div>
              <div className="flex"><span className="text-zinc-600 w-8 select-none">006</span><span className="text-emerald-400">ADC</span> <span className="text-zinc-400">#$02</span>     <span className="text-zinc-600">; Accelerate</span></div>
              <div className="flex"><span className="text-zinc-600 w-8 select-none">007</span><span className="text-emerald-400">STA</span> <span className="text-zinc-400">$7B</span></div>
              <div className="flex"><span className="text-zinc-600 w-8 select-none">008</span><span className="text-zinc-400">.LimitSpeed:</span></div>
              <div className="flex"><span className="text-zinc-600 w-8 select-none">009</span><span className="text-emerald-400">RTS</span>             <span className="text-zinc-600">; Return from Subroutine</span></div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-[10px] text-zinc-500">
              <span>BUILD: SUCCESS (48 bytes patched)</span>
              <span className="text-red-400 font-bold uppercase tracking-wider">ASM compiler online</span>
            </div>
          </div>
        );
      case "chibi-chops":
        return (
          <div className="relative z-10 w-full max-w-md bg-[#161616] rounded-xl shadow-2xl border border-neutral-800 p-6 transform group-hover:scale-[1.02] transition-transform duration-500 text-left">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-rose-500 text-sm">content_cut</span>
                <span className="font-bold text-xs text-white uppercase tracking-wider">Chibi Chops Video Editor</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-800 border border-neutral-700 text-white font-mono">00:03:45.00</span>
            </div>

            {/* Waveform Visualization */}
            <div className="h-16 bg-[#0e0e0e] rounded-lg border border-neutral-800 flex items-center justify-center gap-1 px-4 mb-4 relative overflow-hidden">
              <div className="absolute inset-y-0 left-12 right-20 bg-rose-500/10 border-x border-rose-500/40"></div>
              {/* Dynamic bars */}
              {[30, 50, 70, 40, 60, 80, 45, 90, 30, 20, 60, 80, 50, 40, 70, 95, 30, 60, 40, 20, 50, 80, 90, 30, 40].map((h, i) => (
                <div 
                  key={i} 
                  style={{ height: `${h}%` }} 
                  className={`w-[3px] rounded-full ${i >= 4 && i <= 18 ? 'bg-rose-500' : 'bg-neutral-700'}`}
                ></div>
              ))}
              {/* Cutter needle */}
              <div className="absolute left-1/3 top-0 bottom-0 w-[2px] bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]"></div>
            </div>

            <div className="flex justify-between items-center text-xs mb-4">
              <div className="text-neutral-400">
                <span>Cut range: </span>
                <span className="text-white font-mono font-bold">00:12 — 02:45</span>
              </div>
              <span className="text-neutral-400 font-mono">Format: MP4 (Lossless)</span>
            </div>

            <button className="w-full py-2.5 bg-white text-black font-semibold rounded-lg text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm font-bold">play_arrow</span>
              Render & Convert
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e2e1] font-sans selection:bg-white selection:text-black">
      {/* Top Navigation Bar */}
      <nav className="w-full top-0 left-0 bg-[#0a0a0a]/80 backdrop-blur-md z-40 border-b border-white/5">
        <div className="flex justify-between items-center px-6 md:px-20 py-6 max-w-6xl mx-auto">
          <Link 
            href="/" 
            className="font-serif text-2xl md:text-3xl text-white tracking-tighter hover:opacity-85 transition-opacity"
            style={{ fontFamily: "var(--font-newsreader), serif" }}
          >
            {project.title}
          </Link>
          <div className="flex gap-4">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="material-symbols-outlined text-white hover:text-white/70 transition-colors cursor-pointer"
            >
              code
            </a>
            <Link 
              href="/" 
              className="material-symbols-outlined text-white hover:text-white/70 transition-colors"
            >
              home
            </Link>
          </div>
        </div>
      </nav>

      {/* Wide Hero Header for steam-stats */}
      {/* Hero Header (Unified size matching steam-stats) */}
      <header className="max-w-6xl mx-auto px-6 md:px-20 pt-16 mb-16">
        <div className="relative group w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          <div className={`relative bg-[#161616] border border-white/10 rounded-2xl overflow-hidden aspect-video w-full flex items-center justify-center ${project.slug === 'steam-stats' ? 'p-0' : 'p-8 md:p-12'}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)]"></div>
            {renderHeroMockup()}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 md:px-20 pt-16 pb-32">
        {/* Two-Column Overview */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 items-start">
          <div className="md:col-span-8 space-y-4">
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-2">/About the Project</p>
            <p className="text-xl text-white font-medium italic mb-4 leading-relaxed">
              {project.tagline}
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed text-pretty font-light">
              {project.longDescription}
            </p>
          </div>
          <div className="md:col-span-4 space-y-8 bg-[#161616]/50 border border-white/5 rounded-xl p-6">
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
          </div>
        </section>

        {/* Features Bento-inspired Grid */}
        <section className="mb-24">
          <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-8">/Features</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.features.map((feature, idx) => (
              <AnimatedSection 
                key={feature.title} 
                direction="bottom" 
                delay={idx * 100}
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
        <section className="text-center py-16 border-t border-white/10">
          <h2 
            className="text-3xl md:text-4xl text-white mb-8 italic font-serif"
            style={{ fontFamily: "var(--font-newsreader), serif" }}
          >
            Interessado no código?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors text-sm"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
            <Link 
              className="px-6 py-3 bg-transparent border border-white/10 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors text-sm"
              href="/"
            >
              Voltar ao Portfólio
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">{project.title}</span>
          <p className="text-xs text-zinc-500 opacity-80">© 2026 Matheus Sestare. Built with precision.</p>
          <div className="flex gap-4">
            <a 
              className="text-xs text-zinc-500 hover:text-white transition-colors" 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <Link className="text-xs text-zinc-500 hover:text-white transition-colors" href="/">Home</Link>
          </div>
        </div>
      </footer>

      {/* Floating Navigation Pill */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center p-1.5 gap-1.5 bg-[#161616]/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl scale-95 active:scale-90 transition-transform">
        <Link 
          className="text-zinc-500 hover:text-white hover:bg-white/5 rounded-full p-2.5 transition-all flex items-center justify-center" 
          href="/"
          title="Home"
        >
          <span className="material-symbols-outlined text-lg">grid_view</span>
        </Link>
        <a 
          className="text-zinc-500 hover:text-white hover:bg-white/5 rounded-full p-2.5 transition-all flex items-center justify-center" 
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Code"
        >
          <span className="material-symbols-outlined text-lg">code</span>
        </a>
      </nav>
    </div>
  );
}
