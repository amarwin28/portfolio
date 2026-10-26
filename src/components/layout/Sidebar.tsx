import React from 'react';
import {
  Home,
  Building2,
  FolderGit2,
  User,
  Cpu,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  FileDown,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profile } from '../../data/profile';

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'companies', label: 'Companies', icon: Building2 },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <aside
      className="hidden lg:flex fixed left-0 top-0 bottom-0 w-20 z-40 bg-[#0c0e13] border-r border-white/5 flex-col items-center justify-between py-5 select-none"
      aria-label="Sidebar navigation"
    >
      {/* Top Monogram */}
      <div className="flex flex-col items-center gap-2">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="group block"
          title="Amarwin Jasan"
        >
          <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 bg-[#12151c]">
            <img
              src={profile.portraitUrl}
              alt="Amarwin Jasan"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
        </a>
        <span className="text-[11px] font-bold tracking-wider text-amber-400">
          AJ
        </span>
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col items-center gap-1.5 w-full px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`group relative w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                isActive
                  ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              title={item.label}
              aria-label={item.label}
            >
              <Icon size={18} />

              {/* Tooltip */}
              <span className="pointer-events-none absolute left-full ml-2.5 px-2 py-1 rounded bg-[#161a22] text-xs font-medium text-gray-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 border border-white/10 shadow-md z-50">
                {item.label}
              </span>

              {/* Active Indicator dot */}
              {isActive && (
                <span className="absolute -left-2 w-1 h-4 rounded-r bg-amber-400" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Socials & Quick Resume */}
      <div className="flex flex-col items-center gap-2.5 pt-3 border-t border-white/5 w-full">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-md flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          title="GitHub"
          aria-label="GitHub"
        >
          <GithubIcon size={16} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-md flex items-center justify-center text-gray-400 hover:text-amber-400 hover:bg-white/5 transition-colors"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <LinkedinIcon size={16} />
        </a>
        <a
          href={profile.resumeUrl}
          download="Amarwin_Jasan_Resume.pdf"
          className="w-8 h-8 rounded-md flex items-center justify-center text-amber-400 hover:bg-white/5 transition-colors"
          title="Download Resume"
          aria-label="Download Resume"
        >
          <FileDown size={16} />
        </a>
      </div>
    </aside>
  );
};
