var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

// Tell Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views")); 

// Tell Express to use the EJS view engine
app.set("view engine", "ejs"); 
app.use(logger("short"));
app.get("/", function (request, response) {

    response.render("index", {

        message: "Am I doing this right????"

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});