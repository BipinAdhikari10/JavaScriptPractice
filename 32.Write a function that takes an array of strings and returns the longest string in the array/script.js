function findLongestString(arr) {
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}
const strings = ["apple", "banana", "cherry", "date"];
const longestString = findLongestString(strings);
console.log(longestString);
