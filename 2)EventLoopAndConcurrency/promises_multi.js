const fs = require('fs');
const util = require('util');

// old
fs.readFile('text/1.txt', (err, data1) => {
    fs.readFile('text/2.txt', (err, data2) => {
        fs.readFile('text/3.txt', (err, data3) => {
            console.log( data1.toString() );
            console.log( data2.toString() );
            console.log( data3.toString() );
        });
    });
});

// new 
var read = util.promisify(fs.readFile);

Promise
    .all([
        read('text/1.txt'),
        read('text/2.txt'),
        read('text/3.txt')
    ])
    .then( data => {
        const [ data1, data2, data3 ] = data;
        console.log( data1.toString() );
        console.log( data2.toString() );
        console.log( data3.toString() );

    });