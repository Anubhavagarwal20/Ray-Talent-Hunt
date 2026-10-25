import React, { useState } from 'react';
import { Trophy, Award, Medal, FileCheck2, Sparkles, Check, ArrowUpRight } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const AwardsSection: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<number>(0);

  const awardTiers = [
    {
      level: "National Topper",
      badge: "Highest National Honor",
      badgeColor: "bg-amber-400/20 text-amber-300 border-amber-400/40",
      accentBorder: "border-amber-400/50 shadow-amber-500/20",
      accentGradient: "from-amber-400/20 via-yellow-400/10 to-transparent",
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      image: "/awards/award-trophy.jpg",
      awardTitle: "National Champion Trophy & Grand Felicitation",
      memento: "National Champion Trophy of Excellence",
      eligibility: "Top rankers across all participating schools nationwide",
      perks: [
        "National Champion Grand Trophy",
        "Gold Emblem Medal of Scholastic Excellence",
        "Hall of Fame Feature on Official Portal",
        "Special Stage Felicitation & Commendation",
        "Official Certificate with Holographic QR Seal"
      ]
    },
    {
      level: "State Topper",
      badge: "State Level Honor",
      badgeColor: "bg-cyan-400/20 text-cyan-300 border-cyan-400/40",
      accentBorder: "border-cyan-400/50 shadow-cyan-500/20",
      accentGradient: "from-cyan-400/20 via-sky-400/10 to-transparent",
      icon: <Medal className="w-5 h-5 text-cyan-300" />,
      image: "/gallery/ceremony-trophies.jpg",
      awardTitle: "State Excellence Trophy & Gold Medal of Honor",
      memento: "Pure Gold Medal of Scholastic Excellence",
      eligibility: "Top state-level rankers in Uttar Pradesh and regional states",
      perks: [
        "State Level Champion Trophy",
        "Pure Golden Finish Excellence Medal",
        "School Assembly Felicitation Ceremony",
        "State Merit Certificate with Score Breakdown",
        "Honors Listing in State Merit Board"
      ]
    },
    {
      level: "Zone Topper",
      badge: "Zonal Distinction",
      badgeColor: "bg-blue-400/20 text-blue-300 border-blue-400/40",
      accentBorder: "border-blue-400/50 shadow-blue-500/20",
      accentGradient: "from-blue-400/20 via-indigo-400/10 to-transparent",
      icon: <Award className="w-5 h-5 text-sky-400" />,
      image: "/gallery/ceremony-medals.jpg",
      awardTitle: "Zonal Distinction Trophy & Silver Medal",
      memento: "Silver Medal of Distinction",
      eligibility: "Top performers across designated zonal educational clusters",
      perks: [
        "Zonal Champion Trophy & Accolades",
        "Silver Excellence Medal of Honor",
        "Zonal Recognition Commendation",
        "Comprehensive Diagnostic Analysis Report (SPR)",
        "Special Merit Citation Certificate"
      ]
    },
    {
      level: "District Topper",
      badge: "District Pride",
      badgeColor: "bg-emerald-400/20 text-emerald-300 border-emerald-400/40",
      accentBorder: "border-emerald-400/50 shadow-emerald-500/20",
      accentGradient: "from-emerald-400/20 via-teal-400/10 to-transparent",
      icon: <Award className="w-5 h-5 text-emerald-400" />,
      image: "/gallery/ceremony-spr.jpg",
      awardTitle: "District Pride Trophy & Bronze Medal",
      memento: "Bronze Medal of Achievement",
      eligibility: "Top scoring students in Varanasi, Pratapgarh, Jaunpur & regional districts",
      perks: [
        "District Topper Honor Trophy",
        "Bronze Achievement Medal",
        "District Topper Merit Citation",
        "School-Level Honor Roll Publication",
        "District Level Certificate of Excellence"
      ]
    },
    {
      level: "School Topper",
      badge: "Campus Champion",
      badgeColor: "bg-rose-400/20 text-rose-300 border-rose-400/40",
      accentBorder: "border-rose-400/50 shadow-rose-500/20",
      accentGradient: "from-rose-400/20 via-orange-400/10 to-transparent",
      icon: <Medal className="w-5 h-5 text-rose-400" />,
      image: "/awards/award-trophy.jpg",
      awardTitle: "School Champion Trophy & Merit Medal",
      memento: "Class Topper Honor Badge",
      eligibility: "Highest rankers within each respective participating school",
      perks: [
        "Special Class Champion Medal",
        "Campus Trophy & Memento",
        "Felicitation by School Principal in Assembly",
        "School Level Certificate of Excellence"
      ]
    }
  ];

  const current = awardTiers[selectedTier];

  return (
    <section id="awards" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 animate-float">
            <Trophy className="w-3.5 h-3.5" />
            <span>5-Tier Merit Recognition Ladder</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Prestigious Awards & <br />
            <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-amber-300 bg-clip-text text-transparent">
              Merit Recognition Honors
            </span>
          </h2>

          <p className="text-cyan-100/80 text-sm sm:text-base">
            Every achiever is celebrated at National, State, Zonal, District, and School tiers with authentic in-assembly recognition.
          </p>
        </div>

        {/* 5-Tier Frosted Pill Switcher with Mini Thumbnails */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {awardTiers.map((tier, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTier(idx)}
              className={`btn-trendy px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold cursor-pointer transition-all flex items-center gap-2.5 ${
                selectedTier === idx
                  ? 'bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-xl shadow-sky-500/40 border border-white/40 scale-105'
                  : 'bg-slate-900/60 backdrop-blur-md text-slate-300 hover:text-white border border-white/15'
              }`}
            >
              <img
                src={tier.image}
                alt={tier.level}
                className="w-5 h-5 rounded-full object-cover border border-white/30"
              />
              <span>{tier.level}</span>
            </button>
          ))}
        </div>

        {/* Featured Icy Showcase Card with 3D Tilt */}
        <TiltCard className="mb-10">
          <div className={`p-8 sm:p-12 rounded-[36px] bg-gradient-to-br from-white/15 via-sky-500/10 to-slate-950/70 backdrop-blur-2xl border ${current.accentBorder} shadow-2xl relative overflow-hidden transition-all duration-300`}>
            <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${current.accentGradient} rounded-full blur-3xl pointer-events-none`}></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Info */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className={`px-3.5 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${current.badgeColor}`}>
                    {current.badge}
                  </span>
                  <span className="text-xs text-cyan-200">Tier #{selectedTier + 1} of 5</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-white">
                  {current.awardTitle}
                </h3>

                <p className="text-xs sm:text-sm text-cyan-100/90">
                  <strong className="text-white">Eligibility:</strong> {current.eligibility}
                </p>

                <div className="space-y-3 pt-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Included Perks & Entitlements</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.perks.map((perk, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Visual Product & Award Showcase Card */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-950/80 backdrop-blur-xl border border-white/20 text-center shadow-xl relative overflow-hidden group/showcase">
                {/* Product / Trophy Image with subtle zoom */}
                <div className="relative w-full h-60 rounded-2xl overflow-hidden border border-white/20 mb-4 shadow-xl">
                  <img
                    src={current.image}
                    alt={current.awardTitle}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/showcase:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  {/* Floating Tier Emblem on Top Left */}
                  <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/30 text-white shadow-lg">
                    {current.icon}
                  </div>

                  {/* Award Tag on Bottom Right */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-amber-400/50 text-[11px] font-bold text-amber-300 shadow">
                    Official Award Package
                  </div>
                </div>

                <h4 className="text-xl font-black text-white mb-1">{current.level}</h4>
                <p className="text-xs text-amber-300 font-bold mb-4">{current.memento}</p>
                
                <div className="w-full pt-3 border-t border-white/10 text-xs text-cyan-200 flex items-center justify-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-cyan-400" />
                  <span>Includes Official QR-Verifiable Certificate</span>
                </div>
              </div>

            </div>
          </div>
        </TiltCard>

        {/* Universal Participation Certificate Banner */}
        <div className="glass-panel p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 flex items-center justify-center shrink-0">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-white">Participation & Rank Certificate for All Qualifiers</h4>
              <p className="text-xs text-cyan-100/80">
                Every participating student with a rank receives an official Student Performance Report (SPR) and digital certificate.
              </p>
            </div>
          </div>
          <a
            href="#olympiad"
            className="btn-trendy px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-cyan-200 text-xs font-bold border border-white/20 whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Review Exam Pattern</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
