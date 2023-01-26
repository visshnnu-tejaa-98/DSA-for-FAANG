// This is a Boyer-Moore Algorithm
// Time complexity : O(n)
// space complexity : O(1)
const FindMajorityElement = (arr) => {
  let candidate = null;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (candidate === null) {
      candidate = arr[0];
      count = count + 1;
    }
    if (candidate == arr[i]) {
      count = count + 1;
    } else if (candidate !== arr[i]) {
      count = count - 1;
    }
    if (count == 0) {
      candidate = arr[i];
      count = count + 1;
    }
  }
  return candidate;
};

let array = [2, 2, 1, 1, 1, 2, 2];
let result = FindMajorityElement(array);
console.log(result);
