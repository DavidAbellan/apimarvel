import React from 'react';
import Axios from 'axios';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pers: null
        }
        this.persId = props.match.params.id
        this.url = 'https://gateway.marvel.com/v1/public/characters/'
        this.api_key = '?apikey=2416ff630c2380ca9a68e9d40a869c3f'
        this.recuperaPeli()

    }

    async recuperaPeli() {
        let per = await Axios.get(this.url + this.persId + this.api_key);
        console.log(per.data.data.results)
        this.setState(
            { pers: per.data.data.results[0] }
        )




    }
    render() {


        if (this.state.pers == null) {

            return <h1>Cargando...</h1>


        } else {
            return (
                <div>
                    <h1>{this.state.pers.name}</h1>
                    <img src={this.state.pers.thumbnail.path + '.' + this.state.pers.thumbnail.extension} />
                    {this.state.pers.description ? <h2>{this.state.pers.description}</h2> : <h1>No Description</h1>}
                    <Link to='/' >back</Link>
                </div>)
        }




    }



}
export default detail;
