import React from 'react'

function Skills() {
  return (
    <div className='px-6 mt-32 md:mt-40 flex flex-col items-center'>

        {/* Heading */}
        <div className='flex flex-col items-center'>
            <h1 className='text-3xl md:text-4xl font-serif font-extrabold 
                           bg-gradient-to-r from-indigo-300 to-violet-800 
                           bg-clip-text text-transparent'>
              Skills
            </h1>
            <div className="w-20 h-1 bg-indigo-500 mt-3 rounded-full"></div>
        </div>

        {/* Skills */}
        <div className='mt-10 flex flex-wrap gap-6 justify-center
        max-w-3xl bg-gradient-to-r from-blue-400/20 to-cyan-400/20 
                        backdrop-blur-lg border border-white/20 
                        rounded-2xl p-6 md:p-8 shadow-lg'>

          <img src="/HTML.svg" className="w-12 h-12" />
          <img src="/CSS.svg" className="w-12 h-12" />
          <img src="/JavaScript.svg" className="w-12 h-12" />
          <img src="/React-Dark.svg" className="w-12 h-12" />
          <img src="/TailwindCSS-Dark.svg" className="w-12 h-12" />
          <img src="/Git.svg" className="w-12 h-12" />
          <img src="/Github-Dark.svg" className="w-12 h-12" />
          <img src="/Postman.svg" className="w-12 h-12" />
          <img src="/Netlify-Dark.svg" className="w-12 h-12" />
          <img src="/MySQL-Dark.svg" className="w-12 h-12" />

        </div>

    </div>
  )
}

export default Skills