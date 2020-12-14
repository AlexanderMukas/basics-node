const fs = require('fs');
const util = require('util');
const read = util.promisify(fs.readFile);

var run = async () => {
    // promise version
    Promise
        .all([
            read('text/1.txt'),
            read('text/2.txt'),
            read('text/3.txt'),
            read('text/4.txt'),
            read('text/5.txt')
        ])
        .then( data => {
            const [ data1, data2, data3, data4, data5 ] = data;

            console.log( data1.toString() );
            console.log( data2.toString() );
            console.log( data3.toString() );
            console.log( data4.toString() );
            console.log( data5.toString() );
            console.log('--------------------------------------------');

        });

        //async/await version
        const [ data1, data2, data3, data4, data5 ] =
            await Promise
                .all([
                    read('text/1.txt'),
                    read('text/2.txt'),
                    read('text/3.txt'),
                    read('text/4.txt'),
                    read('text/5.txt')
                ])
        console.log( data1.toString() );
        console.log( data2.toString() );
        console.log( data3.toString() );
        console.log( data4.toString() );
        console.log( data5.toString() );
};

run();