import React from 'react'
import './Intervalo.css'

import Cartao from './Card'

const Intervalo =  props =>  {

    const {min, max} = props;
    const {setMinOnChange, setMaxOnChange} = props

    
    return(
        
        <Cartao title="Intervalo de Números" Blue>
            <div className='inter-content'>
                <span>Minimo</span>
                <input type="number" value={min} onChange={e => setMinOnChange(+e.target.value)} />
            </div>
            <div className='inter-content'>
                <span>Maximo</span>
                <input type="number" value={max} onChange={e => setMaxOnChange(+e.target.value)}/>
            </div>
        </Cartao>
        
    )
}

export default Intervalo