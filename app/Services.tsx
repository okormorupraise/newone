"use client"
import React, { useEffect } from 'react'
import './globals.css'
import servicesdata from './servicesdata'
import { NextPage } from 'next'
import {Servicesdata2} from "..//app/servicesinterface"
import { useState } from 'react'
import { useAnimation, motion, } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Montserrat, Nunito_Sans } from 'next/font/google'
  const nunito = Nunito_Sans(
    {subsets: ['latin'] ,
    weight:['400', '600'],
  variable:"--font-inter"}
    
    )
function Services() {
  const shake = useAnimation()
  const move = useAnimation()
  const move2 = useAnimation()
  const{ref, inView} = useInView({threshold:0.1})
  const[ref2, inView2] = useInView() 
    const data:Servicesdata2[]= servicesdata



    useEffect(()=>{
      if(inView){
        shake.start({
          rotate: '360deg',
          
          
          transition:{
            repeat:3000,
            duration: 7
          }
        })
        move.start({
          y:0,
          transition:{
            duration:0.3,
            
          }
        })
        
      }
      else{
        shake.start({
          x:0,
          x2:0,
          
        })
        move.start({
          y:'50px'
        })
        
      }
      if(inView2){
        move2.start({
          y:0,
          transition:{
            duration:0.3,
            
            
          }
        })
      }
      else{
        move2.start({
          y:'80px'
        })
      }
    },[inView, inView2, move, move2, shake])
    const e =   data.map(thu=>{
    
      return(
<motion.div  className={`px-[42px] py-[48px] hover:shadow-lg transition-all ease-in-out hover:shadow-[#F04037]`} key={thu.name}>
  <div className='flex justify-center'>
  {thu.svg}
  </div>
  <div className={`text-center text-white text-[24px] sm:text-[28px] leading-[33px] sm:leading-[38px] font-[600] my-[20px]  tracking-[-0.750316px] ${nunito.className}`}>
  {thu.name}
  </div>
  <div className={`${nunito.className} text-[20px] leading-[28px] text-center text-[rgba(255,255,255,0.7)] tracking-[-0.500211px]`}>
  {thu.details}
  </div>
</motion.div>
      )
  })
  return (
    <motion.div  id='Services' ref={ref}  className='flex mt-[140px] sxl:mt-[150px] relative justify-center'>
      <div className='max-w-[1158.34px]  px-[20px]  w-full'>
        <div className='font-[Graphik] relative flex sm:justify-center w-full text-[36px] sxl:text-[60px] leading-[54px] sxl:leading-[70px] sm:text-center font-[700] text-[white]'>
            <motion.div  animate={move} initial={{y:"50px"}} className='max-w-[695px]  w-full'>
                The Service We Provide For You
            </motion.div>
            <motion.div animate={shake} className='absolute sxl:w-[105px] sxl:h-[121px] w-[65px] h-[75px] left-[65.7px] top-[-75px] sxl:top-[-33px]'>
       <svg viewBox="0 0 105 121" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.1092 78.1455L33.4672 20.1377L83.0244 50.3176L32.1092 78.1455Z" stroke="#E7E7E7" strokeWidth="3" strokeLinejoin="round"/>
<path d="M36.6646 100.854L38.1037 39.3827L90.6196 71.3644L36.6646 100.854Z" stroke="#E7E7E7" strokeLinejoin="round"/>
</svg>

       </motion.div>
       <motion.div animate={shake} className='absolute top-[81.13px] right-[2px]'>
       <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.7022 17.0526C22.527 16.5487 23.604 16.809 24.1078 17.6338L29.5812 26.5943L38.5418 21.1209C39.3666 20.6171 40.4437 20.8773 40.9475 21.7021C41.4513 22.5269 41.1911 23.604 40.3663 24.1078L31.4057 29.5812L36.8791 38.5418C37.3829 39.3666 37.1227 40.4436 36.2979 40.9474C35.4731 41.4512 34.396 41.191 33.8922 40.3662L28.4188 31.4057L19.4583 36.8791C18.6335 37.3829 17.5564 37.1227 17.0526 36.2979C16.5488 35.4731 16.809 34.396 17.6338 33.8922L26.5944 28.4188L21.121 19.4582C20.6172 18.6334 20.8774 17.5564 21.7022 17.0526Z" fill="#E7E7E7"/>
</svg>

       </motion.div>
            
        </div>
        <motion.div animate={move2} ref={ref2} initial={{y:"80px"}} className='sm:grid-cols-2 xl:grid-cols-3 grid mt-[50px]'>
            {e}
            
        </motion.div>
       <div className='absolute w-[467px] h-[508.5px] rounded-[233.5px] top-[-277.35px] blur-[150px] left-[-202.83px] ' style={{background:"linear-gradient(180deg, rgba(84, 84, 212, 0.21) 0%, rgba(84, 84, 212, 0.0882) 100%)"}}>
        
       </div>
       
      </div>
    </motion.div>
  )
}

export default Services
