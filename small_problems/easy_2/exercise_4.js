// Using the multiply() function from the "Multiplying Two Numbers"
// problem, write a function that computes the square of its argument
// (the square is the result of multiplying a number by itself).

// Problem
// Input one integer number
// Output one number (the square of the number input)
// Rules
// Number can be positive or negative integer
// Questions

// Examples
// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

// Data Structure
// Since I'm working with only primitives, I'm not going to use a data structure

// Algorithm
// Given a positive or negative integer
// Return the multiplication of the integer by itself,
// by passing the integer twice to the multiply function

function multiply(num1, num2) {
  return num1 * num2;
}

function square(int) {
  return multiply(int, int);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
