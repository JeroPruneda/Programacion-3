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
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&page=${this.state.otraPag}`)
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
        
            <SearchTodas filtrar = {(nombre) => this.filtrarPeli(nombre)}/>
            <div className="palabra">
            <h3>TODAS LAS SERIES</h3>
            <button onClick={() => this.traerMas()} className="botton"> Traer mas series</button>
        </div>
        <section className="card">
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
                    <div>
                    <img className="imagen" src="https://media4.giphy.com/media/11ASZtb7vdJagM/giphy.gif?cid=ecf05e477jslw010j1zwx5dcdi9ri9lcpp6nzn0aumipgw7n&rid=giphy.gif&ct=g"/>
                    </div>
            }
      </section>
        </>
    )
  }
}


export default TodasSeries