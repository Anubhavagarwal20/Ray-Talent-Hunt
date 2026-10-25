import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who is eligible to participate in the Ray Talent Hunt Olympiad?",
      a: "The Olympiad is open to students studying in Class 1 through Class 10 from any recognized educational board (CBSE, ICSE, UP Board, and other state boards). Students can participate either through their enrolled school or via direct registration on this portal."
    },
    {
      q: "What is the organization structure and role of Malviya Seva Sansthan?",
      a: "Ray Talent Hunt Olympiad operates under the esteemed support and patronage of Malviya Seva Sansthan—a registered welfare organization dedicated to youth development, quality education access, and scholarship opportunities across India."
    },
    {
      q: "What subjects and examination format are included?",
      a: "The test consists of 50 Multiple Choice Questions (MCQs) administered over 60 minutes across 4 core sections: Mathematics (15 Qs), Science (15 Qs), Mental Ability & Logical Reasoning (10 Qs), and English Comprehension (10 Qs). The syllabus is strictly aligned with the NCERT curriculum of each corresponding class."
    },
    {
      q: "What are the 5 tiers of awards and scholarships?",
      a: "Awards are categorized into: 1. National Topper (Laptops, Grand Scholarships, Champion Trophies), 2. State Topper (Learning Tablets, State Grants, Gold Medals), 3. Zone Topper (Smart Fitness Watches, Silver Medals), 4. District Topper (STEM Educational Kits, Bronze Medals), and 5. School Topper (Class Champion Medals & School Honors). Every participant receiving a rank gets an official Certificate of Merit."
    },
    {
      q: "How are the examinations conducted?",
      a: "For participating partner schools, examinations are conducted offline within the school premises using standard OMR answer sheets during school hours. Independent individual applicants can opt for the secure online testing portal."
    },
    {
      q: "How can I check my Olympiad result and download my admit card?",
      a: "You can click the 'Check Result / Admit Card' button in the navigation bar and enter your registered Roll Number or 10-digit mobile number. You can instantly view your sectional scorecard, rank breakdown, and download your verifiable E-Certificate."
    },
    {
      q: "How can a school become a registered examination center?",
      a: "School Principals or Coordinators can submit the 'School Affiliation' form on this website or call our support lines at +91 7236008947 / +91 8448198656. We coordinate all logistics, student kits, and organize in-person award ceremonies at your campus."
    }
  ];

  return (
    <section id="faq" className="py-20 relative bg-[#060913]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Everything you need to know about Ray Talent Hunt Olympiad, eligibility, exams, and awards.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                    openIndex === idx ? 'rotate-180 text-cyan-400' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3 animate-in fade-in duration-150">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
