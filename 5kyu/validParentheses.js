// Kata Link: https://www.codewars.com/kata/52774a314c2333f0a7000688/solutions/javascript

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
  let value = parens.split("");
  let num = 0;

  for (let i = 0; i < value.length; i++) {
    if (num < 0) break;
    if (value[i] === "(") {
      num++;
    } else num--;
  }

  return num === 0;
}

console.log(validParentheses("()")); // true
console.log(validParentheses(")(()))")); // false
console.log(validParentheses("")); // false

console.log(validParentheses("())(")); // false
