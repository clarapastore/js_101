// Create a function that takes 2 arguments, an array and an object.
// The array will contain 2 or more elements that, when combined
// with adjoining spaces, will produce a person's name.
// The object will contain two keys, "title" and "occupation",
// and the appropriate values. Your function should return
// a greeting that uses the person's full name, and mentions the person's title.

// Problem
// Input: 2 arguments. An array and an object
// Output
// A greeting string that uses the person's full name
// and mentions the person's title
// Rules
// Array input contains 2 or more elements. When joined with spaces,
// they will form the person's full name
// Object input contains 2 keys, "title" and "occupation", with the appropriate
// values.
// Questions

// Examples
// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

// Data structure
// What this function does is essentially extract primitives from object values
// And compose a string out of them
// Therefore, I don't think I will need a data structure for this

// Algorithm
// Given an array of strings and
// an object with two key-value pairs, title and occupation
// Set a variable name to the elements of the array,
// concatenated with spaces in between
// Set personTitle to the value at property title of the object input
// Set personOccupation to the value at property occupation of the object input
// Return the string "Nice, to see you here, name!
// And cool that you are a personTitle personOccupation"

// Code
function greetings(personArr, personObj) {
  let fullName = personArr.join(" ");
  return `Nice to see you here, ${fullName}! And great to hear that you're a ${personObj.title} ${personObj.occupation}.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
