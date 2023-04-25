import Amazingportfolio from "./Amazingportfolio"
import Contactus from "./Contactuse"
import Footer from "./Footer"
import Header from "./Header"
import Landingpage from "./Landingpage"
import Services from "./Services"
import Whyenver from "./Whyenver"
export default function Home() {

  return (
    <div className="relative overflow-x-hidden">
      <header>
        <Header/>
        <Landingpage/>
      </header>
<main>
  <Whyenver/>
    <Services/>
    <Amazingportfolio/>
    <Contactus/>
</main>
<footer>
   <Footer/>
</footer>
    
   
    </div>
  )
}
