import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, FileText, CheckCircle2, GraduationCap, Code2, Mail, MapPin } from 'lucide-react'

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null

  const handleDownload = () => {
    // Allows printing or saving directly from the browser's native print-to-PDF engine
    window.print()
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background-void/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl rounded-2xl glass-panel bg-background-deep/95 border border-cyan-500/30 p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center space-x-2 font-mono text-xs text-cyan-400 mb-1">
                <span>CURRICULUM VITAE // VERIFIED OVERVIEW</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white">
                Mzamo Magudulela
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                ICT Student | Application Developer • South Africa
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick CV Summary */}
          <div className="py-6 space-y-6 max-h-[60vh] overflow-y-auto pr-2">
            <div>
              <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-wider mb-2">
                Executive Profile
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Final-year Diploma in ICT (Applications Development) student passionate about software development, backend engineering, and creating reliable technology solutions that solve real-world problems. Experienced in designing REST APIs, relational databases, automated testing platforms, and scalable web applications.
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-wider mb-2">
                Education
              </h4>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <p className="font-display font-semibold text-sm text-white">
                  Diploma in Information and Communication Technology (ICT)
                </p>
                <p className="text-xs text-cyan-300 font-mono mt-0.5">
                  Specialization: Applications Development • 2022 — Present (Final Year)
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-wider mb-2">
                Core Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'FastAPI', 'Django', 'React', 'JavaScript', 'SQL (MySQL, SQLite)', 'REST APIs', 'Git', 'Postman'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-cyan-950/40 border border-cyan-500/20 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-wider mb-2">
                Key Projects
              </h4>
              <ul className="text-xs text-slate-300 space-y-2 font-mono">
                <li>• Learnitics / Learnatics — Educational LMS with RBAC</li>
                <li>• Automated API Testing Platform — High-speed HTTP assertion & benchmark suite</li>
                <li>• IT Support Ticket API — Enterprise ticket lifecycle service</li>
                <li>• Security Log Analyser — Telemetry inspection & anomaly detection</li>
                <li>• Restaurant Management System — POS & inventory operations</li>
                <li>• CommuniFix SA — Civic tech municipal issue reporter</li>
              </ul>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">
              Direct Contact: mzamo.magudulela.dev@gmail.com
            </span>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleDownload}
                className="px-4 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono text-xs font-bold flex items-center space-x-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Save / Print PDF</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
