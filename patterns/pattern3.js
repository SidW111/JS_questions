let CharCode = "A".charCodeAt(0);
for (let i = 1; i < 4; i++) {
  let inner = "";
  for (let i = 1; i < 4; i++) {
    inner += String.fromCharCode(CharCode) + " ";
    CharCode++;
  }
  console.log(inner);
}


//ABC
//DEF
//GHI