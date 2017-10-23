/*
function checkUsername() {                            // Declare function
  var elMsg = document.getElementById('feedback');    // Get feedback element
  if (this.value.length < 5) {                        // If username too short
    elMsg.textContent = 'Username must be 5 characters or more';  // Set msg
  } else {                                            // Otherwise
    elMsg.textContent = '';                           // Clear message
  }
}
*/

function checkUsername() {                                                                                                                                                                                                            
	var name = this.id;
	var alpha = name.substr(name.length - 2);
	var output = 'feedback' + alpha;
 
	var start = alpha.substr(0,1).toUpperCase();
	var end = alpha.substr(1).toUpperCase();
	var regexp = new RegExp("^["+start+"-"+end+"]+$");
 
	var elMsg = document.getElementById(output);
 
	var elUsername = this.value.toUpperCase();
 
	if (regexp.test(elUsername)) {
		elMsg.textContent = '';
	} else {
		elMsg.textContent = 'The name can only contain '+start+' to '+end;
	}
}

var elUsernameac = document.getElementById('usernameac'); 
elUsernameac.onblur = checkUsername; 

var elUsernamedh = document.getElementById('usernamedh'); 
elUsernamedh.onblur = checkUsername; 

var elUsernameim = document.getElementById('usernameim');
elUsernameim.onblur = checkUsername; 

var elUsernamenp = document.getElementById('usernamenp'); 
elUsernamenp.onblur = checkUsername; 

var elUsernameqz = document.getElementById('usernameqz'); 
elUsernameqz.onblur = checkUsername; 

