import React, { useState } from 'react';
import { Download, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const ExamInfoSection: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>('3-5');
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const classGroups: Record<string, {
    title: string;
    classes: string;
    description: string;
    gkTopics: string[];
    mathTopics: string[];
    englishTopics: string[];
    sampleQuestions: { q: string; opts: string[]; ans: string; expl: string }[];
  }> = {
    '1-2': {
      title: 'Junior Explorers',
      classes: 'Classes 1 & 2',
      description: 'Foundational literacy, number sense, observational science, and picture-based logical patterns.',
      gkTopics: ['Plants & Animals in Nature', 'Our Body & Good Habits', 'Weather, Air & Water Basics', 'Important Places & Festivals'],
      mathTopics: ['Number Recognition (1-100)', 'Basic Addition & Subtraction', 'Shapes & Spatial Understanding', 'Measurement & Time Basics'],
      englishTopics: ['Alphabetical Order & Phonics', 'Nouns, Verbs & Adjectives', 'Picture Story Comprehension', 'Spelling & Vocabulary'],
      sampleQuestions: [
        { q: "Which animal is known as the 'Ship of the Desert'?", opts: ["Horse", "Camel", "Elephant", "Lion"], ans: "Camel", expl: "Camels can survive long periods without water in dry deserts." },
        { q: "What is 15 + 23?", opts: ["36", "38", "40", "42"], ans: "38", expl: "15 + 23 = 38." },
        { q: "Which word is a NOUN?", opts: ["Run", "Quickly", "Teacher", "Blue"], ans: "Teacher", expl: "A teacher is a person, hence a noun." }
      ]
    },
    '3-5': {
      title: 'Young Achievers',
      classes: 'Classes 3, 4 & 5',
      description: 'Analytical math, conceptual science, reasoning, and grammar aligned with NCERT/CBSE curriculum.',
      gkTopics: ['Ecosystems & Wildlife', 'Solar System & Earth Geography', 'Indian Heritage & Famous Leaders', 'Everyday Inventions & Discoveries'],
      mathTopics: ['4-to-6 Digit Operations', 'Fractions & Decimals Intro', 'Perimeter & Area Calculations', 'Logical Patterns & Data Handling'],
      englishTopics: ['Tenses & Prepositions', 'Synonyms & Antonyms', 'Reading Comprehension', 'Sentence Correction & Syntax'],
      sampleQuestions: [
        { q: "Which planet is known as the 'Red Planet' in our solar system?", opts: ["Venus", "Mars", "Jupiter", "Saturn"], ans: "Mars", expl: "Mars appears reddish due to iron oxide (rust) on its surface." },
        { q: "Find the perimeter of a rectangle with length 12 cm and breadth 8 cm.", opts: ["20 cm", "40 cm", "96 cm", "48 cm"], ans: "40 cm", expl: "Perimeter = 2 × (12 + 8) = 2 × 20 = 40 cm." },
        { q: "Select the correct antonym of 'ANCIENT':", opts: ["Historic", "Modern", "Classic", "Antique"], ans: "Modern", expl: "Modern means recent or current, which is opposite to ancient." }
      ]
    },
    '6-8': {
      title: 'Middle Champions',
      classes: 'Classes 6, 7 & 8',
      description: 'Rigorous problem-solving, science, mental ability, and abstract logical deduction.',
      gkTopics: ['General Science & Environment', 'World Geography & Constitution', 'Current Affairs & Sports Honors', 'Scientific Advances & Space'],
      mathTopics: ['Integers, Rational Numbers & Exponents', 'Algebraic Expressions & Equations', 'Geometry, Triangles & Quadrilaterals', 'Ratios, Percentages & Profit-Loss'],
      englishTopics: ['Active-Passive Voice', 'Direct-Indirect Speech', 'Advanced Vocabulary & Idioms', 'Analytical Comprehension Passages'],
      sampleQuestions: [
        { q: "Which gas is released during photosynthesis by green plants?", opts: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Argon"], ans: "Oxygen", expl: "Plants use sunlight and carbon dioxide to produce glucose and release oxygen." },
        { q: "If 3x + 15 = 45, what is the value of x?", opts: ["8", "10", "12", "15"], ans: "10", expl: "3x = 45 - 15 = 30, so x = 30 / 3 = 10." },
        { q: "Convert to Passive: 'The chef cooked a delicious banquet.'", opts: ["A delicious banquet is cooked by the chef.", "A delicious banquet was cooked by the chef.", "A delicious banquet has been cooked.", "The banquet was being cooked."], ans: "A delicious banquet was cooked by the chef.", expl: "Simple past active becomes 'was cooked' in passive voice." }
      ]
    },
    '9-10': {
      title: 'Senior Scholars',
      classes: 'Classes 9 & 10',
      description: 'Pre-competitive Olympiad standard testing high-order thinking (HOTS) and analytical aptitude.',
      gkTopics: ['Advanced General Science', 'Modern World History & Polity', 'Economic Awareness & Technology', 'Critical Reasoning & Logical Puzzles'],
      mathTopics: ['Polynomials & Quadratic Equations', 'Trigonometry & Coordinate Geometry', 'Surface Areas, Volumes & Statistics', 'Arithmetic Progressions & Probability'],
      englishTopics: ['Advanced Syntax & Clauses', 'Analytical Essay & Reading Passages', 'Contextual Vocabulary', 'Error Spotting & Cloze Test'],
      sampleQuestions: [
        { q: "Which part of the Indian Constitution is referred to as the 'Heart and Soul' by Dr. B.R. Ambedkar?", opts: ["Preamble", "Right to Equality", "Right to Constitutional Remedies (Art 32)", "Directive Principles"], ans: "Right to Constitutional Remedies (Art 32)", expl: "Article 32 allows citizens to move the Supreme Court for enforcement of Fundamental Rights." },
        { q: "If roots of x² - 7x + 12 = 0 are p and q, what is p² + q²?", opts: ["25", "37", "49", "13"], ans: "25", expl: "Roots are 3 and 4 (since 3×4=12 and 3+4=7). p² + q² = 9 + 16 = 25." },
        { q: "Identify the figure of speech: 'The moonlight danced upon the whispering waves.'", opts: ["Metaphor", "Personification", "Hyperbole", "Simile"], ans: "Personification", expl: "Giving human traits (dancing, whispering) to non-human objects." }
      ]
    }
  };

  const current = classGroups[selectedGroup];

  const handleDownloadPaper = () => {
    const textContent = `========================================================================
RAY TALENT HUNT OLYMPIAD 2026-27
OFFICIAL MODEL QUESTION PAPER & SYLLABUS BLUEPRINT
Target Group: ${current.classes} (${current.title})
Under the Patronage of Malviya Seva Sansthan
========================================================================

GENERAL INSTRUCTIONS FOR CANDIDATES:
1. Duration of Examination: 60 Minutes.
2. Total Questions: 50 Objective Type Questions (MCQs).
3. Marking Scheme: Each question carries 1 Mark. No negative marking.
4. Candidates must use Blue or Black ballpoint pen to fill bubbles on OMR.
5. All students with valid roll numbers receive a Diagnostic SPR & Certificate.

------------------------------------------------------------------------
SECTION 1: GENERAL KNOWLEDGE & SCIENTIFIC AWARENESS (20 Marks)
Topics: ${current.gkTopics.join(', ')}
Sample Question:
Q: ${current.sampleQuestions[0].q}
Options: ${current.sampleQuestions[0].opts.join(' | ')}
Answer: ${current.sampleQuestions[0].ans} (${current.sampleQuestions[0].expl})

------------------------------------------------------------------------
SECTION 2: MATHEMATICS & LOGICAL REASONING (20 Marks)
Topics: ${current.mathTopics.join(', ')}
Sample Question:
Q: ${current.sampleQuestions[1].q}
Options: ${current.sampleQuestions[1].opts.join(' | ')}
Answer: ${current.sampleQuestions[1].ans} (${current.sampleQuestions[1].expl})

------------------------------------------------------------------------
SECTION 3: ENGLISH & VERBAL PROFICIENCY (10 Marks)
Topics: ${current.englishTopics.join(', ')}
Sample Question:
Q: ${current.sampleQuestions[2].q}
Options: ${current.sampleQuestions[2].opts.join(' | ')}
Answer: ${current.sampleQuestions[2].ans} (${current.sampleQuestions[2].expl})

========================================================================
AWARD TIERS ELIGIBILITY FOR THIS COHORT:
• National Topper: Grand Champion Trophy & Educational Grant
• State Topper: State Merit Trophy & Pure Golden Finish Medal
• Zone Topper: Zonal Distinction Trophy & Silver Medal
• District Topper: District Pride Trophy & Bronze Medal
• School Topper: Campus Champion Medal & Certificate of Excellence

Helpline: +91 7236008947 | School Desk: +91 8448198656
Official Website: https://raytalenthunt.com
Instagram: @raytalenthuntolympiad
========================================================================`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Ray_Talent_Hunt_Model_Paper_${current.classes.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadToast(`Model Paper for ${current.classes} downloaded successfully!`);
    setTimeout(() => setDownloadToast(null), 4000);
  };

  return (
    <section id="subjects" className="py-14 sm:py-24 relative z-10">
      {/* Anchor for #olympiad navigation links */}
      <div id="olympiad" className="-mt-24 pt-24 invisible pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* 1. THE LEARNING AREAS (Exact Copy from d:\index.html)     */}
        {/* ========================================================= */}
        <div className="max-w-3xl mb-10 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-cyan-300 text-xs font-extrabold uppercase tracking-widest mb-3">
            <span className="w-5 h-[1px] bg-cyan-400"></span>
            <span>The Learning Areas</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.08] mb-3 sm:mb-4">
            Three ways to explore.<br />
            <span className="bg-gradient-to-r from-white via-cyan-200 to-sky-400 bg-clip-text text-transparent">
              A world of possibilities.
            </span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-base">
            Ray Talent Hunt is designed around broad, school-friendly learning areas for students in Classes 1–10.
          </p>
        </div>

        {/* 3 Core Subject Cards (from d:\index.html line 185) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Subject 01 */}
          <TiltCard className="h-full">
            <div className="glass-card p-6 sm:p-7 rounded-3xl h-full flex flex-col justify-between border border-white/15 group">
              <div>
                <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-5 border border-white/15 shadow-md">
                  <img
                    src="/about/students-classroom.jpg"
                    alt="General Knowledge & Discovery"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[10px] font-extrabold tracking-widest text-cyan-300">
                    SUBJECT 01
                  </span>
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 text-xs font-bold text-amber-300">
                    <span>🌍</span>
                    <span>General Knowledge</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-black text-white mb-2">General Knowledge</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Encourage curiosity about people, places, science, culture and the world around us.
                </p>
              </div>
            </div>
          </TiltCard>

          {/* Subject 02 */}
          <TiltCard className="h-full">
            <div className="glass-card p-6 sm:p-7 rounded-3xl h-full flex flex-col justify-between border border-white/15 group">
              <div>
                <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-5 border border-white/15 shadow-md">
                  <img
                    src="/awards/award-stem-kit.jpg"
                    alt="Mathematics & Logic"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[10px] font-extrabold tracking-widest text-cyan-300">
                    SUBJECT 02
                  </span>
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 text-xs font-bold text-cyan-300">
                    <span>➗</span>
                    <span>Mathematics</span>
                  </div>
                </div>

                <h3 className="text-xl font-black text-white mb-2">Mathematics</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Strengthen number sense, logical reasoning and practical problem-solving.
                </p>
              </div>
            </div>
          </TiltCard>

          {/* Subject 03 */}
          <TiltCard className="h-full">
            <div className="glass-card p-6 sm:p-7 rounded-3xl h-full flex flex-col justify-between border border-white/15 group">
              <div>
                <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-5 border border-white/15 shadow-md">
                  <img
                    src="/gallery/ceremony-spr.jpg"
                    alt="English & Language"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[10px] font-extrabold tracking-widest text-cyan-300">
                    SUBJECT 03
                  </span>
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 text-xs font-bold text-sky-300">
                    <span>🔤</span>
                    <span>English</span>
                  </div>
                </div>

                <h3 className="text-xl font-black text-white mb-2">English</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Build confidence with vocabulary, comprehension and language skills.
                </p>
              </div>
            </div>
          </TiltCard>

        </div>

        {/* ========================================================= */}
        {/* 2. CLASS-WISE SYLLABUS BREAKDOWN SELECTOR                */}
        {/* ========================================================= */}
        <div className="p-5 sm:p-8 md:p-12 rounded-3xl bg-slate-900/80 border border-white/15 mb-14 sm:mb-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6 sm:mb-8 text-left">
            <div>
              <span className="text-[11px] sm:text-xs font-bold text-cyan-300 uppercase tracking-widest">
                Interactive Syllabus Explorer
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                {current.classes} ({current.title})
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">{current.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {Object.entries(classGroups).map(([key, group]) => (
                <button
                  key={key}
                  onClick={() => setSelectedGroup(key)}
                  className={`btn-trendy px-3.5 sm:px-4 py-2 min-h-[40px] rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedGroup === key
                      ? 'bg-cyan-400 text-slate-950 shadow-md font-black'
                      : 'bg-white/10 text-slate-300 hover:text-white border border-white/10'
                  }`}
                >
                  {group.classes}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-white/10">
              <span className="text-xs font-bold text-amber-300 block mb-3">🌍 General Knowledge</span>
              <ul className="space-y-2 text-xs text-slate-300">
                {current.gkTopics.map((topic, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-white/10">
              <span className="text-xs font-bold text-cyan-300 block mb-3">➗ Mathematics</span>
              <ul className="space-y-2 text-xs text-slate-300">
                {current.mathTopics.map((topic, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-white/10">
              <span className="text-xs font-bold text-sky-300 block mb-3">🔤 English</span>
              <ul className="space-y-2 text-xs text-slate-300">
                {current.englishTopics.map((topic, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <span className="text-xs text-slate-400">Class-wise syllabus aligned strictly with NCERT & CBSE guidelines.</span>
              {downloadToast && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-semibold animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{downloadToast}</span>
                </span>
              )}
            </div>
            <button 
              onClick={handleDownloadPaper}
              className="btn-trendy w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download Model Paper PDF</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. WHY LEARNING CHALLENGES MATTER (from d:\index.html line 193) */}
        {/* ========================================================= */}
        <div className="max-w-3xl mb-10 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-cyan-300 text-xs font-extrabold uppercase tracking-widest mb-3">
            <span className="w-5 h-[1px] bg-cyan-400"></span>
            <span>Why learning challenges matter</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.08] mb-3 sm:mb-4">
            Progress starts with<br />
            <span className="bg-gradient-to-r from-white via-cyan-200 to-sky-400 bg-clip-text text-transparent">
              a curious question.
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base">
            A learning challenge can help students explore strengths, practise key skills and feel more confident about what they are learning.
          </p>
        </div>

        {/* 4 Feature Cards (from d:\index.html line 194) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="glass-card p-6 rounded-3xl relative overflow-hidden border border-white/15">
            <span className="absolute top-4 right-4 text-xs font-bold text-slate-500">01</span>
            <div className="w-12 h-12 rounded-2xl bg-[#182746] border border-white/10 flex items-center justify-center text-xl mb-6 text-cyan-300">
              🧩
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Think independently</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Encourage reasoning, careful thinking and a willingness to try new approaches.
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl relative overflow-hidden border border-white/15">
            <span className="absolute top-4 right-4 text-xs font-bold text-slate-500">02</span>
            <div className="w-12 h-12 rounded-2xl bg-[#182746] border border-white/10 flex items-center justify-center text-xl mb-6 text-cyan-300">
              📚
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Build foundations</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Practise broad academic skills across GK, Mathematics and English.
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl relative overflow-hidden border border-white/15">
            <span className="absolute top-4 right-4 text-xs font-bold text-slate-500">03</span>
            <div className="w-12 h-12 rounded-2xl bg-[#182746] border border-white/10 flex items-center justify-center text-xl mb-6 text-cyan-300">
              🌱
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Grow confidence</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Help learners recognise what they know and where they can keep improving.
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl relative overflow-hidden border border-white/15">
            <span className="absolute top-4 right-4 text-xs font-bold text-slate-500">04</span>
            <div className="w-12 h-12 rounded-2xl bg-[#182746] border border-white/10 flex items-center justify-center text-xl mb-6 text-cyan-300">
              🏫
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Involve schools</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Give school teams a clear place to explore the Olympiad and ask questions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
