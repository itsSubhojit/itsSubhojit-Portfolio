import React, { useState } from 'react'
import { motion as Motion, AnimatePresence, useReducedMotion } from 'framer-motion'

function Contact() {
  const shouldReduceMotion = useReducedMotion()

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    'bot-field': '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errors, setErrors] = useState({})
  const [lastSubmit, setLastSubmit] = useState(0)

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleChange = (e) => {
    const { name } = e.target
    let { value } = e.target

    if (name === 'message' && value.length > 20) {
      value = value.slice(0, 20)
    }

    setFormData((prev) => ({ ...prev, [name]: value }))

    // REAL-TIME VALIDATION (preserved exactly)
    const newErrors = { ...errors }

    if (name === 'first_name') {
      if (value.trim().length > 0 && value.trim().length < 3) {
        newErrors.first_name = 'Min 3 chars'
      } else {
        delete newErrors.first_name
      }
    }

    if (name === 'last_name') {
      if (value.trim().length > 0 && value.trim().length < 3) {
        newErrors.last_name = 'Min 3 chars'
      } else {
        delete newErrors.last_name
      }
    }

    if (name === 'email') {
      if (value.trim().length > 0 && !isValidEmail(value)) {
        newErrors.email = 'Invalid Email'
      } else {
        delete newErrors.email
      }
    }

    if (name === 'message') {
      if (/https?:\/\/|www\./i.test(value)) {
        newErrors.message = 'Links not allowed'
      } else if (/(.)\1{4,}/.test(value)) {
        newErrors.message = 'No repeated characters'
      } else {
        delete newErrors.message
      }
    }

    setErrors(newErrors)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.first_name.trim() || formData.first_name.trim().length < 3) {
      newErrors.first_name = formData.first_name.trim().length === 0 ? 'Required' : 'Min 3 chars'
    }

    if (!formData.last_name.trim() || formData.last_name.trim().length < 3) {
      newErrors.last_name = formData.last_name.trim().length === 0 ? 'Required' : 'Min 3 chars'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Required'
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid Email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Required'
    } else if (/https?:\/\/|www\./i.test(formData.message)) {
      newErrors.message = 'Links not allowed'
    } else if (/(.)\1{4,}/.test(formData.message)) {
      newErrors.message = 'No repeated characters'
    } else if (formData.message.length > 20) {
      newErrors.message = 'Max 20 chars'
    }

    if (Date.now() - lastSubmit < 30000) {
      newErrors.general = 'Please wait 30 seconds before sending again'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setStatus('error')
      return
    }

    setErrors({})
    setLastSubmit(Date.now())
    setStatus('sending')

    const body = new URLSearchParams({
      'form-name': 'contact',
      'bot-field': formData['bot-field'] || '',
      ...formData,
    }).toString()

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ first_name: '', last_name: '', email: '', message: '', 'bot-field': '' })
      } else {
        const isLocal =
          typeof window !== 'undefined' &&
          (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
        setStatus('error')
        setErrors({
          general: isLocal
            ? 'Netlify Forms only accepts submissions when deployed on Netlify (local dev has no form backend).'
            : 'Submission failed. Please try again.',
        })
      }
    } catch {
      setStatus('error')
      setErrors({ general: 'Something went wrong. Please try again.' })
    }
  }

  const fadeUpVariant = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section id="contact" className="w-full px-6 sm:px-12 md:px-[72px] py-16 md:py-24 flex flex-col gap-10 md:gap-14">
      {/* 1. Hairline Divider */}
      <div className="hairline-divider" />

      {/* 2. Section Index */}
      <Motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="flex items-center gap-3"
      >
        <div className="w-[5px] h-[5px] bg-[var(--accent)] shrink-0" aria-hidden="true" />
        <span className="font-mono text-[12px] tracking-wider uppercase text-[var(--text-primary)] font-medium">
          04 / Contact
        </span>
      </Motion.div>

      {/* 3. Grand Headline */}
      <Motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="w-full"
      >
        <h2 className="font-serif text-[56px] sm:text-[84px] md:text-[118px] lg:text-[156px] leading-[0.94] text-[var(--text-primary)] font-normal tracking-tight select-none">
          Let's work together
        </h2>
      </Motion.div>

      {/* 4. Two-Column Layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left Column: Invitation and Profiles */}
        <Motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="lg:col-span-5 flex flex-col gap-10 md:gap-12"
        >
          <p className="font-sans text-[20px] sm:text-[23px] md:text-[24px] leading-[1.55] text-[var(--text-primary)] font-normal max-w-md">
            Have an opening for a fresher SDE? I’d like to hear from you.
          </p>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] tracking-wider uppercase text-[var(--text-muted)] font-medium">
              ELSEWHERE / PROFILE LINKS
            </span>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/itsSubhojit"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[15px] sm:text-[16px] text-[var(--text-primary)] hover:text-[var(--accent)] underline underline-offset-4 transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/csubhojit7"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[15px] sm:text-[16px] text-[var(--text-primary)] hover:text-[var(--accent)] underline underline-offset-4 transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </Motion.div>

        {/* Right Column: Architectural Underline Form */}
        <Motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="lg:col-span-7 flex flex-col"
        >
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-8 sm:gap-9"
          >
            {/* Hidden inputs strictly preserved for Netlify form processing */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden" aria-hidden="true">
              <label>
                Don’t fill this out if you’re human:{' '}
                <input name="bot-field" value={formData['bot-field']} onChange={handleChange} />
              </label>
            </p>

            {/* Row: First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-8">
              {/* First Name */}
              <div className="flex flex-col gap-1.5 group">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wide">
                  <label htmlFor="first_name" className="text-[var(--text-primary)] font-medium">
                    First Name *
                  </label>
                  {errors.first_name ? (
                    <span className="text-[var(--accent)] font-medium tracking-tight">
                      ! {errors.first_name}
                    </span>
                  ) : formData.first_name.trim().length >= 3 ? (
                    <span className="text-[var(--status-dot)] font-medium tracking-tight">
                      ✓ Valid
                    </span>
                  ) : null}
                </div>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full bg-transparent border-b border-[var(--border-color)] focus:border-[var(--accent)] py-2 text-[18px] sm:text-[20px] font-sans text-[var(--text-primary)] placeholder-[var(--text-muted)]/40 focus:outline-none transition-colors duration-200"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-1.5 group">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wide">
                  <label htmlFor="last_name" className="text-[var(--text-primary)] font-medium">
                    Last Name *
                  </label>
                  {errors.last_name ? (
                    <span className="text-[var(--accent)] font-medium tracking-tight">
                      ! {errors.last_name}
                    </span>
                  ) : formData.last_name.trim().length >= 3 ? (
                    <span className="text-[var(--status-dot)] font-medium tracking-tight">
                      ✓ Valid
                    </span>
                  ) : null}
                </div>
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full bg-transparent border-b border-[var(--border-color)] focus:border-[var(--accent)] py-2 text-[18px] sm:text-[20px] font-sans text-[var(--text-primary)] placeholder-[var(--text-muted)]/40 focus:outline-none transition-colors duration-200"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-1.5 group">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wide">
                <label htmlFor="email" className="text-[var(--text-primary)] font-medium">
                  Email *
                </label>
                {errors.email ? (
                  <span className="text-[var(--accent)] font-medium tracking-tight">
                    ! {errors.email}
                  </span>
                ) : formData.email.trim() && isValidEmail(formData.email) ? (
                  <span className="text-[var(--status-dot)] font-medium tracking-tight">
                    ✓ Valid format
                  </span>
                ) : null}
              </div>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="johndoe@example.com"
                className="w-full bg-transparent border-b border-[var(--border-color)] focus:border-[var(--accent)] py-2 text-[18px] sm:text-[20px] font-sans text-[var(--text-primary)] placeholder-[var(--text-muted)]/40 focus:outline-none transition-colors duration-200"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-1.5 group">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wide">
                <label htmlFor="message" className="text-[var(--text-primary)] font-medium">
                  Message *
                </label>
                {errors.message ? (
                  <span className="text-[var(--accent)] font-medium tracking-tight">
                    ! {errors.message}
                  </span>
                ) : formData.message.trim().length > 0 ? (
                  <span className="text-[var(--status-dot)] font-medium tracking-tight">
                    {formData.message.length}/20 chars
                  </span>
                ) : (
                  <span className="text-[var(--text-muted)] text-[10px]">
                    Max 20 chars
                  </span>
                )}
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                maxLength={20}
                rows={2}
                placeholder="Tell me about the role or project..."
                className="w-full bg-transparent border-b border-[var(--border-color)] focus:border-[var(--accent)] py-2 text-[18px] sm:text-[20px] font-sans text-[var(--text-primary)] placeholder-[var(--text-muted)]/40 focus:outline-none resize-none transition-colors duration-200"
              />
            </div>

            {/* Status Feedback Notice Banner */}
            <AnimatePresence>
              {status === 'success' && (
                <Motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-xl bg-[var(--status-dot)]/10 border border-[var(--status-dot)] text-[var(--text-primary)] font-sans text-[14px] flex items-center gap-3"
                >
                  <span className="text-[var(--status-dot)] font-mono text-[16px]">✓</span>
                  <span>Message sent successfully! I’ll get back to you shortly.</span>
                </Motion.div>
              )}

              {status === 'error' && (
                <Motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)] text-[var(--text-primary)] font-sans text-[14px] flex items-center gap-3"
                >
                  <span className="text-[var(--accent)] font-mono text-[16px]">!</span>
                  <span>{errors.general || 'Please check and resolve the errors above.'}</span>
                </Motion.div>
              )}
            </AnimatePresence>

            {/* Submit Action Button */}
            <div className="flex items-center justify-between pt-2">
              <Motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                transition={{ duration: 0.18 }}
                className="h-[52px] px-8 rounded-full bg-[var(--accent)] text-[#0e0e0f] font-sans text-[14px] font-medium flex items-center gap-4 cursor-pointer hover:opacity-95 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{status === 'sending' ? 'Sending message...' : 'Send Message'}</span>
                <span className="text-[17px] font-sans">↗</span>
              </Motion.button>

            </div>
          </form>
        </Motion.div>
      </div>
    </section>
  )
}

export default Contact