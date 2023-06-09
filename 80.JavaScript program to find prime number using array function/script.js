function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function findPrimeNumbers(numbers) {
  return numbers.filter(isPrime);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = findPrimeNumbers(array);

console.log(primeNumbers);
