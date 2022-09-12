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
        if (nombre !== "") {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=0002daaf86f106b6b8226fa0a789628f&query=${nombre}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results,

        }))
        .catch(e => console.log(e))
            
        }else{
            <p>No hay una pelicula con ese nombre</p>
        }
        
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
                        {
                            this.state.data.length > 0 ? this.state.data.map((fav) => <h2>{fav.title}</h2>) : ""
                        }
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
