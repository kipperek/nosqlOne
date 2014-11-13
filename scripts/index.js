/* global require, console */
"use strict";
var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/nosql";

MongoClient.connect(url, function(err, db) {
	var train = db.collection("train");
	var tagsObject = {};
	var allTags = 0;
	var cursor = train.find({}, {"Tags": 1, "_id": 1 , "Id": 1});
	
	cursor.count(function(err, count){
		console.log(count);
		var i = 0;
		cursor.each(function(err, doc){
			if (err) throw err;
			if (typeof doc.Tags === "string") {
				var tagsArray = doc.Tags.split(" ");
				
				allTags += tagsArray.length;
				var tag = 0;
				for(tag in tagsArray){
					if(!tagsObject[tagsArray[tag]]){
						tagsObject[tagsArray[tag]] = true;
					}
				}
				train.update({ _id : doc._id }, { $set: { Tags : tagsArray } },function(){});
	  		}

	  		if(i % 100000 === 0)
	  			console.log("Document: " + i);

	  		i++;

	  		if(i === count){
	  			db.close();
	  			console.log("Wszystkie tagi: " + allTags);
	  			console.log("Tagi unikalne: " + Object.keys(tagsObject).length);
	  		}

	  	});
	});
});