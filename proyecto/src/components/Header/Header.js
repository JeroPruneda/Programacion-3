import React from "react";
import {Link, Route} from "react-router-dom"


function Header(props){

    return(
    <nav>
          <ul className="user">
            <li><img src="./img/logo.png" alt="" /></li>
            

        </ul>
        <ul className="main-nav">
            <li> <Link to ={`/`}>Home</Link></li>
            <li> <Link to ={`/favoritos`}>Favoritos</Link></li>
            <li> <Link to ={`/verTodas`}> Ver Todas</Link></li>
        </ul>
        
     
    
     </nav>
    )
}
export default Header