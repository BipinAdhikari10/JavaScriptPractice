function reverseArray(arr) {
  return arr.slice().reverse();
}
const strings = ["apple", "banana", "cherry", "date"];
const reversedArray = reverseArray(strings);
console.log(reversedArray);
