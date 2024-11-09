function playGame () {
  let humanScore = 0;
  let computerScore = 0;
  let roundCount = 0;

  function playRound (humanChoice, computerChoice) {
    let playerMove = humanChoice.toUpperCase(); //makes the user's input case insensitive
    let computerMove = computerChoice.toUpperCase();
  
    if (playerMove === computerMove) {  //prompts the user to play the game then displays the result.
      alert(`Tie!\nYou: ${humanScore}. Computer: ${computerScore}`);
    } else if (playerMove === "ROCK" && computerMove === "PAPER") {
      computerScore++;
      alert(`You lose! Paper beats Rock\nYou: ${humanScore}. Computer: ${computerScore}`);
    } else if (playerMove === "ROCK" && computerMove === "SCISSORS") {
      humanScore++;
      alert(`You win! Rock beats Scissors\nYou: ${humanScore}. Computer: ${computerScore}`);
    } else if (playerMove === "PAPER" && computerMove === "ROCK") {
      humanScore++;
      alert(`You win! Paper beats Rock\nYou: ${humanScore}. Computer: ${computerScore}`);
    } else if (playerMove === "PAPER" && computerMove === "SCISSORS") {
      computerScore++;
      alert(`You lose! Scissors beats Paper\nYou: ${humanScore}. Computer: ${computerScore}`);
    } else if (playerMove === "SCISSORS" && computerMove === "ROCK") {
      computerScore++;
      alert(`You lose! Rock beats Scissors\nYou: ${humanScore}. Computer: ${computerScore}`);
    } else if (playerMove === "SCISSORS" && computerMove === "PAPER") {
      humanScore++;
      alert(`You win! Scissors beats Paper\nYou: ${humanScore}. Computer: ${computerScore}`);
    }
  }

  for (let i = 0; i < 5; i++) {  //loops the game to play 5 times
    playRound(getHumanChoice(), getComputerChoice());
    roundCount++;
  }

  if (roundCount === 5 && humanScore > computerScore) {  //Compares final scores to declares the winner
    alert(`Game Over. You are the Victor!\nYou: ${humanScore}. Computer: ${computerScore}\nRefresh the page to play again.`);
  } else if (roundCount === 5 && computerScore > humanScore) {
    alert(`Game Over. You lose!\nYou: ${humanScore}. Computer: ${computerScore}\nRefresh the page to play again.`)
  } else {
    alert(`Game Over. Its a Tie!\nYou: ${humanScore}. Computer: ${computerScore}\nRefresh the page to play again.`)
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

function getHumanChoice () { //prompts the user to input their move
  let humanChoice = prompt("Rock, Paper, or Scissors. Type your move below: ");
  return humanChoice;
}

playGame();