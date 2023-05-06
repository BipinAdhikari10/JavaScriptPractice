function getArrayProperty(arr, property) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i][property]);
  }
  return result;
}
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const names = getArrayProperty(people, "name");
console.log(names);

const ages = getArrayProperty(people, "age");
console.log(ages);
