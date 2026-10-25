import React, { useState } from 'react';
import { BookOpen, Brain, Atom, Calculator, Clock, HelpCircle, FileText, CheckCircle, Download } from 'lucide-react';

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
      description: 'Foundational literacy, number sense, observational science, and picture-based logical patterns.',
      mathTopics: ['Number Recognition & Place Values', 'Basic Addition & Subtraction', 'Shapes & Spatial Understanding', 'Measurement & Time'],
      scienceTopics: ['Plants & Animals Around Us', 'Our Body & Good Habits', 'Weather, Air & Water', 'Everyday Objects & Materials'],
      reasoningTopics: ['Picture Patterns & Sequences', 'Odd One Out', 'Shape Matching & Grouping', 'Simple Direction Sense'],
      englishTopics: ['Alphabetical Order', 'Nouns, Verbs & Adjectives', 'Picture Comprehension', 'Spelling & Vocabulary']
    },
    '3-5': {
      title: 'Young Achievers',
      classes: 'Classes 3, 4 & 5',
      description: 'Analytical math, conceptual science, reasoning, and grammar aligned with NCERT/CBSE curriculum.',
      mathTopics: ['4-to-6 Digit Operations', 'Fractions & Decimals Intro', 'Perimeter & Area Basics', 'Data Handling & Pictographs'],
      scienceTopics: ['Living vs Non-Living Systems', 'Force, Energy & Simple Machines', 'Human Organ Systems & Nutrition', 'Matter & Earth Dynamics'],
      reasoningTopics: ['Number & Letter Series', 'Coding-Decoding', 'Analogy & Classification', 'Mirror Images & Paper Folding'],
      englishTopics: ['Tenses & Prepositions', 'Synonyms & Antonyms', 'Reading Comprehension', 'Sentence Correction']
    },
    '6-8': {
      title: 'Middle Champions',
      classes: 'Classes 6, 7 & 8',
      description: 'Rigorous problem-solving, foundational physics, chemistry, biology, and abstract logical deduction.',
      mathTopics: ['Integers, Rational Numbers & Exponents', 'Algebraic Expressions & Equations', 'Geometry, Triangles & Polygons', 'Ratios, Percentages & Profit-Loss'],
      scienceTopics: ['Motion, Light & Electricity', 'Acids, Bases, Salts & Chemical Changes', 'Cell Structure & Plant Physiology', 'Conservation & Ecology'],
      reasoningTopics: ['Blood Relations & Family Tree', 'Direction Sense & Seating Arrangement', 'Venn Diagrams & Syllogism', 'Cubes & Dice Operations'],
      englishTopics: ['Active-Passive Voice', 'Direct-Indirect Speech', 'Advanced Vocabulary & Idioms', 'Critical Reading Passages']
    },
    '9-10': {
      title: 'Senior Scholars',
      classes: 'Classes 9 & 10',
      description: 'Pre-competitive Olympiad standard testing high-order thinking (HOTS), advanced STEM, and analytical aptitude.',
      mathTopics: ['Polynomials & Quadratic Equations', 'Trigonometry & Coordinate Geometry', 'Surface Areas, Volumes & Statistics', 'Arithmetic Progressions & Probability'],
      scienceTopics: ['Laws of Motion & Gravitation', 'Atomic Structure & Periodic Trends', 'Life Processes & Genetics', 'Magnetic Effects of Electric Current'],
      reasoningTopics: ['Statement & Assumptions / Arguments', 'Analytical & Mathematical Puzzles', 'Non-Verbal Abstract Matrices', 'Critical Deductive Reasoning'],
      englishTopics: ['Advanced Grammar & Syntax', 'Analytical Reading Comprehension', 'Contextual Vocabulary', 'Error Spotting & Cloze Test']
    }
  };

  const current = classGroups[selectedGroup];

  return (
    <section id="olympiad" className="py-20 relative bg-[#060913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Comprehensive Exam Syllabus & Pattern</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Curriculum Aligned, <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Skill & Critical-Thinking Focused
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Ray Talent Hunt Olympiad is structured to test conceptual mastery rather than memorization. Fully compatible with CBSE, ICSE, and State Board frameworks.
          </p>
        </div>

        {/* Exam Pattern At-A-Glance Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col items-center text-center">
            <Clock className="w-6 h-6 text-cyan-400 mb-2" />
            <span className="text-xl font-bold text-white">60 Minutes</span>
            <span className="text-xs text-slate-400 mt-0.5">Exam Duration</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col items-center text-center">
            <HelpCircle className="w-6 h-6 text-amber-400 mb-2" />
            <span className="text-xl font-bold text-white">50 MCQs</span>
            <span className="text-xs text-slate-400 mt-0.5">Objective Questions</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col items-center text-center">
            <Brain className="w-6 h-6 text-emerald-400 mb-2" />
            <span className="text-xl font-bold text-white">4 Core Sections</span>
            <span className="text-xs text-slate-400 mt-0.5">Math, Science, Logic, English</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col items-center text-center">
            <FileText className="w-6 h-6 text-indigo-400 mb-2" />
            <span className="text-xl font-bold text-white">OMR & Online</span>
            <span className="text-xs text-slate-400 mt-0.5">Dual Mode Options</span>
          </div>
        </div>

        {/* Class Group Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-10">
          {Object.entries(classGroups).map(([key, group]) => (
            <button
              key={key}
              onClick={() => setSelectedGroup(key)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedGroup === key
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <span>{group.classes}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${selectedGroup === key ? 'bg-cyan-900/40 text-cyan-950 font-extrabold' : 'bg-slate-800 text-slate-400'}`}>
                {group.title}
              </span>
            </button>
          ))}
        </div>

        {/* Detailed Class Topics Breakdown Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 relative overflow-hidden backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider mb-1">
                <span>{current.title}</span>
                <span>•</span>
                <span>{current.classes}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">{current.classes} Syllabus Breakdown</h3>
              <p className="text-sm text-slate-400 mt-1 max-w-2xl">{current.description}</p>
            </div>

            <button 
              onClick={() => alert(`Sample Question Paper & Syllabus for ${current.classes} will be downloaded. (RTHO Official Model Paper)`)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white text-xs font-semibold border border-slate-700 transition-all shrink-0 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Sample Paper PDF</span>
            </button>
          </div>

          {/* 4 Pillars of Syllabus */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Mathematics */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm mb-4">
                <Calculator className="w-5 h-5" />
                <span>Mathematics (15 Qs)</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {current.mathTopics.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-500/80 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Science */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center gap-2.5 text-cyan-400 font-bold text-sm mb-4">
                <Atom className="w-5 h-5" />
                <span>Science (15 Qs)</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {current.scienceTopics.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-500/80 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mental Ability & Logic */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center gap-2.5 text-purple-400 font-bold text-sm mb-4">
                <Brain className="w-5 h-5" />
                <span>Mental Ability (10 Qs)</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {current.reasoningTopics.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-500/80 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* English */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm mb-4">
                <FileText className="w-5 h-5" />
                <span>English & Aptitude (10 Qs)</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {current.englishTopics.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500/80 shrink-0 mt-0.5" />
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
