import React from 'react';
import logo from './logo.svg';
import './App.css';
import Personajes from '../src/components/personajes'
import Detalle from '../src/components/detalle'
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import DetalleComic from '../src/components/detalleComic'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/" component={Personajes} exact />
      <Route path="/:id" component={Detalle} exact/>
      <Route path="/:id/:idComic" component={DetalleComic} exact/> 
       
      </Switch>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
