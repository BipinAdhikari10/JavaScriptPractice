const arr = [1, 2, 3, 4, 5, 6, 10];

console.log(arr.push(7));
arr.push(8);
arr.push(11);
console.log(arr.pop());

console.log(arr);

// const findArray = (arr) => {
//   const evenArrays = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       evenArrays.push(arr[i]);
//     }
//   }
//   //   evenArrays.push(2);
//   //   evenArrays.push(4);
//   //   evenArrays.push(6);
//   return evenArrays;
// };

// const array = findArray([1, 2, 3, 4, 5, 6, 8, 9, 10, 200]);
// console.log(array);
