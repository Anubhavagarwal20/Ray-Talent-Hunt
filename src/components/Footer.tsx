import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { InstagramIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#04060d] border-t border-slate-800 text-slate-400 text-xs">
      
      {/* Upper Footer Contact Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <img 
                src="/logo.jpg" 
                alt="Ray Talent Hunt Olympiad" 
                className="w-12 h-12 rounded-2xl object-cover border-2 border-amber-400/50 shadow-md"
              />
              <div>
                <span className="text-lg font-black text-white tracking-tight block">RAY TALENT HUNT</span>
                <span className="text-[10px] text-amber-300 font-bold tracking-wider uppercase">OLYMPIAD & MERIT PLATFORM</span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Empowering school students with diagnostic competitive assessments and 5-tier scholastic honors.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 space-y-1">
              <span className="text-amber-400 font-bold block">Official Patronage</span>
              <span>Supported by <strong>Malviya Seva Sansthan</strong></span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#about" className="hover:text-amber-300 transition-colors">About RTHO</a></li>
              <li><a href="#olympiad" className="hover:text-amber-300 transition-colors">Syllabus & Pattern</a></li>
              <li><a href="#awards" className="hover:text-amber-300 transition-colors">5-Tier Awards</a></li>
              <li><a href="#schools" className="hover:text-amber-300 transition-colors">For Schools</a></li>
              <li><a href="#gallery" className="hover:text-amber-300 transition-colors">Event Gallery</a></li>
              <li><a href="#faq" className="hover:text-amber-300 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Recognition Tiers (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Award Tiers</h4>
            <ul className="space-y-2 text-slate-400">
              <li><span className="text-amber-300 font-semibold">1. National Topper</span> (Champion Trophy)</li>
              <li><span className="text-cyan-300 font-semibold">2. State Topper</span> (Gold Medal)</li>
              <li><span className="text-indigo-300 font-semibold">3. Zone Topper</span> (Silver Medal)</li>
              <li><span className="text-emerald-300 font-semibold">4. District Topper</span> (Bronze Medal)</li>
              <li><span className="text-rose-300 font-semibold">5. School Topper</span> (Merit Medal)</li>
              <li><span className="text-slate-300">Participation Certificates</span></li>
            </ul>
          </div>

          {/* Official Helplines & Social (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Helpline & Support</h4>
            
            <div className="space-y-2.5">
              <a 
                href="tel:+917236008947" 
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400/50 text-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Primary Helpline</span>
                  <span className="text-sm font-bold text-white">+91 7236008947</span>
                </div>
              </a>

              <a 
                href="tel:+918448198656" 
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400/50 text-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Support / School Desk</span>
                  <span className="text-sm font-bold text-white">+91 8448198656</span>
                </div>
              </a>

              <a 
                href="https://www.instagram.com/raytalenthuntolympiad/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 text-slate-200 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Official Instagram</span>
                  <span className="text-xs font-bold text-white">@raytalenthuntolympiad</span>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Coordinating Centers: Varanasi • Pratapgarh • Jaunpur • UP</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Compliance & Copyright Bar */}
      <div className="border-t border-slate-900 bg-[#030408] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center md:text-left">
          <div>
            <p>© {new Date().getFullYear()} Ray Talent Hunt Olympiad (raytalenthunt.com). All rights reserved.</p>
            <p className="text-slate-400 mt-0.5">
              Patronage: Malviya Seva Sansthan. Child privacy and data integrity strictly protected.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Terms of Examination</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Child Safety Standards</a>
            <span>•</span>
            <a href="#contact" className="hover:text-slate-300">Student Support</a>
          </div>
        </div>
      </div>

    </footer>
  );
};
