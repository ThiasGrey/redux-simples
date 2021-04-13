import React from 'react'
import Cartao from './Card'

const Sorteio =  props =>  {

    const {min, max} = props
    const aleatorio = parseInt(
        Math.random() * (max - min)
    ) + min

    return(
        
        <Cartao title="Sorteio dos Números" Purple>
            <div>
                <span>Sorteio é: </span>
                <strong>{aleatorio}</strong>
            </div>
            
        </Cartao>
        
    )
}

export default Sorteio