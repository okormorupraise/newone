"use client"
import React, { useEffect } from 'react'
import "./globals.css"
import Image from 'next/image'
import { useState } from 'react'
import s from "..//public/Group 162540.png"
import s2 from "..//public/Group 162551.png"
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { Nunito_Sans } from 'next/font/google'
  const nunito = Nunito_Sans(
    {subsets: ['latin'] ,
    weight:['400', '600'],
  variable:"--font-inter"}
    
    )
function Landingpage() {

   const[state, setstate] = useState(false)
   const leftanimation = useAnimation()
   const rightanimation = useAnimation()
   const rotateanimation = useAnimation()
   const{ref, inView} = useInView()
    function scroll(){
     
    if (typeof window !== "undefined") {
      if(window.innerWidth < 800){
    setstate(true)
       
  }
    else{
      setstate(false)
    }
  }}
  useEffect(()=>{
    if(inView){
      leftanimation.start({
        x:0,
        transition:{
          duration:1
        }
      })
      rightanimation.start({
        x:0,
        transition:{
          duration:1
        }
      })
      rotateanimation.start({
        rotate:'360deg',
        transition:{
          duration:1,
          delay:1,
          repeat: 29999
        }
      })
    }
    if(!inView){
      leftanimation.start({
        x:"-60px"
      })
      rightanimation.start({
        x:'60px',
        transition:{
          duration:1
        }
      })
      rotateanimation.start({
        rotate:0,
        transition:{
          duration:1,
          
        }
      })
    }
   scroll()
 if(typeof window != undefined){
  window.addEventListener("load", scroll)
 }
  window.addEventListener("resize", scroll)
  window.addEventListener("scroll", scroll)

  return () => {
    window.removeEventListener('load', scroll);
  };
  },[inView, rightanimation, rotateanimation, leftanimation])
  

  return (
    <div ref={ref} className={` flex w-full  justify-center`}>
        <div className='max-w-[1158.34px]  px-[20px]  w-full small:mt-[146px] mt-[66px]'>
            <div className="grid grid-cols-1 small:grid-cols-2   justify-between ">
                <motion.div animate={leftanimation} className='relative' initial={{x:'-60px', opacity:0}}>
                  <div className="small:text-[80px] text-[42px] relative z-20 max-w-[582px] w-full leading-[63px] small:leading-[84px] font-[700] font-[Graphik] text-white">
                  Build Your Awesome Platform
                  </div>
                  <div className={`${nunito.className} relative z-20 text-[16px] small:text-[21px] leading-[24px] small:leading-[39px] tracking-0 small:tracking-[-0.656526px] text-[rgba(255,255,255,0.7)] mt-[30px] small:mt-[24px] max-w-[536px] w-full`}>
                  Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.
                  </div>
                  <div className="small:w-[204px] w-[166px] mt-[50px] h-[44px] small:h-[58px] flex items-center justify-center bg-[#5454d4] rounded-[4px]">
                  <div className={`${nunito.className} text-white text-[16.0889px] small:text-[20px] mr-[8px] leading-[22px] small:leading-[27px]  font-[700]`}>
                    Our Services
                  </div>
                  <div>
                  {state ? <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.11377 8.02765C8.11377 7.4723 8.56397 7.02209 9.11933 7.02209L17.1638 7.0221C17.7191 7.0221 18.1693 7.4723 18.1693 8.02765V16.0721C18.1693 16.6274 17.7191 17.0777 17.1638 17.0777C16.6084 17.0777 16.1582 16.6274 16.1582 16.0721V10.4553L7.81925 18.7942C7.42656 19.1869 6.78988 19.1869 6.39718 18.7942C6.00449 18.4015 6.00449 17.7649 6.39718 17.3722L14.7361 9.03321L9.11933 9.03321C8.56397 9.03321 8.11377 8.583 8.11377 8.02765Z" fill="white"/>
</svg>
:       <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.83002 7.5C8.83002 6.94772 9.27773 6.5 9.83002 6.5L17.83 6.5C18.3823 6.5 18.83 6.94772 18.83 7.5V15.5C18.83 16.0523 18.3823 16.5 17.83 16.5C17.2777 16.5 16.83 16.0523 16.83 15.5V9.91421L8.53712 18.2071C8.1466 18.5976 7.51343 18.5976 7.12291 18.2071C6.73239 17.8166 6.73239 17.1834 7.12291 16.7929L15.4158 8.5L9.83002 8.5C9.27773 8.5 8.83002 8.05228 8.83002 7.5Z" fill="white"/>
</svg>}
           

                  </div>
                </div>
                </motion.div>
                <motion.div animate={rightanimation} initial={{x: '60px', opacity:0}} className={`w-full relative small:top-[-20px] small:pl-[48px]`}>
                  
                  <Image alt="" className='w-full' src={state === true ? s2 : s} width={600} height={800}/>
                  <motion.div animate={rotateanimation} className="absolute small:block hidden top-[5px] small:left-[-35px]">
                  <svg width="99" height="32"  viewBox="0 0 99 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L25.2781 26.2247L39.7483 8.60674L57.0497 26.2247L75.9238 8.60674L97 30" stroke="#E7E7E7" strokeWidth="4"/>
</svg>

                  </motion.div>
                  <motion.div  animate={rotateanimation}  className="absolute small:block hidden top-[-30px] right-0">
                  <svg width="51" height="60" viewBox="0 0 51 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="18.5" stroke="white" strokeWidth="3"/>
<circle cx="31" cy="40" r="19.5" stroke="white"/>
</svg>


                  </motion.div>
                  <motion.div animate={rotateanimation} className="absolute small:block hidden bottom-[-20px] small:left-[-80px]">
                  <svg width="106" height="121" viewBox="0 0 106 121" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.5135 78.1455L33.8715 20.1376L83.4287 50.3176L32.5135 78.1455Z" stroke="#E7E7E7" strokeWidth="3" strokeLinejoin="round"/>
<path d="M37.0689 100.854L38.508 39.3827L91.0239 71.3644L37.0689 100.854Z" stroke="#E7E7E7" strokeLinejoin="round"/>
</svg>



                  </motion.div>
                  <motion.div  animate={rotateanimation}  className="absolute small:block hidden bottom-[-20px] right-[0px]">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 8.33337C26.1506 8.33337 27.0833 9.26611 27.0833 10.4167V22.9167H39.5833C40.7339 22.9167 41.6667 23.8495 41.6667 25.0001C41.6667 26.1506 40.7339 27.0834 39.5833 27.0834H27.0833V39.5834C27.0833 40.734 26.1506 41.6667 25 41.6667C23.8494 41.6667 22.9167 40.734 22.9167 39.5834V27.0834H10.4167C9.26608 27.0834 8.33334 26.1506 8.33334 25.0001C8.33334 23.8495 9.26608 22.9167 10.4167 22.9167H22.9167V10.4167C22.9167 9.26611 23.8494 8.33337 25 8.33337Z" fill="#E7E7E7"/>
</svg>



                  </motion.div>
                </motion.div>
                
            </div>
            
        </div>
       
          <div className="absolute top-[-218.7px] left-0 rotate-[-57.37deg] h-[1249.94px] w-[467px] rounded-[223.5px] blur-[150px]" style={{background: "linear-gradient(180deg, rgba(84, 84, 212, 0.27) 0%, rgba(84, 84, 212, 0.1134) 100%)"}}>

        </div>
        <div className="absolute rotate-[65.71deg] top-[-38.03px] right-0  h-[1399.3px] w-[467px] rounded-[233.5px] blur-[150px]" style={{background: 'linear-gradient(180deg, rgba(251, 168, 28, 0.1066) 0%, rgba(224, 86, 136, 0.0615) 100%)'}}>

</div>
        
        
    </div>
  )
}

export default Landingpage
