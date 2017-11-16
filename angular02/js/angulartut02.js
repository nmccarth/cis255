
// ---------- AJAX CALL ----------
var req = new XMLHttpRequest(); // create an ajax request
var baseurl = 'https://api.svsu.edu/courses?prefix=';
var prefix = 'CS';
var endurl = '&term=17/FA'
var url = baseurl + prefix + endurl;
req.onreadystatechange = function() {
	var readyStateDone = 4;
	var readyStatusSuccess = 200;
	if (this.readyState == readyStateDone && 
		this.status == readyStatusSuccess) {
		jsonObj = JSON.parse(this.responseText);
	}
};
req.open('GET', url, true);
req.send();

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
   // alert("woke up!");
}
sleep(500);


//adding this to the page with javascript seems to get rid of leading problems
var mydiv = document.getElementById("myclasses");
mydiv.innerHTML += '<table><tr ng-repeat="course in courses" ng-class="{stripedblue:  course.courseNumber % 2 == 0, stripedbeige: course.courseNumber % 2 != 0}"> <td>{{course.prefix}}</td><td>{{course.courseNumber}}</td></tr></table>'


// Define the AngularJS Module
var app4 = angular.module('app4', []);

// Define the Controller and implement the Scope
app4.controller('eventCtrl', function($scope) {
	$scope.getJson = function(url) {
		jQuery.getJSON(url, function( data ) {
			var old = jsonObj.courses;
			var new1 = data.courses;
			var new2 = old.concat(new1);
			jsonObj = [];
			jsonObj["courses"] = new2;
			//jsonObj = [{"courses": old.concat(new1)}];
		})
	};
	
	$scope.courses = jsonObj.courses;
	$scope.updatePrefix = function() {
		prefix = document.getElementById("prefix").value;
		if(/^[a-zA-Z]+$/.test(prefix)) {
			if (prefix == '') prefix = "CS";
			url = baseurl + prefix + endurl;
			req.open('GET', url, true);
			req.send();
			$scope.courses = jsonObj.courses;
		} else if(/^[a-zA-Z\s]+$/.test(prefix)) {
			var splitprefix = prefix.split(" ");
			for(var i = 0; i < splitprefix.length; i++){
				url = baseurl + splitprefix[i] + endurl;
				if (i == 0) {
					req.open('GET', url, true);
					req.send();
					sleep(100);
				} else {
					$scope.getJson(url);
				}
			}
			$scope.courses = jsonObj.courses;
		} else if(/^[a-zA-Z,]+$/.test(prefix)) {
			var splitprefix = prefix.split(",");
			for(var i = 0; i < splitprefix.length; i++){
				url = baseurl + splitprefix[i] + endurl;
				if (i == 0) {
					req.open('GET', url, true);
					req.send();
					sleep(100);
				} else {
					$scope.getJson(url);
				}
			}
			$scope.courses = jsonObj.courses;
		}

	}
});
