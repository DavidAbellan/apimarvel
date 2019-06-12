import React from 'react';
import {BrowserRouter, Switch, Route,Link } from 'react-router-dom';
import Imagen from '../components/imagen'
 
function Personaje (props) {
  return (
     <div class="personaje">
     <h1>{props.name}</h1>
     <p>{props.description}</p>
     <img style={Imagen} src = {props.thumbnail.path + '.' + props.thumbnail.extension}/>
     <Link to={"/" + props.id}>See details... </Link>
     </div>

  )

}

export default Personaje;