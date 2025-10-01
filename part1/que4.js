let nums = [1, 2, 3, 4, 5, 55, 5];
let largest = -Infinity;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > largest) {
    largest = nums[i];
  }
}
console.log(largest);
