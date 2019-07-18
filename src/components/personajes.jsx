import React from 'react';
import Personaje from '../components/personaje';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

class Personajes extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            arrayPersonajes : []
                    }
        this.api_key = '?apikey=2416ff630c2380ca9a68e9d40a869c3f&limit=20&offset=';
        this.api_url = 'https://gateway.marvel.com:443/v1/public/characters'
        this.page = 0;
        this.recuperarPersonajes(this.page); 
 
    }

    async recuperarPersonajes(){
        console.log('1',this.page);
        let persons = await axios.get(this.api_url + this.api_key + this.page );
        
        this.setState({arrayPersonajes : [...this.state.arrayPersonajes,...persons.data.data.results]});
        this.page ++;
        console.log('2',this.page);

    }
    

    render(){
         
             
             return (
                <InfiniteScroll
                pageStart={0}
                loadMore={this.recuperarPersonajes}
                hasMore={true || false}
                loader={<div className="loader" key={this.page}>Loading ...</div>} 
                 >
                  
                 <div className="container"> 
             
                 {this.state.arrayPersonajes.map((a,index) =><Personaje key={index} {...a} ></Personaje> )}
                  
                 </div>   
              </InfiniteScroll>)
             
            
            
            
             
         
         
    }



}
export default Personajes;