let array = [20, 45, 27, 27, 55, 67, 75, 88, 90];
let key = 67;

const linearSearch = (array, key) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch(array, key));
