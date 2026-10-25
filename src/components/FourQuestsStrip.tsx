import React from 'react';
import { TiltCard } from './TiltCard';

export const FourQuestsStrip: React.FC = () => {
  const quests = [
    {
      icon: "➗",
      title: "Math Adventures",
      desc: "Build problem-solving skills and numerical mastery through exciting challenges.",
      badge: "Mathematics"
    },
    {
      icon: "🔬",
      title: "Science Quests",
      desc: "Discover the world with conceptual physics, biology, and hands-on questions.",
      badge: "Science"
    },
    {
      icon: "🔤",
      title: "Word & English Quests",
      desc: "Grow vocabulary, sentence syntax, and analytical reading comprehension.",
      badge: "English"
    },
    {
      icon: "🧠",
      title: "Logic & Critical Thinking",
      desc: "Unleash cognitive agility through pattern-matching and spatial puzzles.",
      badge: "Mental Ability"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-10 sm:mt-12 sm:mb-16 relative z-20">
      
      {/* 4 Quest Cards Strip (Directly from Brightly) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-14">
        {quests.map((q, idx) => (
          <TiltCard key={idx} className="h-full">
            <a 
              href="#subjects"
              className="glass-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl h-full flex flex-col justify-between border border-white/15 group cursor-pointer block text-left"
              title={`Explore ${q.title} syllabus & pattern`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#14284d] border border-cyan-400/30 flex items-center justify-center text-lg sm:text-xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all">
                    {q.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-400/10 px-2.5 py-1 rounded-full border border-cyan-400/20">
                    {q.badge}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {q.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {q.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-cyan-300">
                <span>Classes 1–10</span>
                <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>Explore Syllabus</span>
                  <span>&rarr;</span>
                </span>
              </div>
            </a>
          </TiltCard>
        ))}
      </div>

      {/* 3 Metric Stat Cards (Directly from Eduvora reference!) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        
        <TiltCard>
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/15 flex items-center gap-3.5 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-amber-400/20 border border-amber-400/40 text-amber-300 flex items-center justify-center text-xl sm:text-2xl font-black shrink-0">
              ★
            </div>
            <div className="text-left">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight block">98%</span>
              <span className="text-[11px] sm:text-xs text-slate-300 font-medium">Verified SPR Diagnostic Rate</span>
            </div>
          </div>
        </TiltCard>

        <TiltCard>
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/15 flex items-center gap-3.5 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center text-xl sm:text-2xl font-black shrink-0">
              🏫
            </div>
            <div className="text-left">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight block">100+</span>
              <span className="text-[11px] sm:text-xs text-slate-300 font-medium">Partner Schools Across UP & India</span>
            </div>
          </div>
        </TiltCard>

        <TiltCard>
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/15 flex items-center gap-3.5 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-sky-400/20 border border-sky-400/40 text-sky-300 flex items-center justify-center text-xl sm:text-2xl font-black shrink-0">
              🏆
            </div>
            <div className="text-left">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight block">5 Tiers</span>
              <span className="text-[11px] sm:text-xs text-slate-300 font-medium">National, State, Zonal & School Honors</span>
            </div>
          </div>
        </TiltCard>

      </div>

    </div>
  );
};
