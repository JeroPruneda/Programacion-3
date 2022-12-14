import React, {Component} from "react";
import Peliculas from "../Peliculas/Peliculas";
import PeliculasCard from "../PeliculasCard/PeliculasCard";
import Series from "../Series/Series";
import {Link} from "react-router-dom"
import Search from "../Search/Search";

class Home extends Component {
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
        .then(data => {
            console.log(data)
            this.setState({
            data: data.results,

        })})
        .catch(e => console.log(e))
            
        }else{
            <p>No hay una pelicula con ese nombre</p>
        }
        
    }
   render (){
    return (
        <>
         <Search buscar ={(nombre) => this.buscarPeliculas(nombre)}/> 
            {
                this.state.data.length > 0 ? this.state.data.map((jose, idx) => 
                <PeliculasCard 
                key={jose + idx} 
                name={jose.title} 
                image={jose.poster_path}
                descripcion={jose.overview}
                id = {jose.id}
                />)  : ""
            }
        
            <Peliculas />
            <br></br>
            <br></br>
           <Link to ={`/verTodas`}><button className="botton" onClick={()=>this.traerMas()} > Ver Todas las Peliculas</button></Link>
            <Series />
            <br></br>
            <br></br>
           <Link to ={`/TodasSeries`}><button className="botton"> Ver Todas las Series</button></Link>
           
            </>
    )

   }
    

}
export default Home
