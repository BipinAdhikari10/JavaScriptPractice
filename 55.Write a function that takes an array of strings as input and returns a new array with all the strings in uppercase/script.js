function convertToUpperCase(array) {
  var uppercaseArray = [];
  for (var i = 0; i < array.length; i++) {
    uppercaseArray.push(array[i].toUpperCase());
  }
  return uppercaseArray;
}
var strings = ["hello", "world", "javascript"];
var uppercaseStrings = convertToUpperCase(strings);
console.log(uppercaseStrings); // Output: ["HELLO", "WORLD", "JAVASCRIPT"]
