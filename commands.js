// The stdin 'data' event fires after a user types in a line
function pwd(){
	
	process.stdin.on('data', function (data) {
	  var cmd = data.toString().trim(); // remove the newline
	  	if(cmd === 'date'){
	  		var dt = new Date();
	  		var utcDate = dt.toUTCString();
	  		console.log(utcDate);
	  	}
	  	process.stdout.write('\nprompt > ');

	});
}


module.exports.pwd;