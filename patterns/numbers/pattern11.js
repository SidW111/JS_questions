let num = 4;

for (let i = 0 ; i<num; i++) {
  let inner = "";
  for (let j = i + 1; j > 0; j--) {
    inner += j + " ";

  }
  console.log(inner);
}
