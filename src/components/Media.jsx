import React from 'react'
import Cartao from './Card'
import {connect} from 'react-redux'

function Media(props){
    const min  = props.min;
    const max = props.max;

    
    
    return(
        
        <Cartao title="Média dos Números" Red>
            <div>
                <span>Média é: </span>
                <strong>{(min + max) / 2} </strong>
            </div>
            
        </Cartao>
        
    )

    
}

function mapStateToProps(state){

    return{
        min: state.numeros.min,
        max: state.numeros.max,
    }
};


export default connect(mapStateToProps)(Media);