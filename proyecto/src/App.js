import React from 'react'
import Footer from './components/Footer/Footer'

import Search from './components/Search/Search'

import NotFound from './components/NotFound/NotFound'
import Favoritos from './components/Favoritos/Favoritos'
import Detalle from './components/Detalle/Detalle'
import VerTodas from './components/VerTodas/VerTodas'
import {Route, Switch} from "react-router-dom"
import Home from './components/Home/Home'



function App() {
  
  return (
    <React.Fragment>
      <Switch>
        <Route path= "/favoritos" component={Favoritos}/>
        <Route path= "/VerTodas" component={VerTodas}/>
      </Switch> 

      {/* <Search /> */}
      <main>
        <Switch>
        <Route path= "/" component={Home}/>
        <Route path= "/detalle/:id" component={Detalle} />
        <Route path= "" component={NotFound} />
        </Switch>
      </main>
     
     <Footer/>
    </React.Fragment>
  );
}

export default App;
