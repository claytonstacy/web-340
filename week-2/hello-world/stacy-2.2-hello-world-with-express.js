/*
============================================
Title: Assignment 2.2
Author: Professor Krasso
Date: 26 February 2020
Modified By: Clayton Stacy
Description: Hello World with Express
============================================
*/ 
//Start program
//Import header and log to the console
var header = require('../Stacy-header');
console.log(header.display('Clayton', 'Stacy', '2.2 Hello World with Express' ));


var express = require('express');
var http = require('http');
var app = express();

app.use(function(req, res) {
   console.log('In comes a request to: ' + req.url);
   res.end("Hello World");
});


http.createServer(app).listen(3000, function()
{
    console.log('Apllication started on port %s', 3000)
});