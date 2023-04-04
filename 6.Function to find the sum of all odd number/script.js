function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

let array = [1, 5, 6, 9, 10];
const sum = arraySum(array);
console.log(`The sum of an array is ${sum}`);

const sum1 = arraySum([2, 3, 4, 7]);
console.log(`The sum of an array is ${sum1}`);

console.log(`The sum of an array is ${arraySum([5, 6, 7, 8, 9])}`);
