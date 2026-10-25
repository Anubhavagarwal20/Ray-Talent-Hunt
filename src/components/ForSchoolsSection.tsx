import React from 'react';
import { School, Award, FileSpreadsheet, Users, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface ForSchoolsSectionProps {
  onOpenSchoolRegister: () => void;
}

export const ForSchoolsSection: React.FC<ForSchoolsSectionProps> = ({ onOpenSchoolRegister }) => {
  return (
    <section id="schools" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-wider animate-float">
              <School className="w-3.5 h-3.5" />
              <span>Institutional Affiliation & Center Setup</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              HOST THE OLYMPIAD IN <br />
              <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-amber-300 bg-clip-text text-transparent">
                YOUR SCHOOL CAMPUS
              </span>
            </h2>

            <p className="text-cyan-100/80 text-sm sm:text-base leading-relaxed">
              We partner with prominent CBSE, ICSE, and State Board schools across Uttar Pradesh and India to conduct seamless diagnostic Olympiad examinations without disrupting your academic schedule.
            </p>

            {/* School Perks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-card p-5 rounded-3xl space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-extrabold text-white">In-Campus Felicitations</h4>
                <p className="text-xs text-cyan-100/70">
                  Medals, trophies, and certificates presented by your School Principal in the morning school assembly.
                </p>
              </div>

              <div className="glass-card p-5 rounded-3xl space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 flex items-center justify-center">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-extrabold text-white">Diagnostic School Analytics</h4>
                <p className="text-xs text-cyan-100/70">
                  Comprehensive performance reports highlighting institutional academic strengths and growth areas.
                </p>
              </div>

              <div className="glass-card p-5 rounded-3xl space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-sky-400/20 text-sky-300 border border-sky-400/30 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-extrabold text-white">End-to-End Exam Logistics</h4>
                <p className="text-xs text-cyan-100/70">
                  RTHO provides printed OMR booklets and manages full scanning, evaluation, and result publishing.
                </p>
              </div>

              <div className="glass-card p-5 rounded-3xl space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-extrabold text-white">School Topper Honors</h4>
                <p className="text-xs text-cyan-100/70">
                  Guaranteed medals and mementos for the top scoring students of your school across every class.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenSchoolRegister}
                className="btn-trendy inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white font-black text-xs uppercase tracking-wider shadow-xl shadow-sky-500/30 cursor-pointer"
              >
                <span>Register as School Center</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right School Trust Showcase */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-[36px] flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-1">
                Participating Institutions
              </span>
              <h3 className="text-2xl font-black text-white mb-4">
                Trusted by Respected Schools
              </h3>
              <p className="text-xs text-cyan-100/80 leading-relaxed mb-6">
                Prominent institutions in Varanasi, Pratapgarh, and Jaunpur collaborate with Ray Talent Hunt Olympiad to build student confidence and celebrate young talent.
              </p>

              <div className="space-y-3">
                {[
                  "City Public School, Pratapgarh (UP)",
                  "St. Joseph's Convent School, Varanasi (UP)",
                  "Savitri Convent High School, Jaunpur (UP)",
                  "Lourdes Mary Junior High School, Pratapgarh (UP)"
                ].map((school, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-slate-950/60 border border-white/10 text-xs font-bold text-white">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{school}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-xs text-amber-300 font-medium">
              <strong>Need an affiliation kit?</strong> Call our school partnership desk directly at <a href="tel:+917236008947" className="underline font-bold text-white">+91 7236008947</a>.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
