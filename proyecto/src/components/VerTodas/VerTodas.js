import React,{Component} from 'react'
import PeliculasCard from '../PeliculasCard/PeliculasCard';
import SeriesCard from '../SeriesCard/SeriesCard';


class VerTodas extends Component {
    constructor(props){
        super(props)
        this.state={
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
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c')
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results
        }))
        .catch(err => console.log(err)) 
    }


  render() {
    return (
        <>

        <div class="palabra">
    <h3>TODAS LAS PELICULAS Y SERIES</h3>
</div>     
        </>
    )
  }
}


export default VerTodas