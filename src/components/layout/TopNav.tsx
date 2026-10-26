import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { profile } from '../../data/profile';

interface TopNavProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  onToggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export const TopNav: React.FC<TopNavProps> = ({
  activeSection,
  onNavigate,
  onToggleMobileMenu,
  isMobileMenuOpen,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'companies', label: 'Companies' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0b0d11]/95 backdrop-blur-sm border-b border-white/5 py-3'
          : 'bg-transparent py-4'
      } lg:pl-20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="flex items-center gap-2 text-left"
        >
          <span className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-amber-400 transition-colors">
            Amarwin <span className="text-amber-400">Jasan</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-amber-400 bg-amber-400/10 font-semibold'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button: Download Resume & Mobile Hamburger */}
        <div className="flex items-center gap-2.5">
          <a
            href={profile.resumeUrl}
            download="Amarwin_Jasan_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/30 transition-colors"
          >
            <Download size={13} className="text-amber-400" />
            <span>Resume</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={onToggleMobileMenu}
            className="md:hidden p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/5 border border-white/10"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};
