const median = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let k = 0;
  let n1 = arr1.length;
  let n2 = arr2.length;
  let result = [];
  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < n1) {
    result.push(arr1[i]);
    i++;
  }
  while (j < n2) {
    result.push(arr2[j]);
    j++;
  }
  return Math.floor(result.length / 2);
};

let arr1 = [1, 6, 7];
let arr2 = [3, 5];
let result = median(arr1, arr2);
console.log(result);
