import React, {Component} from "react";
import './styles.css'

class Detalle extends Component{
    constructor(props){
        super(props);
        this.state = {
            detalle: {},

            
        }
    } 
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
        .then(resp => resp.json())
        .then(data => {console.log(data)
              this.setState({
            detalle: data,
        })  })
        .catch(error => console.log(error))
    
    }


    render(){
        return(
        <>
        
        <main> 
           <div class="portada">
                <img className="imgLaptop" src={`https://image.tmdb.org/t/p/w342/${this.state.detalle.poster_path}`} alt=""></img>
            </div>
            <div className="info">
                <h1>{this.state.detalle.title}</h1>                    
                <ul className="detalles">
                    <li className="fechaDeEstreno">{this.state.detalle.release_date}</li>
                    <li className="fechaDeEstreno"> {this.state.detalle.genres}</li>
                </ul>
                <p className="rating">{this.state.detalle.vote_average}</p>
                <p className="sinopsis">{this.state.detalle.overview}</p>
                
            </div>
        </main>
        </>
        
        )
    } 
}

export default Detalle