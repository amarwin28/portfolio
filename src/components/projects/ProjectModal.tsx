import React, { useEffect } from 'react';
import { X, ExternalLink, Check, Layers } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import type { Project } from '../../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#11141c] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141822]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/20">
              {project.badge}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Main Cover Banner */}
          <div className="relative rounded-lg overflow-hidden bg-black/40 border border-white/10 aspect-video max-h-72 flex items-center justify-center">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/projects/jas-traders/placeholder.svg';
              }}
            />
          </div>

          {/* Project Summary & Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Overview
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features Checklist */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-gray-300"
                  >
                    <Check size={14} className="text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Layers size={13} />
              <span>Technologies</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-white/5 text-xs font-medium text-gray-200 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Screenshots if available */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Screenshots
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.screenshots.map((s, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-lg overflow-hidden border border-white/10 bg-black/40 aspect-[4/3]"
                  >
                    <img
                      src={s.src}
                      alt={s.caption}
                      className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-1 bg-black/85 text-[10px] text-gray-300 truncate">
                      {s.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with verified links */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-[#141822]">
          <div className="text-xs text-gray-400">
            {project.role && <span>Role: <strong className="text-white font-medium">{project.role}</strong></span>}
            {project.status && <span className="ml-3 text-gray-400">• {project.status}</span>}
          </div>

          <div className="flex items-center gap-2">
            {project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-400 hover:bg-amber-300 text-black transition-colors"
              >
                {link.type.includes('github') ? <GithubIcon size={13} /> : <ExternalLink size={13} />}
                <span>{link.label}</span>
              </a>
            ))}
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
