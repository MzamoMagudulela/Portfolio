import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, GitCommit, CheckCircle2, Calendar, MapPin } from 'lucide-react'
import { educationData } from '../data/education'

export default function Education() {
  const { degree, milestones } = educationData

  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">
            <span className="w-6 h-[1px] bg-cyan-400"></span>
            <span>04 // ACADEMIC & PROFESSIONAL CREDENTIALS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Education & Milestones
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-lg">
            Academic foundation, curriculum focus, and verified technical milestones in application development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Degree Showcase (Editorial Card) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl glass-panel p-6 sm:p-8 border-cyan-500/25 relative overflow-hidden">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-950/70 border border-cyan-500/30 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">
                    HIGHER EDUCATION
                  </span>
                  <p className="font-mono text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {degree.period}
                  </p>
                </div>
              </div>

              <h3 className="font-display font-bold text-2xl text-white leading-snug">
                {degree.qualification}
              </h3>
              <p className="text-cyan-300 font-mono text-sm mt-1">
                Specialization: {degree.specialization}
              </p>
              <p className="text-slate-400 text-xs font-mono mt-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-500" /> {degree.institution}
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mt-4 pt-4 border-t border-slate-800">
                {degree.description}
              </p>

              {/* Core Curriculum Highlights */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <h4 className="font-mono text-xs text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Key Academic Curriculum & Focus Areas</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {degree.coreModules.map((module, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-background-deep/60 border border-slate-800/80 text-xs text-slate-300 flex items-center space-x-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{module}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline of Achievements & Technical Milestones */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">
              TECHNICAL & DEVELOPMENT TIMELINE
            </h3>

            <div className="relative pl-6 border-l border-cyan-500/25 space-y-6">
              {milestones.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Node Bullet */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-background-void border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

                  <div className="p-5 rounded-2xl bg-background-card border border-slate-800 hover:border-cyan-500/30 transition-all">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                      <span className="text-cyan-400 font-semibold">{item.category}</span>
                      <span>{item.year}</span>
                    </div>

                    <h4 className="font-display font-bold text-base text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono mt-0.5 mb-2">
                      {item.organization}
                    </p>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
