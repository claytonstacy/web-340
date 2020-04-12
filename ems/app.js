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

// Require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var Employee = require("./models/employees");

// Set up CSurf protection
var csrfProtection = csrf({cookie:true});

// Initialize express application
var app = express();


// Use statements
app.use(logger("short"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
});
app.use(helmet.xssFilter());
app.use(express.static(path.join(__dirname, "./public" )));

// mLab connection
var mongoDB = "mongodb+srv://cdstacy:Sofkez12@buwebdev-cluster-1-xyv9m.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Set up database connection
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

// Set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Routing
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

app.post("/process", function(request, response) {
    console.log('This is the request', JSON.stringify(request.body));
    response.redirect("/");
    console.log('This is the response', JSON.stringify(response));
});

// model
var employee = new Employee({
    firstName: "Clayton",
    middleName: "D",
    lastName: "Stacy",
    email: "clayton.stacy@gmail.com"

});
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!", employee);
});