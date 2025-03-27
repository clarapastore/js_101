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
    (choice === "rock" &&
      (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (choice === "paper" &&
      (computerChoice === "rock" || computerChoice === "spock")) ||
    (choice === "scissors" &&
      (computerChoice === "paper" || computerChoice === "lizard")) ||
    (choice === "lizard" &&
      (computerChoice === "paper" || computerChoice === "spock")) ||
    (choice === "spock" &&
      (computerChoice === "rock" || computerChoice === "scissors"))
  ) {
    prompt("You win!");
  } else if (
    (choice === "rock" &&
      (computerChoice === "paper" || computerChoice === "spock")) ||
    (choice === "paper" &&
      (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (choice === "scissors" &&
      (computerChoice === "rock" || computerChoice === "spock")) ||
    (choice === "lizard" &&
      (computerChoice === "scissors" || computerChoice === "rock")) ||
    (choice === "spock" &&
      (computerChoice === "paper" || computerChoice === "lizard"))
  ) {
    prompt("Computer wins!");
  } else {
    prompt("It's a tie!");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();
  // make a function here that checks if the valid choice shortcut given is good
  // for example, a switch statement that goes through all the good shortcuts
  // and reassigns the choice variable if the shortcut matches
  // otherwise returns null, which is a falsy value

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
