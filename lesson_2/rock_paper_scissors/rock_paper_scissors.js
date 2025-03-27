const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];

function prompt(message) {
  console.log(`=> ${message}`);
}

function chooseRandomIndex() {
  return Math.floor(Math.random() * VALID_CHOICES.length);
}

function displayWinner(choice, computerChoice) {
  if (
    (choice === "rock" && computerChoice === "scissors") ||
    (choice === "paper" && computerChoice === "rock") ||
    (choice === "scissors" && computerChoice === "paper")
  ) {
    prompt("You win!");
  } else if (
    (choice === "rock" && computerChoice === "paper") ||
    (choice === "paper" && computerChoice === "scissors") ||
    (choice === "scissors" && computerChoice === "rock")
  ) {
    prompt("Computer wins!");
  } else {
    prompt("It's a tie!");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let computerChoice = VALID_CHOICES[chooseRandomIndex()];
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  displayWinner(choice, computerChoice);

  prompt("Do you want to play another game? (y/n)");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "y" && answer[0] !== "n") {
    prompt("This is not a valid answer. Please enter y or n.");
    answer = readline.question().toLowerCase();
  }
  if (answer[0] !== "y") {
    break;
  }
}
