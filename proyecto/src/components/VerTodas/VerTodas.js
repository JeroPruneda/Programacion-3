import React,{Component} from 'react'



class VerTodas extends Component {
    constructor(props){
        super(props)
        this.state={
            peliculas:[], //aparecer personajes
            nextUrl:'',
            value:'',
            data: []
            
        }
    }

     componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c')
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results
        }))
        .catch(err => console.log(err)) 
    } 
    traerMas(){
        //Traer la siguiente página de personajes
        fetch(this.state.nextUrl)
            .then( res => res.json())
            .then( data => this.setState({
                peliculas: data.results.concat(this.state.peliculas),
                nextUrl: data.info.next
            }))
            .catch()
    }

  render() {
    return (
        <>
         
    <div className="palabra">
        <h3>ACA ESTAN TODAS LAS PELICULAS</h3>
    </div>     
        </>
    )
  }
}


export default VerTodas