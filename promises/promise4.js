setTimeout(() => {
  console.log('A');
  setTimeout(() => {
    console.log('B');
  }, 0);
}, 0);

setTimeout(() => {
  console.log('C');
}, 0);

console.log('D');

//D
//A
//C
//B