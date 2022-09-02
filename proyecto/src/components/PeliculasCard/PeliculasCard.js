
import React, {Component} from 'react'
import {Link} from "react-router-dom"

import './styles.css'

class PeliculasCard extends Component {

  constructor(props){
    super(props)
    this.state ={
      verMas: 'hide',

    }
  }
  verMas(){
    if(this.state.verMas === 'show'){
      this.setState({
        verMas:'hide'
      })
    } else {
      this.setState({
        verMas:'show'
      })
    }
  }

  render(){
    return (

<section className='peliculaspopulares'>
    <a className="apolaroid" href="">
        <article className="polaroid">
            <img className="imagen" src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" /> 
            <div className="textopolaroid">
              <p className="textopolaroidtitulo"> <Link to={`/detalle${this.props.id}`}> {this.props.name}</Link></p>
              <p className={this.state.verMas}>{this.props.overview}</p> {/* este deberia solo aparecer si tocamos el Ver mas . y overveiw tampoco agarra nose porque*/}
              <button onClick={()=>this.verMas()}>Ver más</button>
            </div>
        </article>
    </a>
</section>
   
     
            
  
              

            
            
    
  
    )
  }
}


export default PeliculasCard