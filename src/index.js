import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import Navbar from "./Componant/Navbar/navbar"
import Fotter from "./Componant/Footer/fotter"
import Contact from './View/Contact/contact';
import About  from './View/About/about';
import Home from './View/Home/home';

function App (){

const path = window.location.pathname;
switch (path) {
 case '/':
  return <Home />;

  case "/about":
    return <About />;

    case "/contact":
      return <Contact />;
  default :
   return <h1>Nikal</h1>
}

}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
     <App />
  </>
);


