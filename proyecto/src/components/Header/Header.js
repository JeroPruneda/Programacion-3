import React, {Component} from "react";
import {Link} from "react-router-dom"
import Search from "../Search/Search";


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            valor: "",
            data: []
        }
    }

    buscarPeliculas(title){
        fetch(`https://api.themoviedb.org/3/search/${title}?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results,

        }))
        .catch(e => console.log(e))
    }
    render(){
        return(
        <>
        <nav>
                <ul className="user">
                    <li> <Link to = {`/`}> <img src="./img/logo.png" alt="logo" /> </Link></li>
                </ul>
                <div className='search-box'>
                        <Search buscar ={(title) => this.buscarPeliculas(title)}/> 
                </div>
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
