function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// Example usage:
const inputString = "Hello, World!";
const reversedString = reverseString(inputString);
console.log(reversedString);
