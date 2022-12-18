let array = [20, 45, 27, 47, 55, 67, 75, 88, 90];
let key = 67;

const binarySearch = (array, key) => {
  let left = 0;
  let right = array.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);
    if (left == right) return array[left] === key ? mid : -1;
    if (array[mid] === key) return mid;
    else if (array[mid] < key) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};
binarySearch([20, 45, 27, 47, 55, 67], 67);

// let result = binarySearch([20, 45, 27, 47, 55, 67], 67);
let result = binarySearch([67], 67);
// let result = binarySearch([20], 67);
console.log(result);
