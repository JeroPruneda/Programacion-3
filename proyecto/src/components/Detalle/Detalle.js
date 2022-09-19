import React, {Component} from "react";
import './styles.css'

class Detalle extends Component{
    constructor(props){
        super(props);
        this.state = {
            detalle: {
              genres: []
            },
            favoritos: false

        }
    } 
    componentDidMount(){

       
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
        .then(resp => resp.json())
        .then(data => {console.log(data)
              this.setState({
            detalle: data,
        })  })
        .catch(error => console.log(error))

        let fav= localStorage.getItem("favoritos")
        let string = JSON.parse(fav)
        if(fav !== null){
        let esFavorito = string.includes(this.state.detalle.id)
        if((esFavorito) === true){
            this.setState({
                favoritos : true
              })
         }
        }
    }

    agregarFavoritos(id){
        let fav = localStorage.getItem("favoritos")
        if (fav === null) {
          let arr = [id]
          let string = JSON.stringify(arr)
          localStorage.setItem("favoritos", string)
          
          
        } else {
          let parse =  JSON.parse(fav)
          parse.push(id)
          let string = JSON.stringify(parse)
          localStorage.setItem("favoritos", string)
        }
    
        this.setState({
          favoritos: true
        })
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
                {this.state.detalle.genres.length === 0 ?
                    <img src="https://media4.giphy.com/media/11ASZtb7vdJagM/giphy.gif?cid=ecf05e477jslw010j1zwx5dcdi9ri9lcpp6nzn0aumipgw7n&rid=giphy.gif&ct=g" alt="Cargando..." />
                    :
                     <main> 
                        <div class="portada">
                             <img className="imgLaptop" src={`https://image.tmdb.org/t/p/w342/${this.state.detalle.poster_path}`} alt=""></img>
                             <img className="imgMobile" src={`https://image.tmdb.org/t/p/w342/${this.state.detalle.poster_path}`} alt=""></img>
                         </div>
                         <div className="info">
                             <h1>{this.state.detalle.title}</h1>                    
                             <ul className="detalles">
                                 <li className="fechaDeEstreno">{this.state.detalle.release_date}</li>
                                 <li className="duracion">{this.state.detalle.runtime} minutes</li>
                                <p className="genero">{this.state.detalle.genres[0].name}</p>     
                             </ul>
                              
                             <p className="rating">Rating: {this.state.detalle.vote_average}/10</p>
                             
                             <p className="sinopsis">{this.state.detalle.overview}</p>
                             
                         </div>
                     </main>
                       }
               </> 
            
       /*  <>
        
        <main> 
           <div class="portada">
                <img className="imgLaptop" src={`https://image.tmdb.org/t/p/w342/${this.state.detalle.poster_path}`} alt=""></img>
            </div>
            <div className="info">
                <h1>{this.state.detalle.title}</h1>                    
                <ul className="detalles">
                    <li className="fechaDeEstreno">{this.state.detalle.release_date}</li>
                    <li class="duracion">{this.state.detalle.runtime} minutes</li>
                      
                </ul>
                <ul class="genero">{
                                    this.state.detalle.genres.map((Genero) => <li className='genero'>{Genero.name}</li>)
                                }</ul> 
                <p className="rating">Rating: {this.state.detalle.vote_average}/10</p>
                <p class="sinopsis"></p>
                <p className="sinopsis">{this.state.detalle.overview}</p>
                {
                this.state.favoritos ? 
                <button onClick={() => this.removeFavoritos(this.state.detalle.id)}> Sacar de Favoritos</button>
                : 
                <button onClick={() => this.agregarFavoritos(this.state.detalle.id)} > Agregar a Favoritos</button> 
              }
                
            </div>
        </main>
        </> */
        
        )
    } 
}

export default Detalle