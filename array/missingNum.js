const arr = [1, 2, 3, 4, 5, 7, 8];
const n = arr.length + 1;
let sum = 0;
for (let el of arr) {
  sum += el;
}
const missingNum =  (n * (n + 1))/ 2 - sum ;

console.log(missingNum);
