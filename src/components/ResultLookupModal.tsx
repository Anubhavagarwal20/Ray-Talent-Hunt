import React, { useState } from 'react';
import { X, Search, Trophy, CheckCircle, Download, AlertCircle, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ResultLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResultLookupModal: React.FC<ResultLookupModalProps> = ({ isOpen, onClose }) => {
  const [rollNumber, setRollNumber] = useState('');
  const [activeTab, setActiveTab] = useState<'result' | 'admit'>('result');
  const [isLoading, setIsLoading] = useState(false);
  const [resultData, setResultData] = useState<{
    name: string;
    roll: string;
    standard: string;
    school: string;
    city: string;
    mathScore: number;
    scienceScore: number;
    reasoningScore: number;
    englishScore: number;
    totalScore: number;
    totalPossible: number;
    percentile: string;
    nationalRank: number;
    stateRank: number;
    awardTier: string;
    status: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rollNumber.trim()) return;

    setIsLoading(true);

    // Simulate search with realistic result
    setTimeout(() => {
      setIsLoading(false);
      setResultData({
        name: "Aarav Sharma",
        roll: rollNumber.toUpperCase(),
        standard: "Class 6",
        school: "City Public School",
        city: "Pratapgarh, UP",
        mathScore: 14,
        scienceScore: 13,
        reasoningScore: 10,
        englishScore: 9,
        totalScore: 46,
        totalPossible: 50,
        percentile: "98.6%",
        nationalRank: 12,
        stateRank: 2,
        awardTier: "State Topper (Gold Medal & Learning Tablet)",
        status: "Qualified with High Merit"
      });

      // Trigger Confetti!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // fallback gracefully
      }
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0a0f1d] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="RTHO Logo" className="w-9 h-9 rounded-xl object-cover border border-amber-400/50 shadow" />
            <div>
              <h3 className="text-base font-black text-white">Student Examination Portal</h3>
              <p className="text-[11px] text-amber-300 font-semibold">Ray Talent Hunt Olympiad (RTHO)</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-800 bg-slate-950/40 px-6 pt-3">
          <button
            onClick={() => { setActiveTab('result'); setResultData(null); }}
            className={`pb-3 px-4 text-xs font-bold transition-all border-b-2 cursor-pointer ${
              activeTab === 'result'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Check Examination Result & Scorecard
          </button>
          <button
            onClick={() => { setActiveTab('admit'); setResultData(null); }}
            className={`pb-3 px-4 text-xs font-bold transition-all border-b-2 cursor-pointer ${
              activeTab === 'admit'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Download Hall Ticket / Admit Card
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Input Form */}
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Enter Roll Number or Registered Mobile Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. RTHO-2025-0842 or 9876543210"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                  className="w-full px-4 py-3 pl-11 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm font-mono focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
              <div className="flex items-center justify-between mt-1.5 text-[11px] text-slate-500">
                <span>Try sample code: <code className="text-amber-400 font-bold cursor-pointer" onClick={() => setRollNumber('RTHO-2025-0842')}>RTHO-2025-0842</code></span>
                <span>Helpline: +91 7236008947</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <span>Fetching Examination Records...</span>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>{activeTab === 'result' ? 'View Official Scorecard' : 'Download Hall Ticket'}</span>
                </>
              )}
            </button>
          </form>

          {/* Results Display */}
          {resultData && activeTab === 'result' && (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-400/40 relative overflow-hidden space-y-5 animate-in zoom-in-95 duration-200">
              
              {/* Confetti Banner */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold mb-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>{resultData.status}</span>
                  </div>
                  <h4 className="text-xl font-extrabold text-white">{resultData.name}</h4>
                  <p className="text-xs text-slate-400">{resultData.standard} • {resultData.school}, {resultData.city}</p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Total Score</span>
                  <span className="text-2xl font-black text-amber-400">{resultData.totalScore} / {resultData.totalPossible}</span>
                </div>
              </div>

              {/* Subject Breakdown */}
              <div>
                <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Subject-Wise Performance</h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Mathematics</span>
                    <span className="text-sm font-bold text-cyan-300">{resultData.mathScore}/15</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Science</span>
                    <span className="text-sm font-bold text-cyan-300">{resultData.scienceScore}/15</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Mental Ability</span>
                    <span className="text-sm font-bold text-cyan-300">{resultData.reasoningScore}/10</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">English</span>
                    <span className="text-sm font-bold text-cyan-300">{resultData.englishScore}/10</span>
                  </div>
                </div>
              </div>

              {/* Rank & Award Recognition */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-start gap-3">
                <Trophy className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-amber-300 block">Award Recognition:</span>
                  <span className="text-sm font-extrabold text-white">{resultData.awardTier}</span>
                  <p className="text-[11px] text-slate-300 mt-1">
                    State Rank: <strong className="text-white">#{resultData.stateRank}</strong> | National Percentile: <strong className="text-white">{resultData.percentile}</strong>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => alert(`Downloading Verifiable Merit Certificate for ${resultData.name} (Roll: ${resultData.roll}) with QR seal.`)}
                  className="flex-1 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download E-Certificate (PDF)</span>
                </button>

                <button
                  onClick={() => alert(`Scorecard shared to clipboard! Roll Number: ${resultData.roll}`)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
              </div>

            </div>
          )}

          {/* Admit Card Download Feedback */}
          {resultData && activeTab === 'admit' && (
            <div className="p-6 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 text-center space-y-4 animate-in zoom-in-95">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center mx-auto">
                <Download className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Admit Card Ready for Download</h4>
                <p className="text-xs text-slate-400 mt-1">Candidate: {resultData.name} ({resultData.roll})</p>
                <p className="text-xs text-cyan-300 font-mono mt-0.5">Exam Center: {resultData.school}, {resultData.city}</p>
              </div>
              <button
                onClick={() => alert(`Admit card PDF downloaded for ${resultData.roll}. Please bring printed copy along with school ID card to examination center.`)}
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
              >
                Download Hall Ticket (PDF)
              </button>
            </div>
          )}

          {/* Official Verification Notice */}
          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>
              All digital scorecards and certificates issued by Ray Talent Hunt Olympiad are signed and protected with an encrypted verification code for school and scholarship audits.
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
