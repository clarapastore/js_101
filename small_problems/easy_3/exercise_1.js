// Write a function that takes a string argument
// and returns a new string that contains
// the value of the original string
// with all consecutive duplicate characters collapsed into a single character

// Problem
// Input: a string
// Output: a string
// Rules:
// If the input string has a character that comes up multiple times in a row
// Only one character is added

// Examples:
// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

// Data structure
// I might need an array for this one to make it easier
// I might also approach this using the reduce method!

// Algorithm
// Given a string str
// Set charArr to []
// Iterate through str
// For each iteration, add char to charArr
// Set outputStr to ""
// Set startChar to char at index 0 of charArr
// Set outputStr to outputStr + char at index 0 of charArr
// Set currentChar to ""
// Iterate through charArr
// At every iteration, assign currentChar to current iterated element
// If currentChar is the same as startChar, do nothing and
// continue to next iteration
// Otherwise, assign outputStr to outputStr + currentChar
// Assign startChar to currentChar
// At the end of iteration, return outputStr

// Code
function crunch(str) {
  let charArr = str.split("");
  if (charArr.length > 0) {
    return charArr.reduce((outputStr, char) => {
      if (outputStr[outputStr.length - 1] !== char) {
        outputStr += char;
      }
      return outputStr;
    });
  } else return "";
}

console.log(crunch("ddaaiillyy ddoouubbllee")); // "daily double"
console.log(crunch("4444abcabccba")); // "4abcabcba"
console.log(crunch("ggggggggggggggg")); // "g"
console.log(crunch("a")); // "a"
console.log(crunch("")); // ""
