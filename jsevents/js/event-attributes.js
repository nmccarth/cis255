function checkUsername(event) {                             
  var name = event.id;
  var alpha = name.substr(name.length - 2);
  var output = 'feedback' + alpha;

  var start = alpha.substr(0,1).toUpperCase();
  var end = alpha.substr(1).toUpperCase();
  var regexp = new RegExp("^["+start+"-"+end+"]+$");

  var elMsg = document.getElementById(output);     

  var elUsername = event.value.toUpperCase();

  if (regexp.test(elUsername)) {                  
    elMsg.textContent = '';
  } else {                                             
    elMsg.textContent = 'The name can only contain '+start+' to '+end;                         
  }
}
