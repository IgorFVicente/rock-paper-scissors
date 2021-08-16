const rockPaperScissor = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay() {
    const rockPaperScissor = ['ROCK', 'PAPER', 'SCISSORS'];
    const computerChoice = Math.floor(Math.random() * 3);
    const computerPlay = rockPaperScissor[computerChoice];

    return computerPlay
}

function playRound(playerSelection, computerSelection = computerPlay()) {
    playerSelection = playerSelection.toUpperCase()

    if (!rockPaperScissor.includes(playerSelection)) {
        return 'Invalid play!'
    }

    if (playerSelection == 'ROCK') {
        if (computerSelection == 'ROCK') {
            return 'it\'s a tie!'
        } else if (computerSelection == 'SCISSORS') {
            return 'You win! Rock beats Scissors!'
        } else {
            return 'You lose! Paper beats Rock!'
        }
    }

    if (playerSelection == 'PAPER') {
        if (computerSelection == 'PAPER') {
            return 'it\'s a tie!'
        } else if (computerSelection == 'ROCK') {
            return 'You win! Paper beats Rock!'
        } else {
            return 'You lose! Scissors beats Paper!'
        }
    }

    if (playerSelection == 'SCISSORS') {
        if (computerSelection == 'SCISSORS') {
            return 'it\'s a tie!'
        } else if (computerSelection == 'PAPER') {
            return 'You win! Scissors beats Paper!'
        } else {
            return 'You lose! Rock beats Scissors!'
        }
    }
}

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        do {
            const playerSelection = window.prompt('Pick a play: Rock, Paper or Scissors?');
            const computerSelection = computerPlay();

            result = playRound(playerSelection, computerSelection);
            console.log(result)
        } while (result == 'Invalid play!')

        if (result.substring(4, 7) == 'win') {
            playerScore += 1;
        }

        if (result.substring(4, 8) == 'lose') {
            computerScore += 1;
        }

    }

    if (playerScore == computerScore) {
        return `You scored ${playerScore} points, the computer scored ${computerScore} points. It's a tie!`
    } else if (playerScore > computerScore) {
        return `You scored ${playerScore} points, the computer scored ${computerScore} points. Congrats, you won!`
    } else {
        return `You scored ${playerScore} points, the computer scored ${computerScore} points. You lost! Better luck next time.`
    }
}