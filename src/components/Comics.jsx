import React from 'react'
import Axios from 'axios'
import Comic from '../components/Comic'
import InfiniteScroll from 'react-infinite-scroll-component';


class Comics extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comics: [],
            call : 0
        }
        this.api_key = '?apikey=2416ff630c2380ca9a68e9d40a869c3f&limit=20&offset=';
        this.url_key = 'https://gateway.marvel.com:443/v1/public/comics';
        this.recuperaComics()

    }

    async recuperaComics() {

        let c = await Axios.get(this.url_key + this.api_key+ this.state.call);
        this.setState({ comics:[...this.state.comics ,... c.data.data.results] })
        this.setState({call : Number(this.state.call) + 20 })


    }
    render() {
        if (this.state.comics == null) {
            return (
                <h1>Loading fanzines...</h1>
            )


        } else {
            return (
                <InfiniteScroll
                dataLength={this.state.comics.length} 
                next={()=> this.recuperaComics()}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{textAlign: 'center'}}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                
                <div className="container">
                    
                    {this.state.comics.map(a => <div className="container"> <Comic {...a} ></Comic>  </div>)
                    }
                </div>
                </InfiniteScroll>

            )
        }


    }




}

export default Comics