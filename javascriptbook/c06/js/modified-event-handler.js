function checkUsername() {                            // Declare function
  var elem1 = this.id;
  var num = elem1.substr(elem1.length - 1);
  var output = "feedback" + num;
  var elMsg = document.getElementById(output);    // Get feedback element
  if (this.value.length < 5) {                        // If username too short
    elMsg.textContent = 'Username must be 5 characters or more';  // Set msg
  } else {                                            // Otherwise
    elMsg.textContent = '';                           // Clear message
  }
}

var e1Username = document.getElementById('name1'); // Get username input
e1Username.onblur = checkUsername;  // When it loses focus call checkuserName()

var e2Username = document.getElementById('name2'); // Get username input
e2Username.onblur = checkUsername;  // When it loses focus call checkuserName()

var e3Username = document.getElementById('name3'); // Get username input
e3Username.onblur = checkUsername;  // When it loses focus call checkuserName()

var e4Username = document.getElementById('name4'); // Get username input
e4Username.onblur = checkUsername;  // When it loses focus call checkuserName()

var e5Username = document.getElementById('name5'); // Get username input
e5Username.onblur = checkUsername;  // When it loses focus call checkuserName()



/*
//try to loop through and create listeners for each
//not working
var names = document.getElementsByTagName('div');
alert(names[1]);

for(var i = 0; i < names.length; i++){
	var div = names[i];
	if (div.id.indexOf("name") > -1) {
		
		var username = div;
		username.onblur = checkUsername;
	} else{
		continue;
	}
}
*/
