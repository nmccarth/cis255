function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
   // alert("woke up!");
}

var app5 = angular.module('app5', []);


app5.controller('userCtrl', function($scope) {

	$scope.user= [{
		fName: "Derek",
		lName: "Banas",
		street: "123 Main St",
		subscribe: "Subscribe",
		delivery: "Email"
	}];

	$scope.findZip = function() {
		var zip = document.getElementById('zip').value;
		if(!/^\d{5}$/.test(zip)) {
			console.log("You didn't enter a valid zip bro");
			return 1;
		}
		var zipObj = [];
		var url = "https://zips.dryan.io/"+zip+".json";
		jQuery.ajax({
			url: url,
			dataType: 'JSON',
			jsonCallback: 'callback',
			type: 'GET',
			success: function (data) {
				zipObj = data;
				$scope.userInfo.city = zipObj.locality;
				jQuery('[name=city]').val(zipObj.locality);				
				$scope.userInfo.state = zipObj.region.name;
				jQuery('[name=state]').val(zipObj.region.name);				
			}
		});

	}

	$scope.saveUser = function(userInfo) {
		if($scope.userForm.$valid) {
			$scope.user.push({
				fName: userInfo.fName, lName: userInfo.lName, street: userInfo.street, subscribe: userInfo.subscribe, delivery: userInfo.delivery
			});
			console.log('User Saved');
		} else {
			console.log('Error : Couldn\'t Save User');
		}
	}

});
