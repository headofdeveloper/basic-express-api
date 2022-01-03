var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('apple-developer-merchantid-domain-association.txt',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(9090);