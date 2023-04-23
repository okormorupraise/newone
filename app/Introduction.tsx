import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Introduction = () => {
  return (
    <div className='h-[100vh] flex items-center justify-center px-[20px] z-50 top-0 fixed w-full bg-[rgb(0,0,0,0.3)]'>  
    <div className='bg-white p-[20px] text-center rounded-[20px] relative w-full h-[300px]'>
        <h3 className=''>
            Hello 
        </h3>
        <br />
        <p>
            My name is Okormoru Praise
        </p>
        <p>
            {`I"m`} a Frontend webdeveloper from Nigeria. Check out my porfolio 
        </p>
         <FaTimes className='absolute top-0 right-0'/>
      </div>
     
    </div>
  )
}

export default Introduction
