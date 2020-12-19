// read file, open file, create file
const fs = require('fs');
const util = require('util');
const read = util.promisify(fs.readFile);

let read_options = {
    encoding: 'utf-8',
    flag: 'r'
};

// read 

fs.readFile('file.txt', read_options, (err, data) => {
    console.log( data.toString() );
});

// read (async/await)---------------------------

const run = async () => {
    try {  
        const data = await read('file.txt');
        console.log( data.toString() );

    } catch (err) {
        console.log(err);
    }
}

run();
// read (async/await)---------------------------
