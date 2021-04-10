import './Card.css'
import React from 'react'

export default props => {
    return(
        <div className='Card'>
            <div className="headr">
                 <span className="Title">
                    {props.title}     
                </span>   
            </div> 
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}