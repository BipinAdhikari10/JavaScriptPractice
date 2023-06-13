const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

// Testing the function
console.log(isPrime(7)); // Output: true
console.log(isPrime(16)); // Output: false
console.log(isPrime(23)); // Output: true
