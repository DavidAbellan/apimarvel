import React from 'react'
import Axios from 'axios'

class Comics extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comics: null
        }
        this.api_key = '?apikey=2416ff630c2380ca9a68e9d40a869c3f';
        this.url_key = 'https://gateway.marvel.com:443/v1/public/comics';
        this.recuperaComics()

    }

    async recuperaComics() {

        let c = await Axios.get(this.url_key + this.api_key);
        this.setState({ comics: c.data.data.results })

    }
    render() {
        if (this.state.comics == null) {
            return (
                <h1>Loading fanzines...</h1>
            )


        } else {
            return (
                <div>
                    {this.state.comics.map(a => <div> <h1>{a.title}</h1> <img src={a.thumbnail.path + '.jpg'} /></div>)
                    }
                </div>

            )
        }


    }




}

export default Comics