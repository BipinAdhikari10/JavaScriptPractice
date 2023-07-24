function flattenArray(arr) {
  return arr.reduce((flatArr, element) => {
    if (Array.isArray(element)) {
      return flatArr.concat(flattenArray(element));
    } else {
      return flatArr.concat(element);
    }
  }, []);
}

const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
console.log("Flattened array: ", flattenArray(nestedArray));
