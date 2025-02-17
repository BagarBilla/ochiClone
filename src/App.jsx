import React from 'react'
import Navbar from './components/navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'

import locomotiveScroll from 'locomotive-scroll'

function App() {
  const LocomotiveScroll = new locomotiveScroll();
  return (
    <div className='w-full min-h-screen  text-white bg-zinc-900'>
      <Navbar/>
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
