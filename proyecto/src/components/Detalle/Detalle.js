import React, {Component} from "react";

class Detalle extends Component{
    constructor(props){
        super(props);
        this.state = {
            detalle: {},
            listo: false
        }
    } 
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
        .then(resp => resp.json())
        .then(data => 
             this.setState
            ({
            detalle: data,
            listo: true
        }) )
        .catch(error => console.log(error))
    
    }
    render(){
        return(
            <>
            {this.state.listo ? <p>{this.state.detalle.name}</p> : ""}

            <p>hola funciona el detalle</p>

            </>
            
        )
    } 
}

export default Detalle