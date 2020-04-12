/* https://codewars.com/kata/esrever */

function reverse(array) {
  const reversedArray = Array(array.length);
  let i = 0, j = array.length;
  for (i, j; j > 0; ++i, --j) {
    reversedArray[i] = array[j - 1];
  }
  return reversedArray;
}
