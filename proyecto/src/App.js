import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Peliculas from './components/Peliculas/Peliculas'
import Search from './components/Search/Search'
import Series from './components/Series/Series'
import NotFound from './components/NotFound/NotFound'
import {Route, Switch} from "react-router-dom"


function App() {
  
  return (
    <React.Fragment>
     {/*  <Switch>
        <Route path= "/favoritos" component={Favoritos}></Route>
      </Switch> */}
      <Header /> 

      <Search />
      <main>

        <Switch>
        <Route path= "/detalle/:id" component={Peliculas}></Route>
        <Route path= "/detalleSerie/:id" component={Series}></Route>
        <Route path= "" component={NotFound}> </Route>
        </Switch>

       <Peliculas/>
       <Series/>
      </main>
     
     <Footer/>
    </React.Fragment>
  );
}

export default App;
