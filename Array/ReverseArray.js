const arr = [1, 2, 3, 4, 5];

const reverseArray = (arr) => {
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
};

console.log(reverseArray(arr)); // Output: [5, 4, 3, 2, 1]
