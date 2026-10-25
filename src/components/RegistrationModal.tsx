import React, { useState, useEffect } from 'react';
import { X, UserCheck, School, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'student' | 'school';
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ 
  isOpen, 
  onClose,
  initialType = 'student' 
}) => {
  const [regType, setRegType] = useState<'student' | 'school'>(initialType);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    guardian: '',
    standard: 'Class 5',
    schoolName: '',
    mobile: '',
    city: '',
    examMode: 'offline'
  });
  const [schoolFormData, setSchoolFormData] = useState({
    schoolName: '',
    coordinatorName: '',
    phone: '',
    city: '',
    studentCount: '150 - 300 Students'
  });

  useEffect(() => {
    if (isOpen) {
      if (initialType) setRegType(initialType);
      setSubmitted(false);
    }
  }, [isOpen, initialType]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="reg-modal-title"
    >
      <div 
        className="relative w-full max-w-xl bg-[#0a0f1d] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="RTHO Logo" className="w-9 h-9 rounded-xl object-cover border border-amber-400/50 shadow" />
            <div>
              <h3 id="reg-modal-title" className="text-base font-black text-white">Ray Talent Hunt Registration</h3>
              <p className="text-[11px] text-amber-300 font-semibold">Supported by Malviya Seva Sansthan</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close registration dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector */}
        {!submitted && (
          <div className="grid grid-cols-2 p-2 mx-6 mt-4 rounded-xl bg-slate-950 border border-slate-800">
            <button
              onClick={() => setRegType('student')}
              className={`py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                regType === 'student'
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Student Registration</span>
            </button>
            <button
              onClick={() => setRegType('school')}
              className={`py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                regType === 'school'
                  ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <School className="w-3.5 h-3.5" />
              <span>School Affiliation</span>
            </button>
          </div>
        )}

        {/* Body Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-white">
                  {regType === 'student' ? 'Registration Application Submitted!' : 'School Affiliation Request Received!'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto">
                  {regType === 'student' ? (
                    <>Thank you! The application for <strong>{formData.name || 'Candidate'}</strong> has been registered. An enrollment confirmation has been routed to <strong>{formData.mobile || 'your mobile'}</strong>.</>
                  ) : (
                    <>Thank you! Affiliation request for <strong>{schoolFormData.schoolName || 'Your School'}</strong> has been logged. Our regional coordinator will reach out to <strong>{schoolFormData.coordinatorName || 'the coordinator'}</strong> at <strong>{schoolFormData.phone || 'your phone'}</strong>.</>
                  )}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-left max-w-sm mx-auto text-xs space-y-2">
                <div className="flex justify-between text-slate-400">
                  <span>Reference ID:</span>
                  <span className="font-mono font-bold text-amber-400">
                    {regType === 'student' ? `RTHO-2026-APP${Math.floor(1000 + Math.random() * 9000)}` : `RTHO-SCH-${Math.floor(100 + Math.random() * 900)}`}
                  </span>
                </div>
                {regType === 'student' ? (
                  <div className="flex justify-between text-slate-400">
                    <span>Selected Standard:</span>
                    <span className="font-semibold text-white">{formData.standard}</span>
                  </div>
                ) : (
                  <div className="flex justify-between text-slate-400">
                    <span>Estimated Cohort:</span>
                    <span className="font-semibold text-white">{schoolFormData.studentCount}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-400">
                  <span>Coordinator Helpline:</span>
                  <span className="font-semibold text-cyan-300">+91 7236008947</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Mini Reward Visual Banner */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/80 border border-white/10">
                <img
                  src={regType === 'student' ? "/awards/award-laptop.jpg" : "/about/school-campus.jpg"}
                  alt="Registration"
                  className="w-12 h-12 rounded-xl object-cover border border-amber-400/40 shrink-0"
                />
                <div className="text-left text-xs">
                  <span className="font-extrabold text-white block">
                    {regType === 'student' ? 'Compete for Laptops, Tabs & Medals' : 'Institutional Examination Center Setup'}
                  </span>
                  <span className="text-[11px] text-slate-300 block">
                    {regType === 'student' ? 'Classes 1 to 10 • In-Assembly Felicitation' : 'Complete OMR Question Paper & Report Support'}
                  </span>
                </div>
              </div>

              {regType === 'student' ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Student Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Singh"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-[16px] sm:text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Current Class *</label>
                      <select
                        value={formData.standard}
                        onChange={(e) => setFormData({ ...formData, standard: e.target.value })}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-[16px] sm:text-xs focus:outline-none focus:border-amber-400"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(c => (
                          <option key={c} value={`Class ${c}`}>Class {c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">School Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. City Public School, Pratapgarh"
                      value={formData.schoolName}
                      onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-[16px] sm:text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">WhatsApp / Contact Phone *</label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        placeholder="10 digit mobile number"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-[16px] sm:text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">City / District *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Varanasi / Pratapgarh"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-[16px] sm:text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Preferred Exam Mode</label>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs text-slate-300">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="mode"
                          value="offline"
                          checked={formData.examMode === 'offline'}
                          onChange={() => setFormData({ ...formData, examMode: 'offline' })}
                          className="accent-amber-400"
                        />
                        <span>Offline in School (OMR Sheet)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="mode"
                          value="online"
                          checked={formData.examMode === 'online'}
                          onChange={() => setFormData({ ...formData, examMode: 'online' })}
                          className="accent-amber-400"
                        />
                        <span>Online Digital Mode</span>
                      </label>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-200">
                    Register your school as an official Ray Talent Hunt Olympiad examination & felicitation center.
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">School Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. St. Joseph's Convent School"
                      value={schoolFormData.schoolName}
                      onChange={(e) => setSchoolFormData({ ...schoolFormData, schoolName: e.target.value })}
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-[16px] sm:text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Principal / Coordinator Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Coordinator name"
                        value={schoolFormData.coordinatorName}
                        onChange={(e) => setSchoolFormData({ ...schoolFormData, coordinatorName: e.target.value })}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-[16px] sm:text-xs focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Official Mobile / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="Coordinator phone"
                        value={schoolFormData.phone}
                        onChange={(e) => setSchoolFormData({ ...schoolFormData, phone: e.target.value })}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-[16px] sm:text-xs focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">District / City *</label>
                      <input
                        type="text"
                        required
                        placeholder="School location"
                        value={schoolFormData.city}
                        onChange={(e) => setSchoolFormData({ ...schoolFormData, city: e.target.value })}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-[16px] sm:text-xs focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Estimated Participating Students</label>
                      <select 
                        value={schoolFormData.studentCount}
                        onChange={(e) => setSchoolFormData({ ...schoolFormData, studentCount: e.target.value })}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-[16px] sm:text-xs focus:outline-none focus:border-cyan-400"
                      >
                        <option>50 - 150 Students</option>
                        <option>150 - 300 Students</option>
                        <option>300 - 600 Students</option>
                        <option>600+ Students</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2 mt-4"
              >
                <span>Submit Registration Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Child Privacy & Data Protection Compliant • Malviya Seva Sansthan</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
