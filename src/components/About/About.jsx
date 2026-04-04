import React from 'react'

function About() {
  return (
    <div className='pt-10 mt-16 md:mt-24 px-6 md:px-20 flex flex-col items-center'>
        
        {/* Heading */}
        <div className='w-full max-w-3xl text-center mb-8'>
            <h1 className='text-3xl md:text-4xl font-serif font-extrabold 
                           bg-gradient-to-r from-indigo-300 to-violet-800 
                           bg-clip-text text-transparent'>
                About Me
            </h1>
            <div className="w-20 h-1 bg-indigo-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Glass Card */}
        <div className="max-w-3xl bg-gradient-to-r from-blue-400/20 to-cyan-400/20 
                        backdrop-blur-lg border border-white/20 
                        rounded-2xl p-6 md:p-8 shadow-lg">

            <p className='dark:text-white text-base md:text-lg text-gray-700 font-semibold font-mono
                          text-center md:text-left leading-relaxed'>
                I’m Subhojit Chakraborty, a BCA student from TMSL College and an aspiring full stack developer focused on building modern, responsive web applications using React and Tailwind CSS. I continuously improve my skills through hands-on projects, aiming to create clean, efficient, and user-friendly digital experiences while strengthening my problem-solving abilities and understanding of web development.
            </p>

        </div>

    </div>

  )
}

export default About