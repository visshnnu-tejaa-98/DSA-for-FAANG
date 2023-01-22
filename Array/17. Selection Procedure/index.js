// Find the kth smallest number in the given array

const partition = (arr, p, q) => {
  let pivot = arr[p];
  let i = p;
  for (let j = i + 1; j <= q; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i], arr[p]] = [arr[p], arr[i]];
  return i;
};

const selectionProcedure = (arr, k, p, q) => {
  if (p === q && p === k - 1) return arr[p];
  if (p < q) {
    let m = partition(arr, p, q);
    if (m === k - 1) return arr[m];
    else if (m < k - 1) return selectionProcedure(arr, k, m + 1, q);
    else return selectionProcedure(arr, k, p, m - 1);
  }
  return arr[arr.length - 1];
};

let array = [3, 2, 1, 5, 6, 4];
let p = 0;
let q = array.length - 1;
let k = 2;
let result = selectionProcedure(array, k, p, q);
console.log(result);
