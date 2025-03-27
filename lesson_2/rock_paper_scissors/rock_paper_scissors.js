// TODO: best of five
// TODO: Make it clear in the prompt that shortcuts are also possible
// (r, p, sc, l, sp)
const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const VALID_SHORTCUTS = ["r", "p", "sc", "l", "sp"];
const MAX_LENGTH_SHORTCUT = 2;

function prompt(message) {
  console.log(`=> ${message}`);
}

function isChoiceShortcut(choice) {
  return choice.length <= MAX_LENGTH_SHORTCUT;
}

function getFullChoice(shortcut) {
  return VALID_CHOICES[VALID_SHORTCUTS.indexOf(shortcut)];
}

function chooseRandomIndex() {
  return Math.floor(Math.random() * VALID_CHOICES.length);
}

function playerWins(playerChoice, computerChoice) {
  return (
    (playerChoice === "rock" &&
      (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (playerChoice === "paper" &&
      (computerChoice === "rock" || computerChoice === "spock")) ||
    (playerChoice === "scissors" &&
      (computerChoice === "paper" || computerChoice === "lizard")) ||
    (playerChoice === "lizard" &&
      (computerChoice === "paper" || computerChoice === "spock")) ||
    (playerChoice === "spock" &&
      (computerChoice === "rock" || computerChoice === "scissors"))
  );
}

function computerWins(playerChoice, computerChoice) {
  return (
    (playerChoice === "rock" &&
      (computerChoice === "paper" || computerChoice === "spock")) ||
    (playerChoice === "paper" &&
      (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (playerChoice === "scissors" &&
      (computerChoice === "rock" || computerChoice === "spock")) ||
    (playerChoice === "lizard" &&
      (computerChoice === "scissors" || computerChoice === "rock")) ||
    (playerChoice === "spock" &&
      (computerChoice === "paper" || computerChoice === "lizard"))
  );
}

function displayWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    prompt("You win!");
  } else if (computerWins(choice, computerChoice)) {
    prompt("Computer wins!");
  } else {
    prompt("It's a tie!");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();
  while (!VALID_CHOICES.includes(choice) && !VALID_SHORTCUTS.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  if (isChoiceShortcut(choice)) {
    choice = getFullChoice(choice);
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
