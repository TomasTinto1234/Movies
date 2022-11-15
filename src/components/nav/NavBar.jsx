import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navBar.css"
import {
  BiUserCircle,
  BiUser,
  // BsCart4
} from "react-icons/bi";
import {
  BsCart4
} from "react-icons/bs";



  const NavBar = () => {
     
  //función que muestra el menu responsive
  function responsiveMenu() {
      let x = document.getElementById("nav");
      if (x.className === "") {
          x.className = "responsive";
      } else {
          x.className = "";
      }
  }

return (
    <div onclick={()=>responsiveMenu()}>
        <section id="inicio">
      <div className ="contenido">
        <header>
          <div className="contenido-header">
          <div class="contenedor-foto">

      </div>
         <a className="pr" href="#inicio" ><img src="https://thumbs.dreamstime.com/b/la-c%C3%A1mara-de-video-es-vieja-en-negro-antigua-por-filmar-o-ver-pel%C3%ADculas-164560054.jpg" height="155, 165"/></a>
         <Link to="/"><a className="pr" href="#inicio" ><h1 className="sonh1">MOVES APP</h1></a></Link>
           <nav className="elnav"onclick={()=>responsiveMenu()}>
            <ul id="links" className="losul" onclick={()=>responsiveMenu()}>
             {/* <li className="pages"><a href="#inicio" className ="seleccionado" >INICIO</a></li> */}
             {/* <li className="pages"><a href="#products" >MOVIES</a></li> */}
             <li className="pages"><Link to="/favs"><a href="#favs">FAVORITOS</a></Link></li>
             {/* <li className="pages"><a href="#users" >USUARIOS</a></li> */}
             {/* <li className="pages"><a href="#contacto">CONTACTO </a></li>
             <li className="pages"><a href="#login"><Link to={"/Login"}><BiUserCircle color="white"
                size="25px"
                onMouseOver={({ target }) => (target.style.color = "#F9B621")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                cursor="pointer"/></Link></a></li> */}
            </ul>
          {/* <ul className="redes">
          <a className="pr" href="https://wa.me/+541161263966" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
          <a className="pr" href="https://www.linkedin.com/in/tomas-tinto-320a85236/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          <a className="pr" href="https://github.com/TomasTinto1234" target="_blank"><i className="fa-brands fa-github"></i></a>
          <a className="pr" href="https://www.instagram.com/tomas_tinto/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          </ul> */}
           </nav>
          </div>
        </header>
      </div>
    </section>
  </div>
)


  }

  export default NavBar