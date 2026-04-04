import React from 'react'

function Contact() {
  return (
    <div className='mt-32 mb-12 flex justify-center px-6'>

      <div className='w-full max-w-xl 
                      bg-gradient-to-r from-blue-400/20 to-cyan-400/20
                      backdrop-blur-lg border border-white/30
                      rounded-2xl p-6 md:p-8 shadow-lg'>

        {/* Heading */}
        <h1 className='dark:text-white text-2xl font-serif md:text-3xl font-bold text-center mb-6 text-gray-800'>
          Contact Me
        </h1>

        {/* Form */}
        <div className='flex flex-col gap-5'>

          {/* First Name */}
          <div className='flex flex-col'>
            <label className='dark:text-white text-sm text-gray-600 font-semibold'>
              First Name
            </label>
            <input 
              className='mt-1 px-3 py-2 rounded-md 
                         bg-white/40 border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-indigo-400
                         text-black'
              type="text"
              placeholder='Enter your first name'
            />
          </div>

          {/* Last Name */}
          <div className='flex flex-col'>
            <label className='dark:text-white text-sm text-gray-600 font-semibold'>
              Last Name
            </label>
            <input 
              className='mt-1 px-3 py-2 rounded-md 
                         bg-white/40 border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-indigo-400
                         text-black'
              type="text"
              placeholder='Enter your last name'
            />
          </div>

          {/* Email */}
          <div className='flex flex-col'>
            <label className='dark:text-white text-sm text-gray-600 font-semibold'>
              Email
            </label>
            <input 
              className='mt-1 px-3 py-2 rounded-md 
                         bg-white/40 border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-indigo-400
                         text-black'
              type="email"
              placeholder='Enter your email'
            />
          </div>

          {/* Message */}
          <div className='flex flex-col'>
            <label className='dark:text-white text-sm text-gray-600 font-semibold'>
              Message
            </label>
            <textarea 
              className='mt-1 px-3 py-2 rounded-md 
                         bg-white/40 border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-indigo-400
                         text-black h-28 resize-none'
              placeholder='Write your message...'
            />
          </div>

          {/* Button */}
          <button 
            className='mt-2 w-full py-2 rounded-md 
                       bg-indigo-600 text-white text-xl font-mono font-bold 
                       hover:bg-indigo-500 transition duration-200'>
            Submit
          </button>

        </div>

      </div>
    </div>
  )
}

export default Contact