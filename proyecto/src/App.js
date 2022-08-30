import React from 'react'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
function App() {
  const opciones = ['Home','Favoritos']
  return (
    <React.Fragment>
      <main>
       <Home opciones={opciones}/>
      </main>
     <Footer/>
    </React.Fragment>
  );
}

export default App;
