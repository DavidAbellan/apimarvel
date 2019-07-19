import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import ComicDetalle from '../components/detalleComic'

class detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pers: null
        }
        this.persId = props.match.params.id
        this.url = 'https://gateway.marvel.com/v1/public/characters/'
        this.api_key = '?apikey=2416ff630c2380ca9a68e9d40a869c3f'
        this.recuperaPersonaje()

    }

    async recuperaPersonaje() {
        let per = await Axios.get(this.url + this.persId + this.api_key);
        console.log(per.data.data.results[0])
        this.setState(
            { pers: per.data.data.results[0] }
        )




    }
    render() {


        if (this.state.pers == null) {

            return <h1>Loading...</h1>


        } else {
            return (
                <div className="comicDetail">
                    <h1>{this.state.pers.name}</h1>
                    <img src={this.state.pers.thumbnail.path + '.' + this.state.pers.thumbnail.extension} />
                    {this.state.pers.description ? <h2>{this.state.pers.description}</h2> : <h1>No Description</h1>}
                    <h2>features</h2>
                    {this.state.pers.comics.items.map((c,index)=>
                        { return <Link to={"/" + this.persId +"/"+ index} key={index}>{c.name}</Link>})}
                    <Link to='/' >back</Link>
                </div>)
        }




    }



}
export default detail;
