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
        console.log(event)

    }

    guardarCambios(event){
        
        this.setState({
            valor: event.target.value
        },  () => this.props.filtrar(this.state.valor) 
        
        )
        console.log(this.state.valor)
    }
    render(){
        return(
    <>
    <div >
    <form onSubmit={(e) => this.evitarRefresh(e)}>
    <input  className="container" type={"text"} onChange= {(e) => this.guardarCambios(e)} value={this.state.valor}></input>
    <button  className="botton2" >Buscá</button>
    </form>
    </div>
    </> 
        )
    }


}
export default Search