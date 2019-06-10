import React from 'react';
import {BrowserRouter, Switch, Route,Link } from 'react-router-dom';
import Imagen from '../components/imagen'
 
function Personaje (props) {
  return (
     <div>
     <h1>{props.name}</h1>
     <h2>{props.description}</h2>
     <img className={Imagen} src = {props.thumbnail.path + '.' + props.thumbnail.extension}/>
     <Link to={"/" + props.id}>ver detalle... </Link>
     </div>

  )

}

export default Personaje;