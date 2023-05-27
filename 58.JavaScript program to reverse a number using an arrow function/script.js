const reverseNumber = (number) => {
  const reversed = Number(
    Math.abs(number).toString().split("").reverse().join("")
  );
  return number < 0 ? -reversed : reversed;
};

// Example usage:
console.log(reverseNumber(12345)); // Output: 54321
console.log(reverseNumber(-9876)); // Output: -6789
