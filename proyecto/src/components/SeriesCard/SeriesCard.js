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

<section class="peliculaspopulares">
    <a class="apolaroid" href="">
        <article class="polaroid">
            <img class="imagen" src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt=""></img>
            <div class="textopolaroid">
                <p class="textopolaroidtitulo">{this.props.name}</p>
                <p></p>
            </div>
        </article>
    </a>
</section>
   
     
            
  
              

            
            
    
  
    )
  }
}


export default SeriesCard