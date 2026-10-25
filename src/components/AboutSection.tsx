import React from 'react';
import { ShieldCheck, HeartHandshake, Target, Sparkles, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-950/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Our Origin & Purpose</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Building Confidence Through <br />
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Merit-Based Recognition
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Ray Talent Hunt Olympiad was founded on the fundamental belief that early recognition transforms a child's academic trajectory and self-belief.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              "Nurturing Young Minds, Building Future Leaders" — we identify high-potential students in tier-1 to tier-3 cities and provide them with national benchmarking, awards, and diagnostic academic insights.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Supported by Malviya Seva Sansthan</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Under the guidance of Malviya Seva Sansthan, RTHO operates with transparent evaluation, merit-first scholarship distribution, and social responsibility to ensure every child gets an equal opportunity to compete.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/15 text-yellow-400 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">In-School Felicitation</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Unlike faceless online portals, we coordinate in-person felicitation ceremonies directly inside partner school assemblies, awarding tangible laptops, tablets, smartwatches, and medals before teachers and peers.
            </p>
          </div>

        </div>

        {/* Core Commitments List */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Zero Rote-Learning Bias</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>CBSE & ICSE Mapped Content</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Transparent Merit Lists</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Child Privacy Guarded</span>
          </div>
        </div>

      </div>
    </section>
  );
};
