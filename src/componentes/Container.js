import Tarjetas from './Tarjetas'
import arrayTarjetas from '../rickandmorty.json'
import React, {Component} from 'react'
class Container extends Component{
    render(){
    return (
        
        <div className="unaTarjeta-1">
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