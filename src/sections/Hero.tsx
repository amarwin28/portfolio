import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { profile, heroStats } from '../data/profile';

interface HeroProps {
  onNavigate: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Roles, Intro, CTAs, Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="mb-2">
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-400">
                Software Developer &amp; Student
              </span>
            </div>

            {/* Main Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Amarwin <span className="text-amber-400">Jasan</span>
            </h1>

            {/* Roles */}
            <div className="mt-3">
              <p className="text-base sm:text-lg font-medium text-gray-200">
                Computer Science Engineering Student
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm text-gray-400">
                <span className="text-amber-400/90 font-medium">Founder, WEBOCLYPSE</span>
                <span className="text-gray-600">•</span>
                <span>Media &amp; Growth Head, Kromaxzon Technologies</span>
              </div>
            </div>

            {/* Concise Introduction */}
            <p className="mt-5 text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed">
              {profile.introduction}
            </p>

            {/* Essential CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs sm:text-sm tracking-wide transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight size={15} />
              </button>

              <a
                href={profile.resumeUrl}
                download="Amarwin_Jasan_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#12151c] hover:bg-[#181c26] text-gray-200 hover:text-white font-medium text-xs sm:text-sm border border-white/10 hover:border-amber-400/40 transition-colors"
              >
                <Download size={15} className="text-amber-400" />
                <span>Resume</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-gray-300 hover:text-white font-medium text-xs sm:text-sm hover:bg-white/5 transition-colors"
              >
                <Mail size={15} />
                <span>Contact</span>
              </button>
            </div>

            {/* Understated Stats */}
            <div className="mt-10 pt-6 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {heroStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#11141b] border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-gray-300 mt-0.5">
                    {stat.label}
                  </div>
                  {stat.sublabel && (
                    <div className="text-[11px] text-gray-500 mt-0.5 truncate">
                      {stat.sublabel}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Restrained Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative rounded-2xl overflow-hidden bg-[#11141b] p-2 border border-white/10 shadow-lg">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#090b0e]">
                  <img
                    src={profile.portraitUrl}
                    alt="Amarwin Jasan"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/profile/amarwin-portrait.png';
                    }}
                  />

                  {/* Soft bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1117]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Minimal availability tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="px-2.5 py-1 rounded-md bg-[#0b0d11]/80 backdrop-blur-sm border border-white/10 text-[11px] font-medium text-gray-200 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Available for Projects</span>
                    </div>
                  </div>

                  {/* Subtle handwritten name mark */}
                  <div className="absolute bottom-4 right-5 z-10 select-none pointer-events-none">
                    <span className="font-signature text-2xl sm:text-3xl font-bold text-amber-300/90 -rotate-3 block">
                      Amarwin Jasan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
