let charCode = "A".charCodeAt(0);
for (let i = 0; i < 5; i++) {
  let inner = "";
  for (let j = 0; j < i + 1; j++) {
    inner += String.fromCharCode(charCode) + " ";
  }
  console.log(inner);
  charCode++;
}

//A
//BB
//CCC
//DDDD
//EEEEE
