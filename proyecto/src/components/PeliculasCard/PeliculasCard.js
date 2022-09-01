
import React, {Component} from 'react'
import './styles.css'

class PeliculasCard extends Component {

  constructor(props){
    super(props)
    this.state ={
      verMas: 'hide',
      value:""
    }
  }

  render(){
    return (
      <div className="character-card">
            <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="hola"></img>
            <h4>{this.props.name}</h4>
            <h4>{this.props.descripcion}</h4>      
      </div>
  
    )
  }
}

export default PeliculasCard