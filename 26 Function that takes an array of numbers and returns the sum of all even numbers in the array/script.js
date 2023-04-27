function sumEven(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let array = [1, 2, 3];
const sum = sumEven(array);
console.log(`The sum of the number is ${sum}`);
