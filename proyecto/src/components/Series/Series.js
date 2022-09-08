import React,{Component} from 'react'
import SeriesCard from '../SeriesCard/SeriesCard';


class Series extends Component {
    constructor(props){
        super(props)
        this.state={
            data: []
            
        }
    }
   

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c')
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results.slice(0,12)
        }))
        .catch(err => console.log(err)) 
    }


  render() {
    return (
        <>
        <div className="palabra">
    <h3>SERIES POPULARES</h3>
</div>
        <section className="card-container">
            {
                this.state.data.length > 0 ?
                    this.state.data.map((personaje, idx) => 
                    <SeriesCard 
                    key={personaje + idx} 
                    name={personaje.name} 
                    image={personaje.poster_path}
                    descripcion={personaje.overview}
                    id = {personaje.id}
                    />):
                <h1>Cargando..</h1>
            }
      </section>
        </>
    )
  }
}


export default Series
