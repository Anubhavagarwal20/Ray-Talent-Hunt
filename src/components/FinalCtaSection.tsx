import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { InstagramIcon } from './Icons';

interface FinalCtaSectionProps {
  onOpenRegister: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenRegister }) => {
  return (
    <section className="py-20 relative z-10" id="connect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Panel */}
        <div className="relative rounded-[36px] p-8 sm:p-14 lg:p-16 bg-gradient-to-r from-[#1c2a55] via-[#10223c] to-[#121c38] border border-blue-400/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden group">
          
          {/* Background Ceremony Image */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/gallery/ceremony-trophies.jpg"
              alt="Olympiad Ceremony"
              className="w-full h-full object-cover opacity-15 group-hover:opacity-25 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1c2a55]/95 via-[#10223c]/90 to-[#121c38]/90"></div>
          </div>

          <div className="absolute right-12 top-[-50px] text-[16rem] font-serif text-white/[0.03] select-none pointer-events-none">
            ✦
          </div>

          <div className="text-left max-w-2xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 text-cyan-300 text-xs font-extrabold uppercase tracking-widest">
              <span className="w-5 h-[1px] bg-cyan-400"></span>
              <span>Keep in touch & Register Today</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.04]">
              Give young talent <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-amber-300 bg-clip-text text-transparent">
                a stage to shine.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore the learning areas and follow Ray Talent Hunt for official updates, Olympiad notifications, and examination dates. Supported by Malviya Seva Sansthan.
            </p>

            {/* Student Avatar Social Proof */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex -space-x-2">
                <img src="/avatars/student-1.jpg" alt="Student" className="w-7 h-7 rounded-full object-cover ring-2 ring-[#10223c]" />
                <img src="/avatars/student-2.jpg" alt="Student" className="w-7 h-7 rounded-full object-cover ring-2 ring-[#10223c]" />
                <img src="/avatars/student-3.jpg" alt="Student" className="w-7 h-7 rounded-full object-cover ring-2 ring-[#10223c]" />
                <span className="w-7 h-7 rounded-full bg-cyan-400 text-slate-950 font-black text-[9px] flex items-center justify-center ring-2 ring-[#10223c]">+10k</span>
              </div>
              <span className="text-xs text-cyan-200/90 font-medium">Join 10,000+ ambitious students across 100+ partner schools</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 relative z-10 shrink-0">
            <button
              onClick={onOpenRegister}
              className="btn-trendy px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-sky-500/30 cursor-pointer"
            >
              <span>Register for Olympiad</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="https://www.instagram.com/raytalenthuntolympiad/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-trendy px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <InstagramIcon className="w-4 h-4 text-pink-400" />
              <span>Follow Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#subjects"
              className="btn-trendy px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-200 text-xs font-semibold flex items-center gap-2"
            >
              <span>Explore Subjects</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
