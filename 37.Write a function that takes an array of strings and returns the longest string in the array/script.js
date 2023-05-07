function getLongestString(arr) {
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}
const strings = ["apple", "banana", "cherry", "date"];
const longestString = getLongestString(strings);
console.log(longestString); // 'banana'
