/*
============================================
Title: Assignment 1.5
Author: Professor Krasso
Date: 16 February 2020
Modified By: Clayton Stacy
Description: Hello World
============================================
*/ 
//Start program
//Import header and log to the console
var header = require('../Stacy-header');
console.log(header.display('Clayton', 'Stacy', '1.5 Hello World' ));


/* Import http object and assign it a variable named http */

var http = require("http");

function processRequest(req, res) {
    
var body = "You're in Clayton's world now!";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

//Use createServer method of http to serve up the body of the webpage you build
var s = http.createServer(processRequest);

s.listen(8080);