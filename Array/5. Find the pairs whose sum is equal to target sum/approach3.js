// let array = [20, 40, 60, 80, 90, 120, 140];
// let target = 210;
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 10;

const printPairs = (array, target) => {
  let left = 0;
  let right = array.length - 1;
  let result = [];
  while (left < right) {
    if (array[left] + array[right] > target) {
      right--;
    } else if (array[left] + array[right] < target) {
      left++;
    } else {
      result.push([array[left], array[right]]);
      left++;
    }
  }
  if (result.length) {
    return result;
  } else {
    return -1;
  }
};

console.log(printPairs(array, target));

// Time Complexity :O(n)
