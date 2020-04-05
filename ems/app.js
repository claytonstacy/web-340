/*
============================================
Title: Assignment 7.4
Author: Professor Krasso
Date: 4 April 2020
Modified By: Clayton Stacy
Description: EMS Mongo Schema and Model
============================================
*/

var header = require('../Stacy-header');
console.log(header.display('Clayton', 'Stacy', '7.4 EMS' ));


var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");

var Employee = require("./models/employees");

// mLab connection
var mongoDB = "mongodb+srv://cdstacy:Sofkez12@buwebdev-cluster-1-xyv9m.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.use(express.static(path.join(__dirname, "./public" )));

app.get("/", function (request, response) {
    response.render("index", {
        title: "Home page"
    });
});

app.get("/list", function (request, response) {
    response.render("list", {
        title: "Employee List"
    });
});

app.get("/new", function (request, response) {
    response.render("new", {
        title: "New Employee"
    });
});

// model
var employee = new Employee({
    firstName: "Clayton",
    lastName: "Stacy"

});
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!", employee);
});