var rockPlayerBtn = document.querySelector(".playerRock");
var paperPlayerBtn = document.querySelector(".playerPaper");
var scissorPlayerBtn = document.querySelector(".playerScissor");

var rockComputerBtn = document.querySelector(".computerRock");
var paperComputerBtn = document.querySelector(".computerPaper");
var scissorComputerBtn = document.querySelector(".computerScissor");

var playerChoice;

let roundNumber = 1;
let playerScore = 0;
let computerScore = 0;
let feedback = '';

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
    playerChoice = document.querySelector(".playerRock").value;
    // console.log(rockPlayerBtn)
    // playRound(rockPlayerBtn)
    game()
    document.querySelector(".update").innerHTML = "You Clicked Me";
}

function paperPlayer() {
    playerChoice = document.querySelector(".playerPaper").value;
    // console.log(paperPlayerBtn);
    game()
    document.querySelector(".update").innerHTML = "Same, You Clicked Me";
}
function sciPlayer() {
    playerChoice = document.querySelector(".playerScissor").value;
    // console.log(scissorPlayerBtn)
    game()
    document.querySelector(".update").innerHTML = "You Clicked Me too";
}

function playRound(playerSelection, computerSelection) {
    // playerSelection = playerSelection;
    // computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        feedback = "It's a tie"
    }
    if (

        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")

    ) {
        playerScore++;
        roundNumber++
        feedback = "Player"

    } else
        if (
            (playerSelection == "rock" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "rock")
        ) {
            computerScore++
            roundNumber++
            feedback = "Comp"
        }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game() {
    if (playerChoice != undefined) {
        playRound(playerChoice, computerPlay())
        console.log(playerScore)
        console.log(computerScore)
        console.log(roundNumber)
        console.log(feedback)
    }

}



