import React,{Component} from 'react'
import SeriesCard from '../SeriesCard/SeriesCard';
import SearchTodas from '../SearchTodas/SearchTodas';

class TodasSeries extends Component {
    constructor(props){
        super(props)
        this.state={
            data: []
            
        }
    }
   

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c')
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

    filtrarPeli(nombre){
        let aFiltrado = this.state.data.filter(peli => peli.title.toLowerCase().includes(nombre.toLowerCase()))

        this.setState({
            data: aFiltrado
        })
    } 



  render() {
    return (
        <>
        <div className="palabra">
            <h3>TODAS LAS SERIES</h3>
            <SearchTodas filtrar = {(nombre) => this.filtrarPeli(nombre)}/>
            <button onClick={() => this.traerMas()}> Trae mas peliculas</button>
        </div>
        <section className="card-container">
            {
                this.state.data.length > 0 ?
                    this.state.data.map((personaje, idx) => 
                    <SeriesCard 
                    key={personaje + idx} 
                    name={personaje.name} 
                    image={personaje.poster_path}
                    descripcion={personaje.overview}
                    id = {personaje.id}
                    />):
                    <img src="https://giphy.com/embed/3y0oCOkdKKRi0"/>
            }
      </section>
        </>
    )
  }
}


export default TodasSeries