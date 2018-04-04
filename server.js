// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var logger = require("morgan");
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3001;
var app = express();

// Set the app up with morgan
app.use(logger("dev"));

// set the app up with bodyparser
app.use(bodyParser());

// Database configuration
var databaseUrl = process.env.MONGODB_URI || "articles_db";
var collections = ["articles"];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl , collections);

// Log any mongojs errors to console
db.on("error", function(error) {
  console.log("Database Error:", error);
});

//route to get all of my books
app.get('/articles', function(req, res){
	db.articles.find({}, function(error, result){
	    res.json(result);
	});
});


//route to add a book
app.post('/articlesinsert', function(req, res){
	// {name: 'to kill a mockingbird'} 

	db.articles.insert(req.body, function(error, savedarticle) {
	  // Log any errors
	  if (error) {
	    res.send(error);
	  }else {
	    res.json(savedarticle);
	  }
	});
});


// Listen on port 3001
  app.listen(PORT, function() {
    console.log('🌎 ==> Now listening on PORT %s! Visit http://localhost:%s in your browser!', PORT, PORT);
  });