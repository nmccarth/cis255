//document.body.style = "background-color: yellow;"
//document.getElementById("h1").innerHTML = "This heading is h1";
var a = document.createElement("a");
var b = document.createTextNode("My link");
a.setAttribute("href", "#");
a.append(b);

document.getElementById("h1").onclick = function() {alert('goodbye');}

// when you click on the h1 element, you see the url of the document document.URL

document.getElementById("input1").onkeyup = function() {
	var s = document.getElementById("input1").value
	var result = "";
	for(var i=0; i<s.length; i++) {
		result += s[i] + ".";
	}
	document.getElementById("span1").innerHTML = result;
}









