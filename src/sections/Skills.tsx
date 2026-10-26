import React from 'react';
import { Code2, Smartphone, Server, Wrench, Sparkles, ExternalLink } from 'lucide-react';
import { skillCategories } from '../data/profile';
import type { SkillCategory } from '../types/portfolio';

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming Languages':
        return Code2;
      case 'Frontend & Mobile':
        return Smartphone;
      case 'Backend & APIs':
        return Server;
      case 'Tools & Workflow':
        return Wrench;
      case 'Core Competencies':
      default:
        return Sparkles;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-400 block mb-1">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Skills
          </h2>
          <p className="mt-2 text-sm text-gray-400 max-w-xl">
            Programming languages, frameworks, development tools, and engineering competencies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat: SkillCategory, idx: number) => {
            const Icon = getCategoryIcon(cat.title);

            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-[#12151c] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white/5 text-amber-400 flex items-center justify-center shrink-0 border border-white/5">
                      <Icon size={16} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {cat.title}
                      </h3>
                      {cat.description && (
                        <p className="text-[11px] text-gray-400 mt-0.5">
                          {cat.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cat.skills.map((s, sIdx: number) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-xs font-medium text-gray-200"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* codeVstudio Technical Initiative & Member Card */}
          <div className="p-5 sm:p-6 rounded-xl bg-[#12151c] border border-amber-400/20 hover:border-amber-400/40 transition-colors flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-white p-1 shrink-0 flex items-center justify-center overflow-hidden border border-white/20 shadow-sm">
                  <img
                    src="/images/companies/codevstudio-logo.png"
                    alt="codeVstudio Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      codeVstudio
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20">
                      Member
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Digital Product Engineering
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed mt-2">
                Active member collaborating on modern web applications, scalable digital products, and production frontend architecture.
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-medium text-gray-300">
                  Web Development
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-medium text-gray-300">
                  UI Engineering
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-medium text-gray-300">
                  Collaborative Coding
                </span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-gray-400 font-mono">codevstudio.in</span>
              <a
                href="https://codevstudio.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs transition-colors"
              >
                <span>Visit Studio</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
