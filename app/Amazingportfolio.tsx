"use client"
import Image from 'next/image'
import './globals.css'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useAnimation } from 'framer-motion'
import {motion} from 'framer-motion'
import pic from "..//public/image 29.png"
import pic2 from "..//public/image 28.png"
import pic3 from "..//public/image 30.png"
import { FaLessThanEqual } from 'react-icons/fa'
import { Montserrat, Nunito_Sans } from 'next/font/google'
  const nunito = Nunito_Sans(
    {subsets: ['latin'] ,
    weight:['700'],
  variable:"--font-inter"}
    
    )
const Amazingportfolio = () => {
    const animation = useAnimation()
    const dark = 'w-[8px] h-[8px] bg-[#121213] rounded-[10px]'
    const light = 'w-[16px] h-[8px] bg-[#5454d4] rounded-[10px]'
    const [section, secondsection] = useState('firstsection')
    const[number, setumber]= useState(0)
    const[number2, setumber2]= useState(number)
    function scrollforward(){
        if(typeof window != undefined){
            
            if(window.innerWidth < 1024 && window.innerWidth > 768){
            if(number != -2){
                setumber(thu => thu - 1)
            
            }}
            
            else{
                if(number != -1 && window.innerWidth > 768){
                    setumber(thu => thu - 1)
                
                }
                if(number != -5 && window.innerWidth < 768){
                    setumber(thu => thu - 1)
                
                }
            }
            
           
        
       
        
    }
else{
    return null
}}
    
    function scrollbackward(){
        if(number != 0){
        setumber(thu => thu + 1)}
        
    }
    
    useEffect(()=>{
        function scroll(){
            setumber(0)
        }
        window.addEventListener('resize', scroll)
    },[setumber])
    const[state, setstate] = useState()
    const c = <div className='w-full flex '>
    
</div>


  return (
    <div className='mt-[150px]  relative flex justify-center'>
      <div className='relative  max-w-[1158.34px]  px-[20px]  w-full'>
        <div className={`${nunito.className} font-[700] md:font-[800] text-[36px] md:text-[58px] leading-[54px] md:leading-[79px] text-white`}>
        Our Awesome Portofolio
        </div>
        <div className='w-full mt-[50px] h-fit overflow-hidden'>
                <motion.div animate={{
            left:`${number * 100}%`
        }} className='flex relative lg:w-[200%] w-[600%] md:w-[300%] '>
    <div className='md:p-[24px]   w-[100%] h-fit'>
        <Image src={pic} className='w-full ' alt='' width={400} height={500}/>
    </div>
    <div className='md:p-[24px]   h-[100%]  w-[100%]  '>
        <Image src={pic2} className='w-max  ' alt='' width={4000} height={5000}/>
    </div>
    <div className='md:p-[24px]   h-[100%]  w-[100%]  '>
        <Image src={pic3} className='w-max ' alt='' width={4000} height={5000}/>
    </div>
    <div className='md:p-[24px]  h-[100%]  w-[100%]  '>
        <Image src={pic} className='w-max' alt='' width={4000} height={5000}/>
    </div>
    <div className='md:p-[24px]   h-[100%]  w-[100%]  '>
        <Image src={pic} className='w-max' alt='' width={4000} height={5000}/>
    </div>

    <div className='md:p-[24px]  mb-0  h-[100%]  w-[100%]  '>
        <Image src={pic} className='w-max ' alt='' width={4000} height={5000}/>
    </div>

                                    
                </motion.div>
        </div>

        

        <div className='flex justify-center lg:mt-[40px] mt-[40px]'>
        <svg width="39" onClick={scrollbackward} height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19.1056" cy="19.1056" r="19.1056" transform="matrix(-1 0 0 1 38.2108 0)" fill="white" fillOpacity="0.2"/>
<path d="M21.8249 25.4567C22.1684 25.1132 22.1684 24.5562 21.8249 24.2126L17.1687 19.5564L21.8249 14.9003C22.1684 14.5567 22.1684 13.9997 21.8249 13.6562C21.4813 13.3126 20.9243 13.3126 20.5808 13.6562L15.3026 18.9344C14.959 19.2779 14.959 19.8349 15.3026 20.1785L20.5808 25.4567C20.9243 25.8002 21.4813 25.8002 21.8249 25.4567Z" fill="white"/>
</svg>








<svg width="39" height="39" onClick={scrollforward} className='ml-[12px]' viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="19.3833" cy="19.1056" r="19.1056" fill='#333333'/>
  <path d="M16.6612 25.85C16.2685 25.4573 16.2685 24.8206 16.6612 24.4279L21.9835 19.1056L16.6612 13.7833C16.2685 13.3907 16.2685 12.754 16.6612 12.3613C17.0539 11.9686 17.6906 11.9686 18.0833 12.3613L24.1166 18.3946C24.5093 18.7873 24.5093 19.424 24.1166 19.8167L18.0833 25.85C17.6906 26.2427 17.0539 26.2427 16.6612 25.85Z" fill="white"/>
</svg>

      </div>
        <div className='absolute w-[28px] h-[28px] md:w-[89px] md:h-[94px] top-[-95px] md:top-[-101.3px] left-[0px] md:left-[-28px]'>
     
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.9927 15.3475C34.8661 15.7612 35.2389 16.8047 34.8252 17.6782L30.3306 27.1676L39.8201 31.6621C40.6936 32.0759 41.0663 33.1193 40.6526 33.9928C40.2389 34.8663 39.1954 35.239 38.3219 34.8253L28.8325 30.3308L24.338 39.8202C23.9243 40.6937 22.8808 41.0664 22.0073 40.6527C21.1338 40.239 20.7611 39.1955 21.1748 38.322L25.6693 28.8326L16.1799 24.3381C15.3064 23.9244 14.9337 22.8809 15.3474 22.0074C15.7611 21.134 16.8046 20.7613 17.6781 21.175L27.1675 25.6695L31.662 16.18C32.0757 15.3065 33.1192 14.9338 33.9927 15.3475Z" fill="#E7E7E7"/>
</svg>

      </div>
      <div className='absolute w-[39.37px] h-[46.32px] md:w-[62px] md:h-[72.94px] top-[30px] right-0 md:right-[54.41px]'>
      <svg viewBox="0 0 89 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32.77" cy="38.9181" r="22.4902" transform="rotate(-27.3707 32.77 38.9181)" stroke="white" strokeWidth="3.64706"/>
<circle cx="55.8236" cy="54.3618" r="23.7059" transform="rotate(-27.3707 55.8236 54.3618)" stroke="white" strokeWidth="1.21569"/>
</svg>


      </div>
      </div>
      <div className='blur-[150px] w-[600px] h-[652.85px] rounded-[233.5px] top-[-195px] absolute right-[-300px] rotate-[-125.63deg]' style={{background: 'linear-gradient(180deg, rgba(84, 84, 212, 0.2) 0%, rgba(84, 84, 212, 0.084) 100%)'}}>

      </div>
      
    </div>
  )
}

export default Amazingportfolio
