import React from 'react';

import Header from './componentes/Header';

import Footer from './componentes/Footer';
import Container from './componentes/Container';


function App() {
  return (
    <React.Fragment className= "contenedorPadre">

    <Header/>

    <Container/>
 
      <Footer/>


    </React.Fragment>
  )
}

export default App;




