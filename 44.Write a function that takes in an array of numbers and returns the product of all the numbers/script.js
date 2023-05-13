function calculateProduct(numbers) {
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }
  return product;
}
const numbers = [2, 4, 6, 8];
const product = calculateProduct(numbers);
console.log(product);
