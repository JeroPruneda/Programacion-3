import React, {Component} from "react";
import './stylesSeries.css'

class DetalleSerie extends Component{
    constructor(props){
        super(props);
        this.state = {
            detalle: {
                genres:[]
            },
            favoritos: false
            
        }
    } 
    componentDidMount(){
        console.log("hola");
        fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
        .then(resp => resp.json())
        .then(data => 
              this.setState
            ({
            detalle: data,
            
        })  )
        .catch(error => console.log(error))
    
    }
    render(){
        return(
          <>
        {this.state.detalle.genres.length === 0 ?
                    <img src="https://media4.giphy.com/media/11ASZtb7vdJagM/giphy.gif?cid=ecf05e477jslw010j1zwx5dcdi9ri9lcpp6nzn0aumipgw7n&rid=giphy.gif&ct=g" alt="Cargando..." />
                    :
                     <main> 
                        <div class="portada">
                             <img className="imgLaptop" src={`https://image.tmdb.org/t/p/w342/${this.state.detalle.poster_path}`} alt=""></img>
                         </div>
                         <div className="info">
                             <h1>{this.state.detalle.name}</h1>                    
                             <ul className="detalles">
                                 <li className="fechaDeEstreno">{this.state.detalle.release_date}</li>
                                 
                                <p className="genero">{this.state.detalle.genres[0].name}</p>     
                             </ul>
                              
                             <p className="rating">Rating: {this.state.detalle.vote_average}/10</p>
                             
                             <p className="sinopsis">{this.state.detalle.overview}</p>
                             
                         </div>
                     </main>
                       }
        </>
        )
    } 
}

export default DetalleSerie