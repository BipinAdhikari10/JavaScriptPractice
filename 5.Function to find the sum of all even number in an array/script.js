function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}
let array = [1, 2, 3, 4, 5];
const sum = arraySum(array);
console.log(`The sum of an array is ${sum}`);

let arrayNum = [4, 5, 6];
const sum1 = arraySum(arrayNum);
console.log(`The sum of an array is ${sum1}`);

const sum2 = arraySum([2, 5, 6, 84, 125]);
console.log(`The sum of an array is ${sum2}`);

console.log(`The sum of the given array is ${arraySum([2, 6, 7, 8, 45])}`);
