import React, { useState } from 'react';
import { Menu, X, Phone, Search, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenResult: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, onOpenResult }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-[#081528]/80 border-b border-white/15 transition-all shadow-xl shadow-sky-950/30">
      
      {/* Top Patronage Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-900/40 via-sky-800/40 to-blue-900/40 border-b border-white/10 py-1.5 px-4 text-xs text-center text-cyan-200 flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 font-bold text-[10px] uppercase tracking-wider">
          Official Trust
        </span>
        <span className="hidden sm:inline text-slate-300">Under the Guidance of</span>
        <strong className="text-white font-bold tracking-wide">Malviya Seva Sansthan</strong>
        <span className="hidden md:inline text-cyan-200/70">• National Rank Olympiad & Merit Assessment</span>
        <a 
          href="tel:+917236008947" 
          className="ml-2 inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors font-semibold"
        >
          <Phone className="w-3 h-3 text-amber-400" />
          <span>+91 7236008947</span>
        </a>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo with Official Graphic */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative">
            <img 
              src="/logo.jpg" 
              alt="Ray Talent Hunt Olympiad Official Logo" 
              className="w-12 h-12 rounded-2xl object-cover border-2 border-amber-400/60 shadow-lg shadow-amber-500/20 group-hover:scale-105 group-hover:border-amber-300 transition-all"
            />
            <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-400 border border-[#081528]"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors font-sans">
                RAY TALENT HUNT
              </span>
              <span className="px-2 py-0.5 rounded-md bg-amber-400/20 border border-amber-400/40 text-[10px] font-black text-amber-300 tracking-widest uppercase">
                OLYMPIAD
              </span>
            </div>
            <span className="text-[11px] text-cyan-200/80 font-medium tracking-wide">
              Nurturing Young Minds, Building Future Leaders
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links in Frosted Pill Container (SkillNest Style) */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-bold text-slate-200 shadow-inner">
          <a href="#" className="px-4 py-2 rounded-full hover:bg-white/20 hover:text-white transition-all text-white bg-white/15">Home</a>
          <a href="#about" className="px-4 py-2 rounded-full hover:bg-white/20 hover:text-white transition-all">About</a>
          <a href="#subjects" className="px-4 py-2 rounded-full hover:bg-white/20 hover:text-white transition-all">Subjects</a>
          <a href="#awards" className="px-4 py-2 rounded-full hover:bg-white/20 hover:text-white transition-all flex items-center gap-1.5">
            <span>5-Tier Awards</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          </a>
          <a href="#schools" className="px-4 py-2 rounded-full hover:bg-white/20 hover:text-white transition-all">For Schools</a>
          <a href="#gallery" className="px-4 py-2 rounded-full hover:bg-white/20 hover:text-white transition-all">Community</a>
          <a href="#faq" className="px-4 py-2 rounded-full hover:bg-white/20 hover:text-white transition-all">FAQs</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResult}
            className="btn-trendy flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-cyan-200 hover:text-white text-xs font-bold tracking-wide transition-all cursor-pointer"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <span>Check Result</span>
          </button>

          <button
            onClick={onOpenRegister}
            className="btn-trendy flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white font-black text-xs tracking-wider uppercase shadow-lg shadow-sky-500/40 border border-white/30 cursor-pointer"
          >
            <span>Register Now</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenResult}
            className="p-2 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-semibold"
            title="Check Result"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-slate-200 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/20 bg-[#081528]/98 px-5 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <nav className="flex flex-col space-y-2 text-sm font-semibold text-slate-200">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 hover:text-cyan-300"
            >
              About Ray Talent Hunt
            </a>
            <a 
              href="#olympiad" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 hover:text-cyan-300"
            >
              Syllabus & Exam Pattern
            </a>
            <a 
              href="#awards" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 hover:text-cyan-300 flex items-center justify-between"
            >
              <span>5-Tier Awards & Merit Honors</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold">Honors</span>
            </a>
            <a 
              href="#schools" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 hover:text-cyan-300"
            >
              School Coordination & Affiliation
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 hover:text-cyan-300"
            >
              Event Gallery & Instagram Reels
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 hover:text-cyan-300"
            >
              FAQs
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-white/10 hover:text-cyan-300"
            >
              Contact & Helpline
            </a>
          </nav>

          <div className="pt-4 border-t border-white/15 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResult();
              }}
              className="btn-trendy w-full py-3 rounded-full bg-white/10 border border-white/20 text-cyan-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4 text-cyan-400" />
              <span>Check Result / Roll No</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="btn-trendy w-full py-3 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-sky-500/40"
            >
              <span>Register for Olympiad</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
