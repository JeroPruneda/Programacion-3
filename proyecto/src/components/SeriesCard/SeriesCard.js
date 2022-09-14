import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './styles.css'


class SeriesCard extends Component {

  constructor(props){
    super(props)
    this.state ={
      verMas: 'false',
      value:"",
      favoritosSeries: false
    }
  }
  show(){
    this.setState( {verMas: true} )
}
hide(){
    this.setState({verMas: false} )
}

  agregarFavoritos(id){
    let fav = localStorage.getItem("favoritosSeries")
    if (fav === null) {
      let arr = [id]
      let string = JSON.stringify(arr)
      localStorage.setItem("favoritosSeries", string)
      
      
    } else {
      let parse =  JSON.parse(fav)
      parse.push(id)
      let string = JSON.stringify(parse)
      localStorage.setItem("favoritosSeries", string)
    }

    this.setState({
      favoritos: true
    })
  }

  removeFavoritos(id){
    let fav = localStorage.getItem("favoritosSeries")
    let parsed = JSON.parse(fav)
    let filtro = parsed.filter(elm => elm !== id)
    let string = JSON.stringify(filtro)
    localStorage.setItem("favoritosSeries", string)

    this.setState({
      favoritosSeries: false
    })
  }
  render(){
    return (

<section className="peliculaspopulares">
    <a className="apolaroid">
        <article className="polaroid">
            <img className="imagen" src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt=""></img>
            <div className="textopolaroid">
                <p className="textopolaroidtitulo"> <Link to={`/detalleSerie/${this.props.id}`}> {this.props.name}</Link> </p>
                {/* <p className={this.state.verMas}>{this.props.descripcion}</p> */}
              {/* <button onClick={() => this.verMas()}>Ver más</button> */}
              {
                this.state.favoritos ? <button onClick={() => this.removeFavoritos(this.props.id)}> Sacar de Favoritos</button>: <button onClick={() => this.agregarFavoritos(this.props.id)} > Agregar a Favoritos</button> 
              }
              {this.state.verMas ? 
                        <button  onClick={() => this.hide()}>Ver mas</button>   
                        :   
                        <section className='extra'>                            
                            <p>Descripcion: {this.props.descripcion}</p> 
                            <button  onClick={() => this.show()}>Ver menos</button>
                        </section>                                          
                                             
                        
                    } 
              
            </div>
        </article>
    </a>
</section>

  
    )
  }
}


export default SeriesCard