import React, { useState } from 'react';
import { Trophy, Award, Laptop, Tablet, Watch, Medal, FileCheck2, Sparkles, Check, ArrowUpRight } from 'lucide-react';
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
      icon: <Laptop className="w-10 h-10 text-amber-400" />,
      prizeTitle: "Premium Laptop + ₹51,000 Grand Scholarship",
      memento: "National Champion Trophy of Excellence",
      eligibility: "Top rankers across all participating schools nationwide",
      perks: [
        "Brand-New High Performance Laptop",
        "Direct Cash Scholarship Assistance",
        "National Level Merit Champion Trophy",
        "Hall of Fame Feature on Official Portal",
        "Official Certificate with Holographic QR Seal"
      ]
    },
    {
      level: "State Topper",
      badge: "State Level Honor",
      badgeColor: "bg-cyan-400/20 text-cyan-300 border-cyan-400/40",
      accentBorder: "border-cyan-400/50 shadow-cyan-500/20",
      accentGradient: "from-cyan-400/20 via-sky-400/10 to-transparent",
      icon: <Tablet className="w-10 h-10 text-cyan-300" />,
      prizeTitle: "Learning Tablet + State Scholarship Grant",
      memento: "Pure Gold Medal of Scholastic Excellence",
      eligibility: "Top state-level rankers in Uttar Pradesh and regional states",
      perks: [
        "Digital Educational Tablet Device",
        "State Level Cash Scholarship",
        "Pure Golden Finish Excellence Medal",
        "School Assembly Felicitation Ceremony",
        "State Merit Certificate with Score Breakdown"
      ]
    },
    {
      level: "Zone Topper",
      badge: "Zonal Distinction",
      badgeColor: "bg-blue-400/20 text-blue-300 border-blue-400/40",
      accentBorder: "border-blue-400/50 shadow-blue-500/20",
      accentGradient: "from-blue-400/20 via-indigo-400/10 to-transparent",
      icon: <Watch className="w-10 h-10 text-sky-400" />,
      prizeTitle: "Smart Fitness Watch + Zonal Merit Award",
      memento: "Silver Medal of Distinction",
      eligibility: "Top performers across designated zonal educational clusters",
      perks: [
        "Multi-Feature Smart Digital Watch",
        "Silver Excellence Medal of Honor",
        "Zonal Recognition Commendation",
        "Comprehensive Diagnostic Analysis Report (SPR)",
        "Priority Entry to Advanced Olympiad Rounds"
      ]
    },
    {
      level: "District Topper",
      badge: "District Pride",
      badgeColor: "bg-emerald-400/20 text-emerald-300 border-emerald-400/40",
      accentBorder: "border-emerald-400/50 shadow-emerald-500/20",
      accentGradient: "from-emerald-400/20 via-teal-400/10 to-transparent",
      icon: <Award className="w-10 h-10 text-emerald-400" />,
      prizeTitle: "STEM Resource Kit + District Merit Honors",
      memento: "Bronze Medal of Achievement",
      eligibility: "Top scoring students in Varanasi, Pratapgarh, Jaunpur & regional districts",
      perks: [
        "Curated Academic STEM Resource Kit",
        "Bronze Achievement Medal",
        "District Topper Merit Citation",
        "School-Level Honor Roll Publication"
      ]
    },
    {
      level: "School Topper",
      badge: "Campus Champion",
      badgeColor: "bg-rose-400/20 text-rose-300 border-rose-400/40",
      accentBorder: "border-rose-400/50 shadow-rose-500/20",
      accentGradient: "from-rose-400/20 via-orange-400/10 to-transparent",
      icon: <Medal className="w-10 h-10 text-rose-400" />,
      prizeTitle: "School Champion Trophy & Gold Medal",
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
            Prestigious Awards, <br />
            <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-amber-300 bg-clip-text text-transparent">
              Laptops & Cash Scholarships
            </span>
          </h2>

          <p className="text-cyan-100/80 text-sm sm:text-base">
            Every achiever is celebrated at National, State, Zonal, District, and School tiers with authentic in-assembly recognition.
          </p>
        </div>

        {/* 5-Tier Frosted Pill Switcher (Inspired by SkillNest Tab Styling) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {awardTiers.map((tier, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTier(idx)}
              className={`btn-trendy px-5 py-3 rounded-full text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                selectedTier === idx
                  ? 'bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-xl shadow-sky-500/40 border border-white/40 scale-105'
                  : 'bg-slate-900/60 backdrop-blur-md text-slate-300 hover:text-white border border-white/15'
              }`}
            >
              {tier.level}
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
                  {current.prizeTitle}
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

              {/* Right 3D Visual Emblem Card */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-3xl bg-slate-950/80 backdrop-blur-xl border border-white/20 text-center shadow-xl">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-sky-500/20 to-amber-500/20 border border-white/30 flex items-center justify-center mb-4 shadow-xl animate-float">
                  {current.icon}
                </div>
                <h4 className="text-xl font-black text-white mb-1">{current.level}</h4>
                <p className="text-xs text-amber-300 font-bold mb-4">{current.memento}</p>
                
                <div className="w-full pt-4 border-t border-white/10 text-xs text-cyan-200 flex items-center justify-center gap-2">
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
