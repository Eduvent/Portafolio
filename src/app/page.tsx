// src/app/page.tsx
'use client'; // Necesario porque los componentes hijos (Skills, Projects) usan estado
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [activeSkillFilter, setActiveSkillFilter] = useState<string | null>(null);

  const handleSkillFilterChange = (skillTag: string | null) => {
    setActiveSkillFilter(skillTag);
  };

  return (
      <>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills activeSkill={activeSkillFilter} onSkillClick={handleSkillFilterChange} />
          <Projects activeSkillFilter={activeSkillFilter} />
          <Contact />
        </main>
        <Footer />
      </
  );
}