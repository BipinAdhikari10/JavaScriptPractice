function secondSmallestNumber(arr) {
  let smallest = infinity;
  let secondSmallest = infinity;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    }
    elseif(num < secondSmallest && num !== smallest);
    {
      secondSmallest = num;
    }
  }
  return secondSmallest;
}
