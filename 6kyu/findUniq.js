// Kata Link: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  // return +arr.map(v => arr.indexOf(v) === arr.lastIndexOf(v) ? v : '').join('')
  return +arr.reduce((acc, curr) =>
    arr.indexOf(curr) === arr.lastIndexOf(curr) ? curr : acc
  );
}
console.log(findUniq([1, 0, 0]));
console.log(findUniq([0, 1, 0]));
console.log(findUniq([1, 0, 1]));
