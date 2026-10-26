import React from 'react';
import { Award, Trophy, Presentation, Users, ShieldCheck } from 'lucide-react';
import { certifications, achievements } from '../data/profile';
import type { CertificationItem, AchievementItem } from '../types/portfolio';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'award':
        return Trophy;
      case 'session':
        return Presentation;
      case 'competition':
      default:
        return Users;
    }
  };

  return (
    <section id="achievements" className="py-20 border-t border-white/5 bg-[#0e1017]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-400 block mb-1">
            Credentials &amp; Recognition
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Certifications &amp; Achievements
          </h2>
          <p className="mt-2 text-sm text-gray-400 max-w-xl">
            Verified technical training, symposium awards, and technical mentoring activities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Certifications */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-3">
              <ShieldCheck className="text-amber-400" size={18} />
              <span>Certifications</span>
            </h3>

            {certifications.map((cert: CertificationItem, idx: number) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#12151c] border border-white/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block">
                      {cert.issuer}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                      {cert.title}
                    </h4>
                  </div>
                  <span className="p-1.5 rounded-lg bg-white/5 text-amber-400 shrink-0 border border-white/5">
                    <Award size={16} />
                  </span>
                </div>

                {cert.location && (
                  <p className="text-xs text-gray-400 mt-1">
                    {cert.location}
                  </p>
                )}

                {cert.description && (
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed border-t border-white/5 pt-2">
                    {cert.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Achievements & Activities */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-3">
              <Trophy className="text-amber-400" size={18} />
              <span>Activities &amp; Honors</span>
            </h3>

            {achievements.map((item: AchievementItem, idx: number) => {
              const Icon = getAchievementIcon(item.type);
              const isWinner = item.type === 'award';

              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#12151c] border border-white/10"
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        isWinner
                          ? 'bg-amber-400 text-black'
                          : 'bg-white/5 text-amber-400 border border-white/5'
                      }`}
                    >
                      <Icon size={16} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-white">
                          {item.title}
                        </h4>
                        {isWinner && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20 shrink-0">
                            1st Place
                          </span>
                        )}
                      </div>

                      {item.organization && (
                        <p className="text-xs text-amber-400/90 font-medium mt-0.5">
                          {item.organization}
                        </p>
                      )}

                      <p className="text-xs text-gray-300 mt-2 leading-relaxed border-t border-white/5 pt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
