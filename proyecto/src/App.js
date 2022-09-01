import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Peliculas from './components/Peliculas/Peliculas'

function App() {
  const opciones = ['Home','Favoritos', 'Ver todas']
  return (
    <React.Fragment>
      <Header opciones={opciones}/>
      <main>
       <Peliculas/>
      </main>
     
     <Footer/>
    </React.Fragment>
  );
}

export default App;
