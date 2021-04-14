import React from 'react'
import Cartao from './Card'
import {connect} from 'react-redux'

const Sorteio =  props =>  {

    const min  = props.min;
    const max = props.max;

    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    //const {min, max} = props
    /*const aleatorio = parseInt(
        Math.random() * (max - min)
    ) + min */

    return(
        
        <Cartao title="Sorteio dos Números" Purple>
            <div>
                <span>Sorteio é: </span>
                <strong>{aleatorio}</strong>
            </div>
            
        </Cartao>
        
    )
}

function mapStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Sorteio)