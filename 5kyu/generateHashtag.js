// Kata Link: https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  let regEx = str.replace(/\s+/g, "").length;
  return regEx !== 0 && regEx < 140
    ? "#" +
        str
          .replace(/\s+/g, " ")
          .split(" ")
          .map((v) => v[0].toUpperCase() + v.slice(1))
          .join("")
    : false;
}
console.log(generateHashtag(""));
console.log(generateHashtag(" "));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag("Codewars"));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
console.log(generateHashtag("code" + " " + "wars"));
