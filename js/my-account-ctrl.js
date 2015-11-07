app.controller('MyAccountCtrl', function($scope, $http) {
	$scope.user = {
		name: "",
		img: "",
		rating: "",
		level: ""
	}

	$scope.getAccount = function() {
		$http.get("php/my_account.php").then(function(response) {
			$scope.user = response.data;
			console.log($scope.user);
		});
	};

	$scope.getAccount();
});
