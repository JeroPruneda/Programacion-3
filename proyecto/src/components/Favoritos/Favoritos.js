import React, {Component} from "react";
import {Link} from "react-router-dom"


class Favoritos extends Component{
    constructor(props){
        super(props)
        this.state = {
          verMas: "hide",
          dataPelis: [],
          listo: false
        }
    }

    componentDidMount(){
      let storage = localStorage.getItem("favoritos")
      if(storage !== null){
        let parsedStorage = JSON.parse(storage)
       
       Promise.all(
          parsedStorage.map((fav) => {
            return(
              fetch(`https://api.themoviedb.org/3/movie/${fav}?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
              .then(resp => resp.json())
              .then(data => data )
              
          )
          })
        ).then(data =>this.setState({
          dataPelis: data
      }))
    
        .catch(err => console.log(err))
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

      removeFavoritos(id){
        let fav = localStorage.getItem("favoritos")
        let parsed = JSON.parse(fav)
        let filtro = parsed.filter(elm => elm !== id)
        let string = JSON.stringify(filtro)
        localStorage.setItem("favoritos", string)
    
        this.setState({
          favoritos: false
        })
      }

      render(){
        return(
            <div>
              <div className="palabra">
               <h3>Tus Peliculas Favoritas</h3>
                </div>
                {
                    this.state.dataPelis.length > 0 ?
                    this.state.dataPelis.map((elm, idx) =>
        <section className="card-container">
              <a className="apolaroid">
                <article className="polaroid">
                
                      <div className="textopolaroid">
                        <p className="textopolaroidtitulo" key={idx + elm.name}>{elm.title}</p>
                            <Link to={`/detalle/${this.props.id}`}> <img className="imagen" src={`https://image.tmdb.org/t/p/w342/${elm.backdrop_path}`} alt="funciona" /> </Link>
                                <p className={this.state.verMas} >{elm.overview}</p>
                     <br></br>
                                        <button onClick={() => this.verMas()}>Ver más</button>
                     <br></br>
                            <button onClick={() => this.removeFavoritos(this.props.id)}> Sacar de Favoritos</button> 
                     </div>
                     </article>
                     </a>
                     </section>
                    
                     )
                    : 
                    <img src="https://giphy.com/embed/3y0oCOkdKKRi0"/>
                }
                    <div className="palabra">
               <h3>Tus Series Favoritas</h3>
               
                </div>
            </div>
        )
  
        
    }


}

export default Favoritos
