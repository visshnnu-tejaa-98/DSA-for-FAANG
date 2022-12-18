let array = [20, 40, 60, 80, 90, 120, 140];
let target = 210;

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] + array[j] === target) {
      console.log(array[i], array[j]);
    }
  }
}

// Time Complexity :O(n*n)
