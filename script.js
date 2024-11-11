let humanScore = 0;
let computerScore = 0;

let game = document.querySelector("#game");

game.addEventListener("click", (event) => {
  let target = event.target;

  switch(target.id) {
    case 'rock':
      (humanScore === 5 || computerScore === 5 ) ? whoWon(humanScore, computerScore) : playRound("rock", getComputerChoice());
      break;
    case 'paper':
      (humanScore === 5 || computerScore === 5 ) ? whoWon(humanScore, computerScore) : playRound("paper", getComputerChoice());
      break;
    case 'scissors':
      (humanScore === 5 || computerScore === 5 ) ? whoWon(humanScore, computerScore) : playRound("scissors", getComputerChoice());
      break;
  }
});

let result = document.querySelector("#results");
result.style.marginTop = "10px";

function playRound (humanChoice, computerChoice) {
  let playerMove = humanChoice.toUpperCase(); //makes the user's input case insensitive
  let computerMove = computerChoice.toUpperCase();

  if (playerMove === computerMove) {  //prompts the user to play the game then displays the result.
    result.innerText = `Tie!\nYou: ${humanScore}. Computer: ${computerScore}`;
  } else if (playerMove === "ROCK" && computerMove === "PAPER") {
    computerScore++;
    result.innerText = `You lose! Paper beats Rock\nYou: ${humanScore}. Computer: ${computerScore}`;
  } else if (playerMove === "ROCK" && computerMove === "SCISSORS") {
    humanScore++;
    result.innerText = `You win! Rock beats Scissors\nYou: ${humanScore}. Computer: ${computerScore}`;
  } else if (playerMove === "PAPER" && computerMove === "ROCK") {
    humanScore++;
    result.innerText = `You win! Paper beats Rock\nYou: ${humanScore}. Computer: ${computerScore}`;
  } else if (playerMove === "PAPER" && computerMove === "SCISSORS") {
    computerScore++;
    result.innerText = `You lose! Scissors beats Paper\nYou: ${humanScore}. Computer: ${computerScore}`;
  } else if (playerMove === "SCISSORS" && computerMove === "ROCK") {
    computerScore++;
    result.innerText = `You lose! Rock beats Scissors\nYou: ${humanScore}. Computer: ${computerScore}`;
  } else if (playerMove === "SCISSORS" && computerMove === "PAPER") {
    humanScore++;
    result.innerText = `You win! Scissors beats Paper\nYou: ${humanScore}. Computer: ${computerScore}`;
  }
}

function whoWon (human, computer) {
  if (human === 5 && computer < 5) {  //Compares final scores to declares the winner
    result.innerText = `Game Over. You are the Victor!\nYou: ${human}. Computer: ${computer}\nRefresh the page to play again.`;
  } else if (computer === 5 && human < 5) {
    result.innerText = `Game Over. You lose!\nYou: ${human}. Computer: ${computer}\nRefresh the page to play again.`;
  }
}

function getComputerChoice () {
  let computerChoice;

  let randomNum = Math.floor(Math.random() * 100) + 1; //Generates random number between 0 and 100;

  if (randomNum <= 33) {
    computerChoice = "Rock";
  } else if (randomNum >= 34 && randomNum <= 66) {
    computerChoice = "Paper";
  } else if (randomNum >= 67 && randomNum <= 100) {
    computerChoice = "Scissors"
  }; //Translates the random numbers generated into a computer move

  return computerChoice;
}