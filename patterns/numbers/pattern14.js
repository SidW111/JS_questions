let n = 4;

for (let i = 0; i < n; i++) {
  let inner = "";

  for (let j = 0; j < n - i - 1; j++) {
    inner += " ";
  }
  for (let j = 1; j <= i + 1; j++) {
    inner += j;
  }
  for (let j = i; j >= 1; j--) {
    inner += j;
  }
  console.log(inner);
}

//    1
//   121
//  12321
// 1234321