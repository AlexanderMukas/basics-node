const http = require('http');
const PORT = 9090;
// const HOST = '127.0.0.1';

const message = 'hello :)';

const options = {
    method: 'GET',
    host: HOST,
    // port: PORT,
    port : '127.0.0.1',
    path: '/',
    headers: {
        'content-type': 'text/plain',
        'content-length': message.length
    }
};

const req = http.request( options, res => {
    let content = '';

    // append data as it comes in
    res.on('data', data => {
        content += data;
    });

    // do something after all the data comes in
    res.on('end', () => {
        console.log(content);
    }); 
});

// send the request
req.write(message);
req.end();

// node http_client.js

// curl http://127.0.0.1:9090 \
// > --data 'hello :)'