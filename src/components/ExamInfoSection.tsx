import React, { useState } from 'react';
import { BookOpen, Brain, Atom, Calculator, Clock, HelpCircle, FileText, CheckCircle, Download, ArrowUpRight } from 'lucide-react';

export const ExamInfoSection: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>('3-5');

  const classGroups: Record<string, {
    title: string;
    classes: string;
    description: string;
    mathTopics: string[];
    scienceTopics: string[];
    reasoningTopics: string[];
    englishTopics: string[];
  }> = {
    '1-2': {
      title: 'Junior Explorers',
      classes: 'Classes 1 & 2',
      description: 'Foundational numeracy, observational science, and picture-based logical patterns.',
      mathTopics: ['Number Recognition & Place Values', 'Basic Addition & Subtraction', 'Shapes & Spatial Understanding', 'Measurement & Time Basics'],
      scienceTopics: ['Plants & Animals in Our Surroundings', 'Our Body & Good Habits', 'Weather, Air & Water Basics', 'Everyday Objects & Materials'],
      reasoningTopics: ['Picture Patterns & Sequences', 'Odd One Out Challenges', 'Shape Matching & Grouping', 'Simple Direction Sense'],
      englishTopics: ['Alphabetical Order & Phonics', 'Nouns, Verbs & Adjectives', 'Picture Story Comprehension', 'Spelling & Vocabulary']
    },
    '3-5': {
      title: 'Young Achievers',
      classes: 'Classes 3, 4 & 5',
      description: 'Analytical math, conceptual science, reasoning, and grammar aligned with NCERT/CBSE curriculum.',
      mathTopics: ['4-to-6 Digit Arithmetic Operations', 'Fractions & Decimals Introduction', 'Perimeter & Area Calculations', 'Data Handling & Pictographs'],
      scienceTopics: ['Living vs Non-Living Ecosystems', 'Force, Energy & Simple Machines', 'Human Organ Systems & Nutrition', 'Earth, Solar System & Matter'],
      reasoningTopics: ['Number & Letter Series Logic', 'Coding-Decoding Puzzles', 'Analogy & Visual Classification', 'Mirror Images & Paper Folding'],
      englishTopics: ['Tenses & Prepositions', 'Synonyms & Antonyms', 'Critical Reading Passages', 'Sentence Correction & Syntax']
    },
    '6-8': {
      title: 'Middle Champions',
      classes: 'Classes 6, 7 & 8',
      description: 'Rigorous problem-solving, physics, chemistry, biology, and abstract logical deduction.',
      mathTopics: ['Integers, Rational Numbers & Exponents', 'Algebraic Expressions & Simple Equations', 'Geometry, Triangles & Quadrilaterals', 'Ratios, Percentages & Profit-Loss'],
      scienceTopics: ['Motion, Light, Heat & Electricity', 'Acids, Bases, Salts & Chemical Changes', 'Cell Structure & Plant Physiology', 'Conservation, Forests & Ecology'],
      reasoningTopics: ['Blood Relations & Family Tree', 'Direction Sense & Seating Arrangement', 'Venn Diagrams & Syllogism', 'Cubes, Dice & Spatial Logic'],
      englishTopics: ['Active-Passive Voice', 'Direct-Indirect Speech', 'Advanced Vocabulary & Idioms', 'Analytical Comprehension Passages']
    },
    '9-10': {
      title: 'Senior Scholars',
      classes: 'Classes 9 & 10',
      description: 'Pre-competitive Olympiad standard testing high-order thinking (HOTS), advanced STEM, and analytical aptitude.',
      mathTopics: ['Polynomials & Quadratic Equations', 'Trigonometry & Coordinate Geometry', 'Surface Areas, Volumes & Statistics', 'Arithmetic Progressions & Probability'],
      scienceTopics: ['Laws of Motion & Universal Gravitation', 'Atomic Structure & Periodic Classification', 'Life Processes, Heredity & Evolution', 'Magnetic Effects of Electric Current'],
      reasoningTopics: ['Statement & Assumptions / Arguments', 'Analytical & Mathematical Puzzles', 'Non-Verbal Abstract Matrices', 'Critical Deductive Reasoning'],
      englishTopics: ['Advanced Grammar & Syntax Rules', 'Analytical Reading Comprehension', 'Contextual Vocabulary', 'Error Spotting & Cloze Test']
    }
  };

  const current = classGroups[selectedGroup];

  return (
    <section id="olympiad" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Inspired by Popular Subjects in SkillNest) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 animate-float">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Syllabus & Exam Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            POPULAR SUBJECTS & <br />
            <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-amber-300 bg-clip-text text-transparent">
              EXAMINATION PATTERN
            </span>
          </h2>

          <p className="text-cyan-100/80 text-sm sm:text-base">
            Skill & critical-thinking focused curriculum mapped directly to NCERT, CBSE, and State Board frameworks.
          </p>
        </div>

        {/* 4 Quick Stat Pill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="glass-card p-6 rounded-3xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-white">60 Mins</span>
            <span className="text-xs text-cyan-200/80 mt-1 font-medium">Exam Duration</span>
          </div>

          <div className="glass-card p-6 rounded-3xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center mb-3">
              <HelpCircle className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-white">50 MCQs</span>
            <span className="text-xs text-cyan-200/80 mt-1 font-medium">Objective Format</span>
          </div>

          <div className="glass-card p-6 rounded-3xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-sky-400/20 text-sky-300 flex items-center justify-center mb-3">
              <Brain className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-white">4 Sections</span>
            <span className="text-xs text-cyan-200/80 mt-1 font-medium">Math, Science, Logic, English</span>
          </div>

          <div className="glass-card p-6 rounded-3xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center mb-3">
              <FileText className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-white">Dual Mode</span>
            <span className="text-xs text-cyan-200/80 mt-1 font-medium">School OMR & Online</span>
          </div>
        </div>

        {/* Class Group Pill Filter Tabs (Directly from SkillNest reference!) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {Object.entries(classGroups).map(([key, group]) => (
            <button
              key={key}
              onClick={() => setSelectedGroup(key)}
              className={`btn-trendy px-6 py-3 rounded-full text-xs sm:text-sm font-bold cursor-pointer transition-all flex items-center gap-2 ${
                selectedGroup === key
                  ? 'bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-xl shadow-sky-500/40 border border-white/40 scale-105'
                  : 'bg-slate-900/60 backdrop-blur-md text-slate-300 hover:text-white border border-white/15'
              }`}
            >
              <span>{group.classes}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${selectedGroup === key ? 'bg-white/25 text-white' : 'bg-slate-800 text-slate-400'}`}>
                {group.title}
              </span>
            </button>
          ))}
        </div>

        {/* Detailed 4-Subject Icy Board */}
        <div className="p-8 sm:p-12 rounded-[36px] bg-gradient-to-br from-white/15 via-sky-500/10 to-slate-950/70 backdrop-blur-2xl border border-white/20 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/15 mb-8">
            <div>
              <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs uppercase tracking-wider mb-1">
                <span>{current.title}</span>
                <span>•</span>
                <span>{current.classes}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">{current.classes} Syllabus Breakdown</h3>
              <p className="text-xs sm:text-sm text-cyan-100/80 mt-1 max-w-2xl">{current.description}</p>
            </div>

            <button 
              onClick={() => alert(`Official Model Question Paper for ${current.classes} downloaded successfully!`)}
              className="btn-trendy px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/30 shrink-0 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Model Paper</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Pillars of Syllabus */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Mathematics */}
            <div className="glass-card p-6 rounded-3xl">
              <div className="flex items-center gap-2.5 text-amber-300 font-extrabold text-sm mb-4">
                <Calculator className="w-5 h-5 text-amber-400" />
                <span>Mathematics (15 Qs)</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-200">
                {current.mathTopics.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Science */}
            <div className="glass-card p-6 rounded-3xl">
              <div className="flex items-center gap-2.5 text-cyan-300 font-extrabold text-sm mb-4">
                <Atom className="w-5 h-5 text-cyan-400" />
                <span>Science (15 Qs)</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-200">
                {current.scienceTopics.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mental Ability */}
            <div className="glass-card p-6 rounded-3xl">
              <div className="flex items-center gap-2.5 text-sky-300 font-extrabold text-sm mb-4">
                <Brain className="w-5 h-5 text-sky-400" />
                <span>Mental Ability (10 Qs)</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-200">
                {current.reasoningTopics.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* English */}
            <div className="glass-card p-6 rounded-3xl">
              <div className="flex items-center gap-2.5 text-emerald-300 font-extrabold text-sm mb-4">
                <FileText className="w-5 h-5 text-emerald-400" />
                <span>English & Logic (10 Qs)</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-200">
                {current.englishTopics.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
