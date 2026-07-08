const FindDuplicatesWithIndexOf = (arr) => {
  const dupArr = [];
  arr.forEach((item) => {
    if (arr.indexOf(item) !== arr.lastIndexOf(item) && !dupArr.includes(item)) {
      dupArr.push(item);
    }
  });
  return dupArr;
};

const FindDuplicatesWithSet = (arr) => {
  let seen = new Set();
  let dupArr = new Set();

  arr.forEach((item) => {
    if (!seen.has(item)) {
      seen.add(item);
    } else {
      dupArr.add(item);
    }
  });

  return [...dupArr];
};

const a = [1, 2, 2, 3, 5, 3, 7, 9, 6, 5, 7];
console.log(FindDuplicatesWithIndexOf(a));
console.log(FindDuplicatesWithSet(a));
