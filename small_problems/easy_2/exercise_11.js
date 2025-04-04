// Write a function that takes a non-empty string argument and
// returns the middle character(s) of the string.
// If the string has an odd length, you should return exactly one character.
// If the string has an even length, you should return exactly two characters.

// Problem
// Input: a string
// Output: a string
// Rules:
// output string must be the middle character of input string
// If the string has an even amount of character, return the middle two string
// If the string has an odd amount of characters, return the middle string

// Examples
// centerOf('I Love JavaScript'); // "a"
// centerOf('Launch School');     // " "
// centerOf('Launch');            // "un"
// centerOf('Launchschool');      // "hs"
// centerOf('x');                 // "x"

// Data structure
// Since strings are iterable collections, I shouldn't need arrays for this

// Algorithm
// Given a string str
// If the length of the string is even
// Set charsToGet to 2
// Otherwise set charsToGet to 1
// Set indexOfFirstChar to length of str - charsToGet divided by 2
// Return substring starting at indexOfFirstChar,
// for as many chars as indicated by charsToGet

function centerOf(str) {
  let charsToGet = str.length % 2 === 0 ? 2 : 1;
  let indexOfFirstChar = (str.length - charsToGet) / 2;
  return str.slice(indexOfFirstChar, indexOfFirstChar + charsToGet);
}

console.log(centerOf("I Love JavaScript")); // "a"
console.log(centerOf("Launch School")); // " "
console.log(centerOf("Launch")); // "un"
console.log(centerOf("Launchschool")); // "hs"
console.log(centerOf("x")); // "x"
