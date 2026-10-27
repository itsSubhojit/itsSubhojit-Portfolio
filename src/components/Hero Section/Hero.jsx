import React from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion, useReducedMotion } from 'framer-motion'

function Hero() {
  const shouldReduceMotion = useReducedMotion()

  // Transition settings per Figma handoff spec: 12px / 400ms
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

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <section className="w-full px-6 sm:px-12 md:px-[72px] pt-6 md:pt-10 flex flex-col gap-10 md:gap-14">
      {/* 1. Top Eyebrow Row */}
      <Motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-[var(--border-color)] pb-3"
      >
        <span className="font-mono text-[11px] tracking-wider uppercase text-[var(--accent)] font-medium">
          PORTFOLIO / SOFTWARE DEVELOPMENT
        </span>
        <span className="font-mono text-[11px] tracking-wider uppercase text-[var(--text-muted)]">
           KOLKATA, INDIA 
        </span>
      </Motion.div>

      {/* 2. Massive Editorial Display Name */}
      <Motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="w-full"
      >
        <Motion.h1
          variants={fadeUpVariant}
          className="font-serif text-[68px] sm:text-[96px] md:text-[132px] lg:text-[164px] leading-[0.94] text-[var(--text-primary)] font-normal tracking-tight select-none"
        >
          Subhojit Chakraborty
        </Motion.h1>
      </Motion.div>

      {/* 3. Hero Content: Two-column layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column (Copy + Actions) */}
        <Motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col gap-7 md:gap-9"
        >
          <Motion.span
            variants={fadeUpVariant}
            className="font-sans text-[20px] sm:text-[23px] md:text-[26px] text-[var(--text-primary)] font-normal"
          >
            Aspiring Software Developer
          </Motion.span>

          <Motion.p
            variants={fadeUpVariant}
            className="font-serif text-[32px] sm:text-[40px] md:text-[48px] leading-[1.12] text-[var(--text-primary)] font-normal max-w-xl"
          >
            Drawn to the logic behind things that work.
          </Motion.p>

          <Motion.p
            variants={fadeUpVariant}
            className="font-sans text-[15px] sm:text-[16px] leading-[1.6] text-[var(--text-muted)] max-w-lg"
          >
            BCA student in Kolkata, looking for a first opportunity to build as an SDE.
          </Motion.p>

          {/* Action Buttons */}
          <Motion.div
            variants={fadeUpVariant}
            className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-2"
          >
            <Link to="/projects">
              <Motion.button
                type="button"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                transition={{ duration: 0.18 }}
                className="h-[50px] sm:h-[52px] px-6 sm:px-7 rounded-full bg-[var(--accent)] text-[#0e0e0f] font-sans text-[14px] font-medium flex items-center gap-4 cursor-pointer hover:opacity-95 shadow-sm"
              >
                <span>View Projects</span>
                <span className="text-[17px] font-sans">↗</span>
              </Motion.button>
            </Link>

            <Link to="/contact">
              <Motion.button
                type="button"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.04)' }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                transition={{ duration: 0.18 }}
                className="h-[50px] sm:h-[52px] px-6 sm:px-7 rounded-full bg-transparent border border-[var(--border-color)] text-[var(--text-primary)] font-sans text-[14px] font-medium flex items-center gap-4 cursor-pointer hover:border-[var(--text-muted)] transition-colors"
              >
                <span>Contact Me</span>
                <span className="text-[17px] font-sans">↗</span>
              </Motion.button>
            </Link>
          </Motion.div>
        </Motion.div>

        {/* Right Column (Architectural Portrait Composition) */}
        <Motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col items-center lg:items-end"
        >
          <div className="relative w-full max-w-[360px]">
            {/* Photographic archive frame */}
            <div className="w-full bg-[var(--note-bg)] border border-[var(--border-color)] p-4 sm:p-5 flex flex-col justify-between rounded-sm shadow-sm transition-colors duration-200">
              {/* Frame metadata top */}
              <div className="flex items-center justify-between pb-3 font-mono text-[9px] sm:text-[10px] text-[var(--text-muted)] tracking-wider uppercase border-b border-[var(--border-color)]">
                <span>PORTRAIT / ARCHIVE</span>
                <span>3:4</span>
              </div>

              {/* Crop guide with User's Photo */}
              <div className="relative aspect-[3/4] w-full my-3 overflow-hidden bg-black/5 dark:bg-white/5 border border-[var(--border-color)]">
                <img
                  src="/my-pic.png"
                  alt="Subhojit Chakraborty"
                  className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                />

                {/* Technical crosshairs overlay matching Figma #4:2686 */}
                <div
                  className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30"
                  aria-hidden="true"
                >
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="18" y1="0" x2="18" y2="36" stroke="currentColor" strokeWidth="1" />
                    <line x1="0" y1="18" x2="36" y2="18" stroke="currentColor" strokeWidth="1" />
                    <circle cx="18" cy="18" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
                  </svg>
                </div>
              </div>

              {/* Frame metadata bottom */}
              <div className="flex items-center justify-between pt-3 font-mono text-[9px] sm:text-[10px] text-[var(--text-muted)] tracking-wider uppercase border-t border-[var(--border-color)]">
                <span>SC / PERSONAL ARCHIVE</span>
                <span>+</span>
              </div>
            </div>

            {/* Floating Opportunity Card matching Figma #4:2691 */}
            <Motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.35, ease: 'easeOut' }}
              className="absolute -bottom-6 -left-4 sm:-left-8 glass-panel rounded-lg p-3 sm:p-4 shadow-lg flex items-center gap-3 max-w-[280px] sm:max-w-[310px]"
            >
              <div className="w-[6px] h-[6px] rounded-full bg-[var(--accent)] shrink-0" aria-hidden="true" />
              <p className="font-sans text-[12px] sm:text-[13px] leading-tight text-[var(--text-primary)]">
                Open to fresher SDE roles
              </p>
            </Motion.div>
          </div>

          {/* Margin annotation */}
          <div className="w-full max-w-[360px] pt-10 sm:pt-12 flex flex-col gap-1 text-left">
            <span className="font-mono text-[10px] tracking-wider uppercase text-[var(--text-muted)]">
              LEARNING IN PUBLIC.
            </span>
            <span className="font-mono text-[10px] text-[var(--text-muted)] opacity-80">
              A student's perspective. A developer's intent..
            </span>
          </div>
        </Motion.div>
      </div>

      {/* 4. Hero Footnote Row */}
      <Motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        className="w-full pt-8 md:pt-12 pb-4 flex items-center justify-between border-t border-[var(--border-color)] font-mono text-[10px] tracking-wider text-[var(--text-muted)] uppercase"
      >
        <span>EARLY CAREER. LONG-TERM CURIOSITY.</span>
        <span className="flex items-center gap-1">
          SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
        </span>
      </Motion.div>
    </section>
  )
}

export default Hero