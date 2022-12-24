// Kata Link: https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8/javascript

// Remove the parentheses
// In this kata you are given a string for example:

// "example(unwanted thing)example"

// Your task is to remove everything inside the parentheses as well as the parentheses themselves.
// The example above would return:

// "exampleexample"

// Notes
// Other than parentheses only letters and spaces can occur in the string.
// Don't worry about other brackets like "[]" and "{}" as these will never appear.
// There can be multiple parentheses.
// The parentheses can be nested.

function removeParentheses(s) {
  return s.includes("(") ? removeParentheses(s.replace(/\([^()]*?\)/g, "")) : s;
}
console.log(removeParentheses("example(unwanted thing)example"));
console.log(removeParentheses("example (unwanted thing) example"));
console.log(removeParentheses("a (bc d)e"));
console.log(removeParentheses("a(b(c))"));
console.log(
  removeParentheses("hello example (words(more words) here) something")
);
