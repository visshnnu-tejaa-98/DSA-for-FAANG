let array = [20, 45, 27, 47, 55, 67, 75, 88, 90];
let key = 67;

const TernarySearch = (array, key, left = 0, right = array.length - 1) => {
  while (left <= right) {
    let mid1 = Math.floor(left + (right - left) / 3);
    let mid2 = Math.floor(right - (right - left) / 3);
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
      return TernarySearch(array, key, left, mid1 - 1);
    } else if (key > array[mid2]) {
      return TernarySearch(array, key, mid2 + 1, right);
    }
  }
  return -1;
};
let result = TernarySearch(array, key);
console.log(result);
