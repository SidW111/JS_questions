let n = 4;

for (let i = 0; i < n; i++) {
  let inner = "";

  for (let j = 0; j < i + 1; j++) {
    inner += "*";
  }

  for (let j = 0; j < 2 * (n - i) - 2; j++) {
    inner += " ";
  }

  for (let j = 0; j < i + 1; j++) {
    inner += "*";
  }
  console.log(inner);
}

for (let i = 0; i < n; i++) {
  let inner = "";

  for (let j = i; j < n; j++) {
    inner += "*";
  }

  for (let j = 0; j < 2 * i; j++) {
    inner += " ";
  }

  for (let j = i; j < n; j++) {
    inner += "*";
  }
  console.log(inner);
}
// *      *
// **    **
// ***  ***
// ********
// ********
// ***  ***
// **    **
// *      *