// TODO: Improve logic of playerWins and computerWins
// //    by using a winning condition obj
// TODO: improve the logic of isValidAnswer
// //    make it so that only y or yes, n and no are ok answers
const readline = require("readline-sync");
const MESSAGES = require("./messages.json");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const VALID_SHORTCUTS = ["r", "p", "sc", "l", "sp"];
const MAX_LENGTH_SHORTCUT = 2;
const WINNING_CONDITION_NUM = 3;
let score = { player: 0, computer: 0 };

function prompt(message) {
  console.log(`=> ${message}`);
}

function getValidInput(isInputValid, invalidMsg, requestMsg) {
  if (requestMsg) prompt(requestMsg);
  let input = readline.question().toLowerCase();
  while (!isInputValid(input)) {
    prompt(invalidMsg);
    input = readline.question().toLowerCase();
  }
  return input;
}

function isValidChoice(input) {
  return VALID_CHOICES.includes(input) || VALID_SHORTCUTS.includes(input);
}

function isValidAnswer(input) {
  return input[0] === "y" || input[0] === "n";
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
      prompt(MESSAGES.playerWinsRound);
      break;
    case "computer":
      prompt(MESSAGES.computerWinsRound);
      break;
    case "tie":
      prompt(MESSAGES.roundIsTie);
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

function askUserToContinue() {
  let answer = getValidInput(
    isValidAnswer,
    MESSAGES.invalidRoundAnswer,
    MESSAGES.askAnotherRound
  );
  if (answer[0] !== "y") {
    return true;
  } else {
    return false;
  }
}

function isGameOver() {
  if (score.player === WINNING_CONDITION_NUM) {
    prompt(MESSAGES.playerWinsMatch);
    return true;
  } else if (score.computer === WINNING_CONDITION_NUM) {
    prompt(MESSAGES.computerWinsMatch);
    return true;
  } else {
    return askUserToContinue();
  }
}

while (true) {
  prompt(
    `${MESSAGES.askChoice} ${VALID_CHOICES.join(", ")}\n${
      MESSAGES.shortcutHint
    } ${VALID_SHORTCUTS.join(", ")}`
  );
  let choice = getValidInput(isValidChoice, MESSAGES.invalidChoice);

  if (isChoiceShortcut(choice)) {
    choice = getFullChoice(choice);
  }

  let computerChoice = VALID_CHOICES[chooseRandomIndex()];
  prompt(
    `${MESSAGES.playerChoiceIs} ${choice}, ${MESSAGES.computerChoiceIs} ${computerChoice}`
  );

  let turnResult = computeTurnResult(choice, computerChoice);

  displayWinner(turnResult);
  updateScore(turnResult);
  prompt(
    `${MESSAGES.currentScore}\n You: ${score.player}, Computer: ${score.computer}`
  );

  if (isGameOver()) break;

  console.clear();
}
