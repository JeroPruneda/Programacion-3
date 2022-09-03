import React from 'react'
import './styles.css'

function Footer() {
  return (
    <footer>
             
        <ul className="terminos">
        <a className="miniterminos" > Términos y condiciones </a>
        <a className="miniterminos" > Ayuda </a>
        <a className="miniterminos" > Contacto </a>
        <a className="miniterminosprivacidad" > Privacidad </a>
        </ul>
        <img  src="./img/logo.png" alt="logo"></img>
             <p className="fondo">Copyright © - Todos los derechos reservados</p>
        <p >Integrantes: Jose Souto, Jeronimo Pruneda, Jeronimo Sojo</p>
    </footer>
  )
}

export default Footer

