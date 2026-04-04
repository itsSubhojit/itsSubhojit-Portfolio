import React from 'react'

function Footer() {
  return (
    <div className='mt-20 flex flex-col items-center'>

      {/* Top Line */}
      <div className='w-[90%] max-w-5xl h-[1px] bg-gray-400/40 rounded-full'></div>

      {/* Footer Content */}
      <div className='w-full flex flex-col items-center py-6 
                      dark:bg-white/20 backdrop-blur-md 
                      border-t border-white/20 mt-6'>

        <h1 className='text-gray-700 text-sm md:text-base font-m text-center dark:text-white'>
          © 2026 Subhojit Chakraborty. All Rights Reserved.
        </h1>

      </div>

    </div>
  )
}

export default Footer