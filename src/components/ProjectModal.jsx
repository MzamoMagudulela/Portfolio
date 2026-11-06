import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, CheckCircle2, Layers, Calendar, Terminal } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background-void/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl rounded-2xl glass-panel bg-background-deep/95 border border-cyan-500/30 p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden"
        >
          {/* Header Close */}
          <div className="flex items-start justify-between pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center space-x-2 font-mono text-xs text-cyan-400 mb-1">
                <span>{project.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {project.year}
                </span>
                <span>•</span>
                <span className="text-slate-400">{project.status}</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                {project.title}
              </h3>
              <p className="text-sm text-cyan-300/80 font-mono mt-1">
                {project.tagline}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors"
              aria-label="Close Project Details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="py-6 space-y-6 max-h-[60vh] overflow-y-auto pr-2">
            <div>
              <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">
                OVERVIEW & ARCHITECTURE
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Functional Highlights */}
            {project.highlights && (
              <div>
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3">
                  KEY CAPABILITIES & IMPLEMENTATION
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start space-x-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies Used */}
            <div>
              <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2.5">
                TECHNOLOGY STACK
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/40 border border-cyan-500/25 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs flex items-center space-x-2 border border-slate-700 hover:border-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold flex items-center space-x-2 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-500 flex items-center space-x-1.5 px-3 py-2">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Codebase verified on GitHub</span>
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-slate-400 hover:text-white"
            >
              Close Window [Esc]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
