function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

const numbers = [1, 2, 3];
const average = calcAverage(numbers);
console.log(`The average number of the given array numbers is ${average}`);

const number2 = [4, 5, 6];
const average2 = calcAverage(number2);
console.log(average2);
