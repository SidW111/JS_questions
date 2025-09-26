let outterStr = ""
let innerStr = ""
for(let i=1; i<5;i++){
    outterStr += i;
    for(let i=1;i<5;i++){
       innerStr += i;
    }
    console.log(innerStr)
    
    innerStr = ''
}
console.log(outterStr)

