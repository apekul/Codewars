// Kata Link: https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript
// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
// IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

function isValidIP(str) {
  let a = str
    .split(".")
    .map(
      (a) =>
        /^\d+$/.test(a) && a >= 0 && a <= 255 && !(a.length > 1 && a[0] == 0)
    );
  return a.length == 4 && a.reduce((acc, curr) => acc && curr);
}
console.log(isValidIP("0.0.0.0"));
console.log(isValidIP("12.255.56.1"));
console.log(isValidIP("137.255.156.100"));
console.log(isValidIP(""));
console.log(isValidIP("abc.def.ghi.jkl"));
