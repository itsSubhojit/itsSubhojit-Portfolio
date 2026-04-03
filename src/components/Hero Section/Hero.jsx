import React from 'react'

function Hero() {
  return (
    <div className='pt-24 mx-2 md:pt-28 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 min-h-[calc(100vh-80px)] gap-10 md:mx-6'>
      
      {/* Left Content */}
      <div className="order-2 md:order-1 flex flex-col justify-center text-center md:text-left max-w-xl" >

        <h1 className="text-3xl sm:text-5xl font-serif">
          Hi, I'm <span className="text-indigo-700  font-serif font-bold">Subhojit</span>
        </h1>

        <p className="mt-4 text-gray-600 text-justify font-semibold font-mono">
          A Full Stack Developer focused on building modern and responsive web applications, while continuously improving my skills through hands-on projects and real-world learning experiences.
        </p>

        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <button className="bg-sky-700 px-6 py-2 rounded-lg text-white hover:bg-sky-500">
            View Projects →
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