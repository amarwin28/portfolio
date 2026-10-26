import React from 'react';
import { ArrowRight, MapPin, Mail, FileText, Code2, Sparkles, Users } from 'lucide-react';
import { profile } from '../data/profile';

interface AboutProps {
  onNavigate: (id: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-20 border-t border-white/5 bg-[#0e1017]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-400 block mb-1">
            Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Focused Bio & Contact Info */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-6 rounded-2xl bg-[#12151c] border border-white/10 space-y-4">
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                {profile.aboutText}
              </p>

              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-amber-400" />
                  <span>{profile.location}</span>
                </span>
                <span className="text-gray-600">•</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
                >
                  <Mail size={13} className="text-amber-400" />
                  <span>{profile.email}</span>
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs tracking-wide transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowRight size={13} />
              </button>

              <a
                href={profile.resumeUrl}
                download="Amarwin_Jasan_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white font-medium text-xs border border-white/10 transition-colors"
              >
                <FileText size={13} className="text-amber-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Focus Areas */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-3.5">
            <div className="p-4 sm:p-5 rounded-xl bg-[#12151c] border border-white/10">
              <div className="flex items-center gap-2.5 mb-1.5">
                <Code2 size={16} className="text-amber-400" />
                <h3 className="text-sm font-semibold text-white">Full-Stack &amp; Mobile Development</h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed pl-6">
                Building responsive web platforms with React and TypeScript, alongside cross-platform mobile apps with Flutter and Dart.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#12151c] border border-white/10">
              <div className="flex items-center gap-2.5 mb-1.5">
                <Sparkles size={16} className="text-amber-400" />
                <h3 className="text-sm font-semibold text-white">AI &amp; Systems Engineering</h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed pl-6">
                Integrating machine learning models, voice control, and automation workflows into useful desktop and web utilities.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#12151c] border border-white/10">
              <div className="flex items-center gap-2.5 mb-1.5">
                <Users size={16} className="text-amber-400" />
                <h3 className="text-sm font-semibold text-white">Leadership &amp; Mentorship</h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed pl-6">
                Leading WEBOCLYPSE and conducting student technical sessions on programming, AI tools, and collaborative open-source workflows.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
