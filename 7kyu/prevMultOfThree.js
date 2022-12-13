// Kata Link: https://www.codewars.com/kata/61123a6f2446320021db987d/train/javascript

// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.
// Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.
// Examples
// 1      => null
// 25     => null
// 36     => 36
// 1244   => 12
// 952406 => 9

// const prevMultOfThree = (n) => {
//   let stringNum = n.toString();
//   let length = stringNum.length
//   for (let i = 0; i <= length; i++) {
//     if(stringNum % 3 === 0) break;
//     if(stringNum.slice(0,-1).length === 0) return null
//     stringNum = stringNum.slice(0,-1)
//   }
//    return Number(stringNum)
// };

const prevMultOfThree = (n) => {
  if (n === 0) return null;
  return n % 3 === 0 ? n : prevMultOfThree(+n.toString().slice(0, -1));
};

console.log(prevMultOfThree(1));
console.log(prevMultOfThree(25));
console.log(prevMultOfThree(36));
console.log(prevMultOfThree(1244));
console.log(prevMultOfThree(952406));
