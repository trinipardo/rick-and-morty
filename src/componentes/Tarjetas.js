import { render } from '@testing-library/react';
import React, { Component } from 'react';
 import arrayTarjetas from '../rickandmorty.json'

 class Tarjetas extends Component {

  constructor(props){
    super(props);
    this.state= {
      color: this.props.color,
      colorOriginal: this.props.color
    }
  }
 }

 CambiarColor= (nuevoColor)=>{
   if (this.state.color == this.setState.colorOriginal)
   this.setState({color: nuevoColor});

}

render() {
  const { image, name, origin, status,  species } = this.props;

  return (
          <div className="tarjeta" style={{backgroundColor:  this.state.color}}>
          <h2>{name}</h2>
          <img src={image} alt=""/>
          <p>Estatus: {status}</p>
           <p>Especies: {species}</p>
            <p>Origin: {origin}</p>
          </div>
       )
        }


 // function Tarjetas(props) {
//   console.log(props);
//     return (
//       <div className="tarjeta">
//         <h2>{props.mostrarTarjeta.name}</h2>
//         <img src={props.mostrarTarjeta.image} alt=""/>
//         <p>Estatus: {props.mostrarTarjeta.status}</p>
//         <p>Especies: {props.mostrarTarjeta.species}</p>
//         <p>Origin: {props.mostrarTarjeta.origin.name}</p>
//       </div>
//    )} 


export default Tarjetas;
