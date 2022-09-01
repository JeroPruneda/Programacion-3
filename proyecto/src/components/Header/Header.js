import React from "react";
import {Link} from "react-router-dom"

function Header(props){

    return(
    <nav>
          <ul className="user">
            <li><img src="./img/logo.png" alt="" /></li>
            

        </ul>
        <ul className="main-nav">
        <li> 
            <Link to ={`/`}></Link> Home</li>
            <li> <Link to ={`/favoritos`}></Link> Favoritos</li>
            <li> <Link to ={`/verTodas`}></Link> Ver Todas</li>
        </ul>
    
     </nav>
    )
}
export default Header