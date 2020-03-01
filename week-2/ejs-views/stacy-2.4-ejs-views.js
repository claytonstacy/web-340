/*
============================================
Title: Assignment 2.4
Author: Professor Krasso
Date: 1 March 2020
Modified By: Clayton Stacy
Description: EJS Views
============================================
*/
//Import header and log to the console
var header = require('../../Stacy-header.js');
console.log(header.display('Clayton', 'Stacy', '2.4 EJS Views' ));

var http = require("http");

var express = require("express");

var path = require("path");

var app = express();

// Tell Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views")); 

// Tell Express to use the EJS view engine
app.set("view engine", "ejs"); 

//Create default route and send data object to it
app.get("/", function(request, response) {

   response.render("index", {
       firstName: "Clayton",
       lastName: "Stacy",
       address:"Anywhere but Nebraska"
   });

});

// Start Server on port 8080
http.createServer(app).listen(8080, function() {
    console.log("EJS-Views app started on port 8080.");
});