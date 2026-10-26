import { useState, useEffect } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { TopNav } from './components/layout/TopNav';
import { MobileNav } from './components/layout/MobileNav';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { Companies } from './sections/Companies';
import { Projects } from './sections/Projects';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Achievements } from './sections/Achievements';
import { Contact } from './sections/Contact';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const sectionIds = [
      'home',
      'companies',
      'projects',
      'about',
      'skills',
      'experience',
      'education',
      'achievements',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0d11] text-gray-100 flex flex-col font-sans selection:bg-amber-400/20 selection:text-amber-300">
      {/* Desktop Fixed Left Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Top Navbar */}
      <TopNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {/* Mobile Bottom & Drawer Navigation */}
      <MobileNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Area (Offset on desktop for the 5rem / 80px left sidebar) */}
      <main className="flex-1 lg:pl-20">
        <Hero onNavigate={handleNavigate} />
        <Companies />
        <Projects />
        <About onNavigate={handleNavigate} />
        <Skills />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
        <Footer onNavigate={handleNavigate} />
      </main>
    </div>
  );
}

export default App;
