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
                {
                    this.state.dataPelis.length > 0 ?
                    this.state.dataPelis.map((elm, idx) =>
                    <>
                    <section className='peliculaspopulares'>
                    <a className="apolaroid">
                    <article className="polaroid">
                    <div className="textopolaroid">
                     <p className="textopolaroidtitulo" key={idx + elm.name}>{elm.original_title}</p>
                     <img  src={`https://image.tmdb.org/t/p/w342/${elm.backdrop_path}`} alt="funciona" /> 
                     <p className={this.state.verMas} >{elm.overview}</p>
                     {/* {
                    this.state.favoritos ? <button onClick={() => this.removeFavoritos(elm.id)}> Sacar de Favoritos</button>: <button onClick={() => this.agregarFavoritos(elm.id)} > Agregar a Favoritos</button> 
                    } */}
                     <button onClick={() => this.verMas()}>Ver más</button>
                     </div>
                     </article>
                     </a>
                     </section>
                     </>
                     )
                    : 'Cargando..'
                }
            </div>
        )
  
        
    }
}

export default Favoritos
