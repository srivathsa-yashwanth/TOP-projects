let tileElement = document.querySelector('#tiles')

const gameBoard = (()=>{
    
    let gameArray = [0,0,0,0,0,0,0,0,0];
    let turnCounter = 0;

    let drawTiles = ()=>{
        for(let i=1; i<=9;i++)
        {
            let newEle = document.createElement('div');
            newEle.classList.add('tile');
            newEle.setAttribute('data-id',i);
            newEle.textContent = '';
            newEle.addEventListener('click', takeInput)
            tileElement.appendChild(newEle)
        }
    }

    let takeInput = (event)=>{
        let element = event.target;
        let index = element.getAttribute('data-id') - 1;
        let current = gameArray[index];

        if (current == 0 && turnCounter%2 == 0){
            element.textContent = 'X';
            gameArray[index] = 'X'
            turnCounter++;
        }
        else if (current == 0 && turnCounter%2 ==1 ){
            element.textContent = 'O';
            gameArray[index] = 'O'
            turnCounter++;
        }
        checkStatus();

    }

    let checkStatus = () => {
        let winCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,5], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
        console.log(gameArray)

        if (turnCounter == 9)
        {
            declareWinner('draw');
            return;
        }

        for (let [a,b,c] of winCombos)
        {
            
            if ((gameArray[a] == gameArray[b]) && (gameArray[b] == gameArray[c]) && (gameArray[c] == 'X'))
            {
                declareWinner('X');
                return;
            }
            else if ((gameArray[a] == gameArray[b]) && (gameArray[b] == gameArray[c]) && (gameArray[c] == 'O'))
            {
                declareWinner('O');
                return;
            }
        }
    }

    let declareWinner = (winner) => {

        let winnerWindow = document.querySelector('#winner-window');
        winnerWindow.style.display = "flex";

        let nameElement = document.querySelector('#winner-name');
        let textElement = document.querySelector('#winner-text>span');

        if (winner == 'draw')
        {
            nameElement.textContent = 'It\'s a draw!';
        }
        else {
        nameElement.textContent = winner;
        textElement.textContent = "has won!" }

        let replayButton = document.querySelector('#replay-button');
        replayButton.onclick = reset;

    }

    let reset = () => {
        let winnerWindow = document.querySelector('#winner-window');
        winnerWindow.style.display = "none";

        gameArray = [0,0,0,0,0,0,0,0,0];
        tileElement.innerHTML = '';
        drawTiles();
        turnCounter = 0;


    }

    return {drawTiles};
    
})();

/*  
012 345 678 035 147 258 048 246 
*/

let Player = (playerName, playerId) => {

    let name = playerName;
    let id = playerId;
    let getName = ()=>{ return name;}
    return {getName}
}

player1 = Player('yash')
player2 = Player('sakhi')

gameBoard.drawTiles();
