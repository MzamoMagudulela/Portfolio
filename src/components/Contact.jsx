import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Copy,
  Check,
  Send,
  MessageSquare,
  Clock,
  Sparkles
} from 'lucide-react'

export default function Contact() {
  const email = 'mzamo.magudulela.dev@gmail.com'
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [statusMessage, setStatusMessage] = useState('')

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in all required fields.')
      return
    }

    // Direct mailto generation as per requirement (only implement real submission when configured)
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`

    setStatusMessage('Opening your mail client... Thank you for reaching out!')
  }

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">
            <span className="w-6 h-[1px] bg-cyan-400"></span>
            <span>05 // GET IN TOUCH</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Contact & Collaborations
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-lg">
            Interested in hiring, discussing an internship, or collaborating on a software project? Connect directly below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Connection Channels */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card with 1-click Copy */}
            <div className="p-6 rounded-2xl glass-panel">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2.5 rounded-xl bg-cyan-950/70 border border-cyan-500/30 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">
                    Direct Email
                  </span>
                  <p className="text-xs text-slate-400">Responses within 24 hours</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-background-deep border border-slate-800 flex items-center justify-between mt-4">
                <span className="font-mono text-xs text-slate-200 select-all truncate pr-2">
                  {email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/30 font-mono text-xs flex items-center space-x-1.5 transition-colors shrink-0"
                  aria-label="Copy Email Address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social & Profiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://github.com/MzamoMagudulela"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl glass-card flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <Github className="w-6 h-6 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-[10px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                    ↗
                  </span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-white">
                    GitHub
                  </h4>
                  <p className="font-mono text-xs text-slate-400 mt-0.5">
                    @MzamoMagudulela
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/mzamomagudulela"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl glass-card flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-[10px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                    ↗
                  </span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-white">
                    LinkedIn
                  </h4>
                  <p className="font-mono text-xs text-slate-400 mt-0.5">
                    Mzamo Magudulela
                  </p>
                </div>
              </a>
            </div>

            {/* Geographic & Availability Card */}
            <div className="p-5 rounded-2xl bg-background-deep/80 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-slate-800/80 text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-xs text-white">
                    South Africa
                  </h4>
                  <p className="font-mono text-[11px] text-slate-400 mt-0.5">
                    Standard Time (SAST, UTC+2)
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
                Active & Available
              </span>
            </div>
          </div>

          {/* Right Column: Professional Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border-cyan-500/25">
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Launch a direct email conversation with Mzamo Magudulela.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Internship Opportunity / Project Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    MESSAGE *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Mzamo, we came across your developer portfolio and would love to discuss..."
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500 resize-none"
                  />
                </div>

                {statusMessage && (
                  <p className="text-xs font-mono text-cyan-300 pt-1">
                    {statusMessage}
                  </p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-mono text-xs tracking-wider uppercase font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-glow-cyan transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-slate-950" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
