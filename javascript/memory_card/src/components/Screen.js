import React, {useState, useEffect} from 'react' 
import ReactDOM from 'react-dom'

import Card from './Card'
import GameOver from './GameOver';
import Score from './Score'

const Screen = () => {

    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [selections, setSelections] = useState([]);
    const [order, setOrder] = useState([1,2,3,4,5,6,7,8,9,10]);

    const shuffleArray = (array) => {
        for (let i = array.length -1; i > 0; i--)
        {
            let j = Math.floor(Math.random()*(i+1));

            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

    const select = (event) => {
        let selectedCard = event.target.getAttribute('data-id')
        if (selections.includes(selectedCard))
        {
            console.log('gameover')
            const gameover = document.getElementById('gameover');
            gameover.style.display = 'flex';
        }
        else{
            setSelections(selections.concat([selectedCard]));
            setOrder(shuffleArray(order));
            setScore(score+1);
            if (score >= highScore)
            {
                setHighScore(score)
            };
        }
        
        console.log(selectedCard)
        console.log(selections)
    }

    useEffect(
        () => {
            const cards = document.querySelectorAll('.card')
            cards.forEach((card) => {card.addEventListener('click',select)})

            return () => {
                cards.forEach((card) => {card.removeEventListener('click', select)})
            }
        }
        ,[select])
 

    return (
        <div id='screen'>
            <Score score={score} highScore={highScore} />
            <GameOver score={score} highScore={highScore} />
]            <div id="cards">
                <Card cardId={order[0]} text={`Amogus${order[0]}`} />
                <Card cardId={order[1]} text={`Amogus${order[1]}`} />
                <Card cardId={order[2]} text={`Amogus${order[2]}`} />
                <Card cardId={order[3]} text={`Amogus${order[3]}`} />
                <Card cardId={order[4]} text={`Amogus${order[4]}`} />
                <Card cardId={order[5]} text={`Amogus${order[5]}`} />
                <Card cardId={order[6]} text={`Amogus${order[6]}`} />
                <Card cardId={order[7]} text={`Amogus${order[7]}`} />
                <Card cardId={order[8]} text={`Amogus${order[8]}`} />
                <Card cardId={order[9]} text={`Amogus${order[9]}`} />
            </div>
        </div>
    )
}

export default Screen