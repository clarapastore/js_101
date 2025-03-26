const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("Choose one: rock, paper, scissors");
let choice = readline.question();

while (!VALID_CHOICES.includes(choice)) {
  prompt("That's not a valid choice");
  choice = readline.question();
}
