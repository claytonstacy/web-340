/*
============================================
Title: Assignment 3.2
Author: Professor Krasso
Date: 26 February 2020
Modified By: Clayton Stacy
Description: Logging
============================================
*/
//Import header and log to the console
var header = require('../../Stacy-header.js');
console.log(header.display('Clayton', 'Stacy', '3.2 Logging' ));

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