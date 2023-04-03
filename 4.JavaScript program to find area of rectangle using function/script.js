function calculateRectangleArea(width, height) {
  return width * height;
}

const width = 10;
const height = 5;
const area = calculateRectangleArea(width, height);

console.log(
  `The area of a rectangle with width ${width} and height ${height} is ${area}.`
);
