import React, {Component} from "react";

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            valor: ""

        }
    }

    eSubmit(event){
        event.preventDefault()
    }

    controlarCambios(event){
        this.setState({
            valor: event.target.value
        }, () => this.props.buscar(this.state.valor)
        )
    }
    render(){
        return(
        <>
            <form onSubmit={(event) => this.eSubmit(event)}>
                <input className="container" type="text" onChange= {(event) => this.controlarCambios(event)} value={this.state.valor}></input>
                <button type="submit"> Buscar</button>
            </form>
            
        </> 
        )
    }

}
export default Search