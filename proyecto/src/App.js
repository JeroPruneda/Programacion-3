import React from 'react'
import Footer from './components/Footer/Footer'

import NotFound from './components/NotFound/NotFound'
import Favoritos from './components/Favoritos/Favoritos'
import Detalle from './components/Detalle/Detalle'
import VerTodas from './components/Ver Todas/VerTodas'
import {Route, Switch} from "react-router-dom"
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import TodasSeries from './components/TodasSeries/TodasSeries'



function App() {
  

  return (
    <React.Fragment>
      
      <Header />
      <Switch>
        <Route path= "/favoritos" component={Favoritos}/>
        <Route path= "/VerTodas" component={VerTodas}/>
        <Route path= "/TodasSeries" component={TodasSeries}/>
    
        <Route exact path= "/" component={Home}/>
        <Route path= "/detalle/:id" component={Detalle} />
        <Route path= "" component={NotFound} />

      </Switch> 
     
     <Footer/>
    </React.Fragment>
  );
}

export default App;
