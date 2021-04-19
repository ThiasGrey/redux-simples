import React from 'react'
import './Intervalo.css'

import Cartao from './Card'
import {connect} from 'react-redux'

import {alteraNumeroMinimo, alteraNumeroMaximo} from '../store/actions/numeros'

const Intervalo =  props =>  {

    const {min, max} = props;
    
    return(
        
        <Cartao title="Intervalo de Números" Blue>
            <div className='inter-content'>
                <span>Minimo</span>
                <input type="number" value={min}  onChange={ e => props.alteraMin(+e.target.value)} />
            </div>
            <div className='inter-content'>
                <span>Maximo</span>
                <input type="number" value={max} onChange={ e => props.alteraMax(+e.target.value)} />
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


function mapDispatchToProps(dispatch){
    return{
        alteraMin(novoNumero){
            // action creator -> action
            const action = alteraNumeroMinimo(novoNumero);
            dispatch(action)
        },
        alteraMax(novoNumero){
            const action = alteraNumeroMaximo(novoNumero)
            dispatch(action)
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)