function solution(number) {
  let result = [];
  let value = number;
  let arr = [
    { num: 1, string: "I" },
    { num: 5, string: "V" },
    { num: 10, string: "X" },
    { num: 50, string: "L" },
    { num: 100, string: "C" },
    { num: 500, string: "D" },
    { num: 1000, string: "M" },
  ];
  // reszta z dzielenia number/arr.num
  let check = arr.filter((v) => v.num <= number).reverse();
  console.log(check);
  for (let i = value; i < number; i++) {
    console.log(i);
  }
  return result;
}

// console.log(solution(10));
// console.log(solution(2));
console.log(solution(4));
// console.log(solution(5));
// console.log(solution(6));
// console.log(solution(7));
// console.log(solution(8));
// console.log(solution(3));
