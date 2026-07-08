const removeDuplicates = (arr) => {
  const newArr = [];
  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
};

const array = [1, 2, 3, 1, 3, 4, 6, 4, 7, 4, 2, 3, 1];
console.log(removeDuplicates(array));
