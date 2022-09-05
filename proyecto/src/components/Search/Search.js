import React, {Component} from "react";

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            valor: ""

        }
    }

    evitarRefresh(event){
        event.preventDefault()

    }

    guardarCambios(event){
        this.setState({
            valor: event.target.value
        }, () => this.props.search(this.state.valor)
        
        )

    }
    render(){
        return(
    <>
    <form onSubmit={(e) => this.evitarRefresh(e)}>
    <input type={"text"} onChange= {(e) => this.guardarCambios(e)} value={this.state.valor}></input>
    <button>Buscá</button>
    </form>
    
    </> 
        )
    }


}
export default Search