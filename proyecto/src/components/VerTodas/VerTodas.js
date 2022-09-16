import React,{Component} from 'react'
import {Link} from "react-router-dom"
import PeliculasCard from '../PeliculasCard/PeliculasCard';


class VerTodas extends Component {
    constructor(props){
        super(props)
        this.state={
            data: [],
            verMas: "hide",
            otraPag: ""
            
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c')
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results
        }))
        .catch(err => console.log(err)) 
    }

    traerMas(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&page=${this.state.otraPag}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results,
            otraPag: data.page + 1
        }))
        .catch(e => console.log(e))
    }
    
    render() {
    return (
    <>
        <div className="palabra">
            <h3>Todas las peliculas</h3>
            <button onClick={() => this.traerMas()}> Trae mas peliculas</button>
        </div>
        <section className="card-container">
            
        
            {
                this.state.data.length > 0 ?
                    this.state.data.map((jose, idx) => 
                    <PeliculasCard 
                    key={jose + idx} 
                    name={jose.title} 
                    image={jose.poster_path}
                    descripcion={jose.overview}
                    id = {jose.id}
                    agregar = {(id) => this.agregarFavoritos(id)}
                    
                    />):
                    <img src="https://giphy.com/embed/3y0oCOkdKKRi0"/>
            }
           
        </section>
     </>
    )
  }
}


export default VerTodas