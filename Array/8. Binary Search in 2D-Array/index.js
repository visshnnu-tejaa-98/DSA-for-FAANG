let array = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let key = 5;

// Time Complexity : O(log mn)
const BinarySearch = (array, key) => {
  let left = 0;
  let m = array.length;
  let n = array[0]?.length;
  let right = m * n - 1;
  let loc;
  if (m === 0) {
    return -1;
  }
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    // To get row number
    let mid_row = Math.floor(mid / n);
    // to get column number
    let mid_col = mid % n;
    if (array[mid_row][mid_col] === key) {
      loc = [mid_row, mid_col];
      left = mid + 1;
    } else if (array[mid_row][mid_col] < key) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (loc) {
    return loc;
  } else {
    return -1;
  }
};

console.log(BinarySearch(array, key));
