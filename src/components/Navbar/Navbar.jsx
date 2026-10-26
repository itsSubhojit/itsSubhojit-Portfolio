import React, { useEffect, useState, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion as Motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const navLinks = [
  { name: 'Home', path: '/', end: true },
  { name: 'About', path: '/about', end: false },
  { name: 'Skills', path: '/skills', end: false },
  { name: 'Projects', path: '/projects', end: false },
  { name: 'Contact', path: '/contact', end: false },
]

function Navbar() {
  const shouldReduceMotion = useReducedMotion()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileNavRef = useRef(null)

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

  // Close mobile menu on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [mobileMenuOpen])

  return (
    <Motion.header
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 md:pt-7 pointer-events-none"
    >
      {/* Floating navigation capsule */}
      <div
        ref={mobileNavRef}
        className="relative pointer-events-auto w-full max-w-[1296px] glass-panel
                   rounded-full
                   px-5 py-3 sm:px-7 sm:py-4
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

        {/* Mobile Layout (< md): Brand on Left, Theme Toggle & Animated Hamburger on Far Right */}
        <div className="flex md:hidden items-center justify-between">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[13px] font-medium font-sans text-[var(--text-primary)] tracking-tight truncate pr-2"
          >
            Subhojit Chakraborty
          </Link>

          {/* Far Right Action Controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme((prev) => !prev)}
              type="button"
              aria-label={theme ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex items-center gap-1.5 cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-1.5"
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

            {/* "Fries Right" Three-Line Bar with Crossing (X) Morph Animation */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="w-8 h-8 flex flex-col justify-center items-end gap-[4.5px] cursor-pointer text-[var(--text-primary)] p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none"
            >
              {/* Top Line (Full Width) */}
              <Motion.span
                animate={
                  shouldReduceMotion
                    ? undefined
                    : mobileMenuOpen
                    ? { rotate: 45, y: 6.5 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="w-[18px] h-[2px] bg-current rounded-full origin-center"
              />
              {/* Middle Line ("Fries Right": Shorter and Right-Aligned) */}
              <Motion.span
                animate={
                  shouldReduceMotion
                    ? { opacity: mobileMenuOpen ? 0 : 1 }
                    : mobileMenuOpen
                    ? { opacity: 0, scaleX: 0, x: 4 }
                    : { opacity: 1, scaleX: 1, x: 0 }
                }
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="w-[11px] h-[2px] bg-current rounded-full origin-right"
              />
              {/* Bottom Line (Full Width) */}
              <Motion.span
                animate={
                  shouldReduceMotion
                    ? undefined
                    : mobileMenuOpen
                    ? { rotate: -45, y: -6.5 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="w-[18px] h-[2px] bg-current rounded-full origin-center"
              />
            </button>
          </div>
        </div>

        {/* Floating Far-Right Mobile Menu Dropdown Card */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <Motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.95, y: -8 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, scale: 1, y: 0 }
              }
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.95, y: -8 }
              }
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden absolute top-[calc(100%+10px)] right-0 w-52 sm:w-56 bg-[#edeae3] dark:bg-[#161617] border border-[var(--border-color)] rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.18)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col gap-1 z-50 overflow-hidden"
            >
              <nav className="flex flex-col gap-0.5" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.end}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13px] font-sans transition-colors ${
                        isActive
                          ? 'bg-[var(--accent)]/10 text-[var(--accent)] font-medium'
                          : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.name}</span>
                        {isActive && (
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </Motion.header>
  )
}

export default Navbar