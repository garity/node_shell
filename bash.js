var commands = require('./commands');



// Output a prompt
process.stdout.write('prompt > ');


// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var input = data.toString().trim(); // remove the newline
  var arrayOfCmds = input.split(" ");
  var cmd = arrayOfCmds[0];
  var args = arrayOfCmds.slice(1);

  	if(cmd === 'date'){
  		commands['date']();
  	}
    if(cmd === 'pwd'){
      commands['pwd']();
    }
    if(cmd === 'ls'){
      commands['ls']();
    }
    if(cmd === 'echo'){
      commands['echo'](args);
    }
    if(cmd === 'cat'){
      commands['cat'](args);
    }
    if(cmd === 'head'){
      commands['head'](args);
    }


  	process.stdout.write('\nprompt > ');

});

