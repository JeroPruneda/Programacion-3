import React,{Component} from 'react'
import PeliculasCard from '../PeliculasCard/PeliculasCard';



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
            data: data.results.slice(0,12) 
            
        }))
        .catch(err => console.log(err)) 
    }
    
   

    

  render() {
    return (
    <>
        <div className="palabra">
            <h3>PELÍCULAS POPULARES</h3>
           
        </div>
        <section className="card">
            {
                this.state.data.length > 0?
                    this.state.data.map((jose, idx) => 
                    <PeliculasCard 
                    key={jose + idx} 
                    name={jose.title} 
                    image={jose.poster_path}
                    descripcion={jose.overview}
                    id = {jose.id}
                   

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


export default Peliculas


