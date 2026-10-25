import React from 'react';
import { ShieldCheck, HeartHandshake, Target, Sparkles, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 animate-float">
            <HeartHandshake className="w-3.5 h-3.5 text-cyan-400" />
            <span>Our Origin & Guiding Vision</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            BUILDING CONFIDENCE THROUGH <br />
            <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-amber-300 bg-clip-text text-transparent">
              MERIT-FIRST RECOGNITION
            </span>
          </h2>

          <p className="text-cyan-100/80 text-sm sm:text-base">
            Ray Talent Hunt Olympiad was founded on the fundamental belief that early diagnostic recognition transforms a student's lifelong ambition and self-belief.
          </p>
        </div>

        {/* 3 Frosted Glass Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <div className="glass-card p-8 rounded-[36px] space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 flex items-center justify-center">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-white">Our Mission</h3>
            <p className="text-xs sm:text-sm text-cyan-100/80 leading-relaxed">
              "Nurturing Young Minds, Building Future Leaders" — we identify high-potential students in tier-1 to tier-3 cities, providing them with national benchmarking, awards, and diagnostic academic insights.
            </p>
          </div>

          <div className="glass-card p-8 rounded-[36px] space-y-4 border-amber-400/30">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-white">Supported by Malviya Seva Sansthan</h3>
            <p className="text-xs sm:text-sm text-cyan-100/80 leading-relaxed">
              Under the esteemed social patronage of Malviya Seva Sansthan, RTHO operates with transparent evaluation, merit-first scholarship grants, and child-safe data ethics.
            </p>
          </div>

          <div className="glass-card p-8 rounded-[36px] space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-sky-400/20 text-sky-300 border border-sky-400/30 flex items-center justify-center">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-white">In-Campus Felicitation</h3>
            <p className="text-xs sm:text-sm text-cyan-100/80 leading-relaxed">
              Unlike faceless online portals, we coordinate in-person felicitation ceremonies directly inside partner school assemblies, awarding laptops, tablets, smartwatches, and medals before teachers and peers.
            </p>
          </div>

        </div>

        {/* 4 Trust Checks */}
        <div className="glass-panel p-6 rounded-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
            <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="font-semibold">Zero Rote-Learning Bias</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
            <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="font-semibold">CBSE & ICSE Aligned</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
            <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="font-semibold">Transparent Merit Lists</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
            <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="font-semibold">Child Data Guarded</span>
          </div>
        </div>

      </div>
    </section>
  );
};
