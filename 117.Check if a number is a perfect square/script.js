function isPerfectSquare(number) {
  if (number < 0) {
    return false;
  }

  const sqrt = Math.sqrt(number);
  return sqrt === Math.floor(sqrt);
}

const num = 25;
console.log("Is it a perfect square? " + isPerfectSquare(num));
