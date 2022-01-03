const express = require('express');
var fs = require('fs');
const app = express();
const port = process.env.PORT || '3000';

app.get('/', (req, res) => {
    fs.readFile('apple-developer-merchantid-domain-association.txt',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
});
app.listen(port, () => {
console.log(`listening at http://localhost:${port}`);
});