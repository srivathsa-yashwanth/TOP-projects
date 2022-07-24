import React , {useState, useEffect} from 'react'

const Score = (props) => {

    return (
        <div id='score'>
            <h2>Your Score: {props.score}</h2>
            <h2>High Score: {props.highScore}</h2>
        </div>
    )
}

export default Score