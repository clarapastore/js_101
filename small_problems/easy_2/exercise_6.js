// Write a function that returns the
// next to last word in the string passed to it as an argument
// Words are any sequence of non blank characters

// Problem
// Input: a string of words
// Output: the next to last word
// Rules: words are any sequence of non blank characters
// you can assume that the input string will always contain at least two words

// Example
// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// Data structure
// I'm going to use an array to store words and access the next to last word

// Algorithn
// Given a string of words
// Set wordsArr to []
// Split the strings at the blank character
// Add the strings to stringArr
// Access the next to last element of stringArr
// Return it

function penultimate(string) {
  let wordsArr = string.split(" ");
  return wordsArr[wordsArr.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
