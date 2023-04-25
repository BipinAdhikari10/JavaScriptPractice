function reverseString(str) {
  let reversed = "";

  for (i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}
let string = "apple";

let reversed = reverseString(string);

console.log(reversed);
