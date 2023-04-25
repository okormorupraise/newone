import React, { Suspense } from 'react'
import Header from './Header'
import Landingpage from './Landingpage'
import Whyenver from './Whyenver'
import Services from './Services'
import Amazingportfolio from './Amazingportfolio'
import Contactus from './Contactuse'
import Footer from './Footer'
import Introduction from './Introduction'

function Wholepagecontainer() {
  return (
    <>
       <header className='w-full z-30 block  overflow-hidden'>
    
       
      <Header/>
   
       </header>
    <main>
  
       
    <Landingpage/>
    
     
      
     
      <Whyenver/>
      <Services/>
      <Amazingportfolio/>
      <Contactus/>
    </main>
    <footer>
      <Footer/>
      </footer>
    
  
    </>
  )
}

export default Wholepagecontainer
