import React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';

class barra extends React.Component {


    render() {
        return (
        <div>
            <NavLink to='/'>Heroes</NavLink>
            <NavLink to='/comics/list/result'>Comics </NavLink>
        </div>
        )
    }
}

export default barra

