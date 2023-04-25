import Amazingportfolio from "./Amazingportfolio"
import Header from "./Header"
import Landingpage from "./Landingpage"
import Services from "./Services"
import Whyenver from "./Whyenver"
export default function Home() {

  return (
    <div className="relative overflow-x-hidden">
<Header/>
<Landingpage/>
<Whyenver/>
<Services/>
<Amazingportfolio/>
    </div>
  )
}
