import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../src/stilos.css'
import Personajes from '../src/components/personajes'
import Detalle from '../src/components/detalle'
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import DetalleComic from '../src/components/detalleComic'
import Barra from '../src/components/barraNav'
import Comics from '../src/components/Comics'
import Comic from '../src/components/Comic'
import ComicDetalle from '../src/components/ComicDetalle'
import Rpersonaje from '../src/components/recuperaPers'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Barra></Barra>
      <Switch>
      <Route path="/" component={Personajes} exact />
      <Route path="/:id" component={Detalle} exact/>
      <Route path="/:id/:idComic" component={DetalleComic} exact/> 
      <Route path="/comics/list/result" component={Comics} exact />
      <Route path="/result/comic/path/:id" component={ComicDetalle} exact/>
      <Route path="/result/personaje/ch/:id" component={Rpersonaje} exact/>

      
       
      </Switch>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
