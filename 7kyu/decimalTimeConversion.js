// Kata Link: https://www.codewars.com/kata/6397b0d461067e0030d1315e/train/javascript

// Write two functions, one that converts standard time to decimal time and one that converts decimal time to standard time.
// One hour has 100 minutes (or 10,000 seconds) in decimal time, yet its duration is the same as in standard time. Thus a decimal minute consists of 36 standard seconds, which is 1/100
// of an hour.
// Working time is usually rounded to integer decimal minutes. Thus one standard minute equals 0.02 decimal hours, while two standard minutes equal 0.03 decimal hours and so on.
// toIndustrial(time) should accept either the time in minutes as an integer or a string of the format "h:mm". Minutes will always consist of two digits in the tests (e.g., "0:05");
// hours can have more. Return a double that represents decimal hours (e.g. 1.75 for 1h 45m). Round to a precision of two decimal digits - do not simply truncate!
// toNormal(time) should accept a double representing decimal time in hours. Return a string that represents standard time in the format "h:mm".
// There will be no seconds in the tests. We'll neglect them for the purpose of this kata.

function toIndustrial(time) {
  if (!Number.isInteger(time)) {
    let [h, m] = time.split(":");
    let result = +h + +m / 60;
    return +result.toFixed(2);
  }
  return +(time / 60).toFixed(2);
}

function toNormal(time) {
  let a = time * 60;
  let m = Math.round(a % 60);
  let result = `${Math.floor(a / 60)}:${m < 10 ? "0" + m : m}`;
  return result;
}
console.log(toNormal(105.14));
