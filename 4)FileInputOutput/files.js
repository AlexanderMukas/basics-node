// read file, open file, create file
const fs = require('fs');
const util = require('util');
const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

let read_options = {
    encoding: 'utf-8',
    flag: 'r'
};

// read 

fs.readFile('file.txt', read_options, (err, data) => {
    if(err) console.log(err);
    console.log( data.toString() );
});    

// read (async/await)------------------------------

const runRead = async () => {
    try {  
        const data = await read('file.txt', read_options);
        console.log( data.toString() );

    } catch (err) {
        console.log(err);
    }
}

runRead();
// ------------------------------------------------


let write_options = {
    encoding: 'utf-8',
    flag: 'w',
    mode: 0o666
};

// re write file ----------------------------------
// fs.writeFile('file.txt', '*this text write in file*', write_options, err => {
//     if(err){
//         console.log(err);
//     }
// });
//---------write sync
// fs.writeFileSync('file.txt', '*this text write in file*', write_options);

// re write file async/await----------------------------------

const runWrite = async () => {
    try {
        await write('file.txt', '*this text write in file async*', write_options);
    } catch(err) {
        console.log(err);
    }
}
runWrite();

// detete ----------------------------------------------------
fs.unlink('file.txt', err => {
    if(err) {
        console.log(err);
    }
});