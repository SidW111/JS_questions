console.log('start');

const promise = new Promise(resolve => {
  console.log('promise executor');
  setTimeout(() => {
    console.log('timeout inside promise');
    resolve('promise resolved');
  }, 0);
});

promise.then(res => {
  console.log(res);
});

setTimeout(() => {
  console.log('end');
}, 0);

console.log('middle');

//wronggg
//start 
//middle
//end
//promise executer
//time out inside promise
//promise resolved

//start
//promise executer
//middle
//timeout inside promise
//promise resolved
//end
