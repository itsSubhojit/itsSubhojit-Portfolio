import React, { useState } from 'react'
import { motion as Motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import projectsData from '../ProjectsData/ProjectsData'

function Projects() {
  const [expandedId, setExpandedId] = useState(1) // Default first project expanded
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

  return (
    <section id="projects" className="w-full px-6 sm:px-12 md:px-[72px] py-16 md:py-24 flex flex-col gap-10 md:gap-14">
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
          03 / Projects
        </span>
      </Motion.div>

      {/* 3. Section Introduction */}
      <Motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="w-full flex flex-col gap-4"
      >
        <h2 className="font-serif text-[56px] sm:text-[76px] md:text-[96px] lg:text-[112px] leading-[0.96] text-[var(--text-primary)] font-normal tracking-tight">
          Selected projects
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 font-mono text-[11px] tracking-wider uppercase text-[var(--text-muted)] border-b border-[var(--border-color)] pb-4">
          <span>{projectsData.length} Selected works</span>
          <span>Interactive schematic view</span>
        </div>
      </Motion.div>

      {/* 4. Architectural Project Row List */}
      <div className="w-full flex flex-col">
        {projectsData.map((project, index) => {
          const isExpanded = expandedId === project.id
          const indexFormatted = String(index + 1).padStart(2, '0')

          return (
            <Motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUpVariant}
              className={`w-full border-t transition-colors duration-200 ${
                isExpanded
                  ? 'border-[var(--accent)]'
                  : 'border-[var(--border-color)] hover:border-[var(--text-muted)]'
              }`}
            >
              {/* Row Header (Clickable / Focusable) */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => setExpandedId(isExpanded ? null : project.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setExpandedId(isExpanded ? null : project.id)
                  }
                }}
                className="w-full py-6 sm:py-8 md:py-9 flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-8 cursor-pointer select-none group"
                aria-expanded={isExpanded}
              >
                {/* Left: Number + Title */}
                <div className="flex items-baseline gap-6 sm:gap-10 md:gap-16">
                  {/* Project Index */}
                  <span
                    className={`font-mono text-[12px] md:text-[13px] tracking-wider transition-colors duration-180 w-8 sm:w-12 shrink-0 ${
                      isExpanded
                        ? 'text-[var(--accent)] font-medium'
                        : 'text-[var(--text-muted)] group-hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {indexFormatted}
                  </span>

                  {/* Project Title */}
                  <h3
                    className={`font-serif text-[34px] sm:text-[46px] md:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight transition-colors duration-180 ${
                      isExpanded
                        ? 'text-[var(--accent)]'
                        : 'text-[var(--text-primary)] group-hover:text-[var(--accent)]'
                    }`}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Right: Inline Links */}
                <div
                  className="flex items-center gap-6 pl-14 sm:pl-22 md:pl-0 shrink-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[13px] sm:text-[14px] text-[var(--text-primary)] hover:text-[var(--accent)] underline underline-offset-4 transition-colors"
                    >
                      Live ↗
                    </a>
                  ) : (
                    <span className="font-mono text-[11px] text-[var(--text-muted)] opacity-60">
                      Not live
                    </span>
                  )}

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[13px] sm:text-[14px] text-[var(--text-primary)] hover:text-[var(--accent)] underline underline-offset-4 transition-colors"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>

              {/* Expandable Preview Section */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <Motion.div
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, height: 0 }
                    }
                    animate={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 1, height: 'auto' }
                    }
                    exit={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, height: 0 }
                    }
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden pb-10 pt-2"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pl-0 md:pl-28 lg:pl-32">
                      {/* Left: Schematic Preview Frame with project.img */}
                      <div className="lg:col-span-7 bg-[var(--note-bg)] border border-[var(--border-color)] rounded-sm overflow-hidden p-3 sm:p-4 shadow-sm flex flex-col justify-between">
                        {/* Preview Top Header */}
                        <div className="flex items-center justify-between pb-2 font-mono text-[9px] sm:text-[10px] text-[var(--text-muted)] tracking-wider uppercase border-b border-[var(--border-color)]">
                          <span>PROJECT SCHEMATIC</span>
                          <span>ARCHIVE REF: #{indexFormatted}</span>
                        </div>

                        {/* Image Frame */}
                        <div className="relative aspect-[16/9] w-full my-3 overflow-hidden rounded-sm bg-black/5 dark:bg-white/5 border border-[var(--border-color)]">
                          <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>

                        {/* Preview Bottom Footer */}
                        <div className="flex items-center justify-between pt-2 font-mono text-[9px] text-[var(--text-muted)] tracking-wider uppercase border-t border-[var(--border-color)]">
                          <span>SCREENSHOT PREVIEW</span>
                          <span>CONFIRMED WORK</span>
                        </div>
                      </div>

                      {/* Right: Description & Action Buttons */}
                      <div className="lg:col-span-5 flex flex-col justify-between gap-6 py-2">
                        <div className="flex flex-col gap-4">
                          <span className="font-mono text-[11px] tracking-wider uppercase text-[var(--accent)] font-medium">
                            Project Summary
                          </span>
                          <p className="font-serif text-[24px] sm:text-[28px] md:text-[32px] leading-[1.25] text-[var(--text-primary)] font-normal">
                            {project.desc}
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-3 pt-4">
                          <a
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-[44px] px-6 rounded-full bg-[var(--accent)] text-[#0e0e0f] font-sans text-[13px] font-medium flex items-center gap-3 hover:opacity-90 transition-opacity"
                          >
                            <span>Source Code</span>
                            <span>↗</span>
                          </a>

                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="h-[44px] px-6 rounded-full border border-[var(--border-color)] text-[var(--text-primary)] font-sans text-[13px] font-medium flex items-center gap-3 hover:border-[var(--text-muted)] transition-colors"
                            >
                              <span>View Live</span>
                              <span>↗</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Motion.div>
                )}
              </AnimatePresence>
            </Motion.div>
          )
        })}

        {/* Hairline Divider at the bottom */}
        <div className="hairline-divider" />
      </div>

      {/* 5. Project List Footnote */}
      <Motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="w-full flex items-center justify-between font-mono text-[10px] tracking-wider uppercase text-[var(--text-muted)]"
      >
        <span>4 PROJECTS, MORE COMING</span>
        <span>CLICK TO EXPAND DETAILS</span>
      </Motion.div>
    </section>
  )
}

export default Projects