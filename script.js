let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const div = document.querySelector("div");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(playerSelection, computerSelection) {
    const choices = ["rock", "paper", "scissors"]
    const p = choices.indexOf(playerSelection.toLowerCase());
    const c = choices.indexOf(computerSelection.toLowerCase());
    if (p === c) {
        div.textContent = `It's a draw! You both chose ${playerSelection}`;
    } else if ((p + 1) % 3 === c) {
        div.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    } else {
        div.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    }

    if (playerScore == 5) {
        div.textContent = `You win! Final score is ${playerScore}-${computerScore}`;
        disableButtons();
    } else if (computerScore == 5) {
        div.textContent = `You lose! Final score is ${playerScore}-${computerScore}`;
        disableButtons();
    }
}

function game() {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let computerSelection = getComputerChoice();
            playRound(button.value, computerSelection);
        });
    });   
}

function disableButtons() {
    buttons.forEach(button => button.disabled = true);
}

game();