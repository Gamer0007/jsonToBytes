const fs = require('fs');

const readFile = fs.readFileSync('./telrom.json')
console.log('before buffer', readFile)
const array = JSON.parse(readFile).slice(604, 3904);
console.log(array.length);
delete_0 = array.indexOf(0);

for (var i = 0; i < 137; i++) {

    while (array[i] === 0) {
        array.splice(i, 1);
    }
    console.log(array[i])
}



// prints f, e, d, c, b, a

// console.log([...myString.length]);



// const dataBytes = Buffer.from(array);
// console.log('after buffer', dataBytes);
// fs.writeFileSync("hexadecimal.bin", dataBytes);

// const json = JSON.parse(data);
// console.log(json);