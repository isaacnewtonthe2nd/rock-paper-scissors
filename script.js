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