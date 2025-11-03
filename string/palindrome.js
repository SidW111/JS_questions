const str = 'nitin';
// let revStr = str.split("").reverse().join("");

// if(str === revStr)return console.log(true) ;
// else return console.log(false)

let revStr = '';

for(let i = str.length - 1; i >=0; i--) {
    revStr += str.at(i);
}

if(str === revStr) console.log(true);
else console.log(false)
