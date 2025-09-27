let n = 5;

for (let i = 0; i < n; i++) {
  let inner = "";

  for (let j = 0; j < n - i - 1; j++) {
    inner += " ";
  }
  inner += "*";

  if (i != 0) {
    for (let j = 0; j < 2 * i - 1; j++) {
      inner += " ";
    }
    inner += "*";
  }
  console.log(inner);
}

for (let i = 0; i < n - 1; i++) {
  let inner = "";
  for (let j = 0; j < i + 1; j++) {
    inner += " ";
  }
  inner += "*";
  if (i != n - 2) {
    for (let j = 0; j < 2 * (n - i) - 5; j++) {
      inner += " ";
    }
    inner += "*";
  }
  console.log(inner);
}

//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *