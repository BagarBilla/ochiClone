import React, {useEffect, useRef, useState} from 'react'
const Eyes = () => {
    const [rotate, setRotate] = useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mousex = e.clientX;
            let mousey  = e.clientY;
            let deltax = mousex - window.innerWidth/2;
            let deltay = mousey - window.innerHeight/2;
            var angle = Math.atan2(deltay, deltax) * (180/Math.PI);
            setRotate(angle - 180);
        })
    })
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.9" className='relative w-full h-full bg-cover bg-center bg-[url("/src/img/bg.jpg")]'>
        <div className='absolute flex top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] gap-10 '>
            <div className='w-[15vw] flex items-center justify-center h-[15vw] rounded-full bg-zinc-100 '>
                <div className='w-2/3 h-2/3 relative rounded-full bg-zinc-900'>
                    <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
                    <div className='w-10 h-10  rounded-full bg-zinc-100'></div>
                    </div>
                </div>
            </div>
            <div className='w-[15vw] flex items-center justify-center h-[15vw] rounded-full bg-zinc-100 '>
            <div className='w-2/3 h-2/3 relative rounded-full bg-zinc-900'>
                    <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
                    <div className='w-10 h-10  rounded-full bg-zinc-100'></div>
                    </div>
                </div>
            </div>
        </div>
        </div> 
      
    </div>
  )
}

export default Eyes
