// Kata Link: https://www.codewars.com/kata/5503013e34137eeeaa001648/javascript

// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James.
// Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters.
// Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n) {
  let a = [];
  let b = [];
  if (n <= 0 || n % 2 === 0) return null;
  for (let i = 1; i <= n; i += 2) {
    a.push(i);
    b.push(i);
  }
  let result = a.concat(b.reverse());
  result.splice(result.indexOf(Math.max(...result)), 1);

  return result
    .map((v) => `${(v = "*".repeat(v))}`)
    .map((v) => "s".repeat((n - v.length) / 2) + v + "\n")
    .join("")
    .replace(/s/g, " ");
}

// console.log(diamond(5));

// function diamond (n) {
//   if (n <= 0 || n % 2 === 0) return null
//   str = ''
//   for (let i = 0; i < n; i++) {
//     let len = Math.abs((n-2*i-1)/2)
//     console.log(len)
//     str += ' '.repeat(len)
//     str += '*'.repeat(n-2*len)
//     str += '\n'
//   }
//   return str
// }
