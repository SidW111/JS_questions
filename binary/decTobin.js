let n = 50;

let ans = 0;
let pow = 1;

while (n > 0) {
  let rem = Math.floor(n % 2);
  n = Math.floor(n / 2);
  ans += rem * pow;
  pow = pow * 10;
}
console.log(ans);
