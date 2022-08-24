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
    
    if (player.choice === computer.choice) {
        return 'It\'a Draw!';
    } 
    if (player.choice === 'rock'){
        if (computer.choice === 'scissors'){
            player.counter += 1;
            return 'You Win! Rock beats Scissors';
        }
        if (computer.choice === 'paper'){
            computer.counter += 1;
            return 'You Lose! Paper beats Rock';
        }
    }
    if (player.choice === 'paper'){
        if (computer.choice === 'rock'){
            player.counter += 1;
            return 'You Win! Paper beats Rock';
        }
        if (computer.choice === 'scissors'){
            computer.counter += 1;
            return 'You Lose! Scissors beats Paper';
        }
    }
    if (player.choice === 'scissors'){
        if (computer.choice === 'paper'){
            player.counter += 1;
            return 'You Win! Scissors beats Paper';
        }
        if (computer.choice === 'rock'){
            computer.counter += 1;
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

