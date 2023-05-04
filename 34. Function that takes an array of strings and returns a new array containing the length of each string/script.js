function getStringLengths(arr) {
  const lengths = [];
  for (let i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length);
  }
  return lengths;
}
const strings = ["apple", "banana", "cherry", "date"];
const lengths = getStringLengths(strings);
console.log(lengths);
