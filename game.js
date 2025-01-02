let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    /*Compute a random number between 0-2 andassign it to a variable randomValue
      Check each case against the variable randomValue
      If 0, return rock
      If 1, return paper
      If 2, return scissors
    */

    let randomValue = Math.floor(Math.random() * 3);
    
    switch(randomValue) {
        case 0: 
            return "ROCK";
        case 1:
            return "PAPER";
        case 2: 
            return "SCISSORS";
    }
}

function getHumanChoice() {
    /*Prompt the user for a value "Rock", "Paper", "Scissors" and assign it to a variable
      Return the inputted vale
    */

    let humanChoice = prompt("Select Rock, Paper, or Scissors:");

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();

    if(humanChoice === computerChoice) {
        console.log(`${humanChoice} ties with ${computerChoice}`);
    }
    else if( (humanChoice === "ROCK" && computerChoice === "SCISSORS") 
            || (humanChoice === "SCISSORS" && computerChoice === "PAPER") 
            || (humanChoice === "PAPER" && computerChoice === "ROCK") 
        ) {
           console.log(`${humanChoice} beats ${computerChoice}`);
           humanScore++;  
    }
    else {
        console.log(`${humanChoice} loses to ${computerChoice}`);
        computerScore++;
    }
    console.log(`User: ${humanScore}; Computer: ${computerScore}`);
}


function playGame() {
    for(let round = 1; round <=5; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
}

playGame();
