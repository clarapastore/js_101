// Get the loan amount
// Get annual percentage rate
// Get loan duration
// Calculate monthly payment
// Output monthly payment
// Ask to calculate another loan

let readline = require("readline-sync");
let loanAmount, annualInterestRate;

console.log("Welcome to Mortgage Calculator!");

console.log("What's the loan amount you have to pay?");
loanAmount = readline.question();
console.log(`Your loan amount is ${loanAmount}`);

console.log("What's the annual interest rate?");
annualInterestRate = readline.question();
console.log(`Your annual interest rate is ${annualInterestRate}`);
