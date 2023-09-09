
import "./navbar.css"
 export default function Navbar(){
    return(

        <div className="navbar">
          {/* <image className="logo" src="./home.png"/> */}
          <button type="button" className="btn">Home</button>
          <button type="button" className="btn">About</button>
          <button type="button" className="btn">Contact</button>
          <button type="button" className="btn">Login</button> 
      
        </div>
    )
}