const express = require("express");

const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hello, world</h1>");
});

app.get("/contact", function (req, res) {
    res.send("Contact me at steve@gmail.com");
});

app.get("/about", function (req, res) {
    res.send("I'm Steve a software developer and I can build you a node js server for your company, you'd like that no?");
});

app.get("/hobbies", function(req, res){
    res.send("I code, game, run and enjoy space thrillers, do you like them also?");
});

app.listen(3000, function () {
    console.log("server started on port 3000");
});