// You need to find the index of first occurance of Infinity in an array
let array = [
  -23,
  40,
  55,
  1,
  2,
  27,
  -89,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
];

const findIndex = (array) => {
  let left = 1;
  let right = 1;
  while (array[right - 1] !== Infinity) {
    left = right;
    right = left * 2;
    console.log(left, right);
  }
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (array[mid] === Infinity) {
      right = mid - 1;
      if (array[mid - 1] !== Infinity) {
        return mid;
      }
    } else {
      left = mid + 1;
    }
  }
};

let result = findIndex(array);
console.log(result);
