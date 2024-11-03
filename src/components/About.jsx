import React from 'react'
import image from '../img/photo.jpg'
function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-["Neue_Montreal"] text-[4.5vw] leading-[3.5vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      <div className='w-full flex gap-5 border-t-[2px] pt-10 mt-20 border-[#a1b562]'>
      <div className='w-1/2'>
      <h1 className='text-6xl'>Our Approach:</h1>
      <button className=' flex gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More
        <div className='w-2 h-2 bg-zinc-100 rounded-full '></div>
      </button>
      </div>
      <img className='w-1/2 h-[70vh] rounded-3xl ' src={image} alt="" />
      </div>
    </div>
  )
}

export default About
