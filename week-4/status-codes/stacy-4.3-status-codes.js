/*
============================================
Title: Assignment 4.3
Author: Professor Krasso
Date: 14 March 2020
Modified By: Clayton Stacy
Description: Status Codes
============================================
*/

var express = require("express");
var http = require("http");
var app = express();

app.get("/not-found", function(request, response) {
    response.status(404);
    response.json({
        error: "Dave's not here man."
    })
});

app.get("/ok", function(request, response) {
    response.status(200);
    response.json({
        message: "Way to go!"
    })
});

app.get("/not-implemented", function(request, response) {
    response.status(501);
    response.json({
        error: "Not sure what you're tring to accomplish here"
    })
});

http.createServer(app).listen(8080, function() {
   console.log("Application started on port 8080!");
});