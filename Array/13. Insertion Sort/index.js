let array = [75, 90, 100, 95, 85, 80];

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j;
    for (j = i - 1; j >= 0 && key < array[j]; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = key;
  }
  return array;
};

console.log(insertionSort(array));
