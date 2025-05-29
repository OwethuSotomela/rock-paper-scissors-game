let round = 0;
let playerScore = 0;
let computerScore = 0;
let gameLog = [];

const playerScoreSpan = document.getElementById('playerScore');
const computerScoreSpan = document.getElementById('computerScore');
const roundNumberSpan = document.getElementById('roundNumber');
const resultMessage = document.getElementById('resultMessage');
const choiceButtons = document.querySelectorAll('.choice-button');
const logContainer = document.getElementById('log');

choiceButtons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.getAttribute('data-choice');
    resultMessage.textContent = "⏳ Waiting...";
    setTimeout(() => playRound(playerChoice), 1000);
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
    result = "🎉 You win this round!";
  } else {
    computerScore++;
    result = "😔 Computer wins this round!";
  }

  round++;
  updateUI(result, playerChoice, computerChoice);

  if (playerScore === 5 || computerScore === 5) {
    setTimeout(() => {
      const finalResult = playerScore === 5 ? "🏆 You won the game!" : "💀 Computer won the game!";
      alert(finalResult);
      resetGame();
    }, 500);
  }
}

function updateUI(message, player, computer) {
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
  roundNumberSpan.textContent = round;
  resultMessage.textContent = message;

  const logEntry = `Round ${round}: You chose ${player}, Computer chose ${computer} – ${message}`;
  gameLog.unshift(logEntry);
  if (gameLog.length > 5) gameLog.pop();

  logContainer.innerHTML = gameLog.map(item => `<p>${item}</p>`).join('');
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  gameLog = [];
  updateUI("New game started! Choose your weapon!", "-", "-");
}

function toggleTheme() {
  document.body.classList.toggle("bg-gray-900");
  document.body.classList.toggle("bg-white");
  document.body.classList.toggle("text-white");
  document.body.classList.toggle("text-black");
}