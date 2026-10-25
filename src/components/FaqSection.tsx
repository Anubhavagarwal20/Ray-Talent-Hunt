import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Which classes is Ray Talent Hunt for?",
      a: "The Olympiad is designed for students in Classes 1 through 10 from any recognized board (CBSE, ICSE, UP Board, and State Boards)."
    },
    {
      q: "Which subjects and learning areas are covered?",
      a: "The three core learning areas are General Knowledge, Mathematics and English, emphasizing conceptual understanding, problem-solving, and critical thinking."
    },
    {
      q: "What is the role of Malviya Seva Sansthan?",
      a: "Ray Talent Hunt Olympiad operates under the esteemed support and patronage of Malviya Seva Sansthan—a registered welfare organization dedicated to youth development, quality education access, and scholarship opportunities."
    },
    {
      q: "What are the 5 tiers of scholarships and awards?",
      a: "Awards are categorized into: 1. National Topper (Laptops, Grand Cash Scholarships, Champion Trophies), 2. State Topper (Learning Tablets, State Grants, Gold Medals), 3. Zone Topper (Smart Fitness Watches, Silver Medals), 4. District Topper (STEM Educational Kits, Bronze Medals), and 5. School Topper (Class Champion Medals & School Honors). Every participant receiving a rank gets an official Certificate of Merit."
    },
    {
      q: "Can schools learn more about participation and exam centers?",
      a: "Yes. Schools can submit the 'School Center' form on this website or call our support line at +91 7236008947. We provide printed OMR booklets, handle logistics, and organize in-person award ceremonies at your morning school assembly."
    },
    {
      q: "Where should families look for official updates?",
      a: "Families can follow the official Instagram profile (@raytalenthuntolympiad) and check results directly on this portal using their roll number."
    }
  ];

  return (
    <section id="faq" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Head (Exact from d:\index.html line 215) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 text-cyan-300 text-xs font-extrabold uppercase tracking-widest mb-3">
              <span className="w-5 h-[1px] bg-cyan-400"></span>
              <span>Quick answers</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.08] mb-4">
              Clear information.<br />
              <span className="bg-gradient-to-r from-white via-cyan-200 to-sky-400 bg-clip-text text-transparent">
                More confident families.
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
              Here are the essentials confirmed for the Ray Talent Hunt Olympiad. For any specific queries, our helpline is always open.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300">
              Helpline: <strong className="text-white">+91 7236008947</strong> / <strong className="text-white">+91 8448198656</strong>
            </div>
          </div>

          {/* Accordion (from d:\index.html line 215) */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border border-white/10"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition-transform duration-200 shrink-0 ${
                      openIndex === idx ? 'rotate-180 text-amber-300' : ''
                    }`}
                  />
                </button>

                {openIndex === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-3 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
