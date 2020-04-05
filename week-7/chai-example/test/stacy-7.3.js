/*
============================================
Title: Assignment 7.3
Author: Professor Krasso
Date: 4 April 2020
Modified By: Clayton Stacy
Description: Chai Example
============================================
*/

var fruits = require("../stacy-fruits");
var chai = require("chai");

var assert = chai.assert;

describe("fruits", function() {
    it("should return an array of fruits", function() {
        var f = fruits('Apple,Orange,Mango');
        assert(Array.isArray(f));
    });
});