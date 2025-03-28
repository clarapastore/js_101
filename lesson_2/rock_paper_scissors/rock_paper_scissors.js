// TODO: clear the console after player decides to play another game
const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const VALID_SHORTCUTS = ["r", "p", "sc", "l", "sp"];
const MAX_LENGTH_SHORTCUT = 2;
let score = { player: 0, computer: 0 };

function prompt(message) {
  console.log(`=> ${message}`);
}

function getValidInput() {
  let input = readline.question();
  while (!VALID_CHOICES.includes(input) && !VALID_SHORTCUTS.includes(input)) {
    prompt("That's not a valid choice");
    input = readline.question();
  }
  return input;
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

function computeTurnResult(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    return "player";
  } else if (computerWins(choice, computerChoice)) {
    return "computer";
  } else {
    return "tie";
  }
}

function displayWinner(turnScore) {
  switch (turnScore) {
    case "player":
      prompt("You win!");
      break;
    case "computer":
      prompt("Computer wins!");
      break;
    case "tie":
      prompt("It's a tie!");
      break;
  }
}

function updateScore(turnScore) {
  switch (turnScore) {
    case "player":
      score.player += 1;
      break;
    case "computer":
      score.computer += 1;
      break;
    default:
      break;
  }
}

function askAnotherRound() {
  prompt("Do you want to play another game? (y/n)");
  let input = readline.question().toLowerCase();
  while (input[0] !== "y" && input[0] !== "n") {
    prompt("This is not a valid answer. Please enter y or n.");
    input = readline.question().toLowerCase();
  }
  return input;
}

while (true) {
  prompt(
    `Choose one: ${VALID_CHOICES.join(
      ", "
    )}\nHINT: try the shortcuts ${VALID_SHORTCUTS.join(", ")}`
  );
  let choice = getValidInput();

  if (isChoiceShortcut(choice)) {
    choice = getFullChoice(choice);
  }

  let computerChoice = VALID_CHOICES[chooseRandomIndex()];
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  let turnResult = computeTurnResult(choice, computerChoice);

  displayWinner(turnResult);
  updateScore(turnResult);
  prompt(
    `The current score is:\n You: ${score.player}, Computer: ${score.computer}`
  );

  if (score.player === 3) {
    prompt("You have won!");
    break;
  } else if (score.computer === 3) {
    prompt("Computer has won!");
    break;
  } else {
    let answer = askAnotherRound();
    if (answer[0] !== "y") {
      break;
    }
  }
  console.clear();
}
