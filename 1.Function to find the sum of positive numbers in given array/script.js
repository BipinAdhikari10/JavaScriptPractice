// function arraySum(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum = sum + arr[i];
//     }
//   }
//   return sum;
// }

// let arrayNum = [5, 6, -4, 10, -6, -7];
// console.log(arrayNum);
// const sum = arraySum(arrayNum);

// console.log(sum);

// let firstNum = 5;
// console.log(firstNum);

// let arr = [1, 2, 3];

function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  console.log(sum);
  return sum;
}
arraySum([2, 4, 5]);
