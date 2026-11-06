import React, { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ShieldCheck, Sparkles, Terminal } from 'lucide-react'

export default function PortraitFrame3D() {
  const containerRef = useRef(null)
  const [imgSrc, setImgSrc] = useState('./assets/mzamo-portrait.jpg')
  const [isHovered, setIsHovered] = useState(false)

  // Mouse position values for 3D tilt
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth physics spring for realistic tilt response without jitter
  const springConfig = { damping: 25, stiffness: 180 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)

  // Dynamic 3D rotation angles
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [12, -12])
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-14, 14])
  
  // Specular sheen highlight coordinate
  const sheenX = useTransform(smoothMouseX, [-0.5, 0.5], ['0%', '100%'])
  const sheenY = useTransform(smoothMouseY, [-0.5, 0.5], ['0%', '100%'])

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const clientX = e.clientX - rect.left
    const clientY = e.clientY - rect.top
    const xPct = clientX / width - 0.5
    const yPct = clientY / height - 0.5
    mouseX.set(xPct)
    mouseY.set(yPct)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  // Gracefully fall back to vector placeholder if custom photo is not yet provided
  const handleImageError = () => {
    if (imgSrc !== './assets/mzamo-portrait-placeholder.svg') {
      setImgSrc('./assets/mzamo-portrait-placeholder.svg')
    }
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center p-4 lg:p-6 select-none"
      style={{ perspective: 1200 }}
    >
      {/* Ambient Backlight Glow */}
      <motion.div
        animate={{
          scale: isHovered ? 1.08 : 1,
          opacity: isHovered ? 0.75 : 0.45,
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="absolute w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[440px] rounded-3xl bg-gradient-to-tr from-accent-blue/40 via-accent-cyan/25 to-indigo-600/30 blur-2xl pointer-events-none"
      />

      {/* Main 3D Card Floating Shell */}
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative animate-float-slow w-[290px] sm:w-[330px] md:w-[370px] lg:w-[410px] aspect-[4/5] rounded-2xl p-[2px] bg-gradient-to-b from-cyan-400/60 via-blue-600/40 to-slate-800/80 shadow-portrait"
      >
        {/* Outer Glass Card Border */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-background-deep/90 backdrop-blur-xl border border-cyan-500/20 flex flex-col">
          
          {/* Subtle Top Status Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-background-surface/80 border-b border-cyan-500/15 z-20">
            <div className="flex items-center space-x-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="font-mono text-[10px] text-cyan-300 font-medium tracking-wider uppercase">
                PORTRAIT // SYSTEM READY
              </span>
            </div>
            <div className="flex items-center space-x-1.5 text-slate-400">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-mono text-[10px] text-slate-400">ID: MM-2024</span>
            </div>
          </div>

          {/* Portrait Image Container */}
          <div className="relative flex-1 w-full overflow-hidden bg-[#050917] flex items-center justify-center">
            {/* The Actual Professional Photograph / Seamless Fallback */}
            <img
              src={imgSrc}
              alt="Mzamo Magudulela — Application Developer & ICT Specialist"
              onError={handleImageError}
              className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-105"
              style={{
                // Ensure zero distortion of human facial proportions
                aspectRatio: 'auto',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
            />

            {/* Cyan edge illumination gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background-void via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Dynamic Cursor-driven Specular Light Sheen */}
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
              style={{
                background: `radial-gradient(circle 280px at 50% 30%, rgba(255,255,255,0.7), transparent 70%)`,
              }}
            />

            {/* Sci-Fi HUD Decorative Corner Reticles */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400/80 pointer-events-none" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400/80 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400/80 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400/80 pointer-events-none" />
          </div>

          {/* Lower Glass Identification Plate */}
          <div className="px-5 py-3.5 bg-background-surface/90 border-t border-cyan-500/20 backdrop-blur-md z-20 flex items-center justify-between">
            <div>
              <p className="font-display font-bold text-sm tracking-wide text-white">
                Mzamo Magudulela
              </p>
              <p className="font-mono text-[11px] text-cyan-400 tracking-tight">
                ICT Student | App Developer
              </p>
            </div>
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-mono text-[10px] uppercase tracking-wider">Verified</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
