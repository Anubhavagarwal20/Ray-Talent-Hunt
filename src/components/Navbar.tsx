import React, { useState } from 'react';
import { Menu, X, Phone, Search, UserCheck } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenResult: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, onOpenResult }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#081528]/90 border-b border-cyan-500/20 transition-all shadow-lg shadow-slate-950/40">
      
      {/* Top Patronage Announcement Bar */}
      <div className="bg-gradient-to-r from-[#0d2138] via-[#16385c] to-[#0d2138] border-b border-amber-400/20 py-1.5 px-4 text-xs text-center text-cyan-200 flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 font-bold text-[10px] uppercase tracking-wider">
          Official Trust
        </span>
        <span className="hidden sm:inline text-slate-300">Organized with the support of</span>
        <strong className="text-white font-bold tracking-wide">Malviya Seva Sansthan</strong>
        <span className="hidden md:inline text-slate-400">• National Rank Scholarship & Reward Assessment</span>
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
              className="w-12 h-12 rounded-2xl object-cover border-2 border-amber-400/60 shadow-md shadow-amber-500/20 group-hover:scale-105 group-hover:border-amber-300 transition-all"
            />
            <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-400 border border-[#081528]"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-amber-300 transition-colors font-sans">
                RAY TALENT HUNT
              </span>
              <span className="px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-400/40 text-[10px] font-black text-amber-300 tracking-widest uppercase">
                OLYMPIAD
              </span>
            </div>
            <span className="text-[11px] text-cyan-200/80 font-medium tracking-wide">
              Nurturing Young Minds, Building Future Leaders
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-300">
          <a href="#about" className="hover:text-amber-300 transition-colors py-1">About</a>
          <a href="#olympiad" className="hover:text-amber-300 transition-colors py-1">Syllabus & Exam</a>
          <a href="#awards" className="hover:text-amber-300 transition-colors py-1 flex items-center gap-1.5">
            <span>5-Tier Awards</span>
            <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500/30 to-yellow-500/20 border border-amber-400/40 text-amber-300 text-[10px] font-bold">
              Laptops & Medals
            </span>
          </a>
          <a href="#schools" className="hover:text-amber-300 transition-colors py-1">For Schools</a>
          <a href="#gallery" className="hover:text-amber-300 transition-colors py-1">Event Gallery</a>
          <a href="#faq" className="hover:text-amber-300 transition-colors py-1">FAQs</a>
          <a href="#contact" className="hover:text-amber-300 transition-colors py-1">Contact</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResult}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0f243d] border border-cyan-500/40 hover:border-cyan-400 text-cyan-200 hover:text-white text-xs font-bold tracking-wide transition-all shadow-sm hover:shadow-cyan-500/20 cursor-pointer"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <span>Check Result / Roll No</span>
          </button>

          <button
            onClick={onOpenRegister}
            className="relative group overflow-hidden flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-black text-xs tracking-wider uppercase shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
          >
            <UserCheck className="w-4 h-4 stroke-[2.5]" />
            <span>Register Now</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenResult}
            className="p-2 rounded-xl bg-[#0f243d] border border-cyan-500/40 text-cyan-300 text-xs font-semibold"
            title="Check Result"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#0f243d] border border-slate-700 text-slate-200 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#081528]/98 px-5 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <nav className="flex flex-col space-y-2.5 text-sm font-semibold text-slate-200">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-[#0f243d] hover:text-amber-300"
            >
              About Ray Talent Hunt
            </a>
            <a 
              href="#olympiad" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-[#0f243d] hover:text-amber-300"
            >
              Syllabus & Exam Pattern
            </a>
            <a 
              href="#awards" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-[#0f243d] hover:text-amber-300 flex items-center justify-between"
            >
              <span>5-Tier Awards & Scholarships</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold">Laptops</span>
            </a>
            <a 
              href="#schools" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-[#0f243d] hover:text-amber-300"
            >
              School Coordination & Affiliation
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-[#0f243d] hover:text-amber-300"
            >
              Event Gallery & Instagram Reels
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-[#0f243d] hover:text-amber-300"
            >
              FAQs
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-[#0f243d] hover:text-amber-300"
            >
              Contact & Helpline
            </a>
          </nav>

          <div className="pt-4 border-t border-slate-800 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResult();
              }}
              className="w-full py-3 rounded-xl bg-[#0f243d] border border-cyan-500/40 text-cyan-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4 text-cyan-400" />
              <span>Check Result / Roll No</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30"
            >
              <UserCheck className="w-4 h-4 stroke-[2.5]" />
              <span>Register for Olympiad</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
