function areaOfrect(length, width) {
  return length * width;
}
result = areaOfrect(5, 6);
console.log(`The area of rectangle is ${result}`);

//Expression function

const areaOfrect2 = function (length, width) {
  return length * width;
};
const areaOfrect3 = areaOfrect2;

const areaOfrect4 = areaOfrect3(20, 10);

console.log(`The area of rectangle is ${areaOfrect4}`);

//Arrow function

const areaOfrect5 = (length, width) => length * width;

const areaOfrect6 = areaOfrect5;
const areaOfrect7 = areaOfrect6(20, 50);
console.log(`The area of rectangle is ${areaOfrect7}`);
