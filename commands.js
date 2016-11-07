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
	}
}
