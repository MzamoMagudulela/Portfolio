import React from 'react'
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-slate-900 bg-background-deep/90 py-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Identity */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <div className="flex items-center space-x-2">
            <span className="font-display font-extrabold text-base text-white tracking-wide">
              Mzamo Magudulela
            </span>
            <span className="text-slate-600">|</span>
            <span className="font-mono text-xs text-cyan-400">
              Application Developer
            </span>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            Engineering Ideas Into Reality.
          </p>
        </div>

        {/* Status & Year */}
        <div className="flex items-center space-x-4 text-xs font-mono text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-slate-400">DIGITAL DIMENSION</span>
          </div>
          <span>•</span>
          <span>&copy; {new Date().getFullYear()} All Rights Reserved</span>
        </div>

        {/* Actions & Scroll to top */}
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com/MzamoMagudulela"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-background-card hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/mzamomagudulela"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-background-card hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-400 hover:text-white border border-cyan-500/30 transition-colors"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  )
}
