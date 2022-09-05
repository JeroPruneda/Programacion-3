import React,{Component} from 'react'



class TodasSeries extends Component {
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
            data: data.results
        }))
        .catch(err => console.log(err)) 
    }


  render() {
    return (
        <>
    <div className="palabra">
        <h3>ACA ESTAN TODAS LAS SERIES</h3>
    </div>     
        </>
    )
  }
}


export default TodasSeries