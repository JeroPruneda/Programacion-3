import React, {Component} from "react";
import {Link} from "react-router-dom"
import FavoritosSeries from '../FavoritoSeries/favoritoSeries';
import FavoritosPeliculas from '../FavoritosPeliculas/FavoritosPeliculas';


class Favoritos extends Component{
    
     render(){
        return(
            <>
            <div className="palabra">
                <h3>TUS PELÍCULAS FAVORITAS</h3>
            </div>
            <section className="card-container">
            <FavoritosPeliculas />
            </section>
            <div className="palabra">
            <h3>TUS SERIES FAVORITAS</h3>
        </div>
        <section className="card-container">
        <FavoritosSeries />
      </section>
         </>
         
            /* <div>
              <div className="palabra">
               <h3>Tus Peliculas Favoritas</h3>
               
               <FavoritosPeliculas />
                </div>
                
                    <div className="palabra">
               <h3>Tus Series Favoritas</h3>
               <FavoritosSeries />
                </div>
            </div> */
        )
  
        
    }


}

export default Favoritos
