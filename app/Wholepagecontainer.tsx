import React, { Suspense } from 'react'
import Header from './Header'
import Landingpage from './Landingpage'
import Whyenver from './Whyenver'

import Contactus from './Contactuse'
import Footer from './Footer'
import Introduction from './Introduction'

function Wholepagecontainer() {
  return (
    <div>
       <header className='w-full z-30 block  overflow-hidden'>
   
      <Header/>
   
       </header>
    <main>
   
    <Landingpage/>
    
    
      
     
      <Whyenver/>
  
      <Contactus/>
    </main>
    
  
    </div>
  )
}

export default Wholepagecontainer
