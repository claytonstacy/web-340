/*
============================================
Title: EMS
Author: Professor Krasso
Date: 4 April 2020
Modified By: Clayton Stacy
Description: EMS 
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
var Employee = require("./models/employee");

// Initialize express application
var app = express();

// Set up CSurf protection
var csrfProtection = csrf({cookie:true});

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
var mongoDB = "mongodb+srv://cdstacy:Sofkez12@buwebdev-cluster-1-xyv9m.mongodb.net/ems?retryWrites=true&w=majority";
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

app.get("/new", function (request, response) {
    response.render("new", {
        title: "New Employee"
    });
});
// Post new employee route
app.post("/process", function(request, response) {
    console.log(request.body);
    if (!request.body) {
        response.status(400).send("Entries must have a name");
        return;
    }
    // get the request's form data
    var firstName = request.body.firstName;
    var middleName = request.body.middleName;
    var lastName = request.body.lastName;
    var email = request.body.email;

    // create an employee model
    var employee = new Employee({
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        email: email
    });
    // save
    employee.save(function (error) {
        if (error) throw error;
    });
    response.redirect("/list");
 });

// Get all employees list
app.get("/list", function(request, response) {
    Employee.find({}, function(error, employees) {
       if (error) throw error;
       response.render("list", {
           title: "Employee List",
           employees: employees
       });
    });
});
//Get for querying a single employee
app.get("/view/:queryName", function (request, response) {
    var queryName = request.params.queryName;
    Employee.find({'email': queryName}, function(error, employees) {
        if (error) throw error;
        console.log(employees);
        if (employees.length > 0) {
            response.render("view", {
                title: "Employee Record",
                employee: employees
            })
        }
        else {
            response.redirect("/list")
        }
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});