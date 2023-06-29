function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

const numbers1 = [1, 2, 3, 4, 5];
console.log(isSorted(numbers1)); // Output: true

const numbers2 = [5, 4, 3, 2, 1];
console.log(isSorted(numbers2)); // Output: false
