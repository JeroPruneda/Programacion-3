import React, {Component} from "react";

class Detalle extends Component{
    constructor(props){
        super(props);
        this.state = {
            detalle: {},
            
        }
    } 
    componentDidMount(){
        console.log("hola");
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
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
              <div className="textopolaroid">
            <img className="imagenDetalle" src={`https://image.tmdb.org/t/p/w342/${this.state.detalle.poster_path}`}/>
            <p className="palabraDetalle">{this.state.detalle.title}</p>
            <p className="palabraDetalle">{this.state.detalle.vote_average}</p>
            <p className="palabraDetalle">{this.state.detalle.release_date}</p>
            <p className="palabraDetalle">{this.state.detalle.overview}</p>
            </div>
            </>
            
        )
    } 
}

export default Detalle