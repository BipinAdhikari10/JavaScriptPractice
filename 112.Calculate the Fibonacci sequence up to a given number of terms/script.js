function calculateFibonacciSequence(terms) {
  const sequence = [0, 1];

  for (let i = 2; i < terms; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }

  return sequence;
}

const numOfTerms = 8;
console.log("Fibonacci sequence: " + calculateFibonacciSequence(numOfTerms));
