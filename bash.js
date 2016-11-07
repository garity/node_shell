var commands = require('./commands');



// Output a prompt
process.stdout.write('prompt > ');


// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  	if(cmd === 'date'){
  		commands['date']();
  	}
    if(cmd === 'pwd'){
      commands['pwd']();
    }
    if(cmd === 'ls'){
      commands['ls']();
    }
  	process.stdout.write('\nprompt > ');

});

