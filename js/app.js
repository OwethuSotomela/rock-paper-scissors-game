var rockPlayerBtn = document.querySelector(".playerRock");
var paperPlayerBtn = document.querySelector(".playerPaper");
var scissorPlayerBtn = document.querySelector(".playerScissor");

var rockComputerBtn = document.querySelector(".computerRock");
var paperComputerBtn = document.querySelector(".computerPaper");
var scissorComputerBtn = document.querySelector(".computerScissor");

var playerChoice;

let roundNumber = 0;
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

function outPut() {
    // document.querySelector(".updateComputer").innerHTML = computerPlay();
    document.querySelector(".round").innerHTML = roundNumber;
    document.querySelector(".playerScore").innerHTML = playerScore;
    document.querySelector(".computerScore").innerHTML = computerScore;
}

function rockPlayer() {
    playerChoice = document.querySelector(".playerRock").value;
    game()
    console.log(document.querySelector(".results").innerHTML)
    // document.querySelector(".updatePlayer").innerHTML = playerChoice;
    document.querySelector(".results").innerHTML = feedback;
    outPut();
}

function paperPlayer() {
    playerChoice = document.querySelector(".playerPaper").value;
    game()
    // document.querySelector(".updatePlayer").innerHTML = playerChoice;
    document.querySelector(".results").innerHTML = feedback;
    outPut();
}
function sciPlayer() {
    playerChoice = document.querySelector(".playerScissor").value;
    game()
    // document.querySelector(".updatePlayer").innerHTML = playerChoice;
    document.querySelector(".results").innerHTML = feedback;
    outPut();

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        feedback = "It's a tie"
        roundNumber++
    }
    if (

        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")

    ) {
        playerScore++;
        roundNumber++
        feedback = "Player Wins"

    } else
        if (
            (playerSelection == "rock" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "rock")
        ) {
            computerScore++
            roundNumber++
            feedback = "Computer Wins"
        }

    if (playerScore == 5) {
        feedback = "Yay, you beat the computer!!!";
        document.querySelector(".results").innerHTML = "Yay, you beat the computer!!!";
    } else {
        if (computerScore == 5) {
            feedback = "Ouch, you lost to the computer!"
            document.querySelector(".results").innerHTML = "Ouch, you lost to the computer!";
        }
    }
}

function game() {
    if (playerChoice != undefined) {
        playRound(playerChoice, computerPlay())
        console.log(roundNumber)
        console.log(playerScore)
        console.log(computerScore)
        console.log(feedback)
    }

}



