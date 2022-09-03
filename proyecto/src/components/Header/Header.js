import React from "react";
import {Link} from "react-router-dom"


function Header(){

    return(
    <nav>
          <ul className="user">
            <li><img src="./img/logo.png" alt="" /></li>
            </ul>

            
            <div className='search-box'>
            <form action='/search' className='search-form' method='get' target='_top'>
            <input className='search-text' name='q' placeholder='Escribe lo que buscas' type='text'/>
            <button className='search-button' type='submit'><span>Buscá!</span></button>
            </form>
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