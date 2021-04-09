import Tarjetas from './Tarjetas'
import arrayTarjetas from '../rickandmorty.json'
import React, {Component} from 'react';

class Container extends Component{
    constructor(props){
        super(props);
        this.state= {
          data: arrayTarjetas
        }
      }

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
        this.state.data.map((unaTarjeta) => 
                    (
                        <Tarjetas mostrarTarjeta = {unaTarjeta} />

                    )
                )
            }
        </div>
    )};
}
export default Container;