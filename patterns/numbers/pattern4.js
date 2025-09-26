let num = 1;

for (let i = 1; i < 4; i++) {
  let inner = "";
  for (let i = 1; i < 4; i++) {
    inner += num + " ";
    num++;
  }
  console.log(inner);
}
