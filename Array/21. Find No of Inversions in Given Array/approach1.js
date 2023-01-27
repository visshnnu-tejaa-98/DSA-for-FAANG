// Brute Force Approach
// Time Complexity : O(N^2)
// Space Complexity : O(1)
const findInversions = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (i < j && nums[i] > nums[j]) {
        count++;
      }
    }
  }
  return count;
};

const nums = [70, 50, 60, 10, 20, 30, 80, 15];
let result = findInversions(nums);
console.log(result);
