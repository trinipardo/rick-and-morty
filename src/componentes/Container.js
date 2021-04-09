import Tarjetas from './Tarjetas'
import arrayTarjetas from '../rickandmorty.json'
import React, {Component} from 'react';

class Container extends Component{
    
    

    entratTarjeta(event){
        console.log("El mouse entro a la Tarjeta")
        console.log(event)
    }
    
    salirTarjeta(){

    }
    
    render(){
    return (
        
        <div className="unaTarjeta-1" onClick={this.CambiarColor}
        onMouseEnter={this.entratTarjeta}
        onMouseLeave={this.salirTarjeta}>
            {
                arrayTarjetas.map(function(unaTarjeta,idx){
                    return(
                        <Tarjetas mostrarTarjeta={unaTarjeta} key={idx}/>

                    )
                })
            }
        </div>
    )};
}
export default Container;