const partition = (arr, p, q) => {
  let pivot = arr[p];
  let i = p;
  for (j = i + 1; j < arr.length; j++) {
    if (arr[j] < pivot) {
      i = i + 1;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[i];
  arr[i] = arr[p];
  arr[p] = temp;
  return i;
};

const quickSort = (arr, p, q) => {
  if (p < q) {
    let mid = partition(arr, p, q);
    quickSort(arr, p, mid - 1);
    quickSort(arr, mid + 1, q);
  }
  return arr;
};

let array = [50, 40, 70, 10, 30, 90, 45, 67, 79];
let p = 0;
let q = array.length - 1;
let result = quickSort(array, p, q);
console.log(result);
