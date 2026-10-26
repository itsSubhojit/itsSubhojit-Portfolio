import React from 'react'
import { motion as Motion, useReducedMotion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: null },
      { name: 'JavaScript', icon: '/JavaScript.svg' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML / CSS', icon: '/HTML.svg' },
      { name: 'React', icon: '/React-Dark.svg' },
      { name: 'Tailwind CSS', icon: '/TailwindCSS-Dark.svg' },
    ],
  },
  {
    title: 'Backend and Data',
    skills: [
      { name: 'Node.js', icon: '/NodeJS-Dark.svg' },
      { name: 'Express', icon: '/ExpressJS-Dark.svg' },
      { name: 'SQL / MySQL', icon: '/MySQL-Dark.svg' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: '/Git.svg' },
      { name: 'GitHub', icon: '/Github-Dark.svg' },
      { name: 'Postman', icon: '/Postman.svg' },
      { name: 'Netlify', icon: '/Netlify-Dark.svg' },
    ],
  },
]

function Skills() {
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
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  }

  return (
    <section id="skills" className="w-full px-6 sm:px-12 md:px-[72px] py-16 md:py-24 flex flex-col gap-10 md:gap-12">
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
          02 / Skills
        </span>
      </Motion.div>

      {/* 3. Skills Content: Two-column layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Headline and Stack Disclosure */}
        <Motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="lg:col-span-5 flex flex-col gap-7 md:gap-9"
        >
          <Motion.h2
            variants={fadeUpVariant}
            className="font-serif text-[46px] sm:text-[62px] md:text-[80px] leading-[0.98] text-[var(--text-primary)] font-normal tracking-tight"
          >
            A working
            <br />
            vocabulary.
          </Motion.h2>

          <Motion.div variants={fadeUpVariant} className="flex flex-col gap-2 max-w-sm">
            <span className="font-mono text-[10px] sm:text-[11px] tracking-wider uppercase text-[var(--accent)] font-medium">
              Example stack — confirm technologies
            </span>
            <p className="font-sans text-[13px] sm:text-[14px] leading-[1.6] text-[var(--text-muted)]">
              Illustrative only. Replace with the tools and languages actually used.
            </p>
          </Motion.div>
        </Motion.div>

        {/* Right Column: Categorized Technology Groups */}
        <Motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="lg:col-span-7 flex flex-col"
        >
          {skillGroups.map((group) => (
            <Motion.div
              key={group.title}
              variants={fadeUpVariant}
              className="py-6 sm:py-7 border-t border-[var(--border-color)] flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 sm:gap-8"
            >
              {/* Group Title */}
              <h3 className="font-serif text-[28px] sm:text-[34px] leading-tight text-[var(--text-primary)] font-normal shrink-0 sm:w-44 lg:w-52">
                {group.title}
              </h3>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 items-center">
                {group.skills.map((skill) => (
                  <Motion.div
                    key={skill.name}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { y: -2, borderColor: 'var(--accent)' }
                    }
                    transition={{ duration: 0.18 }}
                    className="px-3 py-1.5 rounded-[4px] border border-[var(--border-color)] bg-[var(--surface-glass)]/30 backdrop-blur-sm flex items-center gap-2 cursor-default transition-colors group"
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt=""
                        className="w-3.5 h-3.5 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                        aria-hidden="true"
                      />
                    )}
                    <span className="font-mono text-[10px] sm:text-[11px] text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                      {skill.name}
                    </span>
                  </Motion.div>
                ))}
              </div>
            </Motion.div>
          ))}
          {/* Bottom border to close the list */}
          <div className="border-t border-[var(--border-color)]" />
        </Motion.div>
      </div>
    </section>
  )
}

export default Skills