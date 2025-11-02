const str = "siddhant";
let vowels = "AEIOUaeiou"
let count = 0;
for (let ch of str) {
if(vowels.includes(ch)){
    count++
}
}
console.log(count);
