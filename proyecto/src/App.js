import React from 'react'
import index from './index'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Peliculas from './components/Peliculas/Peliculas'
import Search from './components/Search/Search'
import Series from './components/Series/Series'
import NotFound from './components/NotFound/NotFound'
import Favoritos from './components/Favoritos/Favoritos';
import VerTodas from './components/VerTodas/VerTodas';
import {Route, Switch} from "react-router-dom"


function App() {
  
  return (
    <React.Fragment>
      <Switch>
        <Route exact path= "/" > <index/></Route>
        <Route path= "/favoritos" component={Favoritos}/>
        <Route path= "/VerTodas" component={VerTodas}/>
      </Switch> 
      <Header 
      
      /> 

      <Search />
      <main>

        <Switch>
        <Route path= "/detalle/:id" component={Peliculas}></Route>
        <Route path= "/detalleSerie/:id" component={Series}></Route>
        </Switch>

       <Peliculas/>
       <Series/>
      </main>
     
     <Footer/>
    </React.Fragment>
  );
}

export default App;
