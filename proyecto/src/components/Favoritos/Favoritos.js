import React, {Component} from "react";
import {Link} from "react-router-dom"

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
              fetch(`https://api.themoviedb.org/3/movie/${fav}/images?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
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

    render(){
        return(
            <>
            <div className="palabra">
              <h3>PELÍCULAS FAVORITAS</h3>
          
            {
              this.state.listo == true ?
              <img  src={`https://image.tmdb.org/t/p/w342/${this.state.data.backdrops[3].file_path}`} alt="funciona" /> 
             
              :
              <p>Cargando</p>

            }
            
            <button onClick={() => this.verMas()}>Ver más</button>
            </div>
            
            </>
        )
    }
}

export default Favoritos
