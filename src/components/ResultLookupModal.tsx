import React, { useState, useEffect } from 'react';
import { X, Search, CheckCircle, Download, AlertCircle, Share2, Printer } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ResultLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResultLookupModal: React.FC<ResultLookupModalProps> = ({ isOpen, onClose }) => {
  const [rollNumber, setRollNumber] = useState('');
  const [activeTab, setActiveTab] = useState<'result' | 'admit'>('result');
  const [isLoading, setIsLoading] = useState(false);
  const [statusToast, setStatusToast] = useState<string | null>(null);
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setStatusToast(msg);
    setTimeout(() => setStatusToast(null), 3500);
  };

  const executeLookup = (queryRoll: string) => {
    const cleanRoll = queryRoll.trim().toUpperCase();
    if (!cleanRoll) return;

    setIsLoading(true);
    setStatusToast(null);

    setTimeout(() => {
      setIsLoading(false);
      const isTopper = cleanRoll.includes('0101');
      const isSchoolTopper = cleanRoll.includes('1420');

      setResultData({
        name: isTopper ? "Priya Singh" : isSchoolTopper ? "Rohan Gupta" : "Aarav Sharma",
        roll: cleanRoll,
        standard: isTopper ? "Class 8" : isSchoolTopper ? "Class 5" : "Class 6",
        school: isTopper ? "St. Joseph's Convent School" : isSchoolTopper ? "Sunbeam Academy" : "City Public School",
        city: isTopper ? "Varanasi, UP" : isSchoolTopper ? "Jaunpur, UP" : "Pratapgarh, UP",
        mathScore: isTopper ? 15 : isSchoolTopper ? 13 : 14,
        scienceScore: isTopper ? 15 : isSchoolTopper ? 12 : 13,
        reasoningScore: isTopper ? 10 : isSchoolTopper ? 9 : 10,
        englishScore: isTopper ? 10 : isSchoolTopper ? 8 : 9,
        totalScore: isTopper ? 50 : isSchoolTopper ? 42 : 46,
        totalPossible: 50,
        percentile: isTopper ? "99.9%" : isSchoolTopper ? "94.2%" : "98.6%",
        nationalRank: isTopper ? 1 : isSchoolTopper ? 84 : 12,
        stateRank: isTopper ? 1 : isSchoolTopper ? 14 : 2,
        awardTier: isTopper
          ? "National Topper (Champion Grand Trophy & Scholarship)"
          : isSchoolTopper
          ? "School Topper (Campus Champion Medal & Merit Citation)"
          : "State Topper (State Champion Trophy & Gold Medal)",
        status: "Qualified with High Merit"
      });

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // fallback gracefully
      }
    }, 500);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    executeLookup(rollNumber);
  };

  const handleQuickPick = (sample: string) => {
    setRollNumber(sample);
    executeLookup(sample);
  };

  const handleDownloadCertificate = () => {
    if (!resultData) return;
    const certText = `========================================================================
RAY TALENT HUNT OLYMPIAD 2026
OFFICIAL DIGITAL MERIT CERTIFICATE & SCORECARD
Under the Auspices of Malviya Seva Sansthan
========================================================================

CERTIFICATE OF SCHOLASTIC EXCELLENCE
This is to certify that:

Candidate Name : ${resultData.name}
Roll Number    : ${resultData.roll}
Standard / Class: ${resultData.standard}
Institution    : ${resultData.school}, ${resultData.city}

Has successfully competed in the Ray Talent Hunt Olympiad and earned:
Award Level    : ${resultData.awardTier}
State Rank     : Rank #${resultData.stateRank}
National Rank  : Rank #${resultData.nationalRank}
Percentile     : ${resultData.percentile}
Score Breakdown:
  • Mathematics    : ${resultData.mathScore}/15
  • Science / GK   : ${resultData.scienceScore}/15
  • Mental Ability : ${resultData.reasoningScore}/10
  • English        : ${resultData.englishScore}/10
  • TOTAL SCORE    : ${resultData.totalScore}/50

AUTHENTICATION HASH: SHA256-RTHO-${resultData.roll}-MSS-${Date.now()}
VERIFICATION PORTAL: https://raytalenthunt.com/verify?id=${resultData.roll}
Authorized Signatory: Malviya Seva Sansthan Examination Board
========================================================================`;
    const blob = new Blob([certText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Ray_Talent_Hunt_Certificate_${resultData.roll}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Merit Certificate for ${resultData.name} downloaded!`);
  };

  const handleDownloadAdmitCard = () => {
    if (!resultData) return;
    const admitText = `========================================================================
RAY TALENT HUNT OLYMPIAD 2026
OFFICIAL EXAMINATION HALL TICKET / ADMIT CARD
Under the Auspices of Malviya Seva Sansthan
========================================================================

CANDIDATE INFORMATION:
Candidate Name   : ${resultData.name}
Roll Number      : ${resultData.roll}
Class / Standard : ${resultData.standard}
Reporting Center : ${resultData.school}, ${resultData.city}
Examination Mode : Offline OMR Center

EXAMINATION TIMINGS & GUIDELINES:
• Reporting Time : 09:30 AM IST
• Exam Duration  : 10:00 AM – 11:00 AM (60 Minutes)
• Candidate must bring:
  1. Printed Copy of this Admit Card
  2. School Photo Identity Card
  3. Blue or Black Ballpoint Pen
• Electronic items and calculators are strictly prohibited.

Coordinator Helpline: +91 7236008947 | +91 8448198656
Authorized Signatory: MSS Central Examination Controller
========================================================================`;
    const blob = new Blob([admitText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Ray_Talent_Hunt_Admit_Card_${resultData.roll}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Hall Ticket for ${resultData.roll} downloaded!`);
  };

  const handleShareScorecard = async () => {
    if (!resultData) return;
    const shareText = `Ray Talent Hunt Olympiad Result:\nCandidate: ${resultData.name} (${resultData.roll})\nHonors: ${resultData.awardTier}\nScore: ${resultData.totalScore}/50 (${resultData.percentile})\nVerify at: https://raytalenthunt.com/results?roll=${resultData.roll}`;
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareText);
        showToast("Scorecard details copied to clipboard!");
      } else {
        showToast("Scorecard ready: " + resultData.roll);
      }
    } catch {
      showToast("Scorecard ready: " + resultData.roll);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="result-portal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-[#0a0f1d] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="RTHO Logo" className="w-9 h-9 rounded-xl object-cover border border-amber-400/50 shadow" />
            <div>
              <h3 id="result-portal-title" className="text-base font-black text-white">Student Examination Portal</h3>
              <p className="text-[11px] text-amber-300 font-semibold">Ray Talent Hunt Olympiad (RTHO)</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close examination portal"
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
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6">
          
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
                  className="w-full min-h-[44px] px-4 py-3 pl-11 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-[16px] sm:text-sm font-mono focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 mt-2 text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 flex-wrap">
                  <span>Quick Test Samples:</span>
                  <button 
                    type="button" 
                    onClick={() => handleQuickPick('RTHO-2025-0842')} 
                    className="px-2 py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 text-amber-300 font-mono text-[10px] border border-slate-700 cursor-pointer"
                  >
                    State Rank #2
                  </button>
                  <button 
                    type="button" 
                    onClick={() => handleQuickPick('RTHO-2025-0101')} 
                    className="px-2 py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 text-cyan-300 font-mono text-[10px] border border-slate-700 cursor-pointer"
                  >
                    National Rank #1
                  </button>
                  <button 
                    type="button" 
                    onClick={() => handleQuickPick('RTHO-2025-1420')} 
                    className="px-2 py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 text-emerald-300 font-mono text-[10px] border border-slate-700 cursor-pointer"
                  >
                    School Topper
                  </button>
                </span>
                <span className="text-slate-500">Helpline: +91 7236008947</span>
              </div>
            </div>

            {statusToast && (
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 animate-in fade-in">
                <CheckCircle className="w-4 h-4" />
                <span>{statusToast}</span>
              </div>
            )}

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
                <div className="flex items-center gap-3">
                  <img
                    src="/avatars/student-1.jpg"
                    alt={resultData.name}
                    className="w-12 h-12 rounded-2xl object-cover border border-amber-400/40 shadow shrink-0"
                  />
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold mb-1">
                      <CheckCircle className="w-3 h-3" />
                      <span>{resultData.status}</span>
                    </div>
                    <h4 className="text-xl font-extrabold text-white">{resultData.name}</h4>
                    <p className="text-xs text-slate-400">{resultData.standard} • {resultData.school}, {resultData.city}</p>
                  </div>
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
                <img
                  src="/awards/award-tablet.jpg"
                  alt="State Award Package"
                  className="w-12 h-12 rounded-xl object-cover border border-amber-400/40 shrink-0"
                />
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
                  onClick={handleDownloadCertificate}
                  className="flex-1 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download E-Certificate (PDF)</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors cursor-pointer"
                  title="Print Scorecard"
                  aria-label="Print Scorecard"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>

                <button
                  onClick={handleShareScorecard}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors cursor-pointer"
                  title="Share Scorecard"
                  aria-label="Share Scorecard"
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
                onClick={handleDownloadAdmitCard}
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Download Hall Ticket (PDF)
              </button>
            </div>
          )}

          {/* Official Verification Notice */}
          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>
              All digital scorecards and certificates issued by Ray Talent Hunt Olympiad are signed and protected with an encrypted verification code for school and academic merit audits.
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
