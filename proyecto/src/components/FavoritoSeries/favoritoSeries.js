import React, {Component} from "react";
import {Link} from "react-router-dom"


class FavoritoSerie extends Component{
    constructor(props){
        super(props)
        this.state = {
          verMas: "hide",
          dataSeries:[],
          listo: false
        }
    }
    componentDidMount(){
      let storage = localStorage.getItem("favoritosSeries")
      if(storage !== null){
        let parsedStorage = JSON.parse(storage)
       
       Promise.all(
          parsedStorage.map((fav) => {
            return(
              fetch(`https://api.themoviedb.org/3/tv/${fav}?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
              .then(resp => resp.json())
              .then(data => data )
              
          )
          })
        ).then(data =>this.setState({
          dataSeries: data
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
                    this.state.dataSeries.length > 0 ?
                    this.state.dataSeries.map((elm, idx) =>
                    <section className='peliculaspopulares'>
                    <a className="apolaroid">
                        <article className="polaroid">
                            <img className="imagen" src={`https://image.tmdb.org/t/p/w342/${elm.backdrop_path}`} alt="" /> 
                            <div className="textopolaroid">
                              <p className="textopolaroidtitulo" key={idx + elm.name}>{elm.title} <Link to={`/detalle/${this.props.id}`}> </Link></p>
                             
                              {/* <p className={this.state.verMas}>{this.props.descripcion}</p>  */}
                              {
                                <button onClick={() => this.removeFavoritos(this.props.id)}> Sacar de Favoritos</button> 
                              }
                              {this.state.verMas ? 
                                        <button  onClick={() => this.hide()}>Ver mas</button>   
                                        :   
                                        <section className='extra'>                            
                                            <p>Descripcion: {elm.overview}</p> 
                                            <button  onClick={() => this.show()}>Ver menos</button>
                                        </section>                                          
                                                             
                                        
                                    } 
                             {/*  <button onClick={() => this.verMas()}>Ver más</button> */}
                
                
                              
                            </div>
                        </article>
                   </a>
                   
                </section>
                    
                     )
                    : 
                    <img src="https://giphy.com/embed/3y0oCOkdKKRi0"/>
                }
                    
               
                
            </div>
        )
  
        
    }


}

export default FavoritoSerie
