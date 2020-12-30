const net = require('net');

const server = net.createServer( conn => {
    console.log('new client now!');

    conn.on('data', data => {
        conn.write(data + '\r\n');
    });

    conn.on('end', () => {
        console.log('client left...');
    });
});

server.listen(9090);