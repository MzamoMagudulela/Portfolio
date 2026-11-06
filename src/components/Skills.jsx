import React from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Terminal,
  Braces,
  Database,
  Layout,
  Palette,
  Atom,
  Zap,
  Server,
  Cpu,
  Layers,
  Cloud,
  FolderGit2,
  GitBranch,
  Github,
  Code,
  Laptop,
  Send,
  Boxes
} from 'lucide-react'
import { skillCategories } from '../data/skills'

// Icon mapping dictionary
const iconMap = {
  Code2: Code2,
  Terminal: Terminal,
  Braces: Braces,
  Database: Database,
  Layout: Layout,
  Palette: Palette,
  Atom: Atom,
  Zap: Zap,
  Server: Server,
  Cpu: Cpu,
  Layers: Layers,
  Cloud: Cloud,
  FolderGit2: FolderGit2,
  GitBranch: GitBranch,
  Github: Github,
  Code: Code,
  Laptop: Laptop,
  Send: Send,
}

export default function Skills() {
  return (
    <section id="expertise" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">
            <span className="w-6 h-[1px] bg-cyan-400"></span>
            <span>03 // CORE CAPABILITIES</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-lg">
            A comprehensive overview of programming languages, frameworks, databases, and engineering tools utilized across my software projects.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIndex * 0.08 }}
              className="rounded-2xl glass-panel p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <h3 className="font-display font-bold text-lg text-white">
                    {group.category}
                  </h3>
                  <span className="font-mono text-[11px] text-cyan-400/80 px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/20">
                    {group.skills.length} Technologies
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed font-normal">
                  {group.description}
                </p>

                {/* Individual Skills List */}
                <div className="space-y-3">
                  {group.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Boxes
                    return (
                      <div
                        key={skill.name}
                        className="group/item p-2.5 rounded-xl bg-background-deep/60 border border-slate-800/80 hover:border-cyan-500/30 hover:bg-slate-900/40 transition-all"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-1.5 rounded-lg bg-cyan-950/60 text-cyan-400 group-hover/item:text-cyan-300 group-hover/item:bg-cyan-900/60 transition-colors shrink-0">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-xs font-semibold text-slate-200 group-hover/item:text-cyan-300 transition-colors">
                                {skill.name}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 truncate mt-0.5">
                              {skill.focus}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
