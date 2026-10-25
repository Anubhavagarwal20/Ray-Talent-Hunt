import React, { useState } from 'react';
import { FullPageThreeCanvas } from './components/FullPageThreeCanvas';
import { InteractiveMouseFollower } from './components/InteractiveMouseFollower';
import { MotionTicker } from './components/MotionTicker';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AwardsSection } from './components/AwardsSection';
import { ExamInfoSection } from './components/ExamInfoSection';
import { ForSchoolsSection } from './components/ForSchoolsSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ResultLookupModal } from './components/ResultLookupModal';
import { RegistrationModal } from './components/RegistrationModal';

export const App: React.FC = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);

  return (
    <div className="min-h-screen relative text-slate-100 flex flex-col font-sans selection:bg-cyan-400 selection:text-slate-950">
      
      {/* Full-Page Background 3D Engine (Floating Icy Boards & Cosmic Particles) */}
      <FullPageThreeCanvas />

      {/* Interactive Mouse Follower Glow Spotlight */}
      <InteractiveMouseFollower />

      {/* Navigation */}
      <Navbar
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenResult={() => setIsResultOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* Hero Section with Interactive 3D Trophy Stage */}
        <HeroSection
          onOpenRegister={() => setIsRegisterOpen(true)}
          onOpenResult={() => setIsResultOpen(true)}
        />

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
          onOpenSchoolRegister={() => setIsRegisterOpen(true)}
        />

        {/* On-ground School Felicitation Gallery & Instagram Reels */}
        <GallerySection />

        {/* Frequently Asked Questions */}
        <FaqSection />
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
      />

    </div>
  );
};

export default App;
