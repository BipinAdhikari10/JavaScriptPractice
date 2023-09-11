function generateFibonacci(n) {
  const fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextFibonacci = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(nextFibonacci);
  }

  return fibonacci;
}

const n = 10; // Change this to the desired term
console.log(`Fibonacci sequence up to term ${n}: ${generateFibonacci(n)}`);
