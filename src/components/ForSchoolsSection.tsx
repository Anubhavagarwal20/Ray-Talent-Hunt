import React from 'react';
import { School, Award, FileSpreadsheet, Users, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface ForSchoolsSectionProps {
  onOpenSchoolRegister: () => void;
}

export const ForSchoolsSection: React.FC<ForSchoolsSectionProps> = ({ onOpenSchoolRegister }) => {
  return (
    <section id="schools" className="py-20 relative overflow-hidden bg-slate-950/70 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <School className="w-3.5 h-3.5" />
              <span>Institutional Collaboration</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Host the Ray Talent Hunt Olympiad in <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Your School Campus
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We partner with prominent CBSE, ICSE, and State Board schools across Uttar Pradesh and India to conduct seamless diagnostic Olympiad examinations without disrupting your academic calendar.
            </p>

            {/* School Perks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">In-Campus Felicitations</h4>
                <p className="text-xs text-slate-400">
                  We organise award ceremonies in your morning assembly with medals, trophies, and certificates presented by your Principal.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Diagnostic School Analytics</h4>
                <p className="text-xs text-slate-400">
                  Comprehensive performance reports highlighting school-wide strengths and areas for student academic enhancement.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">End-to-End Exam Logistics</h4>
                <p className="text-xs text-slate-400">
                  RTHO provides printed OMR question booklets, roll sheets, and handles complete evaluation and result publishing.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">School Topper Honors</h4>
                <p className="text-xs text-slate-400">
                  Special recognition and medals guaranteed for the top performers of your institution across every class.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenSchoolRegister}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all cursor-pointer"
              >
                <span>Register as School Examination Center</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right School Trust Showcase */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                Participating Institutions
              </span>
              <h3 className="text-xl font-extrabold text-white mb-4">
                Trusted by Respected Schools
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Institutions in Varanasi, Pratapgarh, and Jaunpur collaborate with Ray Talent Hunt Olympiad to stimulate academic curiosity and competitive confidence in young learners.
              </p>

              <div className="space-y-3">
                {[
                  "City Public School, Pratapgarh (UP)",
                  "St. Joseph's Convent School, Varanasi (UP)",
                  "Savitri Convent High School, Jaunpur (UP)",
                  "Lourdes Mary Junior High School, Pratapgarh (UP)"
                ].map((school, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-semibold text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{school}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/20 text-xs text-amber-300">
              <strong>Need a school coordinator kit?</strong> Call our school partnership desk directly at <a href="tel:+917236008947" className="underline font-bold">+91 7236008947</a>.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
