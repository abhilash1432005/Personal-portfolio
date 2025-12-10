import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { EducationRoadmap } from '@/components/EducationRoadmap';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { MatrixRain } from '@/components/MatrixRain';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <MatrixRain />
      <Navigation />
      <ThemeSwitcher />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <EducationRoadmap />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
