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
        fetch(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            detalle: data,
            listo: true
        }))
        .catch(error => console.log(error))
    

    }
    render(){
        return(
            <>
            {this.state.listo ? <p>{this.state.detalle.name}</p> : ""}

            </>
            
        )
    }
}

export default Detalle