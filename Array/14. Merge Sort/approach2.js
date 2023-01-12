const mergeProcess = (arr, i, mid, j) => {
  let left = [];
  let right = [];
  let result = [];

  let n1 = mid - i + 1;
  let n2 = j - mid;

  for (let m = 0; m < n1; m++) {
    left.push(arr[m + i]);
  }
  for (let m = 0; m < n2; m++) {
    right.push(arr[mid + 1 + m]);
  }
  for (let i = 0; i < arr.length; i++) {
    result.push(0);
  }

  let p = 0;
  let q = 0;
  let k = i;

  while (p < n1 && q < n2) {
    if (left[p] < right[q]) {
      result[k] = left[p];
      p++;
      k++;
    } else {
      result[k] = right[q];
      q++;
      k++;
    }
  }
  while (p < n1) {
    result[k] = left[p];
    p++;
    k++;
  }
  while (q < n2) {
    result[k] = right[q];
    q++;
    k++;
  }
  return result;
};

const mergeSort = (arr, i, j) => {
  if (i < j) {
    let mid = Math.floor(i + (j - i) / 2);
    mergeSort(arr, 0, mid);
    mergeSort(arr, mid + 1, j);
    mergeProcess(arr, i, mid, j);
  }
  return arr;
};

let arr = [10, 20, 30, 40, 11, 21, 31, 41];
let i = 0;
let j = arr.length - 1;
let result = mergeSort(arr, i, j);
console.log(result);
