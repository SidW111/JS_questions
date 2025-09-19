const promise = new Promise((resolve,reject)=>{resolve()}).then(()=>console.log(1))

console.log('a')

promise.then(()=>console.log(2))

console.log('b')

setTimeout(()=>{console.log('h')},0)

promise.then(()=>console.log(3))

//a b 1 2 3 h