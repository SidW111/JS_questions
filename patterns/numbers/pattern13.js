let num = 5;

for (let i = 0; i < num; i++) {
  let inner = "";
  for (let j = 0; j < i; j++) {
    inner += " ";
  }
  for (let j = 0; j < num - i; j++) {
    inner += i + 1;
  }
  console.log(inner);
}

// 11111
//  2222
//   333
//    44
//     5
