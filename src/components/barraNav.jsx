import React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';

class barra extends React.Component {


    render() {
        return (
        <div className="cabecera">
            <NavLink className="btncb" to='/'>Heroes</NavLink>
            <NavLink className="btncb" to='/comics/list/result'>Comics </NavLink>
            <h1>MARVEL CLASS HEROES</h1>
        </div>
        )
    }
}

export default barra

