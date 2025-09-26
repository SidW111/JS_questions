

for(let i=0;i<5;i++){

    let num= 1;
    let inner = '';
    for(let j=0;j<i+1;j++){
        inner += num
        num++
    }
    console.log(inner)
}

// 1
// 12
// 123
// 1234
// 12345