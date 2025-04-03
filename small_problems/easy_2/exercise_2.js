// Write a program that will ask for user's name.
// The program will then greet the user.
// If the user writes "name!" then the computer yells back to the user.

// Problem
// Input: A string with the user's name
// Output: A string, greeting
// Rules
// If input string doesn't end in !, then greet with Hello Name.
// Otherwise, greet with HELLO NAME. WHY ARE WE SCREAMING?
// Questions

// Examples
// What is your name? Bob
// Hello Bob.
// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

// Data structure
// Since we're working with strings only,
// I don't think I'll need a data structure for this

// Algorithm
// Ask user name
// Set userName to user input
// If userName ends in !
// Output screaming message
// Else
// Output normal message

const readline = require("readline-sync");

console.log("What is your name?");
let userName = readline.question();

if (userName[userName.length - 1] === "!") {
  console.log(
    `HELLO ${userName
      .slice(0, userName.length - 1)
      .toUpperCase()}. WHY ARE WE SCREAMING?`
  );
} else {
  console.log(`Hello ${userName}.`);
}
