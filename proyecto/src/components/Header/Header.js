import React from "react";

function Header(props){

    return(
    <nav>
          <ul className="user">
            <li>
                <img src="./img/logo.png" alt="" />
            </li>
        </ul>
        <ul className="main-nav">
            {props.opciones.map((opcion, idx) => <li key={opcion + idx}>{opcion}</li>)}
        </ul>
    
     </nav>
    )
}
export default Header