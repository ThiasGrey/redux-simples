import React from 'react'
import './Intervalo.css'

import Cartao from './Card'

const Intervalo =  props =>  {

    
    return(
        
        <Cartao title="Intervalo de Números" Blue>
            <div className='inter-content'>
                <span>Minimo</span>
                <input type="number" value={0} readOnly />
            </div>
            <div className='inter-content'>
                <span>Maximo</span>
                <input type="number" value={10} readOnly />
            </div>
        </Cartao>
        
    )
}

export default Intervalo