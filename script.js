let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice () {
  let humanChoice = prompt("Rock, Paper, or Scissors. Type your move it below: ");
  return humanChoice;
}

function playRound (humanChoice, computerChoice) {
  let playerMove = humanChoice.toUpperCase();
  let computerMove = computerChoice.toUpperCase();

  if (playerMove === "ROCK" && computerMove === "ROCK") {
    console.log("Tie!");
  } else if (playerMove === "ROCK" && computerMove === "PAPER") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (playerMove === "ROCK" && computerMove === "SCISSORS") {
    console.log("You win! Rock beats Scissors");
    humanScore++;
  } else if (playerMove === "PAPER" && computerMove === "ROCK") {
    console.log("You win! Paper beats Rock");
    humanScore++;
  } else if (playerMove === "PAPER" && computerMove === "PAPER") {
    console.log("Tie!");
  } else if (playerMove === "PAPER" && computerMove === "SCISSORS") {
    console.log("You lose! Scissors beats Paper");
    computerScore++;
  } else if (playerMove === "SCISSORS" && computerMove === "ROCK") {
    console.log("You lose! Rock beats Scissors");
    computerScore++;
  } else if (playerMove === "SCISSORS" && computerMove === "PAPER") {
    console.log("You win! Scissors beats Paper");
    humanScore++;
  } else if (playerMove === "SCISSORS" && computerMove === "SCISSORS") {
    console.log("Tie!");
  }
}