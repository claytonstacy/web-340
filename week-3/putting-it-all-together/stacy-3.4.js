/*
============================================
Title: Assignment 3.4
Author: Professor Krasso
Date: 26 February 2020
Modified By: Clayton Stacy
Description: Putting it all together
============================================
*/
//Import header and log to the console
var header = require('../../Stacy-header.js');
console.log(header.display('Clayton', 'Stacy', '3.4 Putting it all Together' ));

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

//Set up ejs views to use views directory
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//Set up Morgan for logging
app.use(logger("short"));

//Create route for home, about, contact, and products
app.get("/", function(request, response) {
    response.render("index", {
        message: "Congratulations, you're home!"
    });
});

app.get("/about", function(request, response) {
    response.render("about", {
        message: "All about me"
    });
});

app.get("/contact", function(request, response) {
    response.render("contact", {
        message: "Don't contact me, I'll contact you."
    })
});

app.get("/products", function(request, response) {
   response.render("products", {
       message: "Here are some products"
   });
});

//create app server
http.createServer(app).listen(8080, function() {
   console.log("Application started on port 8080.");
});