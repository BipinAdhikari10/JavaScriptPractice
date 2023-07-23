function rotateArray(arr, positions) {
  const rotatedArray = [...arr];
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    rotatedArray[(i + positions) % n] = arr[i];
  }

  return rotatedArray;
}

const numbers = [1, 2, 3, 4, 5];
const positionsToRotate = 2;
console.log("Rotated array: ", rotateArray(numbers, positionsToRotate));
