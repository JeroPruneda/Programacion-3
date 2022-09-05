import React from "react";
import {Link} from "react-router-dom"
import Search from "../Search/Search";


function Header(){

    return(
    <nav>
          <ul className="user">
            <li><img src="./img/logo.png" alt="" /></li>
            </ul>

            <div className='search-box'>
                <Search /> 
            </div>
            
        <ul className="main-nav">
            <li> <Link to ={`/`}>Home</Link></li>
            <li> <Link to ={`/favoritos`}>Favoritos</Link></li>
            <li> <Link to ={`/verTodas`}> Ver Todas</Link></li>
        </ul>
        
     
    
     </nav>
    )
}
export default Header