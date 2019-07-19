import React from 'react';
import Personaje from '../components/personaje';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

class Personajes extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            arrayPersonajes : [],
            call : 0
                    }
        this.api_key = '?apikey=2416ff630c2380ca9a68e9d40a869c3f&limit=20&offset=';
        this.api_url = 'https://gateway.marvel.com:443/v1/public/characters';
        

        this.recuperarPersonajes(); 
 
    }

    async recuperarPersonajes(){
        let persons = await axios.get(this.api_url + this.api_key + this.state.call);
        this.setState({arrayPersonajes : [...this.state.arrayPersonajes,...persons.data.data.results]});
        this.setState({call : Number(this.state.call) + 20 })


    }
    render(){
          return (
                <InfiniteScroll
                dataLength={this.state.arrayPersonajes.length} 
                next={this.recuperarPersonajes.bind(this)}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{textAlign: 'center'}}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                 <div className="container"> 
             
                     {this.state.arrayPersonajes.map((a,index) =><Personaje key={index} {...a} ></Personaje> )}
                 </div>  


                 </InfiniteScroll> 
            
              )
             
            
            
            
             
         
         
    }



}
export default Personajes;