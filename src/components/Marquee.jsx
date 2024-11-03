import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="1.1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className="text border-t-[0.5px] border-b-[0.5px] border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10 }} className='text-[24vw] leading-none font-["Founders_Grotesk_X_Condensed"] font-semibold pr-20 uppercase -mb-[7vw] pt-10 '>We are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10 }} className='text-[24vw] leading-none font-["Founders_Grotesk_X_Condensed"] font-semibold pr-20 uppercase -mb-[7vw] pt-10 '>We are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee

