import React, {Component} from "react";
import {Link} from "react-router-dom"
import Search from "../Search/Search";


class Header extends Component{
    

    
    render(){
        return(
        <>
        <nav>
                <ul className="user">
                    <li> <Link to = {`/`}> <img src="./img/logo.png" alt="logo" /> </Link></li>
                </ul>
                
                <ul className="main-nav">
                    <li> <Link to ={`/`}>Home</Link></li>
                    <li> <Link to ={`/favoritos`}>Favoritos</Link></li>
                </ul>
        </nav>
        </>
            
            )

    }
    
}
export default Header
