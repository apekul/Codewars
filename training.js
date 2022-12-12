function Movies(open, close, length) {
  let arr = [];
  if (open > close) close += 24;
  for (let i = open * 60; i + length <= close * 60; i += length + 15) {
    arr.push([Math.floor(i / 60) % 24, i % 60]);
  }
  return arr;
}

console.log(Movies(13, 23, 60));
console.log(Movies(16, 3, 75));
