import React from 'react';
import { Trophy, Star, Award, School, Sparkles, ShieldCheck } from 'lucide-react';

export const MotionTicker: React.FC = () => {
  const items = [
    { icon: <Trophy className="w-4 h-4 text-amber-400" />, text: "5-Tier Merit Recognition Ladder" },
    { icon: <Star className="w-4 h-4 text-cyan-300" />, text: "Supported by Malviya Seva Sansthan" },
    { icon: <Trophy className="w-4 h-4 text-amber-400" />, text: "National Toppers: National Champion Trophies & Honors" },
    { icon: <School className="w-4 h-4 text-sky-400" />, text: "City Public School, Pratapgarh (UP)" },
    { icon: <Award className="w-4 h-4 text-amber-300" />, text: "State Toppers: State Champion Trophies & Gold Medals" },
    { icon: <School className="w-4 h-4 text-cyan-400" />, text: "St. Joseph's Convent School, Varanasi (UP)" },
    { icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />, text: "Diagnostic SPR & QR-Verifiable E-Certificates" },
    { icon: <School className="w-4 h-4 text-indigo-400" />, text: "Savitri Convent High School, Jaunpur (UP)" },
    { icon: <Sparkles className="w-4 h-4 text-yellow-400" />, text: "In-Campus School Assembly Felicitations" },
  ];

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-white/15 bg-gradient-to-r from-blue-950/40 via-slate-950/80 to-blue-950/40 backdrop-blur-md z-20">
      
      {/* Side Vignettes */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070e1c] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070e1c] to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee space-x-8 text-xs font-bold text-slate-200 uppercase tracking-wider">
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shrink-0 hover:bg-white/10 hover:border-cyan-400/50 transition-colors"
          >
            {item.icon}
            <span className="text-white">{item.text}</span>
            <span className="text-white/30 ml-2">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};
