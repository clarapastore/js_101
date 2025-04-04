// Build a program that randomly generates Teddy's age,
// and logs it to the console.
// Have the age be a random number between 20 and 120 (inclusive).

// Problem
// Input: none
// Output: a random generated number between 20 and 120
// Rules: number must include 20 and 120

// Examples
// "Teddy is 60 years old!"

// Data Structure
// I don't think i'm going to need a data structure

// Algorithm
// Get a random number between 0 and 1
// Multiply it by max (120)
// Now you get a random number between 0 and max
// To exclude numbers between 0 and min, you could
// Get a number between 0 and max - min
// Then you add min again to the result
// Example: max 20 min 15
// get a number between 0 and 5 (0, 1, 2, 3, 4, 5)
// then add 15 to it
// you get (15, 16, 17, 18, 19, 20)

console.log(
  `Teddy is ${Math.round(Math.random() * (120 - 20)) + 20} years old!`
);
