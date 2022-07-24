function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(playerSelection, computerSelection) {
    const choices = ["rock", "paper", "scissors"]
    const p = choices.indexOf(playerSelection.toLowerCase());
    const c = choices.indexOf(computerSelection.toLowerCase());
"djhd".tol
    if (p === c) return `It's a draw! You both chose ${playerSelection}`;

    if ((p + 1) % 3 === computerSelection) return `You lose! ${computerSelection} beats ${playerSelection}`
        else return `You win! ${playerSelection} beats ${computerSelection}`;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result;
    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt(`Round ${i+1}. Choose rock, paper or scissors.`);
        let computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log(`You win! Final score was ${playerScore}-${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lose! Final score was ${playerScore}-${computerScore}`);
    } else {
        console.log(`It's a draw! Final score was ${playerScore}-${computerScore}`);
    }
}

game();