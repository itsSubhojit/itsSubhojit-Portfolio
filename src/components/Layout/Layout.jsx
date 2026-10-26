import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout() {
  const { pathname } = useLocation()

  // Scroll to top on route navigation
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main container with spacing for floating navbar */}
      <main className="flex-grow pt-24 sm:pt-28 md:pt-32">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout