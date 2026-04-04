import React from 'react'

function Projects() {
  return (
    <div className='mt-32 mb-20 flex flex-col items-center px-6'>

      {/* Heading */}
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-serif md:text-4xl font-semibold 
                       bg-gradient-to-r from-indigo-300 to-violet-800 
                       bg-clip-text text-transparent'>
          Projects
        </h1>
        <div className='w-20 h-1 bg-indigo-500 mt-3 rounded-full'></div>
      </div>

      {/* Projects Section (glass + color) */}
      <div className='mt-10 flex flex-wrap gap-6 justify-center max-w-5xl w-full 
                      bg-gradient-to-r from-blue-400/20 to-cyan-400/20
                      backdrop-blur-lg border border-white/20 
                      rounded-2xl p-6 shadow-lg'>

        {/* First Card */}
        <div className='w-64 bg-mist-100 backdrop-blur-md 
                border border-indigo-500/40 
                rounded-xl p-4 
                hover:shadow-lg hover:shadow-indigo-500/40 hover:scale-[1.02] 
                transition duration-300'>

          <img 
            className='w-full h-40 object-cover rounded-md' 
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/e782c6246567177.69ca60b5f3baa.jpg" 
            alt="project-1" 
          />

          <h2 className='mt-3 text-gray-800 text-xl font-serif '>
            Project One
          </h2>

          <p className='text-sm text-gray-600 font-mono'>
            Short description of the project.
          </p>

          <div className='mt-4 flex gap-2'>
            <button className='flex-1 bg-indigo-600 text-white font-mono font-bold py-2 text-sm rounded-md hover:bg-indigo-500 transition'>
              Code
            </button>
            <button className='flex-1 border border-indigo-600 text-indigo-600 py-2 text-sm rounded-md hover:bg-indigo-600 hover:text-white transition font-mono font-bold'>
              Live
            </button>
          </div>

        </div>

        {/* Second Card */}
        <div className='w-64 bg-mist-100 backdrop-blur-md 
                border border-indigo-500/40 
                rounded-xl p-4 
                hover:shadow-lg hover:shadow-indigo-500/40 hover:scale-[1.02] 
                transition duration-300'>

          <img 
            className='w-full h-40 object-cover rounded-md' 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYYUYwuuKAgFhrI14iMz3l7YBRDTCkXb7rWg&s" 
            alt="project-2" 
          />

          <h2 className='mt-3 text-xl font-serif text-gray-800'>
            Project Two
          </h2>

          <p className='text-sm text-gray-600 font-mono'>
            Short description of the project.
          </p>

          <div className='mt-4 flex gap-2'>
            <button className='flex-1 bg-indigo-600 text-white font-mono font-bold py-2 text-sm rounded-md hover:bg-indigo-500 transition'>
              Code
            </button>
            <button className='flex-1 border border-indigo-600 text-indigo-600 py-2 text-sm rounded-md hover:bg-indigo-600 hover:text-white transition font-mono font-bold'>
              Live
            </button>
          </div>

        </div>

        {/* Third Card */}
        <div className='w-64 bg-mist-100 backdrop-blur-md 
                border border-indigo-500/40 
                rounded-xl p-4 
                hover:shadow-lg hover:shadow-indigo-500/40 hover:scale-[1.02] 
                transition duration-300'>

          <img 
            className='w-full h-40 object-cover rounded-md' 
            src="https://greatstack.dev/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2Fdlu8PmKXopU%2Fmaxresdefault.jpg&w=1920&q=75" 
            alt="project-1" 
          />

          <h2 className='mt-3 text-xl font-serif text-gray-800'>
            Project One
          </h2>

          <p className='text-sm text-gray-600 font-mono'>
            Short description of the project.
          </p>

          <div className='mt-4 flex gap-2'>
            <button className='flex-1 bg-indigo-600 text-white font-mono font-bold py-2 text-sm rounded-md hover:bg-indigo-500 transition'>
              Code
            </button>
            <button className='flex-1 border border-indigo-600 text-indigo-600 py-2 text-sm rounded-md hover:bg-indigo-600 hover:text-white transition font-mono font-bold'>
              Live
            </button>
          </div>

        </div>

        {/* Fourth Card */}
        <div className='w-64 bg-mist-100 backdrop-blur-md 
                border border-indigo-500/40 
                rounded-xl p-4 
                hover:shadow-lg hover:shadow-indigo-500/40 hover:scale-[1.02] 
                transition duration-300'>

          <img 
            className='w-full h-40 object-cover rounded-md' 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMhQly0K0RzbrbrHNF4LAo2u1ud7k1lcYA5upfzm9&s" 
            alt="project-2" 
          />

          <h2 className='mt-3 text-xl font-serif text-gray-800'>
            Project Two
          </h2>

          <p className='text-sm text-gray-600 font-mono'>
            Short description of the project.
          </p>

          <div className='mt-4 flex gap-2'>
            <button className='flex-1 bg-indigo-600 text-white font-mono font-bold py-2 text-sm rounded-md hover:bg-indigo-500 transition'>
              Code
            </button>
            <button className='flex-1 border border-indigo-600 text-indigo-600 py-2 text-sm rounded-md hover:bg-indigo-600 hover:text-white transition font-mono font-bold'>
              Live
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Projects