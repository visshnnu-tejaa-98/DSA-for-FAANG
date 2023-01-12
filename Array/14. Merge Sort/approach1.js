const mergeProcess = (left, right) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = arr.length / 2;
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeProcess(left, right);
};

let arr = [10, 20, 30, 40, 11, 21, 31, 41];
let i = 0;
let j = arr.length - 1;
let result = mergeSort(arr, i, j);
console.log(result);
