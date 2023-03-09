const express = require("express");
const apiMocker = require("connect-api-mocker");
const fs = require("fs");

const port = 9000;
var app = express();

app.use("/api", apiMocker("mock-api"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/login", function (req, res){
    fs.readFile( `${__dirname}/user/login/loginStatus.json`, 'utf8', function (err, data) {   
        res.end(JSON.stringify(JSON.parse(data),null,2));  
    });
});