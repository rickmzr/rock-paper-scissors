const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const results = document.querySelector("#results");
const score = document.querySelector("#score");
let playerWins = 0;
let computerWins = 0;

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
rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));

//compare selections and determine winner
function playRound(playerSelection, computerSelection) {
    //losing scenarios
    if (playerSelection === "rock" && computerSelection === "paper" || 
    playerSelection === "paper" && computerSelection === "scissors" || 
    playerSelection === "scissors" && computerSelection === "rock") {
        results.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    //winning scenarios
    } else if (playerSelection === "rock" && computerSelection === "scissors" || 
    playerSelection === "paper" && computerSelection === "rock" || 
    playerSelection === "scissors" && computerSelection === "paper") {
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        results.textContent = `Draw, ${playerSelection} and ${computerSelection} are equal`;
    }
    getScore();
}

function getScore() {
    //reset score after a winner is determined
    if (playerWins === 5 || computerWins === 5) {
        playerWins = 0;
        computerWins = 0;
    }
    if (results.textContent.includes("win")) {
        playerWins += 1;
    } else if (results.textContent.includes("lose")) {
        computerWins += 1;
    }
    score.textContent = `Player Score: ${playerWins}     Computer Score: ${computerWins}`;
    if (playerWins === 5) {
        score.innerHTML += "<br>You scored 5 points! Winner!";
    } else if (computerWins === 5) {
        score.innerHTML += "<br>Computer scored 5 points, you lose";
    }
};
