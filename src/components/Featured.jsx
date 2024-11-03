import { motion } from 'framer-motion';
import { useState } from 'react';
import { Power4 } from 'gsap';

function Featured() {
    const [isHovering1, setHovering1] = useState(false);
    const [isHovering2, setHovering2] = useState(false);
    
  return (
    <div  className='w-full py-20'>
       <div  className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
       </div>
       <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
            
            <motion.div onMouseEnter={() => setHovering1(true)} onMouseLeave={() => setHovering1(false)}
                initial={{width: "50%", height: "75vh"}}
                animate={isHovering1 ? {width: "48%", height: "72vh"} : {width: "50%", height: "75vh"}}
                transition={{ease: Power4.easeInOut,}}
            className="cardContainer relative w-[50%] h-[75vh] ">
                <h1 className='absolute flex text-[#6cc854] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 leading-non tracking-tighter font-bold z-[9] text-9xl'>
                {"FYDE".split("").map((item, index) => (
                    <motion.span 
                    initial={{y:"100%"}}
                     animate={isHovering1 ? {y: "0"} : {y: "100%"}}
                      transition={{ease: Power4.easeInOut, delay: index * 0.1}}
                       className='inline-block ' key={index}>{item}
                       </motion.span>
                ))}
                </h1>
                <div className='w-full h-full rounded-xl overflow-hidden'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt=""/>
                </div> 
            </motion.div>
            <motion.div  onMouseEnter={() => setHovering2(true)} onMouseLeave={() => setHovering2(false)}
            initial={{width: "50%", height: "75vh"}}
            animate={isHovering2 ? {width: "48%", height: "72vh"} : {width: "50%", height: "75vh"}}
            transition={{ease: Power4.easeInOut,}}
            className="cardContainer relative w-1/2 h-[75vh] ">
                <h1 className='absolute flex overflow-hidden text-[#6cc854] right-full translate-x-1/2 top-1/2 -translate-y-1/2 leading-non tracking-tighter z-[9] font-bold text-9xl'>
                    {"TRAWA".split("").map((item, index) => (
                        <motion.span 
                        initial={{y:"100%"}}
                         animate={isHovering2 ? {y: "0"} : {y: "100%"}}
                          transition={{ease: Power4.easeInOut, delay: index *0.1}}
                           className='inline-block ' key={index}>{item}
                           </motion.span>
                    ))}
                </h1>
                <div className='w-full h-full rounded-xl overflow-hidden'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt=""/>
                </div>
            </motion.div>
        </div>
        
        </div>
    </div>
  );
}

export default Featured;
