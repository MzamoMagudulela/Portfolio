import React from 'react'
import { motion } from 'framer-motion'
import { Server, Database, Shield, Cpu, Code, ArrowUpRight } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900/80">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">
            <span className="w-6 h-[1px] bg-cyan-400"></span>
            <span>01 // BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Biography Column */}
          <div className="lg:col-span-8 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            <p className="text-xl sm:text-2xl text-slate-100 font-light leading-snug">
              I am a final-year <span className="text-white font-medium">Diploma in ICT (Applications Development)</span> student committed to architecting dependable, resilient software systems that solve tangible problems for businesses and users.
            </p>

            <p>
              My academic and practical journey centers on application development, backend engineering, and robust RESTful API design. I thrive on translating business logic and requirements into clean, maintainable codebases—pairing structured relational database schemas with predictable, testable service layers.
            </p>

            <p>
              Beyond core software engineering, I maintain a strong interest in <span className="text-cyan-300">cybersecurity</span> and <span className="text-cyan-300">data analytics</span>. Understanding defensive programming, log forensics, and data workflows ensures that every service I build is not only performant, but resilient and secure by design.
            </p>

            {/* Guiding Principles Editorial Callout */}
            <div className="p-6 rounded-2xl bg-background-card border-l-4 border-cyan-400 border-y border-r border-slate-800/80 mt-8">
              <p className="font-mono text-xs text-cyan-300 tracking-widest uppercase mb-2">
                ENGINEERING ETHOS
              </p>
              <blockquote className="font-display italic text-lg text-slate-200 leading-normal">
                "Software should be engineered for clarity, reliability, and measurable real-world utility—delivering seamless backend stability that empowers end users."
              </blockquote>
            </div>
          </div>

          {/* Right Column: Strategic Focus Areas (Editorial List, Not Cluttered Cards) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl glass-panel">
              <h3 className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-5 pb-3 border-b border-slate-800">
                Core Competencies & Focus
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-white">
                      Backend & API Engineering
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      FastAPI, Django, Java Spring, RESTful design and automated testing workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-white">
                      Data & Schema Modeling
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      ACID transactions, MySQL, SQLite, query optimization, and data analytics pipelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-white">
                      Application Security
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Log telemetry analysis, input validation, role-based authorization, and threat reduction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-white">
                      Problem Solving & Systems
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Translating operational workflows into scalable and automated digital products.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Fact / Academic Status Badge */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Academic Status</p>
                <p className="font-display font-semibold text-sm text-slate-200">Final Year ICT (App Dev)</p>
              </div>
              <span className="px-2.5 py-1 rounded text-[11px] font-mono bg-cyan-950 border border-cyan-500/30 text-cyan-300">
                2024
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
