const fs = require('fs');
const util = require('util');
const read = util.promisify(fs.readFile);

var run = async () => {
    //promise version
    read('text.txt')
        .then( data => {
            console.log( data.toString() )
        });

    // async/await version
    const data = await read('text.txt');
    console.log( data.toString() );
};

run();