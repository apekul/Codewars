// Kata Link: https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript

// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.
// For example:
// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

function smaller(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let n = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        n++;
      }
    }
    result.push(n);
  }
  return result;
}

// Best practise:
// const smaller = nums => nums.map((v,i) => nums.slice(i).filter(y => v > y).length)

console.log(smaller([5, 4, 3, 2, 1]));
console.log(smaller([1, 2, 0]));
console.log(smaller([1, 2, 3]));
