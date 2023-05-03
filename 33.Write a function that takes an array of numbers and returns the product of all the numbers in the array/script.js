function getProduct(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}
const numbers = [1, 2, 3, 4, 5];
const product = getProduct(numbers);
console.log(product);
