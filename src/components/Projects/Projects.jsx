import React from 'react'
import projectsData from '../ProjectsData/ProjectsData'

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

      {/* Projects Section */}
      <div className='mt-10 flex flex-wrap gap-6 justify-center max-w-5xl w-full 
                      bg-gradient-to-r from-blue-400/20 to-cyan-400/20
                      backdrop-blur-lg border border-white/20 
                      rounded-2xl p-6 shadow-lg'>

        {/* MAP START */}
        {projectsData.map((project) => (

          <div 
            key={project.id}
            className='w-64 bg-mist-100 backdrop-blur-md border border-indigo-500/40 rounded-xl p-4 hover:shadow-lg hover:shadow-indigo-500/40 hover:scale-[1.02] transition duration-300'
          >

            <img 
              className='w-full h-40 object-cover rounded-md' 
              src={project.img}
              alt={project.title}
            />

            <h2 className='mt-3 text-gray-800 text-xl font-serif'>
              {project.title}
            </h2>

            <p className='text-sm text-gray-600 font-mono'>
              {project.desc}
            </p>

            <div className='mt-4 flex gap-2'>

              {/* Code Button */}
              <a 
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className='flex-1 bg-indigo-600 text-white font-mono font-bold py-2 text-sm rounded-md hover:bg-indigo-500 transition text-center block'
              >
                Code
              </a>

              {/* Condition: Live or (SVG:Not Live Yet) */}
              {project.live ? (
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='flex-1 border border-indigo-600 text-indigo-600 py-2 text-sm rounded-md hover:bg-indigo-600 hover:text-white transition font-mono font-bold text-center block'
                >
                  Live
                </a>
              ) : (
                <button className='flex-1 border border-indigo-600 text-indigo-600 py-2 text-sm rounded-md font-mono font-bold'>
                  <span className="flex items-center justify-center">

                    {/* SVG SAME */}
                    <svg 
                      className="w-4 h-4 text-gray-700 hover:text-indigo-500 transition"
                      viewBox="0 0 24 24" 
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.07751 3.04297L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.4142 5.28703L12.1896 4.51162C14.2051 2.49613 17.4729 2.49613 19.4883 4.51162C21.5038 6.52712 21.5038 9.79488 19.4883 11.8104L18.7129 12.5858" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12.5858 18.7129L11.8104 19.4883C9.79488 21.5038 6.52712 21.5038 4.51162 19.4883C2.49613 17.4729 2.49613 14.2051 4.51162 12.1896L5.28703 11.4142" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                  </span>
                </button>
              )}

            </div>
          </div>

        ))}
        {/* MAP END */}

      </div>
    </div>
  )
}

export default Projects