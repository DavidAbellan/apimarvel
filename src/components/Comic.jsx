import React from 'react';
import {Link } from 'react-router-dom';
import imagenStilo from '../components/imagen'

function comic(props){
    console.log(props)
    return(
        <div>
            <img style={imagenStilo} src={props.thumbnail.path + '.jpg'}/>
            <h1>{props.title} </h1>
            <Link to={"/result/comic/path/" + props.id }>See more...</Link>
           
        </div>

    )


}

export default comic



