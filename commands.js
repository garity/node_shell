// The stdin 'data' event fires after a user types in a line
const fs = require('fs');


module.exports = {

	pwd : function() {
  		console.log(__filename);
	},

	ls: function(){
		const currDir = __dirname;
		fs.readdir(currDir, (err, files) => {
			files.forEach(file => {
				console.log(file);
			});
		})
	},

	date: function(){
		var dt = new Date();
  		var utcDate = dt.toUTCString();
  		console.log(utcDate);
	},

	echo: function(argsArray){
		var output = "";
		for (var i = 0; i < argsArray.length; i++) {
			output += argsArray[i] + " "
		}
  		return console.log(output);
	},
	cat: function(argsArray){

		fs.readFile(argsArray[0], 'utf8', (err, data) => {
			if(err) throw err;
			console.log(data);

		});
	},

	head: function(argsArray){

		var lineReader = require('readline').createInterface({
			input: fs.createReadStream(argsArray[0])

		});

		var counter = 0;

		lineReader.on('line', function(line){
			counter++;
			if(counter < 5) console.log(line);
		})

		// fs.readFile(argsArray[0], 'utf8', (err, data) => {
		// 	if(err) throw err;
			
		// 	var lines = data.toString().split("\n");
			
		// 	for(var i = 0 ; i < 5 ; i++){
		// 		console.log(lines[i]);
		// 	}

		// });


	}

}
