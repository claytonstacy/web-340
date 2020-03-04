/*
============================================
Title: Assignment 3.3
Author: Professor Krasso
Date: 26 February 2020
Modified By: Clayton Stacy
Description: Advanced Routing
============================================
*/
//Import header and log to the console
var header = require('../../Stacy-header.js');
console.log(header.display('Clayton', 'Stacy', '3.3 Advanced Routing' ));

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

 app.get("/:employeeId", function(request, response) {
    var employeeId = parseInt(request.params.employeeId, 10);
     response.render("index", {
        employeeId: employeeId
    })
});

 http.createServer(app).listen(8080, function() {
   console.log("Application started on port 8080");
});