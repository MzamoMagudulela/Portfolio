import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ExternalLink,
  Github,
  Maximize2,
  Terminal,
  Layers,
  Server,
  Code2,
  CheckCircle2,
  ArrowRight,
  Database,
  Cpu
} from 'lucide-react'
import { projects } from '../data/projects'
import ProjectModal from './ProjectModal'

const categories = ['All', 'Full Stack', 'Backend & Systems', 'Developer Tools']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id)
  const [modalProject, setModalProject] = useState(null)

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'All') return true
    if (activeCategory === 'Full Stack') return p.category.includes('Full Stack') || p.category.includes('Civic')
    if (activeCategory === 'Backend & Systems') return p.category.includes('Backend') || p.category.includes('Cybersecurity')
    if (activeCategory === 'Developer Tools') return p.category.includes('Developer Tools')
    return true
  })

  const currentProject = projects.find((p) => p.id === activeProjectId) || projects[0]

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">
              <span className="w-6 h-[1px] bg-cyan-400"></span>
              <span>02 // SELECTED WORKS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Project Showcase
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-lg">
              Explore key software systems, backend architectures, and developer utilities engineered by Mzamo Magudulela.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-background-deep border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Large Interactive Featured Stage */}
        <div className="mb-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl glass-panel border border-cyan-500/30 overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Stage: Architecture & Live Visual Representation */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800/80 bg-background-deep/60">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
                        {currentProject.category}
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        {currentProject.year}
                      </span>
                      <span className="font-mono text-xs text-cyan-400/80">
                        • {currentProject.status}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">
                      {currentProject.title}
                    </h3>
                    <p className="text-cyan-300 font-mono text-xs sm:text-sm">
                      {currentProject.tagline}
                    </p>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
                      {currentProject.description}
                    </p>

                    {/* Interactive Architectural Preview Box (Simulated Terminal/System Canvas) */}
                    <div className="mt-6 rounded-xl bg-background-void/90 border border-slate-800 p-4 font-mono text-xs text-slate-300 space-y-2">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
                        <div className="flex items-center space-x-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
                          <span className="text-slate-400 pl-1">{currentProject.id}.service.spec</span>
                        </div>
                        <span className="text-cyan-400">HTTP/2 REST</span>
                      </div>
                      <div className="pt-1 space-y-1.5 text-[11px]">
                        <p className="text-cyan-300">
                          &gt; STATUS: <span className="text-emerald-400">200 OK</span> | ARCHITECTURE: MODULAR
                        </p>
                        <p className="text-slate-400">
                          &gt; MODULES: {currentProject.highlights.slice(0, 2).join(' // ')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions & Technology Tags */}
                  <div className="pt-8 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-cyan-500/20 text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={currentProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs flex items-center space-x-2 border border-slate-700 hover:border-cyan-400 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Source Code</span>
                      </a>

                      <button
                        onClick={() => setModalProject(currentProject)}
                        className="px-4 py-2.5 rounded-xl bg-cyan-950/50 hover:bg-cyan-900/50 text-cyan-300 font-mono text-xs flex items-center space-x-2 border border-cyan-500/30 hover:border-cyan-400 transition-colors"
                      >
                        <Maximize2 className="w-4 h-4" />
                        <span>Deep Dive Specs</span>
                      </button>

                      {currentProject.liveUrl && (
                        <a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-mono text-xs font-semibold flex items-center space-x-2 hover:bg-cyan-300 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Stage: Architectural Highlights & Features */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-background-surface/30">
                  <div>
                    <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4">
                      Engineered Capabilities
                    </h4>

                    <div className="space-y-3.5">
                      {currentProject.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="p-3.5 rounded-xl bg-background-deep/80 border border-slate-800/80 flex items-start space-x-3 group hover:border-cyan-500/30 transition-colors"
                        >
                          <div className="p-1 rounded-md bg-cyan-950/80 text-cyan-400 shrink-0 mt-0.5">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs sm:text-sm text-slate-300 leading-snug">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => setModalProject(currentProject)}
                      className="w-full py-3 rounded-xl border border-cyan-500/20 hover:border-cyan-400/60 bg-cyan-950/20 text-cyan-300 text-xs font-mono tracking-wider flex items-center justify-center space-x-2 transition-all"
                    >
                      <span>VIEW FULL ARCHITECTURE & DOCUMENTATION</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project Selector List / Floating Glass Panels */}
        <div>
          <h3 className="font-mono text-xs text-slate-400 tracking-widest uppercase mb-6">
            SELECT A SYSTEM TO INSPECT
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project) => {
              const isSelected = project.id === activeProjectId
              return (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -4 }}
                  onClick={() => setActiveProjectId(project.id)}
                  className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? 'glass-panel border-cyan-400/60 shadow-lg shadow-cyan-950/50 bg-background-deep'
                      : 'glass-card hover:border-cyan-500/30'
                  }`}
                >
                  {/* Subtle top indicator bar */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
                  )}

                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span className="text-cyan-400/90">{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs font-mono">
                    <span className={isSelected ? 'text-cyan-300 font-semibold' : 'text-slate-400'}>
                      {isSelected ? 'Currently Inspecting' : 'Click to Inspect'}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>

      {/* Deep Dive Project Modal */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  )
}
