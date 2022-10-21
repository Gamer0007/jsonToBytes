const fs = require('fs');

const readFile = fs.readFileSync('./telrom.json')
console.log('before buffer', readFile)
const array = JSON.parse(readFile).slice(604, 3904);
console.log(array.length);

// function bytes2directory(bytes) {
//     const entries = [];
//     for (let i = 0; i < 3300; i + 33) {
//         const id = bytes[i];
//         // const number_bytes = bytes.slice(i + 1, i + 17).filter(b => b != 0);
//         const name = Buffer.from(bytes.slice(i + 17, i + 33).filter(b => b != 0)).toString();
//         entries.push({ id, name });
//     }
//     // return entries;
// }

// const generator = bytes2directory(array)
// console.log(generator.next())

// for (var i = 0; i < 137; i++) {

//     while (array[i] === 0) {
//         array.splice(i, 1);
//     }
//     console.log(array[i])
// }

function* bytes2directory(bytes) {
    for (let i = 0; i < bytes.length; i + 33) {
        const id = bytes[i];
        const number_bytes = bytes.slice(i + 1, i + 17).filter(b => b != 0);
        const name = Buffer.from(bytes.slice(i + 17, i + 33).filter(b => b != 0)).toString();
        // while (true) {
        //     const increment_id = yield id;
        //     const increment_name = yield name;
        //     const increment_number = yield bytes2phone(number_bytes);
        //     if (increment_id != null || increment_name != null || increment_number != null) {
        //         id += increment_id
        //         name += increment_name
        //         number += increment_number
        //     } else {
        //         id + 33
        //         name++
        //         bytes2phone(number_bytes)++
        //     }
        // }
        yield {
            id, name, number: bytes2phone(number_bytes)
        };
    }
}
function bytes2phone(bytes) {
    // create an array of digits from each byte

    return bytes.reduce((digits, b) => {
        // add the value of the first nibble to the array of digits
        digits.push((b >> 4) - 1);
        // add the value of the second nibble to the array of digits
        digits.push((b % 16) - 1);
        // return the array of digits for the next iteration
        return digits;

        // reverse the order of the digits in the array and turn it into a string
    }, []).reverse().join("");
}

digits.split("").reduce((phone, d, i) => {
    // return digits;
    if (i > 0 && i % 2 === 0) { phone += "."; }
    phone += d;
    return phone;
}, "");
// for (let i of bytes2directory(array)) {
//     console.log(i)
// }
// function* bytes2phone(num_bytes) {
//     for (let i = 0; i < 3300; i + 33) {
//         const hexToDecimal = hex => parseInt(hex, 16)
//         const num = Buffer.from(num_bytes.slice(i + 1, i + 7).filter(b => b != 0));
//         const dec1 = hexToDecimal()
//         yield { dec1 }
//     }
// }

const generator = bytes2directory(array)
console.log(generator.next())

// const generator2 = bytes2phone(array)

// console.log(generator2.next())
// console.log(generator.next())

// turn byte array into a directory entry array.
// a directory entry is an object like this : {id: "1", name: "Robert", phone: "0123456789"}
// function bytes2directory(bytes) {
//     // this will contain the directory entries
//     const entries = [];
//     // loop through the bytes, jumping 33 bytes each time
//     for (let i = 0; i < 3300; i + 33) {
//         // the first byte of the entry is the id
//         const id = bytes[i];
//         // the next 16 bytes are for the number, and we need to reject the null bytes.
//         const number_bytes = bytes.slice(i + 1, i + 17).filter(b => b != 0);
//         // the next 16 bytes are for the name, and we need to reject the null bytes.
//         // we direct put the bytes into a buffer that can then be turned into a string.
//         const name = Buffer.from(bytes.slice(i + 17, i + 33).filter(b => b != 0)).toString();
//         // we need to turn the phone bytes to the phone number digits
//         const number = bytes2phone(number_bytes)
//         // add the entry to the entry array
//         entries.push({ id, name, number });
//     }
//     //return the entry array
//     return entries;
// }
// const generator = bytes2directory(array)
// console.log(generator)
// console.log(bytes2directory())

// prints f, e, d, c, b, a

// console.log([...myString.length]);

// const dataBytes = Buffer.from(array);
// console.log('after buffer', dataBytes);
// fs.writeFileSync("hexadecimal.bin", dataBytes);

// const json = JSON.parse(data);
// console.log(json);