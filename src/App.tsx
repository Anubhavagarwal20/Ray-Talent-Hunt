import React, { useState } from 'react';
import { FullPageThreeCanvas } from './components/FullPageThreeCanvas';
import { InteractiveMouseFollower } from './components/InteractiveMouseFollower';
import { MotionTicker } from './components/MotionTicker';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FourQuestsStrip } from './components/FourQuestsStrip';
import { AboutSection } from './components/AboutSection';
import { AwardsSection } from './components/AwardsSection';
import { ExamInfoSection } from './components/ExamInfoSection';
import { ForSchoolsSection } from './components/ForSchoolsSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { ResultLookupModal } from './components/ResultLookupModal';
import { RegistrationModal } from './components/RegistrationModal';

export const App: React.FC = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [registerMode, setRegisterMode] = useState<'student' | 'school'>('student');
  const [isResultOpen, setIsResultOpen] = useState(false);

  const handleOpenRegister = (mode: 'student' | 'school' = 'student') => {
    setRegisterMode(mode);
    setIsRegisterOpen(true);
  };

  return (
    <div className="min-h-screen relative text-slate-100 flex flex-col font-sans selection:bg-cyan-400 selection:text-slate-950">
      
      {/* Full-Page Background 3D Engine (Floating Icy Boards & Cosmic Particles) */}
      <FullPageThreeCanvas />

      {/* Interactive Mouse Follower Glow Spotlight */}
      <InteractiveMouseFollower />

      {/* Navigation */}
      <Navbar
        onOpenRegister={(mode) => handleOpenRegister(mode || 'student')}
        onOpenResult={() => setIsResultOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* Hero Section with Interactive 3D Trophy Stage & Live Quiz Quest */}
        <HeroSection
          onOpenRegister={() => handleOpenRegister('student')}
          onOpenResult={() => setIsResultOpen(true)}
        />

        {/* 4 Quests Strip & Eduvora Trust Metric Cards */}
        <FourQuestsStrip />

        {/* Infinite Motion Marquee Ribbon */}
        <MotionTicker />

        {/* About RTHO & Malviya Seva Sansthan Patronage */}
        <AboutSection />

        {/* 5-Tier Merit Awards & Scholarships */}
        <AwardsSection />

        {/* Olympiad Exam Details & Syllabus */}
        <ExamInfoSection />

        {/* School Partnership & Examination Centers */}
        <ForSchoolsSection
          onOpenStudentRegister={() => handleOpenRegister('student')}
          onOpenSchoolRegister={() => handleOpenRegister('school')}
        />

        {/* On-ground School Felicitation Gallery & Instagram Reels */}
        <GallerySection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Final Call to Action Panel (from d:\index.html) */}
        <FinalCtaSection
          onOpenRegister={() => handleOpenRegister('student')}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResultLookupModal
        isOpen={isResultOpen}
        onClose={() => setIsResultOpen(false)}
      />

      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        initialType={registerMode}
      />

    </div>
  );
};

export default App;
