for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('setTimeout', i), 0);
  Promise.resolve().then(() => console.log('Promise', i));
}

//promise 3
//promise 3
//promise 3
//setTimeout 3
//setTimeout 3
//setTimeout 3