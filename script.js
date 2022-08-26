// declare constants for dispaly elements in DOM
const displayPlayerChoice = document.getElementById('player-choice');
const displayPlayerCounter = document.getElementById('player-counter');
const displayComputerChoice = document.getElementById('computer-choice');
const displayComputerCounter = document.getElementById('computer-counter');
const displayRound = document.getElementById('round-display');
const displayWinner = document.getElementById('winner-display');

// declare variables for player and computer score counters
let playerCounter = 0;
let computerCounter = 0;

// declare constants for rock paper scissiors UI buttons
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById("scissors")

// attach event listeners on each button that call the game function with player choice
rockBtn.addEventListener('click', ()=>{
    game('rock');
});
paperBtn.addEventListener('click', ()=>{
    game('paper');
});
scissorsBtn.addEventListener('click', ()=>{
    game('scissors');
});

// FUNCTIONS
// get a random computer choice in each round
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

// play a round between player and computer, declare the winner and update his counter
function playRound(player, computer) {            
    if (player === computer) {
        return 'It\'s a Draw!';
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

// reset display and counter when a new game begin
function resetGame() {
    displayWinner.textContent = '';
    playerCounter = 0;
    computerCounter = 0;
}

// play the game and update score in each round
function game(player) {  
    // when a winner is declared on the next round call resetGame function and a new game begin  
    if (playerCounter === 5 || computerCounter === 5) {
        resetGame();
    }

    // declare constants for player and computer choice
    const playerChoice = player;
    const computerChoice = getComputerChoice();
    // play a round and save the round winner in a constant
    const round = playRound(playerChoice, computerChoice);

    // update the display with player and computer choice, their score counter and round winner
    displayPlayerChoice.textContent = playerChoice;
    displayComputerChoice.textContent = computerChoice;
    displayPlayerCounter.textContent = playerCounter;
    displayComputerCounter.textContent = computerCounter;
    displayRound.textContent = round;

    // when player or computer reach 5 points display the winner
    if (playerCounter === 5) {
        displayWinner.textContent = 'CONGRATS, YOU WIN THE GAME!';        
    }
    if (computerCounter === 5) {
        displayWinner.textContent = 'COMPUTER WIN THE GAME!';   
    }
}

