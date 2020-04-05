
/*
============================================
Title: Assignment 6.3
Author: Professor Krasso
Date: 23 March 2020
Modified By: Clayton Stacy
Description: Mongoose Connection
============================================
*/


var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require('mongoose');

var mongoDB = 'mongodb://admin:admin@ds213239.mlab.com:13239/krasso-ems'
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

var app = express();
app.use(logger('short'));
http.createServer(app).listen(5000, function() {
    console.log('Application started and listening on port 5000');
});