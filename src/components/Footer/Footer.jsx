import React from 'react'

function Footer() {
  const updateYear = new Date().getFullYear()

  return (
    <footer className='mt-18 mb-8 w-full flex justify-center px-4 md:px-6'>
      <div className='w-fit min-w-[320px] md:min-w-0 py-5 md:py-6 px-8 md:px-24 
                      bg-white/70 dark:bg-white/[0.05] backdrop-blur-xl 
                      border-0 rounded-[2rem] md:rounded-full
                      flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4
                      shadow-[0_15px_35px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                      transition-all duration-300 hover:scale-[1.02] 
                      hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_25px_70px_rgba(0,0,0,0.6)]'>
        
        <p className='text-slate-600 dark:text-slate-400 text-xs md:text-sm font-medium tracking-wider text-center'>
          © {updateYear} <span className='text-slate-800 dark:text-slate-300 font-bold tracking-tight'>Subhojit Chakraborty</span>
        </p>

        {/* Separator: Blinking Dot (Desktop) */}
        <div className='hidden md:block w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_10px_#06b6d4] animate-pulse duration-[3000ms]'></div>

        <div className='flex items-center gap-2'>
           {/* Blinking Dot (Mobile) */}
           <div className='md:hidden w-1 h-1 bg-cyan-500 rounded-full shadow-[0_0_8px_#06b6d4] animate-pulse duration-[3000ms]'></div>
           
           <span className='text-slate-600 dark:text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-center'>
            All Rights Reserved
          </span>
        </div>

      </div>
    </footer>
  )
}

export default Footer