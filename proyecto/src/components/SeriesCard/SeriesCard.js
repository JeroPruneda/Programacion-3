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

  render(){
    return (

<section className="peliculaspopulares">
    <a className="apolaroid">
        <article className="polaroid">
            <img className="imagen" src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt=""></img>
            <div className="textopolaroid">
                <p className="textopolaroidtitulo"> <Link to={`/detalle${this.props.id}`}> {this.props.name}</Link> </p>
                <p></p>
            </div>
        </article>
    </a>
</section>

  
    )
  }
}


export default SeriesCard