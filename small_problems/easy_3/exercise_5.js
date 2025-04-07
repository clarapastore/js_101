// Write a function that takes a
// Positive integer, n as an rgument
// And logs a right triangle whose sides have n stars
// The hypothenuse of the triangle (the diagonal side) should have
// one end at the lower-left of the triangle
// and the other hand at the upper-right

// Problem
// Input: a positive integer, n
// Output: a right triangle of stars
// Rules: The triangle must have the hypothenuse at the left side
// The sides of the triangle should be of length n

// Examples
// triangle(5);

//     *
//    **
//   ***
//  ****
// *****

// triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

// Data Structure
// This looks like it can be achieved with a looping mechanism and strings
// So I don't think I'm going to need a data strcuture for this

// Algorithm
// Given a positive integer n
// Set spaceCount to n - 1
// While spaceCcount >= 0
// Set starsCount to n - spaceCount
// Print the string of " " repeated by spaceCount concatenated
// with "*" repeated by starsCount
// set spaceCount to spaceCount - 1

// Code
function triangle(n) {
  for (let spaceCount = n - 1; spaceCount >= 0; spaceCount -= 1) {
    let starsCount = n - spaceCount;
    console.log(`${" ".repeat(spaceCount)}${"*".repeat(starsCount)}`);
  }
}

triangle(5);
triangle(9);
