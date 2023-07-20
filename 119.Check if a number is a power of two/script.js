function isPowerOfTwo(number) {
    if (number <= 0) {
      return false;
    }
  
    return (number & (number - 1)) === 0;
  }
  
  const num = 16;
  console.log("Is it a power of two? " + isPowerOfTwo(num));
  