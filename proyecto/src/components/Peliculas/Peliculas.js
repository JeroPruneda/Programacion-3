import React, {Component} from 'react'


class Peliculas extends Component() {

  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){
    fetch()
    .then( resp => resp.json())
    .then (data => console.log(data))
  }

  

  render(){
    return(
    <>
      <h1>Aca van las pelis </h1> 
    </> //ACA LLAMAMOS A LA API
    )
  }
}

export default Peliculas

