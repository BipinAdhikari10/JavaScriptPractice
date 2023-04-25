function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
let string = "Bipin";

let reversed = reverseString(string);

console.log(reversed);
