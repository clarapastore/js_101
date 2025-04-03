function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

console.log(isDotSeparatedIpAddress("127.0.0.1")); // true
console.log(isDotSeparatedIpAddress("172.16.0.9")); // true
console.log(isDotSeparatedIpAddress("4.5.5")); // false
console.log(isDotSeparatedIpAddress("1.2.3.4.5")); // false
