// Build a program that logs when the user will retire
// and how many more years the user has to work until retirement.

// Problem
// Input: currentAge (string), retirementAge (string)
// Output: A string saying what the current year is
// and what year the user will retire in, as well as how
// many years of work are left
// Questions: do I need to validate input? It's not explicitly stated
// so I'm going to assume input will be correct

// Examples
// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

// Data Structure
// I don't think I'll need a data structure for this

// Algorithm
// set currentAge to input
// coerce currentAge to number
// set retirementAge to input
// coerce retirementAge to number
// set current year to current year of date
// set yearsOfWork to retirementAge - currentAge
// set retirementYear to currentYear + yearsOfWork
// output currentYear, retirementYear, yearsOfWork to user

const readline = require("readline-sync");

console.log("What is your age?");
let currentAge = parseInt(readline.question(), 10);

console.log("At what age would you like to retire?");
let retirementAge = parseInt(readline.question(), 10);

let currentYear = new Date().getFullYear();

let yearsOfWork = retirementAge - currentAge;

let retirementYear = currentYear + yearsOfWork;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsOfWork} years of work to go!`);
