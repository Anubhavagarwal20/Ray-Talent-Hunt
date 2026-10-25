import React, { useState } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { ThreeHeroScene } from './ThreeHeroScene';
import { HeroInteractiveMissionSlate } from './HeroInteractiveMissionSlate';

interface HeroSectionProps {
  onOpenRegister: () => void;
  onOpenResult?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister }) => {
  const [heroMode, setHeroMode] = useState<'3d' | 'quiz'>('3d');

  return (
    <section id="hero" className="relative pt-4 pb-10 sm:pt-8 sm:pb-14 lg:pt-12 lg:pb-16 overflow-hidden z-10 scroll-mt-24">
      
      {/* Background Soft Ambient Radial Glow (from d:\index.html) */}
      <div className="absolute top-1/4 right-1/4 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Open, Professional Hero Grid (Matching d:\index.html) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow (from d:\index.html) */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/25 text-cyan-300 text-[11px] sm:text-xs font-extrabold uppercase tracking-widest mb-4 sm:mb-6">
              <span className="w-3 sm:w-4 h-[1px] bg-cyan-400"></span>
              <span>For Classes 1–10</span>
              <span className="text-white/30">•</span>
              <span className="text-amber-300">Supported by Malviya Seva Sansthan</span>
            </div>

            {/* Headline (Exact copy from d:\index.html) */}
            <h1 className="text-4xl sm:text-6xl lg:text-[74px] font-black text-white tracking-tight leading-[1.04] sm:leading-[0.98] mb-4 sm:mb-6">
              Curious minds.<br />
              <span className="bg-gradient-to-r from-white via-cyan-200 to-sky-400 bg-clip-text text-transparent">
                Brighter futures.
              </span>
            </h1>

            {/* Subtitle (Exact copy from d:\index.html) */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl">
              Ray Talent Hunt Olympiad encourages young learners to explore what they know, think through new questions and build confidence across General Knowledge, Mathematics and English.
            </p>

            {/* Actions (from d:\index.html + Live Modals) */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 mb-8 w-full sm:w-auto">
              <button
                onClick={onOpenRegister}
                className="btn-trendy w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 hover:from-blue-400 hover:to-cyan-200 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 cursor-pointer transition-all"
              >
                <span>Register for Olympiad</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <a
                href="#subjects"
                className="btn-trendy w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Explore Subjects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Note with Real Student Avatar Stack */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10 w-full text-xs text-slate-300">
              <div className="flex -space-x-2 shrink-0">
                <img src="/avatars/student-1.jpg" alt="Student" className="w-8 h-8 rounded-full object-cover ring-2 ring-[#080f21] shadow" />
                <img src="/avatars/student-2.jpg" alt="Student" className="w-8 h-8 rounded-full object-cover ring-2 ring-[#080f21] shadow" />
                <img src="/avatars/student-3.jpg" alt="Student" className="w-8 h-8 rounded-full object-cover ring-2 ring-[#080f21] shadow" />
                <img src="/avatars/student-4.jpg" alt="Student" className="w-8 h-8 rounded-full object-cover ring-2 ring-[#080f21] shadow" />
                <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-black text-[10px] ring-2 ring-[#080f21] shadow">+10k</span>
              </div>
              <div className="text-left">
                <strong className="text-white font-bold block">10,000+ ambitious students</strong>
                <span className="text-slate-400 text-[11px]">Enrolled across schools in Uttar Pradesh & India</span>
              </div>
            </div>

          </div>

          {/* Right Hero Interactive Centerpiece (3D Stage vs Live Quiz Quest) */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center min-h-[380px] sm:min-h-[500px]">
            
            {/* Interactive Mode Switcher Tabs */}
            <div className="inline-flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-full bg-slate-900/90 border border-white/20 backdrop-blur-xl mb-3 sm:mb-4 z-30 shadow-xl max-w-full">
              <button
                onClick={() => setHeroMode('3d')}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all flex items-center gap-1 sm:gap-1.5 cursor-pointer whitespace-nowrap ${
                  heroMode === '3d'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 shadow-md shadow-cyan-500/30'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>🪐 3D Universe</span>
              </button>
              <button
                onClick={() => setHeroMode('quiz')}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all flex items-center gap-1 sm:gap-1.5 cursor-pointer whitespace-nowrap ${
                  heroMode === 'quiz'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 shadow-md shadow-cyan-500/30'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>🎯 <span className="hidden xs:inline">Live </span>Quiz</span>
                <span className="px-1.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[9px] sm:text-[10px] font-black">+120 XP</span>
              </button>
            </div>

            {/* Tab 1: 3D Universe View */}
            <div className={`w-full relative ${heroMode === '3d' ? 'block' : 'hidden'}`}>
              {/* Visual Floating Tag 1: National Award (Desktop/Tablet) */}
              <div className="hidden sm:flex absolute top-2 left-0 z-20 items-center gap-2.5 p-2 pr-3.5 rounded-2xl bg-[#101f3b]/90 border border-white/20 backdrop-blur-md shadow-xl animate-float pointer-events-none select-none">
                <img src="/awards/award-trophy.jpg" alt="National Award" className="w-9 h-9 rounded-xl object-cover border border-amber-400/40 shadow" />
                <div className="text-left">
                  <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">National Honor</span>
                  <span className="text-xs font-black text-white block">Champion Trophy & Honors</span>
                </div>
              </div>

              {/* Visual Floating Tag 2: State Honors (Desktop/Tablet) */}
              <div className="hidden sm:flex absolute top-28 right-0 z-20 items-center gap-2.5 p-2 pr-3.5 rounded-2xl bg-[#101f3b]/90 border border-white/20 backdrop-blur-md shadow-xl animate-float-delayed pointer-events-none select-none">
                <img src="/gallery/ceremony-trophies.jpg" alt="State Honors" className="w-9 h-9 rounded-xl object-cover border border-cyan-400/40 shadow" />
                <div className="text-left">
                  <span className="text-[10px] text-cyan-300 font-bold uppercase tracking-wider block">5-Tier Honors</span>
                  <span className="text-xs font-black text-white block">Trophies & Gold Medals</span>
                </div>
              </div>

              {/* Visual Floating Tag 3: Assembly Ceremony (Desktop/Tablet) */}
              <div className="hidden sm:flex absolute bottom-6 left-6 z-20 items-center gap-2.5 p-2 pr-3.5 rounded-2xl bg-[#101f3b]/90 border border-white/20 backdrop-blur-md shadow-xl animate-float pointer-events-none select-none">
                <img src="/gallery/ceremony-medals.jpg" alt="Assembly Ceremony" className="w-9 h-9 rounded-xl object-cover border border-blue-400/40 shadow" />
                <div className="text-left">
                  <span className="text-[10px] text-sky-300 font-bold uppercase tracking-wider block">Real Assembly</span>
                  <span className="text-xs font-black text-white block">School Felicitations</span>
                </div>
              </div>

              {/* Real-Time Interactive 3D Canvas Scene */}
              <div className="w-full relative z-10">
                <ThreeHeroScene />
              </div>

              <div className="mt-2 text-center">
                <button
                  onClick={() => setHeroMode('quiz')}
                  className="text-xs text-cyan-300 hover:text-cyan-200 underline font-semibold cursor-pointer inline-flex items-center gap-1"
                >
                  <span>⚡ Solve a live sample Olympiad question</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>

            {/* Tab 2: Interactive Mission Slate View (Brightly Inspired) */}
            <div className={`w-full relative flex flex-col items-center ${heroMode === 'quiz' ? 'block' : 'hidden'}`}>
              <HeroInteractiveMissionSlate />
              
              <div className="mt-4 text-center">
                <button
                  onClick={() => setHeroMode('3d')}
                  className="text-xs text-cyan-300 hover:text-cyan-200 underline font-semibold cursor-pointer inline-flex items-center gap-1"
                >
                  <span>🪐 Return to 3D Trophy & Academic Orbit Stage</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
