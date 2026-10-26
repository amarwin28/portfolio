import React from 'react';
import { ExternalLink } from 'lucide-react';
import { experience } from '../data/profile';
import type { ExperienceItem } from '../types/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-white/5 bg-[#0e1017]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-400 block mb-1">
            Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Experience
          </h2>
          <p className="mt-2 text-sm text-gray-400 max-w-xl">
            Founder leadership, growth strategy, mobile app development, and technical collaboration.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {experience.map((item: ExperienceItem, idx: number) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl bg-[#12151c] border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Header: Role & Organization */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-xs font-semibold text-amber-400 block">
                      {item.organization}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                      {item.role}
                    </h3>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-white/5 text-gray-300 border border-white/5 shrink-0">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-2.5">
                  {item.description}
                </p>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="mt-3.5 space-y-1.5 border-t border-white/5 pt-3">
                    {item.highlights.map((hl: string, hIdx: number) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-gray-400">
                        <span className="text-amber-400 mt-0.5">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom Website Action (if applicable) */}
              {item.websiteUrl && (
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-end">
                  <a
                    href={item.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 text-xs font-medium border border-amber-400/20 transition-colors"
                  >
                    <span>Visit Website</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
