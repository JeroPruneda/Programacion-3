import React, {Component} from 'react'


class Peliculas extends Component{

   constructor(props){
    super(props);
    this.state = {
      data: [],
      listo: false

    }
  } 

  componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c")
    .then(resp => resp.json())
    .then (data => console.log(data)
      
      /* this.setState({
      data: data.results,
      listo: true
    }) */)
    .catch(error => console.log(error))
  }


  render(){
    return(
    <>
      {this.state.listo ? <h1>{this.state.data.title}</h1> : ""}
    </> 
    )
  }
}

export default Peliculas


