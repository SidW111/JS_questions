//the function returns the sum of the digit of the given number

let digitSum = 0;
function Dig(n) {
  while (n > 0) {
    let lastDigit = n % 10;
    n = n / 10;
    digitSum += lastDigit;
  }
  let num = console.log(Math.floor(digitSum));
  return num;
}

Dig(125);
