import React from 'react';
import {
  Home,
  Building2,
  User,
  FolderGit2,
  Cpu,
  Menu,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  FileDown,
  X,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profile } from '../../data/profile';

interface MobileNavProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  activeSection,
  onNavigate,
  isOpen,
  onClose,
}) => {
  const bottomTabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'companies', label: 'Companies', icon: Building2 },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'about', label: 'About', icon: User },
  ];

  const fullNav = [
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
    <>
      {/* Bottom Bar for Mobile & Tablet */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c0e13]/95 backdrop-blur-md border-t border-white/10 px-3 py-1.5 flex items-center justify-around"
        aria-label="Mobile Navigation"
      >
        {bottomTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                onNavigate(tab.id);
                if (isOpen) onClose();
              }}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg transition-colors ${
                isActive ? 'text-amber-400' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Icon size={18} />
              <span className="text-[10px] font-medium mt-1">{tab.label}</span>
            </button>
          );
        })}

        {/* More button */}
        <button
          onClick={() => {
            if (isOpen) {
              onClose();
            } else {
              onNavigate('experience');
            }
          }}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg transition-colors ${
            ['skills', 'experience', 'education', 'achievements', 'contact'].includes(activeSection)
              ? 'text-amber-400'
              : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <Menu size={18} />
          <span className="text-[10px] font-medium mt-1">More</span>
        </button>
      </nav>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
          onClick={onClose}
        >
          <div
            className="absolute top-0 right-0 bottom-0 w-4/5 max-w-xs bg-[#0f1218] border-l border-white/10 p-5 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg overflow-hidden border border-white/10 bg-[#12151c]">
                    <img
                      src={profile.portraitUrl}
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-tight">
                      {profile.name}
                    </h3>
                    <p className="text-[11px] text-amber-400 font-medium">
                      Student &amp; Developer
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="py-3 flex flex-col gap-1">
                {fullNav.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        onClose();
                      }}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors text-left ${
                        isActive
                          ? 'bg-amber-400/10 text-amber-400 font-semibold'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <Icon size={16} className={isActive ? 'text-amber-400' : 'text-gray-400'} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={profile.resumeUrl}
                download="Amarwin_Jasan_Resume.pdf"
                className="w-full py-2 px-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <FileDown size={14} />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center justify-center gap-3 text-gray-400">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 hover:text-white"
                  aria-label="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 hover:text-amber-400"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="p-1.5 hover:text-amber-400"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
