import React from 'react'

const Cards = () => {
  return (
    <div  data-scroll data-scroll-speed="1" className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
      <div  className="cardContainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full  h-full bg-[#004D43] flex items-center justify-center">
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <div className="absolute px-5 border-2 rounded-full py-y left-10 bottom-10">&copy;2019-2022</div>
        </div>
      </div>
      <div className="cardContainer h-[50vh] flex gap-5  w-1/2">
        <div className="card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center">
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <div className="absolute px-5 border-2 rounded-full py-y left-10 bottom-10">&copy;2019-2022</div>
        </div>
        <div className="card relative rounded-xl w-1/2 h-full bg-[#192b29] flex items-center justify-center">
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <div className="absolute px-5 border-2 rounded-full py-y left-10 bottom-10">&copy;2019-2022</div>
        </div>
      </div>
    </div>
  )
}

export default Cards
