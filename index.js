const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
var request = require('request');
var fs = require('fs');
const app = express();
const port = process.env.PORT || '3000';

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/v1/paymentGateway',(req,res) => {
    console.log(req.body);
    request.post(
      {
        url:'https://a4ab-81-214-161-1.ngrok.io/v1/paymentGateway',
        json: req.body,
        headers: {
          'Content-Type': 'application/json'
        }
      },
      function(error, response, body){
        //console.log(error);
        //console.log(response);
        //console.log(body);
        res.send(body);
    });
    // res.send("body");
    });


router.get('/.well-known/apple-developer-merchantid-domain-association.txt', (req, res) => {
    fs.readFile('apple-developer-merchantid-domain-association.txt',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
});
// add router in the Express app.
app.use("/", router);


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});