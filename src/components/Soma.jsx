import React from 'react'
import Cartao from './Card'
import {connect} from 'react-redux'

const Soma =  props =>  {

    const {min, max} = props

    return(
        
        <Cartao title="Soma dos Números" Green>
            <div>
                <span>Soma é: </span>
                <strong>{min + max}</strong>
            </div>
            
        </Cartao>
        
    )
}

    function mapStateToProps(state){
        return {
            min: state.numeros.min,
            max: state.numeros.max
        }
    }

export default connect(mapStateToProps)(Soma)