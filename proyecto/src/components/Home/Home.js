import React, {Component} from "react";
import Peliculas from "../Peliculas/Peliculas";
import Series from "../Series/Series";
import Header from "../Header/Header";

class Home extends Component{
    constructor(props){
        super(props);
        this.state={

    }
}

    render(){
        return(
            <>
            <Header />
            <Peliculas />
            <Series />
            </>

        )

    }
        
        
    

    
}
export default Home