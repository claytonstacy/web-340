/*
============================================
Title: Assignment 5.3
Author: Professor Krasso
Date: 17 March 2020
Modified By: Clayton Stacy
Description: Pug Template
============================================
*/

//Import express and pug
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

//Declare express app
var app = express();

//Tell app to use pug for views and get those views from the views directory
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

//Create route for homepage to index view and pass in a message
app.get("/", function(request, response) {
    response.render("index", {
        message: "Pug looks pretty interesting!"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});