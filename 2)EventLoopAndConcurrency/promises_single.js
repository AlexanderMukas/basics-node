const fs = require('fs');
const util = require('util');

// old
fs.readFile('text.txt', (err, data) => {
    console.log( data.toString() );
});

// new
var read = util.promisify(fs.readFile);

read('text.txt')
    .then( data => {
        console.log( data.toString() );
    });