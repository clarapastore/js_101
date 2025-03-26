const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];

function prompt(message) {
  console.log(`=> ${message}`);
}

function chooseRandomIndex() {
  return Math.floor(Math.random() * VALID_CHOICES.length);
}

prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
let choice = readline.question();

while (!VALID_CHOICES.includes(choice)) {
  prompt("That's not a valid choice");
  choice = readline.question();
}

let computerChoice = VALID_CHOICES[chooseRandomIndex()];
prompt(`You chose ${choice}, computer chose ${computerChoice}`);

// deciding the winner based on the conditions
// Writing the conditional for the case the user wins:
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
