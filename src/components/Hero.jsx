import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, FileText, Github, Linkedin, Sparkles, MapPin, Code2 } from 'lucide-react'
import PortraitFrame3D from './PortraitFrame3D'

export default function Hero({ onOpenCV }) {
  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Typography, Value Proposition & CTA Actions */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left z-10"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/25 backdrop-blur-md w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="font-mono text-xs text-cyan-300 font-medium tracking-wide">
              OPEN FOR INTERNSHIPS & TECH ROLES
            </span>
            <span className="text-slate-600">|</span>
            <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-cyan-400" /> South Africa
            </span>
          </div>

          {/* Identity & Headline */}
          <div className="space-y-2">
            <h2 className="font-mono text-sm sm:text-base text-cyan-400 font-medium tracking-widest uppercase">
              Mzamo Magudulela
            </h2>
            <p className="font-mono text-xs sm:text-sm text-slate-400">
              ICT Student | Application Developer
            </p>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] pt-2">
              Engineering Ideas{' '}
              <span className="text-gradient-cyan block sm:inline">
                Into Reality.
              </span>
            </h1>
          </div>

          {/* Specified Introduction */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
            I'm an ICT student passionate about software development, backend engineering and creating technology solutions that solve real-world problems.
          </p>

          {/* Quick Technical Highlights */}
          <div className="flex flex-wrap gap-2 pt-1">
            {['Java', 'Python', 'FastAPI', 'React', 'REST APIs', 'SQL'].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-cyan-500/15 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* Explore My Work Button */}
            <button
              onClick={scrollToProjects}
              className="px-6 py-3.5 rounded-xl font-mono text-xs tracking-wider uppercase font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-glow-cyan transition-all transform hover:-translate-y-0.5 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 text-slate-950" />
            </button>

            {/* Download CV Button */}
            <button
              onClick={onOpenCV}
              className="px-6 py-3.5 rounded-xl font-mono text-xs tracking-wider uppercase font-medium text-slate-200 bg-background-card hover:bg-slate-800/80 border border-cyan-500/30 hover:border-cyan-400 transition-all transform hover:-translate-y-0.5 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Download CV</span>
            </button>

            {/* Social Links: GitHub & LinkedIn */}
            <div className="flex items-center space-x-2.5 pl-2">
              <a
                href="https://github.com/MzamoMagudulela"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-background-card border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-950/30 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mzamomagudulela"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-background-card border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-950/30 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Portrait Presentation */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center relative z-10"
        >
          <PortraitFrame3D />
        </motion.div>
      </div>

      {/* Subtle Bottom Scroll Cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
          />
        </div>
      </div>
    </section>
  )
}
