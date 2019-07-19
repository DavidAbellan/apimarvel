import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


class personaje extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            personaje: null
        }
        this.idPersonaje = props.match.params.id
        this.api_key = '?apikey=2416ff630c2380ca9a68e9d40a869c3f'
        this.url = 'https://gateway.marvel.com/v1/public/characters/'
        this.recuperaPersonaje(this.idPersonaje)
    }
    async recuperaPersonaje(id) {
        let pers = await axios.get(this.url + id + this.api_key)
        this.setState({ personaje: pers.data.data.results[0] })

    }



    render() {
        if (this.state.personaje == null) {

            return (
                <h1>Loading Character...</h1>
            )
        } else {
            return (
                <div className="comicDetail">
                    <img src={this.state.personaje.thumbnail.path + '.' + this.state.personaje.thumbnail.extension} />
                    <h1>{this.state.personaje.name}</h1>
                    {this.state.personaje.description ? <p>{this.state.personaje.description}</p> : <p>No description available</p>}
                    <h1>Features</h1>
                    
                        {this.state.personaje.comics.items.map((c, index) => { return <Link to={"/" + this.idPersonaje + "/" + index} key={index}>{c.name}</Link> })}
                        <Link to='/' >back</Link>
                    
                </div>
            )
        }


    }

}




export default personaje;





