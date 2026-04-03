import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    // Glass morphism navbar - responsive for all devices
    <div className='fixed top-0 left-0 right-0 z-50 w-full md:max-w-20:'>
      
      {/* Navbar container with glass effect */}
      <div className='backdrop-blur-md bg-blue-400/20 border border-b-blue-700 rounded-2xl m-2 sm:m-3 md:m-4 
                        flex items-center justify-between p-3 sm:p-4 
                        shadow-lg'>
        
        {/* Logo section */}
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold 
                         bg-gradient-to-r glow-text">
            S
          </h1>
        </div>

        {/* Navigation links - responsive gap and text size */}
        <div className='flex gap-2 sm:gap-3 md:gap-10 text-sm sm:text-base md:text-lg font-serif font-bold'>
          <Link to="/" 
                className='hover:text-cyan-400 transition-colors duration-200 
                           text-black/80 hover:text-rose-500'>
            Home
          </Link>
          <Link to="/about" 
                className='hover:text-cyan-400 transition-colors duration-200 
                           text-black/80 hover:text-rose-500'>
            About
          </Link>
          <Link to="/skills" 
                className='hover:text-cyan-400 transition-colors duration-200 
                           text-black/80 hover:text-rose-500'>
            Skills
          </Link>
          <Link to="/contact" 
                className='hover:text-cyan-400 transition-colors duration-200 
                           text-black/80 hover:text-rose-500'>
            Contact
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar