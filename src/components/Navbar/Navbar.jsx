import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(false)

 useEffect(() => {
    const root = window.document.documentElement;
    if(theme){
      root.classList.remove('light')
      root.classList.add('dark')
    }else{
      root.classList.remove('dark')
      root.classList.add('light')
    }
  }, [theme])
  

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
   
      <button
      onClick={() => setMenuOpen(prev => !prev)}
      className='sm:hidden z-50 transition-transform duration-200 active:scale-90' 
      >
         <img className='w-8' src="/icons8-hamburger-menu.svg" alt="" />
      </button>

       {menuOpen && (
  <div className='absolute top-20 right-4 w-[80%] max-w-xs 
                        flex flex-col items-center gap-4 
                        bg-white/30 backdrop-blur-lg border border-white/40 
                        rounded-xl py-6 shadow-lg sm:hidden z-40 font-serif font-bold'>

    <NavLink className="text-lg font-semibold hover:text-rose-500 transition" to="/">Home</NavLink>
    <NavLink className="text-lg font-semibold hover:text-rose-500 transition" to="/About">About</NavLink>
    <NavLink className="text-lg font-semibold hover:text-rose-500 transition" to="/Skills">Skills</NavLink>
    <NavLink className="text-lg font-semibold hover:text-rose-500 transition" to="/Contact">Contact</NavLink>

  </div>
)}

      <div className='hidden sm:flex gap-3 md:gap-6 text-sm sm:text-base md:text-lg font-serif font-bold'>    
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

     {/* Dark mode UI */}
     <div className='mt-7 md:mt-10 mr-4 flex items-center w-8 h-4 rounded-full bg-gray-900 '> 
       <button className="p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30"

       onClick={()=> setTheme(!theme)}
       >
    {theme ? '☀️' : '🌙'}
      </button>
  </div>

  </div>

  )
}

export default Navbar