import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react'

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EXPERTISE', href: '#expertise' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar({ onOpenCV }) {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      // Section spy
      const sections = ['home', 'about', 'projects', 'expertise', 'education', 'contact']
      const scrollPosition = window.scrollY + 250

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="max-w-6xl mx-auto">
        <nav
          className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-background-deep/80 backdrop-blur-xl border border-cyan-500/20 shadow-lg shadow-black/40'
              : 'bg-background-surface/40 backdrop-blur-md border border-white/5'
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('#home')
            }}
            className="flex items-center space-x-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center shadow-glow-cyan/50 group-hover:scale-105 transition-transform duration-200">
              <span className="font-display font-black text-xs text-white tracking-tighter">MM</span>
              <div className="absolute inset-0 rounded-lg border border-cyan-300/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                Mzamo Magudulela
              </span>
              <span className="font-mono text-[9px] text-cyan-400 tracking-wider uppercase">
                Application Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links: HOME | ABOUT | PROJECTS | EXPERTISE | CONTACT */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-widest transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 ${
                    isActive
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-lg bg-cyan-500/15 border border-cyan-500/30 -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenCV}
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono text-cyan-300 hover:text-white border border-cyan-500/30 hover:border-cyan-400 bg-cyan-950/30 hover:bg-cyan-900/40 transition-all flex items-center space-x-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
            >
              <span>CV / RESUME</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-background-card border border-cyan-500/20 text-slate-200 hover:text-cyan-300 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 p-4 rounded-2xl bg-background-deep/95 backdrop-blur-2xl border border-cyan-500/25 shadow-2xl"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '')
                  return (
                    <button
                      key={item.label}
                      onClick={() => scrollTo(item.href)}
                      className={`text-left px-4 py-2.5 rounded-xl font-mono text-sm tracking-wider transition-colors ${
                        isActive
                          ? 'bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-bold'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  )
                })}
                <div className="pt-2 border-t border-slate-800 flex flex-col space-y-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false)
                      onOpenCV()
                    }}
                    className="w-full text-center px-4 py-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold tracking-wider flex items-center justify-center space-x-2"
                  >
                    <span>VIEW RESUME / CV</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
