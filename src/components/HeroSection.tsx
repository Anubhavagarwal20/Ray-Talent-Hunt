import React from 'react';
import { ArrowRight, Trophy, Sparkles, ShieldCheck, Search, Download, Star, Rocket, CheckCircle2 } from 'lucide-react';
import { ThreeHeroScene } from './ThreeHeroScene';

interface HeroSectionProps {
  onOpenRegister: () => void;
  onOpenResult: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister, onOpenResult }) => {
  return (
    <section className="relative overflow-hidden pt-4 pb-14 lg:py-16">
      
      {/* Outer ambient glow circles */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-600/20 via-blue-700/15 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-gradient-to-br from-amber-500/15 via-rose-600/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Giant Rounded Educational Canvas (Inspired by References 2, 3, 4, 5) */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#0b1b30] via-[#09172a] to-[#060f1c] border border-cyan-500/30 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-cyan-950/40 overflow-hidden">
          
          {/* Subtle cosmic burst lines in background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.12),transparent_60%)] pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-400/10 via-rose-500/5 to-transparent rounded-full blur-2xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            
            {/* Left Hero Column (7 Cols on Desktop) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Trust Badge with Star (Cambridge-style trust banner) */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#122842] border border-amber-400/40 shadow-inner mb-6 backdrop-blur-md">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-400 text-slate-950 text-xs font-black">
                  ★
                </span>
                <span className="text-xs font-bold text-amber-300">
                  National Rank Scholarship & Reward Assessment
                </span>
              </div>

              {/* Main Creative Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4">
                Give Young Talent a <br />
                <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  Stage to Shine.
                </span>
              </h1>

              {/* Mission Motto */}
              <div className="flex items-center gap-3 mb-6 p-3 rounded-2xl bg-[#0c1f36]/80 border border-cyan-500/30 backdrop-blur-sm max-w-xl">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-extrabold text-white tracking-wide">
                    “Nurturing Young Minds, Building Future Leaders”
                  </p>
                  <p className="text-xs text-cyan-200/80">
                    Olympiad examination & scholarship platform for school students of <strong className="text-amber-300">Classes 1 to 10</strong>.
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
                Ray Talent Hunt Olympiad (RTHO) evaluates critical thinking, STEM aptitude, and logic through syllabus-aligned testing. Rewarding achievers with <strong className="text-white font-semibold">Laptops, Tablets, Smartwatches, Cash Grants, and Prestigious Medals</strong> presented right in school assemblies.
              </p>

              {/* Primary Call to Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
                
                {/* High-Impact Register CTA */}
                <button
                  onClick={onOpenRegister}
                  className="group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Rocket className="w-5 h-5" />
                  <span>Register for Olympiad</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                </button>

                {/* Check Results CTA */}
                <button
                  onClick={onOpenResult}
                  className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#10243d] border border-cyan-500/50 hover:border-cyan-400 text-cyan-200 hover:text-white font-bold text-sm transition-all shadow-md hover:shadow-cyan-500/20 cursor-pointer"
                >
                  <Search className="w-4 h-4 text-cyan-400" />
                  <span>Check Results / Scorecard</span>
                </button>

                {/* Syllabus button */}
                <a
                  href="#olympiad"
                  className="flex items-center justify-center gap-2 px-4 py-4 rounded-2xl text-slate-400 hover:text-amber-300 text-xs font-semibold transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Syllabus & Pattern</span>
                </a>
              </div>

              {/* Official Accreditation Chip (Inspired by Cambridge Club Reference 2) */}
              <div className="p-4 rounded-2xl bg-[#091729]/90 border border-slate-700/80 flex items-center gap-4 w-full sm:w-auto">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                  <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Official Trust & Patronage
                    </span>
                    <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-amber-300 font-semibold">
                    Supported by Malviya Seva Sansthan
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Authorized assessment body • Transparent evaluation & merit distribution
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: 3D Cosmic World (5 Cols on Desktop) */}
            <div className="lg:col-span-5 relative w-full flex items-center justify-center">
              
              {/* Floating Floating Badges */}
              <div className="absolute top-2 right-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-[#0d2138]/90 border border-amber-400/40 text-xs font-bold text-amber-300 backdrop-blur-md shadow-xl animate-bounce">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Laptops, Tablets & Medals</span>
              </div>

              <div className="absolute bottom-16 left-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-[#0d2138]/90 border border-cyan-400/40 text-xs font-bold text-cyan-300 backdrop-blur-md shadow-xl">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>5-Tier Merit Recognition</span>
              </div>

              {/* 3D WebGL Canvas Scene */}
              <div className="w-full relative z-10">
                <ThreeHeroScene />
              </div>

            </div>

          </div>

          {/* Bottom Quick Feature Strips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-cyan-500/20 text-xs text-slate-300">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white block">5-Tier Merit Honors</span>
                <span className="text-[11px] text-slate-400">National to School Levels</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white block">NCERT & CBSE Aligned</span>
                <span className="text-[11px] text-slate-400">Classes 1 through 10</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white block">In-Campus Ceremonies</span>
                <span className="text-[11px] text-slate-400">Celebrated in School Assembly</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-rose-400/20 text-rose-300 flex items-center justify-center shrink-0">
                <Rocket className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white block">Dual Exam Modes</span>
                <span className="text-[11px] text-slate-400">School OMR & Online</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
