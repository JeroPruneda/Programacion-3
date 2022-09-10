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

    buscarPeliculas(nombre){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&page=1&include_adult=false&query=${nombre}`)
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
                        <Search buscar ={(nombre) => this.buscarPeliculas(nombre)}/> 
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
