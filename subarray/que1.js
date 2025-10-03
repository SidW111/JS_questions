const arr = [1, 2, 3, 4, 5];

for (let st = 0; st <= arr.length; st++) {
  for (let end = st; end <= arr.length; end++) {
    for (let i = st; i < end; i++) {
      console.log(arr[i]);
    }
    console.log(" ");
  }
  console.log(" ");
}
