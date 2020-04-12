/*
============================================
Title: Assignment 7.4
Author: Professor Krasso
Date: 4 April 2020
Modified By: Clayton Stacy
Description: EMS Mongo Schema and Model
============================================
*/

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Define the employeeSchema
var employeeSchema = new Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    email: String
});

// Define the employee model
var Employee = mongoose.model("Employee", employeeSchema);

// Expose the Employee model to the project
module.exports = Employee;