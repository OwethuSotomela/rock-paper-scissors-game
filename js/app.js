var rockPlayerBtn = document.querySelector(".playerRock");
var paperPlayerBtn = document.querySelector(".playerPaper");
var scissorPlayerBtn = document.querySelector(".playerScissor");

var rockComputerBtn = document.querySelector(".computerRock");
var paperComputerBtn = document.querySelector(".computerPaper");
var scissorComputerBtn = document.querySelector(".computerScissor");

// const roundNumber = 1;
// const playerScore = 0;
// const computerScore = 0;
// const feedback = '';

function computerPlay() {
    const number = Math.floor(Math.random() * 1000);
    if (number % 3 === 0) {
        return 'rock';
    }
    if (number % 3 === 1) {
        return 'paper';
    }
    return 'scissors';
}

console.log(computerPlay())

function rockPlayer() {
    var rockPlayerBtn = document.querySelector(".playerRock").value;
    console.log(rockPlayerBtn)
    // playRound(rockPlayerBtn)
    document.querySelector(".update").innerHTML = "You Clicked Me";
}

function paperPlayer() {
    var paperPlayerBtn = document.querySelector(".playerPaper").value;
    console.log(paperPlayerBtn);
    document.querySelector(".update").innerHTML = "Same, You Clicked Me";
}
function sciPlayer() {
    var scissorPlayerBtn = document.querySelector(".playerScissor").value;
    console.log(scissorPlayerBtn)
    document.querySelector(".update").innerHTML = "You Clicked Me too";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection;
    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        feedback = "It's a tie"
    }
    if (

        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")

    ) {
        // playerScore++;
        // roundNumber++

    } else
        if (
            (playerSelection == "rock" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "rock")
        ) {
            // computerScore++
            // roundNumber++
        }
    return "You Lose! Paper beats Rock";
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game() {
}

console.log(game());


