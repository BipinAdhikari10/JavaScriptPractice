function secondSmallest(arr) {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }
  return secondSmallest;
}
const array = [1, 2, 3, 4];
const number = secondSmallest(array);
console.log(number);
