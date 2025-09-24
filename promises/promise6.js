async function myAsyncFunction() {
  console.log('A');
  await new Promise(resolve => {
    console.log('B');
    setTimeout(() => {
      console.log('C');
      resolve();
    }, 0);
  });
  console.log('D');
}

console.log('E');
myAsyncFunction();
console.log('F');

async function myAsyncFunction() {
  console.log('A');
  await new Promise(resolve => {
    console.log('B');
    setTimeout(() => {
      console.log('C');
      resolve();
    }, 0);
  });
  console.log('D');
}

console.log('E');
myAsyncFunction();
console.log('F');

//E
//A
//B
//F
//C
//D