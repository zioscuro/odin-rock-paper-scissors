const displayResult = document.getElementById('results-display');
const displayPlayerChoice = document.getElementById('player-choice');
const displayPlayerCounter = document.getElementById('player-counter');
const displayComputerChoice = document.getElementById('computer-choice');
const displayComputerCounter = document.getElementById('computer-counter');
const displayWinner = document.getElementById('winner-display');

let playerCounter = 0;
let computerCounter = 0;

function getComputerChoice() {
    const choice = Math.floor((Math.random()*3)+1);
    switch (choice) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
        default:
            return 'something wrong!';
    }
}

function playRound(player, computer) {
            
    if (player === computer) {
        return 'It\'a Draw!';
    } 
    if (player === 'rock'){
        if (computer === 'scissors'){
            playerCounter++;                    
            return 'You Win! Rock beats Scissors';
        }
        if (computer === 'paper'){    
            computerCounter++;            
            return 'You Lose! Paper beats Rock';
        }
    }
    if (player === 'paper'){
        if (computer === 'rock'){
            playerCounter++;                          
            return 'You Win! Paper beats Rock';
        }
        if (computer === 'scissors'){
            computerCounter++;                      
            return 'You Lose! Scissors beats Paper';
        }
    }
    if (player === 'scissors'){
        if (computer === 'paper'){
            playerCounter++;                 
            return 'You Win! Scissors beats Paper';
        }
        if (computer === 'rock'){
            computerCounter++;                        
            return 'You Lose! Rock beats Scissors';
        }
    }
    return 'something wrong!';
  }

function resetGame() {
    displayWinner.textContent = '';
    playerCounter = 0;
    computerCounter = 0;
}

function displayRound(player) {    
    if (playerCounter === 5 || computerCounter === 5) {
        resetGame();
    }

    const playerChoice = player;
    const computerChoice = getComputerChoice();    
    const result = playRound(playerChoice, computerChoice);
    
    displayResult.textContent = result;
    displayPlayerChoice.textContent = playerChoice;
    displayComputerChoice.textContent = computerChoice;
    displayPlayerCounter.textContent = playerCounter;
    displayComputerCounter.textContent = computerCounter;

    if (playerCounter === 5) {
        displayWinner.textContent = 'CONGRATS, YOU WIN THE GAME!';        
    }

    if (computerCounter === 5) {
        displayWinner.textContent = 'COMPUTER WIN THE GAME!';   
    }
}

const rockBtn = document.getElementById('rock');
rockBtn.addEventListener('click', ()=>{
    displayRound('rock');
});
const paperBtn = document.getElementById('paper');
paperBtn.addEventListener('click', ()=>{
    displayRound('paper');
});
const scissorsBtn = document.getElementById("scissors")
scissorsBtn.addEventListener('click', ()=>{
    displayRound('scissors');
});