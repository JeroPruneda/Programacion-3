import React from 'react'
import './styless.css'

function Footer() {
  return (
    <footer>
             
        <ul className="terminos">
        <p className="miniterminos" > Términos y condiciones </p>
        <p className="miniterminos" > Ayuda </p>
        <p className="miniterminos" > Contacto </p>
        <p className="miniterminosprivacidad" > Privacidad </p>
        </ul>
        <img  src="./img/logo.png" alt="logo"></img>
             <p className="fondo">Copyright © - Todos los derechos reservados</p>
        <p >Integrantes: Jose Souto, Jeronimo Pruneda, Jeronimo Sojo</p>
    </footer>
  )
}

export default Footer

