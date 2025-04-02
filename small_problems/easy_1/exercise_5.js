// Create a simple tip calculator.
// The program should prompt for a bill amount and a tip rate.
// The program must compute the tip,
// and then log both the tip and
// the total amount of the bill to the console.
// You can ignore input validation and
// assume that the user will enter valid positive numbers.

// Problem
// Inputs: bill amount (string), tip percentage (string)
// Output: The tip is ... (string)
// The total is ... (string)
// Rules: I can ignore input validation, so I'm going to
// assume that the user will enter a valid positive number

// Example
// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

// Data structure
// Since I receive strings, and output numbers
// (made out of calcs on the string inputs)
// I don't think I'm going to need a data structure

// Algorithm
// Get the bill amount string from the user
// Save it into a variable bill and coerce it into a number
// Get the tip percentage string from the user
// Save it into a variable tipPercentage and coerce it into a number
// reassign tipPercentage to the tipPercentage number divided by 100
// Initialize variable tipAmount to the result of
// multiplying the bill with tipPercentage
// Inialize variable billTotal to the result of
// adding tipAmount to bill
// Output "The tip is tipAmount" to the user
// Output "The bill is billTotal" to the user

const readline = require("readline-sync");
const PERCENT = 100;

console.log("What is the bill?");
let bill = readline.question();
bill = parseFloat(bill);

console.log("What is the tip percentage?");
let tipPercentage = readline.question();
tipPercentage = parseFloat(tipPercentage);

tipPercentage /= PERCENT;

let tipAmount = bill * tipPercentage;

let billTotal = bill + tipAmount;

console.log(`The tip is ${tipAmount.toFixed(2)}`);
console.log(`The bill is ${billTotal.toFixed(2)}`);
