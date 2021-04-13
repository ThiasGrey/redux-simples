import './Card.css'
import React from 'react'
import {Card} from 'antd'


function getHeaderStyle(props){

    function headerConfig(color, backgroundColor){
        const valores = {
            color: color,
            backgroundColor: backgroundColor,
            fontWeight: 700,
            minWidth:350
        }
        return valores
    }
    
    if(props.Red) return headerConfig('#fff', '#cf1322' )
    if(props.Green) return headerConfig('#fff', '#52c41a' )
    if(props.Blue) return headerConfig('#fff', '#1890ff' )
    if(props.Purple) return headerConfig('#fff', '#722ed1' )
       
}

function getBodyStyle(props){

    function bodyConfig(color, backgroundColor){
        const valores = {
            color: color,
            backgroundColor: backgroundColor
        }
        return valores
    }
    
    if(props.Red) return bodyConfig('#434343', '#fff1f0' )
    if(props.Green) return bodyConfig('#434343', '#f6ffed' )
    if(props.Blue) return bodyConfig('#434343', '#e6f7ff' )
    if(props.Purple) return bodyConfig('#434343', '#f9f0ff' )
       
}



const Cartao =  props => {
    

    return( 
        <div className="Card"> 
            <Card title={props.title}   headStyle={getHeaderStyle(props)} bodyStyle={getBodyStyle(props)}>
                <p >{props.children}</p>
            </Card >
        </div>       
    )
}

export default Cartao