import React from 'react'
import Cartao from './Card'

const Media =  props =>  {

    const {min, max} = props;
    
    return(
        
        <Cartao title="Média dos Números" Red>
            <div>
                <span>Média é: </span>
                <strong>{(min + max) / 2}</strong>
            </div>
            
        </Cartao>
        
    )
}

export default Media