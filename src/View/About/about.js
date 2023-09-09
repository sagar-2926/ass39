import Navbar from "../../Componant/Navbar/navbar"
import Fotter from "../../Componant/Footer/fotter"

import"./about.css"
export default function About(){
    return(
      <>
      <Navbar />
      <div className="About">
       <h1>This is the About Page</h1>
      </div>
      < Fotter />
     </>
    )
}