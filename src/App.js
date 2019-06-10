import React from 'react';
import logo from './logo.svg';
import './App.css';
import Personajes from '../src/components/personajes'
import Detalle from '../src/components/detalle'
import {BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/" component={Personajes} exact />
      <Route path="/:id" component={Detalle} exact/>
       
      </Switch>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
