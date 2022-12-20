// Kata Link: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/javascript
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  return s
    .split(" ")
    .map((v) => v.length)
    .sort((a, b) => a - b)[0];
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
