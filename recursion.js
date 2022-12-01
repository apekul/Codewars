// 1 wypisz pierwsze 128 liczb naturalnych
// function Natural(n) {
//
//   return console.log(n);
// }
// Natural(128);

// 1 wypisz pierwsze 128 liczb pierwszych 2,3,5,7,11,13...

// function isPrime(n, counter) {
//   counter = counter || 2;
//   if (n <= 2) return n == 2 ? true : false;
//   if (n % 1 == 0) return false;
//   if (i * i > n) return true;
//   return isPrime(n, counter + 1);
// }

// console.log(isPrime(5));

// Using Loop
// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// function listPrime(num) {
//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }
// }
// listPrime(5);

// 2: dynamicznie narysuj macierz diagonalna w ktorej przekatna to inkrementacja od 1 do wartosci n podanej przez uzytkownika
// e.g.
// n = 1
// 1
// n = 2
// 10
// 02
// n=3
// 100
// 020
// 003
// itd.
