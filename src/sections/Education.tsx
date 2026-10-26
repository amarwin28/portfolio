import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { education } from '../data/profile';
import type { EducationItem } from '../types/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-400 block mb-1">
            Academics
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-sm text-gray-400 max-w-xl">
            Computer Science Engineering degree program and academic foundation.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {education.map((item: EducationItem, idx: number) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl bg-[#12151c] border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Score & Period */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/20">
                    {item.score}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar size={12} className="text-gray-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-base font-bold text-white">
                  {item.degree}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
                  {item.institution}
                </p>

                {item.location && (
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <MapPin size={11} className="text-gray-500" />
                    <span>{item.location}</span>
                  </p>
                )}

                {item.details && (
                  <p className="text-xs text-gray-400 mt-3 leading-relaxed border-t border-white/5 pt-3">
                    {item.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
