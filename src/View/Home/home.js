import Navbar from '../../Componant/Navbar/navbar';
import Footer from "../../Componant/Footer/fotter";
import "./home.css"
export default function Home (){
    return(
        <>
        <Navbar />
        <div className="home-container">
            <h1>homepage</h1>
        </div>
        <Footer />
        </>
    )
}