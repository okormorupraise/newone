"use client"
import React, { useEffect, useRef, useState } from 'react'
import {FaPause, FaPlay} from "react-icons/fa"
import "./globals.css"
import { useInView } from 'react-intersection-observer'
import { useAnimation, motion } from 'framer-motion'
import { Montserrat, Nunito_Sans } from 'next/font/google'
  const nunito = Nunito_Sans(
    {subsets: ['latin'] ,
    weight:['400', '600'],
  variable:"--font-inter"}
    
    )
const Whyenver = () => {
 const d = useRef<any>(null)
 const[isplaying, setisplaying] = useState<boolean>(false)
const{ref, inView} = useInView()
const animation = useAnimation()
function click(){
  if(isplaying === false){
  d.current.play()}
  else{
    d.current.pause()
  }
  setisplaying(!isplaying)
  
}
useEffect(()=>{
  if(inView){
    animation.start({
      opacity:1,
      transition:{
        duration:1
      }
    })
  }
  else{
    animation.start({
      opacity:0,
      transition:{
        duration:1
      }
    })
  }
},[inView, animation])

  return (
    <motion.div ref={ref} initial={{opacity: 0}} animate={animation} className='flex mt-[103.9px] relative z-20 sm:mt-[151.2px] justify-center'>
      <div className='max-w-[1158.34px]  px-[20px] w-full'>
        <div className='small:flex block'>
          <div className='font-[Graphik] font-[700] text-[36px] sm:text-[60px] leading-[54px] sm:leading-[70px] text-[white] max-w-[588px] w-full'>
          Why Enver Is The Best Choice?
          </div>
          <div id='text' className={`${nunito.className} text-[16px] leading-[24px] sm:text-[21px] sm:mt-[0] mt-[30px] sm:leading-[39px] tracking-[-0.656526px] text-[rgba(255,255,255,0.7)]`}>
          Watch this one minute video so you understand why you should use our services!
          </div>
        </div>
        
        <div className='relative mt-[50px]'>
<video ref={d} onEnded={()=> setisplaying(false)}>
  <source src='/Starbucks_ It Starts With You (1).mp4'/>
</video>
<div className={`absolute top-0 left-0 flex items-center justify-center h-full w-full  ${isplaying ? "opacity-0" : "opacity-[100%]"} transition-all ease-in-out duration-300 hover:opacity-100`} onClick={click}>
  <div className={`sm:w-[124px] h-[40px] w-[40px] sm:h-[124px] rounded-[999999px] flex bg-[#5454D4]  items-center justify-center`}>
 {isplaying ? <FaPause className='text-white text-[12px] sm:text-[22px]'/>
 : <FaPlay className='text-white  text-[12px] sm:text-[22px]'/>}
  </div>

</div>
        </div>
      </div>
    </motion.div>
  )
}

export default Whyenver
