import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero Section/Hero'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'


function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    </>
  )
}

export default Home