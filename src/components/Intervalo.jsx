import React from 'react'
import './Intervalo.css'

import Cartao from './Card'
import {connect} from 'react-redux'

const Intervalo =  props =>  {

    const {min, max} = props;
    
    return(
        
        <Cartao title="Intervalo de Números" Blue>
            <div className='inter-content'>
                <span>Minimo</span>
                <input type="number" value={min} readOnly />
            </div>
            <div className='inter-content'>
                <span>Maximo</span>
                <input type="number" value={max} readOnly />
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

export default connect(mapStateToProps)(Intervalo)