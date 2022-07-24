import React, {useState, useEffect} from 'react'


const Card = (props) => {

    return (
        <div className='card'>
            <img data-id={props.cardId} src={require('../images/amongus.png')} alt="card image" height='100px' width='100px'/>
            <p data-id={props.cardId}>{props.text}</p>
        </div>
    )
}

export default Card