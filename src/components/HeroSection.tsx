import React from 'react';
import { ArrowUpRight, Search, ArrowDown } from 'lucide-react';
import { ThreeHeroScene } from './ThreeHeroScene';

interface HeroSectionProps {
  onOpenRegister: () => void;
  onOpenResult: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister, onOpenResult }) => {
  return (
    <section className="relative pt-6 pb-16 lg:pt-12 lg:pb-20 overflow-hidden z-10">
      
      {/* Background Soft Ambient Radial Glow (from d:\index.html) */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Open, Professional Hero Grid (Matching d:\index.html) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow (from d:\index.html) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/25 text-cyan-300 text-xs font-extrabold uppercase tracking-widest mb-6">
              <span className="w-4 h-[1px] bg-cyan-400"></span>
              <span>For Classes 1–10</span>
              <span className="text-white/30">•</span>
              <span className="text-amber-300">Supported by Malviya Seva Sansthan</span>
            </div>

            {/* Headline (Exact copy from d:\index.html) */}
            <h1 className="text-5xl sm:text-7xl lg:text-[76px] font-black text-white tracking-tight leading-[0.98] mb-6">
              Curious minds.<br />
              <span className="bg-gradient-to-r from-white via-cyan-200 to-sky-400 bg-clip-text text-transparent">
                Brighter futures.
              </span>
            </h1>

            {/* Subtitle (Exact copy from d:\index.html) */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
              Ray Talent Hunt Olympiad encourages young learners to explore what they know, think through new questions and build confidence across General Knowledge, Mathematics and English.
            </p>

            {/* Actions (from d:\index.html + Live Modals) */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                onClick={onOpenRegister}
                className="btn-trendy px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-sky-500/30 cursor-pointer"
              >
                <span>Register for Olympiad</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResult}
                className="btn-trendy px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all"
              >
                <Search className="w-4 h-4 text-cyan-400" />
                <span>Check Result / Roll No</span>
              </button>

              <a
                href="#subjects"
                className="btn-trendy px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-cyan-200 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>Explore Subjects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Note with Real Student Avatar Stack */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10 w-full text-xs text-slate-300">
              <div className="flex -space-x-2">
                <img src="/avatars/student-1.jpg" alt="Student" className="w-8 h-8 rounded-full object-cover ring-2 ring-[#080f21] shadow" />
                <img src="/avatars/student-2.jpg" alt="Student" className="w-8 h-8 rounded-full object-cover ring-2 ring-[#080f21] shadow" />
                <img src="/avatars/student-3.jpg" alt="Student" className="w-8 h-8 rounded-full object-cover ring-2 ring-[#080f21] shadow" />
                <img src="/avatars/student-4.jpg" alt="Student" className="w-8 h-8 rounded-full object-cover ring-2 ring-[#080f21] shadow" />
                <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-black text-[10px] ring-2 ring-[#080f21] shadow">+10k</span>
              </div>
              <div>
                <strong className="text-white font-bold block">10,000+ ambitious students</strong>
                <span className="text-slate-400 text-[11px]">Enrolled across schools in Uttar Pradesh & India</span>
              </div>
            </div>

          </div>

          {/* Right Hero Art (3D Trophy Stage with Rich Visual Floating Badges) */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center min-h-[480px]">
            
            {/* Visual Floating Tag 1: National Award */}
            <div className="absolute top-2 left-0 z-20 flex items-center gap-2.5 p-2 pr-3.5 rounded-2xl bg-[#101f3b]/90 border border-white/20 backdrop-blur-md shadow-xl animate-float">
              <img src="/awards/award-trophy.jpg" alt="National Award" className="w-9 h-9 rounded-xl object-cover border border-amber-400/40 shadow" />
              <div className="text-left">
                <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">National Honor</span>
                <span className="text-xs font-black text-white block">Champion Trophy & Honors</span>
              </div>
            </div>

            {/* Visual Floating Tag 2: State Honors */}
            <div className="absolute top-28 right-0 z-20 flex items-center gap-2.5 p-2 pr-3.5 rounded-2xl bg-[#101f3b]/90 border border-white/20 backdrop-blur-md shadow-xl animate-float-delayed">
              <img src="/gallery/ceremony-trophies.jpg" alt="State Honors" className="w-9 h-9 rounded-xl object-cover border border-cyan-400/40 shadow" />
              <div className="text-left">
                <span className="text-[10px] text-cyan-300 font-bold uppercase tracking-wider block">5-Tier Honors</span>
                <span className="text-xs font-black text-white block">Trophies & Gold Medals</span>
              </div>
            </div>

            {/* Visual Floating Tag 3: Assembly Ceremony */}
            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2.5 p-2 pr-3.5 rounded-2xl bg-[#101f3b]/90 border border-white/20 backdrop-blur-md shadow-xl animate-float">
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

          </div>

        </div>

      </div>

      {/* Trust Strip (Directly from d:\index.html line 177) */}
      <div className="mt-16 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
              <div className="w-10 h-10 rounded-xl bg-[#182746] border border-white/10 flex items-center justify-center text-cyan-400 text-base shrink-0">
                🎒
              </div>
              <div>
                <b className="text-white text-sm block">Classes 1–10</b>
                <span className="text-slate-400 text-xs">School-age learners</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
              <div className="w-10 h-10 rounded-xl bg-[#182746] border border-white/10 flex items-center justify-center text-cyan-400 text-base shrink-0">
                🌍
              </div>
              <div>
                <b className="text-white text-sm block">General Knowledge</b>
                <span className="text-slate-400 text-xs">Explore the world around you</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
              <div className="w-10 h-10 rounded-xl bg-[#182746] border border-white/10 flex items-center justify-center text-cyan-400 text-base shrink-0">
                ➗
              </div>
              <div>
                <b className="text-white text-sm block">Mathematics</b>
                <span className="text-slate-400 text-xs">Build reasoning & problem-solving</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
              <div className="w-10 h-10 rounded-xl bg-[#182746] border border-white/10 flex items-center justify-center text-cyan-400 text-base shrink-0">
                🔤
              </div>
              <div>
                <b className="text-white text-sm block">English</b>
                <span className="text-slate-400 text-xs">Grow language confidence</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
