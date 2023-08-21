function reverseString(inputString) {
  let reversedString = "";

  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }

  return reversedString;
}

const input = "Hello, World!";
const reversed = reverseString(input);
console.log("Original string:", input);
console.log("Reversed string:", reversed);
