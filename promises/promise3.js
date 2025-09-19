async function printNumbers() {
  console.log('one');
  await new Promise(resolve => {
    console.log('two');
    setTimeout(() => {
      console.log('three');
      resolve();
    }, 0);
  });
  console.log('four');
}

console.log('zero');
printNumbers();
console.log('five');

//zero
//one
//two
//five
//three
//four