let  num = 1;

for(let i=0;i<4;i++){
    let inner = ''
    for(let j=0;j<i+1;j++){
        inner += num + " ";
        num++
    }
    console.log(inner)
}

//FLoyds triangle pattern
// 1 
// 2 3 
// 4 5 6
// 7 8 9 10