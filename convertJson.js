const fs = require('fs');


fs.readFile('./telrom.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    var output = "";
    output.value = "";
    for (var i = 0; i < data.length; i++) {
        output += data[i].charCodeAt(0).toString(2) + " ";
    }
    // console.log(output)

    // const toBytesInt32 = (data) => {
    //     const arr = new ArrayBuffer(8);
    //     const view = new DataView(arr);
    //     view.setUint32(0, data, false);
    //     return arr;
    // }

    // console.log(toBytesInt32((4096).toString(2)))

    // var byteArray = data;

    // for (var index = 0; index < byteArray.length; index++) {
    //     var byte = data & 0xff;
    //     byteArray[index] = byte;
    //     long = (data - byte) / 256;
    // }
    // console.log(byteArray)

    const array = data;
    const buf1 = Buffer.from(array);
    const binaryBytes = buf1;
    console.log(buf1)
    const buf2 = Buffer.from(buf1);

    console.log(buf2)

    const buffer = Buffer.alloc(4096, buf1);
    console.log(buffer)

    var byteArray = new Uint8Array(buffer);
    console.log(byteArray);

    const dataBytes = new Uint8Array(Buffer.from(buffer));
    // fs.writeFile('message.txt', dataBytes, (err) = {
    //     if (err) throw err;
    // });
    console.log(dataBytes);

    fs.writeFile('json_bytes.txt', dataBytes, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;

        // success case, the file was saved
        console.log('bytes saved!');
    });

    var writeStream = fs.createWriteStream("json_Binary.bin");
    writeStream.write(byteArray);
    // binarystream = new BinaryWriter(file);
    // writeStream.write("Thank You.");
    writeStream.end();

    fs.stat("./json_Binary.json", (err, fileStats) => {
        if (err) {
            console.log(err)
        } else {
            console.log(fileStats)
        }
    })



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
    let str = ''
    for (var i = 0; i < data.length; ++i) {
        str += String.fromCharCode(data[i]);
    }

    console.log(str);

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
});





// var decoder = new TextDecoder('utf8');
// var b6encoded = btoa(String.fromCharCode.apply(null, ascii));

