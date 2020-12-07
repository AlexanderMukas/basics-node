const http = require('http');

return http
    .createServer( (req, res) => {
        res.end('Home page from node.js');
    })
    .listen(5000);