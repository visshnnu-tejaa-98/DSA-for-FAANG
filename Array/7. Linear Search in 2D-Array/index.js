let array = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let key = 5;

// Time Complexity : O(m*n)
const linearSearch = (array, key) => {
  let loc = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === key) {
        loc.push(i, j);
      }
    }
  }
  if (loc.length) {
    return loc;
  } else {
    return -1;
  }
};

console.log(linearSearch(array, key));
