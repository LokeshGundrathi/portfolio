import { lazy, Suspense, useCallback } from 'react';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { ArchitectureSection } from './components/sections/ArchitectureSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { TechStackSection } from './components/sections/TechStackSection';

const ResumeSection = lazy(() =>
  import('./components/sections/ResumeSection').then((module) => ({ default: module.ResumeSection })),
);

function App() {
  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-bg font-sans text-portfolio-text">
      <Header onNavigate={scrollToSection} />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <ArchitectureSection />
        <TechStackSection />
        <Suspense fallback={null}>
          <ResumeSection />
        </Suspense>
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
