/*
============================================
Title: Assignment 1.3
Author: Professor Krasso
Date: 16 February 2020
Modified By: Clayton Stacy
Description: Modules
============================================
*/ 
//Start program
//Import header and log to the console
var header = require('../Stacy-header');
console.log(header.display('Clayton', 'Stacy', '1.3 Class Refresher' ));


//Import url object and assign to variable url
var url = require("url");

//Use parse function of url object to parse an example URL
var parsedURL = url.parse("https://www.example.com/profile?name=stacy");


//Log the protocol, host and query of the url to make sure parse worked.
console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);