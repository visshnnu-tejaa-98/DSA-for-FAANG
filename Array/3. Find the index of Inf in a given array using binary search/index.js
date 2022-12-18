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

const findIndex = (array, left = 0, right = array.length - 1) => {
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
