var app1 = angular.module('app1', []);

app1.controller('ctrl1', function($scope) {

	$scope.first = 1;
	$scope.second = 1;

	$scope.updateValue = function() {
		$scope.calculation = $scope.first + ' + ' + $scope.second +
			" = " + (+$scope.first + +$scope.second);
	};
	$scope.updateHypotenuse = function() {
		$scope.hypotenuse = Math.sqrt(($scope.first * $scope.first) + ($scope.second * $scope.second));
	};
});
app1.controller('ctrl2', function($scope) {
	
	var thecourse = ["cs 105","cs 145","cs 116","cs 216"];
	$scope.rancourse = thecourse[Math.floor((Math.random() * 4))];
});

app1.controller('ctrl3', function($scope) {
	
	var thecourse = ["cs 105","cs 145","cs 116","cs 216"];
	$scope.rancourse = thecourse[Math.floor((Math.random() * 4))];
});

app1.controller('ctrl4', function($scope) {
	
	var thecourse = ['cs105','cs145','cs116','cs216','cis255','cis355','cis386','cis311','cs333','cs433']

});


