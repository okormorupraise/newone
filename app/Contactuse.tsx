import React from 'react'
import "./globals.css"
const Contactus = () => {
  return (
    <div className=' flex justify-center bg-[rgba(30,30,32,0.5)]'>
        <div className='lg:py-[187px] py-[80px] lg:flex justify-between max-w-[1158.34px]  px-[20px]  w-full'>
            <div className='text-[36px] lg:text-[60px] max-w-[826px] w-full font-[700] leadinf-[54px] lg:mb-0 mb-[50px] lg:leading-[66px] text-[white] font-[Graphik]'>
                Contact us for the service you want to use
            </div>
            <div>
                <button className='w-[166px] lg:w-[201px] h-[44px] lg:h-[60px] rounded-[4px] bg-[#5454D4] text-[21px] text-white leading-[29px] font-[700] font-Nunito'>
                    Contact us
                </button>.
            </div>
        </div>
    </div>
  )
}

export default Contactus
