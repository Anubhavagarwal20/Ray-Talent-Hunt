import React, { useState } from 'react';
import { Sparkles, Zap, Award, Flame, CheckCircle2, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const HeroInteractiveMissionSlate: React.FC = () => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [xp, setXp] = useState(2480);
  const [showXpAnim, setShowXpAnim] = useState(false);

  const questions = [
    {
      missionTitle: "Space & Science Mission",
      subject: "Science / GK",
      question: "Which planet is closest to the Sun?",
      options: ["Venus", "Mercury", "Earth"],
      correct: 1
    },
    {
      missionTitle: "Speed Math Challenge",
      subject: "Mathematics",
      question: "What is 15 × 8 − 20?",
      options: ["100", "120", "140"],
      correct: 0
    },
    {
      missionTitle: "Vocabulary Quest",
      subject: "English",
      question: "Choose the synonym of 'BRILLIANT':",
      options: ["Sluggish", "Radiant", "Ordinary"],
      correct: 1
    }
  ];

  const currentQ = questions[currentQIndex];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedAnswer(idx);
    setIsAnswered(true);

    if (idx === currentQ.correct) {
      setXp(prev => prev + 120);
      setShowXpAnim(true);
      setTimeout(() => setShowXpAnim(false), 2000);

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {
        // fallback
      }
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    setCurrentQIndex(prev => (prev + 1) % questions.length);
  };

  return (
    <div className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0c1f3d]/90 via-[#0a1830]/95 to-[#050c18] border border-cyan-400/40 shadow-2xl shadow-sky-950/60 p-4 sm:p-7 backdrop-blur-2xl text-left overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none"></div>

      {/* Floating XP Pill Animation */}
      {showXpAnim && (
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-30 animate-bounce flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-400/50">
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>+120 XP EARNED!</span>
        </div>
      )}

      {/* Header bar (Directly like Brightly) */}
      <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-4 sm:mb-5">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 shadow-md shrink-0">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-black text-white">{currentQ.missionTitle}</h4>
            <p className="text-[10px] sm:text-[11px] text-cyan-200/80">Solve. Explore. Earn Rewards.</p>
          </div>
        </div>

        <div className="text-right">
          <div className="flex items-center justify-end gap-1 text-[9px] sm:text-[10px] font-bold text-cyan-300 uppercase">
            <span>Level 7</span>
            <span className="text-white/40">•</span>
            <span>72%</span>
          </div>
          <div className="w-20 sm:w-24 h-1.5 sm:h-2 bg-slate-800 rounded-full overflow-hidden mt-1">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" style={{ width: '72%' }}></div>
          </div>
        </div>
      </div>

      {/* Interactive Question Card */}
      <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
        <div className="flex items-center justify-between">
          <span className="text-[11px] sm:text-xs font-bold text-amber-300 uppercase tracking-widest">{currentQ.subject}</span>
          <span className="text-[10px] text-slate-400">Question {currentQIndex + 1} of {questions.length}</span>
        </div>

        <h5 className="text-sm sm:text-lg font-bold text-white leading-snug">
          {currentQ.question}
        </h5>

        {/* Options */}
        <div className="space-y-2 sm:space-y-2.5">
          {currentQ.options.map((opt, idx) => {
            const isChosen = selectedAnswer === idx;
            const isCorrect = idx === currentQ.correct;
            let btnClass = "bg-slate-900/80 border-white/15 text-slate-200 hover:border-cyan-400/50 hover:bg-slate-800/80";

            if (isAnswered) {
              if (isCorrect) {
                btnClass = "bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold shadow-lg shadow-emerald-500/20";
              } else if (isChosen) {
                btnClass = "bg-rose-500/20 border-rose-400 text-rose-300";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`w-full min-h-[44px] p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border text-left text-xs sm:text-sm font-semibold flex items-center justify-between transition-all cursor-pointer ${btnClass}`}
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] shrink-0 ${
                    isAnswered && isCorrect ? 'border-emerald-400 bg-emerald-400 text-slate-950 font-black' : 'border-white/30 text-white'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{opt}</span>
                </div>

                {isAnswered && isCorrect && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <button
            onClick={handleNext}
            className="btn-trendy w-full min-h-[44px] py-3 rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-sky-500/30 cursor-pointer animate-in fade-in"
          >
            <span>Next Challenge</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Bottom Status Bar (XP & Streaks - Exactly as Brightly) */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 sm:pt-4 border-t border-white/10 text-xs">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 font-bold text-[10px] sm:text-[11px]">
            <Zap className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-current" />
            <span>+120 XP</span>
          </div>

          <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 font-bold text-[11px]">
            <Award className="w-3.5 h-3.5" />
            <span>Merit Badge</span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 font-semibold text-slate-300">
          <div className="flex items-center gap-1 text-[11px]">
            <span className="text-slate-400">XP</span>
            <strong className="text-white font-mono text-xs">{xp.toLocaleString()}</strong>
          </div>

          <div className="flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 font-bold text-[10px] sm:text-[11px]">
            <Flame className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-current" />
            <span>3 Day Streak</span>
          </div>
        </div>
      </div>

    </div>
  );
};
