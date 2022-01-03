const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
var fs = require('fs');
const app = express();
const port = process.env.PORT || '3000';

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/paymentGateway',(request,response) => {
    //code to perform particular action.
    //To access POST variable use req.body()methods.
    console.log(request.body);
    });


router.get('/', (req, res) => {
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