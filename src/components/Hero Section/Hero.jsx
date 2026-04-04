import React from 'react'
import { Link } from 'react-router-dom'
import About from '../About/About'

function Hero() {
  return (
    <div className='pt-24 mx-2 md:pt-28 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 min-h-[calc(100vh-80px)] gap-10 md:mx-6'>
      
      {/* Left Content */}
      <div className="order-2 md:order-1 flex flex-col justify-center text-center md:text-left max-w-xl" >

        <div className='flex flex-wrap gap-4 items-center'>
          <h2 className="text-2xl sm:text-3xl font-serif text-gray-700">
          Hi, I'm </h2> 
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-indigo-600 to-violet-700 bg-clip-text text-transparent'>
              Subhojit
           </h1>
        </div>

        <p className="mt-4 text-gray-600 text-justify font-semibold font-mono">
          A Full Stack Developer focused on building modern and responsive web applications, while continuously improving my skills through hands-on projects and real-world learning experiences.
        </p>

        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <button className="bg-sky-700 px-6 py-2 rounded-lg text-white hover:bg-sky-500">
           <Link to="/Projects"> View Projects → </Link>
          </button>

          <button className="border border-black px-6 py-2 rounded-lg text-black">
            Contact Me..
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="order-1 md:order-2 flex justify-center ">
        <img 
          className='rounded-full w-40 h-40 md:w-60 md:h-60 object-cover' 
          src="/my-pic.jpg" 
          alt="my-pic" 
        />
      </div>

    </div>
  )
}

export default Hero