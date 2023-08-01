function reverseString(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

const text = "Hello, world!";
console.log("Reversed string: " + reverseString(text));
