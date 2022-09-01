import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Peliculas from './components/Peliculas/Peliculas'
import Search from './components/Search/Search'

function App() {
  const opciones = ['Home','Favoritos', 'Ver todas']
  return (
    <React.Fragment>
      <Header opciones={opciones} /> <Search />
      <main>
       <Peliculas/>
      </main>
     
     <Footer/>
    </React.Fragment>
  );
}

export default App;
