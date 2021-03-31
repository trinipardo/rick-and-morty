import Tarjetas from './Tarjetas'
import arrayTarjetas from '../rickandmorty.json'

function Container(){
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
       
    )
}


export default Container;