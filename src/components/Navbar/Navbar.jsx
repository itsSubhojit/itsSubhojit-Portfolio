import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    // Glass morphism navbar - responsive for all devices
    <div className='fixed top-0 left-0 right-0 z-50 flex justify-center'>
      
  {/* Navbar container */}
  <div className='w-full max-w-5xl rounded-full backdrop-blur-md bg-blue-400/20 border border-b-blue-700 m-2 sm:m-3 md:m-4 
                  flex items-center justify-between p-3 sm:p-4 shadow-lg'>
    
    {/* Logo */}
    <div>
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r glow-text">
        S
      </h1>
    </div>

    {/* Links */}
    <div className='flex gap-2 sm:gap-3 md:gap-6 text-sm sm:text-base md:text-lg font-serif font-bold'>
       <NavLink 
            to="/" 
            className={({ isActive }) =>
              isActive 
                ? "text-rose-500 border-b-2 border-rose-500 pb-1" 
                : "text-black/80 hover:text-rose-500 transition"
            }
          >
            Home
          </NavLink>
       <NavLink 
            to="/About" 
            className={({ isActive }) =>
              isActive 
                ? "text-rose-500 border-b-2 border-rose-500 pb-1" 
                : "text-black/80 hover:text-rose-500 transition"
            }
          >
            About
          </NavLink>
       <NavLink 
            to="/Skills" 
            className={({ isActive }) =>
              isActive 
                ? "text-rose-500 border-b-2 border-rose-500 pb-1" 
                : "text-black/80 hover:text-rose-500 transition"
            }
          >
            Skills
          </NavLink>
       <NavLink 
            to="/Contact" 
            className={({ isActive }) =>
              isActive 
                ? "text-rose-500 border-b-2 border-rose-500 pb-1" 
                : "text-black/80 hover:text-rose-500 transition"
            }
          >
            Contact
          </NavLink>
    </div>

  </div>
</div>
  )
}

export default Navbar