//calculate ncr binomial coefficient for n & r

//FORMULA
//ncr = {n!/r! * (n-r)!}

function Fact(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

function ncr(n,r){

    let nFact = Fact(n);
    let rFact = Fact(r);
    let nMr = Fact(n-r);

    let form = nFact/(rFact * nMr)

    return form;

}

console.log(ncr(8,2))
