import React from 'react'
import { motion as Motion, useReducedMotion } from 'framer-motion'

const quickFacts = [
  { label: 'Based in', value: 'Kolkata, India' },
  { label: 'Education', value: 'BCA student' },
  { label: 'Focus', value: 'Backend development' },
  { label: 'Looking for', value: 'Fresher SDE roles' },
]

function About() {
  const shouldReduceMotion = useReducedMotion()

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
      },
    },
  }

  return (
    <section id="about" className="w-full px-6 sm:px-12 md:px-[72px] py-16 md:py-24 flex flex-col gap-10 md:gap-12">
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
          01 / About
        </span>
      </Motion.div>

      {/* 3. About Content: Two-column layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left Column: Personal Introduction */}
        <Motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="lg:col-span-7 flex flex-col gap-8 md:gap-10"
        >
          <Motion.h2
            variants={fadeUpVariant}
            className="font-serif text-[46px] sm:text-[62px] md:text-[80px] leading-[0.98] text-[var(--text-primary)] font-normal tracking-tight"
          >
            Curiosity first.
            <br />
            Code follows.
          </Motion.h2>

          <Motion.p
            variants={fadeUpVariant}
            className="font-sans text-[16px] sm:text-[18px] leading-[1.65] text-[var(--text-primary)] font-normal max-w-xl"
          >
            I’m Subhojit Chakraborty, a BCA student and backend developer based in Kolkata. I’m looking for fresher SDE roles where I can learn, contribute, and grow as a developer.
          </Motion.p>
        </Motion.div>

        {/* Right Column: The Short Version (Quick Facts) */}
        <Motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          <Motion.span
            variants={fadeUpVariant}
            className="font-mono text-[11px] tracking-wider uppercase text-[var(--text-muted)] font-medium pb-2"
          >
            THE SHORT VERSION
          </Motion.span>

          <div className="flex flex-col border-t border-[var(--border-color)]">
            {quickFacts.map((fact) => (
              <Motion.div
                key={fact.label}
                variants={fadeUpVariant}
                className="py-4 sm:py-4.5 border-b border-[var(--border-color)] flex items-baseline justify-between gap-4"
              >
                <span className="font-mono text-[11px] tracking-wide text-[var(--text-muted)] w-28 sm:w-36 shrink-0">
                  {fact.label}
                </span>
                <span className="font-sans text-[15px] sm:text-[16px] text-[var(--text-primary)] font-normal text-right">
                  {fact.value}
                </span>
              </Motion.div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  )
}

export default About