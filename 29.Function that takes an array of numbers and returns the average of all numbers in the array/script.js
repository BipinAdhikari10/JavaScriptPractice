function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

const numbers = [1, 2, 3, 4, 5];
const average = calculateAverage(numbers);
console.log(`The average number is ${average}`);
