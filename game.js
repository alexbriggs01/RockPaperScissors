let humanScore = 0;
let computerScore = 0;
let won = false;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent);
    });
});

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

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    humanChoice = humanChoice.toUpperCase();

    const results = document.querySelector("#result");
    const score = document.querySelector("#score");
    const winner = document.querySelector("#winner");

    playerWins = ( (humanChoice === "ROCK" && computerChoice === "SCISSORS") 
                  || (humanChoice === "SCISSORS" && computerChoice === "PAPER") 
                  || (humanChoice === "PAPER" && computerChoice === "ROCK")
                 );

    if(humanChoice === computerChoice) {
        results.textContent = `${humanChoice} ties with ${computerChoice}`;
    }
    else if(playerWins) {
        results.textContent = `${humanChoice} beats ${computerChoice}`;
        humanScore++;  
    }
    else {
        results.textContent = `${humanChoice} loses to ${computerChoice}`;
        computerScore++;
    }


    score.textContent = `User: ${humanScore}; Computer: ${computerScore}`;

    if(humanScore === 5 && won === false){
        winner.textContent = "Congratulations! You win!";
        won = true;
    }
    else if(computerScore === 5 && won === false){
        winner.textContent = "Too bad. Reload and try again."
        won = true;
    }
}


