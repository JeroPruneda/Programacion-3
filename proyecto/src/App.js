import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Peliculas from './components/Peliculas/Peliculas'
import Series from './components/Series/Series'

function App() {
  const opciones = ['Home','Favoritos', 'Ver todas']
  return (
    <React.Fragment>
      <main>
       <Header opciones={opciones}/>
       <Peliculas/>
       <Series/>
      </main>
     <Footer/>
    </React.Fragment>
  );
}

export default App;
