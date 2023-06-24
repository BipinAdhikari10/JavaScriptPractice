function areAllEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
}

const numbers1 = [2, 4, 6, 8, 10];
console.log(areAllEven(numbers1)); // Output: true

const numbers2 = [2, 4, 6, 8, 11];
console.log(areAllEven(numbers2)); // Output: false
