import React, {Component} from "react";
import {Link} from "react-router-dom"
import '../Favoritos/styles.css'

class Favoritos extends Component{
    constructor(props){
        super(props);
        this.state = {
          verMas: "hide",
          data: [],
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
              .then(data => {console.log(data)
                 this.setState({
                data: data,
                listo: true
              })}))
            })
        )
        .catch(e => console.log(e)) 
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
            <>
            <div className="palabra">
              <h3>PELÍCULAS FAVORITAS</h3>
          
            {
              this.state.listo === true ?
              <Link to={`/detalle/${this.state.data.id}`}><img  src={`https://image.tmdb.org/t/p/w342/${this.state.data.backdrop_path}`} alt="funciona" /> </Link>
              :
              <p>Cargando</p>

            }
            <p className={this.state.verMas}>{this.state.data.title}</p>

            <p className={this.state.verMas}>{this.state.data.overview}</p>
            {
              this.state.favoritos ? <button onClick={() => this.removeFavoritos(this.state.data.id)}> Sacar de Favoritos</button>: "" 
            }
            <button onClick={() => this.verMas()}>Ver más</button>
            </div>
            </>
        )
    }
}

export default Favoritos
