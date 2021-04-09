import React, { Component } from 'react';
// import arrayTarjetas from '../rickandmorty.json'

function Tarjetas(props) {
  console.log(props);
    return (
      <div className="tarjeta">
        <h2>{props.mostrarTarjeta.name}</h2>
        <img src={props.mostrarTarjeta.image} alt=""/>
        <p>Estatus: {props.mostrarTarjeta.status}</p>
        <p>Especies: {props.mostrarTarjeta.species}</p>
        <p>Origin: {props.mostrarTarjeta.origin.name}</p>
      </div>
    )}


export default Tarjetas;
