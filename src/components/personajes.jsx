import React from 'react';
import Personaje from '../components/personaje'
import axios from 'axios'

class Personajes extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            arrayPersonajes : []
        }
        this.api_key = '2416ff630c2380ca9a68e9d40a869c3f';
        this.api_url = 'https://gateway.marvel.com:443/v1/public/characters?apikey='
        this.recuperarPersonajes(); 
 
    }

    async recuperarPersonajes(){
        let persons = await axios.get(this.api_url + this.api_key);
        
        this.setState({arrayPersonajes : persons.data.data.results});
    }

    render(){
         
             
             return (
             <div >
                 {this.state.arrayPersonajes.map((a,index) =><Personaje key={index} {...a} ></Personaje> )}
             </div> )
             
            
            
            
             
         
         
    }



}
export default Personajes;