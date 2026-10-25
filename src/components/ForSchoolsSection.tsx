import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface ForSchoolsSectionProps {
  onOpenSchoolRegister: () => void;
}

export const ForSchoolsSection: React.FC<ForSchoolsSectionProps> = ({ onOpenSchoolRegister }) => {
  return (
    <section id="schools" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Head (Exact from d:\index.html line 208) */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-cyan-300 text-xs font-extrabold uppercase tracking-widest mb-3">
            <span className="w-5 h-[1px] bg-cyan-400"></span>
            <span>Made for your journey</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.08] mb-4">
            A clear path for learners<br />
            <span className="bg-gradient-to-r from-white via-cyan-200 to-sky-400 bg-clip-text text-transparent">
              and school teams.
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base">
            Two audiences, one shared goal: helping young learners explore their potential. The relevant information and next steps are simple to find.
          </p>
        </div>

        {/* 2-Column Audience Grid (Exact from d:\index.html line 209) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: For students and parents */}
          <TiltCard className="h-full">
            <div className="glass-card p-8 sm:p-10 rounded-3xl h-full flex flex-col justify-between border border-white/15">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#182746] border border-white/10 flex items-center justify-center text-2xl mb-6">
                  👨‍👩‍👧
                </div>
                <h3 className="text-2xl font-black text-white mb-3">For students and parents</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Explore the learning areas and understand the Olympiad through clear, parent-friendly information.
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>See which classes the Olympiad is designed for (Classes 1–10)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Review the three learning areas: General Knowledge, Mathematics & English</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Instant online scorecards and verifiable merit certificates</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-white/10">
                <button
                  onClick={onOpenSchoolRegister}
                  className="btn-trendy px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Student Registration Form</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </TiltCard>

          {/* Card 2: For schools and educators */}
          <TiltCard className="h-full">
            <div className="glass-card p-8 sm:p-10 rounded-3xl h-full flex flex-col justify-between border border-amber-400/25">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#182746] border border-white/10 flex items-center justify-center text-2xl mb-6">
                  🏫
                </div>
                <h3 className="text-2xl font-black text-white mb-3">For schools and educators</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  A dedicated route for schools interested in learning more about Ray Talent Hunt and how participation works.
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-300 font-bold">•</span>
                    <span>Understand the Olympiad structure at a glance</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-300 font-bold">•</span>
                    <span>Direct coordination for in-campus OMR examination logistics</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-300 font-bold">•</span>
                    <span>Morning assembly felicitation ceremonies with principal & teachers</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-white/10">
                <button
                  onClick={onOpenSchoolRegister}
                  className="btn-trendy px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 text-slate-950 text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-sky-500/30 cursor-pointer"
                >
                  <span>Register School Center</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </TiltCard>

        </div>

      </div>
    </section>
  );
};
