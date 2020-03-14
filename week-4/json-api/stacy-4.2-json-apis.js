/*
============================================
Title: Assignment 4.2
Author: Professor Krasso
Date: 14 March 2020
Modified By: Clayton Stacy
Description: JSON APIs
============================================
*/
var express = require("express");
var http = require("http");
var app = express();

app.get("/customer/:id", function (request, response) {
    var id = parseInt(request.params.id, 10);
    response.json({
        firstName: "John",
        lastName: "Steinbeck",
        employeeId: 1234
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});