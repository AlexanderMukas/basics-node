const fs = require('fs');

// old
fs.readFile('text.txt', (err, data) => {
    console.log( data.toString() );
});

// new

new Promise( (resolve, reject) => {
    fs.readFile('text.txt', (err, data) => {
        if(err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
})
.then( data => {
    console.log( data.toString() );
})
.catch(err => {
    console.log(err);
});