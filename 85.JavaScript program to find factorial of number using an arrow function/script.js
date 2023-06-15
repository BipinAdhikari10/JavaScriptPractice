const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

const number = 5; // Change this value to calculate the factorial of a different number
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
