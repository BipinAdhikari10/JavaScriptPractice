function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
let arayNum = [2, 4];
const sum = arraySum(arayNum);

console.log(`The sum of array is ${sum}`);
