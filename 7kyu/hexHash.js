// Kata Link: https://www.codewars.com/kata/5ab363ff6a176b29880000dd/javascript
// Complete the function that accepts a valid string and returns an integer.

// Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code,
//  then the result should be the sum of the numbers in the hex strings (ignore letters).

// Examples
// "Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
// "Hello, World!"  ==> 91
// "Forty4Three"    ==> 113

function hexHash(code) {
  return code
    .split("")
    .map((v) => v.codePointAt().toString(16))
    .join("")
    .match(/\d/g)
    .reduce((acc, curr) => +acc + +curr);
}

console.log(hexHash("Hello, World!"));
console.log(hexHash("Yo"));
