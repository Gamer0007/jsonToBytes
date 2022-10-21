const fs = require('fs');
const Paths = require('path');
// const { buffer } = require('stream/consumers');

// squadJSON = JSON.parse(fs.readFileSync('./telrom.json', 'utf8'));
const fileName = "json_bytes.bin";
const readFile = fs.readFileSync('./telrom.json')
console.log('before buffer', readFile)
const array = JSON.parse(readFile);
const dataBytes = Buffer.from(array);
console.log('after buffer', dataBytes);
// console.log(readBytes);


fs.writeFileSync("json_bytes.bin", dataBytes);

const read = fs.readFileSync('json_bytes.bin', 'utf8');
console.log(read);

const readable = fs.createReadStream('json_bytes.bin');

// Instructions for reading data
readable.on('readable', () => {
    let chunk;

    // Using while loop and calling
    // read method
    while (null !== (chunk = readable.read())) {

        // Displaying the chunk
        console.log(`read: ${chunk}`);
    }
});

fs.stat("./json_bytes.bin", (err, fileStats) => {
    if (err) {
        console.log(err)
    } else {
        console.log(fileStats)
    }
})
// const path = Paths.get("json_bytes.bin");
// const fileContents = Files.readAllBytes(path);
// console.log(fileContents)

// const read = JSON.stringify(dataBytes);
// console.log(read)

// var data = fs.readFileSync(fileName, 'latin1');
// console.log(data)

// fs.readFile("json_bytes.bin", "utf8", function (err, data) {
//     if (err) throw err;
//     console.log(data);
// });

// fs.open('test.bin', 'r', function (errOpen, fd) {
//     fs.read(0, Buffer.alloc(4096), 0, 4096, 0, function (errRead, bytesRead, buffer) {
//         console.log('hiiii', buffer.toString('utf8'));
//     });
// });


// var writeStream = fs.createWriteStream("json_Binary.bin");
// writeStream.write(dataBytes);
// // binarystream = new BinaryWriter(file);
// // writeStream.write("Thank You.");
// writeStream.end();



// fs.readFile('./telrom.json', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     var output = "";
//     output.value = "";
//     for (var i = 0; i < data.length; i++) {
//         output += data[i].charCodeAt(0).toString(2) + " ";
//     }
//     // console.log(output)

//     // const toBytesInt32 = (data) => {
//     //     const arr = new ArrayBuffer(8);
//     //     const view = new DataView(arr);
//     //     view.setUint32(0, data, false);
//     //     return arr;
//     // }

//     // console.log(toBytesInt32((4096).toString(2)))

//     // var byteArray = data;

//     // for (var index = 0; index < byteArray.length; index++) {
//     //     var byte = data & 0xff;
//     //     byteArray[index] = byte;
//     //     long = (data - byte) / 256;
//     // }
//     // console.log(byteArray)

//     const array = JSON.parse(data);
//     console.log('array', array)
//     const buf1 = Buffer.from(array);
//     const binaryBytes = buf1;
//     console.log(buf1)
//     const buf2 = Buffer.from(buf1);

//     console.log(buf2)

//     const buffer = Buffer.alloc(4096, buf1);
//     console.log(buffer)

//     var byteArray = new Uint8Array(buffer);
//     console.log(byteArray);

//     // const dataBytes = new Uint8Array(Buffer.from(buffer));
//     // // fs.writeFile('message.txt', dataBytes, (err) = {
//     // //     if (err) throw err;
//     // // });
//     // console.log(dataBytes);

//     // fs.writeFile('json_bytes.txt', dataBytes, (err) => {
//     //     // throws an error, you could also catch it here
//     //     if (err) throw err;

//     //     // success case, the file was saved
//     //     console.log('bytes saved!');
//     // });

//     var writeStream = fs.createWriteStream("json_Binary2.bin");
//     writeStream.write(array);
//     // binarystream = new BinaryWriter(file);
//     // writeStream.write("Thank You.");
//     writeStream.end();

//     fs.stat("./json_Binary.json", (err, fileStats) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(fileStats)
//         }
//     })



// let utf8decoder = new TextDecoder(); // default 'utf-8' or 'utf8'

// let u8arr = new Uint8Array(data);
// var string = new TextDecoder().decode(u8arr);
// console.log(string);
// console.log(utf8decoder.decode(data));
// console.log(new Buffer.from(data).toString());



// let buffer = new Uint8Array([255, 255, 255, 255]).buffer;

// let dataView = new DataView(buffer);

// get 8-bit number at offset 0
// console.log(dataView.getUint8(0)); // 255


// console.log(data);
// if (data.type === 'binary') {
//     console.log(data.type);
// } else {
//     console.log(data.type);
// }
// var str = String.fromCharCode.apply(null, data);
// console.log('str', str)
// console.log(JSON.stringify({ data }));
// var data3 = JSON.parse(String.fromCharCode.apply(null, new Uint16Array(data)));
// console.log("yay", data3);
// let str = ''
// for (var i = 0; i < data.length; ++i) {
//     str += String.fromCharCode(data[i]);
// }

// console.log(str);

    // var data2 = new Uint16Array(data);
    // console.log(data2);

    // const u8 = data.toString();

    // const lol = String.fromCharCode('./telrom.json');
    // console.log(lol);


    // var b64 = Buffer.from(u8).toString('base64');
    // console.log(b64);
    // console.log(data);
    // var uint8array = new TextEncoder().encode(data)
    // var string = new TextDecoder().decode(uint8array);
    // console.log(string);
// });





// var decoder = new TextDecoder('utf8');
// var b6encoded = btoa(String.fromCharCode.apply(null, ascii));

