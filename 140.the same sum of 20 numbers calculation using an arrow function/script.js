const numbers = [
  3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60,
];

const calculateSum = (numberArray) => {
  let sum = 0;
  for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }
  return sum;
};

const sum = calculateSum(numbers);

console.log(`The sum of the 20 numbers is: ${sum}`);
