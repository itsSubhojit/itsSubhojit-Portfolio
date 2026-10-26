import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion as Motion, useReducedMotion } from 'framer-motion'

const navLinks = [
  { name: 'Home', path: '/', end: true },
  { name: 'About', path: '/about', end: false },
  { name: 'Skills', path: '/skills', end: false },
  { name: 'Projects', path: '/projects', end: false },
  { name: 'Contact', path: '/contact', end: false },
]

function Navbar() {
  const shouldReduceMotion = useReducedMotion()

  // 1. Initial state localStorage se check karein (strictly preserved)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (theme) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  return (
    <Motion.header
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 md:pt-7 pointer-events-none"
    >
      {/* Floating navigation capsule */}
      <div
        className="pointer-events-auto w-full max-w-[1296px] glass-panel
                   rounded-[25px] md:rounded-full
                   px-5 py-3.5 sm:px-7 sm:py-4
                   shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)]
                   transition-colors duration-200"
      >
        {/* Desktop Layout (md and up) */}
        <div className="hidden md:flex items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="text-[14px] font-medium font-sans text-[var(--text-primary)] hover:opacity-80 transition-opacity tracking-tight"
          >
            Subhojit Chakraborty
          </Link>

          {/* Page Links */}
          <nav className="flex items-center gap-7 lg:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                className={({ isActive }) =>
                  `relative text-[13px] font-sans transition-colors duration-150 py-1 ${
                    isActive
                      ? 'text-[var(--text-primary)] font-medium'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <Motion.div
                        layoutId={shouldReduceMotion ? undefined : 'desktop-nav-active'}
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[var(--accent)]"
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme((prev) => !prev)}
            type="button"
            aria-label={theme ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex items-center gap-2.5 cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150 group"
          >
            <span className="font-mono text-[10px] tracking-wider uppercase select-none">
              {theme ? 'DARK' : 'LIGHT'}
            </span>
            <div className="w-[17px] height-[17px] flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
              {theme ? (
                // Sun SVG for switching to Light
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[17px] h-[17px] stroke-current text-[var(--text-primary)]"
                >
                  <circle cx="8.5" cy="8.5" r="3.2" stroke="currentColor" strokeWidth="1.2" />
                  <path
                    d="M8.5 1.5V3M8.5 14V15.5M1.5 8.5H3M14 8.5H15.5M3.55 3.55L4.61 4.61M12.39 12.39L13.45 13.45M3.55 13.45L4.61 12.39M12.39 4.61L13.45 3.55"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                // Moon SVG for switching to Dark
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[17px] h-[17px] stroke-current text-[var(--text-primary)]"
                >
                  <path
                    d="M14.5 9.8A6.38 6.38 0 1 1 7.2 2.5a5.1 5.1 0 0 0 7.3 7.3Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </button>
        </div>

        {/* Mobile Layout (< md) matching Figma #4:2877 */}
        <div className="flex md:hidden flex-col gap-3">
          {/* Top Row: Brand & Theme Toggle */}
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-[13px] font-medium font-sans text-[var(--text-primary)] tracking-tight"
            >
              Subhojit Chakraborty
            </Link>

            <button
              onClick={() => setTheme((prev) => !prev)}
              type="button"
              aria-label={theme ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex items-center gap-1.5 cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-1"
            >
              <span className="font-mono text-[9px] tracking-wider uppercase">
                {theme ? 'DARK' : 'LIGHT'}
              </span>
              <div className="w-[15px] h-[15px] flex items-center justify-center">
                {theme ? (
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[15px] h-[15px] stroke-current text-[var(--text-primary)]"
                  >
                    <circle cx="8.5" cy="8.5" r="3.2" stroke="currentColor" strokeWidth="1.2" />
                    <path
                      d="M8.5 1.5V3M8.5 14V15.5M1.5 8.5H3M14 8.5H15.5M3.55 3.55L4.61 4.61M12.39 12.39L13.45 13.45M3.55 13.45L4.61 12.39M12.39 4.61L13.45 3.55"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[15px] h-[15px] stroke-current text-[var(--text-primary)]"
                  >
                    <path
                      d="M14.5 9.8A6.38 6.38 0 1 1 7.2 2.5a5.1 5.1 0 0 0 7.3 7.3Z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </button>
          </div>

          {/* Bottom Row: Page Links */}
          <nav className="flex items-center justify-between border-t border-[var(--border-color)] pt-2.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                className={({ isActive }) =>
                  `relative text-[12px] font-sans transition-colors duration-150 py-0.5 ${
                    isActive
                      ? 'text-[var(--text-primary)] font-medium'
                      : 'text-[var(--text-muted)]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <Motion.div
                        layoutId={shouldReduceMotion ? undefined : 'mobile-nav-active'}
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[var(--accent)]"
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </Motion.header>
  )
}

export default Navbar