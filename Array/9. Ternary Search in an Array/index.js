let array = [20, 45, 27, 47, 55, 67, 75, 88, 90];
let key = 67;

const TernarySearch = (array, key) => {
  let left = 0;
  let right = array.length - 1;
  let mid1 = Math.floor(left + (right - left) / 3);
  let mid2 = Math.floor(right - (right - left) / 3);
  console.log(left, right, mid1, mid2);
  while (left <= right) {
    if (mid1 === mid2) {
      if (array[mid1] === key) {
        return mid1;
      } else {
        return -1;
      }
    }

    if (array[mid1] === key) return mid1;
    else if (array[mid2] === key) return mid2;
    else if (key < array[mid1]) {
      right = mid1 - 1;
    } else if (key > array[mid2]) {
      left = mid2 + 1;
    }
  }
  return -1;
};
let result = TernarySearch([67], key);
console.log(result);
