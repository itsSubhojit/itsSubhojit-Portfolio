import React from 'react'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'


function Home() {
  
  return (
    <>
    <div className="min-h-screen bg-white dark:bg-slate-950 text-black dark:text-white transition-colors duration-500">
      
    <Header/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default Home