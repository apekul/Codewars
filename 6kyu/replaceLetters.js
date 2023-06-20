// KATA: https://www.codewars.com/kata/5a4331b18f27f2b31f000085/javascript

// replace the vowel with the nearest left consonant.
// replace the consonant with the nearest right vowel.

function replaceLetters(word) {
  let vovels = ["a", "e", "i", "o", "u"];
  return word
    .split("")
    .map((x) => {
      let char = x.charCodeAt() - 96;
      if (vovels.includes(x)) {
        char -= 1;
        if (char === 0) {
          return "z";
        }
        return String.fromCharCode(char + 96);
      } else {
        let nextVovel = vovels.filter((x) => x.charCodeAt() - 96 > char && x);
        if (nextVovel.length === 0) {
          return "a";
        }
        return nextVovel[0];
      }
    })
    .join("");
}

console.log(replaceLetters("cat"));
console.log(replaceLetters("codewars"));
