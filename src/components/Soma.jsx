import React from 'react'
import Cartao from './Card'

const Soma =  props =>  {
    
    return(
        
        <Cartao title="Soma dos Números" Green>
            <div>
                <span>Soma é: </span>
                <strong>10</strong>
            </div>
            
        </Cartao>
        
    )
}

export default Soma