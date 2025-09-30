let n = 101010;

let ans = 0;
let pow = 1;

while(n>0){
    let rem = Math.floor(n%10)
    ans += (rem*pow)
    n = Math.floor(n/10);
    pow = pow*2;
}
console.log(ans)