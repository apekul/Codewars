// Kata Link: https://www.codewars.com/kata/522551eee9abb932420004a0/train/javascript

// I love Fibonacci numbers in general, but I must admit I love some more than others.
// I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

// For example:
//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.
// For reference, the first two numbers in the Fibonacci sequence are 0 and 1,
// and each subsequent number is the sum of the previous two.

function nthFibo(n) {
  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
  }
  return result[n - 1];
}

console.log(nthFibo(1));
console.log(nthFibo(2));
console.log(nthFibo(3));
console.log(nthFibo(4));
