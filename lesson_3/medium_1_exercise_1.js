// Write a program that outputs the string "The Flintstones Rock!" 10 times
// With each line indented 1 space to the right of the line above it
// The output should start out like this:
// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!
//     The Flintstones Rock!

let sentence = "The Flintstones Rock!";
let spaces = "";

for (let count = 0; count < 10; count += 1) {
  let indentedSentence = spaces + sentence;
  console.log(indentedSentence);
  spaces += " ";
}
