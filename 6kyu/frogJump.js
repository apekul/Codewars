// Kata Link: https://www.codewars.com/kata/536950ffc8a5ca9982001371/train/javascript

// You have an array of integers and have a frog at the first position
// [Frog, int, int, int, ..., int]
// The integer itself may tell you the length and the direction of the jump

// For instance:
//  2 = jump two indices to the right
// -3 = jump three indices to the left
//  0 = stay at the same position
// Your objective is to find how many jumps are needed to jump out of the array.

// Return -1 if Frog can't jump out of the array

// Example:
// array = [1, 2, 1, 5];
// jumps = 3  (1 -> 2 -> 5 -> <jump out>)

function solution(a) {
  var c = 0,
    i = 0;

  while (typeof a[i] !== "undefined") {
    c++;
    i += a[i];

    if (c > a.length) {
      return -1;
    }
  }

  return a.length ? c : -1;
}
console.log(solution([1, 2, 2, -1]));
console.log(solution([1, 2, 1, 5]));
console.log(solution([1, 1, 1, 1]));
console.log(solution([1, -1]));
