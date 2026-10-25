import React, { useState } from 'react';
import { Trophy, Award, Laptop, Tablet, Watch, Medal, FileCheck2, Sparkles, Check } from 'lucide-react';

export const AwardsSection: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<number>(0);

  const awardTiers = [
    {
      level: "National Topper",
      badge: "Highest National Honor",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      accentBorder: "border-amber-400/50 shadow-amber-500/10",
      accentGradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
      icon: <Laptop className="w-8 h-8 text-amber-400" />,
      prizeTitle: "Premium Laptop + Grand Cash Scholarship",
      memento: "National Champion Trophy of Excellence",
      certificate: "Special National Rank Certificate with Verifiable Holographic Seal",
      eligibility: "Top rankers across all participating schools nationwide",
      perks: [
        "Brand-new High Performance Laptop",
        "National Level Merit Trophy",
        "Direct Educational Grant / Cash Scholarship",
        "Lifetime Feature in Ray Talent Hunt Hall of Fame",
        "Press release & National Recognition"
      ]
    },
    {
      level: "State Topper",
      badge: "State Level Excellence",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      accentBorder: "border-cyan-400/50 shadow-cyan-500/10",
      accentGradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
      icon: <Tablet className="w-8 h-8 text-cyan-400" />,
      prizeTitle: "Learning Tablet + State Scholarship",
      memento: "Gold Medal of Scholastic Excellence",
      certificate: "State Rank Commendation Certificate",
      eligibility: "Top state-level rankers in Uttar Pradesh and participating states",
      perks: [
        "Educational Tablet for Digital Learning",
        "Pure Golden Finish Excellence Medal",
        "State Level Cash Scholarship Assistance",
        "School Assembly Felicitation Ceremony",
        "State Merit Certificate with Rank Breakdown"
      ]
    },
    {
      level: "Zone Topper",
      badge: "Zonal Merit Award",
      badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
      accentBorder: "border-indigo-400/50 shadow-indigo-500/10",
      accentGradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
      icon: <Watch className="w-8 h-8 text-indigo-400" />,
      prizeTitle: "Smart Fitness Watch + Zonal Merit Award",
      memento: "Silver Medal of Distinction",
      certificate: "Zonal Performance Certificate",
      eligibility: "Top performers across designated zonal educational clusters",
      perks: [
        "Smart Multi-feature Digital Watch",
        "Distinctive Silver Excellence Medal",
        "Zonal Recognition Citation",
        "Student Performance Diagnostic Analysis (SPR)",
        "Priority invitation to Advanced Talent Rounds"
      ]
    },
    {
      level: "District Topper",
      badge: "District Pride",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      accentBorder: "border-emerald-400/50 shadow-emerald-500/10",
      accentGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      icon: <Award className="w-8 h-8 text-emerald-400" />,
      prizeTitle: "Special STEM Educational Kit + District Honors",
      memento: "Bronze Medal of Achievement",
      certificate: "District Level Merit Certificate",
      eligibility: "Top scoring students in Varanasi, Pratapgarh, Jaunpur & regional districts",
      perks: [
        "Curated Academic & STEM Resource Kit",
        "Bronze Achievement Medal",
        "District Topper Certificate of Merit",
        "School-level honor roll publication"
      ]
    },
    {
      level: "School Topper",
      badge: "Campus Champion",
      badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/40",
      accentBorder: "border-rose-400/50 shadow-rose-500/10",
      accentGradient: "from-rose-500/20 via-orange-500/10 to-transparent",
      icon: <Medal className="w-8 h-8 text-rose-400" />,
      prizeTitle: "School Champion Memento & Medal",
      memento: "Class Topper Star Medal",
      certificate: "School Level Certificate of Excellence",
      eligibility: "Highest rankers within each respective participating school",
      perks: [
        "Special Class Champion Medal",
        "School Level Trophy / Memento",
        "Felicitation during morning school assembly by Principal",
        "Official Certificate of Excellence"
      ]
    }
  ];

  return (
    <section id="awards" className="py-20 relative overflow-hidden bg-slate-950/60 border-t border-b border-slate-800/80">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>5-Tier Merit Recognition Ladder</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Scholarships, Gadgets & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Prestigious Honors
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Ray Talent Hunt Olympiad ensures every young achiever is celebrated. We recognize brilliance at National, State, Zonal, District, and School levels with tangible rewards and lifelong credentials.
          </p>
        </div>

        {/* 5-Tier Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {awardTiers.map((tier, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTier(idx)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedTier === idx
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tier.level}
            </button>
          ))}
        </div>

        {/* Featured Tier Showcase Card */}
        {(() => {
          const current = awardTiers[selectedTier];
          return (
            <div className={`p-6 sm:p-10 rounded-3xl bg-slate-900/80 border ${current.accentBorder} backdrop-blur-xl relative overflow-hidden transition-all duration-300 mb-12`}>
              <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${current.accentGradient} rounded-full blur-2xl pointer-events-none`}></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Left Tier Info */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${current.badgeColor}`}>
                      {current.badge}
                    </span>
                    <span className="text-xs text-slate-400">Rank Level #{selectedTier + 1}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {current.prizeTitle}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300">
                    <strong>Eligibility:</strong> {current.eligibility}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Included Perks & Rewards</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {current.perks.map((perk, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Visual Badge */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-slate-950/70 border border-slate-800/80 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-900 border border-slate-700/80 flex items-center justify-center mb-4 shadow-xl">
                    {current.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{current.level}</h4>
                  <p className="text-xs text-amber-300 font-semibold mb-3">{current.memento}</p>
                  <div className="w-full pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                    <FileCheck2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Includes Official Verifiable E-Certificate</span>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

        {/* Universal Qualifier Note */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-slate-900/50 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Participation & Rank Certificate for All Qualifiers</h4>
              <p className="text-xs text-slate-400">
                Every participating student with an assigned rank receives an official Student Performance Report (SPR) and digital certificate.
              </p>
            </div>
          </div>
          <a
            href="#olympiad"
            className="text-xs font-bold text-cyan-300 hover:text-cyan-200 underline shrink-0 whitespace-nowrap"
          >
            Review Exam Pattern &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
