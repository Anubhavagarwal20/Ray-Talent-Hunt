import React from 'react';
import { Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Card with Students Image Showcase & Motifs */}
          <div className="lg:col-span-5 relative min-h-[460px] rounded-3xl border border-white/20 bg-gradient-to-br from-[#111d3c] to-[#0c1429] p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl group">
            {/* Background Students Learning Photograph */}
            <div className="absolute inset-0 z-0">
              <img
                src="/about/students-classroom.jpg"
                alt="Students Learning & Achievement"
                className="w-full h-full object-cover opacity-25 group-hover:scale-105 group-hover:opacity-35 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1429] via-[#0c1429]/80 to-transparent"></div>
            </div>

            {/* Top Floating Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-[11px] font-bold">
                Malviya Seva Sansthan Patronage
              </span>
              <span className="text-xs text-amber-300 font-bold">Est. 2024</span>
            </div>

            {/* Floating 3D Book Graphic */}
            <div className="relative z-10 flex items-center justify-center py-6">
              <div className="relative w-48 h-40 -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-600 to-slate-900 border border-blue-300 shadow-2xl flex items-center justify-center font-black tracking-widest text-2xl text-white">
                  RAY
                </div>
                <div className="absolute -top-4 -left-3 inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-700 border border-cyan-300 shadow-xl opacity-90 flex items-center justify-center font-bold tracking-widest text-base text-slate-950">
                  LEARN
                </div>
                <div className="absolute -top-8 -left-6 inset-0 rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-600 border border-amber-200 shadow-lg opacity-85 flex items-center justify-center font-bold tracking-widest text-sm text-slate-950">
                  ACHIEVE
                </div>
              </div>
            </div>

            {/* Visual Caption Box */}
            <div className="relative z-10 p-4 rounded-2xl bg-[#0b1428]/90 border border-white/20 backdrop-blur-md shadow-lg">
              <div className="flex items-center gap-3">
                <img
                  src="/avatars/student-1.jpg"
                  alt="Student Champion"
                  className="w-10 h-10 rounded-xl object-cover border border-amber-400/40 shrink-0"
                />
                <div>
                  <b className="text-white text-sm block">From learning to achievement</b>
                  <span className="text-xs text-slate-300">A platform that celebrates effort, curiosity and authentic merit</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Copy (Exact from d:\index.html line 180) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 text-cyan-300 text-xs font-extrabold uppercase tracking-widest">
              <span className="w-5 h-[1px] bg-cyan-400"></span>
              <span>About Ray Talent Hunt</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.08]">
              A little curiosity can lead to <br />
              <span className="bg-gradient-to-r from-white via-cyan-200 to-sky-400 bg-clip-text text-transparent">
                big possibilities.
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We believe every child has a unique spark. Ray Talent Hunt aims to create opportunities for students to challenge themselves, think critically and experience the pride that comes with achievement.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              The Olympiad experience is designed to make academic growth feel meaningful—not just through a result, but through the confidence built along the way. Supported by Malviya Seva Sansthan to foster equitable educational access.
            </p>

            {/* Checklist (Exact from d:\index.html line 180) */}
            <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-md bg-gradient-to-tr from-blue-500 to-cyan-300 text-slate-950 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Encourage analytical thinking and intellectual curiosity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-md bg-gradient-to-tr from-blue-500 to-cyan-300 text-slate-950 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Recognise achievement across different levels of performance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-md bg-gradient-to-tr from-blue-500 to-cyan-300 text-slate-950 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Make participation and achievement visible to students and schools</span>
              </li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
};
