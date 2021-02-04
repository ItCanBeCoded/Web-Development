const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.get("/", function(res, req){
    req.sendFile(__dirname + "/signup.html");
});

app.listen(3000, function(){
    console.log("server listening on port 3000");
})