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
sleep(1000);

function updatePrefix() {
		prefix = document.getElementById("prefix").value;
		url = baseurl + prefix + endurl;
		req.open('GET', url, true);
		req.send();
	}


// Define the AngularJS Module
var app4 = angular.module('app4', []);

// Define the Controller and implement the Scope
app4.controller('eventCtrl', function($scope) {
  $scope.blur = 0;
  $scope.click = 0;
  $scope.dblclick = 0;
  $scope.copy = 0;
  $scope.paste = 0;
  $scope.cut = 0;
  $scope.focus = 0;
  $scope.change = 0;
  $scope.keydown = function(e) {
	// Works for the basic characters and numbers
	$scope.kdKey = String.fromCharCode(e.keyCode);
  };
  $scope.mouseenter = 0;
  $scope.mouseleave = 0;

  // Used to disable button
  $scope.disableButton = true;

  // Used to show and hide elements
  $scope.daytimeButton = true;

  // Used for table
  $scope.capitals = [
	{"City": "Montgomery",
	"State": "Alabama"},
	{"City": "Juneau",
	"State": "Alaska"},
	{"City": "Phoenix",
	"State": "Arizona"},
	{"City": "Little Rock",
	"State": "Arkansas"}
  ];
  
 	$scope.courses = jsonObj.courses;
		
	
	
});
