function sumMultiplesOf3And5(number) {
  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

const num = 20;
console.log("Sum of multiples: " + sumMultiplesOf3And5(num));
