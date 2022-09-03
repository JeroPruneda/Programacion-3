import React, {Component} from 'react'
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
    <a className="apolaroid" href="">
        <article className="polaroid">
            <img className="imagen" src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt=""></img>
            <div className="textopolaroid">
                <p className="textopolaroidtitulo">{this.props.name}</p>
                <p></p>
            </div>
        </article>
    </a>
</section>

  
    )
  }
}


export default SeriesCard