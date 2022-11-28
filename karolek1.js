// wypisz pierwsze 128 liczb naturalnych

function Natural(n) {
  n === 1 ? n : Natural(n - 1);
  return console.log(n);
}

Natural(128);
