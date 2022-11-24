// Kata Link: https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.

function sumStrings(a, b) {
  return [a, b]
    .map((v) => (v.length > 20 ? BigInt(v) : Number(v)))
    .reduce((acc, curr) => acc + curr)
    .toString();
}

console.log(sumStrings("123", "456"));
console.log(sumStrings("1", "2"));
console.log(
  sumStrings("712569312664357328695151392", "8100824045303269669937")
);
