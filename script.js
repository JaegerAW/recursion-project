const array1 = [8, 20, -2, 4, -6];
//
const mergeSort = (array) => {
  //mergeSort splits the array down to single elements, merge compares and sorts them when they're single element when we can do < > operation on them.
  if (array.length < 2) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else if (left[0] >= right[0]) {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
};

const fibs = (num) => {
  const array = [0, 1];
  for (let i = 2; i < num; i++) {
    array.push(array[i - 2] + array[num - 1]);
  }
  return array;
};

const fibsRec = (num) => {
  if (num === 0) {
    return;
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  }

  const fibs = fibsRec(num - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  return fibs;
};
