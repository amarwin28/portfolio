import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profile } from '../../data/profile';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080a0e] border-t border-white/5 py-10 pb-24 lg:pb-10 text-xs text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/5">
          {/* Logo & Identity */}
          <div className="text-center md:text-left">
            <div className="text-base font-bold text-white tracking-tight">
              Amarwin <span className="text-amber-400">Jasan</span>
            </div>
            <p className="text-[11px] text-gray-500 mt-1">
              Computer Science Engineering Student • Software Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-gray-400">
            <button onClick={() => onNavigate('home')} className="hover:text-amber-400 transition-colors">
              Home
            </button>
            <button onClick={() => onNavigate('companies')} className="hover:text-amber-400 transition-colors">
              Companies
            </button>
            <button onClick={() => onNavigate('projects')} className="hover:text-amber-400 transition-colors">
              Projects
            </button>
            <button onClick={() => onNavigate('about')} className="hover:text-amber-400 transition-colors">
              About
            </button>
            <button onClick={() => onNavigate('skills')} className="hover:text-amber-400 transition-colors">
              Skills
            </button>
            <button onClick={() => onNavigate('experience')} className="hover:text-amber-400 transition-colors">
              Experience
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-amber-400 transition-colors">
              Contact
            </button>
          </div>

          {/* Socials & Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={15} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-gray-400 hover:text-amber-400 hover:bg-white/5 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={15} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-1.5 rounded-md text-gray-400 hover:text-amber-400 hover:bg-white/5 transition-colors"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md text-gray-400 hover:text-amber-400 hover:bg-white/5 transition-colors"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
          <div>
            © 2026 Amarwin Jasan. All rights reserved.
          </div>
          <div>
            Kanyakumari, India
          </div>
        </div>
      </div>
    </footer>
  );
};
