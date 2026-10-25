import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: (mode?: 'student' | 'school') => void;
  onOpenResult?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const sections = ['hero', 'about', 'subjects', 'awards', 'schools', 'gallery', 'faq', 'contact'];
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Syllabus', href: '#subjects', id: 'subjects' },
    { label: 'Awards', href: '#awards', id: 'awards' },
    { label: 'For Schools', href: '#schools', id: 'schools' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#060c18]/45 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/15' 
          : 'bg-[#060c18]/15 backdrop-blur-md border-b border-white/[0.04]'
      }`}
    >
      
      {/* Sleek, Transparent Announcement Strip */}
      <div className="bg-white/[0.02] border-b border-white/[0.04] py-1.5 px-4 text-[11px] sm:text-xs text-center text-slate-300 flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
        <span className="inline-flex items-center gap-1.5 text-cyan-300 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Session 2026-27 Enrollment Open</span>
        </span>
        <span className="text-white/20 hidden xs:inline">•</span>
        <span className="hidden sm:inline text-slate-300">
          Patronage: <strong className="text-white font-semibold">Malviya Seva Sansthan</strong>
        </span>
        <span className="text-white/20 hidden sm:inline">•</span>
        <a 
          href="tel:+917236008947" 
          className="text-amber-300 hover:text-amber-200 transition-colors inline-flex items-center gap-1 font-semibold"
          title="Direct Student & Parent Helpline"
        >
          <Phone className="w-3 h-3 text-amber-400" />
          <span>+91 7236008947</span>
        </a>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        
        {/* Brand Logo - Concise & Bold */}
        <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative">
            <img 
              src="/logo.jpg" 
              alt="Ray Talent Hunt Olympiad" 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover border border-amber-400/60 shadow group-hover:scale-105 transition-all"
            />
            <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-base sm:text-lg md:text-xl font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              RAY TALENT HUNT
            </span>
            <span className="px-1.5 py-0.5 rounded-md bg-amber-400/20 border border-amber-400/40 text-[9px] font-black text-amber-300 tracking-wider uppercase">
              OLYMPIAD
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links in Compact Frosted Glass Capsule */}
        <nav className="hidden lg:flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/[0.06] hover:bg-white/[0.08] backdrop-blur-2xl border border-white/[0.12] text-xs font-semibold text-slate-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-colors">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.id} 
                href={link.href} 
                className={`px-3.5 py-1.5 rounded-full transition-all ${
                  isActive 
                    ? 'bg-white/20 text-white font-bold shadow-sm' 
                    : 'hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Primary Action Button (Desktop) */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={() => onOpenRegister('student')}
            className="btn-trendy px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 hover:from-blue-400 hover:to-cyan-200 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-cyan-500/25 cursor-pointer transition-all"
          >
            <span>Register Now</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-slate-200 hover:text-white cursor-pointer active:scale-95 transition-transform"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#061021]/95 backdrop-blur-2xl px-5 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain text-left">
          
          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1 text-sm font-semibold text-slate-200">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-white/10 hover:text-cyan-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="pt-3 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister('student');
              }}
              className="btn-trendy w-full py-3 rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer"
            >
              <span>Register for Olympiad</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Minimal Helpline strip */}
          <div className="pt-2 text-center text-xs text-slate-400">
            <span>Helpline: </span>
            <a href="tel:+917236008947" className="text-amber-300 font-semibold hover:underline">+91 7236008947</a>
          </div>

        </div>
      )}
    </header>
  );
};
