/*
============================================
Title: Assignment 5.3
Author: Professor Krasso
Date: 17 March 2020
Modified By: Clayton Stacy
Description: If Else Render
============================================
*/


var express = require("express");
var http = require("http");
var path = require("path");

app = express();

//Tell app to use views directory and use ejs files
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//Declare array of names
var n = [
  "Nigel",
  "Rupert",
  "Royston",
  "Clive"
];

//Set home page to index and pass array as names
app.get("/", function(request, response) {
    response.render("index", {
        names: n
    })
});


//Start app on port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});

 