import React,{Component} from 'react'
import {Link} from "react-router-dom"



class VerTodas extends Component {
    constructor(props){
        super(props)
        this.state={
            nextUrl:'',
            data: []
            
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/latest?api_key=7a176cc95147be6e695be2faf0e8ff9c')
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results
        }))
        .catch(err => console.log(err)) 
    }
    traerMas(){
        //Traer la siguiente página de personajes
        fetch(this.state.nextUrl)
            .then( res => res.json())
            .then( data => this.setState({
                peliculas: data.results.concat(this.state.peliculas),
                nextUrl: data.info.next
            }))
            .catch()
    }

  render() {
    return (
        <>
    <div className="palabra">
        <h3>ACA ESTAN TODAS LAS PELICULAS</h3>
    </div>     
    <section className='peliculaspopulares'>
    <a className="apolaroid">
        <article className="polaroid">
            <img className="imagen" src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" /> 
            <div className="textopolaroid">
              <p className="textopolaroidtitulo"> <Link to={`/detalle/${this.props.id}`}> {this.props.name}</Link></p>
             
              <p className={this.state.verMas}>{this.props.descripcion}</p> 
              {
                this.state.favoritos ? <button onClick={() => this.removeFavoritos(this.props.id)}> Sacar de Favoritos</button>: <button onClick={() => this.agregarFavoritos(this.props.id)} > Agregar a Favoritos</button> 
              }
              
              <button onClick={() => this.verMas()}>Ver más</button>


              
            </div>
        </article>
   </a>
   
</section>
        </>
    )
  }
}


export default VerTodas