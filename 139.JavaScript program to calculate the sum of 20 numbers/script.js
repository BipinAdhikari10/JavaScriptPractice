const numbers = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

function calculateSum(numberArray) {
  let sum = 0;
  for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }
  return sum;
}

const sum = calculateSum(numbers);

console.log(`The sum of the 20 numbers is: ${sum}`);
