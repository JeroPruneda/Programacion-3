import React, {Component} from "react";

class SearchTodas extends Component{
    constructor(){
        super()
        this.state = {
            valor: ''
        }
    }

    evitarSubmit(event){
        event.preventDefault()
    }

    guardarCambios(event){
        this.setState({

            valor: event.target.value
        }, () => this.props.filtrar(this.state.valor)
        )
    
    }
    render(){
        return(
            <div className="buscador">
            <form className="interno" onSubmit={(event) => this.eSubmit(event)}>
                <input className="container" type="text" onChange= {(event) => this.controlarCambios(event)} value={this.state.valor}></input>
                <button className="bot" type="submit"> Buscar</button>
            </form>
            </div>
        )
    }

}

export default SearchTodas