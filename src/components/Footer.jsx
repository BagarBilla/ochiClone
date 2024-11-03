
import React from 'react'

const Footer = () => {
  return (
    <div className='flex gap-5 w-full h-screen bg-zinc-900 p-20 font-["Founders_Grotesk_X_Condensed"]'>
        <div className="w-1/2 flex flex-col justify-between h-full  ">
            <div className="heading">
            <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-10'>Eye-</h1>
            <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-10'>Opening</h1>
            </div>
            <img className='w-20' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        </div>
        <div className="w-1/2">
          <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-10'>presentations</h1>
          <div className="dets font-['Neue_Montreal'] mt-10"></div>
          {["Instagram", "Facebook", "Behance", "Linkdin", "Twitter"].map((item, index)=>(
            <a key={index} className='block text-[1.5vw] font-light' href="#">{item}</a>
          ))}
          <div className="detc mt-20">
                {["202-1965 W 4th Ave", "Vancouver, Canada"].map((item, index)=>(
            <a key={index} className='block text-[1.5vw] font-light' href="#">{item}</a>
          ))}
          <a  className='block text-[1.5vw] font-light mt-20' href="#">piyushpra@gmail.com</a>
          </div>
        </div>
    </div>
  )
}

export default Footer
