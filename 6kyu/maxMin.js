// Kata Link: https://www.codewars.com/kata/59c0cd4f46038781010000ac
// Write two functions max and min which returns the maximum and minimum value of the argument passed into them respectively.

// Example
// max(1,2,3,4) //returns 4
// max(1,2,3,['4']) //returns 4; note it returned 4 not '4'
// max(1,2,[3,4]) //returns 4
// max(1,2,[3,[4]]) //returns 4
// max(1,2,[3,['4r']]) //returns NaN
// max([[],[-4]]) // returns -4
// max() or max([]) //returns 0
// And so goes for min

// Further Instructions
// functions will take any number of arguments
// Arrays of numbers can be to any depth
// You can't use Math.max, Math.min, and require
// If one of the arguments can not be evaluated to a number, return NaN

function max(...arr) {
  let array = arr
    .toString()
    .split(",")
    .map((v) => Number(v));
  let num = array.some((value) => isNaN(value));
  if (num) {
    return NaN;
  }
  return array.sort((a, b) => b - a)[0];
}

function min(...arr) {
  let array = arr
    .toString()
    .split(",")
    .map((v) => Number(v));
  let num = array.some((value) => isNaN(value));
  if (num) {
    return NaN;
  }
  return array.sort((a, b) => a - b)[0];
}

// console.log(max([1,2,3,NaN]));

// console.log(max([[[[[1]]]]]));
// console.log(max(1, 2, 3, ["4"]));
// console.log(max(1, 2, [3, 4]));
// console.log(max(1, 2, [3, [4]]));
// console.log(max(1, 2, [3, ["4r"]]));
// console.log(max([[], [-4]]));
// console.log(max([[], []]));
// console.log(max([[], [-8699]]));
// console.log(max(1, [-8699]));
// console.log(max([[["1r"], "2779"]]));

// console.log(max([8826], -8699));
// console.log(min(1, 2, 3, 4));
// console.log(min(1,-8699));
