const arr = [1, 2, 8, 3, 11, 4, 5, 6];

let largest = -Infinity;
let secondLargest = -Infinity;

arr.forEach((item) => {
  if (item > largest) {
    secondLargest = largest;
    largest = item;
  } else if (item < largest && item > secondLargest) {
    secondLargest = item;
  }
});

console.log(secondLargest);
