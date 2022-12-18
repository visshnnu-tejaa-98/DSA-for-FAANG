// let array = [20, 40, 60, 80, 90, 120, 140, 160, 190];
// let target = 210;
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 10;

const printPairs = (array, target) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let key = target - array[i];
    let left = i;
    let right = array.length - 1;
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (array[mid] === key) {
        result.push([array[mid], key]);
        left = mid + 1;
      } else if (array[mid] < key) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  if (result.length) {
    return result;
  } else {
    return -1;
  }
};

console.log(printPairs(array, target));
