let round = 0;
let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.getElementById('playerScore');
const computerScoreSpan = document.getElementById('computerScore');
const roundNumberSpan = document.getElementById('roundNumber');
const resultMessage = document.getElementById('resultMessage');
const choiceButtons = document.querySelectorAll('.choice-button');

choiceButtons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.getAttribute('data-choice');
    playRound(playerChoice);
  });
});

function computerPlay() {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerChoice) {
  const computerChoice = computerPlay();
  let result = '';

  if (playerChoice === computerChoice) {
    result = "🤝 It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    result = "🎯 You win this round!";
  } else {
    computerScore++;
    result = "💻 Computer wins this round!";
  }

  round++;
  updateUI(result);

  if (playerScore === 5 || computerScore === 5) {
    setTimeout(() => {
      const gameResult = playerScore === 5 ? "🏆 You won the game!" : "😓 Computer won the game!";
      alert(gameResult);
      resetGame();
    }, 500);
  }
}

function updateUI(message) {
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
  roundNumberSpan.textContent = round;
  resultMessage.textContent = message;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  updateUI("👊 New game started! Choose your weapon!");
}