// Kata Link: https://www.codewars.com/kata/63a8e2a89803f2a5c0a813f7/train/javascript

function fractionToPeriodic(n, d) {
  function go(n) {
    let r = "";
    for (
      let seen = new Map();
      n;
      seen.set(n, r.length), n *= 10, r += String((n / d) | 0), n %= d
    )
      if (seen.has(n))
        return r.slice(0, seen.get(n)) + "(" + r.slice(seen.get(n)) + ")";
    return r;
  }
  return n % d ? `${(n / d) | 0}.${go(n % d)}` : `${(n / d) | 0}`;
}
console.log(fractionToPeriodic(123, 65));
// function fractionToPeriodic(n, d) {
//   function go(n) {
//     let r = "";
//     for (
//       let seen = new Map();
//       n;
//       seen.set(n, r.length), n *= 10, r += String((n / d) | 0), n %= d
//     )
//       if (seen.has(n))
//         return r.slice(0, seen.get(n)) + "(" + r.slice(seen.get(n)) + ")";
//     return r;
//   }
//   return n % d ? `${(n / d) | 0}.${go(n % d)}` : `${(n / d) | 0}`;
// }

// function fractionToPeriodic(n, d) {
//   let result = (n / d).toString(); // wynik dzielenia 123/65 = 1.8923076923076922
//   let arr = result.split(".")[1]; // wartość dzielenia 123/65 po kropce = 8923076923076922
//   let a = []; // trzyma numery po kropce ktore sie nie powtarzają i nie są na indeksie < 2
//   let b = []; // trzyma całą resztę numerów po kropce (w założeniu te króre sie powtarzają)
//   if (arr === undefined) return result;
//   // sprawdzam czy wynik dzielenia ma wartość po kropce i czy ta wartość jest dłuższa niż 1
//   for (let i = 0; i < arr.length; i++) {
//     if(arr.indexOf(arr[i], i + 1) !== -1){
//       b.push(arr[i])
//     } else  if(arr.indexOf(arr[i]) < 1){
//       a.push(arr[i])
//     }
//     console.log(arr[i])
//     console.log(arr.indexOf(arr[i], i + 1))
//     console.log(Boolean(-1))
//     // wykonuję pętlę o długości liczby po kropce otrzymanej z wyniku dzielenia
//     // if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
//     //   // sprawdzam czy pierwszy index jest rowny ostatniemu ale tylko pierwsze 2 elementy
//     //   a.push(arr[i]); // dodaje wynik do zmiennej a
//     // } else {
//     //   b.push(arr[i]); // do zmiennej b dodaje reszte liczb az do 6 indeksu
//     // }
//   }
//   return `${result.split("")[0]}.${a.join("")}` + (b.length > 0 ? `(${[...new Set(b)].join("")})` : ''); // zwracam wynik dzielenia pozbywając sie duplikatów i dodając nawiasy
// }
// console.log(fractionToPeriodic(123, 65));

// console.log(fractionToPeriodic(8, 4));
// console.log(fractionToPeriodic(1, 2));
// console.log(fractionToPeriodic(1, 3));
// console.log(fractionToPeriodic(5, 7));
// console.log(fractionToPeriodic(132, 515));
// console.log(fractionToPeriodic(10, 3));
// console.log(fractionToPeriodic(281568, 30000));
// console.log(fractionToPeriodic(1, 80));
// console.log(fractionToPeriodic(99999, 65536));
// console.log(fractionToPeriodic(99999, 78125));
// console.log(fractionToPeriodic(857336, 100000));
