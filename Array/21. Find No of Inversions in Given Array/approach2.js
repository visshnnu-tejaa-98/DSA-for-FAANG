// Divide and Conquer Approach
// Time Complexity : O(N * log n)
// Space Complexity : O(n)

const swaps = (nums, p, mid, q) => {
  let n1 = mid - p + 1;
  let n2 = q - mid;
  let left = [];
  let right = [];
  let result = nums;

  for (let i = p; i <= mid; i++) {
    left.push(nums[i]);
  }
  for (let i = mid + 1; i <= q; i++) {
    right.push(nums[i]);
  }

  let i = 0;
  let j = 0;
  let k = p;
  let swaps = 0;

  while (i < n1 && j < n2) {
    if (left[i] < right[j]) {
      result[k] = left[i];
      i++;
      k++;
    } else {
      result[k] = right[j];
      j++;
      k++;
      swaps = swaps + (mid + 1) - (p + i);
    }
  }
  while (i < n1) {
    result[k] = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    result[k] = right[j];
    j++;
    k++;
  }
  return swaps;
};

const findInversions = (nums, p, q) => {
  let count = 0;
  if (p < q) {
    let mid = Math.floor(p + (q - p) / 2);
    count = count + findInversions(nums, p, mid);
    count = count + findInversions(nums, mid + 1, q);
    count = count + swaps(nums, p, mid, q);
  }
  return count;
};

// const nums = [70, 50, 60, 10, 20, 30, 80, 15];
const nums = [1, 20, 6, 4, 5];
let p = 0;
let q = nums.length - 1;
let result = findInversions(nums, p, q);
console.log(result);
