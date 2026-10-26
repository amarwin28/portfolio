import React from 'react';
import { ExternalLink, Check, Globe } from 'lucide-react';
import { companies } from '../data/companies';
import type { CompanyItem } from '../types/portfolio';

export const Companies: React.FC = () => {
  return (
    <section
      id="companies"
      className="py-20 border-t border-white/5 bg-[#0e1017]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-400 block mb-1">
            Ventures &amp; Organizations
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Companies
          </h2>
          <p className="mt-2 text-sm text-gray-400 max-w-xl">
            Founder, leadership, and startup membership roles across technology initiatives, enterprise engineering, and digital products.
          </p>
        </div>

        {/* Company Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {companies.map((company: CompanyItem) => {
            return (
              <div
                key={company.id}
                className="rounded-2xl p-6 sm:p-7 bg-[#12151c] border border-white/10 hover:border-amber-500/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Top Header: Logo, Name, Role */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className={`w-16 h-16 sm:w-18 sm:h-18 rounded-xl p-2 shrink-0 flex items-center justify-center overflow-hidden border ${
                        company.id === 'kromaxzon' || company.id === 'codevstudio'
                          ? 'bg-white border-white shadow-sm'
                          : 'bg-[#090b0e] border-white/10'
                      }`}
                    >
                      <img
                        src={company.logo}
                        alt={`${company.name} Logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20">
                          {company.role}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {company.name}
                      </h3>
                      {company.tagline && (
                        <p className="text-xs text-gray-400 mt-0.5 font-medium">
                          {company.tagline}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
                    {company.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    {company.highlights.map((highlight: string, hIdx: number) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-300">
                        <Check size={14} className="text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Core Focus Tags */}
                  {company.technologies && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {company.technologies.map((tech: string, tIdx: number) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Link & Action Button */}
                <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Globe size={13} className="text-amber-400" />
                    <span className="font-mono text-xs">{company.displayUrl}</span>
                  </div>

                  <a
                    href={company.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs tracking-wide transition-colors"
                  >
                    <span>Visit Website</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
