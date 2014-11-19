/* global require, console */
"use strict";

var pg = require('pg');
var conString = "postgres://postgres@localhost:5432/postgres?ssl=false";
var client = new pg.Client(conString);
client.connect();

var tagsObject = {};
var tags = 0;
var rowNumber = 0;
var i = 0;

client.query("SELECT COUNT(*) FROM train", function(err, l){ if(err) throw err; rowNumber = l.rows[0]["count"]; next(); });
var rows = client.query("SELECT * FROM train");

var update1 = "UPDATE train SET tags_id = ";
var update2 = " WHERE id = ";

var next = function(){

	rows.on('row', function(row) {

	  	if (typeof row.tags === "string") {
			var tagsToArray = row.tags.split(" ");
					
			tags += tagsToArray.length;
			var tag = 0;
			for(tag in tagsToArray){
				if(!tagsObject[tagsToArray[tag]]){
					tagsObject[tagsToArray[tag]] = true;
				}
			}		

			var query = update1 + "\'{" + tagsToArray + "}\'" + update2 + row.id;
			client.query(query, function(err, c){ if(err) throw err;  });
		}

		i++;

		if(i == rowNumber){
			console.log("Unique tags: " + Object.keys(tagsObject).length);
			console.log("Tags count: " + tags);	
		}

	});
}