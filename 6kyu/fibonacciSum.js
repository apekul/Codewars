// Kata Link: https://www.codewars.com/kata/55688b4e725f41d1e9000065/train/javascript

// Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed to your function.
// Or, in other words, sum all the even Fibonacci numbers that are lower than the given number n
// (n is not the nth element of Fibonnacci sequence) without including n.

// The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values.
// The series starts with 0 and 1:

// 0 1 1 2 3 5 8 13 21...

// For example:
// fibonacci(0)==0
// fibonacci(33)==10
// fibonacci(25997544)==19544084

// function fibonacci(max) {
//   let arr = [];
//   const nth = (n) => (n < 2 ? n : nth(n - 1) + nth(n - 2));

//   for (let i = 0; i < max; i++) {
//     if(nth(i) < max && nth(i) % 2 === 0){
//         arr.push(nth(i));
//     }
//   }

//   return arr.reduce((acc,curr) => acc+curr ,0)
// }

function fibonacci(max) {
  let arr = [],
    n1 = 0,
    n2 = 0,
    nextTerm;
  for (let i = 1; i < max; i++) {
    console.log(n1);
  }
  return;
}

console.log(fibonacci(33));
// console.log(fibonacci(25997544));
