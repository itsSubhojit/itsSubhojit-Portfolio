import React from 'react'
import { motion as Motion, useReducedMotion } from 'framer-motion'

function Footer() {
  const currentYear = new Date().getFullYear()
  const shouldReduceMotion = useReducedMotion()

  return (
    <footer className="w-full mt-24 md:mt-32 px-6 sm:px-12 md:px-[72px]">
      {/* Hairline Divider */}
      <div className="hairline-divider" />

      {/* Footer Bar */}
      <div className="min-h-[88px] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <span className="font-mono text-[10px] md:text-[11px] text-[var(--text-muted)] tracking-wider uppercase">
          © {currentYear} Csubhojit | All Rights Reserved
        </span>

        {/* Availability Status Dot */}
        <div className="flex items-center gap-2">
          <Motion.div
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: [1, 0.25, 1] }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-[6px] h-[6px] rounded-full bg-[var(--status-dot)]"
            aria-hidden="true"
          />
          <span className="font-mono text-[10px] md:text-[11px] text-[var(--text-primary)] font-normal tracking-wide">
            Available
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer