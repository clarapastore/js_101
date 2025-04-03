// TODO: reorganize order of functions in the way they appear in the program

const readline = require("readline-sync");
const MESSAGES = require("./messages.json");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const VALID_SHORTCUTS = ["r", "p", "sc", "l", "sp"];
const VALID_ANSWERS = ["y", "yes", "n", "no"];
const MAX_LENGTH_SHORTCUT = 2;
const WINNING_COMBOS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};
const WINS_NEEDED_FOR_MATCH = 3;

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
  return VALID_ANSWERS.includes(input);
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

function getWinner(playerChoice, computerChoice) {
  if (WINNING_COMBOS[playerChoice].includes(computerChoice)) return "player";
  if (WINNING_COMBOS[computerChoice].includes(playerChoice)) return "computer";
  return "tie";
}

function displayTurnWinner(turnScore) {
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

function updateScore(turnScore, score) {
  const newScore = { ...score };
  switch (turnScore) {
    case "player":
      newScore.player += 1;
      break;
    case "computer":
      newScore.computer += 1;
      break;
    default:
      break;
  }
  return newScore;
}

function doYouWantToContinue() {
  let answer = getValidInput(
    isValidAnswer,
    MESSAGES.invalidRoundAnswer,
    MESSAGES.askAnotherRound
  );
  return answer[0] === "y";
}

function isFinalWinner(score, propString) {
  return score[propString] === WINS_NEEDED_FOR_MATCH;
}

function displayFinalWinner(finalWinner) {
  switch (finalWinner) {
    case "player": {
      prompt(MESSAGES.playerWinsMatch);
      break;
    }
    case "computer": {
      prompt(MESSAGES.computerWinsMatch);
      break;
    }
    default:
      break;
  }
}

function computeMatchResult(score) {
  if (isFinalWinner(score, "player")) {
    return "player";
  } else if (isFinalWinner(score, "computer")) {
    return "computer";
  } else return null;
}

console.clear();
prompt(MESSAGES.welcome);

let score = { player: 0, computer: 0 };

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

  let turnResult = getWinner(choice, computerChoice);
  displayTurnWinner(turnResult);

  score = updateScore(turnResult, score);
  prompt(
    `${MESSAGES.currentScore}\n You: ${score.player}, Computer: ${score.computer}`
  );

  let finalWinner = computeMatchResult(score);

  if (finalWinner) {
    displayFinalWinner(finalWinner);
    break;
  } else if (doYouWantToContinue()) {
    console.clear();
  } else {
    break;
  }
}

prompt(MESSAGES.goodbye);
