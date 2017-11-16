// ---------- AJAX CALL ----------
var req = new XMLHttpRequest(); // create an ajax request
var baseurl = 'https://api.svsu.edu/courses?prefix=';
var prefix = 'CS';
var endurl = '&term=17/FA'
var url = baseurl + prefix + endurl;
var jsonObj; 
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
sleep(3000);

var mydiv = document.getElementById("myclasses");
mydiv.innerHTML += '<table><tr ng-repeat="course in courses" ng-class="{stripedblue:  course.courseNumber % 2 == 0, stripedbeige: course.courseNumber % 2 != 0}"> <td>{{course.prefix}}</td><td>{{course.courseNumber}}</td></tr></table>'

// console.log(typeof jsonObj);
// while(jsonObj === undefined) {
// 	console.log(typeof jsonObj);
// 	sleep(100);
// }

// Define the AngularJS Module
var app4 = angular.module('app4', []);

// Define the Controller and implement the Scope
app4.controller('eventCtrl', function($scope) {
  
// 	var flag = true;
// 	while(flag) {
// 		if(typeof jsonObj === undefined){ 
// 			sleep(500);
// 			console.log("waiting");
// 		} else {
// 			$scope.courses = jsonObj.courses;
// 			flag = false;
// 		}
// 	}


	
	$scope.courses = jsonObj.courses;
	$scope.updatePrefix = function() {
		prefix = document.getElementById("prefix").value;
		if (prefix == '') prefix = "CS";
		url = baseurl + prefix + endurl;
		req.open('GET', url, true);
		req.send();
		$scope.courses = jsonObj.courses;
	}
});
