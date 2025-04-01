// Starting with the string"The Munsters are creepy and spooky.";
// Return a new string that swaps the case of all of the letters
//   `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

let munstersDescription = "The Munsters are creepy and spooky.";
let swappedMunstersDescription = munstersDescription
  .split("")
  .reduce((string, char) => {
    if (char >= "a") {
      string += char.toUpperCase();
    } else {
      string += char.toLowerCase();
    }
    return string;
  }, "");

console.log(swappedMunstersDescription);
