let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playGame(button.textContent);
    })
})

function getComputerChoice() {
    /*Compute a random number between 0-2 and assign it to a variable randomValue
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

function getHumanChoice(choice) {

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();

    playerWins = ( (humanChoice === "ROCK" && computerChoice === "SCISSORS") 
                  || (humanChoice === "SCISSORS" && computerChoice === "PAPER") 
                  || (humanChoice === "PAPER" && computerChoice === "ROCK")
                 );

    if(humanChoice === computerChoice) {
        console.log(`${humanChoice} ties with ${computerChoice}`);
    }
    else if(playerWins) {
        console.log(`${humanChoice} beats ${computerChoice}`);
        humanScore++;  
    }
    else {
        console.log(`${humanChoice} loses to ${computerChoice}`);
        computerScore++;
    }
    console.log(`User: ${humanScore}; Computer: ${computerScore}`);
}


function playGame(humanSelection) {
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
}

