//this will play a 5 round game of rock paper scissors against a computer opponent
//determine number of rounds
//get computers selection
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    switch (x) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    };
}
//get users selection
function getPlayerChoice() {
    let selection = prompt("Enter rock, paper, or scissors");
    return selection.toLowerCase();
}
//compare selections and determine winner
function playRound(playerSelection, computerSelection) {
    //losing scenarios
    if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    //winning scenarios
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        return `Draw, ${playerSelection} and ${computerSelection} are equal`;
    }
}

function game() {
    let computerWins = 0;
    let playerWins = 0;
    //restart game until 5 rounds have been played
    for (let numberOfGames = 5; numberOfGames > 0; numberOfGames--) {
        let result = playRound(getPlayerChoice(), getComputerChoice());
        // track wins for best of 5 winner
        if (result.includes("lose")) {
            computerWins += 1;
        } else if (result.includes("win")) {
            playerWins += 1;
        }
        //display indivdual game result
        console.log(result);
    }
    //determine best of 5 winner
    if (computerWins > playerWins) {
        console.log("You lost the best of 5 rounds");
    } else if (playerWins > computerWins) {
        console.log("You won the best of 5 rounds!");
    } else console.log("Best of 5 was a draw");
}
game();

