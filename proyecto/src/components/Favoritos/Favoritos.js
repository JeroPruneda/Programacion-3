import React, {Component} from "react";
import {Link} from "react-router-dom"
import FavoritosSeries from '../FavoritoSeries/favoritoSeries';
import FavoritosPeliculas from '../FavoritosPeliculas/FavoritosPeliculas';

class Favoritos extends Component{
    

      render(){
        return(
            <div>
              <div className="palabra">
               <h3>Tus Peliculas Favoritas</h3>
               <FavoritosPeliculas />
                </div>
                
                    <div className="palabra">
               <h3>Tus Series Favoritas</h3>
               <FavoritosSeries />
                </div>
            </div>
        )
  
        
    }


}

export default Favoritos
