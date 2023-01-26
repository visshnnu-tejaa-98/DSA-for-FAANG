// This is not a Boyer-Moore Algorithm
// Time complexity : O(n)
// space complexity : O(n)
let array = [2, 2, 1, 1, 1, 2, 2];

let obj = {};

for (let i = 0; i < array.length; i++) {
  if (!obj[array[i]]) {
    obj[array[i]] = 1;
  } else {
    obj[array[i]] = obj[array[i]] + 1;
  }
}

for (let key in obj) {
  if (obj[key] > array.length / 2) {
    console.log(obj[key]);
  }
}

console.log(obj);
