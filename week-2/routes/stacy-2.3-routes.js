/*
============================================
Title: Assignment 2.3
Author: Professor Krasso
Date: 26 February 2020
Modified By: Clayton Stacy
Description: Routes
============================================
*/
//Import header and log to the console
var header = require('../../Stacy-header.js');
console.log(header.display('Clayton', 'Stacy', '2.3 Routes' ));

var express = require("express");
var http = require("http");

var app = express();

app.get("/",function(req, res) {
    res.end("Welcome to the homepage!");
});

app.get("/about", function(req, res) {
    res.end("Welcome to the about page!");
});

app.get("/contact", function(req, res) {
    res.end("Welcome to the contact page!");
});

app.use(function(req, res) {
    res.statusCode = 404;
    res.end("404!");
});

http.createServer(app).listen(3000);

console.log("Listening on port 3000");