function getComputerChoice() {
    const choice = Math.floor((Math.random()*3)+1);
    switch (choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "something wrong!";
    }
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    if (playerChoice === computerSelection) {
        return "It'a Draw!";
    } 
    if (playerChoice === "rock"){
        if (computerSelection === "scissors"){
            return "You Win! Rock beats Scissors";
        }
        if (computerSelection === "paper"){
            return "You Lose! Paper beats Rock";
        }
    }
    if (playerChoice === "paper"){
        if (computerSelection === "rock"){
            return "You Win! Paper beats Rock";
        }
        if (computerSelection === "scissors"){
            return "You Lose! Scissors beats Paper";
        }
    }
    if (playerChoice === "scissors"){
        if (computerSelection === "paper"){
            return "You Win! Scissors beats Paper";
        }
        if (computerSelection === "rock"){
            return "You Lose! Rock beats Scissors";
        }
    }
    return "something wrong!";
  }

const playerSelection = "paper";
const computerSelection = getComputerChoice();

console.log("Player: " + playerSelection)
console.log("Computer: " + computerSelection)
console.log(playRound(playerSelection, computerSelection));
