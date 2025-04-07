// Given a string that consists of
// some words and an assortment of non alphabetic characters,
// write a function that returns that string
// with all of the non-alphabetic characters replaces by spaces
// If one or more non alphabetic characters occur in a row
// You should only have one space in the result
// (i.e the result string should never have consecutive spaces)

// Problem
// Input: a string made of some words and non alphabetic characters
// Output: a string with only alphabetic characters and spaces
// Rules: if the same character occurs
// multiple times in a row, you should
// replace all occurrences with one single space
// Question: how do you see if the character is alphanumeric?

// Example
// cleanUp("---what's my +*& line?");    // " what s my line "

// Data Structure
// I'm going to use an array for this, to store the single
// characters and iterate through them

// Algorithm
// Given a string str
// Set iterator to 0
// Set outputStr to ""
// While iterator is less than string length
// If char at str[iterator] is alphabetic
// Set outputStr to outputStr + char at str[iterator]
// Otherwise, if the last char in outputString is not whitespace
// Set outputStr to outputStr + " "
// otherwise, do nothing
// set iterator to iterator + 1
// return outputStr

function cleanUp(string) {
  let outputStr = "";

  for (let ind = 0; ind < string.length; ind += 1) {
    if (string[ind].match(/[a-zA-z]/)) {
      outputStr += string[ind];
    } else if (outputStr[outputStr.length - 1] !== " ") {
      outputStr += " ";
    }
  }

  return outputStr;
}

cleanUp("---what's my +*& line?"); // " what s my line "
