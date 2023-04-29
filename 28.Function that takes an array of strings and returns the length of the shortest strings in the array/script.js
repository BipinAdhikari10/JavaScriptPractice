function shortestStringsLength(arr) {
  let shortestLength = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortestLength) {
      shortestLength = arr[i].length;
    }
  }
  return shortestLength;
}

const strings = ["Bipin", "Adhikari"];
const result = shortestStringsLength(strings);
console.log(result);
