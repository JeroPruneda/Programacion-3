import React,{Component} from 'react'
import PeliculasCard from '../PeliculasCard/PeliculasCard';
import Search from "../Search/Search";


class Peliculas extends Component {
    constructor(props){
        super(props)
        this.state={
            data: [],
            verMas: "hide"
            
        }
    }
    traerMas(){
        //Traer la siguiente página de personajes
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c')
            .then( res => res.json())
            .then( data => this.setState({
                peliculas: data.results.concat(this.state.peliculas),
                nextUrl: data.info.next
            }))
            .catch()
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=7a176cc95147be6e695be2faf0e8ff9c')
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results
        }))
        .catch(err => console.log(err)) 
    }
    
    // BuscarPeliculas(this.name){
    //     let buscador = `https://api.themoviedb.org/3/search/movie?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&page=1&include_adult=false&query=${this.name}`;
    //     fetch(buscador)
    //     .then(resp => resp.json())
    //     .then(data => this.setState({
    //         peliculas :data.results
    //     }))
    //     .catch(err => console.log(err)) 
    // } 
    //PROBANDO BUSCADOR COMO LO HIZO EL 

    agregarFavoritos(id){
        let agregar = this.state.data.filter(agrega => agrega.id !== id)
        this.setState({
            data: agregar
        })

    }

    buscarPersonajes(nombre){
        


    }


  render() {
    return (
    <>
        <div className="palabra">
            <h3>PELÍCULAS POPULARES</h3>
        </div>
        <section className="card-container">
            {/* <Search filtrar ={(name)=> this.BuscarPeliculas(this.name)}/> EL LO HABIA HECHO ACA*/}
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
                <h1>Cargando..</h1>
            }
        </section>
     </>
    )
  }
}


export default Peliculas


