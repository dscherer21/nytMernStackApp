// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var path = require('path');
var mongoose = require("mongoose");
var request = require('request');
require('dotenv').config();

var PORT = process.env.PORT || 6969;
var app = express();

// Set the app up with morgan
app.use(logger("dev"));

app.use(bodyParser.urlencoded({
    extended: false
  }));

// =========  Database configuration with mongoose ===============
// ---------  define local MongoDB URI ----------
var localMongo = "mongodb://localhost/devtechscraper";
var MONGODB_URI = 'DB_PASS';

//mongoose.connect(localMongo);

if (process.env.MONGODB_URI) {
  // this executes if this is being executed in heroku app
  mongoose.connect(process.env.MONGODB_URI);
} else {
  // this ececutes if this is being executed on local machine
  console.log('Executing in Localhost!')
  mongoose.connect(localMongo);
}

// =========  End databse configuration  ================

var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function (error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function () {
  console.log("Mongoose connection successful.");
});