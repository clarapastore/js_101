// TODO: Make it clear in the prompt that shortcuts are also possible
// (r, p, sc, l, sp)
// TODO: refactor input validation and assignment to its own function
// TODO: figure out how to extract play another round into its own function
const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const VALID_SHORTCUTS = ["r", "p", "sc", "l", "sp"];
const MAX_LENGTH_SHORTCUT = 2;
let score = { player: 0, computer: 0 };

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
    // code from here to next comment should be its own function
    // askAnotherRound
    // assign answer to the function
    // return the input answer as a string
    prompt("Do you want to play another game? (y/n)");
    let answer = readline.question().toLowerCase();
    while (answer[0] !== "y" && answer[0] !== "n") {
      prompt("This is not a valid answer. Please enter y or n.");
      answer = readline.question().toLowerCase();
    }
    // end of anotherRound function
    if (answer[0] !== "y") {
      break;
    }
  }
}
