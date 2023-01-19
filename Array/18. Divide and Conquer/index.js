/* Get the smallest and largest element */
const minMax = (arr, i, j) => {
  let min, max;
  if (i === j) {
    min = arr[i];
    max = arr[j];
  } else if (i === j - 1) {
    if (arr[i] < arr[j]) {
      min = arr[i];
    } else {
      min = arr[j];
    }
  } else {
    let mid = Math.floor(i + (j - i) / 2);
    let minMax1 = minMax(arr, i, mid);
    let minMax2 = minMax(arr, mid + 1, j);
    let min1 = minMax1[0];
    let max1 = minMax1[1];
    let min2 = minMax2[0];
    let max2 = minMax2[1];
    if (min1 < min2) {
      min = min1;
    } else {
      min = min2;
    }
    if (max1 > max2) {
      max = max1;
    } else {
      max = max2;
    }
  }
  return [min, max];
};

let arr = [75, 45, 95, 50, 60, 29, 32];
// let arr = [75, 45, 32, 55];
let i = 0;
let j = arr.length - 1;
console.log(arr, i, j);
let result = minMax(arr, i, j);
console.log(result);
