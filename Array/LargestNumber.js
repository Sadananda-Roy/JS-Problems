const LargestNumber = (arr) => {
  let largest = arr.reduce((acc, item) => {
    return acc > item ? acc : item;
  });
  return largest;
};

const arr = [1, 2, 8, 3, 11, 4, 5, 6];
console.log(LargestNumber(arr));
