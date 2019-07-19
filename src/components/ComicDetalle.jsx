import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




class detalle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comic: null
        }
        this.url_c = 'https://gateway.marvel.com/v1/public/comics/'
        this.api_key = '?apikey=2416ff630c2380ca9a68e9d40a869c3f'
        this.idComic = props.match.params.id
        this.recuperaComic(this.idComic)
    }
    async recuperaComic(idComic) {

        let com = await axios.get(this.url_c + idComic + this.api_key);
        console.log(com.data.data.results[0])
        this.setState({ comic: com.data.data.results[0] })


    }
    recortaId(url){
     let arr = url.split('/');
     return arr[arr.length - 1]

    }


    render() {
        if (this.state.comic == null) {
            return (
                <h1>Getting comic...</h1>
            )
        }
        return (
            <div className="comicDetail">
                <img src={this.state.comic.thumbnail.path + '.jpg'} />
                <h1>{this.state.comic.title}</h1>
                <p>{this.state.comic.description}</p>
                <h1>Characters</h1>
                <ul>
                    
                    {this.state.comic.characters.items.length !== 0 ? this.state.comic.characters.items.map(a => <Link to={"/result/personaje/ch/" + this.recortaId(a.resourceURI)} >{a.name}</Link> ) :<p>Unknow Characters</p>}
                   
                    {console.log(this.state.comic.characters.items) }

                </ul>

            </div>
        )
    }


}
export default detalle