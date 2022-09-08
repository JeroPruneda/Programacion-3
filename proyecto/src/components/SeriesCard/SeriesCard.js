import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './styles.css'


class SeriesCard extends Component {

  constructor(props){
    super(props)
    this.state ={
      verMas: 'hide',
      value:""
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

<section className="peliculaspopulares">
    <a className="apolaroid">
        <article className="polaroid">
            <img className="imagen" src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt=""></img>
            <div className="textopolaroid">
                <p className="textopolaroidtitulo"> <Link to={`/detalleSerie/${this.props.id}`}> {this.props.name}</Link> </p>
                <p className={this.state.verMas}>{this.props.descripcion}</p> {/* este deberia solo aparecer si tocamos el Ver mas */}
              <button onClick={() => this.verMas()}>Ver más</button>
              <button onClick={() => this.props.agregarFavoritos(this.props.id)} > Agregar a Favoritos</button>
            </div>
        </article>
    </a>
</section>

  
    )
  }
}


export default SeriesCard