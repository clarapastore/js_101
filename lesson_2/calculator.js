// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Print the result to the terminal
// Ask user to perform another calculation

const readline = require("readline-sync");
let localeLanguage = navigator.language;
const MESSAGES = require(selectMessagesLanguage(localeLanguage));

function extractLocaleLanguageCode(locale) {
  return locale.split("-")[0];
}

function selectMessagesLanguage(locale) {
  let localeLanguageCode = extractLocaleLanguageCode(locale);
  switch (localeLanguageCode) {
    case "en":
      return "./messages_en.json";
    case "it":
      return "./messages_it.json";
    default:
      return "./messages_en.json";
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

prompt(MESSAGES.welcome);

while (true) {
  prompt(MESSAGES.firstNum);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES.invalidNum);
    number1 = readline.question();
  }

  prompt(MESSAGES.secondNum);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES.invalidNum);
    number2 = readline.question();
  }

  prompt(MESSAGES.operation);
  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(MESSAGES.invalidOperation);
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      if (Number(number2) === 0) {
        prompt(MESSAGES.zeroDivision);
      }
      break;
  }

  prompt(`${MESSAGES.result} ${output}`);

  prompt(MESSAGES.askCalculation);
  let answer = readline.question();
  if (answer !== "y") {
    prompt(MESSAGES.goodbye);
    break;
  }
  console.clear();
}
