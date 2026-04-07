import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <>
    {/* flex-col aur min-h-screen poore page ka structure handle karega */}
    <div className="flex flex-col min-h-screen">
      <Header/>
      
      {/* flex-grow bachi hui space occupy karega, footer ko niche push karne ke liye */}
      <main className="flex-grow pt-20">
          <Outlet/>
      </main>
      
      <Footer/>
    </div>
    </>
  )
}

export default Layout