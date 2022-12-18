let array = [20, 45, 27, 47, 55, 67, 75, 88, 90];
let key = 67;
const binarySearch = (array, left = 0, right = array.length - 1) => {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (left == right) return array[left] === key ? mid : -1;
    if (array[mid] === key) return mid;
    else if (array[mid] < key) return binarySearch(array, mid + 1, right);
    else return binarySearch(array, left, mid - 1);
  }
  return -1;
};
binarySearch([20, 45, 27, 47, 55, 67], 67);
console.log(binarySearch(array));
