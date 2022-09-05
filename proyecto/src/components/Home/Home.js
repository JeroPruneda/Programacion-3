import React, {Component} from "react";
import Peliculas from "../Peliculas/Peliculas";
import Series from "../Series/Series";
import {Link} from "react-router-dom"


function Home() {
    return (
        <>
            <Peliculas />
            <br></br>
            <br></br>
          <button className="botton"> <Link to ={`/verTodas`}> Ver Todas las Peliculas</Link></button>
            <Series />
            <br></br>
            <br></br>
          <button className="botton"> <Link to ={`/TodasSeries`}> Ver Todas las Series</Link></button>
            </>

    )

}
export default Home
