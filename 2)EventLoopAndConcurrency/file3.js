const fs = require('fs');

for (let i=1; i <= 5; ++i) {
    fs.readFile('text/' + i + '.txt', (err, data) => {
        if(err) {
            console.log(err);
        } else {
            console.log(data.toString().trim() );
        }
        
    });
}