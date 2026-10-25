import React, { useState } from 'react';
import { ArrowUpRight, Trophy, Sparkles, Award, Laptop, Users } from 'lucide-react';
import { ThreeHeroScene } from './ThreeHeroScene';
import { TiltCard } from './TiltCard';

interface HeroSectionProps {
  onOpenRegister: () => void;
  onOpenResult: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister, onOpenResult }) => {
  const [quickRoll, setQuickRoll] = useState('');

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenResult();
  };

  return (
    <section className="relative pt-4 pb-16 lg:py-16 overflow-hidden z-10">
      
      {/* Background Soft Icy Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-sky-500/20 via-blue-600/15 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-400/20 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* HERO STAGE: Frosted Glass Panel with Perspective Grid */}
        {/* (Directly mirroring the SkillNest reference layout)       */}
        {/* ========================================================= */}
        <div className="relative rounded-[36px] sm:rounded-[48px] bg-gradient-to-br from-blue-600/30 via-cyan-500/15 to-slate-950/60 backdrop-blur-2xl border border-white/25 shadow-2xl shadow-sky-950/50 p-6 sm:p-10 lg:p-14 overflow-hidden bg-perspective-grid">
          
          {/* Internal Shimmer Radial Highlights */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column (7 Cols on Desktop) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Frosted Pill Badge (As in SkillNest reference) */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-xs font-semibold shadow-inner mb-6 animate-float">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-400 text-slate-950 text-[10px] font-bold">
                  ★
                </span>
                <span className="text-cyan-200">Transforming Skills Into Success</span>
                <span className="text-white/40">•</span>
                <span className="text-amber-300 font-bold">Malviya Seva Sansthan</span>
              </div>

              {/* Main Headline (All Caps, Modern Sans Serif as in SkillNest) */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.12] mb-5">
                SHAPING MINDS, <br className="hidden sm:inline" />
                BUILDING FUTURES <br />
                <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-amber-300 bg-clip-text text-transparent">
                  THROUGH SMARTER LEARNING
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-cyan-100/90 font-normal leading-relaxed mb-8 max-w-xl">
                Join a new era of education where innovation meets knowledge. Discover expert-led Olympiad assessments, practical skills, and 5-tier scholarships to achieve your goals.
              </p>

              {/* Icy Pill Search Input Box (Directly from SkillNest reference!) */}
              <form onSubmit={handleQuickSearch} className="w-full max-w-md relative mb-8">
                <div className="flex items-center p-1.5 rounded-full bg-slate-950/70 backdrop-blur-xl border border-white/30 shadow-xl focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/40 transition-all">
                  <input
                    type="text"
                    placeholder="Type your Roll No or Mobile here..."
                    value={quickRoll}
                    onChange={(e) => setQuickRoll(e.target.value)}
                    className="flex-1 px-5 py-2.5 bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="btn-trendy px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-sky-500/30 cursor-pointer"
                  >
                    <span>Check</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between text-[11px] text-cyan-200/80 mt-2 px-3">
                  <span>Sample Roll: <code className="text-amber-300 font-bold cursor-pointer underline" onClick={() => onOpenResult()}>RTHO-2025-0842</code></span>
                  <span>Instant Scorecard & E-Certificate</span>
                </div>
              </form>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <button
                  onClick={onOpenRegister}
                  className="btn-trendy flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-500/30 cursor-pointer"
                >
                  <Trophy className="w-4 h-4" />
                  <span>Register for Olympiad</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="#olympiad"
                  className="btn-trendy px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Explore Syllabus &rarr;
                </a>
              </div>

              {/* Social Proof Avatar Stack (Directly from SkillNest reference) */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/15 w-full">
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-blue-500 flex items-center justify-center text-white text-xs font-bold">AS</div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-amber-500 flex items-center justify-center text-slate-950 text-xs font-bold">PS</div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-cyan-500 flex items-center justify-center text-slate-950 text-xs font-bold">RK</div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-900 flex items-center justify-center text-cyan-300 text-[10px] font-bold">+10k</div>
                </div>
                <div className="text-xs text-cyan-100 font-medium">
                  <strong className="text-white font-bold">10,000+ ambitious students</strong> already registered across UP & India
                </div>
              </div>

            </div>

            {/* Right Column: 3D Scene + Floating Icy Badges */}
            <div className="lg:col-span-5 relative w-full flex items-center justify-center min-h-[440px]">
              
              {/* Floating Icy Card 1 (Top Left) */}
              <div className="absolute top-2 -left-4 z-20 hidden sm:flex items-center gap-2.5 p-3 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/40 shadow-xl shadow-sky-950/30 animate-float">
                <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                  <Laptop className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-amber-300 uppercase tracking-widest block font-bold">National Topper</span>
                  <span className="text-xs font-extrabold text-white">Laptop + ₹51,000</span>
                </div>
              </div>

              {/* Floating Icy Card 2 (Bottom Right) */}
              <div className="absolute bottom-4 right-0 z-20 flex items-center gap-2.5 p-3 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/40 shadow-xl shadow-sky-950/30 animate-float-delayed">
                <div className="w-8 h-8 rounded-xl bg-cyan-400 text-slate-950 flex items-center justify-center font-bold">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-cyan-200 uppercase tracking-widest block font-bold">5-Tier Honors</span>
                  <span className="text-xs font-extrabold text-white">Gold Medals & Tabs</span>
                </div>
              </div>

              {/* Real-Time Interactive 3D Canvas Scene */}
              <div className="w-full relative z-10">
                <ThreeHeroScene />
              </div>

            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* 3 FLOATING ICY TEXT BOARDS (Directly matching reference)   */}
        {/* (The 3 frosted glowing cards below the hero with 3D Tilt) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          
          {/* Icy Board 1: Knowledge Paths / Partner Schools */}
          <TiltCard className="h-full">
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group cursor-pointer h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/15 rounded-full blur-xl group-hover:scale-125 transition-transform"></div>
              
              <div className="w-12 h-12 rounded-2xl bg-sky-400/20 text-cyan-300 border border-white/20 flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform">
                <Users className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">
                100+ Partner Schools
              </h3>
              
              <p className="text-xs sm:text-sm text-cyan-100/80 leading-relaxed">
                Conducting in-campus Olympiad rounds with seamless logistics and morning assembly felicitation ceremonies across Uttar Pradesh.
              </p>
            </div>
          </TiltCard>

          {/* Icy Board 2: Empowered Learning / 5-Tier Merit */}
          <TiltCard className="h-full">
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group cursor-pointer border-amber-400/30 h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/15 rounded-full blur-xl group-hover:scale-125 transition-transform"></div>
              
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-300 border border-white/20 flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform">
                <Trophy className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-black text-white mb-2 group-hover:text-amber-300 transition-colors">
                Empowered Recognition
              </h3>
              
              <p className="text-xs sm:text-sm text-cyan-100/80 leading-relaxed">
                5-Tier Merit Ladder: National, State, Zonal, District, and School toppers rewarded with Laptops, Tablets, Smartwatches, and Medals.
              </p>
            </div>
          </TiltCard>

          {/* Icy Board 3: Thriving Community / 100% Transparency */}
          <TiltCard className="h-full">
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group cursor-pointer h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/15 rounded-full blur-xl group-hover:scale-125 transition-transform"></div>
              
              <div className="w-12 h-12 rounded-2xl bg-cyan-400/20 text-cyan-300 border border-white/20 flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Transparent Results
              </h3>
              
              <p className="text-xs sm:text-sm text-cyan-100/80 leading-relaxed">
                Instant roll-number lookups, detailed Student Performance Reports (SPR), and tamper-proof digital certificates with QR verification.
              </p>
            </div>
          </TiltCard>

        </div>

      </div>
    </section>
  );
};
