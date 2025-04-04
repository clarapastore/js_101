// Write a program that prompts the user for two positive integers,
// and then prints the results of the following operations on
// those two numbers: addition, subtraction, product, quotient,
// remainder, and power. Do not worry about validating the input.

// Problem
// Input: two positive integer
// Output: the operations on those two integers: addition,
// subtraction, product, quotient, remainder and power
// Rules: no need to validate input. Assuming this is
// a positive integer
// Questions:

// Examples:
// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23

// Data structures
// Working with primitives and performing operations on them
// Program looks simple enough to not need a data structure

// Algorithm
// set num1 to user input
// coerce num1 to number type
// set num2 to user input
// coerce num2 to number type
// set sum to num1 + num2
// output "num1 + num2 = sum"
// set subtraction to num1 - num2
// output "num1 - num2 = subtraction"
// set multiplication to num1 * num2
// output "num1 * num2 = multiplication"
// set division to num1 / num2
// output "num1 / num2 = division"
// set remainder to num1 % num2
// output "num1 % num2 = remainder"
// set power to num1 to the power of num2
// output "num1 ** num2 = power"

// Code
const readline = require("readline-sync");

function prompt(message) {
  console.log(`==> ${message}`);
}

prompt("Enter the first number");
let num1 = parseInt(readline.question(), 10);

prompt("Enter the second number");
let num2 = parseInt(readline.question(), 10);

prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${num1 ** num2}`);
