// Function declaration to reverse a string
function reverseString(str) {
  var reversed = "";

  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }

  return reversed;
}

// Example usage
var inputString = "Hello, World!";
var reversedString = reverseString(inputString);
console.log(reversedString);
