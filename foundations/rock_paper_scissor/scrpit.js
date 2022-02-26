
function computerPlay()
{
    const number = Math.floor(Math.random()*3);
    let choice = '';
    switch (number)
    {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissor";
            break;
    }
    return choice ;

}

function playRound(player,computer)
{
    player = player.toLowerCase();
    let winner, loser;
    if ((player == "rock" && computer == "scissor") || (player == "paper" && computer == "rock") 
            || (player == "scissor" && computer == "paper") )
    {
        winner = "player";
        loser = "computer";
    }

    else if ((player == "rock" && computer == "rock") || (player == "paper" && computer == "paper") 
    || (player == "scissor" && computer == "scissor"))
    {
        winner = 'tie';
    }

    else
    {
        winner = "computer";
        loser = "player";
    }

    output = document.querySelector('#output');


    if (winner == 'player')
    {
        output.textContent = `You win! ${player} beats ${computer}.`;
        score_p++;
    }

    else if (winner == 'tie')
    {
        output.textContent = 'It\'s a draw!';
    }

    else
    {
        output.textContent = `You lose! ${computer} beats ${player}.` ;
        score_c++;
    }

    p_score.textContent = `Player Score: ${score_p}`;
    c_score.textContent = `Computer Score: ${score_c}`;

    if (score_p >= 5 || score_c >= 5 )
    {
        final();
    }

}
let score_p, score_c ;
score_p = score_c = 0;

b_r = document.querySelector('#rock');
b_p = document.querySelector('#paper');
b_s = document.querySelector('#scissor');

b_r.addEventListener('click', () => {playRound('rock',computerPlay())});
b_p.addEventListener('click',()=>{playRound('paper',computerPlay());});
b_s.addEventListener('click', ()=> {playRound('scissor',computerPlay());});


p_score = document.querySelector('#player-score')
c_score = document.querySelector('#computer-score')

function final()
{

    
    
    let message;
    if (score_p > score_c) 
    {
        message = "Congrats! You Won!!";
    }
    else if (score_p < score_c)
    {
        message = "The Machines Reign Supreme :( ";
    }
    else
    {
        message = "The game is a draw. Play another.";
    }

    
    output.textContent = message;

    b_r.disabled = true;
    b_p.disabled = true;
    b_s.disabled = true;

}
