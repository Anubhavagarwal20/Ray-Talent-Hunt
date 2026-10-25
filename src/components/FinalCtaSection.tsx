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
        
        {/* CTA Panel (Exact layout and copy from d:\index.html line 222) */}
        <div className="relative rounded-[36px] p-8 sm:p-14 lg:p-16 bg-gradient-to-r from-[#1c2a55] via-[#10223c] to-[#121c38] border border-blue-400/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden">
          
          <div className="absolute right-12 top-[-50px] text-[16rem] font-serif text-white/[0.03] select-none pointer-events-none">
            ✦
          </div>

          <div className="text-left max-w-2xl relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 text-cyan-300 text-xs font-extrabold uppercase tracking-widest">
              <span className="w-5 h-[1px] bg-cyan-400"></span>
              <span>Keep in touch</span>
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
