import React,{Component} from 'react'



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


  render() {
    return (
        <>
    <div className="palabra">
        <h3>TODAS LAS PELICULAS Y SERIES</h3>
    </div>     
        </>
    )
  }
}


export default VerTodas