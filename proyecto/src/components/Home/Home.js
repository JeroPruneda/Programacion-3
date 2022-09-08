import React, {Component} from "react";
import Peliculas from "../Peliculas/Peliculas";
import Series from "../Series/Series";
import verTodas from "../VerTodas/VerTodas";
import {Link} from "react-router-dom"

function Home() {
   
    return (
        <>
        
            <Peliculas />
            <br></br>
            <br></br>
           <Link to ={`/verTodas`}><button className="botton" onClick={()=>this.traerMas()} > Ver Todas las Peliculas</button></Link>
            <Series />
            <br></br>
            <br></br>
           <Link to ={`/TodasSeries`}><button className="botton"> Ver Todas las Series</button></Link>
           
            </>

    )

}
export default Home
