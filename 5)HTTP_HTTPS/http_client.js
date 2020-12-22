const http = require('http');

const message = 'hello :)';
const method = {
    method: 'GET',
    host: '127.0.0.1',
    port: 9090,
    path: '/',
    headers: {
        'content-type': 'text/plain',
        'content-length': message.length
    }

};