// Write a function that
// Takes a short line of text
// And writes it to the console within a box

// Problem
// Input: A string
// Output: A string in a box
// Rules
// Input will always fit in the browser window
// This means that the string passed will always be one line

// Examples
// logInBox('To boldly go where no one has gone before.');
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

// logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+

// Data Structure
// This is essentially working with strings
// So I don't think I'm going to need a specific data structure for this

// Algorithm
// Given a string str
// Set count to 1
// Set outputStr to ""
// While count is less than or equal 5
// If count is odd and not 3
// Set outputStr to plus sign concatenated with a dash repeated by
// the length of the string + 2
// concatenated with a plus sign
// Print outputStr to console
// If count is even
// set outputStr to | concatenated with spaces repeated
// by the length of the string + 2
// concatenated with |
// print outputStr to console
// Otherwise
// Set outputStr to | concatenated with a space
// concatenated with str concatenated with a space
// concatenated with |
// Print outputStr to console
// Set iterator to iterator + 1

function logInBox(str) {
  let count = 1;
  let outputStr = "";

  while (count <= 5) {
    if (count % 2 === 1 && count !== 3) {
      outputStr = "+" + "-".repeat(str.length + 2) + "+";
      console.log(outputStr);
    } else if (count % 2 === 0) {
      outputStr = "|" + " ".repeat(str.length + 2) + "|";
      console.log(outputStr);
    } else {
      outputStr = "|" + " " + str + " " + "|";
      console.log(outputStr);
    }
    count += 1;
  }
}

logInBox("To boldly go where no one has gone before.");
logInBox("");
