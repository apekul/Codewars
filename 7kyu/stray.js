// Kata Link: https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// if there is no duplicate value, return undefined
function stray(numbers) {
  return numbers
    .filter((v) => numbers.indexOf(v) == numbers.lastIndexOf(v))
    .pop();
}

// XOR operator use case:
// function stray(numbers) {
//   return numbers.reduce((acc, curr) => acc ^ curr, 0);
// }

// 0  0  0 0 0 0
// 32 16 8 4 2 1

// [1,1,2]
// 0001 = 1
// 0020 = 2
//
// 1 ^ 1 = 0 // 0001 ^ 0001 = 0000
// 0 ^ 2 = 2 // 0000 ^ 0010 = 0010  <== result

// [10, 3, 20, 10, 3, 20, 10]
// 10 ^ 3 = 9
// 9 ^ 20 = 29
// 29 ^ 10 = 23
// 23 ^ 3 = 20
// 20 ^ 20 = 0
// 0 ^ 10 = 10 <== result

console.log(stray([1, 1, 2]));
console.log(stray([2, 1, 1]));
console.log(stray([1, 2, 1]));
console.log(stray([1, 2, 2]));
console.log(stray([1, 2, 3]));
console.log(stray([10, 3, 20, 10, 3, 20, 10]));
