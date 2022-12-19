// Kata Link: https://www.codewars.com/kata/58b1ae711fcffa34090000ea/train/javascript

function door(events) {
  let arr = [];
  let i = 0;
  let state = false;

  for (let key of events) {
    if (key === "P") state = !state;
    if (key === "O") state = null;

    // Closing gate only (Obstacle)
    if (state === null) {
      i === 0 ? arr.push(i) : arr.push(i-- - 1);
    }

    // on button Click: Open when close, pause while opening or closing, close when open

    // if (state === true) {
    //   if (i < 5) {
    //     arr.push(i++ + 1);
    //   } else arr.push(i);
    // } else arr.push(i)
  }
  return arr.join("");
}

console.log(door("P...O"));
console.log(door("P.P...."));
console.log(door("P....."));
// console.log(door("P..P...P..."));
// console.log(door("P......P......"));
// console.log(door("P....." + ".".repeat(10)));
// console.log(door("..P...O"));
