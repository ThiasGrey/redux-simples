import React from 'react'
import Cartao from './Card'

const Soma =  props =>  {
    
    const min = props.min;
    const max = props.max;

    return(
        
        <Cartao title="Soma dos Números" Green>
            <div>
                <span>Soma é: </span>
                <strong>{min + max}</strong>
            </div>
            
        </Cartao>
        
    )
}

export default Soma