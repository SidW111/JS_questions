//Kadanes algorithm

//it states that if a big negative number is added into a small positive number
//then the result would be negative only
//so if the currSum is a negative number then re initialize the currSum
//and save the ans in the max SUm

let arr = [5, 4, -1, 7, 8];
let n = arr.length;

//BRUTE FORCE

let MS = 0;
for (let st = 0; st < n; st++) {
  let CS = 0;
  for (let end = st; end < n; end++) {
    CS += arr[end];
    MS = Math.max(MS, CS);
  }
}
console.log(MS);

//TIME COMPLEXITY
//is O(n^2)

//OPTIMIZED APPROACH

let currSum = 0;
let maxSum = -Infinity;
for (let i = 0; i < n; i++) {
  currSum += arr[i];

  maxSum = Math.max(currSum, maxSum);
  if (currSum < 0) {
    currSum = 0;
  }
}
console.log(maxSum);

//TIME COMPLEXITY
//is O(n);
