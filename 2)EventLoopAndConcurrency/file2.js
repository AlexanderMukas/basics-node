const fs = require('fs');

for (let i=0; i < 10; ++i) {
    fs.readFile('text.txt', (err, data) => {
        if(err) console.log(err);
        console.log( data.toString() );
    });
}
console.log('here.')