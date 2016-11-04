var commands = require('./commands');
var userCommand = 'pwd';


// Output a prompt
process.stdout.write('prompt > ');


// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  	if(cmd === 'pwd'){
  		console.log(__filename);
  	}
  	if(cmd === 'date'){
  		var dt = new Date();
  		var utcDate = dt.toUTCString();
  		console.log(utcDate);
  	}
  	process.stdout.write('\nprompt > ');

});

