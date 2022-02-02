
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

    if (winner == 'player')
    {
        return [`You win! ${player} beats ${computer}.`,winner];
    }

    else if (winner == 'tie')
    {
        return ['It\'s a draw!',winner];
    }

    else
    {
        return [`You lose! ${computer} beats ${player}.`, winner];
    }

}

function getPlayer()
{
    let choice = prompt("Enter your choice (r/p/s): ");
    let out;
    switch (choice)
    {
        case "r":
            out = 'rock';
            break;
        case "p":
            out = 'paper';
            break;
        case "s":
            out = 'scissor';
            break;
        default:
            console.log("invalid input. try again.");
            out = getPlayer();
    }

    return out;

}

function game(count)
{
    let i = 0;
    let score_p, score_c ;
    score_p = score_c = 0;
    let session, winner;
    for (i;i<count;i++)
    {
        player = getPlayer();
        [session, winner] = playRound(player,computerPlay());
        console.log(session);
        switch (winner)
        {
            case "player":
                score_p++;
                break;
            case "computer":
                score_c++;
                break;
        }

    }

    console.log(`Final Scores: Player - ${score_p}  and Computer - ${score_c}`);
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

    console.log(message);
}

let count = 5;
game(count);