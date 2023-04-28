function shortestStringLength(arr) {
  let shortestLength = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortestLength) {
      shortestLength = arr[i].length;
    }
  }
  return shortestLength;
}
const strings = ["hello", "world", "o", "hi"];
const result = shortestStringLength(strings);
console.log(result);
