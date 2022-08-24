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
            return 'You Win! Rock beats Scissors';
        }
        if (computer === 'paper'){            
            return 'You Lose! Paper beats Rock';
        }
    }
    if (player === 'paper'){
        if (computer === 'rock'){            
            return 'You Win! Paper beats Rock';
        }
        if (computer === 'scissors'){            
            return 'You Lose! Scissors beats Paper';
        }
    }
    if (player === 'scissors'){
        if (computer === 'paper'){            
            return 'You Win! Scissors beats Paper';
        }
        if (computer === 'rock'){            
            return 'You Lose! Rock beats Scissors';
        }
    }
    return 'something wrong!';
  }

/* 
function game() {

    const player = {
        choice: null,
        counter: 0
    }

    const computer = {
        choice: null,
        counter: 0
    }

    for (let i = 0; i < 5; i++) {        
        
        player.choice = prompt("Rock, Paper or Scissors?").toLowerCase();
        while (player.choice !== "rock" && player.choice !== "paper" && player.choice !== "scissors") {
            player.choice = prompt("Select Again").toLowerCase();
        }
        computer.choice = getComputerChoice();
        
        console.log("PlayerChoice: " +  player.choice + " PlayerCounter: " + player.counter);
        console.log("ComputerChoice: " + computer.choice + " ComputerCounter: " + computer.counter);
        console.log(playRound(player, computer));
     }

    if (player.counter > computer.counter) {
        alert("You: " + player.counter + " Computer: " + computer.counter + "....You Win!");
    } else if (player.counter < computer.counter) {
        alert("You: " + player.counter + " Computer: " + computer.counter + "....Computer Wins!");
    } else {
        alert("You: " + player.counter + " Computer: " + computer.counter + "....It's a Draw!");
    }
}

game();
*/

const rockBtn = document.getElementById('rock');
rockBtn.addEventListener('click', ()=>{
    const computerChoice = getComputerChoice();
    console.log(playRound('rock', computerChoice));
});
const paperBtn = document.getElementById('paper');
paperBtn.addEventListener('click', ()=>{
    const computerChoice = getComputerChoice();
    console.log(playRound('paper', computerChoice));
});
const scissorsBtn = document.getElementById("scissors")
scissorsBtn.addEventListener('click', ()=>{
    const computerChoice = getComputerChoice();
    console.log(playRound('rock', computerChoice));
});