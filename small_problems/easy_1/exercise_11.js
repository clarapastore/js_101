// Write a function that determines and returns
// the UTF-16 string value of a string passed in as an argument.
// The UTF-16 string value is
// the sum of the UTF-16 values of every character in the string.
// (You may use String.prototype.charCodeAt()
// to determine the UTF-16 value of a character.)

// Problem
// Input: a string
// Output: A number. The UTF-16 string value of input
// Rules
// You may use the String.prototype.charCodeAt() method
// to determine the UTF-16 value of a character
// Questions

// Examples
// utf16Value('Four score');         // 984
// utf16Value('Launch School');      // 1251
// utf16Value('a');                  // 97
// utf16Value('');                   // 0

// // The next three lines demonstrate that the code
// // works with non-ASCII characters from the UTF-16
// // character set.
// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// utf16Value(OMEGA);                  // 937
// utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

// Data Structure
// Since I need to iterate through a string, it makes sense to use an array

// Algorithm
// Given a string str
// set charArr to []
// Iterate through str
// At each iteration, add char of str to charArr
// set charCodesArr to []
// Iterate through charArr
// At every iteration, get the UTF-16 value of char at current iteration
// Add UTF-16 value to charCodesArr
// Set sumOfCharCodes to 0
// Iterate through charCodesArr
// At every iteration, reassign sumOfCharCodes to
// sumOfCharCodes + current code from charCodesArr
// return sumOfCharCodes

// Code
function utf16Value(str) {
  let charArr = str.split("");
  let charCodesArr = charArr.map((char) => char.charCodeAt());
  return charCodesArr.reduce((sum, charCode) => sum + charCode, 0);
}

utf16Value("Four score"); // 984
utf16Value("Launch School"); // 1251
utf16Value("a"); // 97
utf16Value(""); // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9"; // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA); // 937
utf16Value(OMEGA + OMEGA + OMEGA); // 2811
