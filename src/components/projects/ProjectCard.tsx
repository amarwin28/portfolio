import React from 'react';
import { ExternalLink, Info, Monitor, Smartphone } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import type { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const primaryLink = project.links.length > 0 ? project.links[0] : null;

  return (
    <div className="group bg-[#12151c] hover:bg-[#151923] rounded-xl border border-white/10 hover:border-amber-400/30 transition-colors flex flex-col overflow-hidden">
      {/* Cover Image Container */}
      <div
        className="relative aspect-[16/10] w-full overflow-hidden bg-[#090b0e] cursor-pointer"
        onClick={() => onSelect(project)}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/projects/jas-traders/placeholder.svg';
          }}
        />

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12151c] via-transparent to-transparent opacity-80 pointer-events-none" />

        {/* Top-right corner quick action icon */}
        {primaryLink && (
          <div className="absolute top-2.5 right-2.5 z-10">
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-7 h-7 rounded-md bg-black/70 backdrop-blur-sm border border-white/10 hover:border-amber-400 text-gray-300 hover:text-amber-400 flex items-center justify-center transition-colors"
              title={primaryLink.label}
              aria-label={primaryLink.label}
            >
              <ExternalLink size={13} />
            </a>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Badge & Title */}
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-medium text-amber-400 bg-amber-400/10 border border-amber-400/20">
              {project.badge}
            </span>
          </div>

          <h3
            onClick={() => onSelect(project)}
            className="text-base font-bold text-white group-hover:text-amber-400 transition-colors cursor-pointer"
          >
            {project.title}
          </h3>

          <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
            {project.summary || project.description}
          </p>
        </div>

        {/* Tech Stack Pills & Action Buttons */}
        <div className="mt-4 pt-3.5 border-t border-white/5">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-gray-400">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-2">
            {project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-400 hover:bg-amber-300 text-black transition-colors text-center"
              >
                {link.type === 'github-android' ? (
                  <>
                    <Smartphone size={13} />
                    <span>Android</span>
                  </>
                ) : link.type === 'github-windows' ? (
                  <>
                    <Monitor size={13} />
                    <span>Windows</span>
                  </>
                ) : link.type === 'github' ? (
                  <>
                    <GithubIcon size={13} />
                    <span>GitHub</span>
                  </>
                ) : (
                  <>
                    <ExternalLink size={13} />
                    <span>Live</span>
                  </>
                )}
              </a>
            ))}

            {/* View Details Button */}
            <button
              onClick={() => onSelect(project)}
              className={`${
                project.links.length === 0 ? 'w-full' : ''
              } inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors`}
              title="View full project details"
            >
              <Info size={13} />
              <span>Details</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
