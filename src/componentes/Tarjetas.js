import React from 'react';
import arrayTarjetas from '../rickandmorty.json'

function Tarjetas (props){
  console.log(props);
    return (
      <div className="tarjeta">
        <h2>{props.mostrarTarjeta.name}</h2>
        <img className= "imgTarjeta" src={props.mostrarTarjeta.image}/>
        <p>Estatus: {props.mostrarTarjeta.status}</p>
        <p>Especie: {props.mostrarTtarjeta.species}</p>
        <p>Origin: {props.mostrarTarjeta.origin.name}</p>
      </div>
    )

}

export default Tarjetas;
